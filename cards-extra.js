const komponistenErgaenzungen={
  "Louise Farrenc · Sinfonie Nr. 3 g-Moll, Scherzo":"Farrenc behandelt Holzbläser, Hörner und Streicher als selbstständige Gruppen und hält auch in schnellen Übergängen die Stimmen klar. Die Sinfonie zeigt, dass die französische Instrumentalmusik der 1840er Jahre weit über die damals dominierende Oper hinausging. Ihre Musik gehört in Programme zur frühen Romantik, weil sie Formarbeit und Orchesterklang auf dem Niveau ihrer bekannten Zeitgenossen verbindet.",
  "Dora Pejačević · Sinfonie fis-Moll op. 41":"Pejačević baut lange Spannungsbögen aus kleinen rhythmischen Zellen und führt spätromantische Harmonik in eine härtere, durchsichtige Orchesterfarbe. Das Werk erweitert die übliche Erzählung der mitteleuropäischen Sinfonik um eine kroatische Komponistin, die Mahler und Strauss kannte, deren Sprache jedoch eigenständig blieb.",
  "Rued Langgaard · Sphärenmusik":"Getrennte Orchestergruppen, Chorflächen, Orgel, eine entfernte Sopranstimme und lange gehaltene Klänge schaffen einen Raum, in dem Ereignisse aus verschiedenen Entfernungen zu kommen scheinen. Die Partitur von 1916 nimmt Verfahren vorweg, die erst Jahrzehnte später verbreitet wurden. Sie verdient Aufmerksamkeit als frühe, radikale Arbeit mit musikalischem Raum.",
  "Vítězslava Kaprálová · Militär-Sinfonietta op. 11":"Kaprálová verdichtet Marschrhythmus, Fanfaren und lyrische Episoden auf eine kurze Form. Instrumente wechseln rasch zwischen Vorder- und Hintergrund; selbst die großen Steigerungen bleiben beweglich. Das Werk zeigt eine junge Komponistin mit sicherer Orchestertechnik und gehört wegen dieser formalen Konzentration in das Repertoire der Zwischenkriegszeit.",
  "Mel Bonis · Femmes de légende":"Bonis charakterisiert jede Figur durch Harmonik, Register und Bewegung, ohne die Stücke in bloße Salonminiaturen zu verwandeln. Ihre Klaviermusik verlangt genaue Kontrolle von Klangschichten und Pedal. Sie lohnt eine neue Beschäftigung, weil sie französische Harmonik um 1900 aus einer lange ausgeblendeten Werkbiografie heraus hören lässt.",
  "Joseph Martin Kraus · Sinfonie c-Moll VB 142":"Kraus setzt abrupte Pausen, scharfe dynamische Gegensätze und ungewöhnlich dunkle Orchesterfarben ein. Die Sinfonie gehört zur gleichen Generation wie Haydns Pariser Sinfonien und besitzt eine eigene dramatische Grammatik. Sie sollte häufiger erklingen, weil sie das Bild der Klassik jenseits der vertrauten Wiener Namen erweitert.",
  "Juan Crisóstomo de Arriaga · Sinfonie D-Dur":"Arriaga verbindet kontrapunktische Sicherheit mit überraschenden Modulationen und einer beweglichen Behandlung der Holzbläser. Er schrieb die Sinfonie als Jugendlicher und starb mit neunzehn Jahren. Das Werk verdient regelmäßige Aufführungen, weil seine Qualität weit über das biografische Erstaunen hinausgeht.",
  "Albéric Magnard · Sinfonie Nr. 4 cis-Moll op. 21":"Magnard führt Motive über alle vier Sätze weiter und hält dichte Gegenstimmen auch in großen Steigerungen hörbar. Seine Musik verlangt Geduld, belohnt sie jedoch mit einer ungewöhnlich geschlossenen Architektur. Die geringe Verbreitung hängt auch mit seinem frühen Tod und dem Verlust von Manuskripten 1914 zusammen, kaum mit der Qualität der Sinfonie.",
  "Grażyna Bacewicz · Konzert für Streichorchester":"Bacewicz lässt kurze Motive durch die Stimmgruppen jagen, stellt raue Akkorde gegen klare Linien und nutzt den Rhythmus als tragende Formkraft. Das Konzert verbindet barocke Satztypen mit der Energie der polnischen Moderne. Es eignet sich als Einstieg in ein umfangreiches Werk, das zwischen Szymanowski und Lutosławski eine eigene Position einnimmt.",
  "Mieczysław Weinberg · Klavierquintett op. 18":"Weinberg verbindet jüdisch geprägte Melodik, Marschgesten, kammermusikalische Gegenrede und lange stille Abgänge. Die fünf Sätze halten persönliche Erfahrung und strenge Form in Spannung. Das Quintett macht hörbar, warum Weinberg als eigenständiger Komponist neben Schostakowitsch und nicht als dessen Randfigur behandelt werden sollte."
};

for(const card of window.KARTEN){const text=komponistenErgaenzungen[card.title];if(text)card.detail.push(text)}

const originalDateien={
  "Rabe bringt das Tageslicht · Tlingit":["texts/rabe-tlingit.txt","https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts/Wrangell_Raven_Myth"],
  "Sedna und der Eissturmvogel · Oqomiut und Akudnirmiut":["texts/sedna-boas.txt","https://www.gutenberg.org/files/42084/42084-h/42084-h.htm"],
  "Māui fängt die Sonne · Māori":["texts/maui-sun.txt","https://www.sacred-texts.com/pac/grey/grey04.htm"],
  "Warum Sonne und Mond am Himmel leben · Efik":["texts/sun-moon-efik.txt","https://sacred-texts.com/afr/fssn/fsn18.htm"],
  "Sonne, Mond und ihre Kinder · Visayas":["texts/sun-moon-visayas.txt","https://www.gutenberg.org/ebooks/12814"],
  "Das arme Truthahnmädchen · Zuni":["texts/turkey-girl-zuni.txt","https://www.sacred-texts.com/nam/zuni/zft/zft05.htm"],
  "Ṣàngó verlässt Ọ̀yọ́ · Yoruba":["texts/shango-ellis.txt","https://archive.org/details/yorubaspeakingp00elligoog"],
  "Raven reist · Haida":["texts/raven-haida.txt","https://www.gutenberg.org/ebooks/74172"],
  "Das Lied des Eulengottes · Ainu":["texts/owl-god-ainu.txt","https://www.aozora.gr.jp/cards/001529/files/44909_29558.html"],
  "Scarface im Haus der Sonne · Blackfoot":["texts/scarface-blackfoot.txt","https://www.sacred-texts.com/nam/pla/blt/blt15.htm"]
};

for(const card of window.KARTEN){const entry=originalDateien[card.title];if(entry)card.original={...card.original,file:entry[0],source:entry[1]}}

window.KARTEN=window.KARTEN.filter(card=>card.category!=="Historische Koinzidenzen");

const neueKarten=[
  {
    category:"Aphorismen",kind:"quote",title:"„Der Charakter des Menschen ist sein Daimon.“",byline:"Heraklit · Fragment B 119",
    detail:["Das griechische ēthos bezeichnet Charakter oder gewohnte Haltung; daimōn eine göttliche Macht, die einem Leben sein Los gibt. Heraklit rückt beides zusammen: Das Geschick kommt aus der Art, wie ein Mensch handelt und lebt.","Der Satz beseitigt weder Zufall noch äußere Gewalt. Er verändert den Blick auf das Verhältnis von Schicksal und Lebensführung. Gerade diese Spannung hat das Fragment zu einem der meistdiskutierten Sätze Heraklits gemacht."],
    original:{label:"Griechischer Wortlaut · Fragment B 119",text:"ἦθος ἀνθρώπῳ δαίμων."},
    media:[C("Heraclitus bust Capitoline Museum","Heraklit")],sources:[S("Perseus: Heraclitus, Fragment B 119","https://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.04.0057:entry=h)=qos")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Das Ich ist hassenswert.“",byline:"Blaise Pascal · Pensées, Fragment 455 (Lafuma)",
    detail:["Pascal richtet den Satz gegen ein Ich, das sich zum Mittelpunkt macht und von anderen Liebe, Anerkennung und Unterordnung verlangt. Im anschließenden Gedankengang unterscheidet er die Person von den wechselnden Eigenschaften, wegen derer sie geschätzt wird.","Die Härte des Satzes gehört zu seiner Methode. Er komprimiert eine Untersuchung von Eigenliebe, sozialer Rolle und persönlicher Identität auf drei Wörter."],
    original:{label:"Französischer Wortlaut",text:"Le moi est haïssable."},media:[C("Blaise Pascal portrait Philippe de Champaigne","Blaise Pascal")],sources:[S("Wikisource: Pensées, Abschnitt Le moi est haïssable","https://fr.wikisource.org/wiki/Pens%C3%A9es/%C3%89dition_de_Port-Royal/XXIX")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Was aus Liebe getan wird, geschieht immer jenseits von Gut und Böse.“",byline:"Friedrich Nietzsche · Jenseits von Gut und Böse, 153",
    detail:["Nietzsche setzt die Liebe hier gegen eine moralische Buchhaltung, die Handlungen sofort als gut oder böse verbucht. Liebe kann Regeln, Rangordnungen und die gewöhnliche Berechnung von Vorteil überschreiten.","Der Aphorismus erklärt solche Handlungen keineswegs für harmlos. Seine Pointe liegt darin, dass starke Bindungen die Kategorien verändern, mit denen Menschen ihr Tun beurteilen."],
    media:[C("Friedrich Nietzsche 1882 portrait","Friedrich Nietzsche")],sources:[S("Nietzsche Source: Jenseits von Gut und Böse, 153","http://www.nietzschesource.org/#eKGWB/JGB-153")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Ein Käfig ging einen Vogel suchen.“",byline:"Franz Kafka · Zürauer Zettel, 16",
    detail:["Kafka kehrt das erwartete Verhältnis um: Der Käfig wird zum handelnden Subjekt, der Vogel zum gesuchten Inhalt. Ein System der Begrenzung erzeugt sich damit den Gegenstand, den es einschließen will.","Der einzelne Satz lässt psychologische, politische und poetologische Lesarten zu. Seine Genauigkeit besteht darin, dass keine davon ausdrücklich festgelegt wird."],
    media:[C("Franz Kafka photograph 1923","Franz Kafka")],sources:[S("Franz Kafka: Zürauer Zettel · Kritische Ausgabe","https://de.wikisource.org/wiki/Betrachtungen_%C3%BCber_S%C3%BCnde,_Leid,_Hoffnung_und_den_wahren_Weg")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Der Teufel ist ein Optimist, wenn er glaubt, daß er die Menschen schlechter machen kann.“",byline:"Karl Kraus · Fackel 389/390",
    detail:["Kraus lässt den Teufel an der menschlichen Verderbnis scheitern. Der Witz entsteht aus der Umkehrung einer religiösen Figur: Der Verführer überschätzt die Möglichkeit weiterer Verschlechterung.","Die Pointe ist kurz, ihr Ziel weit. Sie betrifft die Selbstzufriedenheit einer Gesellschaft, die das Böse gern als fremde Einwirkung beschreibt."],
    media:[C("Karl Kraus portrait 1914","Karl Kraus")],sources:[S("Die Fackel · Österreichische Akademie der Wissenschaften","https://fackel.oeaw.ac.at/")]
  },

  {
    category:"Historische Koinzidenzen",title:"Robert Smalls und die Planter · 1862",
    detail:["Robert Smalls steuerte als versklavter Lotse den konföderierten Transportdampfer Planter im Hafen von Charleston. In der Nacht zum 13. Mai 1862 gingen die weißen Offiziere unerlaubt an Land. Smalls und die übrige versklavte Besatzung nahmen das Schiff, holten ihre Familien ab und fuhren unter konföderierten Flaggen zu den Hafenforts.","Smalls trug den Strohhut des Kapitäns und gab die richtigen Pfeifsignale. Hinter Fort Sumter hisste die Gruppe ein weißes Bettlaken und übergab Schiff, Geschütze und militärische Informationen der Unionsmarine. Sechzehn Menschen erreichten die Freiheit. Smalls wurde später Schiffskapitän und Abgeordneter im US-Kongress."],
    media:[C("Robert Smalls portrait","Robert Smalls"),C("Gunboat Planter Robert Smalls 1862","Die Planter")],sources:[S("National Park Service: The Planter","https://www.nps.gov/articles/000/the-planter.htm")]
  },
  {
    category:"Historische Koinzidenzen",title:"Wojtek · der Bär im polnischen Armeekorps",
    detail:["Polnische Soldaten kauften 1942 im Iran einen jungen Syrischen Braunbären. Wojtek reiste mit der 22. Artillerieversorgungskompanie durch den Nahen Osten nach Italien. Damit er auf einem britischen Truppenschiff mitfahren durfte, wurde er offiziell als Soldat mit Dienstnummer und Soldbuch geführt.","Bei Monte Cassino trug die Einheit schwere Munitionskisten. Zeitzeugen schrieben Wojtek dabei eine helfende Rolle zu; ein Bär mit Granate wurde zum Abzeichen der Kompanie. Nach dem Krieg lebte er im Zoo von Edinburgh. Die Geschichte zeigt auch den langen Weg der polnischen Soldaten, die nach Krieg und sowjetischer Machtübernahme kaum in ihre Heimat zurückkehren konnten."],
    media:[C("Wojtek bear Polish soldiers","Wojtek mit polnischen Soldaten"),C("Wojtek bear memorial Edinburgh","Wojtek-Denkmal")],sources:[S("Imperial War Museums: Wojtek","https://memorials.iwm.org.uk/memorial/78065")]
  },
  {
    category:"Historische Koinzidenzen",title:"Juan Pujol García · ein erfundenes Spionagenetz",
    detail:["Juan Pujol wollte gegen den Nationalsozialismus arbeiten. Nachdem britische Stellen ihn zunächst abgewiesen hatten, bot er sich Deutschland als Agent an. Von Lissabon aus schrieb er Berichte über Großbritannien, das er anfangs nie besucht hatte. Reiseführer, Fahrpläne und Zeitungen lieferten das Material.","Der britische Geheimdienst übernahm ihn später als Doppelagent Garbo. Pujol und sein Führungsoffizier Tomás Harris erfanden ein Netz aus 27 Agenten mit Lebensläufen, Ausgaben und Konflikten. 1944 halfen ihre Meldungen, die deutsche Führung vom angeblichen Hauptangriff bei Calais zu überzeugen. Deutschland verlieh Pujol das Eiserne Kreuz; Großbritannien ernannte ihn zum Member of the Order of the British Empire."],
    media:[C("Juan Pujol Garcia Agent Garbo portrait","Juan Pujol García"),C("Operation Fortitude map Pas de Calais","Täuschungsplan vor der Landung in der Normandie")],sources:[S("MI5: Agent Garbo","https://www.mi5.gov.uk/history/world-war-ii/agent-garbo")]
  },
  {
    category:"Historische Koinzidenzen",title:"Operation Mincemeat · der erfundene Major William Martin",
    detail:["Britische Nachrichtendienste statteten 1943 den Leichnam von Glyndwr Michael mit Uniform, Ausweisen, Liebesbriefen, Quittungen und persönlichen Gegenständen aus. In einer Aktentasche lagen gefälschte Briefe, die einen alliierten Angriff auf Griechenland und Sardinien andeuteten. Ein U-Boot setzte den Toten vor der spanischen Küste aus.","Spanische Stellen ließen die Dokumente von deutschen Agenten fotografieren. Die deutsche Führung verlegte Kräfte, während die Alliierten Sizilien angriffen. Die Täuschung funktionierte, weil sie neben militärischen Papieren ein glaubwürdiges privates Leben konstruierte. Erst 1998 erhielt das Grab den Zusatz, dass William Martin in Wirklichkeit Glyndwr Michael war."],
    media:[C("Operation Mincemeat identity card William Martin","Ausweis des erfundenen William Martin"),C("Glyndwr Michael grave Huelva","Grab in Huelva")],sources:[S("The National Archives: Operation Mincemeat","https://www.nationalarchives.gov.uk/education/resources/operation-mincemeat/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Tsutomu Yamaguchi · Hiroshima und Nagasaki",
    detail:["Der Ingenieur Tsutomu Yamaguchi befand sich am 6. August 1945 auf Dienstreise in Hiroshima. Die Atombombe verletzte und verbrannte ihn. Am nächsten Tag fuhr er trotz seiner Wunden nach Nagasaki zurück.","Am 9. August berichtete er seinem Vorgesetzten von der Explosion. Während des Gesprächs detonierte die zweite Atombombe. Yamaguchi überlebte auch diesen Angriff und wurde 2009 von der japanischen Regierung offiziell als Betroffener beider Bomben anerkannt. Später sprach er öffentlich für die Abschaffung von Atomwaffen."],
    media:[C("Tsutomu Yamaguchi photograph","Tsutomu Yamaguchi"),C("Nagasaki atomic cloud 1945","Nagasaki, 9. August 1945")],sources:[S("Atomic Heritage Foundation: Tsutomu Yamaguchi","https://ahf.nuclearmuseum.org/ahf/profile/tsutomu-yamaguchi/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Mary Toft und die Kaninchen · 1726",
    detail:["Mary Toft aus Godalming behauptete 1726, Kaninchenteile und andere Tierstücke geboren zu haben. Der örtliche Chirurg John Howard bestätigte mehrere angebliche Geburten. Berichte erreichten den Hof Georgs I.; Ärzte reisten an und untersuchten sie.","In London wurde ein Diener dabei ertappt, wie er ein Kaninchen beschaffen wollte. Toft gestand, dass Tierstücke eingeführt worden waren. Der Fall beschädigte den Ruf mehrerer Ärzte und wurde von William Hogarth verspottet. Er zeigt, wie Autorität, Sensationspresse und der Wunsch nach einem Wunder eine grobe Täuschung zeitweise stabilisieren konnten."],
    media:[C("Mary Toft rabbits engraving Hogarth","William Hogarths Satire auf Mary Toft"),C("Mary Toft portrait 1726","Mary Toft")],sources:[S("Wellcome Collection: Mary Toft","https://wellcomecollection.org/works?query=Mary%20Toft")]
  },
  {
    category:"Historische Koinzidenzen",title:"Der olympische Marathon von St. Louis · 1904",
    detail:["Der Marathon wurde bei Hitze auf staubigen Straßen gelaufen. Fred Lorz fuhr einen großen Teil der Strecke im Auto und lief nach einer Panne ins Stadion, wo er zunächst wie der Sieger empfangen wurde. Félix Carvajal aus Kuba hatte unterwegs Obst gegessen, bekam Magenkrämpfe und machte ein Nickerchen.","Thomas Hicks erreichte das Ziel, nachdem seine Betreuer ihm Eiweiß, Brandy und kleine Dosen Strychnin gegeben hatten. Wasser erhielt er kaum. Er wurde getragen, sobald er die Ziellinie überschritten hatte. Das Rennen zeigt den Abstand zwischen dem heutigen Bild des Hochleistungssports und einer Zeit ohne ausgereifte Regeln, Versorgung und medizinisches Verständnis."],
    media:[C("Thomas Hicks 1904 Olympic marathon","Thomas Hicks während des Marathons"),C("Felix Carvajal 1904 marathon","Félix Carvajal")],sources:[S("Olympic World Library: St. Louis 1904","https://library.olympics.com/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die tanzende Menge von Straßburg · 1518",
    detail:["Im Juli 1518 begann eine Frau, die Quellen als Frau Troffea bezeichnen, auf einer Straße in Straßburg zu tanzen. In den folgenden Wochen schlossen sich viele Menschen an. Die Stadtverwaltung ließ Hallen öffnen und Musiker spielen, weil man Bewegung für ein Heilmittel hielt.","Die Maßnahme verlängerte das Geschehen. Später brachte man Betroffene zu einem Schrein des heiligen Vitus. Chroniken nennen Erschöpfung und Todesfälle, genaue Zahlen bleiben unsicher. Erklärungen reichen von religiös geprägter Massenerkrankung bis zu extremem sozialem Stress nach Hunger und Seuchen. Der Fall erinnert daran, historische Symptome im damaligen Weltbild zu lesen."],
    media:[C("Dancing plague 1518 Strasbourg engraving","Darstellung einer Tanzkrankheit"),C("Strasbourg 16th century map","Straßburg im 16. Jahrhundert")],sources:[S("Encyclopaedia Britannica: Dancing plague of 1518","https://www.britannica.com/event/dancing-plague-of-1518")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die Melasseflut von Boston · 1919",
    detail:["Am 15. Januar 1919 riss im North End von Boston ein riesiger Stahltank. Rund 8,7 Millionen Liter Melasse strömten durch die Straßen, zerdrückten Gebäude und beschädigten die Hochbahn. 21 Menschen starben, etwa 150 wurden verletzt.","Der Tank war hastig gebaut, unzureichend geprüft und wiederholt undicht geworden. Nach einem langen Verfahren musste die Eigentümerfirma Entschädigung zahlen. Die Untersuchung machte technische Verantwortung und unabhängige Bauprüfung zu öffentlichen Fragen. Das Ereignis wirkt wegen des Stoffes bizarr; seine Ursache war gewöhnliche Nachlässigkeit."],
    media:[C("Great Molasses Flood Boston 1919","Folgen der Melasseflut"),C("Purity Distilling tank Boston","Der Melassetank vor dem Bruch")],sources:[S("Mass Moments: Great Molasses Flood","https://www.massmoments.org/moment-details/great-molasses-flood.html")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die Leichensynode · Rom 897",
    detail:["Papst Stephan VI. ließ den Leichnam seines Vorgängers Formosus ausgraben, in päpstliche Gewänder kleiden und vor ein Kirchengericht setzen. Ein Diakon antwortete für den Toten. Das Gericht erklärte Formosus' Amtshandlungen für ungültig, schnitt die Segensfinger ab und ließ den Körper in den Tiber werfen.","Hinter dem Verfahren standen römische Adelskämpfe und wechselnde Bündnisse um die Kaiserkrone. Die öffentliche Empörung trug zum Sturz Stephans bei; er wurde noch im selben Jahr im Gefängnis erdrosselt. Spätere Päpste änderten die Urteile erneut. Der Vorgang zeigt, wie juristische Formen zur Bühne politischer Rache werden können."],
    media:[C("Cadaver Synod painting Laurens","Jean-Paul Laurens: Die Leichensynode"),C("Pope Formosus engraving","Papst Formosus")],sources:[S("Encyclopaedia Britannica: Cadaver Synod","https://www.britannica.com/event/Cadaver-Synod")]
  },
  {
    category:"Historische Koinzidenzen",title:"Der Prager Fenstersturz · 1618",
    detail:["Böhmische protestantische Adlige drangen am 23. Mai 1618 in die Prager Burg ein. Nach einem Streit warfen sie die königlichen Statthalter Jaroslav Bořita von Martinic und Wilhelm Slavata sowie den Schreiber Philipp Fabricius aus einem Fenster.","Alle drei überlebten den Sturz. Katholische Berichte sprachen von göttlicher Rettung; Gegner verwiesen auf den weichen Abfall unter dem Fenster. Fabricius floh und wurde später mit einem Adelstitel geehrt, der sinngemäß „von Hohenfall“ lautete. Der Angriff wurde zum Auftakt des böhmischen Aufstands und des Dreißigjährigen Krieges."],
    media:[C("Defenestration of Prague 1618 illustration","Prager Fenstersturz"),C("Prague Castle defenestration window","Fenster der Böhmischen Kanzlei")],sources:[S("Prague City Tourism: Alter Königspalast","https://prague.eu/de/objevujte/prager-burg-alter-konigspalast-stary-kralovsky-palac/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die Vasa · 1.300 Meter Jungfernfahrt",
    detail:["Die schwedische Vasa verließ am 10. August 1628 festlich geschmückt den Stockholmer Hafen. Das Kriegsschiff war hoch, schmal und mit schweren Aufbauten sowie 64 Kanonen beladen. Eine Böe legte es auf die Seite; Wasser strömte durch die offenen Stückpforten.","Nach ungefähr zwanzig Minuten und 1.300 Metern lag das Schiff auf dem Grund. Rund dreißig Menschen starben. Eine Untersuchung suchte Schuldige, doch Entwurf, königlicher Zeitdruck und geteilte Verantwortung ließen sich kaum auf eine Person reduzieren. 1961 wurde die Vasa gehoben; mehr als 98 Prozent ihrer ursprünglichen Struktur blieben erhalten."],
    media:[C("Vasa ship museum Stockholm","Die erhaltene Vasa"),C("Vasa sinking 1628 painting","Der Untergang der Vasa")],sources:[S("Vasa Museum: The Disaster","https://www.vasamuseet.se/en/explore/vasa-history/disaster")]
  },
  {
    category:"Historische Koinzidenzen",title:"Nellie Bly · in 72 Tagen um die Welt",
    detail:["Die Reporterin Nellie Bly verließ New York am 14. November 1889, um Jules Vernes fiktive Reisezeit zu unterbieten. Sie reiste mit einem kleinen Handgepäckstück per Dampfschiff und Eisenbahn. In Amiens traf sie Verne; in Hongkong erfuhr sie, dass das Magazin Cosmopolitan Elizabeth Bisland in die Gegenrichtung geschickt hatte.","Bly erreichte Jersey City nach 72 Tagen, 6 Stunden, 11 Minuten und 14 Sekunden. Die Zeitung machte aus der Reise ein Massenereignis mit täglichen Meldungen und einem Preisausschreiben. Bly nutzte die Aufmerksamkeit später weiter für Reportagen über Arbeitsbedingungen, Politik und Frauenrechte."],
    media:[C("Nellie Bly around the world 1890","Nellie Bly nach der Weltreise"),C("Nellie Bly travel route map","Route der Weltreise")],sources:[S("Smithsonian Magazine: Nellie Bly's 72-day journey","https://www.smithsonianmag.com/smart-news/new-vr-experience-lets-users-join-nellie-bly-her-72-day-trip-around-world-180971034/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die Befreiung von Schloss Itter · 1945",
    detail:["Im österreichischen Schloss Itter hielt die SS prominente französische Gefangene fest, darunter frühere Minister, Generäle und den Tennisspieler Jean Borotra. Nach dem Zusammenbruch der Wachmannschaft suchten die Gefangenen Hilfe bei österreichischen Widerstandskämpfern.","Am 5. Mai 1945 verteidigten wenige US-Soldaten, Wehrmachtssoldaten unter Major Josef Gangl, Widerstandskämpfer und die französischen Gefangenen das Schloss gemeinsam gegen eine Einheit der Waffen-SS. Gangl fiel im Kampf. Die ungewöhnliche Allianz entstand aus der lokalen Lage der letzten Kriegstage und verdeckt zugleich kaum, dass die beteiligten Wehrmachtssoldaten zuvor Teil des deutschen Kriegsapparats gewesen waren."],
    media:[C("Castle Itter Austria photograph","Schloss Itter"),C("Josef Gangl portrait","Josef Gangl")],sources:[S("U.S. Army: Battle for Castle Itter","https://www.army.mil/article/183253/the_strangest_battle_of_world_war_ii")]
  },
  {
    category:"Historische Koinzidenzen",title:"Semmelweis und das Chlorkalkwasser",
    detail:["Ignaz Semmelweis verglich 1847 zwei Geburtskliniken im Wiener Allgemeinen Krankenhaus. In der von Ärzten und Studenten betreuten Abteilung starben deutlich mehr Frauen am Kindbettfieber. Nach dem Tod eines Kollegen erkannte Semmelweis eine Verbindung zu Leichensektionen.","Er ordnete Händewaschen mit Chlorkalklösung vor Untersuchungen an; die Sterblichkeit sank stark. Eine Keimtheorie stand noch aus, Semmelweis erklärte den Mechanismus unvollständig und kommunizierte zunehmend scharf. Viele Kollegen lehnten seine Folgerungen ab. Der Fall zeigt, dass überzeugende Daten ohne tragfähige Erklärung, institutionelle Veränderung und klare Vermittlung folgenlos bleiben können."],
    media:[C("Ignaz Semmelweis portrait","Ignaz Semmelweis"),C("Semmelweis hand washing hospital illustration","Händewaschen mit Chlorkalk")],sources:[S("Encyclopaedia Britannica: Ignaz Semmelweis","https://www.britannica.com/biography/Ignaz-Semmelweis")]
  },
  {
    category:"Historische Koinzidenzen",title:"Die Große Bierflut von London · 1814",
    detail:["Am 17. Oktober 1814 brach in der Meux-Brauerei an der Tottenham Court Road ein eiserner Ring an einem großen Porterfass. Das Fass barst, weitere Behälter wurden aufgerissen und eine Welle aus Bier lief in die engen Häuser von St. Giles.","Acht Menschen starben. Ein Gericht wertete das Unglück als unabwendbares Ereignis; die Brauerei erhielt einen Teil der bereits gezahlten Biersteuer zurück. Hinter der seltsamen Bezeichnung steht die Gefahr industrieller Großbehälter mitten in einem armen Wohnviertel."],
    media:[C("Meux Brewery London beer flood","Meux-Brauerei"),C("London Beer Flood illustration 1814","Darstellung der Bierflut")],sources:[S("Museum of London: London Beer Flood","https://www.londonmuseum.org.uk/collections/london-stories/the-london-beer-flood/")]
  }
];
neueKarten.pop(); // Bierflut: vorbereiteter Überschuss; jede Kategorie bleibt bei 15 Karten.
window.KARTEN.push(...neueKarten);
