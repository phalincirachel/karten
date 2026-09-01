// Laufzeitangaben für Wikipedia-Absätze. Die Texte selbst stehen nicht in den
// Kartendateien; sie werden beim Öffnen aus der angegebenen Sprachversion geladen.
const WIKI_DETAILS={
  "Philosophische Begriffe":{
    "Dasein":["Dasein","de",1],
    "Kategorischer Imperativ":["Kategorischer Imperativ","de",1],
    "Conatus":["Conatus","de",1],
    "Epoché":["Epoche (Philosophie)","de",1],
    "Dialektik":["Dialektik","de",1],
    "Akrasia":["Akrasia","de",1],
    "Familienähnlichkeit":["Familienähnlichkeit","de",1],
    "Différance":["Différance","de",1],
    "Biomacht":["Bio-Macht","de",1],
    "Qualia":["Qualia","de",1],
    "Aufhebung":["Aufhebung","de",1],
    "Habitus":["Habitus","de",1],
    "Intentionalität":["Intentionalität","de",1],
    "Schleier des Nichtwissens":["Schleier des Nichtwissens","de",1],
    "Wu wei":["Wu wei","de",1],
    "Haecceitas · Diesheit":["Haecceitas","de",1],
    "Prohairesis":["Prohairesis","de",1],
    "Supererogation":["Supererogation","de",1]
  },
  "Erste Sätze großer Romane":{
    "Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.":["Der Process","de",1],
    "Über dem Atlantik befand sich ein barometrisches Minimum; es wanderte ostwärts, einem über Rußland lagernden Maximum zu, und verriet noch nicht die Neigung, diesem nördlich auszuweichen.":["Der Mann ohne Eigenschaften","de",1],
    "Mein Vater war ein Kaufmann.":["Der Nachsommer","de",1],
    "Call me Ishmael.":["Moby-Dick","de",1],
    "Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.":["Anna Karenina","de",1],
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.":["Stolz und Vorurteil","de",1],
    "Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.":["Middlemarch","de",1],
    "Nous étions à l’Étude, quand le Proviseur entra, suivi d’un nouveau habillé en bourgeois et d’un garçon de classe qui portait un grand pupitre.":["Madame Bovary","de",1],
    "An den Ufern der Havel lebte, um die Mitte des sechzehnten Jahrhunderts, ein Roßhändler, namens Michael Kohlhaas, Sohn eines Schulmeisters, einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit.":["Michael Kohlhaas","de",1],
    "Eduard – so nennen wir einen reichen Baron im besten Mannesalter – Eduard hatte in seiner Baumschule die schönste Stunde eines Aprilnachmittags zugebracht, um frisch erhaltene Pfropfreiser auf junge Stämme zu bringen.":["Die Wahlverwandtschaften","de",1],
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness …":["Eine Geschichte aus zwei Städten","de",1],
    "Mrs Dalloway said she would buy the flowers herself.":["Mrs. Dalloway","de",1],
    "Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.":["Ulysses","de",1],
    "This is the saddest story I have ever heard.":["The Good Soldier","en",1],
    "Я человек больной… Я злой человек.":["Aufzeichnungen aus dem Kellerloch","de",1],
    "The sun shone, having no alternative, on the nothing new.":["Murphy (Beckett)","de",1],
    "Vine a Comala porque me dijeron que acá vivía mi padre, un tal Pedro Páramo.":["Pedro Páramo","de",1],
    "私はその人を常に先生と呼んでいた。":["Kokoro (Roman)","de",1]
  },
  "Sagengestalten, Legenden und Märchen weltweit":{
    "Sedna · Inuit":["Sedna","de",2],
    "Anansi · Akan und Karibik":["Anansi","de",2],
    "Baba Jaga · Osteuropa":["Baba Jaga","de",2],
    "Māui · Polynesien":["Māui","de",2],
    "Sun Wukong · China":["Sun Wukong","de",2],
    "Coyote · Nordamerika":["Coyote (mythology)","en",2],
    "Erlik · Altai und Zentralasien":["Erlik","de",2],
    "Melusine · Frankreich und Luxemburg":["Melusine","de",2],
    "La Llorona · Mexiko":["La Llorona","de",2],
    "Saci-pererê · Brasilien":["Saci","de",2],
    "Inanna · Sumer":["Inanna","de",2],
    "Ame-no-Uzume · Japan":["Amenouzume","de",2],
    "Väinämöinen · Finnland und Karelien":["Väinämöinen","de",2],
    "Koschtschei der Todlose · Ostslawische Märchen":["Koschtschei","de",2],
    "Popocatépetl und Iztaccíhuatl · Mexiko":["Iztaccíhuatl","de",2],
    "Żaḥḥāk / Aži Dahāka · Iranische Überlieferung":["Zahhak","de",2],
    "Blodeuwedd · Wales":["Blodeuwedd","de",2],
    "Kintu, Nambi und Walumbe · Buganda":["Kintu","en",2]
  }
};

for(const card of window.KARTEN){
  if(card.category==="Aphorismen"){
    card.detail=[];
    delete card.summary;
    delete card.original;
  }
  const entry=WIKI_DETAILS[card.category]?.[card.title];
  if(entry){
    const [page,language,count]=entry;
    card.wiki={page,language,count};
    card.detail=[];
    const url=`https://${language}.wikipedia.org/wiki/${encodeURIComponent(page).replace(/%20/g,"_").replace(/%2F/g,"/")}`;
    if(!(card.sources||[]).some(source=>source.url===url))card.sources=[...(card.sources||[]),{label:`Wikipedia: ${page}`,url}];
  }
}
