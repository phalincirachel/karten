// Last @require in version 8 of the Reddit userscript. It owns post counting and insertion.
(() => {
  "use strict";
  const feed = window.MUSIC_FEED;
  if (!feed?.isReddit) return;
  const marker = "Musikkarte";
  window.KARTEN = [{title: marker, category: marker}];

  function node(tag, className, text) {
    const result = document.createElement(tag);
    result.className = className;
    if (text) result.textContent = text;
    return result;
  }
  function button(label, className, action) {
    const result = node("button", className, label);
    result.type = "button";
    result.addEventListener("click", action);
    return result;
  }

  // Keep version 8's feedback key and object format for previously saved votes.
  function rating(box, card) {
    const row = node("section", "rating");
    row.append(node("span", "rating-category", card.category));
    const reasons = ["Nicht kreativ genug", "Ungenau beschrieben", "Sprachlich schlecht beschrieben",
      "Schlechtes Bild", "Zu wenig Kontext", "Auswahl zu bekannt oder naheliegend",
      "Quelle, Link oder Medium funktioniert nicht"];
    function show(vote) {
      box.querySelector(".feedback-form")?.remove();
      const form = node("form", "feedback-form");
      form.append(node("h3", "subheading", vote === "up" ? "Positive Bewertung" : "Kritik an der Karte"));
      if (vote === "down") for (const reason of reasons) {
        const label = node("label", "checkbox-row");
        const check = document.createElement("input");
        check.type = "checkbox";
        check.value = reason;
        label.append(check, reason);
        form.append(label);
      }
      const note = document.createElement("textarea");
      note.placeholder = vote === "up" ? "Was sollte so bleiben?" : "Weitere Kritik";
      note.setAttribute("aria-label", note.placeholder);
      const actions = node("div", "form-actions");
      const save = node("button", "primary", "Im Browser speichern");
      save.type = "submit";
      actions.append(save, button("Abbrechen", "", () => form.remove()));
      form.append(note, actions);
      form.addEventListener("submit", event => {
        event.preventDefault();
        try {
          const key = "kartei-reddit-feedback-v2";
          const entries = GM_getValue(key, []);
          const selected = [...form.querySelectorAll(":checked")].map(input => input.value);
          GM_setValue(key, [...entries, {title: card.title, category: card.category, summary: "",
            sources: card.sources.map(source => source.url), vote, reasons: selected,
            note: note.value.trim(), createdAt: new Date().toISOString()}]);
          form.replaceChildren(node("p", "success", "Bewertung gespeichert."));
        } catch {
          form.append(node("p", "muted", "Speichern fehlgeschlagen."));
        }
      });
      box.append(form);
    }
    for (const [vote, arrow, label] of [["up", "▲", "Karte positiv bewerten"], ["down", "▼", "Karte negativ bewerten"]]) {
      const control = button(arrow, "vote", () => show(vote));
      control.setAttribute("aria-label", label);
      row.append(control);
    }
    return row;
  }

  const selector = ".kartei-reddit-einschub";
  const mounted = new WeakSet();
  function mount(host) {
    if (!host.isConnected || mounted.has(host)) return;
    const root = host.shadowRoot;
    const inner = root?.querySelector(".inner");
    if (inner?.querySelector("h2")?.textContent !== marker) return;
    mounted.add(host);
    const card = feed.nextRedditCard();
    const box = inner.parentElement;
    root.querySelector(".rating")?.remove();
    inner.replaceChildren(node("h2", "", card.title), feed.content(card, true));
    box.append(rating(box, card));
    if (card.kind === "harmony-quiz") window.HARMONY_QUIZ.installStyles(root);
  }
  const observer = new MutationObserver(changes => {
    for (const change of changes) for (const added of change.addedNodes) {
      if (added.nodeType !== 1) continue;
      if (added.matches(selector)) mount(added);
      else added.querySelectorAll(selector).forEach(mount);
    }
    window.HARMONY_QUIZ.stopIfDetached();
  });
  observer.observe(document.body, {childList: true, subtree: true});
  document.querySelectorAll(selector).forEach(mount);
})();
