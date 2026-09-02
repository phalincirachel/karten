const fs = require("fs");
const vm = require("vm");

global.window = { KARTEN: [] };
global.S = (label, url) => ({ label, url });
global.C = (query, caption = "") => ({ type: "commons", query, caption });
global.F = (file, caption = "") => ({ type: "commons", query: file, file, caption });
global.I = (src, href = src, caption = "", credit = "") => ({ type: "image", src, href, caption, credit });
global.Y = (id, caption = "", start = 0) => ({ type: "youtube", id, caption, start });
vm.runInThisContext(fs.readFileSync("cards.js", "utf8"), { filename: "cards.js" });

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function fetchTimed(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    return await fetch(url, { signal: controller.signal, headers: { "User-Agent": "KartenMediaCheck/1.0 (local project verification)" } });
  } finally {
    clearTimeout(timer);
  }
}

(async () => {
  const media = window.KARTEN.flatMap(card => card.media || []);
  const screenshots = media.filter(item => item.type === "image" && item.src.includes("image.thum.io"));
  const videos = media.filter(item => item.type === "youtube");
  async function verify(items, check, concurrency = 4) {
    let next = 0;
    const results = new Array(items.length);
    async function worker() {
      while (next < items.length) {
        const index = next++;
        try { results[index] = await check(items[index]); }
        catch (error) { results[index] = { item: items[index], ok: false, status: error.name || error.message }; }
      }
    }
    await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
    return results;
  }
  const screenshotResults = await verify(screenshots, async item => {
    const response = await fetchTimed(item.src);
    const type = response.headers.get("content-type") || "";
    if (response.body) await response.body.cancel();
    return { item, ok: response.ok && type.startsWith("image/"), status: `HTTP ${response.status}, ${type}` };
  });
  const videoResults = await verify(videos, async item => {
    const response = await fetchTimed(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${item.id}&format=json`);
    return { item, ok: response.ok, status: `HTTP ${response.status}` };
  });
  for (const [name, results] of [["SCREENSHOT", screenshotResults], ["VIDEO", videoResults]]) {
    const failed = results.filter(result => !result.ok);
    console.log(`${name} ${results.length - failed.length}/${results.length}`);
    failed.forEach(result => console.log(`FAIL ${result.item.href || result.item.id} (${result.status})`));
  }
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
