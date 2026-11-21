// These public script names are also the @require URLs in Kartei direkt im Reddit-Feed.
(() => {
  "use strict";
  const isReddit = /^(www\.)?reddit\.com$/.test(location.hostname);
  const quizCategory = "Akkord-Mystery";
  const videoCategory = "Volksmusikstile der Welt";
  const quizSource = "https://phalincirachel.github.io/karten/akkord-mystery-demo.html";
  const videos = window.KARTEN_UNESCO_VIDEOS.map(([id, title, url]) => ({
    category: videoCategory, kind: "unesco-video", title, searchTerm: title,
    media: [{type: "youtube", id, caption: title}], detail: [],
    sources: [{label: "UNESCO", url}]
  }));

  function quizCard() {
    return {category: quizCategory, kind: "harmony-quiz", title: quizCategory,
      detail: [], media: [], searchTerm: "vierstimmige Akkordfolge Dur Moll Umkehrungen",
      sources: [{label: "Akkord-Mystery", url: quizSource}]};
  }

  function shuffle(values, random = Math.random) {
    const items = values.slice();
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }

  // A seed and a cursor suffice to resume a shuffled deck after a tab reload.
  function deck(size, name) {
    const key = "karten.music.deck." + name;
    let state, order;
    try { state = JSON.parse(sessionStorage.getItem(key)); } catch {}
    function reset(last) {
      state = {size, seed: Math.floor(Math.random() * 0x100000000), cursor: 0, last};
    }
    if (state?.size !== size || !Number.isInteger(state.seed) || !Number.isInteger(state.cursor) ||
        state.cursor < 0 || state.cursor > size) reset(-1);
    function build() {
      let seed = state.seed >>> 0;
      order = shuffle(Array.from({length: size}, (_, i) => i), () => {
        seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
        return seed / 0x100000000;
      });
      if (size > 1 && order[0] === state.last) [order[0], order[1]] = [order[1], order[0]];
    }
    build();
    return () => {
      if (state.cursor === size) { reset(order[size - 1]); build(); }
      const drawn = order[state.cursor++];
      try { sessionStorage.setItem(key, JSON.stringify(state)); } catch {}
      return drawn;
    };
  }

  const nextQuizId = deck(66 * 66, "quiz-v1");
  const nextVideoIndex = deck(videos.length, "video-" + videos.length + "-" + videos[0].media[0].id);
  let quizNext = true;
  function nextRedditCard() {
    const card = quizNext ? quizCard() : videos[nextVideoIndex()];
    quizNext = !quizNext;
    return card;
  }
  const cards = [];
  const quizFirst = Math.random() < .5;
  for (const video of shuffle(videos)) {
    if (quizFirst) cards.push(quizCard(), video);
    else cards.push(video, quizCard());
  }
  function link(label, url) {
    const a = document.createElement("a");
    a.textContent = label;
    a.href = url;
    a.rel = "noopener noreferrer";
    a.target = "_blank";
    return a;
  }
  function content(card, large = false) {
    const section = document.createElement("section");
    if (card.kind === "harmony-quiz") {
      window.HARMONY_QUIZ.mount(section, card, large);
      return section;
    }
    const id = card.media[0].id;
    section.className = "unesco-film";
    const player = document.createElement("iframe");
    player.src = "https://www.youtube-nocookie.com/embed/" + id + "?playsinline=1";
    player.title = card.title;
    player.loading = "lazy";
    player.referrerPolicy = "strict-origin-when-cross-origin";
    player.allow = "encrypted-media; fullscreen; picture-in-picture";
    player.allowFullscreen = true;
    player.style.cssText = "display:block;width:100%;height:auto;aspect-ratio:16/9;border:0";
    const links = document.createElement("div");
    links.className = "video-link";
    links.append(link("UNESCO", card.sources[0].url), " · ",
      link("Auf YouTube öffnen", "https://www.youtube.com/watch?v=" + id));
    section.append(player, links);
    return section;
  }
  window.MUSIC_FEED = {isReddit, nextQuizId, nextRedditCard, cards, content};
  window.KARTEN = cards;
})();
