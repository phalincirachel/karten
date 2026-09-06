// Fast, offline regression checks. No network-wide media scan.
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
process.chdir(path.resolve(__dirname,'..'));
const html=fs.readFileSync('index.html','utf8'),context={window:{MEDIA_FILES:{}}};vm.createContext(context);
const scriptRefs=[...html.matchAll(/<script src="([^"?]+)\?v=([^"]+)"/g)];
assert.equal(new Set(scriptRefs.map(x=>x[2])).size,1,'Script cache versions differ');
for(const [,file]of scriptRefs)vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file});
for(const [,body]of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(body);
const archived=new Set(context.window.KARTEN_ARCHIVED_CATEGORIES),all=context.window.KARTEN;
assert.deepEqual([...archived].sort(),['Gute Gags','Seltene und geniale Lifehacks','Eigene GIFs','Gute einfache Cartoons','VisuelleIdeenDieIchKlauenWill'].sort());
const active=all.filter(c=>!archived.has(c.category)),categories=new Set(active.map(c=>c.category));
const agents=fs.readFileSync('AGENTS.md','utf8'),instructions=[...agents.matchAll(/^\d+\. \*\*(.*?)\*\*([^\n]*)/gm)];
for(const category of categories)assert.ok(instructions.some(x=>x[1]===category&&!/deaktiviert/.test(x[2])),`Missing active instructions: ${category}`);
for(const card of active){assert.ok(card.title&&Array.isArray(card.detail),`Malformed card: ${card.title}`);assert.ok(card.category);}
assert.ok(html.includes(active.length+' Karten zu'),'Stale card count');
const history=active.filter(c=>c.category==='Geschichtsunterricht');assert.ok(history.length>=5);
for(const card of history){assert.ok(card.summary&&card.searchTerm&&card.sources.length>=2);assert.ok(card.detail.join(' ').length>1300);assert.ok(card.media.length);for(const media of card.media){assert.ok(media.fallbacks?.length);assert.equal(media.fit,'contain');assert.ok(!/\.pdf|\.djvu|thum\.io/i.test(media.src));}}
const fw=context.window.FINNEGANS_EXEGESE,groups=active.filter(c=>Number.isInteger(c.finnegansGroup));
assert.equal(fw.units.length%4,0);assert.equal(groups.length,fw.units.length/4);
groups.forEach((c,i)=>{assert.equal(c.finnegansGroup,i);assert.ok(c.summary.startsWith('Einheiten '));});
fw.units.forEach((unit,i)=>{
 assert.ok(unit.en&&unit.boxes?.[0]?.[1],`Missing reading ${i+1}`);
 assert.ok(unit.boxes[0][1].length>200,`Reading too slight ${i+1}`);
 assert.ok(unit.boxes[1]?.[1]&&/^https:\/\//.test(unit.source));
 if(i>=12){assert.equal(unit.text,'','Unnecessary local original copy');assert.equal(unit.remoteRange.length,2);}
 if(unit.contextUnits){const[a,b]=unit.contextUnits;assert.ok(a<=i+1&&i+1<=b&&b<=fw.units.length);assert.ok(unit.contextReading&&unit.contextEnglish);}
});
assert.ok(html.includes('new Set(window.KARTEN_ARCHIVED_CATEGORIES)'),'UI does not share category filter');
assert.ok(!active.some(c=>/vollständige.{0,35}(?:wird|lädt).{0,80}geladen/i.test([c.summary,...c.detail].join(' '))),'Technical prose remains');
console.log(JSON.stringify({activeCards:active.length,activeCategories:categories.size,historyCards:history.length,finnegansUnits:fw.units.length,finnegansCards:groups.length,syntax:'OK',rules:'OK'},null,2));
