import fs from 'node:fs/promises';
import {puppeteer} from 'file:///C:/Users/Stephan/AppData/Local/npm-cache/_npx/15c61037b1978c83/node_modules/chrome-devtools-mcp/build/src/third_party/index.js';
const mode=process.argv[2];
if(mode==='browser'){
  const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--disable-gpu']});
  const page=await browser.newPage();
  for(const url of process.argv.slice(3)){
    try{await page.goto(url,{waitUntil:'domcontentloaded',timeout:25000});
      console.log(JSON.stringify({url,title:await page.title(),text:await page.evaluate(()=>(document.querySelector('.post-body,main,article')||document.body).innerText.slice(0,7500)),images:await page.$$eval('img',xs=>xs.map(x=>({alt:x.alt,src:x.currentSrc||x.src})).filter(x=>x.src&&!x.src.startsWith('data:')).slice(0,16)),iframes:await page.$$eval('iframe',xs=>xs.map(x=>x.src).filter(x=>/youtube|vimeo/.test(x)))}));
    }catch(e){console.log(url,e.message)}
  }
  await browser.close();
}else if(mode==='commons'){
  for(const query of process.argv.slice(3)){
    const p=new URLSearchParams({action:'query',format:'json',generator:'search',gsrnamespace:'6',gsrsearch:query,gsrlimit:'4',prop:'imageinfo',iiprop:'url',iiurlwidth:'1000'});
    const r=await fetch('https://commons.wikimedia.org/w/api.php?'+p);
    const body=await r.text();try{const j=JSON.parse(body);const result={query,files:Object.values(j.query?.pages||{}).map(x=>({title:x.title,src:x.imageinfo?.[0]?.thumburl,href:x.imageinfo?.[0]?.descriptionurl}))};await fs.appendFile('.tmp-karten/media.jsonl',JSON.stringify(result)+'\n');console.log(JSON.stringify(result));}catch{console.log(query,r.status,body.slice(0,90))}
    await new Promise(r=>setTimeout(r,1100));
  }
}else if(mode==='text'){
  const url=process.argv[3],needle=process.argv[4];const r=await fetch(url),t=await r.text();
  if(needle){let i=-1,n=0;while((i=t.indexOf(needle,i+1))>=0&&n++<4)console.log(t.slice(Math.max(0,i-120),i+1800))}
  else console.log(t.slice(0,8500));
}else if(mode==='fin'){
  const t=(await (await fetch('https://gist.githubusercontent.com/jl2/7fbf5c10f70a9b1bcd25e1fa2c34fee8/raw/finnegan.txt')).text()).replace(/\s+/g,' ');
  const s=t.slice(t.indexOf('She has a gift of seek on site'));
  console.log(s.slice(0,3000).split(/(?<=[.!?])\s+/).map(x=>({start:x.slice(0,55),length:x.length})).slice(0,14));
}
