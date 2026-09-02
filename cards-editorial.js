// Redaktionelle Regeln für Zitate und extern geladene Nachschlagetexte.
(() => {
  "use strict";

  const wikiTargets = new Map([
    // Philosophische Begriffe: außen kurze Definition, innen Wikipedia-Absätze.
    ["Dasein", ["Dasein", "de", 2]],
    ["Kategorischer Imperativ", ["Kategorischer Imperativ", "de", 2]],
    ["Conatus", ["Conatus", "de", 2]],
    ["Epoché", ["Epoché", "de", 2]],
    ["Dialektik", ["Dialektik", "de", 2]],
    ["Akrasia", ["Akrasia", "de", 2]],
    ["Familienähnlichkeit", ["Familienähnlichkeit", "de", 2]],
    ["Différance", ["Différance", "de", 2]],
    ["Biomacht", ["Biomacht", "de", 2]],
    ["Qualia", ["Qualia", "de", 2]],
    ["Aufhebung", ["Aufhebung (Philosophie)", "de", 2]],
    ["Habitus", ["Habitus (Soziologie)", "de", 2]],
    ["Intentionalität", ["Intentionalität", "de", 2]],
    ["Schleier des Nichtwissens", ["Schleier des Nichtwissens", "de", 2]],
    ["Wu wei", ["Wu wei", "de", 2]],
    ["Haecceitas · Diesheit", ["Haecceitas", "de", 2]],
    ["Prohairesis", ["Prohairesis", "de", 2]],
    ["Supererogation", ["Supererogation", "de", 2]],

    // Erste Sätze: innen der erste vollständige Wikipedia-Absatz zum Roman.
    ["Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.", ["Der Process", "de", 1]],
    ["Über dem Atlantik befand sich ein barometrisches Minimum; es wanderte ostwärts, einem über Rußland lagernden Maximum zu, und verriet noch nicht die Neigung, diesem nördlich auszuweichen.", ["Der Mann ohne Eigenschaften", "de", 1]],
    ["Mein Vater war ein Kaufmann.", ["Anton Reiser", "de", 1]],
    ["Call me Ishmael.", ["Moby-Dick", "de", 1]],
    ["Alle glücklichen Familien gleichen einander, jede unglückliche Familie ist auf ihre eigene Weise unglücklich.", ["Anna Karenina", "de", 1]],
    ["It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", ["Pride and Prejudice", "en", 1]],
    ["Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.", ["Middlemarch", "en", 1]],
    ["Wir waren im Studiersaal, als der Direktor eintrat, gefolgt von einem Neuen in bürgerlicher Kleidung und einem Schuldiener, der ein großes Pult trug.", ["Madame Bovary", "de", 1]],
    ["An den Ufern der Havel lebte, um die Mitte des sechzehnten Jahrhunderts, ein Roßhändler, namens Michael Kohlhaas, Sohn eines Schulmeisters, einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit.", ["Michael Kohlhaas", "de", 1]],
    ["Eduard – so nennen wir einen reichen Baron im besten Mannesalter – Eduard hatte in seiner Baumschule die schönste Stunde eines Aprilnachmittags zugebracht, um frisch erhaltene Pfropfreiser auf junge Stämme zu bringen.", ["Die Wahlverwandtschaften", "de", 1]],
    ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness …", ["A Tale of Two Cities", "en", 1]],
    ["Mrs Dalloway said she would buy the flowers herself.", ["Mrs Dalloway", "en", 1]],
    ["Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.", ["Ulysses (novel)", "en", 1]],
    ["This is the saddest story I have ever heard.", ["The Good Soldier", "en", 1]],
    ["Ich bin ein kranker Mensch … Ich bin ein böser Mensch.", ["Aufzeichnungen aus dem Kellerloch", "de", 1]],
    ["The sun shone, having no alternative, on the nothing new.", ["Murphy (novel)", "en", 1]],
    ["Ich kam nach Comala, weil man mir gesagt hatte, hier lebe mein Vater, ein gewisser Pedro Páramo.", ["Pedro Páramo", "de", 1]],
    ["Ich nannte diesen Menschen immer Sensei.", ["Kokoro (Roman)", "de", 1]],

    // Sagengestalten: mehrere zusammenhängende Wikipedia-Absätze.
    ["Sedna · Inuit", ["Sedna (Mythologie)", "de", 3]],
    ["Anansi · Akan und Karibik", ["Anansi", "de", 3]],
    ["Baba Jaga · Osteuropa", ["Baba Jaga", "de", 3]],
    ["Māui · Polynesien", ["Māui (Mythologie)", "de", 3]],
    ["Sun Wukong · China", ["Sun Wukong", "de", 3]],
    ["Coyote · Nordamerika", ["Coyote (Mythologie)", "de", 3]],
    ["Erlik · Altai und Zentralasien", ["Erlik", "de", 3]],
    ["Melusine · Frankreich und Luxemburg", ["Melusine", "de", 3]],
    ["La Llorona · Mexiko", ["La Llorona", "de", 3]],
    ["Saci-pererê · Brasilien", ["Saci (Brazilian folklore)", "en", 3]],
    ["Inanna · Sumer", ["Inanna", "de", 3]],
    ["Ame-no-Uzume · Japan", ["Ame-no-Uzume", "de", 3]],
    ["Väinämöinen · Finnland und Karelien", ["Väinämöinen", "de", 3]],
    ["Koschtschei der Todlose · Ostslawische Märchen", ["Koschtschei", "de", 3]],
    ["Popocatépetl und Iztaccíhuatl · Mexiko", ["Popocatépetl and Iztaccíhuatl", "en", 3]],
    ["Żaḥḥāk / Aži Dahāka · Iranische Überlieferung", ["Zahhak", "en", 3]],
    ["Blodeuwedd · Wales", ["Blodeuwedd", "en", 3]],
    ["Kintu, Nambi und Walumbe · Buganda", ["Kintu", "en", 3]]
  ]);

  const definitions = new Map([
    ["Oikeiosis", "Die stufenweise Aneignung des eigenen Lebens und der Beziehungen zu anderen."],
    ["Präsentismus", "Nur gegenwärtige Dinge und Ereignisse existieren."],
    ["Epistemische Ungerechtigkeit", "Unrecht, das einer Person als Wissender oder Sprecherin widerfährt."],
    ["Mereologie", "Die Lehre von Teilen, Ganzen und ihren Beziehungen."],
    ["Parrhesia", "Freimütiges Wahrsprechen trotz persönlicher Gefahr."],
    ["Schleier des Nichtwissens", "Grundsätze werden hinter einem Schleier gewählt, der die spätere gesellschaftliche Stellung verbirgt."]
  ]);

  const summaryOverrides = new Map([
    ["One Terabyte of Kilobyte Age", "Das Projekt veröffentlicht fortlaufend rekonstruierte GeoCities-Seiten aus einem geretteten Terabyte Daten."]
  ]);

  const detailOverrides = new Map([
    ["Ethel Smyth · The Wreckers", {1:"Leitmotive, Chorszenen und die wechselnde Klanggestalt des Meeres halten die Handlung zusammen. The Wreckers ist eine geschlossene englische Oper aus der Zeit um 1900."}],
    ["Sutartinės · Nordostlitauen", {0:"Kurze Melodien aus zwei bis fünf Tönen werden auf zwei, drei oder vier Sängerinnen verteilt. Zwei Stimmen laufen in parallelen Sekunden; drei Stimmen setzen dieselben Phrasen als strengen Kanon versetzt ein. Haupttext und Refrain erklingen gleichzeitig, sodass Sekundenreibungen, Synkopen und wechselnde Wortakzente den charakteristischen Puls bilden."}],
    ["Chopi-Timbila · Mosambik", {0:"Ein Orchester vereint fünf bis dreißig Timbila-Xylophone verschiedener Register. Unter jedem Stab sitzt eine mit Bienenwachs abgedichtete Kalebasse als Resonator; eine Membran färbt den Ton nasal und lässt ihn vibrieren. Die beiden Hände eines Spielers führen verschiedene Rhythmen aus, während mehrere Register ineinandergreifen."}],
    ["Johanna Senfter · Sinfonien Nr. 1 und 9", {1:"Der Abstand von 35 Jahren macht Senfters Entwicklung von einer gedrängten spätromantischen Sinfonik zu einer stärker integrierten Choralform hörbar. Mit der ersten und letzten ihrer neun Sinfonien liegen inzwischen zwei Endpunkte eines Orchesterwerks auf Aufnahme vor, das zuvor fast vollständig unaufgenommen war."}],
    ["Ina Boyle · Sinfonie Nr. 1 „Glencree“", {1:"Boyle formt Landschaft durch Register, Textur und Tempo und hält die drei Ortsbilder in einer knappen sinfonischen Proportion. Die vollständige Uraufführung erfolgte erst 1945; große Teile ihres Œuvres blieben als Manuskripte im Trinity College Dublin schwer zugänglich. Die genaue Orchestrierung von Glencree erschließt eine irische Sinfonik zwischen Spätromantik und Moderne."}],
    ["Henriëtte Bosmans · Zweites Cellokonzert", {1:"Bosmans schreibt lange, sprachähnliche Bögen für das Cello und bindet den Solisten durch kammermusikalische Dialoge an Harfe, Holzbläser und Konzertmeister. Sie vollendete das Werk 1923 für Frieda Belinfante, die am 31. Januar 1924 die Uraufführung spielte. Nach der letzten bekannten Aufführung 1933 verschwand es für Jahrzehnte. Melodische Sicherheit, rasche Stimmungswechsel und transparente Orchesterfarben kennzeichnen ein eigenständiges Cellokonzert."}],
    ["Gefundenes Manuskript", {0:"Der fingierte Überlieferungsweg verteilt die Verantwortung auf Autor, Herausgeber, Übersetzer und angebliche Zeugen. Dadurch wirkt der Text beglaubigt, während Widersprüche Zweifel an seiner Herkunft wecken."}],
    ["Offenbarendes Porträt", {0:"Im Porträt lebt die abwesende Person als Bildkörper weiter; ein Charakterzug wird verdichtet, und die Betrachtung selbst erhält Gewalt. Kamera und Erzählstimme korrigieren seine erste Deutung im weiteren Verlauf."}],
    ["Telefon-Split-Screen", {0:"Die Teilung legt zwei Ereignisse in denselben Moment und erlaubt Blickbeziehungen, die räumlich unmöglich sind. Form und Anzahl der Segmente ordnen die Lage der Beteiligten."}],
    ["Substitutionsschnitt", {0:"Beim Zusammenfügen verschwinden Unterbrechung und Austausch. Eine Person verwandelt sich augenblicklich in einen Gegenstand, verschwindet oder vervielfacht sich."}],
    ["Elfrida Andrée · Orgelsinfonie Nr. 2 Es-Dur, II. Andante cantabile", {1:"Andrée schrieb das Werk 1892 für Orgel und Blechbläser. Getragener Orgelklang und atmende Bläserphrasen bleiben auch in der seltenen, klangstarken Besetzung genau ausbalanciert. Diese Behandlung von Register, Atem und Raum begründet den Rang des Satzes."}],
    ["Ernst Mielck · Sinfonie f-Moll op. 4, III. Andante cantabile", {1:"Mielck vollendete die Sinfonie 1897 und starb zwei Jahre später mit einundzwanzig Jahren. Das Andante beherrscht bereits die Großform und arbeitet mit einer klaren, persönlichen finnischen Orchesterfarbe. Diese musikalischen Eigenschaften tragen das Werk über die kurze Biografie seines Komponisten hinaus."}],
    ["Augusta Holmès · Andromède", {1:"Holmès schrieb Textprogramme und Musik selbst. Kräftige Blechfarben und lange dramatische Bögen gliedern die mythologische Handlung auch ohne Bühne; Themen und Orchesterregister bezeichnen Bedrohung, Kampf und Befreiung."}],
    ["Charlotte Sohy · Symphonie „Grande Guerre“, I. Lent – Vif", {1:"Sohy schrieb die Sinfonie während und nach dem Ersten Weltkrieg und signierte zeitweise mit dem männlich lesbaren Namen Charles Sohy. Konzentrierte Motivarbeit und dunkle Orchesterfarben geben dem Werk seinen Platz in der französischen Sinfonik dieser Jahre."}],
    ["Leokadija Kaschperowa · Sinfonie h-Moll op. 4, I. Andante – Allegro risoluto", {1:"Kaschperowa war als Pianistin international anerkannt; nach 1917 verschwanden ihre Werke aus dem Konzertleben. Die Sinfonie verbindet russische Spätromantik mit einer eigenständigen motivischen Arbeit: Einleitung und Allegro gewinnen ihre Form aus denselben melodischen Wendungen."}],
    ["Prinzessin Caraboo · Almondsbury, 1817", {1:"Baker hatte Sprache, Schrift, Gebete und Herkunft erfunden. Koloniale Erwartungen füllten die Lücken ihrer Erzählung und machten daraus vermeintliches Wissen."}],
    ["Nellie Blys Handtasche für die Weltreise", {1:"Die Liste ist zugleich eine Arbeitsausrüstung: Tinte, Federhalter, Bleistifte und Papier gehörten neben Wäsche und Waschzeug hinein. Bly trug alles selbst, damit sie an Bahnhöfen und Häfen sofort weitergehen konnte. Ihre kleine Flasche und der Trinkbecher waren auf langen Bahnfahrten praktischer als zusätzliches Kleidungsvolumen."}],
    ["Sei Shōnagon: Dinge, die das Herz schneller schlagen lassen", {1:"Erst in der Folge stehen erotische, häusliche, körperliche und ästhetische Aufregung nebeneinander. Der letzte Augenblick beschreibt nächtlichen Regen gegen die Läden, während ein Besucher erwartet wird. Ein Geräusch wird zum unsicheren Zeichen seiner Ankunft."}],
    ["Quasikristall · geordnet ohne Wiederholung", {1:"Die International Union of Crystallography fasste den Kristallbegriff deshalb neu: Entscheidend sind Fernordnung und scharfe Beugungsmaxima; dreidimensionale Periodizität bildet nur den häufigsten Fall. An diesem Fall musste die Kategorie Kristall von räumlicher Wiederholung gelöst und auf messbare Fernordnung bezogen werden."}],
    ["Riau-Indonesisch · Wort oder Wortart", {1:"Die Beschreibung betrifft die Syntax der Wörter. Dinge und Handlungen bleiben in Riau-Indonesisch selbstverständlich benennbar. Gil bestimmt Wortarten nach dem Verhalten eines Wortes im Satz; wiederkehrende Unterschiede in Form und Verteilung ergeben die Klassen."}],
    ["Warum Weiß im Schach beginnt", {1:"Heute steckt die Konvention in Diagrammen, Eröffnungsbüchern, Uhren, Paarungstabellen und der algebraischen Notation. Fast jedes Hilfsmittel setzt Weiß am Zug voraus. Aus der willkürlichen Festlegung wurde eine Infrastruktur für Unterricht und Turnierspiel."}],
    ["Warum eine neue Stimme einen neuen Absatz erhält", {1:"Stehen mehrere Stimmen im selben Absatz, muss der Leser die Besitzverhältnisse jeder Äußerung neu berechnen. Eine bewusste Verletzung erzeugt Überlagerung, Verwirrung oder Gruppensprechen. Absatzgestaltung trägt deshalb grammatische Information, obwohl sie stumm bleibt."}],
    ["Letterlocking", {1:"Die Faltung regelte Geheimhaltung, Format, Reihenfolge der Lektüre, Adresse und Grad der Manipulationssicherheit. Das Forschungsprojekt Letterlocking hat an Hunderttausenden Briefen wiederkehrende Techniken beschrieben. Ein alltäglicher Handgriff übernahm damit die Aufgaben von Umschlag und Sicherheitssiegel."}],
    ["Muriel Cooper · Information Landscapes", {1:"Coopers 3D legt Information beim Ebenenwechsel in den Hintergrund und hält sie räumlich auffindbar. Dieses Prinzip bewahrt Verlauf und Zusammenhang, während der Leser zwischen Ansichten wechselt."}]
    ,["Die Ermordung Tuwhakararos · Māori", {1:"George Grey veröffentlichte die überlieferte Erzählung 1855."}]
    ,["Die Frau mit zwei Häuten · Efik", {1:"Elphinstone Dayrell veröffentlichte die in Südnigeria aufgezeichnete Fassung 1910."}]
    ,["Warum die Fledermaus nachts fliegt · Efik", {1:"Dayrells Sammlung von 1910 gibt die Erzählung samt der abschließenden Erklärung wieder."}]
    ,["Die Zaubertrommel · Efik", {1:"Elphinstone Dayrell veröffentlichte die Erzählung 1910."}]
    ,["Die alte Frau und ihr Bärenpflegesohn · Inughuit (Smith Sound)", {1:"Aus Angst um sein Leben schickt die Pflegemutter den Bären schließlich zu seinesgleichen. Beim Abschied streicht sie ihm heimlich mit rußigen, öligen Händen über die Seite. Seitdem, heißt es, erscheine im Norden bisweilen ein eisberggroßer Bär mit schwarzem Fleck. Rasmussen ordnet die Erzählung den Inughuit am Smith Sound zu."}]
    ,["Die Sarsagun-Braut und der Bonga · Santal", {1:"Als der Bräutigam ankommt, erfährt er, warum die Braut fehlt, und reitet wütend los. Sein Pferd tritt genau auf die verborgene Tür, sie springt auf, und er zieht die Braut heraus. P. O. Bodding ließ den größten Teil dieser Sammlung auf Santali niederschreiben, vor allem durch Sagram Murmu; Cecil H. Bompas bezeichnete seine englische Übersetzung von 1909 als wörtlich, aber gekürzt."}]
    ,["Aponibolinayen und die Sonne · Tinguian", {1:"Mabel Cook Cole zeichnete Tinguian-Erzählungen während ethnologischer Feldarbeit auf den Philippinen auf und veröffentlichte diese Fassung 1916."}]
    ,["Wie die Sommervögel kamen · Zuni", {1:"Frank Hamilton Cushing lebte ab 1879 in Zuni und veröffentlichte die Erzählung 1901."}]
    ,["Der wunderbare Vogel · Blackfoot", {1:"George Bird Grinnell stellte die Erzählungen aus Gesprächen mit Blackfoot-Sprechern zusammen und veröffentlichte sie 1892 in Blackfoot Lodge Tales."}]
    ,["Blitz und Donner · Efik", {1:"Elphinstone Dayrell veröffentlichte die Efik-Erzählung 1910."}]
    ,["Warum der Mond zu- und abnimmt · Efik", {1:"Dayrells Ausgabe von 1910 nennt die Erzählung als Efik-Geschichte aus Südnigeria."}]
    ,["Rued Langgaard · Sphärenmusik", {1:"Die Musik entwickelt sich in Flächen und räumlichen Schichten. Ein Akkord steht lange, während fernes Orchester, Solostimme oder Chor einen anderen Zeitmaßstab öffnen. Langgaard notierte Spiel im Inneren des Klaviers und überschrieb einen Abschnitt mit „Anti-Musik“. Nähe, Ferne und Stillstand bestimmen den Verlauf dieses Klangraums."}]
    ,["Raven reist · Haida", {1:"Die Erzählung beginnt auf einer vom Salzwasser bedeckten Insel. Raven sucht einen Sitzplatz und findet einen flachen Felsen, auf dem übernatürliche Wesen übereinander schlafen. Danach gewinnt er Licht, Nahrung und Wasser, täuscht Gastgeber, wird selbst getäuscht und verändert Landschaften. Hunger, Einfall, Verwandlung und die Folgen seiner Handlungen ordnen den langen Zyklus."}]
    ,["Schlüsselloch-Matte", {0:"Die Matte bezeichnet den Standort des Blickenden. Frühe Filme setzten damit Nahaufnahmen in eine Totale ein und erzählten zugleich Neugier, Überwachung oder Voyeurismus."}]
    ,["Verzögertes Verstehen", {1:"Das Verfahren trennt Sinneseindruck und Deutung. Die Verzögerung hält den Augenblick fest, in dem vorhandene Informationen eine neue Ordnung erhalten."}]
    ,["Elektra-Akkord", {1:"Im Video werden Partiturstellen und Lagen direkt vorgespielt. Die Reibung entsteht aus dem gemeinsamen E-Klangraum und dem Eis des zweiten Dreiklangs; sie gehört zur Figur und kehrt motivisch wieder."}]
    ,["Chiasmus", {1:"Der Chiasmus reicht vom kurzen Satz bis zu ganzen Szenenfolgen. In Kennedys „Ask not what your country can do for you – ask what you can do for your country“ tauschen country und you ihre grammatischen Plätze. Beziehung und Satzrichtung kehren sich um; die Wortwiederholung lässt den Vorgang hören. Molières „Il faut manger pour vivre, et non pas vivre pour manger“ ordnet Verben und Zwecke auf dieselbe Weise."}]
    ,["Baskisch: mehrere Personen in einem Verb", {1:"Das polypersonale Verb markiert Beteiligte, die im Deutschen durch Pronomen und Wortstellung ausgedrückt werden. Die selbstständigen Pronomen ni „ich“ oder zu „du“ erscheinen vor allem zur Hervorhebung. Baskisch ist zudem ergativ: Bei bestimmten Formen wird das Subjekt eines transitiven Verbs anders markiert als das eines intransitiven."}]
    ,["Prägungen mit Streiflicht lesbar machen", {1:"Das Streiflicht erfasst durchgedrückte Schrift, Prägestempel und flache Werkzeugspuren, während das Original unberührt bleibt. Mehrere Aufnahmen helfen, echte Linien von Papierfasern zu trennen. Archive verwenden gerichtetes Streiflicht als schonende fotografische Untersuchungsmethode; bei wertvollen oder brüchigen Stücken bleibt das Blatt unbeschwert."}]
    ,["Ötzis Ausrüstung", {0:"Die Gegenstände bei Ötzis Körper sind eine gebrauchte Reiseausrüstung um 3300 v. Chr. Lage und Abnutzung unterscheiden sie von einer symbolischen Grabausstattung. Mehrere Stücke waren unfertig oder repariert; Holzarten, Klebstoffe und Fasern wurden nach ihrer jeweiligen Aufgabe gewählt."}]
    ,["George du Maurier: Veto", {0:"Ein Mann fragt seine Begleiterin: „Shall we—a—sit down?“ Sie antwortet: „I’d like to; but my dressmaker says I mustn’t!“ Der schmale Rock der späten 1870er Jahre verhindert genau die gewöhnliche Bewegung, für die Kleidung Platz lassen sollte."}]
    ,["Warum zwischen den Sätzen Stille herrscht", {1:"Der Dirigent hält die Arme oben, das Programm nennt die Satzfolge, erfahrene Besucher warten auf seine Wendung zum Saal. Diese Zeichen ordnen die Pause als Teil des Werks und als erlerntes Ritual im Konzertsaal."}]
    ,["TEXTFILES.COM", {1:"Die schlichte Verzeichnisansicht erhält Dateinamen, Zeitstempel und ursprüngliche Ordnung. Man liest den Rohstoff früher Netzkultur: Anleitungen, Streite, Newsletter, Rollenspiele, Hacks, Amateurprosa und Systemmeldungen. Die alte Oberfläche gehört selbst zum Bestand."}]
  ]);

  const wikiSource = ({ page, language }) => ({
    label: `Wikipedia: ${page}`,
    url: `https://${language}.wikipedia.org/wiki/${encodeURIComponent(page).replace(/%20/g, "_").replace(/%2F/g, "/")}`
  });

  for (const card of window.KARTEN) {
    if (card.category === "Aphorismen") {
      card.detail = [];
      delete card.summary;
      delete card.original;
      continue;
    }

    const target = wikiTargets.get(card.title);
    if (target) {
      const [page, language, count] = target;
      card.detail = [];
      card.wiki = { page, language, count };
      if (card.category === "Sagengestalten, Legenden und Märchen weltweit") delete card.summary;
      if (card.category === "Erste Sätze großer Romane") delete card.original;
      if (!(card.sources || []).some(source => source.url?.includes("wikipedia.org/wiki/"))) {
        card.sources = [...(card.sources || []), wikiSource(card.wiki)];
      }
    }

    if (card.category === "Philosophische Begriffe" && definitions.has(card.title)) {
      card.summary = definitions.get(card.title);
    }

    if (summaryOverrides.has(card.title)) card.summary = summaryOverrides.get(card.title);

    const overrides = detailOverrides.get(card.title);
    if (overrides && !card.wiki) {
      for (const [index, text] of Object.entries(overrides)) card.detail[Number(index)] = text;
    }
  }
})();
