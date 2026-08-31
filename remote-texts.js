// Öffentliche Volltexte, die erst beim Öffnen einer Karte geladen werden.
// Die lokalen Dateien unter texts/ bleiben als Arbeitsstand erhalten; die Anwendung
// greift für diese Karten ausschließlich auf die hier genannten Onlinequellen zu.
const GITENBERG={
  dayrell:"https://raw.githubusercontent.com/GITenberg/Folk-Stories-from-Southern-Nigeria-West-Africa_34655/master/34655-8.txt",
  boas:"https://raw.githubusercontent.com/GITenberg/The-Central-EskimoGovernment-Printing-Office-Washington-1888-pages-399-670_42084/master/42084-0.txt",
  cole:"https://raw.githubusercontent.com/GITenberg/Philippine-Folk-Tales_12814/master/12814-8.txt",
  cushing:"https://raw.githubusercontent.com/GITenberg/Zuni-Folk-Tales_54682/master/54682-0.txt",
  swantonHaida:"https://raw.githubusercontent.com/GITenberg/Haida-texts-and-myths-b-Skidegate-dialect_74172/master/74172-0.txt",
  grinnell:"https://raw.githubusercontent.com/GITenberg/Blackfoot-Lodge-Tales--13-The-Story-of-a-Prairie-People_11547/master/11547-8.txt"
};
const GREY="https://archive.org/download/polynesianmythol00grey_0/polynesianmythol00grey_0_djvu.txt";
const remoteOriginals={
  "Rabe bringt das Tageslicht · Tlingit":{wikiPage:"Tlingit_Myths_and_Texts/Wrangell_Raven_Myth",wikiLanguage:"en",fetchLabel:"Wikisource-Transkription"},
  "Sedna und der Eissturmvogel · Oqomiut und Akudnirmiut":{url:GITENBERG.boas,start:"SEDNA AND THE FULMAR.",end:"This tradition is handed down in an old song.",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Māui fängt die Sonne · Māori":{url:GREY,start:"The young hero, Maui, had not been long at home",end:"Maui-taha and his brothers after this feat",flexibleMarkers:true,reflow:true,ocr:true,replacements:[["eyery day","every day"],["risnig up","rising up"],["Tama- nui-te-Ea","Tama-nui-te-Ra"],["oh, man 1","oh, man!"]],fetchLabel:"Digitalisat-Text bei Internet Archive"},
  "Warum Sonne und Mond am Himmel leben · Efik":{url:GITENBERG.dayrell,encoding:"windows-1252",start:"_Why the Sun and the Moon live in the Sky_",end:"XVII\n\n_Why the Flies Bother the Cows_",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Sonne, Mond und ihre Kinder · Visayas":{url:GITENBERG.cole,encoding:"windows-1252",start:"The Sun and the Moon [160]",end:"The First Monkey",reflow:true,stripPageMarkers:true,fetchLabel:"GITenberg-Transkription"},
  "Das arme Truthahnmädchen · Zuni":{url:GITENBERG.cushing,start:"THE POOR TURKEY GIRL\n\n\nLong, long ago",end:"[Illustration: {Pottery containers}]",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Ṣàngó verlässt Ọ̀yọ́ · Yoruba":{wikiPages:["Page:THE YORUBA SPEAKING PEOPLE OF THE SLAVE COAST OF WEST AFRICA by A. B Ellis.pdf/60","Page:THE YORUBA SPEAKING PEOPLE OF THE SLAVE COAST OF WEST AFRICA by A. B Ellis.pdf/61","Page:THE YORUBA SPEAKING PEOPLE OF THE SLAVE COAST OF WEST AFRICA by A. B Ellis.pdf/62"],wikiLanguage:"en",start:"The foregoing are, with the exception of the myth",end:"Perhaps this myth really does refer",reflow:true,replacements:[["corpse banging by the neck","corpse hanging by the neck"],["place whore the slave","place where the slave"],["could. hear","could hear"],["In consequenoo","In consequence"],["power, be killed","power, he killed"]],fetchLabel:"validierte Wikisource-Seiten"},
  "Raven reist · Haida":{url:GITENBERG.swantonHaida,start:"RAVEN TRAVELING",end:"THE ONE ABANDONED FOR EATING THE FLIPPER OF A HAIR SEAL",reflow:true,stripPageMarkers:true,fetchLabel:"GITenberg-Transkription"},
  "Das Lied des Eulengottes · Ainu":{url:"https://raw.githubusercontent.com/aozorahack/aozorabunko_text/master/cards/001529/files/44909_ruby_29000/44909_ruby_29000.txt",encoding:"shift_jis",start:"    Kamuichikap kamui yaieyukar,\n    “Shirokanipe",end:" Chironnup yaieyukar,“Towa towa to”",aozora:true,fetchLabel:"Aozora-Bunko-Textspiegel"},
  "Scarface im Haus der Sonne · Blackfoot":{url:GITENBERG.grinnell,encoding:"windows-1252",start:"SCARFACE\n\nORIGIN OF THE MEDICINE LODGE",end:"ORIGIN OF THE I-KUN-UH'-KAH-TSI",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Die Ermordung Tuwhakararos · Māori":{url:GREY,start:"THE LEGEND OF TUWHAKARARO, HOW HE WAS MUEDEEED AND AVENGED.",end:"THE LEGEND OF RATA,",flexibleMarkers:true,reflow:true,ocr:true,replacements:[["MUEDEEED","MURDERED"]],fetchLabel:"Digitalisat-Text bei Internet Archive"},
  "Die Schildkröte mit der schönen Tochter · Efik":{url:GITENBERG.dayrell,encoding:"windows-1252",start:"_The Tortoise with a Pretty Daughter_",end:"II\n\n_How a Hunter obtained Money",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Die Frau mit zwei Häuten · Efik":{url:GITENBERG.dayrell,encoding:"windows-1252",start:"_The Woman with Two Skins_",startLast:true,end:"IV\n\n_The King's Magic Drum_",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Warum die Fledermaus nachts fliegt · Efik":{url:GITENBERG.dayrell,encoding:"windows-1252",start:"_Why the Bat flies by Night_",end:"VIII\n\n_The Disobedient Daughter who Married a Skull_",reflow:true,fetchLabel:"GITenberg-Transkription"},
  "Die Zaubertrommel · Efik":{url:GITENBERG.dayrell,encoding:"windows-1252",start:"_The King's Magic Drum_",startLast:true,end:"V\n\n_Ituen and the King's Wife_",reflow:true,fetchLabel:"GITenberg-Transkription"}
};

for(const card of window.KARTEN){
  const remote=remoteOriginals[card.title];
  if(remote){const original={...card.original,source:card.original?.source||card.sources?.[0]?.url,remote};delete original.file;card.original=original}
}
