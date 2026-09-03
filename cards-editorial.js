// Redaktionelle Regeln für Zitate und extern geladene Nachschlagetexte.
(() => {
  "use strict";

  const wikiTargets = new Map([
    // Philosophische Begriffe: außen kurze Definition, innen Wikipedia-Absätze.
    ["Dasein", ["Dasein", "de", 2]],
    ["Kategorischer Imperativ", ["Kategorischer Imperativ", "de", 2]],
    ["Conatus", ["Conatus", "de", 2]],
    ["Epoché", ["Epoche (Philosophie)", "de", 2]],
    ["Dialektik", ["Dialektik", "de", 2]],
    ["Akrasia", ["Akrasia", "de", 2]],
    ["Familienähnlichkeit", ["Familienähnlichkeit", "de", 2]],
    ["Différance", ["Différance", "de", 2]],
    ["Biomacht", ["Bio-Macht", "de", 2]],
    ["Qualia", ["Qualia", "de", 2]],
    ["Aufhebung", ["Dialektische Aufhebung", "de", 2]],
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
    ["Dasein", "Bei Heidegger: die Seinsart des Menschen, der sich zu seinem eigenen Sein verhält und sein Leben selbst zu führen hat."],
    ["Kategorischer Imperativ", "Kants oberstes Prinzip der Moral: Eine Handlungsmaxime ist nur dann zulässig, wenn sie als allgemeines Gesetz für jedes vernünftige Wesen gilt."],
    ["Conatus", "Bei Spinoza: das Bestreben jedes einzelnen Dinges, im eigenen Sein zu verharren. Dieses Bestreben gehört zu seinem Wesen."],
    ["Epoché", "In der Phänomenologie: Das Urteil über die unabhängige Existenz der Welt wird ausgesetzt, um die Erscheinungsweise eines Gegenstands im Bewusstsein zu untersuchen."],
    ["Dialektik", "Ein Denken in Gegensätzen und Übergängen. Was der Begriff genau bezeichnet, unterscheidet sich bei Platon, Kant, Hegel und Marx erheblich."],
    ["Akrasia", "Eine Person handelt absichtlich gegen das Urteil, das sie selbst für das bessere hält."],
    ["Familienähnlichkeit", "Wittgensteins Begriff für Gruppen ohne ein gemeinsames Wesensmerkmal: Ihre Mitglieder ähneln einander in wechselnden, einander überlappenden Zügen."],
    ["Différance", "Bei Derrida: Bedeutung entsteht aus Unterschieden zwischen Zeichen und bleibt auf weitere Zeichen verwiesen. Sie ist deshalb nie vollständig gegenwärtig."],
    ["Biomacht", "Bei Foucault: moderne Macht über das Leben. Sie diszipliniert einzelne Körper und reguliert die Bevölkerung als biologischen Prozess."],
    ["Qualia", "Die subjektiv erlebte Beschaffenheit einer Wahrnehmung, etwa wie Rot aussieht oder wie sich Schmerz anfühlt."],
    ["Aufhebung", "Bei Hegel: ein gedanklicher Schritt, der eine Bestimmung verneint, ihren Gehalt bewahrt und sie in eine neue Bestimmung überführt."],
    ["Habitus", "Bei Bourdieu: dauerhaft erworbene Dispositionen des Wahrnehmens und Handelns. Sie entstehen in einer sozialen Lebenslage und bringen ohne bewusste Regelbefolgung passende Praktiken hervor."],
    ["Intentionalität", "Die Gerichtetheit des Bewusstseins: Wahrnehmen, Erinnern oder Wünschen bezieht sich jeweils auf etwas."],
    ["Schleier des Nichtwissens", "Rawls’ Gedankenexperiment für gerechte Grundsätze: Niemand kennt dabei die eigene spätere Stellung, Begabung oder Weltanschauung."],
    ["Wu wei", "Ein daoistisches Handeln ohne absichtsvollen Zwang, das der jeweiligen Lage folgt und unnötige Eingriffe unterlässt."],
    ["Haecceitas · Diesheit", "Das individuelle Diessein, durch das ein einzelnes Wesen genau dieses und kein anderes Wesen ist."],
    ["Haecceitas", "Das individuelle Diessein, durch das ein einzelnes Wesen genau dieses und kein anderes Wesen ist."],
    ["Prohairesis", "Bei Epiktet: das eigene Urteils- und Entscheidungsvermögen. Es prüft Eindrücke und erteilt oder verweigert ihnen Zustimmung."],
    ["Supererogation", "Eine moralisch gute Handlung, die über das Gebotene hinausgeht: Ihre Ausführung verdient Anerkennung, ihre Unterlassung ist kein Unrecht."],
    ["Oikeiosis", "In der stoischen Ethik: der Vorgang, durch den ein Lebewesen sich selbst als zugehörig erkennt und für die eigene Erhaltung sorgt. Beim Menschen erweitert sich diese Sorge auf andere Menschen."],
    ["Präsentismus", "Nur gegenwärtige Dinge und Ereignisse existieren."],
    ["Epistemische Ungerechtigkeit", "Unrecht an einer Person in ihrer Rolle als Wissende. Ihr Wort erhält wegen eines Vorurteils zu wenig Glauben, oder ihr fehlt ein gemeinsamer Begriff für die eigene Erfahrung."],
    ["Mereologie", "Die philosophische Lehre von Teilen und Ganzen: Sie fragt unter anderem, wann Teile ein Ganzes bilden und ob ein Ganzes mehr als seine Teile ist."],
    ["Parrhesia", "In der antiken Rhetorik und bei Foucault: offenes Wahrsprechen, bei dem der Sprecher ein persönliches Risiko eingeht."],
    ["Clinamen", "Bei Lukrez: die geringste unbestimmte Abweichung eines fallenden Atoms. Ohne sie träfen Atome nie aufeinander; eine Welt entstünde nicht."]
  ]);

  const summaryOverrides = new Map([
    ["One Terabyte of Kilobyte Age", "Das Projekt veröffentlicht fortlaufend rekonstruierte GeoCities-Seiten aus einem geretteten Terabyte Daten."],
    ["Florine Stettheimer", "Family Portrait II · The Cathedrals of Wall Street · The Cathedrals of Art"],
    ["Anne Vallayer-Coster", "Attributes of Painting, Sculpture, and Architecture · Still Life with Lobster · A Vase of Flowers"],
    ["Marsden Hartley", "Portrait of a German Officer · Himmel · Lobster Fishermen"],
    ["Ivan Bilibin", "Wassilissa · Baba Jaga im Mörser · Der goldene Hahn"],
    ["Léon Bakst", "Schéhérazade · L’Après-midi d’un faune · Die Feuerfee"]
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

  // Vollständige redaktionelle Neufassungen für Karten, deren bisherige Texte
  // zu kurz, zu abstrakt oder sprachlich schematisch waren. Extern geladene
  // Wikipedia-, Wikisource- und Gutenberg-Texte werden hier nicht verändert.
  const proseOverrides = new Map([
    ["AnneMarie Torresen · 1, 2, 2, 1, 1, 2 …", {
      summary: "Fast 10.000 Ziffern der Kolakoski-Folge hängen als gefaltete Drahtzeichen im Raum.",
      detail: [
        "Für ihre Abschlussarbeit von 2026 ließ AnneMarie Torresen fast 10.000 Ziffern der Kolakoski-Folge aus Draht biegen. Mehr als zweihundert Menschen im Alter von vier bis neunundsiebzig Jahren arbeiteten nach derselben knappen Anweisung. Unterschiede in Griff, Kraft und Genauigkeit blieben an jedem Zeichen sichtbar.",
        "Die Kolakoski-Folge besteht nur aus Einsen und Zweien. Liest man die Längen ihrer aufeinanderfolgenden Zahlengruppen, erhält man wieder dieselbe Folge. Torresens Installation überträgt diese Selbstbeschreibung in eine lange, ungleichmäßige Spur. Die mathematische Regel ist streng; die ausgeführten Zeichen zeigen, wie verschieden Menschen eine identische Anweisung tatsächlich umsetzen."
      ]
    }],
    ["Hanyi Wang · Prion", {
      summary: "Eine mechanische Installation reagiert auf dieselben Berührungen wie eine offene Spielwelt in Unreal Engine 5.",
      detail: [
        "Prion von 2025 besteht aus einem Monitor, einer Holzstruktur mit beweglichen Fingern, einer weichen Silikonfläche und einer Arduino-Steuerung. Zwei Livekameras zeigen die Bedienung und ihre mechanische Folge. Zugleich reagiert eine offene Landschaft in Unreal Engine 5 auf die Eingaben am Objekt.",
        "Ausgangspunkt war Hanyi Wangs Begegnung mit einem Hirsch und die anschließende Beschäftigung mit Chronic Wasting Disease, einer durch fehlgefaltete Proteine ausgelösten Krankheit. Die Arbeit macht daraus keine Illustration der Krankheit. Sie lässt den Besucher vielmehr ein System berühren, dessen körperliche und digitale Reaktionen nur teilweise vorhersehbar sind."
      ]
    }],
    ["Dahlia Aggarwal · Wild Grass", {
      summary: "Ein Jacquard-gewebter und von Hand gefilzter Teppich sieht aus der Entfernung wie eine kleine Grasfläche aus.",
      detail: [
        "Wild Grass von 2025 ist als Teppich gewebt. Beim Jacquardweben wurden die Fäden so angeordnet, dass nach dem Filzen ein unregelmäßiger, aufrechter Flor entstand. Die vermeintlichen Grashalme sind daher weder aufgedruckt noch nachträglich aufgeklebt; sie gehören zur Konstruktion des Gewebes.",
        "Die Arbeit stammt aus Dahlia Aggarwals Abschlussprojekt Foveate. Dessen Oberflächen geben dem Auge zunächst eine vertraute Form vor und korrigieren sie beim Näherkommen oder Berühren. Bei Wild Grass wird eine Landschaft zum körpernahen Gegenstand: Man erkennt erst am Rand und an der Unterseite, dass die Wiese ein präzise hergestelltes Textil ist."
      ]
    }],
    ["Andrew Goulet · Noren Speakers and Stereo Cabinet", {
      summary: "Zwei Lautsprecher mit herabhängenden Stofffronten und ein niedriger Stereoschrank bilden eine für den Wohnraum entworfene Anlage.",
      detail: [
        "Andrew Goulet baute die beiden Lautsprecher und den Stereoschrank aus hellem Sperrholz, Aluminium und Delrin. Vor den Chassis hängen lose Bahnen aus akustisch durchlässigem Stoff. Sie erinnern an japanische Noren, verdecken die Technik jedoch nur teilweise. Der niedrige Schrank nimmt Verstärker und weitere Geräte auf.",
        "Die Anlage gehört zu Goulets Abschlussarbeit Ambient Furniture von 2026. Entscheidend ist ihr Verhalten im Zimmer: Die Lautsprecher stehen frei wie schmale Schränke, die Stoffe bewegen sich bei Luftzug, Kabel und Bedienelemente erhalten feste Plätze. Auch ausgeschaltet bleibt die Anlage ein bestimmender Teil der Einrichtung."
      ]
    }],
    ["Xinyi Joanna Li · Swell", {
      summary: "Ein 3D-gedruckter Oberarmreif besteht aus dicht aneinandergedrängten, weich gerundeten Hohlformen.",
      detail: [
        "Swell von 2026 ist ein Oberarmreif aus dreifarbigem PLA. Das Stück misst ungefähr 17,5 mal 16,5 mal 10 Zentimeter. Violette, rosa und blaue Partien folgen dem Wechsel des Filaments; die feinen Druckschichten bleiben an den gerundeten Formen sichtbar.",
        "Xinyi Joanna Li entwickelte für die Reihe Specific Randomness Regeln, mit denen verwandte Volumen in wechselnder Anordnung entstehen. Swell ist das einzige Stück der Reihe, das nach dem Druck nicht von Hand nachbearbeitet wurde. Dadurch bleiben die Entscheidungen der Software, der Verlauf der Düse und die Grenzen des Materials unmittelbar ablesbar."
      ]
    }],
    ["Anne Kim · Sensation and Memory", {
      summary: "Eine Lichtinstallation aus senkrechten, lichtdurchlässigen Flächen verändert ihre Helligkeit langsam wie der Himmel vor Sonnenaufgang.",
      detail: [
        "Sensation and Memory von 2026 ist etwa zweieinhalb Meter hoch. Schmale, lichtdurchlässige Flächen stehen mit Abstand hintereinander. Licht fällt durch mehrere Lagen, wird an Kanten heller und erscheint auf der Rückseite gedämpft. Beim Vorbeigehen verdecken sich die Flächen in wechselnder Reihenfolge.",
        "Die Helligkeit und die Färbung ändern sich allmählich. Anne Kim orientierte den Ablauf an Übergängen zwischen Nacht und Tag. Der genaue Farbeindruck hängt vom Standort ab: Von der Seite sieht man einzelne beleuchtete Kanten, von vorn überlagern sich die Flächen zu einem tieferen Farbraum."
      ]
    }],

    ["Gwen John", {
      detail: [
        "The Convalescent zeigt eine sitzende Frau mit gesenktem Kopf; das fast leere Zimmer und die eng beieinanderliegenden Grautöne halten jede kleine Haltungsänderung fest. In Dorelia in a Black Dress hebt sich das Gesicht nur wenig vom dunklen Kleid ab. A Corner of the Artist’s Room in Paris kommt ohne Figur aus: Bettkante, Tisch und Fensterlicht reichen aus, um den stillen Raum genau zu bestimmen.",
        "Gwen John trug dünne Farbschichten übereinander und veränderte ihre Motive oft nur geringfügig. Die drei Werke zeigen, wie viel Spannung sie aus Abstand, Blickrichtung und gedämpftem Licht gewann."
      ]
    }],
    ["Evelyn De Morgan", {
      detail: [
        "Medea steht kurz vor der Ausführung ihres Zaubers; die Zutaten liegen greifbar vor ihr, während ihr Körper beinahe reglos bleibt. In Night and Sleep streut der Schlaf Mohnblüten über eine Stadt. The Gilded Cage stellt eine Frau in einem kostbaren Innenraum den tanzenden Menschen vor dem Fenster gegenüber; ein kleiner Vogelkäfig wiederholt ihre Lage.",
        "De Morgan benutzte die genaue Figurenmalerei der Präraffaeliten für politische Allegorien. Krieg, eingeschränkte Lebensmöglichkeiten von Frauen und der Wunsch nach geistiger Freiheit erscheinen bei ihr als konkrete Situationen statt als bloße Dekoration."
      ]
    }],
    ["Edmonia Lewis", {
      detail: [
        "Forever Free entstand 1867, zwei Jahre nach dem Ende des amerikanischen Bürgerkriegs. Ein Mann hebt den Arm mit der gesprengten Fessel, neben ihm kniet eine ebenfalls befreite Frau. The Death of Cleopatra zeigt die Königin nach ihrem Tod schwer in den Thron gesunken. The Old Arrow Maker greift eine Szene aus Longfellows Song of Hiawatha auf: Ein Vater arbeitet an einer Pfeilspitze, während seine Tochter neben ihm sitzt.",
        "Lewis war die erste Bildhauerin afroamerikanischer und indigener Herkunft mit internationalem Erfolg. In Rom arbeitete sie selbst am Marmor, weil sie verhindern wollte, dass man die Ausführung Assistenten zuschrieb."
      ]
    }],
    ["Léon Spilliaert", {
      detail: [
        "Im Selbstbildnis vor dem Spiegel steht Spilliaerts Gesicht zwischen dunklem Anzug, leerer Wand und dem kalten Licht des Spiegels. Schwindel kippt eine Treppe so steil nach unten, dass Geländer und Stufen den Blick aus dem Bild ziehen. In den mondhellen Meeresbildern von Ostende genügen Horizont, Ufermauer und wenige Lichtstreifen, um die Promenade fast menschenleer erscheinen zu lassen.",
        "Spilliaert arbeitete häufig mit Tusche, Kreide und stark verdünnter Farbe. Die dünnen Schichten und abrupten Perspektiven erklären die Wirkung genauer als die übliche Bezeichnung seiner Bilder als geheimnisvoll."
      ]
    }],
    ["Käthe Kollwitz", {
      detail: [
        "Frau mit totem Kind von 1903 zeigt zwei ineinandergekrümmte Körper; Gesicht und Arme der Mutter sind in den Leib des Kindes gedrückt. Im Weberzug aus dem Zyklus Ein Weberaufstand bewegt sich eine erschöpfte Gruppe als dunkler Zug durch das Querformat. Der Holzschnitt Die Mütter von 1922/23 schließt Frauen und Kinder zu einem gedrängten Schutzraum zusammen.",
        "Kollwitz entwickelte jedes Motiv über Zeichnungen und mehrere Druckzustände. Haltung, Druckschwärze und das Gewicht der Körper tragen die Aussage; eine erzählerische Kulisse braucht sie dafür kaum."
      ]
    }],

    ["Dhrupad · Nordindien", {
      detail: [
        "Dhrupad gehört zu den ältesten heute aufgeführten Formen der nordindischen Kunstmusik. Zu Beginn entfaltet die Stimme den Raga ohne Trommel und festen Takt. Einzelne Töne werden lange gehalten, umkreist und gegeneinander abgewogen; in der späteren nom-tom-Passage beschleunigen bedeutungsfreie Silben den melodischen Verlauf.",
        "Erst danach folgt die gebundene Komposition, ebenfalls Dhrupad genannt. Ein kurzer Gedichttext kehrt in klar gegliederten Abschnitten wieder, während die zweifellige Pakhawaj den Tala ausführt. In einer vollständigen Aufnahme sollte man auf den Übergang vom freien Alap zum ersten Einsatz der Trommel achten."
      ]
    }],
    ["Shōmyō · Japan", {
      detail: [
        "Shōmyō ist japanischer buddhistischer Ritualgesang. Die Tradition gelangte im frühen Mittelalter mit buddhistischen Lehren vom asiatischen Festland nach Japan und entwickelte in den Schulen Tendai und Shingon eigene Überlieferungslinien. Texte werden auf Sanskrit, Chinesisch oder Japanisch gesungen.",
        "Der Tonverlauf folgt festgelegten Formeln: Eine Silbe trägt oft mehrere Töne, die Stimme gleitet zwischen Tonhöhen, und Atempausen gliedern die Rezitation. In der Aufnahme ist deshalb weniger eine Melodie im europäischen Sinn zu verfolgen als die genaue Form jeder Silbe und der Wechsel zwischen Vorsänger und Gruppe."
      ]
    }],
    ["Paghjella · Korsika", {
      detail: [
        "Die korsische Paghjella wird ohne Instrumente von drei Männerstimmen gesungen. Die secunda beginnt mit der Melodie und dem Text. Der bassu setzt darunter eine tiefe Stimme; die terza steigt darüber ein und verziert die oberen Töne. Die Stimmen stehen eng beieinander und stimmen ihre Intonation im gemeinsamen Klang ab.",
        "Paghjella gehört zu Gottesdiensten, Prozessionen und geselligen Zusammenkünften. Gesungen wird meist auf Korsisch. In einer Aufnahme lässt sich der Aufbau am Einsatz der Stimmen hören: zuerst die tragende Melodie, dann das tiefe Fundament und zuletzt die hohe, bewegliche Stimme."
      ]
    }],
    ["Gnawa · Marokko", {
      detail: [
        "Gnawa-Musik wird in Marokko von Gemeinschaften gepflegt, deren Geschichte auf Menschen aus Gebieten südlich der Sahara und auf den transsaharischen Sklavenhandel zurückgeht. Ein Maâlem singt und spielt die dreisaitige Basslaute Guembri. Die Gruppe antwortet im Chor und schlägt schwere Eisenkastagnetten, die Qarqaba.",
        "In der nächtlichen Lila-Zeremonie folgen Gesänge mit bestimmten Melodien und rituellen Bezügen aufeinander. Der gleichbleibende Guembri-Puls und die gegeneinander versetzten Qarqaba tragen den Ablauf über lange Zeit. Bei der Aufnahme lohnt sich zuerst die tiefe Lautenfigur; erst darüber werden die wechselnden Antworten des Chors deutlich."
      ]
    }],
    ["Launeddas · Sardinien", {
      detail: [
        "Die sardische Launeddas besteht aus drei Rohrpfeifen, die ein Musiker gleichzeitig im Mund hält. Der tumbu gibt einen tiefen Bordun. Mancosa und mancosedda besitzen Grifflöcher und spielen zwei voneinander unabhängige Stimmen. Alle drei Pfeifen haben ein einfaches Rohrblatt.",
        "Durch Zirkularatmung reißt der Ton beim Einatmen nicht ab. Die Melodie entsteht über dem Bordun aus wiederkehrenden, fein veränderten Abschnitten und begleitet Tänze, Prozessionen oder religiöse Feste. In einer Aufnahme sollte man die durchgehende tiefe Pfeife von den beiden beweglichen Stimmen darüber trennen."
      ]
    }],
    ["Tumba Francesa · Kuba", {
      detail: [
        "Tumba Francesa entstand im Osten Kubas unter haitianischen Einwanderern und ihren Nachkommen. Eine Vorsängerin setzt die Strophen, der Chor antwortet. Die Trommeln premier, bulá und segón haben getrennte rhythmische Aufgaben; die größte Trommel führt einen beweglichen Dialog mit den Tänzern.",
        "Die Aufführung folgt eigenen Gesellschafts- und Tanzformen, die französisch-haitianische Bezeichnungen tragen. In der Aufnahme sollte man zunächst den knappen Wechsel zwischen Vorsängerin und Chor hören und danach verfolgen, wie die premier-Trommel einzelne Bewegungen kommentiert."
      ]
    }],
    ["Shashmaqom · Tadschikistan und Usbekistan", {
      detail: [
        "Shashmaqom bezeichnet sechs umfangreiche modale Zyklen aus Tadschikistan und Usbekistan. Jeder Zyklus beginnt mit Instrumentalsätzen und führt später zu gesungenen Abschnitten mit klassischer persischer oder tadschikischer Dichtung. Tanbur, Dutar, Sato und Rahmentrommel begleiten die Stimme.",
        "Die Melodie kehrt zu festgelegten Gerüsttönen zurück und erweitert ihren Umfang schrittweise. Für eine erste Begegnung eignet sich ein gesungener Abschnitt: Die Stimme dehnt einzelne Silben, während die Instrumente den Modus bestätigen und der Trommelrhythmus erst in den gebundenen Teilen deutlich hervortritt."
      ]
    }],
    ["Bigwala · Busoga, Uganda", {
      detail: [
        "Bigwala wird von den Basoga im Osten Ugandas gespielt. Ein Ensemble verwendet mindestens fünf Eintontrompeten aus Kalebassen. Jede Trompete liefert nur wenige festgelegte Töne; die Spieler setzen so nacheinander ein, dass aus den einzelnen Rufen eine gemeinsame Melodie entsteht. Trommeln, Gesang und Tanz gehören zur Aufführung.",
        "Diese versetzte Spielweise heißt Hocket. In der Aufnahme sollte man eine einzelne Trompete verfolgen: Ihre Pausen sind ebenso wichtig wie ihre Töne, denn genau in diesen Lücken setzen die anderen Instrumente die melodische Linie fort."
      ]
    }],
    ["Gbofe · Afounkaha, Côte d’Ivoire", {
      detail: [
        "Gbofe ist die Musik der Tagbana im Dorf Afounkaha im Norden der Côte d’Ivoire. Sechs quer geblasene Naturtrompeten verschiedener Größe teilen Tonhöhen und rhythmische Figuren untereinander auf. Frauenstimmen, Trommeln und Tanz antworten auf das Trompetenensemble.",
        "Kein einzelner Spieler besitzt die vollständige Melodie. In der Aufnahme lässt sich ihr Aufbau an den kurzen, gegeneinander versetzten Trompetentönen verfolgen. Erst das genaue gemeinsame Timing macht aus diesen Einsätzen einen zusammenhängenden musikalischen Satz."
      ]
    }],
    ["Hudhud · Ifugao, Philippinen", {
      detail: [
        "Die Hudhud-Gesänge gehören zu den Ifugao im Bergland der nördlichen philippinischen Insel Luzon. Sie werden bei der Reisernte, bei Totenwachen und anderen gemeinschaftlichen Anlässen vorgetragen. Eine erfahrene Sängerin führt die lange Erzählung; eine Gruppe antwortet mit wiederkehrenden Formeln.",
        "Die Texte handeln von Ahnen, Heirat, Besitz und Bündnissen. In einer Aufnahme sollte man die wechselnden Rollen hören: Die Vorsängerin bringt neue Namen und Ereignisse vor, der Chor bestätigt den Verlauf und gibt ihr Zeit, den nächsten Abschnitt aus dem Gedächtnis fortzusetzen."
      ]
    }],

    ["Emilie Mayer · Sinfonie Nr. 7 f-Moll", {
      detail: [
        "Schon die langsame Einleitung stellt kurze Motive vor, aus denen der schnelle Hauptsatz entsteht. Mayer führt sie durch Streicher und Holzbläser, verkürzt sie an Übergängen und lässt scharf gesetzte Akkorde die Abschnitte begrenzen. Im Kopfsatz sollte man darauf achten, wie wenig Material sie für die große Form benötigt.",
        "Mayer veranstaltete in Berlin Konzerte mit eigenen Orchesterwerken und schrieb mindestens acht Sinfonien. Die Siebte zeigt keine bloße Nachahmung der bekannten Zeitgenossen: Ihre unruhige Begleitung und die selbstständigen Bläserstimmen geben dem dichten Satz ein eigenes Profil. Deshalb gehört sie in die Geschichte der deutschen Sinfonik des mittleren 19. Jahrhunderts."
      ]
    }],
    ["Ethel Smyth · The Wreckers", {
      detail: [
        "The Wreckers spielt in einer kornischen Gemeinde, die Schiffe mit falschen Leuchtfeuern an die Küste lockt und die Opfer ausplündert. Smyth schrieb den Text zunächst auf Französisch; die Oper wurde 1906 in Leipzig uraufgeführt. Chorblöcke bezeichnen die geschlossene Gemeinschaft, während das Orchester Wind, Brandung und die heimlichen Begegnungen des Liebespaars unterschiedlich behandelt.",
        "Hörenswert ist besonders das Vorspiel zum zweiten Akt, On the Cliffs of Cornwall. Ein lange gespannter Orchesterbogen entsteht aus kurzen Wellenfiguren und weit auseinanderliegenden Registern. Die Oper verdient mehr Aufführungen, weil Smyth den Chor nicht als Hintergrund benutzt: Er ist die handelnde Masse, gegen die sich die beiden Hauptfiguren behaupten."
      ]
    }],
    ["Margaret Bonds · Montgomery Variations", {
      detail: [
        "Margaret Bonds schrieb die Montgomery Variations 1964 und widmete sie Martin Luther King Jr. Das Spiritual I Want Jesus to Walk with Me bleibt in sieben Variationen erkennbar. Überschriften wie Decision, March und Dawn bezeichnen Stationen der amerikanischen Bürgerrechtsbewegung, ohne dass die Musik zur bloßen Illustration wird.",
        "Im ersten Abschnitt sollte man sich die schlichte Melodielinie merken; spätere Variationen verändern ihre Taktart, Instrumentation und harmonische Umgebung. Gerade diese formale Konsequenz macht das Werk wichtig: Bonds schrieb ein geschlossenes Orchesterstück, in dem ein Spiritual die Aufgabe eines sinfonischen Grundgedankens übernimmt."
      ]
    }],
    ["Rebecca Clarke · Viola Sonata", {
      detail: [
        "Rebecca Clarke reichte die Sonate 1919 anonym beim Wettbewerb von Elizabeth Sprague Coolidge ein. Sie erreichte gemeinsam mit Ernest Blochs Suite den ersten Platz der Juryentscheidung; Coolidge vergab den Preis schließlich an Bloch. Die Nachricht, ein so kraftvolles Werk stamme von einer Frau, wurde damals sogar als möglicher Scherz behandelt.",
        "Die Viola beginnt mit einem aufsteigenden Ruf und nutzt danach ihre dunkle Mittellage, Flageoletts und abrupte Registerwechsel. Das Klavier trägt eigene rhythmische Schichten statt einer bloßen Begleitung. Im Finale kehrt Material aus dem Anfang wieder. Diese genaue Großform und die idiomatische Behandlung der Viola begründen den Rang der Sonate."
      ]
    }],
    ["Florence Price · Sinfonie Nr. 3 c-Moll", {
      detail: [
        "Florence Price schrieb ihre Dritte 1938 bis 1940; uraufgeführt wurde sie vom Detroit Civic Orchestra. Der erste Satz entwickelt sein Material sinfonisch, der langsame Satz arbeitet mit fein abgestuften Bläserfarben. Im Scherzo trägt der Juba-Tanz die Form, während der letzte Satz in raschem Tempo und knapperen Gesten schließt.",
        "Wer nur Prices Erste kennt, hört hier eine freiere und schärfer instrumentierte Komponistin. Spiritual und Tanz stehen nicht als Zitate neben einer europäischen Form, sondern bestimmen Rhythmus und Themenbildung des Werks. Die lange unzugänglichen Partituren haben diesen Teil der amerikanischen Sinfonik zu Unrecht aus dem Konzertbetrieb gehalten."
      ]
    }],

    ["W. E. B. Du Bois · Data Portraits", {
      detail: [
        "Für die Pariser Weltausstellung von 1900 entwarfen W. E. B. Du Bois und seine Mitarbeiter an der Atlanta University eine Serie von Diagrammen über das Leben afroamerikanischer Menschen. Sie verwendeten amtliche Daten und eigene soziologische Erhebungen zu Bildung, Beruf, Besitz und Bevölkerung.",
        "Die Blätter lösen Balken und Kurven aus dem üblichen rechtwinkligen Raster. Farbige Streifen knicken über das Papier, Kreise liegen exzentrisch ineinander, lange Zahlenreihen werden zu schmalen Fächern. Die ungewöhnliche Form dient der Lesbarkeit und widerspricht zugleich den rassistischen Behauptungen, gegen die die Ausstellung antrat."
      ]
    }],
    ["Talwin Morris · Buchgestaltung für Blackie & Son", {
      detail: [
        "Talwin Morris leitete ab den 1890er Jahren die Gestaltung des Glasgower Verlags Blackie & Son. Für preiswerte Bücher entwarf er Einbände aus wenigen gedruckten Farben, klaren Rechtecken und langen Pflanzenlinien. Titel und Autorenname sitzen als Bestandteile der Fläche an genau bestimmten Stellen.",
        "Morris musste mit industrieller Prägung und festem Kostenrahmen arbeiten. Deshalb sind seine Ornamente keine frei verteilten Zusätze: Jede Linie berücksichtigt Rücken, Deckelkante und Schriftfeld. So wurde der Glasgow Style auch auf Serienbüchern erkennbar, die für ein breites Publikum hergestellt wurden."
      ]
    }],
    ["Margaret Macdonald Mackintosh · The Mysterious Garden", {
      detail: [
        "The Mysterious Garden ist eine Gessotafel von 1911. Erhabene Linien formen schlanke Figuren und Pflanzen; Perlen, Glas und Metallstücke sitzen in der noch weichen Masse. Mattes Weiß wechselt mit kleinen glänzenden Stellen, sodass seitliches Licht das Relief stärker hervorhebt als eine frontale Ansicht.",
        "Margaret Macdonald Mackintosh entwickelte für solche Tafeln eine Technik zwischen Wandbild und flachem Relief. Die Figuren lassen sich nicht vom Muster ablösen: Haare, Stängel und Gewandkanten gehören demselben Liniennetz an. Gerade die unterschiedlichen Oberflächen erklären die Wirkung besser als eine bloße Reproduktion."
      ]
    }],
    ["Daum Frères · Cameo-Glas", {
      detail: [
        "Die Manufaktur Daum in Nancy arbeitete mit mehreren übereinanderliegenden Glasschichten. Säure entfernte Teile der äußeren Lage; Rad und Stichel schärften Konturen nach. Emailfarbe, eingeschmolzenes Glaspulver und aufgesetzte Stücke ergänzten bei einzelnen Gefäßen die Oberfläche.",
        "Bei den besten Vasen liegt das Motiv daher im Glas statt nur darauf. Ein dunkler Zweig bleibt als erhabene Schicht stehen, während der hellere Grund bis in tiefere Lagen geätzt ist. Dreht man das Gefäß, verändern Materialstärke und Durchlicht die Landschaft oder Pflanze."
      ]
    }],
    ["Aubrey Beardsley · The Peacock Skirt", {
      detail: [
        "The Peacock Skirt erschien 1894 als Illustration zu Oscar Wildes Salome. Zwei Profile stehen einander gegenüber. Zwischen ihnen füllt das Pfauenmuster des Gewandes beinahe die ganze Bildfläche; der übrige Raum bleibt weitgehend weiß. Die Figuren berühren sich nicht, obwohl ihre Konturen eng ineinandergreifen.",
        "Beardsley setzte schwarze Flächen, haarfeine Linien und leeres Papier mit derselben Genauigkeit ein. Die Zeichnung illustriert deshalb keinen einzelnen Satz des Dramas. Sie macht aus Blick, Abstand und Kleidermuster eine eigene, sofort lesbare Spannung."
      ]
    }],

    ["Kayardild: drei Kasus an einem Wort", {
      detail: [
        "Kayardild gehört zur Tangkic-Sprachfamilie. Es wurde auf den South Wellesley Islands im Golf von Carpentaria gesprochen, besonders auf Bentinck Island im australischen Bundesstaat Queensland. Viele Angehörige der Kaiadilt leben heute auf Mornington Island. In einer Nominalgruppe erhält jedes Wort dieselben syntaktischen Markierungen.",
        "mijil-nguni-naa-ntha besteht aus mijil ‚Netz‘, -nguni für das Werkzeug, -naa für eine vergangene Zeitlage und -ntha für die Zugehörigkeit zum Nebensatz. Im Beispielsatz bedeutet die Form: ‚Ich weiß, dass die Frau den Fisch mit dem Netz des Bruders fing.‘ Die Folge mehrerer Kasusendungen zeigt somit nicht nur die Rolle des Netzes, sondern auch Satzebene und Zeitbezug."
      ]
    }],
    ["Türkisch: Woher weißt du das?", {
      detail: [
        "Türkisch wird vor allem in der Türkei und auf Zypern gesprochen und gehört zu den Turksprachen. Zwei Vergangenheitsformen unterscheiden, worauf eine Aussage beruht. Kedi sütü döktü heißt: ‚Die Katze hat die Milch verschüttet‘; -di stellt das Ereignis als unmittelbar festgestellt dar. Kedi sütü dökmüş gibt einen Bericht oder eine Schlussfolgerung wieder: ‚Die Katze hat offenbar die Milch verschüttet.‘",
        "-miş steht außerdem bei einer überraschenden Entdeckung: Anahtar buradaymış bedeutet ‚Der Schlüssel war ja hier!‘ Der Unterschied liegt im Verb. Ein deutscher Zusatz wie ‚wie ich hörte‘ oder ‚offenbar‘ ist in der türkischen Form bereits grammatisch erfasst."
      ]
    }],
    ["Tzeltal: bergauf, bergab, quer zum Hang", {
      detail: [
        "Tzeltal ist eine Maya-Sprache im mexikanischen Bundesstaat Chiapas. Die hier beschriebene Varietät wird in Tenejapa gesprochen, einem Hochlandort östlich von San Cristóbal de las Casas. Räumliche Beziehungen folgen dort häufig der Geländeachse: ajk’ol heißt ‚bergauf‘, alan ‚bergab‘ und jejch ‚quer zum Hang‘.",
        "Dieselben Wörter ordnen Häuser im Dorf, Gegenstände auf einem Tisch und weit entfernte Orte. Der Bezugspunkt ist also nicht der Körper des Sprechers mit links und rechts, sondern die Neigung der Landschaft. Kinder erwerben mit diesen Ausdrücken zugleich ein genaues räumliches Wissen über Wege, Felder und Häuser des Berglands."
      ]
    }],
    ["Baskisch: mehrere Personen in einem Verb", {
      detail: [
        "Baskisch wird im westlichen Pyrenäenraum und an der Biskaya gesprochen, auf beiden Seiten der Grenze zwischen Spanien und Frankreich. Es bildet eine eigene Sprachfamilie. Hilfsverben stimmen zugleich mit mehreren Beteiligten überein. Ikusi zaitut bedeutet ‚Ich habe dich gesehen‘; zaitut bezeichnet sowohl ‚dich‘ als auch ‚ich‘.",
        "Eman dizkidazu heißt ‚Du hast sie mir gegeben‘. Das Hilfsverb enthält Angaben zum Geber, zum Empfänger und zu den mehreren gegebenen Dingen. Selbstständige Pronomen wie ni ‚ich‘ oder zu ‚du‘ dienen deshalb meist der Hervorhebung. Hinzu kommt die ergative Grammatik: Das Subjekt eines transitiven Verbs erhält eine andere Markierung als das Subjekt vieler intransitiver Verben."
      ]
    }],
    ["Inuktitut: ein Satz in einem Wort", {
      detail: [
        "Inuktitut gehört zur eskimo-aleutischen Sprachfamilie und wird von Inuit im östlichen kanadischen Arktisgebiet gesprochen, besonders in Nunavut und Nunavik. Ein Wort besteht oft aus einer Basis, mehreren bedeutungstragenden Zusätzen und einer Personalendung.",
        "tusaatsiarunnanngittualuujunga bedeutet ungefähr ‚Ich höre wirklich sehr schlecht‘. Darin stehen tusaa- ‚hören‘, -tsiaq- ‚gut‘, -junnar- ‚fähig sein‘, -nngit- ‚nicht‘, -tualuu- ‚sehr‘ und -junga ‚ich‘. Die Reihenfolge ist geregelt; jeder Zusatz bezieht sich auf den ganzen Stamm, der vor ihm steht. Ein einzelnes Inuktitut-Wort entspricht deshalb häufig einem vollständigen deutschen Satz."
      ]
    }],
    ["Dyirbal: vier Nominalklassen", {
      detail: [
        "Dyirbal ist eine Sprache der Aboriginal communities um Tully und das obere Murray Valley im Norden des australischen Bundesstaats Queensland. Vor Substantiven stehen Klassenmarker. bayi umfasst viele männliche Menschen und Tiere, balan viele weibliche Menschen sowie Feuer und bestimmte Tiere, balam vor allem essbare Pflanzen; bala nimmt zahlreiche übrige Wörter auf.",
        "Adjektive und andere Begleiter wiederholen die Klasse des Substantivs. Die Zuordnung folgt mehreren historischen Regeln, darunter typische Eigenschaften und ältere Wortformen. Die oft zitierte Gruppe ‚Frauen, Feuer und gefährliche Dinge‘ beschreibt daher nur einen Ausschnitt von balan und verschweigt die Ausnahmen, die für das tatsächliche System wichtig sind."
      ]
    }],
    ["Koreanisch -te-: erinnerte Wahrnehmung", {
      detail: [
        "Koreanisch wird auf der koreanischen Halbinsel und in großen Auslandsgemeinschaften gesprochen. Die Form -te- kennzeichnet eine Situation, die der Sprecher früher selbst wahrgenommen hat: 비가 오더라, pi-ka o-te-ra, bedeutet etwa ‚Ich sah, dass es regnete.‘ -te- bezeichnet hier den erinnernden Zugang; die Vergangenheitszeit wird gesondert ausgedrückt.",
        "Bei absichtlichen Handlungen der ersten Person gelten besondere Beschränkungen, weil Handelnder und damaliger Beobachter dieselbe Person wären. In einer Erzählung unterscheidet -te- somit eine erinnerte Szene von einer späteren Schlussfolgerung oder einer Mitteilung aus zweiter Hand."
      ]
    }],
    ["Mattang lesen", {
      detail: [
        "Auf den Marshallinseln im westlichen Pazifik unterrichteten erfahrene Navigatoren bestimmte Dünungsmuster mit Mattang genannten Stabmodellen. Gebogene Palmstäbe bezeichneten, wie Wellen an einem Atoll gebrochen, gebeugt oder zurückgeworfen werden; Muscheln markierten Inseln. Das Modell blieb an Land und diente nicht als Karte für eine bestimmte Reise.",
        "Im Auslegerkanu achtete der Navigator auf zwei sich kreuzende Dünungen und auf kleine Änderungen der Rollbewegung. Eine von einem Atoll zurückgeworfene Welle verriet Land, obwohl es noch unter dem Horizont lag. Jeder Lehrer baute sein Mattang nach der eigenen Lehrweise. Entscheidend war die eingeübte Wahrnehmung im Boot, nicht das Mitführen des Modells."
      ]
    }],
    ["Die Ermordung Tuwhakararos · Māori", {
      detail: [
        "Tuwhakararo wird beim Besuch einer fremden Siedlung getötet. Seine Mutter Apakura erfährt von der Tat und ruft in einem langen Klagegesang jeden Verwandten einzeln zur Vergeltung auf. Whakatau übernimmt die Führung. Er schließt die Täter während eines Festes in ihrem großen Haus ein und setzt es in Brand; wer zu fliehen versucht, wird draußen erwartet.",
        "George Grey veröffentlichte die Māori-Erzählung 1855 in Polynesian Mythology. Die Karte lädt den vollständigen englischen Wortlaut dieser Ausgabe."
      ]
    }],
    ["Die Schildkröte mit der schönen Tochter · Efik", {
      detail: [
        "Ein König droht allen Eltern mit dem Tod, deren Tochter schöner ist als die fünfzig Frauen seines Sohnes. Die Schildkröte hält deshalb ihre Tochter Adet verborgen. Der Prinz entdeckt sie zufällig bei der Jagd, verspricht ihr die Ehe und bezahlt den Brautpreis. Als er die Sache öffentlich macht, lässt der König Adet vor die Versammlung bringen.",
        "Ihr Anblick bringt den König dazu, das eigene Gesetz zurückzunehmen. Die Hochzeit findet noch am selben Tag statt, und die Schildkröte wird reich belohnt. Elphinstone Dayrell veröffentlichte die Efik-Erzählung 1910 in Folk Stories from Southern Nigeria; der vollständige englische Text wird aus dieser Ausgabe geladen."
      ]
    }],
    ["Die Frau mit zwei Häuten · Efik", {
      detail: [
        "Adiaha, eine Tochter der Spinne, trägt am Tag eine hässliche zweite Haut und legt sie nur nachts ab. Die erste Frau des Königs lässt ihn durch Zaubermittel Adiaha und später deren Kinder vergessen. Auf ihren Rat wirft der König Sohn und Tochter in den Fluss. Ein Wassergeist rettet beide und zieht sie auf.",
        "Der erwachsene Sohn kehrt als unbesiegbarer Ringer zurück. Vor einer öffentlichen Gerichtsversammlung nennt er seine Herkunft, zeigt Mutter und Schwester und lässt die Intrige der ersten Frau beurteilen. Dayrell veröffentlichte diese Efik-Fassung 1910; die Karte lädt den vollständigen historischen Text mit dessen grausamem Schluss."
      ]
    }],
    ["Warum die Fledermaus nachts fliegt · Efik", {
      detail: [
        "Die Fledermaus behauptet gegenüber der Buschratte, ihre Suppe schmecke deshalb so gut, weil sie sich selbst im Kochwasser siede. Als Vorführung springt sie in lauwarmes Wasser; die vorbereitete Suppe scheint den Trick zu bestätigen. Die Ratte versucht das Rezept zu Hause mit tatsächlich kochendem Wasser und stirbt.",
        "Die Frau der Ratte klagt die Fledermaus beim König an. Als alle nach ihr suchen, versteckt sie sich tagsüber im Busch und kommt nur noch nachts zum Fressen hervor. Dayrell zeichnete die Efik-Erzählung in Südnigeria auf und veröffentlichte sie 1910."
      ]
    }],
    ["Die Zaubertrommel · Efik", {
      detail: [
        "König Efriam Duke besitzt eine Trommel, die bei jedem Schlag ein Festmahl erscheinen lässt. Die Schildkröte erzwingt die Herausgabe als Entschädigung für eine einzige Palmfrucht. Der König verschweigt ihr die Bedingung: Wer mit der Trommel über einen Stock steigt, ruft statt des Essens dreihundert bewaffnete Egbo-Männer herbei.",
        "Nach dem Regelbruch lädt die Schildkröte aus Rache zahlreiche Gäste ein und lässt sie schlagen. Sie tauscht die Trommel danach gegen einen Baum, der täglich Essen gibt; auch dessen Verbot wird von einem gierigen Sohn gebrochen. Dayrell veröffentlichte die lange Efik-Erzählung 1910. Die Karte lädt das vollständige Kapitel."
      ]
    }],
    ["Aponibolinayen und die Sonne · Tinguian", {
      detail: [
        "Aponibolinayen wird schwanger, nachdem sie eine Orange vom Baum gegessen hat, und bringt Kanag zur Welt. Die Sonne beansprucht das Kind und holt Mutter und Sohn in den Himmel. Kanag wächst dort auf, kehrt aber später auf die Erde zurück. Seine Reise macht aus der zunächst rätselhaften Schwangerschaft eine Verwandtschaft zwischen einer irdischen Familie und der Sonne.",
        "Mabel Cook Cole veröffentlichte die Tinguian-Erzählung 1916 nach ethnologischer Feldarbeit im Norden der philippinischen Insel Luzon. Der vollständige englische Text wird beim Öffnen aus der gemeinfreien Transkription geladen."
      ]
    }],
    ["Wie die Sommervögel kamen · Zuni", {
      detail: [
        "Als die Vögel ausbleiben, folgt ihnen ein Junge bis zu einem Eingang in die unterirdische Welt. Dort bittet er ihre Bewohner um die Rückkehr. Die Vögel kommen schließlich mit ihm nach oben und bringen die warme Jahreszeit mit. Ihr Zug ist in der Erzählung daher zugleich Tierwanderung und geregelter Übergang zwischen den Jahreszeiten.",
        "Frank Hamilton Cushing lebte ab 1879 in Zuni und veröffentlichte diese Fassung 1901. Die Karte lädt den vollständigen englischen Text seiner Ausgabe."
      ]
    }],
    ["Der wunderbare Vogel · Blackfoot", {
      detail: [
        "Old Man hört von einem außergewöhnlichen Vogel und macht sich auf die Suche. Er möchte dessen Kraft besitzen, handelt jedoch voreilig und versteht die Bedingungen der Begegnung falsch. Was als Jagd nach einem Vorteil beginnt, endet deshalb mit dem Verlust des erhofften Gewinns und mit einer Erklärung für eine bleibende Eigenheit der Welt.",
        "George Bird Grinnell stellte die Fassung aus Gesprächen mit Blackfoot-Sprechern zusammen und veröffentlichte sie 1892 in Blackfoot Lodge Tales. Die Karte lädt das vollständige englische Kapitel; die historische Wortwahl der Ausgabe bleibt erhalten."
      ]
    }],
    ["Blitz und Donner · Efik", {
      detail: [
        "Blitz und Donner leben zunächst unter den Menschen. Donner gerät immer wieder in Zorn und richtet dabei schwere Schäden an; Blitz kündigt seinen Ausbruch laut an, hält ihn aber nicht auf. Nach zerstörten Häusern und Bäumen weist der König beide zuerst aus der Stadt und später ganz von der Erde fort.",
        "Darum, so endet die Erzählung, wohnen beide am Himmel: Zuerst warnt der Blitz, danach ist der Donner zu hören. Elphinstone Dayrell veröffentlichte die Efik-Fassung 1910. Der vollständige englische Wortlaut wird aus seiner gemeinfreien Ausgabe geladen."
      ]
    }],
    ["Warum der Mond zu- und abnimmt · Efik", {
      detail: [
        "Eine alte Frau erhält vom Mond Licht und Nahrung. Dafür muss sie eine genaue Anweisung befolgen. Als sie die Abmachung verletzt, verliert der Mond seine unveränderliche Gestalt. Sein regelmäßiges Wachsen und Schwinden wird so aus einer gestörten Beziehung zwischen der Frau und dem Himmelskörper erklärt.",
        "Dayrell veröffentlichte die Efik-Erzählung 1910 in Folk Stories from Southern Nigeria. Die Karte lädt den vollständigen englischen Text direkt aus der gemeinfreien Transkription."
      ]
    }]
  ]);

  const authoredSubstitutions = [
    ["In der „Taufe Christi“ verbindet der senkrechte Baum Himmel, Christus und Wasser.", "In der „Taufe Christi“ steht der senkrechte Baum auf einer Achse mit Christus und dessen Spiegelbild im Wasser."],
    ["Das Selbstbildnis an der Staffelei zeigt die Malerin bei einem religiösen Werk und verbindet handwerkliche Arbeit mit gelehrter Selbstbehauptung.", "Das Selbstbildnis an der Staffelei zeigt die Malerin bei einem religiösen Werk; die sichtbare Arbeit an der Leinwand begründet ihren Anspruch als gebildete Hofmalerin."],
    ["Die „Alte Armenhäuslerin“ verbindet frontale Würde mit schwerer Materialität.", "Die „Alte Armenhäuslerin“ sitzt frontal und erhält durch die feste Modellierung ein ungewöhnliches körperliches Gewicht."],
    ["„Bad an einem Sommerabend“ ordnet Frauenkörper, Wasser und Ufer fast wie ausgeschnittene Farbstücke und verbindet moderne Freizeit mit einer künstlich gebauten Bühne.", "„Bad an einem Sommerabend“ ordnet die Körper und das Ufer wie ausgeschnittene Farbstücke; die moderne Freizeitszene erscheint dadurch wie eine künstlich gebaute Bühne."],
    ["Seine Bilder verbinden historisches Kostüm, Theater, Tagespresse und ungewöhnliche Schnitte.", "Historisches Kostüm und Theater stehen bei Yoshitoshi neben Motiven aus der Tagespresse; ungewöhnliche Ausschnitte bestimmen ihren Aufbau."],
    ["Kuniyoshis Größe liegt in der Verbindung von Lesbarkeit und formaler Kühnheit.", "Kuniyoshis Bilder bleiben unmittelbar lesbar und sind zugleich formal außerordentlich kühn."],
    ["Ihre Malerei verbindet genaue Zeichnung mit hellen, beweglichen Farben.", "Ihre Malerei beruht auf genauer Zeichnung; darüber liegen helle, locker gesetzte Farben."],
    ["Das UNESCO-Video verbindet Gesang mit Bewegung und Alltag.", "Das UNESCO-Video zeigt den Gesang während gemeinsamer Bewegung und alltäglicher Tätigkeiten."],
    ["Traditionelle Folgen verbinden den Maqam mit rhythmischen Liedern, den pesta.", "In traditionellen Folgen schließt an den Maqam ein rhythmisches Lied, der Pesta, an."],
    ["Die Verbindung aus strenger Form und eigenständiger Orchesterfarbe stellt ihre Dritte neben die Sinfonien ihrer bekannten Zeitgenossen.", "Die strenge Form und die eigenständige Orchesterfarbe stellen ihre Dritte neben die Sinfonien ihrer bekannten Zeitgenossen."],
    ["Genau diese Verbindung verankert das Werk in der mitteleuropäischen Sinfonik des frühen 20. Jahrhunderts.", "Damit besitzt das Werk einen eigenen Platz in der mitteleuropäischen Sinfonik des frühen 20. Jahrhunderts."],
    ["Arriaga verbindet kontrapunktische Sicherheit mit überraschenden Modulationen und einer beweglichen Behandlung der Holzbläser.", "Arriagas kontrapunktische Sicherheit zeigt sich gerade in überraschenden Modulationen und beweglich geführten Holzbläserstimmen."],
    ["Kurze Motive wandern durch die Stimmgruppen, raue Akkorde schneiden in klare Linien, und der Rhythmus trägt die Form. Bacewicz verbindet barocke Satztypen mit der Energie der polnischen Moderne.", "Kurze Motive gehen von einer Stimmgruppe zur nächsten. Raue Akkorde unterbrechen klare Linien, und der Rhythmus bestimmt die Form. Bacewicz verwendet barocke Satztypen in der schärferen Klangsprache der polnischen Moderne."],
    ["Weinberg verbindet jüdisch geprägte Melodik, Marschgesten, kammermusikalische Gegenrede und lange stille Abgänge.", "Jüdisch geprägte Melodik steht bei Weinberg neben verzerrten Marschgesten; kammermusikalische Gegenreden enden häufig in langen, stillen Abgängen."],
    ["verchromte Gelenke verbinden die Seitenteile", "verchromte Gelenke halten die Seitenteile zusammen"],
    ["Die gebogenen Kufen, sichtbaren Verbindungen und die schmale Polsterung lassen die Konstruktion ablesbar.", "Die gebogenen Kufen, offen gezeigten Gelenke und die schmale Polsterung machen die Konstruktion ablesbar."],
    ["Breite Seitenrahmen, rechtwinklige Verbindungen und das regelmäßige Geflecht bestimmen die Ansicht.", "Breite Seitenrahmen, rechtwinklig gefügte Hölzer und das regelmäßige Geflecht bestimmen die Ansicht."],
    ["Der Entwurf verbindet damit industrielle Logik und eine ruhige taktile Oberfläche.", "Aus der industriellen Herstellung folgt eine ruhige, deutlich tastbare Oberfläche."],
    ["Schwarze Hohlräume verbinden sich mit der Nacht hinter dem Palast, während die weißen Knochen die gesamte Komposition festhalten.", "Die schwarzen Hohlräume gehen in die Nacht hinter dem Palast über, während die weißen Knochen die gesamte Komposition festhalten."],
    ["Die Erzählung verbindet persönliche Heilung, kosmische Verwandtschaft und rituelle Autorität.", "Die persönliche Heilung begründet in der Erzählung zugleich Scarfaces Verwandtschaft mit der Sonne und seine rituelle Autorität."],
    ["Nach dem Tod eines Kollegen erkannte Semmelweis eine Verbindung zu Leichensektionen.", "Nach dem Tod eines Kollegen vermutete Semmelweis, dass Ärzte nach Leichensektionen krankmachendes Material in den Kreißsaal trugen."],
    ["das Finale verbindet Marschrhythmus mit einem lyrischen Seitengedanken", "im Finale unterbricht ein lyrischer Seitengedanke den Marschrhythmus"],
    ["Mehrere gemalte Durchblicke verbinden real getrennte Flächen.", "Mehrere gemalte Durchblicke lassen die tatsächlich getrennten Flächen wie einen einzigen Innenraum erscheinen."],
    ["Sichtbare Verbindungen übernehmen zugleich die Aufgabe des Ornaments.", "Die offen gezeigten Nieten und Fügungen übernehmen zugleich die Aufgabe des Ornaments."],
    ["Damit verbindet das Ensemble präzise Werkstattarbeit mit dem Gedanken einer wiederholbaren Serie im niederländischen Kunsthandwerk um 1900.", "Die präzise Werkstattarbeit folgt bereits dem Gedanken einer wiederholbaren Serie im niederländischen Kunsthandwerk um 1900."],
    ["Die Szene verbindet Verkleidung, Dunkelheit und ein später vorgelegtes Beweisstück.", "Die Täuschung gelingt durch Verkleidung und Dunkelheit; ein später vorgelegtes Beweisstück deckt sie auf."],
    ["Lewtons Produktionen The Leopard Man und The Seventh Victim variierten die Verbindung aus offscreen Gefahr, Tonstoß und verspäteter Erklärung.", "Lewtons Produktionen The Leopard Man und The Seventh Victim variierten denselben Ablauf: Die Gefahr bleibt außerhalb des Bildes, ein jäher Ton erschreckt, die harmlose Ursache wird erst danach sichtbar."],
    ["Panoramic View of Conway Castle von 1898 verbindet Bahnbewegung, Landschaft und handkolorierte Bildflächen", "Panoramic View of Conway Castle von 1898 zeigt die Landschaft aus dem fahrenden Zug und färbt einzelne Bildpartien von Hand"],
    ["Getrennte Räume erscheinen gleichzeitig, weil eine Telefonleitung ihre Figuren verbindet.", "Ein geteiltes Bild zeigt beide Seiten eines Telefongesprächs gleichzeitig."],
    ["In dreistimmiger Musik verbindet sich diese Außenstimmenformel häufig mit einer 3–5-Bewegung der Mittelstimme.", "In dreistimmiger Musik tritt zu dieser Außenstimmenformel häufig eine 3–5-Bewegung der Mittelstimme."],
    ["beziehungsweise eine LP-Verbindung", "beziehungsweise einen neo-riemannschen LP-Schritt"],
    ["The Cathedrals of Wall Street verbindet Börse, Banken, Fahnen und Hochzeitsgesellschaft zu einem präzisen Gesellschaftsbild.", "In The Cathedrals of Wall Street werden Börse, Banken und eine Hochzeitsgesellschaft zu einem präzisen Gesellschaftsbild angeordnet."],
    ["A Vase of Flowers verbindet botanische Genauigkeit mit locker gesetzten Lichtreflexen.", "A Vase of Flowers beschreibt die Pflanzen botanisch genau, setzt die Lichtreflexe jedoch mit lockeren Pinselstrichen."],
    ["Baba Jaga im Mörser verbindet schnelle Bewegung mit einem flachen dekorativen Bildraum.", "Baba Jaga im Mörser rast durch einen flachen Bildraum, dessen dekorative Rahmung jede Tiefenwirkung bremst."],
    ["Die Sinfonie verbindet russische Spätromantik mit einer eigenständigen motivischen Arbeit", "Die Sinfonie gehört klanglich zur russischen Spätromantik und entwickelt ihre Form dennoch aus einer eigenständigen motivischen Arbeit"],
    ["Die Drucke verbinden Modezeichnung und eigenständige Gebrauchsgrafik.", "Die Drucke sind Modezeichnungen und zugleich sorgfältig gebaute Gebrauchsgrafik."],
    ["Kanag kehrt später zur Erde zurück und verbindet die getrennten Familien.", "Kanag kehrt später zur Erde zurück und führt die getrennten Familien wieder zusammen."],
    ["Die Erzählung verbindet Jahreszeiten, Wanderung und rituelle Beziehungen zwischen Menschen und Vögeln.", "Die Wanderung der Vögel erklärt den Wechsel der Jahreszeiten und begründet ihre rituelle Beziehung zu den Menschen."],
    ["eine Narbe verbindet den gegenwärtigen Körper mit einer früher erzählten Verletzung", "eine Narbe weist den gegenwärtigen Körper als den Körper aus, dessen frühere Verletzung bereits erzählt wurde"],
    ["The Lonedale Operator von 1911 verbindet das verbarrikadierte Telegrafenbüro mit dem Zug der Retter.", "The Lonedale Operator von 1911 schneidet zwischen dem verbarrikadierten Telegrafenbüro und dem Zug der Retter hin und her."],
    ["zuerst als gespannte Verbindung mit dem Agamemnon-Motiv", "zuerst in unmittelbarer Folge auf das Agamemnon-Motiv"],
    ["Form 76 verbindet eine gut greifbare Kanne mit einem Henkel, der als eigenes grafisches Zeichen lesbar bleibt.", "Bei Form 76 sitzt an der gut greifbaren Kanne ein Henkel, der als eigenes grafisches Zeichen lesbar bleibt."],
    ["In The Third Man verbindet der Schnitt bei der Beerdigung Gesichter mit dem beobachteten Geschehen.", "In The Third Man folgt bei der Beerdigung auf jedes blickende Gesicht eine Einstellung des beobachteten Geschehens."],
    ["Damit ließen sich Gebirgsketten, Becken und eine gerichtete Erdgeschichte in einem einzigen mechanischen Vorgang verbinden.", "Damit schienen Gebirgsketten und Becken aus demselben mechanischen Vorgang erklärbar; selbst die Erdgeschichte erhielt eine eindeutige Richtung."],
    ["Der Name K’inich Janaab’ Pakal verbindet mehrere Wort- und Silbenzeichen", "Der Name K’inich Janaab’ Pakal besteht aus mehreren Wort- und Silbenzeichen"],
    ["die ungleiche Verbindung erzeugt Schärfe, Komik oder Verdichtung", "der Wechsel des Bedeutungsbereichs macht die Pointe scharf und knapp"],
    ["Pantografen und maschinelle Matrizenfertigung verdrängten diese Verbindung aus Auge, Hand und Metallkunde.", "Pantografen und maschinelle Matrizenfertigung verdrängten eine Arbeit, bei der Augenmaß und Metallkenntnis unmittelbar in jeden Schnitt eingingen."],
    ["Die Idee verbindet frühe Digitalkameras, Foren, private Rechner und eine von Hand betreute Einsendungskultur.", "Die Folge entstand mit frühen Digitalkameras und privaten Rechnern; Einsendungen kamen über Foren und wurden von Hand eingepflegt."],
    ["Eine späte Verwandtschaft soll vier Filme nachträglich zu einem Plan verbinden.", "Eine spät enthüllte Verwandtschaft erklärt vier Filme nachträglich zum Werk desselben Gegners."],
    ["Der Ort liegt frei zugänglich oberhalb der Stadt und verbindet archäologische Werkspur mit einem Blick über Rheinebene und Weinberge.", "Der frei zugängliche Ort oberhalb der Stadt bewahrt deutliche römische Werkspuren und bietet einen weiten Blick über Rheinebene und Weinberge."],
    ["Die kurze Strecke verbindet ihn mit ehemaligen Andesit- und Sandsteinbrüchen.", "Auf demselben kurzen Rundweg liegen ehemalige Andesit- und Sandsteinbrüche."],
    ["ein Kreis verbindet zwei Wände", "ein Kreis läuft über die Kante zweier Wände"],
    ["Wharton verbindet dieselbe Prüfung mit Beschreibungen.", "Wharton stellt dieselbe Anforderung an Beschreibungen."],
    ["Verteile die Figur auf wenige Details, die der Leser miteinander verbinden muss", "Gib die Figur durch wenige Details zu erkennen, aus denen der Leser selbst ein Bild zusammensetzt"],
    ["Ihre Orchesterbehandlung verbindet kräftige motivische Arbeit mit transparenten Mittelstimmen.", "Ihre kräftige motivische Arbeit bleibt auch in den Mittelstimmen des Orchesters deutlich hörbar."],
    ["jedes Material betont eine Krümmung oder Verbindung", "jedes Material betont eine Krümmung oder eine konstruktive Fuge"],
    ["Spiritual und Tanz stehen nicht als Zitate neben einer europäischen Form, sondern bestimmen Rhythmus und Themenbildung des Werks.", "Spiritual und Tanz bestimmen Rhythmus und Themenbildung des Werks bis in die sinfonische Form hinein."],
    ["Die Folge mehrerer Kasusendungen zeigt somit nicht nur die Rolle des Netzes, sondern auch Satzebene und Zeitbezug.", "Die Folge mehrerer Kasusendungen bezeichnet die Rolle des Netzes ebenso wie Satzebene und Zeitbezug."],
    ["Die Zusammenstellung ist keine nachträgliche Auswahl persönlicher Andenken, sondern der erhaltene Inhalt seiner Manteltaschen.", "Die Gegenstände lagen tatsächlich in Lincolns Manteltaschen; sie wurden erst Jahrzehnte später der Library of Congress übergeben."],
    ["Der Bezugspunkt ist also nicht der Körper des Sprechers mit links und rechts, sondern die Neigung der Landschaft.", "Als Bezugspunkt dient die Neigung der Landschaft. Links und rechts vom Körper des Sprechers spielen in diesen Ausdrücken keine Rolle."]
  ];

  const languageInfo = new Map([
    ["Kayardild: drei Kasus an einem Wort", [["Sprachgemeinschaft", "Kaiadilt"], ["Gebiet", "South Wellesley Islands und Mornington Island, Queensland, Australien"], ["Sprachfamilie", "Tangkic"]]],
    ["Türkisch: Woher weißt du das?", [["Gebiet", "vor allem Türkei und Zypern"], ["Sprachfamilie", "Turksprachen"], ["Merkmal", "Vergangenheitsformen unterscheiden den Zugang zur Information"]]],
    ["Tzeltal: bergauf, bergab, quer zum Hang", [["Sprachgemeinschaft", "Tzeltal in Tenejapa"], ["Gebiet", "Hochland von Chiapas, Mexiko, östlich von San Cristóbal de las Casas"], ["Sprachfamilie", "Maya-Sprachen"]]],
    ["Baskisch: mehrere Personen in einem Verb", [["Gebiet", "Biskaya und westliche Pyrenäen in Spanien und Frankreich"], ["Sprachfamilie", "isolierte Sprache"], ["Merkmal", "das Hilfsverb markiert mehrere Beteiligte"]]],
    ["Inuktitut: ein Satz in einem Wort", [["Sprachgemeinschaft", "Inuit"], ["Gebiet", "östliche kanadische Arktis, besonders Nunavut und Nunavik"], ["Sprachfamilie", "Eskimo-aleutische Sprachen"]]],
    ["Dyirbal: vier Nominalklassen", [["Sprachgemeinschaft", "Dyirbalngan"], ["Gebiet", "um Tully und das obere Murray Valley, Nord-Queensland, Australien"], ["Sprachfamilie", "Pama-Nyungan"]]],
    ["Koreanisch -te-: erinnerte Wahrnehmung", [["Gebiet", "koreanische Halbinsel und Auslandsgemeinschaften"], ["Sprachfamilie", "Koreanisch"], ["Merkmal", "-te- kennzeichnet früher selbst Wahrgenommenes"]]]
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

    const prose = proseOverrides.get(card.title);
    if (prose) {
      if (prose.summary !== undefined) card.summary = prose.summary;
      if (prose.detail && !card.wiki) card.detail = [...prose.detail];
    }

    if (card.summary) {
      for (const [before, after] of authoredSubstitutions) card.summary = card.summary.replace(before, after);
    }
    if (!card.wiki) {
      card.detail = (card.detail || []).map(paragraph => {
        for (const [before, after] of authoredSubstitutions) paragraph = paragraph.replace(before, after);
        return paragraph;
      });
    }
    if (languageInfo.has(card.title)) card.languageInfo = languageInfo.get(card.title);
  }

  // Website-Aufnahmen mit Cookie- oder Navigationsfenstern sowie sachfremde Buchumschläge.
  const commons = (query, caption) => ({ type: "commons", query, caption });
  const openingPortraits = new Map([
    ["Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.", ["Franz Kafka portrait 1923", "Franz Kafka"]],
    ["Mein Vater war ein Kaufmann.", ["Adalbert Stifter portrait", "Adalbert Stifter"]],
    ["Call me Ishmael.", ["Herman Melville portrait", "Herman Melville"]],
    ["Alle glücklichen Familien gleichen einander, jede unglückliche Familie ist auf ihre eigene Weise unglücklich.", ["Leo Tolstoy portrait 1908", "Lew Tolstoi"]],
    ["It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", ["Jane Austen portrait", "Jane Austen"]],
    ["Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.", ["George Eliot portrait", "George Eliot"]],
    ["Wir waren im Studiersaal, als der Direktor eintrat, gefolgt von einem Neuen in bürgerlicher Kleidung und einem Schuldiener, der ein großes Pult trug.", ["Gustave Flaubert portrait", "Gustave Flaubert"]],
    ["Eduard – so nennen wir einen reichen Baron im besten Mannesalter – Eduard hatte in seiner Baumschule die schönste Stunde eines Aprilnachmittags zugebracht, um frisch erhaltene Pfropfreiser auf junge Stämme zu bringen.", ["Johann Wolfgang von Goethe portrait Stieler", "Johann Wolfgang Goethe"]],
    ["It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness …", ["Charles Dickens portrait photograph", "Charles Dickens"]],
    ["Mrs Dalloway said she would buy the flowers herself.", ["Virginia Woolf portrait 1927", "Virginia Woolf"]],
    ["Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.", ["James Joyce portrait 1915", "James Joyce"]],
    ["This is the saddest story I have ever heard.", ["Ford Madox Ford portrait", "Ford Madox Ford"]],
    ["Ich bin ein kranker Mensch … Ich bin ein böser Mensch.", ["Fyodor Dostoevsky portrait 1879", "Fjodor Dostojewski"]]
  ]);

  const selectedCoverPatterns = new Map([
    ["Sonne, Mond und ihre Kinder · Visayas", /Philippine Folk Tales/i],
    ["Das arme Truthahnmädchen · Zuni", /Turkey Girl illustration Cushing/i],
    ["Die alte Frau und ihr Bärenpflegesohn · Inughuit (Smith Sound)", /Rasmussen Eskimo Folk-Tales/i],
    ["Die Sarsagun-Braut und der Bonga · Santal", /Folklore of the Santal Parganas/i],
    ["Gefundenes Manuskript", /Castle of Otranto first edition/i],
    ["Tarnhelm-Folge", /Final Fantasy VII 1997 cover/i],
    ["Blitz und Donner · Efik", /Folk Stories Southern Nigeria Dayrell cover/i],
    ["Verzögertes Verstehen", /Heart of Darkness 1902 cover/i],
    ["Zeugma", /Rape of the Lock 1714 title page/i],
    ["Erlebte Rede", /Jane Austen Emma first edition title page/i],
    ["Roboter", /Karel Capek RUR first edition/i]
  ]);

  const mediaReplacements = new Map([
    ["Sonne, Mond und ihre Kinder · Visayas", [["Visayan people Philippines historical photograph", "Visayische Gemeinschaft zu Beginn des 20. Jahrhunderts"]]],
    ["The Clock · Film oder Uhr", [["Christian Marclay portrait", "Christian Marclay"]]],
    ["Warum zwischen den Sätzen Stille herrscht", [["symphony orchestra conductor audience concert hall", "Dirigent und Orchester am Ende eines Satzes"]]],
    ["Warum eine neue Stimme einen neuen Absatz erhält", [["Charles Dickens manuscript dialogue page", "Dialog in einer Manuskriptseite"]]],
    ["Gis oder As: derselbe Ton, eine andere Aufgabe", [["circle of fifths enharmonic keys diagram", "Enharmonisch benachbarte Tonarten"]]],
    ["Letterlocking", [["locked letter historical letterlocking", "Historisch gefalteter und versiegelter Brief"]]],
    ["Schriftpunzen von Hand schneiden", [["type punchcutting steel punches", "Schriftpunzen und Gegenpunzen"]]],
    ["Superbad.com", [["Ben Benjamin Superbad net artist", "Ben Benjamin"]]],
    ["TEXTFILES.COM", [["Jason Scott archivist portrait", "Jason Scott, Gründer von TEXTFILES.COM"]]],
    ["ACME Laboratories", [["Jef Poskanzer portrait", "Jef Poskanzer"]]],
    ["The Infinite Cat Project", [["cat looking at computer monitor", "Katze vor einem Bildschirm"]]],
    ["One Terabyte of Kilobyte Age", [["Olia Lialina Dragan Espenschied", "Olia Lialina und Dragan Espenschied"]]],
    ["Deutsches Musikautomaten-Museum", [["Deutsches Musikautomaten Museum Bruchsal Phonoliszt Violina", "Phonoliszt-Violina im Musikautomaten-Museum"]]],
    ["Schau- und Sichtungsgarten Hermannshof", [["Schau und Sichtungsgarten Hermannshof Weinheim", "Staudenpflanzung im Hermannshof"]]],
    ["Trullo auf dem Adelberg", [["Flonheimer Trullo Adelberg", "Trullo auf dem Adelberg"]]],
    ["Josef Svoboda · Polyekran", [["Josef Svoboda Polyekran Expo 58", "Polyekran auf der Expo 58"]]],
    ["Karel Zeman · Invention for Destruction", []],
    ["April Greiman · Design Quarterly 133", [["April Greiman designer portrait", "April Greiman"]]]
  ]);

  for (const card of window.KARTEN) {
    const selectedPattern = selectedCoverPatterns.get(card.title);
    card.media = (card.media || []).filter(item => {
      if (/image\.thum\.io/i.test(item.src || "")) return false;
      const description = `${item.query || ""} ${item.file || ""} ${item.caption || ""}`;
      if (card.category === "Erste Sätze großer Romane" && /(?:cover|edition|title page|Titelseite|Umschlag|Ausgabe|Erstausgabe)/i.test(description)) return false;
      return !selectedPattern?.test(description);
    });

    if (card.category === "Erste Sätze großer Romane" && !card.media.length && openingPortraits.has(card.title)) {
      const [query, caption] = openingPortraits.get(card.title);
      card.media.push(commons(query, caption));
    }

    if (!card.media.length && mediaReplacements.has(card.title)) {
      card.media.push(...mediaReplacements.get(card.title).map(([query, caption]) => commons(query, caption)));
    }

    if (card.title === "Karel Zeman · Invention for Destruction" && !card.media.length) {
      card.media.push({ type: "youtube", id: "G0t3pB0D7SQ", caption: "Trailer der digital restaurierten Fassung" });
    }
  }
})();
