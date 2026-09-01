// Zehn neue Kategorien mit jeweils fünf Karten.
(() => {
  "use strict";
  const src = (label, url) => S(label, url);
  const card = (category, title, detail, media, sources = [], extra = {}) => ({
    category, title, detail, media, sources, ...extra
  });

  window.KARTEN.push(
    // Falsche Modelle mit großer Erklärungskraft
    card("Falsche Modelle mit großer Erklärungskraft", "Kalorische Theorie", [
      "Wärme galt im 18. Jahrhundert als gewichtsloser Stoff, das Kalorikum. Ein heißer Körper enthielt mehr davon; beim Kontakt floss es in einen kälteren. Das Modell ordnete Wärmeleitung, Wärmekapazität, Phasenwechsel und Lavoisiers Verbrennungslehre in ein gemeinsames Bild.",
      "Rumfords Kanonenbohrversuche von 1798 erzeugten durch Reibung fortwährend Wärme. Eine endliche Stoffmenge erklärte das schlecht. Joules Messungen verbanden Wärme anschließend quantitativ mit mechanischer Arbeit. Aus dem vermeintlichen Stoff blieb eine brauchbare Größe: Die kalorische Zustandsgleichung lebt in der Thermodynamik fort, obwohl Wärme heute als Energieübertragung beschrieben wird."
    ], [C("Antoine Lavoisier caloric theory diagram", "Lavoisiers Darstellung der Wärmestofflehre"), C("Rumford cannon boring experiment", "Rumfords Kanonenbohrversuch")], [
      src("Encyclopaedia Britannica: caloric theory", "https://www.britannica.com/science/caloric-theory"),
      src("Royal Society: Joule, On the mechanical equivalent of heat", "https://makingscience.royalsociety.org/items/pt_37_3/paper-on-the-mechanical-equivalent-of-heat-by-james-p-prescott-joule")
    ]),

    card("Falsche Modelle mit großer Erklärungskraft", "Neptunismus", [
      "Abraham Gottlob Werner lehrte, die Gesteine der Erdkruste seien nacheinander aus einem urzeitlichen Weltmeer ausgefällt worden. Granit bildete die älteste Schicht; Übergangs-, Flöz- und aufgeschwemmte Gebirge folgten. Das gab Bergleuten eine übersichtliche Reihenfolge für Gesteine, Lagerstätten und Landschaften.",
      "Basalt war der Prüfstein. Werner deutete ihn als chemischen Niederschlag, während Feldbeobachtungen an Vulkanen erstarrte Lava zeigten. James Huttons Tiefenzeit und die plutonische Geologie erklärten Hebung, Erosion und erneute Ablagerung besser. Der Neptunismus scheiterte, doch seine genaue Schichtenkunde half, Geologie als historische Wissenschaft zu ordnen."
    ], [C("Abraham Gottlob Werner portrait", "Abraham Gottlob Werner"), C("Neptunist geological diagram basalt", "Neptunistisches Schichtenmodell")], [
      src("Encyclopaedia Britannica: Neptunism", "https://www.britannica.com/science/Neptunism")
    ]),

    card("Falsche Modelle mit großer Erklärungskraft", "Kontraktionstheorie der Erde", [
      "Die Erde sollte als anfangs glühender Körper langsam auskühlen. Ihr Inneres schrumpfte, die bereits feste Kruste blieb zu groß und warf Falten wie die Schale eines trocknenden Apfels. Damit ließen sich Gebirgsketten, Becken und eine gerichtete Erdgeschichte in einem einzigen mechanischen Vorgang verbinden.",
      "Radioaktivität lieferte eine bis dahin unbekannte Wärmequelle; Erdbebenmessungen zeigten einen gegliederten Erdkörper. Vor allem Ozeanbodenkartierung, Paläomagnetismus und Plattentektonik erklärten seit den 1960er Jahren, warum junge Kruste entsteht, alte Kruste abtaucht und Gebirge an Plattengrenzen wachsen. Die Runzelhaut verschwand, die Frage nach einer gemeinsamen Ursache aller Gebirge blieb leitend."
    ], [C("Earth contraction theory wrinkled apple diagram", "Die Erde als schrumpfender Körper"), C("Eduard Suess portrait geologist", "Eduard Suess")], [
      src("Smithsonian Ocean: How plate tectonics works", "https://ocean.si.edu/through-time/ancient-seas/plate-tectonics"),
      src("Encyclopaedia Britannica: geosyncline", "https://www.britannica.com/science/geosyncline")
    ]),

    card("Falsche Modelle mit großer Erklärungskraft", "Descartes’ Wirbeltheorie", [
      "René Descartes füllte den Weltraum mit feiner Materie. Um jeden Stern rotierte ein Wirbel; Planeten wurden darin mitgeführt, Monde in kleineren Unterwirbeln. Das Modell verbannte Fernkräfte und erklärte Himmelsbewegung ausschließlich durch Stoß, Druck und Strömung.",
      "Ein materieller Wirbel müsste Planeten bremsen und Kometen an der freien Durchquerung des Sonnensystems hindern. Newton zeigte zudem, dass die beobachteten Umlaufzeiten zu einer Zentralkraft mit dem Abstandsgesetz 1/r² passen. Descartes’ Kosmos verlor den Wettbewerb, formulierte aber ein starkes Programm: dieselben mechanischen Regeln für Himmel und Erde, ohne besondere himmlische Substanzen."
    ], [C("Descartes vortex theory solar system diagram", "Descartes’ Himmelswirbel"), C("Principia comet orbit diagram Newton", "Newtons Kometenbahnen")], [
      src("Stanford Encyclopedia of Philosophy: Descartes’ Physics", "https://plato.stanford.edu/entries/descartes-physics/"),
      src("University of Cambridge: Newton’s Principia", "https://cudl.lib.cam.ac.uk/collections/newton/1")
    ]),

    card("Falsche Modelle mit großer Erklärungskraft", "Lemuria", [
      "Der Zoologe Philip Lutley Sclater bemerkte 1864, dass Lemuren vor allem auf Madagaskar und in Indien vorkommen, in Afrika und dem Nahen Osten jedoch kaum. Er nannte eine versunkene Landmasse im Indischen Ozean „Lemuria“. Landbrücken waren damals eine vernünftige Erklärung für getrennte Tiergruppen, weil bewegliche Kontinente noch kein anerkanntes Modell bildeten.",
      "Kontinentaldrift und Plattentektonik ersetzten die Landbrücke: Indien, Madagaskar und Afrika waren Teile Gondwanas und trennten sich über Millionen Jahre. Der Name wanderte anschließend aus der Biogeografie in theosophische und esoterische Erzählungen über verlorene Hochkulturen. An Lemuria lässt sich verfolgen, wie eine wissenschaftliche Hilfshypothese nach ihrer Widerlegung in ein anderes Wissensmilieu wechselt."
    ], [C("Philip Sclater Lemuria map", "Sclaters biogeografische Verteilung"), C("Gondwana breakup India Madagascar map", "Die Trennung von Indien und Madagaskar")], [
      src("Darwin Online: bibliografischer Nachweis von Sclaters Aufsatz von 1864", "https://darwin-online.org.uk/converted/manuscripts/Darwin_C_R_CUL-DAR205.3.10.html"),
      src("Geological Society: Alfred Wegener and continental drift", "https://www.geolsoc.org.uk/Plate-Tectonics/Chap1-Pioneers-of-Plate-Tectonics/Alfred-Wegener.html")
    ]),

    // Entzifferte Schriften
    card("Entzifferte Schriften", "Altpersische Keilschrift", [
      "Georg Friedrich Grotefend verglich um 1802 wiederkehrende Zeichengruppen in Königsinschriften aus Persepolis. Er erwartete die Formel „X, großer König, König der Könige, Sohn des Y“ und setzte aus den bekannten Herrscherfolgen die Namen Darius und Xerxes ein. So erhielt er erste Lautwerte, bevor die Sprache vollständig bekannt war.",
      "Henry Rawlinson kopierte später die dreisprachige Behistun-Inschrift. Der altpersische Text bestätigte die Namenslesungen und erschloss die babylonische und elamische Fassung. Ein wiederkehrendes Wort ist 𐎧𐏁𐎠𐎹𐎰𐎡𐎹, xšāyaθiya: „König“. Namen, Genealogie und parallele Texte bildeten zusammen den Schlüssel."
    ], [C("Behistun inscription Old Persian column", "Die altpersische Spalte der Behistun-Inschrift"), C("Grotefend Old Persian decipherment table", "Grotefends Zeichenvergleich")], [
      src("Encyclopaedia Iranica: Old Persian", "https://iranicaonline.org/articles/old-persian"),
      src("British Museum: the Behistun inscription", "https://www.britishmuseum.org/blog/deciphering-cuneiform")
    ]),

    card("Entzifferte Schriften", "Linear B", [
      "Alice Kober ordnete Tausende Zeichengruppen nach wechselnden Endungen und erkannte ein System aus Wortstämmen und Flexion. Michael Ventris verband ihre Tabellen 1952 mit Ortsnamen auf Tafeln aus Knossos: ko-no-so entsprach Knossos, a-mi-ni-so dem Hafen Amnisos. Weitere Wörter und Endungen ergaben eine frühe Form des Griechischen.",
      "Linear B ist eine Silbenschrift: Ein Zeichen gibt meist Konsonant plus Vokal wieder. Deshalb erscheint Knōsos als ko-no-so. Die Tafeln enthalten Palastverwaltung, Personen, Vieh, Land und Abgaben, keine mykenischen Epen. Die Entzifferung gelang aus Mustern, Geografie und grammatischer Kontrolle; Kobers Vorarbeit war dafür entscheidend."
    ], [C("Linear B tablet Knossos", "Linear-B-Tafel aus Knossos"), C("Alice Kober Linear B grids", "Alice Kobers Zeichentabellen")], [
      src("University of Cambridge: The Decipherment of Linear B", "https://www.classics.cam.ac.uk/ORDER/seminars/projects/mycep/decipherment"),
      src("British Museum: Linear B tablet", "https://www.britishmuseum.org/collection/term/x11867")
    ]),

    card("Entzifferte Schriften", "Maya-Schrift", [
      "Juri Knorosow nahm die Zeichenliste des Bischofs Diego de Landa ernst, deutete sie jedoch als Silben statt als Alphabet. Ein Zeichen konnte einen Lautwert tragen und zugleich ein ganzes Wort bezeichnen. Tatiana Proskouriakoff erkannte in Datumsfolgen Geburt, Thronbesteigung und Tod historischer Herrscher. Damit wurden die Inschriften zu Dynastiegeschichte.",
      "Der Name K’inich Janaab’ Pakal verbindet mehrere Wort- und Silbenzeichen; ergänzende Silben bestätigen den letzten Laut eines Wortzeichens. Solche „phonetischen Komplemente“ prüfen eine Lesung innerhalb derselben Inschrift. Heute ist ein großer Teil des Systems lesbar, während beschädigte Zeichen und seltene Wörter offenbleiben."
    ], [C("Maya glyph K'inich Janaab Pakal name", "Namensglyphe K’inich Janaab’ Pakals"), C("Palenque Temple inscriptions glyphs", "Inschrift aus Palenque")], [
      src("Metropolitan Museum of Art: Maya hieroglyphic writing", "https://www.metmuseum.org/essays/maya-hieroglyphic-writing"),
      src("Peabody Museum: Corpus of Maya Hieroglyphic Inscriptions", "https://www.peabody.harvard.edu/corpus-maya-hieroglyphic-inscriptions")
    ]),

    card("Entzifferte Schriften", "Ugaritisches Alphabet", [
      "In Ugarit kamen 1929 Tafeln mit Keilzeichen ans Licht, deren kurze Zahl von Zeichen gegen die üblichen Silbenwerte der Keilschrift sprach. Hans Bauer, Édouard Dhorme und Charles Virolleaud erkannten unabhängig ein Alphabet für eine nordwestsemitische Sprache. Wortabstände und verwandte hebräische und phönizische Wörter beschleunigten die Zuordnung.",
      "Das Standardalphabet besitzt dreißig Zeichen. Seine überlieferte Lernfolge beginnt 𐎀 𐎁 𐎂 𐎃: ʾ, b, g, ḫ. Die Tafeln bewahren Briefe, Verträge, Wörterlisten und Dichtungen wie den Baal-Zyklus. Das Schriftsystem ist alphabetisch, seine Buchstaben haben dennoch die äußere Form von Keilen, weil sie mit einem Griffel in Ton gedrückt wurden."
    ], [C("Ugaritic abecedary tablet", "Ugaritische Alphabettafel"), C("Baal cycle Ugaritic tablet", "Tafel des Baal-Zyklus")], [
      src("Louvre: Ugaritic alphabet tablet", "https://collections.louvre.fr/en/ark:/53355/cl010144283"),
      src("Unicode Standard: Ugaritic", "https://www.unicode.org/charts/PDF/U10380.pdf")
    ]),

    card("Entzifferte Schriften", "Meroitische Schrift", [
      "Francis Llewellyn Griffith bestimmte 1909 Lautwerte aus Herrschernamen, die zugleich in ägyptischen Hieroglyphen und meroitischer Schrift vorkamen. Dadurch lassen sich die Zeichen heute aussprechen und Eigennamen, Titel sowie einige häufige Wörter erkennen. Die Schrift besitzt eine hieroglyphische und eine kursive Form.",
      "Die Zeichenwerte sind lesbar; die Sprache bleibt in großen Teilen unverständlich. Meroitisch gehört keiner sicher erschlossenen Sprachfamilie an, und lange Texte bleiben inhaltlich lückenhaft. Grabformeln liefern die besten Anker, weil ihre festen Bestandteile oft wiederkehren. Die Entzifferung der Zeichen und die Entschlüsselung der Sprache sind zwei verschiedene Aufgaben."
    ], [C("Meroitic funerary stela script", "Meroitische Grabstele"), C("Meroitic hieroglyphic inscription", "Hieroglyphische Form der meroitischen Schrift")], [
      src("British Museum: Meroitic inscriptions", "https://www.britishmuseum.org/collection/term/x12719"),
      src("University College London: Meroitic script", "https://www.ucl.ac.uk/museums-static/digitalegypt//nubia/meroitic.html")
    ]),

    // Rhetorische und poetische Verfahren
    card("Rhetorische und poetische Verfahren", "Zeugma", [
      "Ein Wort regiert mehrere Satzteile, verändert dabei jedoch seine Bedeutung. Alexander Pope schreibt in The Rape of the Lock: „Or stain her honour, or her new brocade.“ Das Verb stain bezeichnet einmal gesellschaftliche Schande, einmal einen Fleck auf Stoff. Der Satz zwingt moralischen Rang und Garderobe in dieselbe Grammatik.",
      "Das Verfahren arbeitet durch Gleichbau und Bedeutungsbruch. In Heinrich Heines „Die Augen schwarz, die Seele noch schwärzer“ ergänzt der Leser dasselbe Verb in zwei Wertbereichen. Beim Zeugma bleibt die Konstruktion korrekt genug, um sofort verstanden zu werden; die ungleiche Verbindung erzeugt Schärfe, Komik oder Verdichtung."
    ], [C("Alexander Pope Rape of the Lock 1714 title page", "The Rape of the Lock, Ausgabe von 1714"), C("Alexander Pope portrait", "Alexander Pope")], [
      src("Project Gutenberg: The Rape of the Lock", "https://www.gutenberg.org/ebooks/9800")
    ]),

    card("Rhetorische und poetische Verfahren", "Apophasis", [
      "Bei der Apophasis wird etwas durch die Erklärung genannt, man werde es übergehen. „Ich will gar nicht von seinen Schulden sprechen“ bringt die Schulden in den Raum und tarnt den Angriff als Zurückhaltung. Das lateinische praeteritio bezeichnet denselben Grundgriff.",
      "Cicero verwendet ihn in Gerichtsreden, wenn er eine Reihe gegnerischer Verfehlungen angeblich beiseitelässt und sie dabei einzeln aufzählt. In Shakespeares Julius Caesar beteuert Antonius wiederholt, Brutus sei ehrenhaft und er wolle die Menge keineswegs aufwiegeln; jede Wiederholung beschädigt genau diese Behauptung. Die Wirkung entsteht aus der hörbaren Lücke zwischen angekündigter Absicht und vollzogener Rede."
    ], [C("Cicero oration manuscript illumination", "Cicero als Redner"), C("Mark Antony funeral oration illustration", "Antonius’ Leichenrede")], [
      src("Perseus: Rhetorica ad Herennium, Book IV", "https://www.perseus.tufts.edu/hopper/text?doc=Rhet.%20Her.%204"),
      src("Folger Shakespeare Library: Julius Caesar 3.2", "https://www.folger.edu/explore/shakespeares-works/julius-caesar/read/3/2/")
    ]),

    card("Rhetorische und poetische Verfahren", "Erlebte Rede", [
      "Erlebte Rede gibt die Gedanken einer Figur in der dritten Person und in der Erzählzeit wieder, ohne „dachte sie“. In Jane Austens Emma folgt auf Emmas Kränkung Miss Bates’: „How could she have been so brutal, so cruel to Miss Bates!“ Grammatisch spricht der Erzähler; Ausruf, Wortwahl und Selbstanklage gehören Emma.",
      "Flaubert und Fontane nutzen dasselbe Verfahren, um Erzählerstimme und Figurenbewusstsein ineinanderzuschieben. Es schafft Nähe, ohne die Perspektive ausdrücklich anzukündigen. Zugleich bleibt eine kleine Distanz: Der Text zeigt die Sprache, in der eine Figur ihre Welt ordnet, und erlaubt dem Leser, deren Irrtum früher zu erkennen als sie selbst."
    ], [C("Jane Austen Emma first edition title page", "Emma, Erstausgabe 1815"), C("Emma Woodhouse illustration Box Hill Miss Bates", "Emma und Miss Bates")], [
      src("Project Gutenberg: Emma", "https://www.gutenberg.org/ebooks/158"),
      src("University of Cologne: Narratology, free indirect discourse", "https://www.lhn.uni-hamburg.de/node/32.html")
    ]),

    card("Rhetorische und poetische Verfahren", "Hypallage", [
      "Eine Eigenschaft wird grammatisch einem anderen Wort zugeordnet als dem, zu dem sie sachlich gehört. Vergil schreibt: „ibant obscuri sola sub nocte per umbram“ – sie gingen dunkel unter der einsamen Nacht durch den Schatten. Dunkel sind Umgebung und Wanderer; die Einsamkeit gehört sachlich den Wanderern, grammatisch trägt sie die Nacht.",
      "Die Verschiebung verteilt eine Stimmung über den ganzen Satz. In „schlaflose Nacht“ liegt eine alltägliche Hypallage: Wach ist der Mensch. Dichterische Beispiele machen diese Übertragung sichtbar und lassen Körper, Zeit und Landschaft dieselbe Empfindung tragen. Die Figur ist genauer als ein bloß ungewöhnliches Adjektiv, weil eine plausible Eigenschaft ihren syntaktischen Besitzer wechselt."
    ], [C("Virgil Aeneid medieval manuscript book six", "Vergils Aeneis, sechstes Buch"), C("Aeneas Sibyl underworld illustration", "Aeneas und die Sibylle in der Unterwelt")], [
      src("Perseus: Vergil, Aeneis 6.268", "https://www.perseus.tufts.edu/hopper/text?doc=Verg.%20A.%206.268"),
      src("Oxford Reference: hypallage", "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803095954748")
    ]),

    card("Rhetorische und poetische Verfahren", "Chiasmus", [
      "Ein Chiasmus ordnet zwei Glieder über Kreuz: A–B / B–A. Genesis 9,6 stellt im Hebräischen „Wer vergießt – Blut – des Menschen“ gegen „durch den Menschen – sein Blut – wird vergossen“. Wörter und Rollen kehren in umgekehrter Reihenfolge zurück; die Form führt Tat und Folge spiegelbildlich zusammen.",
      "Der Chiasmus reicht vom kurzen Satz bis zu ganzen Szenenfolgen. In Kennedys „Ask not what your country can do for you – ask what you can do for your country“ tauschen country und you ihre grammatischen Plätze. Entscheidend ist die Umkehrung der Beziehungen; die Wortwiederholung macht sie hörbar. Molières „Il faut manger pour vivre, et non pas vivre pour manger“ kehrt Verben und Zwecke auf dieselbe Weise um."
    ], [C("Genesis 9 Hebrew manuscript", "Genesis 9 in einer hebräischen Handschrift"), C("John F Kennedy inaugural address manuscript", "Kennedys Antrittsrede")], [
      src("Sefaria: Genesis 9:6", "https://www.sefaria.org/Genesis.9.6"),
      src("JFK Library: Inaugural Address", "https://www.jfklibrary.org/learn/about-jfk/historic-speeches/inaugural-address")
    ]),

    // Etymologien und Begriffsgeschichten
    card("Etymologien und Begriffsgeschichten", "Algorithmus", [
      "Der Name des Mathematikers Muḥammad ibn Mūsā al-Chwārizmī wurde im 12. Jahrhundert als Algoritmi latinisiert. „Algorismus“ bezeichnete zunächst das Rechnen mit den indisch-arabischen Ziffern, besonders die schriftlichen Grundrechenarten. Der Personenname wurde zum Namen eines Verfahrens.",
      "Später weitete sich das Wort auf eindeutige Rechenvorschriften überhaupt aus. Im 20. Jahrhundert verbanden Turingmaschinen, Rekursionstheorie und Programmiersprachen den Algorithmus mit formaler Ausführbarkeit. Heute ordnen Algorithmen auch Suchergebnisse und soziale Feeds; damit bezeichnet das Wort neben einer Schrittfolge oft das technische System, das Entscheidungen automatisiert."
    ], [C("Al Khwarizmi Latin Algoritmi manuscript", "Lateinische Überlieferung al-Chwārizmīs"), C("medieval algorism arithmetic manuscript", "Mittelalterlicher Algorismus")], [
      src("Oxford English Dictionary: algorithm, etymology", "https://www.oed.com/dictionary/algorithm_n"),
      src("MacTutor: Al-Khwarizmi", "https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/")
    ]),

    card("Etymologien und Begriffsgeschichten", "Ketchup", [
      "Englische Belege des späten 17. Jahrhunderts nennen catchup oder ketchup eine asiatische Würzsauce. Als Ausgangspunkte werden unter anderem Hokkien kê-tsiap, eine fermentierte Fischlake, und malaiisch kĕchap, eine Sauce, diskutiert. Handelswege verbanden südchinesische Häfen, Südostasien und britische Schiffe; eine einzige geradlinige Herkunft bleibt deshalb unsicher.",
      "Britische Rezepte verwendeten Pilze, Walnüsse, Austern oder Sardellen. Tomaten wurden in den USA des 19. Jahrhunderts zum Hauptbestandteil; Zucker und Essig machten daraus die haltbare rote Sauce. Die Wortgeschichte zeigt keinen unveränderten Gegenstand, sondern eine wandernde Kategorie: Das Lehnwort blieb, während Rezept, Farbe und erwarteter Geschmack mehrfach wechselten."
    ], [C("18th century mushroom ketchup recipe", "Rezept für Pilz-Ketchup"), C("early tomato ketchup bottle advertisement", "Früher Tomaten-Ketchup")], [
      src("Oxford English Dictionary: ketchup, etymology", "https://www.oed.com/dictionary/ketchup_n"),
      src("Smithsonian Magazine: How Was Ketchup Invented?", "https://www.smithsonianmag.com/arts-culture/how-was-ketchup-invented-180976399/")
    ]),

    card("Etymologien und Begriffsgeschichten", "Quarantäne", [
      "Venezianisch quarantena und italienisch quaranta giorni bedeuten „vierzig Tage“. Hafenstädte der Adria hielten ankommende Schiffe, Menschen und Waren während der Pest außerhalb der Stadt. Ragusa ordnete 1377 zunächst dreißig Tage an; in Venedig und anderen Orten setzte sich später die Frist von vierzig Tagen durch.",
      "Aus einer festen Hafensperre wurde ein allgemeiner Begriff für die zeitweilige Trennung möglicher Überträger. Die Medizin ersetzte die symbolisch und praktisch gewählte Zahl vierzig durch krankheitsspezifische Inkubationszeiten. Das Wort behielt seinen historischen Zahlenkern; heutige Fristen betragen je nach Krankheit sieben, zehn oder eine andere Zahl von Tagen."
    ], [C("Venice quarantine lazaretto map", "Venezianisches Lazarett"), C("Ragusa Dubrovnik quarantine 1377", "Ragusa, Ursprung früher Quarantäneregeln")], [
      src("Encyclopaedia Britannica: quarantine", "https://www.britannica.com/science/quarantine-preventive-medicine"),
      src("CDC Emerging Infectious Diseases: Etymologia – Quarantine", "https://wwwnc.cdc.gov/eid/article/19/2/et-1902_article")
    ]),

    card("Etymologien und Begriffsgeschichten", "Avatar", [
      "Sanskrit avatāra bedeutet „Herabkunft“. In hinduistischen Traditionen bezeichnet das Wort das irdische Erscheinen einer Gottheit, besonders die Gestalten Vishnus wie Rama oder Krishna. Europäische Religionsgeschichte übernahm avatar im 18. und 19. Jahrhundert zunächst für genau diesen theologischen Begriff.",
      "Später wurde daraus allgemein eine Verkörperung oder Erscheinungsform. Das Computerspiel Ultima IV nannte 1985 die vom Spieler geführte Figur „Avatar“; Onlinewelten und Foren verbreiteten die Bezeichnung für eine grafische Stellvertretung des Nutzers. Der Weg führt von göttlicher Herabkunft über menschliche Verkörperung zur steuerbaren digitalen Präsenz."
    ], [C("Vishnu avatars Dashavatara painting", "Die zehn Avatare Vishnus"), C("Ultima IV Avatar game screenshot", "Avatar als Spielfigur in Ultima IV")], [
      src("Monier-Williams Sanskrit Dictionary: avatāra", "https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/indexcaller.php"),
      src("Oxford English Dictionary: avatar", "https://www.oed.com/dictionary/avatar_n")
    ]),

    card("Etymologien und Begriffsgeschichten", "Roboter", [
      "Das tschechische robota bezeichnet Frondienst, Zwangsarbeit und schwere Mühe; verwandte Wörter finden sich in mehreren slawischen Sprachen. Karel Čapeks Theaterstück R.U.R. von 1920 nannte künstlich hergestellte Arbeiter roboti. Sein Bruder Josef schlug das Wort vor, nachdem Karel an labori gedacht hatte.",
      "Čapeks Roboter sind künstliche biologische Menschen, keine Metallmaschinen. Übersetzungen und Technikpresse übertrugen den Namen bald auf elektromechanische Automaten; später folgten Industrieroboter, Software-Robots und Bots. Bei jedem Schritt rückte der Stoff in den Hintergrund, während die zugeschriebene Arbeit erhalten blieb."
    ], [C("RUR 1920 robot stage production", "Eine frühe Aufführung von R.U.R."), C("Karel Capek RUR first edition", "R.U.R., frühe Ausgabe")], [
      src("Oxford English Dictionary: robot", "https://www.oed.com/dictionary/robot_n"),
      src("National Theatre Prague: Karel Čapek and R.U.R.", "https://www.narodni-divadlo.cz/en/show/rur-154967739")
    ]),

    // Urban Legends
    card("Urban Legends", "Die schwarze Wolga", [
      "In Polen erzählten sich Kinder und Erwachsene seit den 1960er Jahren von einer schwarzen Wolga-Limousine, die durch Städte fuhr und Menschen verschwinden ließ. Je nach Fassung saßen darin Geheimdienstleute, Priester, Vampire oder der Teufel; weiße Gardinen, fehlende Nummernschilder oder Hörner an den Spiegeln kennzeichneten den Wagen.",
      "Der GAZ-21 Wolga war ein teures Dienstauto und wurde mit Funktionären und Sicherheitsorganen verbunden. Das gab der Erzählung ein sichtbares Fahrzeug und ein glaubwürdiges Machtgefälle. Spätere Fassungen ersetzten den Wolga durch BMW oder Lieferwagen. Die wechselnden Täter zeigen, welche Institutionen in einer Zeit als unkontrollierbar erlebt wurden."
    ], [C("black GAZ-21 Volga Poland", "Schwarzer GAZ-21 Wolga"), C("Warsaw street 1970s Poland Volga", "Polnische Straße in den 1970er Jahren")], [
      src("Polskie Radio: Legenda czarnej wołgi", "https://www.polskieradio.pl/10/483/artykul/561976,czy-czarna-wolga-naprawde-jezdzily-wampiry")
    ]),

    card("Urban Legends", "Phantom-Sozialarbeiter", [
      "1990 meldeten Familien in mehreren englischen Städten Besucher, die sich als Sozialarbeiter ausgaben, Kinder untersuchen wollten und nach Missbrauch fragten. Zeitungen verbanden die Berichte zu einem landesweiten Muster. Polizei und Behörden starteten Operation Childcare; trotz Hunderter Meldungen ließ sich keine organisierte Gruppe ermitteln.",
      "Die Beschreibungen widersprachen einander, einige Begegnungen betrafen reguläres Personal, andere blieben ungeklärt. Die Legende traf einen empfindlichen Punkt: Amtliche Besuche finden im privaten Zuhause statt, und Eltern müssen Ausweis, Zuständigkeit und Dringlichkeit rasch beurteilen. Britische Behörden führten daraufhin klarere Ausweise und Prüfwege ein."
    ], [C("British social worker identity card 1990", "Behördlicher Dienstausweis"), C("British terraced house front door 1990", "Haustür als Schauplatz der Berichte")], [
      src("Wikipedia: Phantom social workers", "https://en.wikipedia.org/wiki/Phantom_social_workers"),
      src("The National Archives: child protection records", "https://www.nationalarchives.gov.uk/help-with-your-research/research-guides/children-care/")
    ]),

    card("Urban Legends", "Das verschwundene Hotelzimmer", [
      "Eine Tochter holt während einer Reise einen Arzt für ihre kranke Mutter. Als sie zurückkehrt, leugnet das Hotel, dass beide dort wohnten; Zimmer, Möbel und Personal wirken ausgetauscht. Nachforschungen ergeben in manchen Fassungen, die Mutter sei an Pest gestorben und das Hotel habe den Fall vertuscht, um Gäste oder eine Weltausstellung zu schützen.",
      "Eine frühe gedruckte Fassung erschien 1897 in der Philadelphia Inquirer und verlegte die Handlung zur Pariser Ausstellung. Spätere Texte nannten die Ausstellung von 1889 oder 1900 und bauten die Geschichte zu einem Tatsachenbericht um. Die feste Dramaturgie – Zeugin fortschicken, Raum verändern, gemeinsam leugnen – blieb stabil, während Datum und angebliche Belege wanderten."
    ], [C("Paris hotel room 1890 illustration", "Hotelzimmer um 1890"), C("Exposition Universelle Paris 1889 crowd", "Pariser Weltausstellung")], [
      src("Quote Investigator: The Vanishing Lady", "https://quoteinvestigator.com/2010/09/14/vanishing-lady/"),
      src("Internet Archive: The Philadelphia Inquirer, 1897", "https://archive.org/search?query=Philadelphia+Inquirer+1897+vanishing+hotel")
    ]),

    card("Urban Legends", "Bunny Man", [
      "Im Oktober 1970 berichteten zwei Zeitungen im Fairfax County, Virginia, über einen Mann in hellem Hasenkostüm. In einem Fall soll er ein geparktes Auto bedroht und ein Beil durch ein Fenster geworfen haben; im anderen hackte ein kostümierter Mann an einer Veranda und drohte dem Eigentümer. Ein Täter wurde nicht identifiziert.",
      "Aus den zwei lokalen Berichten entstand eine längere Legende über entflohene Häftlinge, gehäutete Kaninchen und Morde an einer Eisenbahnbrücke. Diese Vorgeschichte taucht in den zeitgenössischen Akten nicht auf. Die spätere „Bunny Man Bridge“ bündelte die Erzählung an einem fotografierbaren Ort, obwohl die gemeldeten Vorfälle anderswo lagen."
    ], [C("Bunny Man Bridge Fairfax Virginia", "Die als Bunny Man Bridge bekannte Unterführung"), C("Fairfax County Virginia map Clifton", "Fairfax County und Clifton")], [
      src("Fairfax County Public Library: The Bunny Man Unmasked", "https://research.fairfaxcounty.gov/local-history/bunnyman"),
      src("Library of Congress: Fairfax County newspapers", "https://www.loc.gov/newspapers/?fa=location%3Avirginia%7Clocation%3Afairfax+county")
    ]),

    card("Urban Legends", "Der Brunnen zur Hölle", [
      "Ein Rundbrief und christliche Radiosendungen erzählten ab 1989, sowjetische Bohrleute hätten in Sibirien eine Höhle von extremer Hitze geöffnet und mit einem Mikrofon Schreie Verdammter aufgenommen. Ort, Tiefe und beteiligte Forscher wechselten; eine Tonaufnahme wurde später als angeblicher Beleg verbreitet.",
      "Der reale Bezug war die Kola-Super­tiefbohrung auf der Halbinsel Kola. Sie erreichte 12.262 Meter und lieferte Gesteins- und Temperaturdaten, keine offene Höhle. Der norwegische Lehrer Åge Rendalen fügte einer US-Fernsehsendung absichtlich erfundene Details und eine falsch übersetzte Zeitung bei, um deren Quellenprüfung zu testen. Die Ausschmückungen wurden anschließend als Bestätigung weitergereicht."
    ], [C("Kola Superdeep Borehole tower", "Kola-Supertiefbohrung"), C("Kola borehole cap 12262 meters", "Verschlossener Bohrkopf")], [
      src("Smithsonian Institution: Kola Superdeep Borehole", "https://www.smithsonianmag.com/smart-news/russians-dug-worlds-deepest-hole-180954349/"),
      src("Snopes: The Well to Hell", "https://www.snopes.com/fact-check/the-well-to-hell/")
    ]),

    // Interessante Sprachen und Sprachmerkmale
    card("Interessante Sprachen und Sprachmerkmale", "Türkisch: Woher weißt du das?", [
      "Türkische Vergangenheitsformen markieren die Informationsquelle. Kedi sütü döktü heißt: „Die Katze hat die Milch verschüttet“; die Form -di stellt das Ereignis als direkt festgestellte Tatsache dar. Kedi sütü dökmüş gibt wieder, dass der Sprecher es erschließt oder berichtet bekommen hat: „Die Katze hat offenbar die Milch verschüttet.“",
      "Der Unterschied steckt im Verb. Ein zusätzlicher Satz wie „wie ich hörte“ erübrigt sich. -miş erscheint auch bei überraschender Erkenntnis: Anahtar buradaymış – „Der Schlüssel war ja hier!“ Mit der Zeitform legen Sprecher zugleich fest, auf welchem Zugang ihre Aussage beruht."
    ], [C("Turkish language map Anatolia", "Verbreitung des Türkischen"), C("Turkish grammar manuscript alphabet", "Türkischer Text")], [
      src("Cambridge University Press: Turkish evidentiality and source reliability", "https://www.cambridge.org/core/journals/journal-of-child-language/article/childrens-understanding-of-source-reliability-and-knowledge-generalizability-from-grammatical-cues-evidence-from-turkish/C6883B6E5A209046DB4C0B16D9182163"),
      src("Max Planck Institute: Evidentiality", "https://wals.info/chapter/78")
    ]),

    card("Interessante Sprachen und Sprachmerkmale", "Tzeltal: bergauf, bergab, quer zum Hang", [
      "Im Tzeltal von Tenejapa in Chiapas werden räumliche Beziehungen häufig mit einer festen Landschaftsachse beschrieben: ajk’ol „bergauf“, alan „bergab“ und jejch „quer zum Hang“. Dieselben Richtungen ordnen Gegenstände auf einem Tisch, Wege im Dorf und entfernte Orte.",
      "Ein Sprecher richtet die Beschreibung damit an der Neigung des Geländes aus, statt an links und rechts seines eigenen Körpers. Das System reicht von wenigen Zentimetern bis zur regionalen Geografie. Kinder lernen zugleich Sprache und ein fein abgestuftes Wissen darüber, wie Häuser, Felder und Wege im Bergland zueinander liegen."
    ], [C("Tenejapa Chiapas landscape", "Berglandschaft bei Tenejapa"), C("Tzeltal speakers Chiapas map", "Tzeltal in Chiapas")], [
      src("Max Planck Institute: Uphill and downhill in Tzeltal", "https://www.mpi.nl/publications/item66672/uphill-and-downhill-tzeltal"),
      src("WALS: Frames of Spatial Reference", "https://wals.info/chapter/48")
    ]),

    card("Interessante Sprachen und Sprachmerkmale", "Baskisch: mehrere Personen in einem Verb", [
      "Baskische Hilfsverben stimmen zugleich mit Subjekt, direktem Objekt und indirektem Objekt überein. Ikusi zaitut bedeutet „Ich habe dich gesehen“: zaitut trägt Formen für „dich“ und „ich“. Eman dizkidazu heißt „Du hast sie mir gegeben“; das Hilfsverb bezeichnet den Geber, den Empfänger und die mehreren gegebenen Dinge.",
      "Dieses polypersonale System macht Beteiligte im Verb sichtbar, die im Deutschen durch Pronomen und Wortstellung ausgedrückt werden. Die selbstständigen Pronomen ni „ich“ oder zu „du“ erscheinen vor allem zur Hervorhebung. Baskisch ist zudem ergativ: Bei bestimmten Formen wird das Subjekt eines transitiven Verbs anders markiert als das eines intransitiven."
    ], [C("Basque language dialect map", "Baskische Sprachgebiete"), C("Basque manuscript Lazarraga", "Baskischer Text der Lazarraga-Handschrift")], [
      src("University of the Basque Country: A Brief Grammar of Euskara", "https://www.ehu.eus/en/web/eins/basque-grammar"),
      src("WALS: Alignment of Case Marking", "https://wals.info/chapter/98")
    ]),

    card("Interessante Sprachen und Sprachmerkmale", "Inuktitut: ein Satz in einem Wort", [
      "Inuktitut bildet lange Wörter aus einer Basis, mehreren bedeutungstragenden Zusätzen und einer Personalendung. tusaatsiarunnanngittualuujunga bedeutet ungefähr „Ich höre wirklich sehr schlecht“. Darin stehen tusaa- „hören“, -tsiaq- „gut“, -junnar- „fähig sein“, -nngit- „nicht“, -tualuu- „sehr“ und -junga „ich“.",
      "Die Reihenfolge der Bausteine ist geregelt; jeder Zusatz verändert den ganzen bisherigen Stamm. Darum entspricht ein einziges Wort oft einem deutschen Satz. Polysynthese folgt festen Grenzen: Sprecher wählen produktive, lexikalische und grammatische Morpheme nach Laut- und Kombinationsregeln."
    ], [C("Inuktitut syllabics Nunavut sign", "Inuktitut in Silbenschrift"), C("Inuit languages map Canada", "Inuit-Sprachen in Nordamerika")], [
      src("Inuktut Tusaalanga: Grammar", "https://tusaalanga.ca/grammar"),
      src("Government of Nunavut: Inuktut language resources", "https://www.gov.nu.ca/en/culture-and-heritage/inuktut")
    ]),

    card("Interessante Sprachen und Sprachmerkmale", "Dyirbal: vier Nominalklassen", [
      "Dyirbal aus Nordqueensland setzt vor Substantive Klassenmarker. bayi umfasst viele männliche Menschen und Tiere; balan viele weibliche Menschen, Wasser, Feuer und bestimmte Tiere; balam essbare, fleischlose Nahrung; bala den großen Rest. Adjektive und andere Begleiter wiederholen die Klasse des Nomens.",
      "Die Klassen sind historisch und semantisch verzweigt, keine Liste willkürlicher Kuriositäten. Mythen, typische Eigenschaften und ältere Wortformen beeinflussen die Zuordnung. Der bekannte Zusammenhang von Frauen, Feuer und gefährlichen Dingen ist nur ein Ausschnitt aus balan; die vollständige Grammatik zeigt Überlappungen, Ausnahmen und Untergruppen."
    ], [C("Dyirbal language map Queensland", "Dyirbal im Nordosten Australiens"), C("Jirrbal rainforest Queensland speakers", "Regenwaldgebiet der Dyirbal-Sprachen")], [
      src("Australian Institute of Aboriginal and Torres Strait Islander Studies: Dyirbal", "https://collection.aiatsis.gov.au/austlang/language/y123"),
      src("WALS: Number of Genders", "https://wals.info/chapter/30")
    ]),

    // Seltene und geniale Lifehacks
    card("Seltene und geniale Lifehacks", "Infrarot-Fernbedienung mit der Handykamera prüfen", [
      "Richte die Leuchtdiode der Fernbedienung auf die Handykamera und halte eine Taste gedrückt. Auf dem Display erscheint bei vielen Kameras ein weißes oder violettes Flackern, wenn die Fernbedienung Infrarotlicht sendet. So trennt man einen Defekt des Senders von einem Problem am empfangenden Gerät.",
      "Einige Hauptkameras filtern Infrarot sehr stark; die Frontkamera oder ein zweites Telefon zeigt es oft deutlicher. Prüfe das Verfahren zuerst mit einer funktionierenden Fernbedienung und tausche bei ausbleibendem Licht die Batterien. Der Test bestätigt das Sendesignal; die korrekte Codierung jeder Taste erfordert ein passendes Empfangsgerät."
    ], [C("infrared remote control phone camera test", "Infrarotdiode im Kamerabild")], [
      src("Sony Support: Test if a remote control sends an infrared signal", "https://www.sony.com/electronics/support/articles/00025283")
    ]),

    card("Seltene und geniale Lifehacks", "Kleinteile mit Strumpf und Staubsauger finden", [
      "Ziehe ein Stück feinen Strumpfstoff straff über das Ende des Staubsaugerrohrs und sichere es mit einem Gummiband. Fahre mit geringer Saugstufe über Teppich, Fugen oder unter Möbeln. Der Luftstrom zieht Schraube, Ohrstecker oder Kontaktlinse heran; das Gewebe hält den Gegenstand vor dem Rohr fest.",
      "Der Stoff muss außen glatt und fest sitzen und außerhalb des Rohrs bleiben. Das Verfahren eignet sich für trockene, stumpfe Kleinteile; scharfe Splitter, Flüssigkeiten und heiße Teile brauchen eine andere Aufnahme. Bei sehr kleinen Elektronikteilen erspart ein sauberer Nylonstrumpf die Suche in Staubbeutel oder Behälter."
    ], [C("vacuum cleaner stocking find small objects", "Strumpfstoff über einem Staubsaugerrohr")], [
      src("Consumer Reports: Vacuum safety and small objects", "https://www.consumerreports.org/appliances/vacuum-cleaners/buying-guide/")
    ]),

    card("Seltene und geniale Lifehacks", "Prägungen mit Streiflicht lesbar machen", [
      "Lege das Papier flach und beleuchte es mit einer kleinen Lampe fast parallel zur Oberfläche. Fotografiere aus senkrechter Richtung und wiederhole die Aufnahme mit Licht von links, rechts, oben und unten. Vertiefungen und erhabene Linien werfen bei jeder Richtung andere schmale Schatten.",
      "Das Verfahren zeigt durchgedrückte Schrift, Prägestempel und flache Werkzeugspuren, ohne Graphit oder Flüssigkeit auf das Original zu bringen. Mehrere Aufnahmen helfen, echte Linien von Papierfasern zu trennen. Archive verwenden gerichtetes Streiflicht als schonende fotografische Untersuchungsmethode; bei wertvollen oder brüchigen Stücken bleibt das Blatt unbeschwert."
    ], [C("raking light paper conservation embossed writing", "Streiflicht auf einer Papieroberfläche")], [
      src("Library of Congress: Raking Illumination", "https://www.loc.gov/preservation/resources/ImageDoc/Docs/6_Raking.pdf"),
      src("National Archives: Caring for paper records", "https://www.archives.gov/preservation/holdings-maintenance/paper")
    ]),

    card("Seltene und geniale Lifehacks", "Verdeckten Wasserverlust am Zähler erkennen", [
      "Schalte Waschmaschine, Geschirrspüler, Bewässerung und alle Wasserhähne aus. Lies den Wasserzähler ab oder fotografiere ihn. Bleibt während der nächsten dreißig bis sechzig Minuten alles geschlossen und die Anzeige bewegt sich trotzdem, fließt Wasser durch eine undichte Stelle, häufig in einer Toilettenspülung.",
      "Schließe anschließend einzelne Absperrventile, um den betroffenen Leitungszweig einzugrenzen. Ein paar Tropfen Lebensmittelfarbe im Spülkasten zeigen nach etwa zehn Minuten, ob Wasser ohne Betätigung in die Schüssel gelangt. Den Haupthahn und die Lage verdeckter Leitungen klärt man vor weiteren Eingriffen."
    ], [C("water meter leak indicator dial", "Leckanzeige eines Wasserzählers"), C("toilet tank dye leak test", "Farbtest am Spülkasten")], [
      src("US Environmental Protection Agency: Fix a Leak Week", "https://www.epa.gov/watersense/fix-leak-week")
    ]),

    card("Seltene und geniale Lifehacks", "Münze als Auftauanzeiger im Gefrierfach", [
      "Friere einen Becher Wasser vollständig ein und lege eine Münze auf die Eisfläche. Nach einem Stromausfall zeigt ihre Lage, ob das Eis angetaut ist: Bleibt sie oben, blieb die Oberfläche fest; sinkt sie in den Becher, ist Wasser geschmolzen und später wieder gefroren.",
      "Die Münze zeichnet den Auftauvorgang auf, liefert jedoch keine Dauer und keine Temperatur. Für Lebensmittel gilt die genauere Prüfung mit einem Gerätethermometer: Gefrorene Waren mit Eiskristallen oder höchstens 4 °C dürfen laut USDA wieder eingefroren beziehungsweise verwendet werden. Bei unklarer Vorgeschichte entscheidet diese Sicherheitsregel; die Münze dient allein als Hinweis auf zwischenzeitliches Schmelzen."
    ], [C("coin on frozen cup freezer power outage", "Münze auf gefrorenem Wasser"), C("freezer appliance thermometer", "Thermometer im Gefrierfach")], [
      src("USDA: Keeping Food Safe During an Emergency", "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/keeping-food-safe-during")
    ]),

    // Gute Gags
    card("Gute Gags", "Buster Keaton: das drehende Haus in One Week", [
      "Ein abgewiesener Verehrer vertauscht die Nummern der Bauteile eines Fertighauses. Keaton und Sybil Seely errichten daraus ein schiefes, dennoch bewohnbares Gebilde. Beim Sturm beginnt das ganze Haus um seinen Mittelpunkt zu rotieren; Gäste werden durch Türen hinaus- und wieder hineingeschleudert, während Keaton gegen die Architektur anzulaufen versucht.",
      "Das Haus war in voller Größe auf einer Drehscheibe gebaut. Der Gag entwickelt eine einzige falsche Konstruktion immer weiter: erst schiefe Wände, dann unbrauchbare Türen, schließlich ein Gebäude als Fahrgeschäft. Die Kamera bleibt weit genug entfernt, um Körper, Ursache und Folgen gleichzeitig sichtbar zu halten."
    ], [C("Buster Keaton One Week spinning house", "Das drehende Haus in One Week")], [
      src("Wikimedia Commons: One Week, vollständiger gemeinfreier Film", "https://commons.wikimedia.org/wiki/File:One_Week_(1920)_by_Eddie_Cline_and_Buster_Keaton.webm"),
      src("International Buster Keaton Society: One Week", "https://busterkeaton.org/the-films/one-week/")
    ]),

    card("Gute Gags", "Victor Borge: Phonetic Punctuation", [
      "Victor Borge behauptet, beim Sprechen fehlten die Satzzeichen. Er erfindet für Punkt, Komma, Doppelpunkt, Gedankenstrich und Ausrufezeichen je ein Geräusch und liest anschließend eine kleine Geschichte, in der die Laute den Text zunehmend überwuchern.",
      "Der Aufbau ist streng: Ein sachlich vorgetragenes Problem, eine einzeln gelernte Zeichensprache, dann ihre praktische Katastrophe. Ab 2:34 beginnt die zusammenhängende Leseprobe; dort hört man, wie die zunächst verständlichen Regeln durch ihre genaue Anwendung komisch werden."
    ], [Y("TIf3IfHCoiE", "Victor Borge · Phonetic Punctuation · Leseprobe ab 2:34", 154)], [
      src("YouTube: Victor Borge – Phonetic Punctuation", "https://www.youtube.com/watch?v=TIf3IfHCoiE")
    ]),

    card("Gute Gags", "Les Luthiers: La tanda", [
      "La tanda ist eine Folge erfundener Fernsehansagen und Werbespots. Marcos Mundstock kündigt seriös immer absurdere Sendungen und Produkte an; das Ensemble liefert dazu in Sekunden die jeweils passende Erkennungsmusik, vom Nachrichtenjingle bis zum dramatischen Serienvorspann.",
      "Die Kürze ist das Verfahren: Jeder Block stellt ein vertrautes Fernsehformat her und zerstört es mit einem sprachlichen Detail, bevor der nächste beginnt. Ab 1:03 folgt auf die erste Ankündigung der Übergang in die Werbefolge. Das offizielle Video erhält den Rhythmus zwischen Sprecher, Musik und sofortigem Abbruch."
    ], [Y("-YtWYotwDHU", "Les Luthiers · La tanda · ab 1:03", 63)], [
      src("Les Luthiers: Werkverzeichnis La tanda", "https://lesluthiers.org/verobra.php?ID=73"),
      src("YouTube: offizieller Künstlerkanal", "https://www.youtube.com/watch?v=-YtWYotwDHU")
    ]),

    card("Gute Gags", "Nasreddin und die gekochten Bohnen", [
      "Ein Mann soll eine ungeheure Schuld bezahlen, weil er einst ein gekochtes Ei aß: Aus dem Ei hätte ein Huhn, aus dessen Eiern eine ganze Herde werden können. Nasreddin erscheint verspätet vor Gericht. Er habe Bohnen gekocht, erklärt er, und müsse sie noch aussäen. Als der Richter lacht, fragt Nasreddin, wie aus gekochten Bohnen weniger wachsen solle als aus einem gekochten Ei.",
      "Die Anekdote widerlegt keine Behauptung durch Vortrag, sondern baut ihre Logik als zweite, sichtbare Handlung nach. Der verspätete Auftritt gehört zum Beweis. Fassungen kursieren in türkischen, persischen, arabischen und zentralasiatischen Sammlungen; Rollen und Feldfrucht wechseln, der Vergleich mit dem gekochten Samen bleibt."
    ], [C("Nasreddin Hodja court illustration boiled seed", "Nasreddin vor dem Richter"), C("Nasreddin Hodja Ottoman miniature", "Nasreddin Hodscha")], [
      src("Project Gutenberg: The Turkish Jester", "https://www.gutenberg.org/ebooks/16244"),
      src("UNESCO: Tales of Nasreddin Hodja", "https://ich.unesco.org/en/RL/telling-tradition-of-nasreddin-hodja-molla-ependi-apendi-afendi-01705")
    ]),

    card("Gute Gags", "Zhuangzi: drei am Morgen", [
      "Ein Affenwärter kündigt an: morgens drei Kastanien, abends vier. Die Affen werden wütend. Er ändert den Plan: morgens vier, abends drei. Alle sind zufrieden. Die Tagesmenge bleibt sieben; verändert wird allein die Verteilung und damit der Augenblick, auf den die Affen reagieren.",
      "Im zweiten Kapitel des Zhuangzi folgt die Geschichte auf einen Streit über Behauptung und Widerlegung. Der Wärter gewinnt keinen philosophischen Disput. Er bemerkt, welche Form angenommen wird, und behält zugleich seine Gesamtmenge. Der kurze Gag dient so als Modell für Framing, Verhandlung und den Unterschied zwischen rechnerischer Gleichheit und erlebtem Wert."
    ], [C("Zhuangzi monkey keeper three in morning illustration", "Der Affenwärter und die Kastanien"), C("Zhuangzi butterfly painting", "Zhuangzi")], [
      src("Chinese Text Project: Zhuangzi, Discussion on Making All Things Equal", "https://ctext.org/zhuangzi/adjustment-of-controversies"),
      src("Project Gutenberg: Chuang Tzu, gemeinfreie Übersetzung", "https://www.gutenberg.org/ebooks/59709")
    ]),

    // Interessante Listen
    card("Interessante Listen", "Die Geräuschfolge der Voyager Golden Record", [
      "Vor der Musik erzählt eine montierte Folge irdischer Geräusche eine Welt ohne erklärenden Sprecher. Sie beginnt mit Vulkanen, Brandung, Donner und Regen, führt über Tiere und menschlichen Körper zu Werkzeugen, Verkehr und Raumfahrt. Herzschlag und Kuss stehen zwischen Schritten, Morsezeichen und Maschinen.",
      "Die Reihenfolge ist selbst eine kleine Erzählung: geologische Erde, Leben, Mensch, Technik, Start. Beide Voyager-Sonden tragen dieselbe vergoldete Kupferplatte; Abspielanleitung und Herkunft der Sonde sind in die Hülle graviert."
    ], [C("Voyager Golden Record cover NASA", "Voyager Golden Record und Abspielanleitung"), C("Voyager Golden Record sounds of earth diagram", "Sounds of Earth")], [
      src("NASA: Golden Record Sounds and Music", "https://science.nasa.gov/mission/voyager/golden-record-contents/sounds/"),
      src("NASA: Golden Record Cover", "https://science.nasa.gov/mission/voyager/golden-record-cover/")
    ], {works:[
      "Vulkane, Erdbeben, Schlammquellen, Wind, Regen und Brandung",
      "Grillen, Frösche, Vögel, Hyäne, Elefant, Schimpanse und Hund",
      "Schritte, Herzschlag, Lachen, Feuer, erste Werkzeuge und ein zahmes Tier",
      "Schmiede, Säge, Traktor, Morsezeichen, Pferdewagen und Zug",
      "Schiff, Bus, Auto, Flugzeug, Raketenstart, Kuss, Mutter und Kind, Pulsar"
    ]}),

    card("Interessante Listen", "Ötzis Ausrüstung", [
      "Die Gegenstände bei Ötzis Körper bilden keine symbolische Grabausstattung, sondern eine gebrauchte Reiseausrüstung um 3300 v. Chr. Mehrere Stücke waren unfertig oder repariert. Holzarten, Klebstoffe und Fasern wurden nach ihrer jeweiligen Aufgabe gewählt.",
      "Besonders genau ist die Arbeitsteilung der Werkzeuge: Der Retuscheur schärfte Feuerstein, Birkenrinde trug Glut, Zunderschwamm entzündete sie, die Kupferaxt fällte Holz. Bogen und die meisten Pfeilschäfte waren noch nicht einsatzbereit; zwei fertige Pfeile lagen im Köcher."
    ], [C("Otzi equipment copper axe dagger quiver", "Ötzis Ausrüstung"), C("Otzi birch bark containers", "Behälter aus Birkenrinde")], [
      src("Südtiroler Archäologiemuseum: Ötzis Ausrüstung", "https://www.iceman.it/en/oetzi/equipment")
    ], {works:[
      "Kupferaxt mit Eibenschaft und Birkenpech",
      "Feuersteindolch mit Scheide aus Lindenbast",
      "Unfertiger Eibenbogen, Köcher, zwölf Schäfte und zwei fertige Pfeile",
      "Retuscheur, Bohrer, Schaber und Abschläge aus Feuerstein",
      "Zunderschwamm, Birkenporling und zwei Behälter aus Birkenrinde",
      "Rahmen eines Rucksacks, Netz, Schnüre und Vogeltrage"
    ]}),

    card("Interessante Listen", "Was Apollo 11 auf dem Mond zurückließ", [
      "Die Besatzung nahm Proben und Filmmagazine mit und ließ Masse zurück, die für den Rückstart entbehrlich war. Neben der Abstiegsstufe blieben wissenschaftliche Geräte, Kamerateile, Werkzeuge und Lebenserhaltungspakete am Landeplatz. Der Laserreflektor wird bis heute von der Erde aus angepeilt.",
      "Eine kleine Siliziumscheibe enthält Botschaften von 73 Staatsoberhäuptern. In einem Erinnerungsbeutel lagen das Abzeichen von Apollo 1, Medaillen für Juri Gagarin und Wladimir Komarow sowie ein goldener Olivenzweig. Technik, Abfall und politische Zeichen liegen deshalb am selben Ort."
    ], [C("Apollo 11 Tranquility Base equipment left Moon", "Geräte bei Tranquility Base"), C("Apollo 11 silicon messages disc", "Siliziumscheibe mit Grußbotschaften"), C("Apollo 11 laser ranging retroreflector", "Laserreflektor")], [
      src("NASA: Catalogue of Manmade Material on the Moon", "https://www.nasa.gov/wp-content/uploads/2024/02/final-catalogue-of-manmade-material-on-the-moon.pdf"),
      src("NASA: Apollo 11 Lunar Surface Journal", "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11.html")
    ], {works:[
      "Abstiegsstufe der Mondfähre Eagle mit Gedenkplakette",
      "Passives Seismometer und Laserreflektor",
      "Fernsehkamera, Werkzeuge, Überschuhe, Rucksäcke und Behälter",
      "US-Flagge, Siliziumscheibe und goldener Olivenzweig",
      "Erinnerungsstücke für Apollo 1, Gagarin und Komarow"
    ]}),

    card("Interessante Listen", "Nellie Blys Handtasche für die Weltreise", [
      "Nellie Bly reiste 1889 ohne Koffer in 72 Tagen um die Erde. Ihr Gepäck passte in eine Tasche von etwa 40 mal 18 Zentimetern. Das schwere Reisekleid, der Mantel und eine karierte Mütze wurden ständig getragen; für ein zweites Kleid opferte sie den Platz und packte nur ein leichtes Seidenoberteil ein.",
      "Die Liste ist zugleich eine Arbeitsausrüstung: Tinte, Federhalter, Bleistifte und Papier gehörten neben Wäsche und Waschzeug hinein. Bly wollte ohne Hilfe tragen, um an Bahnhöfen und Häfen sofort weitergehen zu können. Ihre kleine Flasche und der Trinkbecher waren auf langen Bahnfahrten praktischer als zusätzliches Kleidungsvolumen."
    ], [C("Nellie Bly world trip travel dress bag", "Nellie Bly mit Reisekleid und Tasche"), C("Nellie Bly 72 days route map", "Route der Weltreise")], [
      src("University of Pennsylvania: Around the World in Seventy-Two Days", "https://digital.library.upenn.edu/women/bly/world/world.html"),
      src("Library of Congress: Nellie Bly", "https://www.loc.gov/pictures/item/2004671901/")
    ], {works:[
      "Leichtes Seidenoberteil und Blazer",
      "Unterwäsche, Taschentücher, zwei Mützen, drei Schleier und Hausschuhe",
      "Kamm, Haarnadeln, Nadel, Faden, Waschzeug und ein Glas Cold Cream",
      "Tintenfass, Federhalter, Bleistifte und Papier",
      "Kleine Flasche und Trinkbecher"
    ]}),

    card("Interessante Listen", "Sei Shōnagon: Dinge, die das Herz schneller schlagen lassen", [
      "Um das Jahr 1000 sammelte Sei Shōnagon am Hof der Kaiserin Teishi Beobachtungen, Gespräche und Listen im Kopfkissenbuch. Ihre Liste der Dinge, die das Herz schneller schlagen lassen, mischt Erwartung, sinnliche Pflege, zarte Tiere und kleine Veränderungen kostbarer Gegenstände.",
      "Die Einträge erklären ihre Gemeinsamkeit nicht. Erst die Folge zeigt, dass Aufregung sowohl erotisch als auch häuslich, körperlich und ästhetisch sein kann. Der letzte Augenblick – nächtlicher Regen gegen die Läden, während ein Besucher erwartet wird – macht ein Geräusch zum unsicheren Zeichen einer Ankunft."
    ], [C("Sei Shonagon Hyakunin Isshu portrait", "Sei Shōnagon"), C("Makura no Soshi Edo manuscript", "Ausgabe des Kopfkissenbuchs")], [
      src("Project Gutenberg: The Pillow-Book of Sei Shōnagon, gemeinfreie Übersetzung", "https://www.gutenberg.org/ebooks/76016")
    ], {works:[
      "Spatzen, die ihre Jungen füttern",
      "An spielenden kleinen Kindern vorbeigehen",
      "In einem Zimmer schlafen, in dem feiner Weihrauch gebrannt wurde",
      "Eine leichte Trübung im chinesischen Spiegel entdecken",
      "Ein vornehmes Gefährt hält vor dem Tor und ein Bote wird geschickt",
      "Gewaschenes Haar, duftende Gewänder und sorgfältige Kleidung",
      "Nachts auf einen Besucher warten und Regen gegen die Läden hören"
    ]}),

    // Gute einfache Cartoons
    card("Gute einfache Cartoons", "George du Maurier: True Humility", [
      "Beim Frühstück bemerkt der Bischof, das Ei des jungen Vikars sei schlecht. Der Vikar antwortet: „Oh no, my Lord, I assure you! Parts of it are excellent!“ Im Bild versucht er, zugleich das verdorbene Ei und seine Dankbarkeit gegenüber dem Gastgeber zu retten.",
      "Punch veröffentlichte die Zeichnung 1895. Der Ausdruck „curate’s egg“ ging daraus in die englische Sprache ein: etwas, das angeblich in Teilen gut ist, obwohl der entscheidende Fehler das Ganze betrifft. Text und Gesicht des Vikars zeigen dieselbe erzwungene Höflichkeit."
    ], [F("True humility.png", "True Humility, Punch 1895")], [
      src("Wikimedia Commons: True Humility, gemeinfrei", "https://commons.wikimedia.org/wiki/File:True_humility.png")
    ], {byline:"George du Maurier · Punch, 9. November 1895"}),

    card("Gute einfache Cartoons", "George du Maurier: Veto", [
      "Ein Mann fragt seine Begleiterin: „Shall we—a—sit down?“ Sie antwortet: „I’d like to; but my dressmaker says I mustn’t!“ Die Pointe braucht nur den schmalen Rock der späten 1870er Jahre: Seine modische Linie verhindert die gewöhnliche Bewegung, für die Kleidung da sein sollte.",
      "Du Maurier zeichnet beide Figuren aufrecht und höflich. Das Kleid bleibt im Dialog unkommentiert. Der kurze Wortwechsel macht die Schneiderin zur abwesenden Autorität über den Körper der Trägerin."
    ], [F("Late-1870s-dumaurier-veto.png", "Veto, Punch, späte 1870er Jahre")], [
      src("Wikimedia Commons: Veto, gemeinfrei", "https://commons.wikimedia.org/wiki/File:Late-1870s-dumaurier-veto.png")
    ], {byline:"George du Maurier · Punch, späte 1870er Jahre"}),

    card("Gute einfache Cartoons", "Charles Samuel Keene: Happy Thought", [
      "Drei Polizisten führen im Regen einen Mann in Handschellen ab. Ein Straßenjunge ruft: „He’s got ’em on!“ Die damals geläufige Redensart für elegante neue Kleidung wird wörtlich auf die Handschellen angewandt.",
      "Keene lässt den Jungen am Bildrand gehen, fast wie einen zufälligen Kommentator. Die schwere Gruppe der Polizisten braucht keine Karikatur; ein geliehener Modeausdruck reicht, um aus einer amtlichen Szene einen knappen Wortwitz zu machen."
    ], [I("https://collectionapi.metmuseum.org/api/collection/v1/iiif/342259/main-image", "https://www.metmuseum.org/art/collection/search/342259", "Happy Thought, Charles Samuel Keene, 1876", "The Metropolitan Museum of Art · Public Domain")], [
      src("Metropolitan Museum of Art: Happy Thought, Open Access", "https://www.metmuseum.org/art/collection/search/342259")
    ], {byline:"Charles Samuel Keene · Punch, 16. Dezember 1876"}),

    card("Gute einfache Cartoons", "T. S. Sullivant: The First Pun", [
      "Zwei Zentauren beobachten eine Herde Minotauren. Einer fragt: „What do you think of them minotaurs, anyhow?“ Der andere antwortet: „Oh, they’re bully fellows!“ Bully bedeutet hier „prächtige Kerle“; bull steckt zugleich sichtbar in den Stiermenschen.",
      "Im Vordergrund läuft ein Zentaurenkind an einer Leine. Sullivant behandelt die Mischwesen wie verschiedene, alltägliche Tierarten und gibt dem simplen Wortspiel dadurch eine vollständig gezeichnete Welt. Die Zeichnung erschien 1898 in Life und ist gemeinfrei."
    ], [F("T. S. Sullivant (1898-05-05) The First Pun.jpg", "The First Pun, 1898")], [
      src("Wikimedia Commons: The First Pun, gemeinfrei", "https://commons.wikimedia.org/wiki/File:T._S._Sullivant_(1898-05-05)_The_First_Pun.jpg")
    ], {byline:"T. S. Sullivant · Life, 5. Mai 1898"}),

    card("Gute einfache Cartoons", "T. S. Sullivant: Life’s Patent Keely Motor Elephant", [
      "Vier Jäger sitzen in einem gepanzerten mechanischen Elefanten. Rohre ersetzen die Stoßzähne; vor der Maschine liegen erlegte Elefanten und Raubkatzen, während die Herde flieht. Der Apparat ahmt das Tier nach und macht seine Benutzer zugleich fast unangreifbar.",
      "Der Titel verweist auf John Keelys „Motor“ aus Philadelphia, dessen angeblich neue Kraftquelle jahrzehntelang Investoren anzog und nie nachvollziehbar vorgeführt wurde. Sullivants Patentname gibt der grotesken Jagdmaschine den Ton technischer Seriosität. Die Zeichnung erschien 1898 in Life und ist gemeinfrei."
    ], [F("T. S. Sullivant (1898-08-11) Life's Patent Keely Motor Elephant Philadelphia.jpg", "Life’s Patent Keely Motor Elephant, 1898")], [
      src("Wikimedia Commons: Life’s Patent Keely Motor Elephant, gemeinfrei", "https://commons.wikimedia.org/wiki/File:T._S._Sullivant_(1898-08-11)_Life%27s_Patent_Keely_Motor_Elephant_Philadelphia.jpg"),
      src("Smithsonian NMAH Archives: Keely Motor Company records", "https://sova.si.edu/record/NMAH.AC.0604")
    ], {byline:"T. S. Sullivant · Life, 11. August 1898"})
  );
})();
