import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';
import {puppeteer} from 'file:///C:/Users/Stephan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
const root=process.cwd(),shots=await fs.mkdtemp(path.join(os.tmpdir(),'karten-check-'));
const ctx={window:{KARTEN:[]}};vm.createContext(ctx);vm.runInContext(execFileSync('git',['show','HEAD:finnegans-exegese.js'],{encoding:'utf8'}),ctx);
const before=ctx.window.FINNEGANS_EXEGESE.units.map(u=>({text:u.text,range:u.remoteRange}));
assert.equal(execFileSync('git',['diff','--','finnegans-wake-seite1(1).html'],{encoding:'utf8'}),'');
const server=http.createServer(async(req,res)=>{
 try{const route=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const file=path.resolve(root,'.'+(route==='/'?'/index.html':route));if(!file.startsWith(root+path.sep))throw Error('outside');const body=await fs.readFile(file);res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript; charset=utf-8':file.endsWith('.svg')?'image/svg+xml':file.endsWith('.html')?'text/html; charset=utf-8':'application/octet-stream');res.end(body);}catch{res.writeHead(404);res.end();}
});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
try{
 const page=await browser.newPage();await page.setViewport({width:1500,height:1100});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:'+server.address().port,{waitUntil:'domcontentloaded'});
 const after=await page.evaluate(()=>window.FINNEGANS_EXEGESE.units.map(u=>({text:u.text,range:u.remoteRange})));
 assert.equal(JSON.stringify(after),JSON.stringify(before),'Original text/extraction boundaries changed');
 const categoryOptions=await page.$$eval('.category-select option',xs=>xs.map(x=>x.value));
 assert.ok(categoryOptions.includes('Geschichtsunterricht'));
 for(const name of ['Eigene GIFs','Gute einfache Cartoons','VisuelleIdeenDieIchKlauenWill'])assert.ok(!categoryOptions.includes(name));
 assert.equal(await page.evaluate(()=>scrollY),0);
 await page.select('.category-select','Geschichtsunterricht');
 await page.waitForFunction(()=>document.querySelectorAll('.card').length===5);
 await page.evaluate(()=>document.querySelectorAll('.card img').forEach(img=>img.loading='eager'));
 await page.waitForFunction(()=>[...document.querySelectorAll('.card img')].every(img=>img.complete),{timeout:25000}).catch(()=>{});
 const media=await page.$$eval('.card',cards=>cards.map(c=>({title:c.querySelector('h2').textContent,images:[...c.querySelectorAll('img')].map(i=>({src:i.currentSrc,w:i.naturalWidth,h:i.naturalHeight,alt:i.alt}))})));
 console.log(JSON.stringify({media}));
 for(let i=0;i<5;i++){const c=(await page.$$('.card'))[i];await c.screenshot({path:path.join(shots,'history-'+i+'.png')});}
 const ranges=await page.evaluate(async()=>{
  const data=window.FINNEGANS_EXEGESE,text=(await(await fetch(data.page4Source,{signal:AbortSignal.timeout(15000)})).text()).replace(/\r/g,'').replace(/([A-Za-zÀ-ž])-[ \t]*\n[ \t]*([a-zà-ž])/g,'$1$2').replace(/\s+/g,' ');
  const locate=(mark,from=0)=>{for(const s of [mark,mark.replace('waz','was'),mark.replace('was','waz'),mark.replace('crunch-bracken','crunchbracken')]){const n=text.indexOf(s,from);if(n>=0)return n}return -1;};
  return data.units.slice(12).map((u,i)=>{const start=locate(u.remoteRange[0]),end=locate(u.remoteRange[1],start+1);return {number:i+13,ok:start>=0&&end>start&&end-start<6000,length:end-start};});
 });assert.ok(ranges.every(r=>r.ok),JSON.stringify(ranges.filter(r=>!r.ok)));
 console.log(JSON.stringify({remoteRanges:ranges.length,valid:true}));
 await page.select('.category-select','Finnegan Exegese');
 for(const number of [1,3,6,7,8,10,11,12]){
  const opened=await page.evaluate(number=>{const c=[...document.querySelectorAll('.card')].find(c=>c.querySelector('h2').textContent===`Finnegans Wake ${number}`);c.querySelector('.card-open').click();return true;},number);assert.ok(opened);
  await page.waitForFunction(()=>document.querySelectorAll('.fw-unit').length===4,{timeout:22000});
  const selectedIndex=number===6?3:0;await page.evaluate(i=>document.querySelectorAll('.fw-unit')[i].click(),selectedIndex);
  const fields=await page.$eval('.fw-analysis',n=>({panels:n.querySelectorAll('.fw-panel').length,original:n.querySelector('.fw-selected').textContent.length,reading:n.querySelectorAll('.fw-panel-body')[1].textContent.length}));
  assert.equal(fields.panels,3);assert.ok(fields.reading>200);
  if(number===6)await page.screenshot({path:path.join(shots,'finnegans.png')});
  await page.keyboard.press('Escape');
 }
 // Force a broken primary, then a broken primary + fallback, without touching the data files.
 await page.select('.category-select','Geschichtsunterricht');
 await page.evaluate(()=>{const c=window.KARTEN.find(c=>c.category==='Geschichtsunterricht');window.__mediaSaved=c.media;const m=c.media[0];c.media=[{...m,src:'/deliberately-missing.png',fallbacks:[{...m,fallbacks:undefined}]}];});
 await page.select('.category-select','Alle');await page.select('.category-select','Geschichtsunterricht');
 await page.waitForFunction(()=>{const c=[...document.querySelectorAll('.card')].find(n=>n.querySelector('h2').textContent.startsWith('Die Gründung'));const img=c.querySelector('img');return img?.complete&&img.naturalWidth>0&&!img.src.includes('deliberately');},{timeout:22000});
 await page.evaluate(()=>{const c=window.KARTEN.find(c=>c.category==='Geschichtsunterricht');c.media=[{type:'image',src:'/deliberately-missing.png',caption:'Must disappear',fallbacks:[{type:'image',src:'/also-missing.png',caption:'Must also disappear'}]}];});
 await page.select('.category-select','Alle');await page.select('.category-select','Geschichtsunterricht');
 await page.waitForFunction(()=>{const c=[...document.querySelectorAll('.card')].find(n=>n.querySelector('h2').textContent.startsWith('Die Gründung'));return !c.querySelector('.card-media');},{timeout:6000});
 assert.deepEqual(errors,[]);console.log(JSON.stringify({browser:'OK',sourceUnchanged:true,hiddenCategories:'OK',sentenceContext:'OK',fallback:'OK',emptyMedia:'OK',screenshots:shots}));
}finally{await browser.close();await new Promise(resolve=>server.close(resolve));}
