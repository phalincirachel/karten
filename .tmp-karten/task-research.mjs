import {puppeteer} from 'file:///C:/Users/Stephan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
const mode=process.argv[2],args=process.argv.slice(3);
if(mode==='fwmeta'){
 const t=(await (await fetch('https://gist.githubusercontent.com/jl2/7fbf5c10f70a9b1bcd25e1fa2c34fee8/raw/finnegan.txt')).text()).replace(/-\r?\n\s*/g,'').replace(/\s+/g,' ');const at=t.indexOf('But so sore did abe');const part=t.slice(at,at+7000);console.log(JSON.stringify(part.split(/(?<=[.!?])\s+/).slice(0,10).map(s=>({start:s.slice(0,65),end:s.slice(-65),length:s.length}))));
}else if(mode==='extract'){
 const [url,needle]=args;let t=await (await fetch(url)).text();t=t.replace(/<[^>]+>/g,' ').replace(/-\r?\n\s*/g,'').replace(/\s+/g,' ');const at=t.indexOf(needle);console.log(JSON.stringify({url,at,excerpt:t.slice(Math.max(0,at-250),at+2800)}));
}else if(mode==='commons'){
 for(const query of args){
  const u=new URL('https://commons.wikimedia.org/w/api.php');u.search=new URLSearchParams({action:'query',format:'json',generator:'search',gsrsearch:query,gsrnamespace:'6',gsrlimit:'4',prop:'imageinfo',iiprop:'url',iiurlwidth:'1100'});
  const r=await fetch(u);const j=await r.json();console.log(JSON.stringify({query,files:Object.values(j.query?.pages||{}).map(p=>({title:p.title,src:p.imageinfo?.[0]?.thumburl,original:p.imageinfo?.[0]?.url,href:p.imageinfo?.[0]?.descriptionurl}))}));
 }
}else{
 const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
 try{for(const url of args){const p=await browser.newPage();try{
  await p.goto(url,{waitUntil:'domcontentloaded',timeout:35000});
  if(mode==='quotes'){await p.waitForSelector('.mw-parser-output',{timeout:15000});console.log(JSON.stringify(await p.evaluate(()=>({url:location.href,title:document.title,quotes:[...document.querySelectorAll('.mw-parser-output li, .citation')].filter(x=>x.textContent.trim().length>35&&!x.parentElement.closest('li,.navbox,.toc,.reflist')).length,paragraphs:document.querySelectorAll('.mw-parser-output p').length,headings:[...document.querySelectorAll('.mw-parser-output h2')].map(x=>x.textContent)}))));}
  else if(mode==='video'){await p.waitForFunction(()=>window.ytInitialPlayerResponse,{timeout:15000});console.log(JSON.stringify(await p.evaluate(()=>({url:location.href,title:window.ytInitialPlayerResponse.videoDetails?.title,status:window.ytInitialPlayerResponse.playabilityStatus,embed:window.ytInitialPlayerResponse.playabilityStatus?.playableInEmbed}))));}
  else if(mode==='ytsearch'){await p.waitForFunction(()=>window.ytInitialData,{timeout:15000});console.log(JSON.stringify(await p.evaluate(()=>{const out=[];function scan(x){if(!x||typeof x!=='object')return;if(x.videoRenderer)out.push({id:x.videoRenderer.videoId,title:x.videoRenderer.title?.runs?.map(x=>x.text).join(''),duration:x.videoRenderer.lengthText?.simpleText});for(const k in x)scan(x[k]);}scan(window.ytInitialData);return out.slice(0,6);})));}
  else console.log(JSON.stringify(await p.evaluate(()=>({url:location.href,title:document.title,text:(document.querySelector('main,article')||document.body).innerText.slice(0,15000),images:[...document.images].map(x=>({src:x.currentSrc||x.src,alt:x.alt})).filter(x=>!x.src.startsWith('data:')).slice(0,65),links:[...document.querySelectorAll('a[href]')].map(x=>({text:x.textContent.trim().slice(0,80),url:x.href})).filter(x=>/Freeburn|Solitude|Madonna|profiles|profile\//.test(x.text+' '+x.url)).slice(0,8),iframes:[...document.querySelectorAll('iframe')].map(x=>x.src)}))));
 }catch(e){console.log(JSON.stringify({url,error:e.message}));}finally{await p.close();}}
 }finally{await browser.close();}
}
