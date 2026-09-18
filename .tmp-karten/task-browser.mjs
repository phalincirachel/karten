import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import vm from 'node:vm';
import {execFileSync} from 'node:child_process';
import {puppeteer} from 'file:///C:/Users/Stephan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
const files=['media-map.js','cards.js','remote-texts.js','wiki-details.js','cards-editorial.js','finnegans-exegese.js'];
function data(old){const c={window:{MEDIA_FILES:{}}};vm.createContext(c);for(const f of files)vm.runInContext(old?execFileSync('git',['show','HEAD:'+f],{encoding:'utf8',maxBuffer:8e6}):fs.readFileSync(f,'utf8'),c);return c.window;}
const old=data(true),now=data(false),key=c=>c.category+'|'+c.title,oldKeys=new Set(old.KARTEN.map(key)),added=now.KARTEN.filter(c=>!oldKeys.has(key(c)));
console.log(JSON.stringify({added:added.map(c=>({category:c.category,title:c.title})),count:added.length}));
if(process.argv[2]==='count')process.exit();
const root=process.cwd(),server=http.createServer((req,res)=>{const name=decodeURIComponent(req.url.split('?')[0]);const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));if(!file.startsWith(root+path.sep)){res.writeHead(403).end();return;}try{let b=fs.readFileSync(file);res.setHeader('Content-Type',file.endsWith('.html')?'text/html; charset=utf-8':file.endsWith('.js')?'text/javascript; charset=utf-8':'application/octet-stream');if(file.endsWith('index.html'))b=b.toString().replace('const rawCards=',`window.KARTEN=window.KARTEN.filter(c=>${JSON.stringify(added.map(key))}.includes(c.category+'|'+c.title));const rawCards=`);res.end(b);}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
try{const page=await browser.newPage();await page.setViewport({width:1440,height:1050});page.on('pageerror',e=>console.log('PAGEERROR '+e.message));await page.goto('http://127.0.0.1:'+server.address().port,{waitUntil:'domcontentloaded'});await page.waitForSelector('.card',{timeout:12000});await page.evaluate(()=>{const b=document.querySelector('#more');for(let n=0;n<8&&!b.hidden;n++)b.click();});await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r;setTimeout(r,18000)})));});
 console.log(JSON.stringify(await page.evaluate(()=>({scroll:scrollY,cards:document.querySelectorAll('.card').length,aph:[...document.querySelectorAll('a.aphorism-card')].map(a=>a.href),media:[...document.querySelectorAll('.card-media img')].map(i=>({src:i.currentSrc,ok:i.complete&&i.naturalWidth>0,width:i.naturalWidth,caption:i.closest('figure')?.textContent.trim()}))}))));
 if(process.argv[2]==='gallery'){
  await page.addStyleTag({content:'.controls,header,.result,.card-open,.rating,.more,.floating-feedback{display:none!important}.card:has(.youtube),.card:not(:has(img)){display:none}.grid{grid-template-columns:repeat(3,1fr);gap:8px}.card-media{padding:4px}.media-grid img{max-height:300px!important;object-fit:contain!important}.media-grid figure{min-height:0!important}.media-grid figcaption{opacity:1;position:static;background:white;color:black;font-size:11px}.media-grid{display:block}.media-grid figure{margin-bottom:8px}main{padding-top:8px}'});
  await page.screenshot({path:'.tmp-karten/new-media.png',fullPage:true});
 }else if(process.argv[2]==='functions'){
  console.log(JSON.stringify(await page.evaluate(()=>({categories:[...document.querySelector('#categorySelect').options].map(o=>o.value),searchTests:[{title:'Begriff',category:'Philosophische Begriffe',searchTerm:'Davidson Philosophische Begriffe Monismus'},{title:'Ein Titel',category:'Eine Kategorie'}].map(c=>({input:c,output:typeof cardSearchQuery==='function'?cardSearchQuery(c):'scoped'}))}))));
 }
}finally{await browser.close();server.close();}
