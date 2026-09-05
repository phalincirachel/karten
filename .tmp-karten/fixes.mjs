import fs from 'node:fs/promises';
const file='cards.js',before=await fs.readFile(file,'utf8');
const start=before.lastIndexOf('(() => {');
let block=before.slice(start);
const changes=[
 ['https://www.gutenberg.org/cache/epub/37884/pg37884.txt','https://raw.githubusercontent.com/GITenberg/Folk-Tales-of-the-Khasis_37884/master/37884.txt'],
 ['fetchLabel:"Project Gutenberg, Erzählung VII"','fetchLabel:"GITenberg-Transkription, Erzählung VII"'],
 ['https://apics-online.info/parameters/15.chapter.html','https://apics-online.info/surveys/22#section-5'],
 ['RGYNʾ BT ḤRY BRʿTʾ ḤBL','RGYNʾ BT ḤRY BR ʿTʾ ḤBL'],
 ['BRʿTʾ für Barates','BR ʿTʾ für Barates'],
 ['Charles Philipon Les Poires La Caricature 24 novembre 1831','Charles Philipon Les Poires Le Charivari 17 janvier 1834'],
 ['Die vollständige Folge der vier Köpfe und Birnen','Vier Bilder nach Philipons Entwurf; Holzstich in Le Charivari, 17. Januar 1834'],
 ['Die historische Aufnahme zeigt Robineau bei der Arbeit; die zweite Abbildung hält die Form und das Relief in einer späteren zeichnerischen Aufnahme fest.','Die historische Aufnahme zeigt Robineau bei der Arbeit; daneben steht eine Fotografie der fertigen Vase.'],
 ['wm("thumb/8/81/Richard_Whitaker%2C_Robineau_Scarab_Vase%2C_c._1938%2C_NGA_19489.jpg/1280px-Richard_Whitaker%2C_Robineau_Scarab_Vase%2C_c._1938%2C_NGA_19489.jpg","Richard Whitaker, Robineau Scarab Vase, c. 1938, NGA 19489.jpg","Richard Whitaker: zeichnerische Aufnahme der Vase, um 1938")','I("https://gcc.glendale.edu/ceramics/gif%20resource%20file/scarabvase1587.jpg","https://gcc.glendale.edu/ceramics/scarabvase.html","Scarab Vase, 1910 · das fertige Porzellangefäß","Everson Museum / Glendale Community College")'],
 ['I("https://collectionapi.metmuseum.org/api/collection/v1/iiif/264620/636162/thumbnail","https://www.metmuseum.org/art/collection/search/264620","Refracted Window: Vortograph, 1916–17","The Metropolitan Museum of Art, 1986.1008.3")','diagram("vortoskop","Drei Spiegel vor dem Objektiv · eigene Erklärung des Aufnahmeverfahrens")'],
 ['Y("08XLbw3Z83o","Diego Ortiz · Recercada II · Jordi Savall und Hespèrion XXI")','{type:"audio",src:"https://upload.wikimedia.org/wikipedia/commons/e/ec/Diego_Ortiz_%281510-1570%29_-_Recercada_segunda_sobre_tenores_italianos_from_Trattado_de_Glosas_%281553%29.ogg",href:"https://commons.wikimedia.org/wiki/File:Diego_Ortiz_(1510-1570)_-_Recercada_segunda_sobre_tenores_italianos_from_Trattado_de_Glosas_(1553).ogg",caption:"Ortiz: Recercada segunda sobre tenores italianos · Phillip W. Serna (2020), CC BY-SA 4.0"}'],
 ['Zu hören ist Diego Ortiz’ „Recercada II“ aus dem Umfeld seines „Trattado de glosas“ von 1553:','Zu hören ist Diego Ortiz’ „Recercada segunda sobre tenores italianos“ aus dem „Trattado de glosas“ von 1553, eingespielt von Phillip W. Serna:']
];
for(const [a,b] of changes){if(!block.includes(a))throw Error('Missing '+a);block=block.split(a).join(b)}
const a=before.slice(start).split(/\r?\n/),b=block.split(/\r?\n/);
if(a.length!==b.length)throw Error('line count');
let patch='*** Begin Patch\n*** Update File: '+file+'\n';
for(let i=0;i<a.length;i++)if(a[i]!==b[i])patch+='@@\n-'+a[i]+'\n+'+b[i]+'\n';
console.log(patch+'*** End Patch');
