const fs=require("fs"),vm=require("vm");
const context={window:{MEDIA_FILES:{}}};vm.createContext(context);
for(const f of ["cards.js","remote-texts.js","wiki-details.js","cards-editorial.js"])vm.runInContext(fs.readFileSync(f,"utf8"),context,{filename:f});
const archived=new Set(["Gute Gags","Seltene und geniale Lifehacks"]),cards=context.window.KARTEN.filter(c=>!archived.has(c.category));
const groups=new Map();for(const c of cards){if(!groups.has(c.category))groups.set(c.category,[]);groups.get(c.category).push(c.title)}
for(const [category,titles] of groups)console.log(`\n## ${category} (${titles.length})\n${titles.join("\n")}`);
console.log("\n## Website-Screenshots");
for(const c of cards){const bad=(c.media||[]).filter(m=>/image\.thum\.io/.test(m.src||""));if(bad.length)console.log(`${c.category}\t${c.title}\t${bad.length}\t${(c.media||[]).length}`)}
