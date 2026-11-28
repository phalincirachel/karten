// ==UserScript==
// @name         Kartei direkt im Reddit-Feed
// @namespace    https://phalincirachel.github.io/karten/
// @version      8.0.1
// @downloadURL  https://phalincirachel.github.io/karten/kartei-reddit.user.js
// @updateURL    https://phalincirachel.github.io/karten/kartei-reddit.user.js
// @description  Karten alle 3 Reddit-Posts, scrollstabil: Änderungen nur weit unterhalb des Sichtfensters.
// @match        https://www.reddit.com/*
// @match        https://reddit.com/*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      commons.wikimedia.org
// @connect      *.wikipedia.org
// @connect      gist.githubusercontent.com
// @require      https://phalincirachel.github.io/karten/media-map.js
// @require      https://phalincirachel.github.io/karten/cards.js
// @require      https://phalincirachel.github.io/karten/cards-editorial.js
// @require      https://phalincirachel.github.io/karten/finnegans-exegese.js
// ==/UserScript==

(() => {
  'use strict';

  const EVERY = 3; // 2: alle zwei Reddit-Posts; 3: alle drei Posts.
  const HOME = 'https://phalincirachel.github.io/karten/';
  const STORAGE = 'kartei-reddit-feedback-v2';
  const raw = Array.isArray(window.KARTEN) ? window.KARTEN : [];
  const cards = raw.filter(c => c && typeof c.title === 'string' && c.title.trim());
  if (!cards.length) {
    console.error('Kartei in Reddit: Die Kartendateien konnten nicht geladen werden.');
    return;
  }

  // Scrollstabilitaet hat Vorrang. Reddit virtualisiert den Feed und laedt
  // Posts nach. Das Skript darf dabei NIE oberhalb oder innerhalb des
  // aktuellen Sichtfensters Layout-Aenderungen ausloesen. Bereits erreichte
  // Einfuegepositionen werden dauerhaft uebersprungen. Verwaiste Einschuebe
  // werden ausschliesslich weit unterhalb des Sichtfensters bereinigt.
  const order = cards.slice();
  let cursor = 0;
  let scanTimer = null;
  let observer;
  let activePath = location.pathname + location.search;
  function createSession() {
    return { ordinals: new Map(), nextOrdinal: 0, slots: new Map(), retired: new Set() };
  }
  let session = createSession();

  function shuffle(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }
  shuffle(order);
  function nextCard() {
    if (cursor >= order.length) { shuffle(order); cursor = 0; }
    return order[cursor++];
  }

  function element(tag, className, text) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (text !== undefined && text !== null) e.textContent = String(text);
    return e;
  }
  function add(parent, tag, className, text) {
    const e = element(tag, className, text);
    parent.append(e);
    return e;
  }
  function hyperlink(parent, label, url, className = '') {
    if (typeof url !== 'string' || !/^https?:\/\//i.test(url)) return null;
    const a = add(parent, 'a', className, label);
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    return a;
  }

  // Commons-Abfragen laufen über Violentmonkey, damit Reddit sie nicht per CSP blockiert.
  function requestJSON(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET', url, timeout: 20000,
        onload: r => {
          try {
            if (r.status < 200 || r.status >= 300) throw Error(`HTTP ${r.status}`);
            resolve(JSON.parse(r.responseText));
          } catch (e) { reject(e); }
        },
        onerror: () => reject(Error('Netzwerkfehler')),
        ontimeout: () => reject(Error('Zeitüberschreitung'))
      });
    });
  }

  function requestText(url) {
    return new Promise((resolve, reject) => {
      GM_xmlhttpRequest({
        method: 'GET', url, timeout: 25000,
        onload: r => r.status >= 200 && r.status < 300
          ? resolve(r.responseText) : reject(Error(`HTTP ${r.status}`)),
        onerror: () => reject(Error('Netzwerkfehler')),
        ontimeout: () => reject(Error('Zeitüberschreitung'))
      });
    });
  }

  const imageCache = new Map();
  async function imageInfo(item) {
    if (item.type === 'image' && item.src) return { src: item.src, href: item.href || item.src };
    if (item.remote?.src) return { src: item.remote.src, href: item.remote.href || item.remote.src };
    const key = item.file ? `file:${item.file}` : `query:${item.query}`;
    if (!key || key === 'query:undefined') throw Error('Bildquelle fehlt');
    if (imageCache.has(key)) return imageCache.get(key);
    const params = new URLSearchParams({
      action: 'query', format: 'json', prop: 'imageinfo', iiprop: 'url', iiurlwidth: '900'
    });
    if (item.file) {
      params.set('titles', item.file.startsWith('File:') ? item.file : `File:${item.file}`);
    } else {
      params.set('generator', 'search');
      params.set('gsrnamespace', '6');
      params.set('gsrlimit', '1');
      params.set('gsrsearch', String(item.query));
    }
    const promise = requestJSON(`https://commons.wikimedia.org/w/api.php?${params}`).then(json => {
      const results = Object.values(json.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
      const entry = results.find(x => x.imageinfo?.[0]);
      if (!entry) throw Error('Kein Bild gefunden');
      return {
        src: entry.imageinfo[0].thumburl || entry.imageinfo[0].url,
        href: entry.imageinfo[0].descriptionurl || 'https://commons.wikimedia.org/'
      };
    });
    imageCache.set(key, promise);
    promise.catch(() => imageCache.delete(key));
    return promise;
  }

  function mediaFigure(container, item) {
    if (!item || typeof item !== 'object') return;
    const wrap = add(container, 'figure', 'media-figure');
    if (item.fit === 'contain') wrap.classList.add('contain');
    if (item.type === 'audio') {
      wrap.classList.add('audio');
      if (item.src) {
        const player = add(wrap, 'audio');
        player.controls = true;
        player.preload = 'none';
        player.src = item.src;
      }
      hyperlink(wrap, item.caption || 'Audio öffnen', item.href || item.src, 'media-link');
      return;
    }
    if (item.type === 'youtube') {
      const id = String(item.id || '');
      if (!/^[\w-]{11}$/.test(id)) { wrap.remove(); return; }
      wrap.classList.add('youtube');
      // Ein echter eingebetteter Player direkt in der Karte, ohne zusätzliche Navigation.
      // Lazy loading spart Ressourcen bei langen Reddit-Feeds.
      const player = add(wrap, 'iframe', 'youtube-player');
      player.src = `https://www.youtube-nocookie.com/embed/${id}?playsinline=1&rel=0`;
      player.title = item.caption || 'YouTube-Videoplayer';
      player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      player.setAttribute('allowfullscreen', '');
      player.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      player.loading = 'lazy';
      const caption = add(wrap, 'figcaption', '', item.caption || 'YouTube-Video');
      hyperlink(caption, 'Falls das Video nicht eingebettet werden darf: auf YouTube öffnen',
        `https://www.youtube.com/watch?v=${id}`, 'youtube-fallback');
      return;
    }
    const link = add(wrap, 'a', 'image-link');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    const img = add(link, 'img');
    img.alt = item.alt || item.caption || '';
    img.loading = 'lazy';
    img.decoding = 'async';
    const caption = item.caption ? add(wrap, 'figcaption', '', item.caption) : null;
    const candidates = [item, ...(item.fallbacks || []).slice(0, 2)];
    let next = 0;
    async function tryNext() {
      if (next >= candidates.length) {
        // Niemals eine bereits eingefuegte Bildflaeche entfernen: Beim
        // spaeten Netzwerkausfall koennte sonst ein gelesener Post springen.
        wrap.classList.add('media-unavailable');
        img.removeAttribute('src');
        img.alt = 'Bild derzeit nicht erreichbar';
        if (caption) caption.textContent = 'Bild derzeit nicht erreichbar';
        return;
      }
      const candidate = candidates[next++];
      try {
        const info = await imageInfo(candidate);
        if (!/^https:\/\//.test(info.src)) throw Error('Ungültige Bildadresse');
        link.href = info.href;
        img.onerror = () => { img.onerror = null; tryNext(); };
        img.src = info.src;
        if (caption && candidate.caption) caption.textContent = candidate.caption;
      } catch (e) { tryNext(); }
    }
    tryNext();
  }

  function mediaSection(parent, card) {
    if (!Array.isArray(card.media) || !card.media.length) return;
    const media = add(parent, 'section', 'media-grid');
    if (card.media.length === 1) media.classList.add('single');
    card.media.forEach(item => mediaFigure(media, item));
  }

  function heading(parent, label) { return add(parent, 'h3', 'subheading', label); }
  function paragraphs(parent, values, className = 'detail-text') {
    const div = add(parent, 'section', className);
    for (const value of values || []) {
      if (typeof value === 'string' && value.trim()) add(div, 'p', '', value);
    }
    if (!div.children.length) div.remove();
  }

  function wikiText(parent, wiki) {
    if (!wiki?.page) return;
    const area = add(parent, 'details', 'wiki');
    add(area, 'summary', 'wiki-summary', 'Wikipedia-Auszug anzeigen');
    const status = add(area, 'p', 'muted', 'Zum Laden aufklappen.');
    const lang = /^[a-z-]{2,12}$/i.test(wiki.language || 'de') ? (wiki.language || 'de') : 'de';
    const params = new URLSearchParams({ action: 'parse', page: wiki.page, prop: 'text', format: 'json', redirects: '1' });
    let started = false;
    area.addEventListener('toggle', () => {
      if (!area.open || started) return;
      started = true;
      status.textContent = 'Wikipedia-Text wird geladen …';
      requestJSON(`https://${lang}.wikipedia.org/w/api.php?${params}`).then(result => {
        if (!area.isConnected) return;
        const html = result.parse?.text?.['*'];
        if (!html) throw Error('Wikipedia antwortet ohne Text');
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const root = doc.querySelector('.mw-parser-output') || doc.body;
        root.querySelectorAll('style,script,sup.reference,.mw-editsection,.coordinates,.navbox,.hatnote,.shortdescription,.metadata,.infobox').forEach(x => x.remove());
        const all = [...root.querySelectorAll('p')].filter(x => x.textContent.trim());
        let chosen = [];
        if (wiki.section) {
          const normalize = x => x.replace(/\s+/g, ' ').trim().toLowerCase();
          const title = [...root.querySelectorAll('h2,h3,h4,h5,h6')].find(x => normalize(x.textContent) === normalize(wiki.section));
          if (title) {
            const level = Number(title.tagName.slice(1));
            const boundary = title.parentElement?.classList.contains('mw-heading') ? title.parentElement : title;
            for (let node = boundary.nextElementSibling; node; node = node.nextElementSibling) {
              const head = node.matches('h2,h3,h4,h5,h6') ? node : node.querySelector?.('h2,h3,h4,h5,h6');
              if (head && Number(head.tagName.slice(1)) <= level) break;
              if (node.matches('p')) chosen.push(node);
              chosen.push(...node.querySelectorAll('p'));
            }
          }
        } else if (Array.isArray(wiki.paragraphs)) {
          chosen = [...new Set([...all.slice(0,1), ...wiki.paragraphs.map(i=>all[i]).filter(Boolean)])];
        } else chosen = all.slice(0, Math.max(1, wiki.count || 2));
        const paragraphs = chosen.filter(x => x.textContent.trim()).map(x => element('p', '', x.textContent.replace(/\s+/g, ' ').trim()));
        if (paragraphs.length) status.replaceWith(...paragraphs);
        else status.textContent = 'Wikipedia-Abschnitt konnte nicht gefunden werden.';
      }).catch(() => {if (status.isConnected) status.textContent = 'Wikipedia-Text konnte nicht geladen werden.';});
    });
    hyperlink(area, 'Wikipedia öffnen', `https://${lang}.wikipedia.org/wiki/${encodeURIComponent(wiki.page).replace(/%2F/g, '/')}`);
  }

  function sourceSection(parent, card) {
    const sources = card.sources || [];
    if (!sources.length) return;
    const wrap = add(parent, 'section', 'sources');
    heading(wrap, 'Quellen');
    const ul = add(wrap, 'ul');
    for (const s of sources) {
      const li = add(ul, 'li');
      if (!hyperlink(li, s.label || s.url, new URL(s.url, HOME).href)) li.remove();
    }
  }

  function remoteTextSection(parent, source, label) {
    if (!source) return;
    const area = add(parent, 'section', 'original');
    heading(area, label || source.label || 'Originaltext');
    if (source.text) {
      add(area, 'blockquote', '', source.text);
    }
    const remote = source.remote;
    if (remote) {
      // Der Originaltext kann von unterschiedlichen Servern stammen.
      // Die verlinkte Quelle bleibt vollständig erreichbar, ohne den Reddit-Tab zu verlassen.
      const url = remote.url || (remote.wikiPage
        ? `https://${remote.wikiLanguage || 'en'}.wikisource.org/wiki/${encodeURIComponent(remote.wikiPage).replace(/%2F/g, '/')}`
        : remote.wikiPages?.[0]
          ? `https://${remote.wikiLanguage || 'en'}.wikisource.org/wiki/${encodeURIComponent(remote.wikiPages[0]).replace(/%2F/g, '/')}`
          : '');
      if (url) hyperlink(area, 'Vollständigen Originaltext in neuem Tab öffnen', url);
    }
    if (source.source) hyperlink(area, 'Digitalisat öffnen', source.source);
  }

  function languageSection(parent, rows) {
    if (!Array.isArray(rows) || !rows.length) return;
    const table = add(parent, 'table', 'language-info');
    for (const row of rows) {
      if (!Array.isArray(row)) continue;
      const tr = add(table, 'tr');
      add(tr, 'th', '', row[0]);
      add(tr, 'td', '', row[1]);
    }
  }

  function vocabSection(parent, vocab) {
    if (!vocab) return;
    const section = add(parent, 'section', 'vocabulary');
    heading(section, 'Bedeutung und Gebrauch');
    if (vocab.pronunciation || vocab.register) add(section, 'p', 'muted', [vocab.pronunciation, vocab.register].filter(Boolean).join(' · '));
    if (vocab.meaning) add(section, 'p', '', vocab.meaning);
    for (const ex of vocab.examples || []) {
      const item = add(section, 'blockquote');
      if (ex.english) add(item, 'p', '', ex.english);
      if (ex.german) add(item, 'p', 'muted', ex.german);
    }
  }

  // Originale Daten und Kommentare aus finnegans-exegese.js.
  // Die Textstellen ab Einheit 13 stammen aus dem Originalvolltext.
  // Jede Folge lädt VOR ihrer Darstellung alle vier Textstellen vollständig.
  let finnegansTextPromise = null;
  const finnegansUnitCache = new Map();
  function finnegansSourceText() {
    const data = window.FINNEGANS_EXEGESE;
    if (!finnegansTextPromise) {
      finnegansTextPromise = requestText(data.page4Source)
        .then(t => t.replace(/\r/g, '')
          .replace(/([A-Za-zÀ-ž])-[ \t]*\n[ \t]*([a-zà-ž])/g, '$1$2')
          .replace(/\s+/g, ' '))
        .catch(e => { finnegansTextPromise = null; throw e; });
    }
    return finnegansTextPromise;
  }
  function finnegansMarker(text, marker, from = 0) {
    const variants = [marker, marker.replace('waz','was'),
      marker.replace('was','waz'),marker.replace('crunch-bracken','crunchbracken')];
    for (const value of variants) {
      const at = text.indexOf(value, from);
      if (at >= 0) return at;
    }
    return -1;
  }
  async function finnegansUnitText(number) {
    if (finnegansUnitCache.has(number)) return finnegansUnitCache.get(number);
    const data = window.FINNEGANS_EXEGESE;
    const unit = data.units[number];
    const promise = (async () => {
      if (!unit.remoteRange) return unit.text;
      const text = await finnegansSourceText();
      const start = finnegansMarker(text, unit.remoteRange[0]);
      const end = start < 0 ? -1 : finnegansMarker(text, unit.remoteRange[1], start + 1);
      if (start < 0 || end <= start || end - start > 6000)
        throw Error('Die Textstelle wurde in der Quelle nicht gefunden.');
      return text.slice(start, end).trim();
    })();
    finnegansUnitCache.set(number, promise);
    promise.catch(() => finnegansUnitCache.delete(number));
    return promise;
  }
  // Ein kleiner HTML-Filter für die Hervorhebungen (<b>, <i> usw.) in
  // den eigenen Kommentaren. Sämtliche anderen HTML-Elemente werden entfernt.
  function formattedNotes(parent, html) {
    const template = document.createElement('template');
    template.innerHTML = String(html || '');
    const safe = new Set(['B','STRONG','I','EM','P','BR','U','SUP','SUB']);
    function scrub(node) {
      for (const child of [...node.childNodes]) {
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (!safe.has(child.tagName)) {
            child.replaceWith(document.createTextNode(child.textContent || ''));
          } else {
            for (const attr of [...child.attributes]) child.removeAttribute(attr.name);
            scrub(child);
          }
        } else if (child.nodeType !== Node.TEXT_NODE) child.remove();
      }
    }
    scrub(template.content);
    parent.append(template.content);
  }
  function finnegansPanel(parent, title, html) {
    const box = add(parent, 'section', 'fw-panel');
    add(box, 'h4', 'fw-label', title);
    const content = add(box, 'div', 'fw-panel-body');
    formattedNotes(content, html);
    return box;
  }
  // Finnegans Wake: browser-native <details> avoids JS click races. The explanation
  // is placed IMMEDIATELY after its own passage, never below a group of four.
  // Opening/closing does not rebuild any other portion of the card or Reddit feed.
  function finnegansSection(parent, card) {
    const area = add(parent, 'section', 'fw-wrap');
    const data = window.FINNEGANS_EXEGESE;
    if (!data?.units?.length) {
      add(area, 'p', 'muted', 'Die Exegese-Daten konnten nicht geladen werden.');
      return;
    }
    const groupCount = Math.ceil(data.units.length / 4);
    const title = add(area, 'h3', 'fw-group-title');
    const howto = add(area, 'p', 'fw-howto',
      'Textstelle antippen: Die Deutung öffnet sich direkt unter dem Text. Erneutes Antippen schließt sie.');
    const list = add(area, 'div', 'fw-units');
    const nav = add(area, 'nav', 'fw-nav');

    // Eine Folge erhält erst dann sichtbare Textstellen, wenn alle vier
    // vollständig aus der Quelle geladen sind. Fehler zeigen einen
    // Wiederholen-Knopf; Auslassungspunkte/verkürzte Anfänge sind ausgeschlossen.
    function buildUnit(unit, number, completeText) {
      const details = add(list, 'details', 'fw-entry');
      const summary = add(details, 'summary', 'fw-unit');
      add(summary, 'span', 'fw-unit-number', `Einheit ${number + 1}`);
      add(summary, 'span', 'fw-unit-body', completeText);
      add(summary, 'span', 'fw-expand', 'Erläuterungen öffnen');
      const analysis = add(details, 'div', 'fw-analysis');
      finnegansPanel(analysis, 'Sinngemäße Fassung · heutiges Englisch', unit.en);
      finnegansPanel(analysis, 'Zusammenhängende Lesart', unit.boxes?.[0]?.[1]);
      const notes = add(analysis, 'section', 'fw-panel');
      add(notes, 'h4', 'fw-label', 'Wörter und Querverweise');
      const boxes = (unit.boxes || []).slice(1);
      if (!boxes.length) add(notes, 'p', 'muted', 'Keine zusätzlichen Wortanmerkungen.');
      for (const item of boxes) {
        if (!Array.isArray(item)) continue;
        const p = add(notes, 'div', 'fw-panel-body');
        if (item[0]) add(p, 'h5', 'fw-note-title', item[0]);
        formattedNotes(p, item[1]);
      }
      if (unit.source) hyperlink(notes, 'Externe Anmerkungen öffnen', unit.source, 'fw-source-link');

      if (unit.contextUnits) {
        const context = add(analysis, 'details', 'fw-context');
        add(context, 'summary', '', 'Zusammenhang des ganzen Satzes');
        const contextContent = add(context, 'div');
        // Der Originalsatz wird beim ersten Öffnen automatisch geladen und
        // an erster Stelle dargestellt. Dafür ist kein zweiter Klick nötig.
        const original = add(contextContent, 'p', 'muted', 'Vollständiger Originalsatz wird geladen …');
        finnegansPanel(contextContent, 'Ganzer Satz · heutiges Englisch', unit.contextEnglish);
        finnegansPanel(contextContent, 'Ganzer Satz · Lesart', unit.contextReading);
        let pending = false;
        let completed = false;
        context.addEventListener('toggle', () => {
          if (!context.open || pending || completed) return;
          const [from, to] = unit.contextUnits;
          if (!Number.isInteger(from) || !Number.isInteger(to) || from < 1 ||
              to < from || to > data.units.length || to - from > 50) {
            original.textContent = 'Der Satzbereich ist ungültig.';
            return;
          }
          pending = true;
          original.textContent = 'Vollständiger Originalsatz wird geladen …';
          Promise.all(Array.from({length: to - from + 1}, (_, i) => finnegansUnitText(from - 1 + i)))
            .then(parts => {
              if (!original.isConnected) return;
              if (parts.some(part => !part || !part.trim())) throw Error('Text unvollständig');
              original.replaceWith(element('blockquote', 'fw-context-original', parts.join(' ')));
              completed = true;
            })
            .catch(() => {
              if (original.isConnected) original.textContent =
                'Der vollständige Originalsatz ist derzeit nicht erreichbar. Erneut öffnen, um den Abruf zu wiederholen.';
            })
            .finally(() => { pending = false; });
        });
      }
      details.addEventListener('toggle', () => {
        const exp = summary.querySelector('.fw-expand');
        if (exp) exp.textContent = details.open ? 'Erläuterungen schließen' : 'Erläuterungen öffnen';
      });
    }

    let displayToken = 0;
    async function showGroup(index, navigate = false) {
      if (!Number.isInteger(index) || index < 0 || index >= groupCount) return;
      const myToken = ++displayToken;
      title.textContent = `Finnegans Wake · Folge ${index + 1}`;
      // Die bisherige Folge wird beim Blättern durch eine eindeutige
      // Ladeanzeige ersetzt. Keine bloßen Wortanfänge zeigen.
      list.replaceChildren(element('p', 'muted fw-loading', 'Die vollständigen Originaltexte werden geladen …'));
      nav.replaceChildren();
      if (index > 0) {
        const previous = add(nav, 'button', '', `← Folge ${index}`);
        previous.type = 'button';
        previous.addEventListener('click', () => showGroup(index - 1, true));
      }
      if (index < groupCount - 1) {
        const next = add(nav, 'button', '', `Folge ${index + 2} →`);
        next.type = 'button';
        next.addEventListener('click', () => showGroup(index + 1, true));
      }
      if (navigate && title.isConnected) title.scrollIntoView({behavior:'auto', block:'start'});
      const from = index * 4;
      const group = data.units.slice(from, from + 4);
      try {
        const texts = await Promise.all(group.map((unit, offset) => finnegansUnitText(from + offset)));
        if (myToken !== displayToken || !area.isConnected) return;
        if (texts.length !== group.length || texts.some(text => typeof text !== 'string' || !text.trim())) {
          throw Error('Die Quelle lieferte unvollständige Textstellen.');
        }
        list.replaceChildren();
        group.forEach((unit, offset) => buildUnit(unit, from + offset, texts[offset]));
      } catch (error) {
        if (myToken !== displayToken || !area.isConnected) return;
        list.replaceChildren();
        add(list, 'p', 'muted', 'Der vollständige Originaltext konnte nicht geladen werden.');
        const retry = add(list, 'button', 'fw-retry', 'Erneut laden');
        retry.type = 'button';
        retry.addEventListener('click', () => showGroup(index));
        console.warn('Kartei in Reddit: Finnegans-Wake-Text konnte nicht geladen werden:', error);
      }
    }
    showGroup(Number.isInteger(card.finnegansGroup) ? card.finnegansGroup : 0);
  }

  function feedbackRead() {
    try { const stored = GM_getValue(STORAGE, []); return Array.isArray(stored) ? stored : []; }
    catch { return []; }
  }
  function feedbackWrite(entry) {
    const entries = feedbackRead();
    entries.push(entry);
    GM_setValue(STORAGE, entries);
  }
  function feedbackForm(parent, card, vote) {
    parent.querySelector('.feedback-form')?.remove();
    const panel = add(parent, 'form', 'feedback-form');
    heading(panel, vote === 'up' ? 'Positive Bewertung' : 'Kritik an der Karte');
    const options = [
      'Nicht kreativ genug', 'Ungenau beschrieben', 'Sprachlich schlecht beschrieben',
      'Schlechtes Bild', 'Zu wenig Kontext', 'Auswahl zu bekannt oder naheliegend',
      'Quelle, Link oder Medium funktioniert nicht'
    ];
    if (vote === 'down') {
      for (const reason of options) {
        const label = add(panel, 'label', 'checkbox-row');
        const input = add(label, 'input');
        input.type = 'checkbox';
        input.value = reason;
        add(label, 'span', '', reason);
      }
    }
    const note = add(panel, 'textarea');
    note.placeholder = vote === 'up' ? 'Was sollte so bleiben?' : 'Weitere Kritik';
    note.rows = 3;
    const actions = add(panel, 'div', 'form-actions');
    const save = add(actions, 'button', 'primary', 'Im Browser speichern');
    save.type = 'submit';
    const cancel = add(actions, 'button', '', 'Abbrechen');
    cancel.type = 'button';
    cancel.addEventListener('click', () => panel.remove());
    panel.addEventListener('submit', e => {
      e.preventDefault();
      try {
        feedbackWrite({
          title: card.title, category: card.category, summary: card.summary || '',
          sources: (card.sources || []).map(s => s.url), vote,
          reasons: [...panel.querySelectorAll('input:checked')].map(input => input.value),
          note: note.value.trim(), createdAt: new Date().toISOString()
        });
        panel.replaceChildren(element('p', 'success', 'Bewertung in Violentmonkey gespeichert.'));
      } catch (err) {
        panel.append(element('p', 'muted', 'Speichern fehlgeschlagen.'));
      }
    });
  }
  function ratingSection(parent, card) {
    const row = add(parent, 'section', 'rating');
    add(row, 'span', 'rating-category', card.category || 'Kartei');
    const up = add(row, 'button', 'vote', '▲');
    up.type = 'button';
    up.setAttribute('aria-label', 'Karte positiv bewerten');
    up.addEventListener('click', () => feedbackForm(parent, card, 'up'));
    const down = add(row, 'button', 'vote', '▼');
    down.type = 'button';
    down.setAttribute('aria-label', 'Karte negativ bewerten');
    down.addEventListener('click', () => feedbackForm(parent, card, 'down'));
  }

  function cardView(card) {
    const host = element('div', 'kartei-reddit-einschub');
    host.style.cssText = 'display:block;width:100%;min-width:0;box-sizing:border-box;margin:12px 0 18px;isolation:isolate;';
    const shadow = host.attachShadow({ mode: 'open' });
    // Only STOP propagation to Reddit's delegated click handlers; NEVER
    // preventDefault on the host. The old host-wide preventDefault cancelled
    // native <details>, labels and other browser controls on Android.
    // No capture listener: target buttons and <summary> must run normally first.
    for (const type of ['click', 'auxclick', 'dblclick', 'pointerdown', 'pointerup',
      'touchstart', 'touchend']) {
      host.addEventListener(type, event => event.stopPropagation(), { passive: true });
    }
    const style = element('style');
    style.textContent = `
      :host{display:block; color-scheme:light; touch-action:auto;}
      *,*:before,*:after{box-sizing:border-box}
      .card{color:#191817;background:#fffdf9;border:1px solid #d7d0c5;border-radius:5px;overflow:hidden;
        font:16px/1.55 Georgia,serif;overflow-wrap:anywhere;box-shadow:0 1px 3px #00000010}
      .bar{border-bottom:1px solid #ded7ce;background:#f4f0e8;padding:10px 15px;
        color:#8b2f28;font:600 12px/1.3 system-ui,sans-serif;letter-spacing:.02em}
      .bar a{float:right;font:12px system-ui,sans-serif}
      .inner{padding:15px 17px 17px}
      .category,.rating-category{color:#8b2f28;text-transform:uppercase;letter-spacing:.04em;font:600 11px/1.4 system-ui,sans-serif}
      h2{font:600 clamp(23px,5vw,32px)/1.2 Georgia,serif;margin:6px 0 10px}
      h2.quote{font-weight:400;font-style:italic}
      p{margin:0 0 13px;white-space:pre-wrap}
      .summary{color:#494641;font:15px/1.55 system-ui,sans-serif;margin:0 0 12px}
      .byline{font:13px/1.5 system-ui,sans-serif;color:#69645d;margin-bottom:14px}
      .media-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px;margin:12px 0 17px}
      .media-grid.single{grid-template-columns:1fr}
      figure{margin:0;min-width:0;position:relative;background:#eee9e1}
      .image-link{display:block;position:relative;min-height:80px;color:inherit}
      img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}
      .single img{aspect-ratio:16/10}
      .contain img{object-fit:contain;aspect-ratio:4/3;height:auto}
      .media-grid.single .contain img{aspect-ratio:16/10}
      .media-unavailable .image-link{background:#eee9e1}
      .media-unavailable img{visibility:hidden}
      figcaption{color:#69645d;font:11px/1.4 system-ui,sans-serif;padding:5px 6px 7px;
        height:42px;overflow:hidden}
      .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;
        padding:11px 15px;color:white;background:#000b;font:21px system-ui,sans-serif}
      .youtube{grid-column:1/-1;background:#191919}
      .youtube figcaption{color:#e5e5e5;background:#2a2828;padding:8px 10px}
      .youtube-fallback{display:block;color:#f2d6d1;margin-top:4px}
      .youtube-player{width:100%;aspect-ratio:16/9;display:block;border:0;background:#000}
      .audio{grid-column:1/-1;padding:9px;background:#f4f0e8}
      audio{display:block;width:100%}
      .media-link{display:block;margin-top:6px;font:12px system-ui,sans-serif}
      .detail-text p{font-size:16px;line-height:1.65}
      .subheading{color:#252321;font:600 14px/1.5 system-ui,sans-serif;margin:18px 0 9px}
      .original{background:#f4f0e8;border-left:3px solid #8b2f28;padding:10px 15px;margin:13px 0}
      .original .subheading{margin-top:0}
      blockquote{border-left:2px solid #b9a89b;padding-left:12px;margin:10px 0;white-space:pre-wrap}
      ul,ol{padding-left:23px;margin:8px 0 16px}
      li{margin-bottom:7px}
      a{color:#74332d;overflow-wrap:anywhere}
      .language-info{border-collapse:collapse;width:100%;font:13px/1.5 system-ui,sans-serif;margin:10px 0}
      .language-info th,.language-info td{border-bottom:1px solid #d7d0c5;padding:7px;text-align:left;vertical-align:top}
      .muted{color:#69645d;font:13px/1.5 system-ui,sans-serif}
      .sources{border-top:1px solid #e5ddd3;padding-top:4px;margin-top:18px}
      .rating{display:flex;align-items:center;gap:8px;border-top:1px solid #d7d0c5;padding:10px 16px}
      .rating-category{margin-right:auto}
      button{cursor:pointer;border:1px solid #8f877d;background:#fffdf9;color:#282522;
        border-radius:3px;padding:7px 11px;font:14px system-ui,sans-serif}
      button:focus-visible,a:focus-visible{outline:2px solid #8b2f28;outline-offset:2px}
      .vote{font-size:18px;width:39px;height:37px;padding:4px}
      .feedback-form{border-top:1px solid #ddd4c9;padding:12px 17px 16px;background:#f7f3ec}
      .checkbox-row{display:flex;align-items:start;gap:9px;margin:8px 0;font:13px/1.4 system-ui,sans-serif}
      .checkbox-row input{margin-top:3px}
      textarea{width:100%;padding:9px;border:1px solid #aaa298;border-radius:3px;background:white;
        font:14px/1.4 system-ui,sans-serif;resize:vertical}
      .form-actions{display:flex;gap:8px;margin-top:9px}
      .primary{background:#252321;color:#fff}
      .fw-wrap{margin:14px -4px 18px;padding:14px 10px 16px;background:#f1e7d4;color:#2b2620;border:1px solid #d8c7a4;border-radius:3px}
      .fw-group-title{margin:0 0 9px;font:600 21px/1.25 Georgia,serif;scroll-margin-top:70px}
      .fw-howto{margin:0 0 14px;padding:9px 0;border-top:1px solid #d8c7a4;border-bottom:1px solid #d8c7a4;color:#5c5346;font:12px/1.5 system-ui,sans-serif}
      .fw-unit{display:block;width:100%;margin:0 0 8px;border:0;border-left:3px solid transparent;background:transparent;text-align:left;color:#2b2620;padding:8px 10px;font:17px/1.6 Georgia,serif;white-space:normal}
      .fw-unit[aria-pressed=true]{background:#e8d9ba;border-left-color:#8a3324}
      .fw-unit-number{display:block;margin-bottom:3px;color:#8a3324;font:700 10px/1.4 system-ui,sans-serif;text-transform:uppercase;letter-spacing:.1em}
      .fw-unit-body{white-space:pre-wrap}
      .fw-analysis[hidden]{display:none}
      .fw-analysis{border-top:1px solid #d8c7a4;margin-top:15px;padding-top:12px}
      .fw-selected{border:1px solid #d8c7a4;border-left:3px solid #8a3324;background:#e9dcc0;padding:12px;margin:0 0 13px;white-space:pre-wrap}
      .fw-panels{display:grid;gap:10px}
      .fw-panel{border:1px solid #d8c7a4;border-left:3px solid #8a3324;padding:12px 13px;background:#f9f0df}
      .fw-panel-body{font:15px/1.6 Georgia,serif}
      .fw-panel-body p{margin:0 0 9px}
      .fw-panel-body p:last-child{margin-bottom:0}
      .fw-label{margin:0 0 8px;color:#8a3324;font:700 11px/1.4 system-ui,sans-serif;letter-spacing:.04em}
      .fw-context{margin:16px 0;padding-top:12px;border-top:1px solid #d8c7a4}
      .fw-context summary{cursor:pointer;color:#7a3026;font:14px/1.5 Georgia,serif}
      .fw-context-original{margin:11px 0;white-space:pre-wrap}
      .fw-context .fw-panel{margin-top:10px}
      .fw-source-link{display:block;margin-top:8px;font:12px system-ui,sans-serif}
      .fw-nav{display:flex;justify-content:space-between;gap:10px;margin-top:20px}
      .fw-nav button:last-child{margin-left:auto}
      .fw-entry{border:1px solid #cfba92;border-radius:4px;margin:0 0 10px;background:#f8f0df;overflow:hidden}
      .fw-entry[open]{border-color:#a25e45}
      .fw-entry > summary.fw-unit{display:block;margin:0;width:100%;padding:13px 14px 11px;
        border-left:4px solid transparent;cursor:pointer;list-style:none;touch-action:manipulation}
      .fw-entry > summary.fw-unit::-webkit-details-marker{display:none}
      .fw-entry[open] > summary.fw-unit{background:#eddfc2;border-left-color:#8a3324}
      .fw-expand{display:block;font:600 12px/1.5 system-ui,sans-serif;color:#8a3324;margin-top:9px}
      .fw-entry > .fw-analysis{margin:0;padding:12px 13px 15px;border-top:1px solid #d8c7a4;background:#f7edda}
      .fw-entry .fw-panel{margin:0 0 10px;padding:11px 12px}
      .fw-entry .fw-note-title{font:600 12px/1.4 system-ui,sans-serif;margin:8px 0 4px}
      .fw-entry .fw-context{margin:12px 0 0}
      .fw-nav button{min-height:42px}
      .wiki{margin-top:14px;border-top:1px solid #d7d0c5;padding-top:9px}
      .wiki-summary{font:600 14px/1.5 system-ui,sans-serif;color:#74332d;cursor:pointer;padding:8px 0}
      .success{color:#215b30;font:13px system-ui,sans-serif}
    `;
    const box = element('article', 'card');
    const bar = add(box, 'div', 'bar', 'KARTEI · Eigene Karte');
    // Eine optionale Verbindung zur Originalseite, die den Reddit-Feed unberührt lässt.
    const link = hyperlink(bar, 'Originalseite', HOME, 'original-link');
    if (link) link.title = 'Öffnet die Kartei in einem neuen Tab';
    const body = add(box, 'div', 'inner');
    add(body, 'span', 'category', card.category || 'Kartei');
    const h2 = add(body, 'h2', card.kind === 'quote' ? 'quote' : '', card.title);
    if (card.summary) add(body, 'p', 'summary', card.summary);
    if (card.byline) add(body, 'p', 'byline', card.byline);
    mediaSection(body, card);
    if (Number.isInteger(card.finnegansGroup)) finnegansSection(body, card);
    languageSection(body, card.languageInfo);
    remoteTextSection(body, card.original);
    if (Array.isArray(card.detail)) paragraphs(body, card.detail);
    vocabSection(body, card.vocabulary);
    wikiText(body, card.wiki);
    remoteTextSection(body, card.writingSource, 'Originaltext');
    if (Array.isArray(card.works) && card.works.length) {
      const section = add(body, 'section');
      heading(section, 'Werke');
      const list = add(section, 'ol');
      card.works.forEach(x => add(list, 'li', '', x));
    }
    if (card.aphorismCollection?.url) hyperlink(body, 'Weitere Aphorismen', card.aphorismCollection.url);
    sourceSection(body, card);
    const searchQuery = String(card.searchTerm || card.title).replace(/\s+/g, ' ').trim();
    hyperlink(body, 'Bei Google weitersuchen', `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`);
    ratingSection(box, card);
    shadow.append(style, box);
    return host;
  }

  // Ausschließlich den eigentlichen Reddit-Feed auswerten. Version 2 zählte
  // auch shreddit-posts in anderen Bereichen des <main> und erzeugte so
  // scheinbar zu kurze Intervalle auf manchen mobilen Layouts.
  function visible(el) {
    if (!el || el.closest('[hidden], [aria-hidden="true"], .kartei-reddit-einschub')) return false;
    const box = el.getBoundingClientRect();
    if (box.width < 15 || box.height < 15) return false;
    const css = getComputedStyle(el);
    return css.display !== 'none' && css.visibility !== 'hidden';
  }
  function feedRows(feed) {
    const candidates = feed.querySelectorAll('article[data-post-id], shreddit-post');
    const seenAnchors = new Set(), seenIDs = new Set(), rows = [];
    for (const candidate of candidates) {
      if (feed.tagName === 'SHREDDIT-FEED' && candidate.closest('shreddit-feed') !== feed) continue;
      const post = candidate.matches('shreddit-post') ? candidate : candidate.querySelector('shreddit-post');
      if (!post) continue;
      const article = post.closest('article[data-post-id]');
      const tracker = post.closest('faceplate-tracker[source="post"]');
      // Den äußersten bekannten Einzelbeitrags-Rahmen wählen, damit das Einfügen
      // weder Buttons noch andere Bestandteile eines Reddit-Beitrags zerlegt.
      let anchor = article || tracker || post;
      if (tracker && article && tracker.contains(article)) anchor = tracker;
      else if (tracker && article && article.contains(tracker)) anchor = article;
      if (!visible(anchor) || !anchor.parentNode) continue;
      const id = article?.getAttribute('data-post-id') || post.getAttribute('post-id') || post.id;
      if (seenAnchors.has(anchor) || (id && seenIDs.has(id))) continue;
      seenAnchors.add(anchor);
      if (id) seenIDs.add(id);
      rows.push({anchor, id});
    }
    return rows;
  }
  function chooseFeed() {
    const feeds = [...document.querySelectorAll('main shreddit-feed, shreddit-feed')]
      .filter(feed => feed.isConnected);
    let choice = null;
    let rows = [];
    for (const feed of feeds) {
      const found = feedRows(feed);
      if (found.length > rows.length) { choice = feed; rows = found; }
    }
    if (!choice) {
      const main = document.querySelector('main');
      if (main) { choice = main; rows = feedRows(main); }
    }
    return { feed: choice, rows };
  }
  // Der Schluessel ist die stabile Reddit-Post-ID. Falls Reddit eine Ansicht
  // ohne ID ausliefert, ist der konkrete DOM-Knoten die Ausweichidentitaet.
  function keyForRow(row) {
    return row.id ? `post:${row.id}` : row.anchor;
  }

  // Die visuelle Bildschirmgrenze auf Firefox fuer Android, inklusive
  // eingeblendeter Browserleisten. Die ganze weitere Bildschirmhoehe dient
  // als Reserve: eine Karte wird VOR dem Eintreffen des Lesers eingefuegt.
  function safeLine() {
    const viewport = window.visualViewport;
    const top = viewport ? viewport.offsetTop : 0;
    const height = viewport ? viewport.height : window.innerHeight;
    return top + height + Math.max(360, height);
  }
  function safeToInsertAfter(anchor) {
    if (!anchor?.isConnected || !anchor.parentElement) return false;
    const rect = anchor.getBoundingClientRect();
    return rect.width >= 15 && rect.bottom > safeLine();
  }
  function safeToChange(host) {
    if (!host || !host.isConnected) return true;
    // Nur dann entfernen/umhaengen, wenn der gesamte Einschub noch
    // weit UNTER dem sichtbaren Bereich beginnt. Oberhalb bleibt er stehen.
    return host.getBoundingClientRect().top > safeLine();
  }
  // Die erste Finnegans-Folge vor dem Einfuegen vollstaendig laden.
  // So kann der asynchrone Wechsel von 'Laedt...' zu langem Volltext
  // spaeter keine fremden Beitraege nach unten druecken.
  function prepareCard(card) {
    if (!Number.isInteger(card.finnegansGroup) ||
        !window.FINNEGANS_EXEGESE?.units?.length) return Promise.resolve();
    const from = card.finnegansGroup * 4;
    const count = window.FINNEGANS_EXEGESE.units.slice(from, from + 4).length;
    return Promise.all(Array.from({length: count}, (_, i) =>
      finnegansUnitText(from + i))).then(() => {});
  }
  function scan() {
    const path = location.pathname + location.search;
    if (path !== activePath) {
      // Bei einer echten Navigation verschwindet der alte Feed ohnehin.
      activePath = path;
      document.querySelectorAll('.kartei-reddit-einschub').forEach(node => node.remove());
      session = createSession();
    }
    if (/\/comments\//.test(location.pathname)) return;

    const { feed, rows } = chooseFeed();
    const present = new Map();
    const ordered = [];
    for (const row of rows) {
      const key = keyForRow(row);
      if (present.has(key)) continue;
      present.set(key, row);
      ordered.push({ ...row, key });
      if (!session.ordinals.has(key)) session.ordinals.set(key, ++session.nextOrdinal);
    }

    // Verwaiste oder falsch platzierte Karten nur im unsichtbaren
    // Zukunftsbereich korrigieren. Im/ueber dem Sichtfenster erfolgt
    // ABSOLUT KEINE Aenderung des Feeds durch dieses Skript.
    for (const [key, slot] of session.slots) {
      if (present.has(key)) continue;
      if (slot.pending) {
        session.slots.delete(key);
        session.retired.add(key);
      } else if (safeToChange(slot.host)) {
        slot.host?.remove();
        session.slots.delete(key);
        session.retired.add(key);
      }
    }
    if (!feed || !ordered.length) return;

    // Stabile Zaehlnummern erhalten das Dreierintervall, selbst wenn Reddit
    // alte Post-Knoten recycliert. Umbenummerungen alter Einschuebe entfallen.
    const wanted = new Set();
    let previousIndex = -Infinity;
    for (let index = 0; index < ordered.length; index++) {
      const row = ordered[index];
      const ordinal = session.ordinals.get(row.key);
      if (ordinal % EVERY !== 0 || index - previousIndex < EVERY) continue;
      previousIndex = index;
      wanted.add(row.key);
    }

    // Falls Reddit Beitraege zwischen zwei Karten geloescht hat, erfolgt
    // eine eventuelle Bereinigung ebenfalls ausschliesslich weit unten.
    for (const [key, slot] of session.slots) {
      if (wanted.has(key) || !present.has(key) || slot.pending) continue;
      if (safeToChange(slot.host)) {
        slot.host?.remove();
        session.slots.delete(key);
        session.retired.add(key);
      }
    }

    const positions = new Map(ordered.map((row, index) => [row.key, index]));
    for (const row of ordered) {
      if (!wanted.has(row.key) || session.retired.has(row.key)) continue;
      let slot = session.slots.get(row.key);
      if (slot?.pending) continue;
      if (slot?.host) {
        if (slot.host.previousElementSibling !== row.anchor ||
            slot.host.parentElement !== row.anchor.parentElement) {
          // Bestehende Karte nur bewegen, wenn Quelle UND Ziel weit unter
          // dem sichtbaren Bereich liegen. Sonst den Zustand erhalten.
          if (safeToChange(slot.host) && safeToInsertAfter(row.anchor)) {
            row.anchor.after(slot.host);
            slot.anchor = row.anchor;
          }
        }
        continue;
      }

      // Direkt gelesene oder bereits passierte Stellen NIE nachtraeglich
      // belegen. Auch bei spaeterem Zurueckscrollen bleibt diese Entscheidung.
      if (!safeToInsertAfter(row.anchor)) {
        session.retired.add(row.key);
        continue;
      }

      // Kein neuer Einschub innerhalb von zwei Reddit-Posts um eine bereits
      // vorhandene Karte (wichtig bei virtuellen Listen und Post-Ersetzungen).
      const index = positions.get(row.key);
      let adjacent = false;
      for (const [key, other] of session.slots) {
        if (!other.host?.isConnected || !positions.has(key)) continue;
        if (Math.abs(positions.get(key) - index) < EVERY) { adjacent = true; break; }
      }
      if (adjacent) { session.retired.add(row.key); continue; }

      const targetSession = session;
      slot = { host: null, anchor: row.anchor, pending: true, card: nextCard() };
      session.slots.set(row.key, slot);
      prepareCard(slot.card).then(() => {
        if (session !== targetSession || targetSession.slots.get(row.key) !== slot) return;
        slot.pending = false;
        // Wenn der Nutzer inzwischen dorthin gescrollt hat: Platz auslassen.
        // Das gilt selbst bei langsamem Nachladen und animiertem Scrollen.
        const fresh = chooseFeed().rows.find(r => keyForRow(r) === row.key);
        if (!fresh || !safeToInsertAfter(fresh.anchor)) {
          targetSession.slots.delete(row.key);
          targetSession.retired.add(row.key);
          return;
        }
        // Noch einmal abgleichen, falls waehrend des Ladevorgangs eine
        // andere Karte in der Naehe entstand oder Reddit Posts recycelt hat.
        const currentRows = chooseFeed().rows;
        const currentIndex = currentRows.findIndex(r => keyForRow(r) === row.key);
        const tooClose = currentRows.some((r, i) =>
          i !== currentIndex && Math.abs(i - currentIndex) < EVERY &&
          !!targetSession.slots.get(keyForRow(r))?.host?.isConnected);
        if (currentIndex < 0 || tooClose) {
          targetSession.slots.delete(row.key);
          targetSession.retired.add(row.key);
          return;
        }
        const sibling = fresh.anchor.nextElementSibling;
        if (sibling?.classList.contains('kartei-reddit-einschub')) {
          targetSession.slots.delete(row.key);
          targetSession.retired.add(row.key);
          return;
        }
        slot.host = cardView(slot.card);
        slot.anchor = fresh.anchor;
        fresh.anchor.after(slot.host);
      }).catch(err => {
        console.warn('Kartei: Einschub uebersprungen:', err);
        if (targetSession.slots.get(row.key) === slot) {
          targetSession.slots.delete(row.key);
          targetSession.retired.add(row.key);
        }
      });
    }

    // Einfuegungen ruecken nie in den sichtbaren Bereich. Veraltete Knoten
    // oberhalb des Sichtfensters bleiben bis zu einem sicheren Zeitpunkt
    // bestehen; ein sofortiges Entfernen waere wieder ein Layout-Sprung.
    const valid = new Set([...session.slots.values()].map(slot => slot.host).filter(Boolean));
    document.querySelectorAll('.kartei-reddit-einschub').forEach(host => {
      if (!valid.has(host) && safeToChange(host)) host.remove();
    });

    if (session.ordinals.size > 6000) {
      for (const key of session.ordinals.keys()) {
        if (session.ordinals.size <= 3000) break;
        if (!present.has(key) && !session.slots.has(key)) session.ordinals.delete(key);
      }
    }
    if (session.retired.size > 8000) {
      for (const key of session.retired) {
        if (session.retired.size <= 4000) break;
        if (!present.has(key)) session.retired.delete(key);
      }
    }
  }
  function scheduleScan() {
    if (scanTimer !== null) return;
    scanTimer = setTimeout(() => { scanTimer = null; scan(); }, 175);
  }
  scan();
  // Observe only changes that actually add post rows or a feed. Expanding a
  // card, loading a video, or changing its text must never trigger feed scans.
  function addsRedditPosts(node) {
    if (node.nodeType !== 1 || node.classList?.contains('kartei-reddit-einschub')) return false;
    return node.matches('shreddit-feed, shreddit-post, article[data-post-id], faceplate-tracker[source="post"]') ||
      !!node.querySelector('shreddit-feed, shreddit-post, article[data-post-id]');
  }
  observer = new MutationObserver(changes => {
    if (changes.some(change => change.type === 'attributes' ||
        [...change.addedNodes, ...change.removedNodes].some(addsRedditPosts))) scheduleScan();
  });
  observer.observe(document.body, {
    childList: true, subtree: true, attributes: true,
    attributeFilter: ['post-id', 'data-post-id']
  });
  window.addEventListener('pageshow', scheduleScan);
  window.addEventListener('popstate', scheduleScan);
})();
