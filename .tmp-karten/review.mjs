import fs from 'node:fs/promises';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import http from 'node:http';
import path from 'node:path';
import {puppeteer} from 'file:///C:/Users/Stephan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
const files=['media-map.js','cards.js','remote-texts.js','wiki-details.js','cards-editorial.js','finnegans-exegese.js'];
async function dataset(baseline){const ctx=vm.createContext({window:{},console});for(const file of files){const code=baseline?execFileSync('git',['show','HEAD:'+file],{encoding:'utf8'}):await fs.readFile(file,'utf8');vm.runInContext(code,ctx,{filename:file})}return ctx.window}
const old=await dataset(true),now=await dataset(false),key=c=>c.category+'\u0000'+c.title;
const keys=new Set(old.KARTEN.map(key)),added=now.KARTEN.filter(c=>!keys.has(key(c)));
const counts=cards=>Object.fromEntries([...new Set(cards.map(c=>c.category))].map(cat=>[cat,cards.filter(c=>c.category===cat).length]));
const before=counts(old.KARTEN),after=counts(now.KARTEN);
const delta=Object.entries(after).map(([cat,n])=>({cat,delta:n-(before[cat]||0)}));
console.log(JSON.stringify({before:old.KARTEN.length,after:now.KARTEN.length,added:added.length,delta,units:now.FINNEGANS_EXEGESE.units.length}));
if(added.length!==35||delta.filter(x=>x.delta===1).length!==35)throw Error('Falscher Umfang');
await fs.writeFile('.tmp-karten/added.json',JSON.stringify(added,null,2));
for(const c of added){if(!c.searchTerm)throw Error('Suchbegriff fehlt '+c.title);if(c.kind!=='gif'&&!c.sources.length)throw Error('Quelle fehlt');}
const root=process.cwd(),html=await fs.readFile('index.html','utf8');
const server=http.createServer(async(req,res)=>{try{let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(pathname==='/'||pathname==='/review'){res.setHeader('Content-Type','text/html; charset=utf-8');let page=html;if(pathname==='/review')page=page.replace('  <script>\n    (() => {',`  <script>window.KARTEN=window.KARTEN.filter(c=>${JSON.stringify(added.map(key))}.includes(c.category+'\\u0000'+c.title));</script>\n  <script>\n    (() => {`);res.end(page);return;}const file=path.resolve(root,'.'+pathname);if(!file.startsWith(root+path.sep))throw Error('path');res.setHeader('Content-Type',({'.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.gif':'image/gif','.png':'image/png','.html':'text/html; charset=utf-8'})[path.extname(file)]||'application/octet-stream');res.end(await fs.readFile(file));}catch{res.statusCode=404;res.end();}});
await new Promise(r=>server.listen(8765,'127.0.0.1',r));
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
try{
 const page=await browser.newPage();await page.setViewport({width:1320,height:1000});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8765/review',{waitUntil:'domcontentloaded'});
 console.log('Rendered count',await page.$eval('#count',e=>e.textContent));
 for(let i=0;i<4;i++){await page.evaluate(()=>{const more=document.querySelector('#more');if(!more.hidden)more.click()});}
 const articles=await page.$$('.card');console.log('Rendered cards',articles.length);
 const media=[];
 for(let i=0;i<articles.length;i++){
   const article=articles[i];await article.scrollIntoView();
   await article.evaluate(e=>Promise.all([...e.querySelectorAll('img')].map(img=>{img.loading='eager';return img.complete?null:new Promise(r=>{img.onload=img.onerror=r;setTimeout(r,7000)})})));
   await new Promise(r=>setTimeout(r,120));
   const result=await article.evaluate(e=>({title:e.querySelector('h2').textContent,images:[...e.querySelectorAll('img')].map(img=>({src:img.currentSrc,width:img.naturalWidth})),videos:e.querySelectorAll('iframe').length}));
   media.push(result);await article.screenshot({path:`.tmp-karten/card-${String(i).padStart(2,'0')}.png`});
 }
 await fs.writeFile('.tmp-karten/rendered.json',JSON.stringify(media,null,2));console.log(JSON.stringify({errors,media}));
 for(const c of added.filter(c=>c.wiki||c.original||c.writingSource||c.finnegansGroup!==undefined)){
   const opener=await page.evaluateHandle(title=>[...document.querySelectorAll('.card-open')].find(e=>e.querySelector('h2').textContent===title),c.title);
   await opener.evaluate(e=>e.click());await new Promise(r=>setTimeout(r,6000));
   console.log('Detail',c.title,await page.$eval('#detail',e=>({length:e.innerText.length,status:[...e.querySelectorAll('.source-status,.fw-loading')].map(n=>n.textContent),original:e.querySelector('.source-text')?.textContent.length,fw:e.querySelectorAll('.fw-unit').length})));
   await page.screenshot({path:`.tmp-karten/detail-${added.indexOf(c)}.png`});await page.keyboard.press('Escape');
 }
 await page.goto('http://127.0.0.1:8765/',{waitUntil:'domcontentloaded'});
 console.log('Full app',await page.$eval('#count',e=>e.textContent),'scroll',await page.evaluate(()=>scrollY),'categories',await page.$$eval('#categorySelect option',xs=>xs.length));
 await page.type('#search','Finnegans Wake 12');await page.click('.card-open');
 await page.waitForFunction(()=>document.querySelectorAll('.fw-unit').length===4);
 await page.click('.fw-unit');
 console.log('FW comparison',await page.$eval('#detail',e=>({selected:e.querySelector('.fw-selected').textContent.length,panels:e.querySelectorAll('.fw-panel').length})));
 await page.click('.fw-nav .previous');await page.waitForFunction(()=>document.querySelector('#detailTitle')?.textContent==='Finnegans Wake 11');
 await page.click('.fw-nav .next');await page.waitForFunction(()=>document.querySelector('#detailTitle')?.textContent==='Finnegans Wake 12');
 console.log('FW navigation 12 to 11 to 12 passed');
}finally{await browser.close();server.close();}
