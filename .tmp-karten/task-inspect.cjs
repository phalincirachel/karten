const fs=require('fs'),vm=require('vm');const c={window:{MEDIA_FILES:{}}};vm.createContext(c);for(const f of ['media-map.js','cards.js','remote-texts.js','wiki-details.js','cards-editorial.js','finnegans-exegese.js'])vm.runInContext(fs.readFileSync(f,'utf8'),c);
const all=c.window.KARTEN;
if(process.argv[2]==='inventory')for(const category of [...new Set(all.map(c=>c.category))]){if(c.window.KARTEN_ARCHIVED_CATEGORIES.includes(category))continue;console.log(category+': '+all.filter(c=>c.category===category).map(c=>c.byline&&category==='Aphorismen'?c.byline:c.title).join(' | '))}
if(process.argv[2]==='aph')console.log(JSON.stringify(all.filter(c=>c.category==='Aphorismen').map(c=>({title:c.title,byline:c.byline,sources:c.sources})),null,2));
if(process.argv[2]==='fw'){const u=c.window.FINNEGANS_EXEGESE.units;console.log(JSON.stringify(u.map((x,i)=>({n:i+1,page:x.page,context:x.contextUnits,en:i>=44?x.en:undefined,range:i>=44?x.remoteRange:undefined})),null,2));}
