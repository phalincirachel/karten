const fs=require("fs"),vm=require("vm");
const context={window:{MEDIA_FILES:{}}};vm.createContext(context);
for(const f of ["cards.js","remote-texts.js","wiki-details.js","cards-editorial.js"])vm.runInContext(fs.readFileSync(f,"utf8"),context,{filename:f});
const archived=new Set(["Gute Gags","Seltene und geniale Lifehacks"]),cards=context.window.KARTEN.filter(c=>!archived.has(c.category));
const groups=new Map();for(const c of cards){if(!groups.has(c.category))groups.set(c.category,[]);groups.get(c.category).push(c.title)}
console.log(`ACTIVE ${cards.length} CATEGORIES ${groups.size}`);
for(const [category,titles] of groups)console.log(`${category}\t${titles.length}`);
console.log("\n## Karten ohne Medien");
for(const c of cards)if(!(c.media||[]).length)console.log(`${c.category}\t${c.title}`);
console.log("\n## Website-Screenshots");
for(const c of cards){const bad=(c.media||[]).filter(m=>/image\.thum\.io/.test(m.src||""));if(bad.length)console.log(`${c.category}\t${c.title}\t${bad.length}\t${(c.media||[]).length}`)}
console.log("\n## Cover-Kandidaten");
for(const c of cards)for(const m of c.media||[]){const hay=`${m.query||""} ${m.file||""} ${m.caption||""}`;if(/\b(?:cover|edition|title page|front cover|Titel(?:blatt|seite)|Ausgabe|Erstausgabe|Bucheinband|Sammlung)\b/i.test(hay))console.log(`${c.category}\t${c.title}\t${hay}`)}
console.log("\n## Gewählte Kartenmedien");
for(const c of cards)if(["Das arme Truthahnmädchen · Zuni","Blitz und Donner · Efik","Sonne, Mond und ihre Kinder · Visayas","Ich nannte diesen Menschen immer Sensei."].includes(c.title))console.log(c.title,JSON.stringify(c.media));
