global.window = global;
require("./media-map.js");
require("./cards.js");

const first = KARTEN.findIndex(card => card.title.includes("Im Kampf zwischen dir"));
const last = KARTEN.findIndex(card => card.title === "Geteiltes Leid ist halbes Leid.");
const cards = KARTEN.slice(first, last + 1);

(async () => {
  for (const card of cards) {
    for (const item of card.media || []) {
      if (item.type !== "commons") continue;
      const params = new URLSearchParams({action:"query",format:"json",origin:"*",prop:"imageinfo",iiprop:"url"});
      if (item.file) params.set("titles", item.file.startsWith("File:") ? item.file : `File:${item.file}`);
      else {
        params.set("generator", "search");
        params.set("gsrnamespace", "6");
        params.set("gsrlimit", "1");
        params.set("gsrsearch", item.query);
      }
      try {
        const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
        const data = await response.json();
        const result = Object.values(data.query?.pages || {}).find(page => page.imageinfo?.[0]);
        console.log(`${result ? "OK" : "FAIL"}\t${card.title}\t${result?.title || item.query}`);
      } catch (error) {
        console.log(`ERROR\t${card.title}\t${error.message}`);
      }
    }
  }
})();
