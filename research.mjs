const queries = [
  "Emilie Mayer Symphony 7",
  "Ethel Smyth The Wreckers Overture",
  "Margaret Bonds Montgomery Variations",
  "Launeddas Luigi Lai",
];

for (const query of queries) {
  const html = await (await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, {headers: {"User-Agent": "Mozilla/5.0"}})).text();
  const ids = [...html.matchAll(/"videoId":"([^"]+)"/g)].map(match => match[1]);
  console.log(query, [...new Set(ids)].slice(0, 8).join(","));
}

const page = await (await fetch("https://en.residentieorkest.nl/magazine/stream-mayer-symfonie-7", {headers: {"User-Agent": "Mozilla/5.0"}})).text();
console.log("Residentie", [...page.matchAll(/(?:youtube\.com\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{11})/g)].map(match => match[1]).join(","));
