const fs=require('node:fs'),vm=require('node:vm');
const files=['cards.js','cards-editorial.js','finnegans-exegese.js','index.html'];
let patch='*** Begin Patch\n';
for(const file of files){
 const before=fs.readFileSync(file,'utf8');let after=before;
 if(file==='cards.js'||file==='cards-editorial.js'){
  after=after.replace(/; der vollständige englische Text wird aus dieser Ausgabe geladen\./g,'.')
   .replace(/ (?:Der vollständige englische (?:Text|Wortlaut)|Die vollständige englische Fassung) wird (?:beim Öffnen )?aus (?:der gemeinfreien Transkription|der gemeinfreien Ausgabe|seiner gemeinfreien Ausgabe) geladen\./g,'')
   .replace(/ Die Karte lädt (?:den vollständigen englischen Text seiner Ausgabe|das vollständige englische Kapitel; die historische Wortwahl der Ausgabe bleibt erhalten)\./g,'')
   .replaceAll('https://www.sitios.segob.gob.mx/','https://sitios.segob.gob.mx/');
 }
 if(file==='finnegans-exegese.js')after=after.replace('Fall if you must, rise you will;','Fall if you will, rise you must;');
 if(file==='index.html'){
  const ctx={window:{MEDIA_FILES:{}}};vm.createContext(ctx);
  for(const name of ['cards.js','remote-texts.js','wiki-details.js','cards-editorial.js','finnegans-exegese.js'])vm.runInContext(fs.readFileSync(name,'utf8'),ctx);
  const archived=new Set(ctx.window.KARTEN_ARCHIVED_CATEGORIES),active=ctx.window.KARTEN.filter(c=>!archived.has(c.category));
  after=after.replaceAll('20260905-1','20260906-1').replace('575 Karten zu',active.length+' Karten zu').replace('Der vollständige Originaltext wird aus der Onlinequelle geladen …','Text wird geladen …');
 }
 if(after===before)continue;
 const a=before.split(/\r?\n/),b=after.split(/\r?\n/);if(a.length!==b.length)throw Error('Unexpected multiline change');
 patch+='*** Update File: '+file+'\n';
 for(let i=0;i<a.length;i++)if(a[i]!==b[i])patch+='@@\n-'+a[i]+'\n+'+b[i]+'\n';
}
console.log(patch+'*** End Patch');
