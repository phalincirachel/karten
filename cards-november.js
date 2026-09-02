// Sieben neue Kategorien mit jeweils fünf Karten.
(() => {
  "use strict";

  const src = (label, url) => S(label, url);
  const card = (category, title, detail, media, sources = [], extra = {}) => ({
    category, title, detail, media, sources, ...extra
  });
  const site = (url, caption) => I(
    `https://image.thum.io/get/width/1200/crop/900/noanimate/${url}`,
    url,
    caption,
    "Screenshot der verlinkten Website"
  );

  window.KARTEN.push(
    // Grenzfälle
    card("Grenzfälle", "Quasikristall · geordnet ohne Wiederholung", [
      "Dan Shechtman sah 1982 in einer Aluminium-Mangan-Legierung ein scharfes Elektronenbeugungsbild mit zehnfacher Symmetrie. Das Muster zeigte Fernordnung, doch keine räumlich wiederholte Elementarzelle. Nach der damaligen Definition durfte ein solcher Festkörper kein Kristall sein.",
      "Die International Union of Crystallography fasste den Kristallbegriff deshalb neu: Entscheidend sind Fernordnung und scharfe Beugungsmaxima; dreidimensionale Periodizität bildet nur den häufigsten Fall. Der Quasikristall zeigt, dass eine wissenschaftliche Kategorie an Messmerkmalen hängen muss und sich ändert, sobald ein Gegenstand ihre alte Definition erfüllt und zugleich widerlegt."
    ], [F("Icosahedrite Diffraction Pattern.jpg", "Fünfzählige Elektronenbeugung des natürlichen Quasikristalls Ikosaedrit"), F("Ho-Mg-ZnQuasicrystal.jpg", "Ein dodekaedrischer Ho-Mg-Zn-Quasikristall")], [
      src("IUCr: Change to the definition of crystal", "https://www.iucr.org/news/newsletter/volume-29/number-2/change-to-the-definition-of-crystal-in-the-iucr-online-dictionary-of-crystallography"),
      src("IUCr: Fascinating quasicrystals", "https://journals.iucr.org/a/issues/2008/01/00/sc5003/index.html")
    ], {summary:"Ein Festkörper zwang die Kristallographie, Ordnung von Wiederholung zu trennen."}),

    card("Grenzfälle", "Paulinella chromatophora · Symbiont oder Organell", [
      "Paulinella chromatophora ist eine beschalte Amöbe mit zwei fotosynthetischen Chromatophoren. Deren Vorfahr war ein frei lebendes Cyanobakterium, das vor etwa 90 bis 140 Millionen Jahren aufgenommen wurde. Dieses Ereignis entstand unabhängig von der viel älteren Endosymbiose, aus der die Chloroplasten von Pflanzen und Algen hervorgingen.",
      "Der Chromatophor besitzt ein stark verkleinertes Genom. Zahlreiche für ihn nötige Proteine werden inzwischen im Zellkern der Amöbe codiert und in den Chromatophor transportiert; Stoffwechsel und Teilung sind mit dem Wirt gekoppelt. Abhängigkeit, Gentransfer und Proteinimport verschieben den eingewanderten Organismus schrittweise zum Zellorganell. Paulinella macht aus einer scheinbaren Zweiteilung eine beobachtbare Entwicklung."
    ], [F("Paulinella chromatophora.jpg", "Paulinella chromatophora mit ihren blaugrünen Chromatophoren"), F("Paulinella-chromatophora-a-b-Different-focal-planes-of-micrographs-of-P-chromatophora.png", "Mikroskopische Aufnahmen von Paulinella chromatophora")], [
      src("Nowack und Weber: Paulinella, a model for plastid primary endosymbiosis", "https://pmc.ncbi.nlm.nih.gov/articles/PMC7734844/"),
      src("Acta Societatis Botanicorum Poloniae: transition from endosymbiont to organelle", "https://pbsociety.org.pl/journals/index.php/asbp/article/view/asbp.2014.049/0")
    ], {summary:"Eine Amöbe zeigt eine zweite Entstehungsgeschichte eines fotosynthetischen Organells."}),

    card("Grenzfälle", "Riau-Indonesisch · Wort oder Wortart", [
      "David Gil beschreibt das gesprochene Riau-Indonesisch mit einer einzigen offenen syntaktischen Klasse. Im Satz „Rudy suka durian“ entsprechen Rudy, suka und durian den deutschen Kategorien Eigenname, Verb und Substantiv; innerhalb dieser Varietät tragen sie nach seiner Analyse dieselbe Wortart. Bedeutung und Reihenfolge leisten die Arbeit, die europäische Grammatiken verschiedenen Klassen zuweisen.",
      "Die Formel „Sprache ohne Substantive und Verben“ bezeichnet eine grammatische Analyse, keine Sprachgemeinschaft ohne Dinge und Handlungen. Der Streit betrifft die Kriterien: Zählt die Übersetzung eines Wortes, seine Bedeutung oder sein Verhalten im Satz? Der Grenzfall zeigt, dass Wortarten keine fertigen Schubladen des Denkens sind, sondern aus wiederkehrenden Unterschieden in Form und Verteilung gewonnen werden."
    ], [F("Riau and Riau Islands in Indonesia.png", "Riau und die Riau-Inseln"), site("https://academic.oup.com/book/26032/chapter-abstract/193927159", "Riau-Indonesisch in der sprachwissenschaftlichen Beschreibung")], [
      src("David Gil: The Structure of Riau Indonesian", "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/52422AF1BAE8374C47E998929F116A23/S0332586500003000a.pdf/structure_of_riau_indonesian.pdf"),
      src("Oxford Academic: Riau Indonesian – a language without nouns and verbs", "https://academic.oup.com/book/26032/chapter-abstract/193927159")
    ], {summary:"Eine grammatische Analyse trennt Wörter erst durch ihren Satzbau, statt durch ihre deutsche Übersetzung."}),

    card("Grenzfälle", "The Clock · Film oder Uhr", [
      "Christian Marclays The Clock besteht aus Tausenden Ausschnitten aus Film und Fernsehen, in denen eine Uhr, eine Zeitangabe oder eine Handlung auf die Minute verweist. Die 24-stündige Montage läuft synchron zur Ortszeit des Ausstellungsraums: Zeigt die Leinwand 12:20 Uhr, ist es auch im Saal 12:20 Uhr.",
      "Das Werk besitzt Bild, Ton, Schnitt und Darsteller, aber keinen vorgeschriebenen Anfang und kein Ende, das ein einzelner Besuch erreichen muss. Zugleich erfüllt es die praktische Aufgabe einer Uhr. Seine Grenze verläuft damit zwischen Erzählmedium, Installation und Instrument; dieselbe Bildfolge wird durch ihre Synchronisation zu einer Zeitmessung."
    ], [site("https://www.moma.org/calendar/exhibitions/5746", "Christian Marclay: The Clock im MoMA"), site("https://www.moma.org/magazine/articles/1159", "The Clock als Film, Installation und Zeitmesser")], [
      src("Museum of Modern Art: Christian Marclay – The Clock", "https://www.moma.org/calendar/exhibitions/5746"),
      src("MoMA Magazine: Clock Time", "https://www.moma.org/magazine/articles/1159")
    ], {summary:"Eine 24-stündige Montage zeigt Spielfilme und zugleich die genaue Ortszeit."}),

    card("Grenzfälle", "Blur Building · Gebäude oder Wetterlage", [
      "Diller Scofidio + Renfro bauten für die Schweizer Expo 2002 eine Plattform über dem Neuenburgersee. 35.000 Hochdruckdüsen zerstäubten gefiltertes Seewasser. Sensoren maßen Wind, Temperatur und Feuchtigkeit und regelten den Wasserdruck so, dass eine begehbare Nebelmasse entstand.",
      "Wände, Fassade, feste Raumgrenzen und eine stabile Silhouette fehlten. Tragwerk, Pumpen, Düsen und Regelung gehörten zum Bau; sein wahrnehmbarer Raum bestand aus wechselndem Wetter. Das Projekt verschiebt Architektur vom umschlossenen Volumen zur technisch erzeugten Atmosphäre."
    ], [F("20020717 Expo Yverdon 23.JPG", "Blur Building über dem Neuenburgersee"), site("https://dsrny.com/project/blur-building", "Projektseite des Blur Building")], [
      src("Diller Scofidio + Renfro: Blur Building", "https://dsrny.com/project/blur-building")
    ], {summary:"Eine Plattform, ein Regelsystem und eine Wolke bildeten gemeinsam einen Pavillon."}),

    // UnsichtbareKonventionen
    card("UnsichtbareKonventionen", "Warum Weiß im Schach beginnt", [
      "In älteren Partien war die Farbe der Steine vom ersten Zug getrennt. Turnierregeln des späten 19. Jahrhunderts banden beides aneinander; der Fifth American Chess Congress schrieb 1880 dem anziehenden Spieler die weißen Steine zu. Die FIDE übernahm die Regel 1931 in ihre offiziellen Gesetze.",
      "Heute steckt die Konvention in Diagrammen, Eröffnungsbüchern, Uhren, Paarungstabellen und der algebraischen Notation. Eine Partie mit dem ersten Zug von Schwarz wäre spielbar, doch fast jedes Hilfsmittel würde eine Erklärung verlangen. Die Regel zeigt, wie eine willkürliche Festlegung zur Infrastruktur wird."
    ], [F("ChessStartingPosition.jpg", "Weiße und schwarze Figuren in der Ausgangsstellung"), site("https://new.uschess.org/news/evolution-modern-chess-rules-white-moves-first", "Die Geschichte der Regel: Weiß zieht zuerst")], [
      src("US Chess: The Evolution of Modern Chess Rules – White Moves First", "https://new.uschess.org/news/evolution-modern-chess-rules-white-moves-first")
    ], {summary:"Die Farbe des ersten Zuges wurde erst durch Turnierregeln fest an Weiß gebunden."}),

    card("UnsichtbareKonventionen", "Warum zwischen den Sätzen Stille herrscht", [
      "Im heutigen Sinfoniekonzert wartet das Publikum bei einem mehrsätzigen Werk bis zum Schluss. Im 18. und 19. Jahrhundert wurde zwischen Sätzen, bisweilen sogar während eines Satzes, applaudiert; besonders gelungene Abschnitte wurden wiederholt. Die geschlossene, stille Aufmerksamkeit des Konzertsaals setzte sich später durch.",
      "Der Dirigent hält die Arme oben, das Programm nennt die Satzfolge, erfahrene Besucher warten auf seine Wendung zum Saal. Erst ein verfrühter Applaus macht diese Zeichen sichtbar. Die Pause gehört musikalisch zum Werk und sozial zu einem erlernten Ritual."
    ], [site("https://orlandophil.org/pauls-perspective-etiquette-for-todays-orchestra/", "Orchester, Publikum und die Pause zwischen Sätzen"), site("https://www.lansingsymphony.org/concerts-events/concert-etiquette", "Die Zeichen des Konzertendes")], [
      src("Orlando Philharmonic: Etiquette for today’s orchestra", "https://orlandophil.org/pauls-perspective-etiquette-for-todays-orchestra/"),
      src("Lansing Symphony Orchestra: Concert Etiquette", "https://www.lansingsymphony.org/concerts-events/concert-etiquette")
    ], {summary:"Die heutige Stille zwischen Konzertsätzen ist eine verhältnismäßig junge Hörordnung."}),

    card("UnsichtbareKonventionen", "Warum Norden oben liegt", [
      "Eine Karte besitzt physisch kein Oben, das dem Norden entspricht. Mittelalterliche Weltkarten richteten häufig Osten nach oben aus; die Fra-Mauro-Karte von etwa 1450 zeigt Süden oben. Seekarten und gedruckte Atlanten der Neuzeit festigten in Europa die Nordorientierung.",
      "Nach langer Gewöhnung wirken Afrika und Südamerika auf einer Südkarte verkehrt, obwohl Entfernungen und Nachbarschaften gleich bleiben. Wörter wie „hoch im Norden“ übertragen die Blattordnung sogar in die Sprache. Die Konvention ordnet den Blick und tarnt diese Entscheidung als Eigenschaft der Erde."
    ], [F("FraMauroDetailedMap.jpg", "Fra-Mauro-Weltkarte mit Süden oben"), site("https://mostre.museogalileo.it/framauro/en/interactive-exploration/explore-the-map.html", "Interaktive Ansicht der Fra-Mauro-Karte")], [
      src("Museo Galileo: Fra Mauro Map – Interactive Exploration", "https://mostre.museogalileo.it/framauro/en/interactive-exploration/explore-the-map.html"),
      src("David Rumsey Map Collection: Orientation", "https://www.davidrumsey.com/blog/2013/2/25/orientation")
    ], {summary:"Die vertraute Lage der Welt auf dem Blatt ist eine historische Entscheidung."}),

    card("UnsichtbareKonventionen", "Warum eine neue Stimme einen neuen Absatz erhält", [
      "Erzählprosa beginnt bei jedem Sprecherwechsel gewöhnlich einen neuen Absatz. Der Weißraum übernimmt dadurch einen Teil der Sprecherangabe: Nach zwei eingeführten Stimmen versteht der Leser einen schnellen Wechsel oft ganz ohne wiederholtes „sagte er“ und „sagte sie“.",
      "Stehen mehrere Stimmen im selben Absatz, muss der Leser die Besitzverhältnisse jeder Äußerung neu berechnen. Eine bewusste Verletzung erzeugt Überlagerung, Verwirrung oder Gruppensprechen. Die Konvention beweist, dass Absatzgestaltung grammatische Information trägt, obwohl sie stumm bleibt."
    ], [site("https://www.chicagomanualofstyle.org/qanda/data/faq/topics/Quotations/faq0029.html", "Die Absatzregel beim Wechsel des Sprechers"), site("https://www.gutenberg.org/files/158/158-h/158-h.htm", "Dialogabsätze in Jane Austens Emma")], [
      src("Chicago Manual of Style: Quotations and Dialogue", "https://www.chicagomanualofstyle.org/qanda/data/faq/topics/Quotations/faq0029.html")
    ], {summary:"Ein Absatzwechsel ersetzt im Dialog viele ausdrückliche Sprecherangaben."}),

    card("UnsichtbareKonventionen", "Gis oder As: derselbe Ton, eine andere Aufgabe", [
      "Auf einem gleichstufig gestimmten Klavier liegen Gis und As auf derselben Taste. In einer notierten Stimme bezeichnet Gis meist eine erhöhte Stufe mit Aufwärtsdrang; As gehört als erniedrigte Stufe zu einem anderen Akkord oder Tonraum. Die Schreibweise hält Herkunft und erwartete Fortsetzung fest.",
      "Bei einer enharmonischen Modulation bleibt der Klang zunächst gleich, während die Umdeutung seine Funktion verändert. Ein verminderter Septakkord oder übermäßiger Sextakkord erhält durch neue Buchstaben ein anderes Ziel. Notenschrift protokolliert damit Beziehungen, die eine einzelne Aufnahme akustisch offenlässt."
    ], [site("https://musictheory.pugetsound.edu/mt21c/EnharmonicNotes.html", "Enharmonische Töne auf Notensystem und Klaviatur"), site("https://musictheory.pugetsound.edu/mt21c/EnharmonicModulationIntroduction.html", "Enharmonische Umdeutung in Notenschrift")], [
      src("Music Theory for the 21st-Century Classroom: Enharmonic Notes", "https://musictheory.pugetsound.edu/mt21c/EnharmonicNotes.html"),
      src("Music Theory for the 21st-Century Classroom: Enharmonic Modulation", "https://musictheory.pugetsound.edu/mt21c/EnharmonicModulationIntroduction.html")
    ], {summary:"Die Notenschrift unterscheidet zwei Namen für dieselbe Taste, weil sie verschiedene Beziehungen bezeichnet."}),

    // VerloreneTechniken
    card("VerloreneTechniken", "Letterlocking", [
      "Vor dem gummierten Briefumschlag falteten Schreiber den beschriebenen Bogen zu seinem eigenen Behälter. Schlitze, Laschen, Fäden, Papierstreifen und Siegel verbanden die Lagen. Manche Verschlüsse ließen sich nur öffnen, indem ein Teil zerrissen wurde; die Beschädigung zeigte den Eingriff.",
      "Die Faltung regelte mehr als Geheimhaltung. Sie bestimmte Format, Reihenfolge der Lektüre, Adresse und Grad der Manipulationssicherheit. Das Forschungsprojekt Letterlocking hat an Hunderttausenden Briefen wiederkehrende Techniken beschrieben. Ein alltäglicher Handgriff erscheint dadurch als Dokumentensicherheit aus Papier."
    ], [site("https://letterlocking.org/faq", "Historisch verschlossene Faltbriefe und ihre Modelle"), site("https://news.mit.edu/2025/new-look-centuries-old-practice-letterlocking-0304", "Untersuchung historischer Briefverschlüsse")], [
      src("MIT News: A new look at a centuries-old practice", "https://news.mit.edu/2025/new-look-centuries-old-practice-letterlocking-0304"),
      src("Letterlocking: FAQ und Modelle", "https://letterlocking.org/faq")
    ], {summary:"Faltungen, Schlitze und Siegel machten aus einem Blatt zugleich Nachricht, Umschlag und Manipulationsanzeige."}),

    card("VerloreneTechniken", "Mattang lesen", [
      "Marshallische Navigatoren lernten an Mattang-Modellen, wie Dünung an Inseln gebrochen, gebeugt und zurückgeworfen wird. Palmstäbe zeigten typische Wellenbeziehungen; Muscheln bezeichneten Inseln. Solche Lehrmodelle blieben an Land. Auf See lag ihr Wissen im Körper des Navigators.",
      "Im Kanu spürte der Navigator Kreuzseen, Änderungen der Rollbewegung und die von einem Atoll verursachte Gegenwelle, lange bevor Land sichtbar wurde. Jeder erfahrene Hersteller ordnete sein Modell nach der eigenen Lehre. Die Technik verband Ozeanographie, Gedächtnis und eine äußerst feine Wahrnehmung der Bootsbewegung."
    ], [F("(Marshall Islands stick chart, Mattang type). LOC 2010586180.jpg", "Mattang aus den Marshallinseln"), F("Stickchart from the Marshall Islands - Chart I - 79 cm - p. 496 - Annual Report of the Smithsonian Institution, 1899.jpg", "Historische Aufzeichnung eines Mattang")], [
      src("Smithsonian Ocean: Navigating the Waters with Micronesian Stick Charts", "https://ocean.si.edu/human-connections/history-cultures/navigating-waters-micronesian-stick-charts"),
      src("Metropolitan Museum of Art: Rebbilib navigation chart", "https://www.metmuseum.org/art/collection/search/311297")
    ], {summary:"Navigatoren erkannten Inseln unter dem Horizont an Veränderungen der Dünung."}),

    card("VerloreneTechniken", "Schriftpunzen von Hand schneiden", [
      "Für den Metallletternsatz wurde jeder Buchstabe spiegelverkehrt in das Ende eines Stahlstabs geschnitten. Feilen legten die Außenform an, Grabstichel und Gegenpunzen öffneten Innenräume. Probeabschläge in weichem Metall zeigten, wie Linie, Tiefe und Seitenwinkel später auf Papier wirkten.",
      "Der fertige Punzen schlug eine Matrize in Kupfer; aus ihr goss der Handgießer beliebig viele Lettern. Der Punzen war daher weder Zeichnung noch fertige Letter, sondern ein dreidimensionales Werkzeug für eine ganze Schriftgröße. Pantografen und maschinelle Matrizenfertigung verdrängten diese Verbindung aus Auge, Hand und Metallkunde."
    ], [site("https://www.arch.cam.ac.uk/news/first-ever-scientific-study-typographic-punches-published", "Historische Schriftpunzen unter dem Mikroskop"), site("https://collection.sciencemuseumgroup.org.uk/objects/co8692793/monotype-pierpont-punch-cutting-machine", "Maschine zum Schneiden typografischer Punzen")], [
      src("University of Cambridge: scientific study of typographic punches", "https://www.arch.cam.ac.uk/news/first-ever-scientific-study-typographic-punches-published"),
      src("Science Museum Group: Monotype Pierpont Punch-Cutting Machine", "https://collection.sciencemuseumgroup.org.uk/objects/co8692793/monotype-pierpont-punch-cutting-machine")
    ], {summary:"Ein spiegelverkehrter Buchstabe aus Stahl bestimmte jede später daraus gegossene Letter."}),

    card("VerloreneTechniken", "Lotleine mit Talggrund", [
      "Ein Handlot bestand aus einem markierten Seil und einem schweren Lotkörper. Seine ausgehöhlte Unterseite erhielt eine Lage Talg. Traf das Lot den Boden, blieben Sand, Schlamm, kleine Muscheln oder Kies daran haften.",
      "Der Lotende meldete Tiefe und Grundart. Der Navigator verglich beides mit Küstenhandbüchern und früheren Messungen: Eine bestimmte Kombination aus Wassertiefe und Sediment konnte die Position auch bei Nebel eingrenzen. Das Echolot ersetzte die regelmäßige Handarbeit; die alte Methode verband Messung und Materialprobe in einem Wurf."
    ], [site("https://museum.maritimearchaeologytrust.org/2024/02/29/sounding-weights/", "Historische Handlote und ihre Vertiefung für Talg"), F("Flickr - Official U.S. Navy Imagery - A Sailor heaves around a line aboard USS Essex..jpg", "Auswerfen einer Leine an Bord")], [
      src("National Historic Ships: Manual of Maritime Curatorship", "https://www.nationalhistoricships.org.uk/sites/default/files/2023-02/a_introduction_2.pdf"),
      src("Maritime Archaeology Trust: Sounding Weights", "https://museum.maritimearchaeologytrust.org/2024/02/29/sounding-weights/")
    ], {summary:"Ein Bleilot maß die Tiefe und brachte zugleich eine Probe des Meeresbodens herauf."}),

    card("VerloreneTechniken", "Morse fünf Wörter hinterher mitschreiben", [
      "Frühe Morseempfänger zeichneten Punkte und Striche auf Papier. Telegraphisten bemerkten bald, dass die zwei Anschläge des Sounders unmittelbar lesbar waren. Geübte Operatoren hörten Buchstaben und Wörter als Klanggestalten und schrieben die Nachricht in normaler Schrift nieder.",
      "Bei hohem Tempo blieb der Stift mehrere Wörter hinter dem Signal. Das Arbeitsgedächtnis hielt den Satz zurück, ergänzte aus dem Zusammenhang schwache Zeichen und gab ihn in gleichmäßigem Schreibtempo ab. Berichte nennen fünf bis sechs Wörter Abstand bei 50 bis 60 Wörtern pro Minute. Die Leistung war zugleich Hören, Vorhersagen und verzögertes Schreiben."
    ], [F("Old telegraph instruments morse key and morse sounder.JPG", "Morsetaste und Morse-Sounder"), site("https://www.loc.gov/collections/samuel-morse-papers/articles-and-essays/invention-of-the-telegraph/", "Telegraphie mit Morsetaste und Sounder")], [
      src("Library of Congress: Invention of the Telegraph", "https://www.loc.gov/collections/samuel-morse-papers/articles-and-essays/invention-of-the-telegraph/"),
      src("ARRL: Putting It Down", "https://www.arrl.org/news/quot-putting-it-down-quot")
    ], {summary:"Hochgeschwindigkeitstelegrafisten hörten ganze Wörter und schrieben sie mit bewusstem Abstand nieder."}),

    // InternetArchäologie
    card("InternetArchäologie", "Superbad.com", [
      "Ben Benjamin begann Superbad 1997 als Geflecht aus mehr als hundert DHTML-Seiten. Bilder, Textfragmente, Cursorreaktionen und kleine Animationen führen über schwer erkennbare Klickflächen weiter. Eine feste Route oder eine Erklärung des Ziels fehlt; Navigation wird zum tastenden Teil des Werks.",
      "Die Seite läuft weiterhin in ihrem eigenen Browserraum. Sie stammt aus einer Zeit, in der eine Website weder Profil noch Feed noch eindeutige Informationsarchitektur brauchte. Superbad benutzt den Hyperlink als Schnitt, Irrweg und Pointe und bewahrt damit eine Form des Webs, die späteren Plattformoberflächen fremd geworden ist."
    ], [site("https://www.superbad.com/", "Superbad.com")], [
      src("Superbad.com", "https://www.superbad.com/"),
      src("Rhizome ArtBase: Superbad", "https://artbase.rhizome.org/wiki/Item%3AQ8512")
    ], {summary:"Ein seit 1997 wachsendes Labyrinth aus verlinkten Bildern, Bewegungen und Sackgassen."}),

    card("InternetArchäologie", "TEXTFILES.COM", [
      "Jason Scott stellte 1998 zunächst rund 9.000 Textdateien aus der Mailbox- und BBS-Kultur online. Das Archiv wuchs um ANSI- und ASCII-Kunst, Telefonmitschnitte, Shareware-CDs, Softwarehandbücher, Dateilisten und Unterverzeichnisse zu einzelnen Szenen.",
      "Die schlichte Verzeichnisansicht lässt Dateinamen, Zeitstempel und ursprüngliche Ordnung sichtbar. Dadurch liest man keine nachträgliche Ausstellung, sondern den Rohstoff früher Netzkultur: Anleitungen, Streite, Newsletter, Rollenspiele, Hacks, Amateurprosa und Systemmeldungen. Die alte Oberfläche ist selbst Teil des Bestands."
    ], [site("http://textfiles.com/", "TEXTFILES.COM")], [
      src("TEXTFILES.COM", "http://textfiles.com/"),
      src("Jason Scott: About", "https://ascii.textfiles.com/about")
    ], {summary:"Ein schlichtes Verzeichnis bewahrt Texte, Kunst und Software aus der Zeit der Einwahl-Mailboxen."}),

    card("InternetArchäologie", "ACME Laboratories", [
      "Jef Poskanzers ACME Laboratories ist seit 1991 im Netz. Die Startseite führt weiterhin als handgeschriebener Index zu kleinen Werkzeugen: einem Kartenserver, winzigen Webservern, Bildformat-Konvertern, ASCII-Darstellungen von Mondphase und beleuchteter Erde sowie Generatoren für Etiketten und Nummernschilder.",
      "ACME zeigt eine Website als persönliche Werkbank. Jahrzehnte alter und neuer Code liegt nebeneinander, verbunden durch gewöhnliche Links und kurze Beschreibungen. Der Bestand erklärt seine Entstehung weder als Nostalgie noch als Marke; er arbeitet einfach weiter."
    ], [site("https://acme.com/", "ACME Laboratories")], [
      src("ACME Laboratories", "https://acme.com/"),
      src("Jef Poskanzer: persönliche Seite", "https://acme.com/jef/")
    ], {summary:"Eine persönliche Webwerkstatt sammelt seit 1991 Karten, Unix-Programme und seltsame Generatoren."}),

    card("InternetArchäologie", "The Infinite Cat Project", [
      "Das Projekt begann mit einem Foto einer Katze, die auf einem Monitor eine andere Katze ansieht. Besucher fotografierten ihre eigene Katze vor diesem Bild und schickten die nächste Ebene ein. Über Jahre entstand eine lange Folge, in der jeder Bildschirm die vorherigen Katzen als kleiner werdenden Tunnel enthält.",
      "Die Idee verbindet frühe Digitalkameras, Foren, private Rechner und eine von Hand betreute Einsendungskultur. Jeder Beitrag benötigt das Bild davor; die Reihenfolge bleibt deshalb Teil des Werks. Das erhaltene Archiv zeigt kollaboratives Netzleben vor Like-Zahlen und algorithmischer Sortierung."
    ], [site("https://www.poozycat.com/infinitecatproject.html", "Archiv des Infinite Cat Project")], [
      src("Archiv: The Infinite Cat Project", "https://www.poozycat.com/infinitecatproject.html"),
      src("Projektgeschichte des Betreibers", "https://www.poozycat.com/about.html")
    ], {summary:"Tausende Katzen betrachten auf Monitoren die jeweils vorherige Katze."}),

    card("InternetArchäologie", "One Terabyte of Kilobyte Age", [
      "Nach der Schließung von GeoCities im Jahr 2009 rettete Archive Team ungefähr ein Terabyte Daten. Olia Lialina und Dragan Espenschied untersuchen diesen Bestand seit 2010. Programme rekonstruieren alte Adressen, vermessen Millionen Dateien und veröffentlichen fortlaufend Screenshots einzelner Seiten.",
      "Der Blick gilt dem gewöhnlichen Webdesign: Sternenhintergründen, Baustellenschildern, Webringen, Navigationsleisten, Fanbildern und persönlichen Sammlungen. Statt nur Dateien zu lagern, stellt das Projekt ihre damalige Erscheinung und Nachbarschaft wieder her. Es behandelt die Form privater Homepages als historische Quelle."
    ], [site("https://blog.geocities.institute/", "One Terabyte of Kilobyte Age")], [
      src("One Terabyte of Kilobyte Age", "https://blog.geocities.institute/"),
      src("Library of Congress: GeoCities, Deleted City and collection interfaces", "https://blogs.loc.gov/thesignal/2014/01/interface-exhibition-artwork-geocities-deleted-city-and-the-future-of-interfaces-to-digital-collections/")
    ], {summary:"Ein gerettetes GeoCities-Terabyte wird Seite für Seite wieder sichtbar gemacht."}),

    // SchlechtesWritingSeziert
    card("SchlechtesWritingSeziert", "Star Trek Into Darkness · „My name is Khan“", [
      "John Harrison nennt Kirk und Spock seinen wirklichen Namen: Khan. Die Kamera, die Pause und die Musik behandeln das Wort als Enthüllung. Für die Figuren besitzt der Name zu diesem Zeitpunkt jedoch keine bekannte Geschichte; nur ein Teil des Publikums erkennt ihn aus dem älteren Star-Trek-Kanon. Die Reaktion der Szene gehört deshalb dem Zuschauer und wird den Figuren geliehen."
    ], [Y("OvdQYzRHlO0", "Star Trek Into Darkness · My Name is Khan", 0)], [
      src("YouTube: lizenzierter Movieclips-Ausschnitt", "https://www.youtube.com/watch?v=OvdQYzRHlO0")
    ], {summary:"Eine Enthüllung verlangt von den Figuren ein Wissen, das nur das Publikum besitzt.",works:[
      "Kirk findet den Namen Khan vor der Begegnung in einer gesperrten Akte; die Szene enthüllt dann, dass Harrison zu dieser Akte gehört.",
      "Der Film behält den Namen Harrison und enthüllt stattdessen durch eine konkrete Tat, welche Fähigkeiten und Ziele der Mann verborgen hat.",
      "Spock Prime wird früher befragt; seine Warnung gibt dem später ausgesprochenen Namen eine Folge für Kirk und Spock."
    ]}),

    card("SchlechtesWritingSeziert", "The Matrix Reloaded · der Architekt", [
      "Der Architekt hält Neo in einem weißen Raum an und erklärt in einem langen Monolog die früheren Versionen der Matrix, die Rolle des Auserwählten und die zyklische Zerstörung Zions. Abstrakte Begriffe, verschachtelte Sätze und Monitorbilder liefern entscheidende Handlungstatsachen auf einmal. Neo handelt erst am Ende; während der Erklärung besitzt er kaum Mittel, eine Behauptung zu prüfen oder das Gespräch zu verändern."
    ], [Y("9WXQnDtcCWM", "The Matrix Reloaded · The Architect", 0)], [
      src("YouTube: lizenzierter Movieclips-Ausschnitt", "https://www.youtube.com/watch?v=9WXQnDtcCWM")
    ], {summary:"Der Wendepunkt wird als Vortrag übermittelt, während die Hauptfigur stillsteht.",works:[
      "Neo durchläuft kurze Überreste der früheren Zyklen und setzt die Wahrheit selbst aus widersprüchlichen Bildern zusammen.",
      "Der Architekt beantwortet nur Fragen, für die Neo jeweils etwas riskieren oder preisgeben muss.",
      "Der Film verteilt die Information auf Orakel, Merowinger und Architekt; jede Quelle verfolgt dabei ein anderes Interesse."
    ]}),

    card("SchlechtesWritingSeziert", "Doctor Who · The Timeless Children", [
      "Der Master fesselt die Doctor in der Matrix und führt sie durch projizierte Archivbilder. Er erklärt Herkunft, Division, verlorene Leben und die Umformung der Time Lords. Die Doctor empfängt ihre eigene Biografie als Vortrag ihres Gegners. Eine große Veränderung der Seriengeschichte entsteht dadurch ohne eine gegenwärtige Entscheidung, Untersuchung oder verlässliche Gegenstimme."
    ], [Y("4KR4cLOdIeQ", "Doctor Who · The Timeless Children", 0)], [
      src("YouTube: Doctor Who / BBC Studios", "https://www.youtube.com/watch?v=4KR4cLOdIeQ")
    ], {summary:"Eine Figur erfährt ihre neue Lebensgeschichte gefesselt aus der Präsentation ihres Gegners.",works:[
      "Die Doctor entdeckt über mehrere Folgen beschädigte Division-Akten und entscheidet selbst, welchen Zugang sie öffnet.",
      "Ruth, Tecteun und der Master geben einander widersprechende Fassungen; die Doctor prüft sie an konkreten Erinnerungen.",
      "Die Enthüllung zwingt die Doctor im selben Augenblick zu einer Wahl, deren Ausgang von ihrer Deutung der Vergangenheit abhängt."
    ]}),

    card("SchlechtesWritingSeziert", "Spectre · Blofeld als Pflegebruder", [
      "Franz Oberhauser erklärt Bond, er habe nach dem Tod seiner Eltern bei Oberhausers Vater gelebt. Aus Eifersucht tötete Franz den Vater, nahm den Namen Blofeld an und bezeichnet sich als Urheber von Bonds gesamtem Schmerz. Die Szene bindet mehrere frühere Gegner rückwirkend an ein Kindheitsmotiv, für das diese Filme keine Ursache oder Spur gelegt haben.",
      "Der persönliche Zusammenhang verkleinert zugleich SPECTRE: Aus einem eigenständigen Machtapparat wird die verlängerte Kränkung eines Pflegebruders. Blofelds Behauptung ersetzt den sichtbaren Nachweis, wie er Le Chiffre, Quantum, Silva und ihre verschiedenen Ziele tatsächlich gesteuert hätte."
    ], [Y("k6BOO2bhmOs", "Spectre · Ernst Stavro Blofeld", 0)], [
      src("YouTube: lizenzierter Movieclips-Ausschnitt", "https://www.youtube.com/watch?v=k6BOO2bhmOs"),
      src("007.com: Spectre", "https://www.007.com/the-films/spectre/")
    ], {summary:"Eine späte Verwandtschaft soll vier Filme nachträglich zu einem Plan verbinden.",works:[
      "Blofeld bleibt ein Fremder, der frühere Krisen studiert und Bond gezielt mit ihren Folgen angreift.",
      "SPECTRE übernimmt nachträglich Reste von Quantum und Silvas Netzwerk; der Zusammenhang entsteht institutionell statt familiär.",
      "Eine Pflegebrudergeschichte beginnt bereits in Casino Royale und verändert Bonds Entscheidungen in jedem folgenden Film sichtbar."
    ]}),

    card("SchlechtesWritingSeziert", "Skyfall · die Dusche auf der Chimera", [
      "Bond erkennt an Sévérines Tätowierung, dass sie als Kind in den Sexhandel geriet und heute unter Silvas Kontrolle steht. Er verspricht, ihren Bewachern zu entkommen und Silva zu töten. Kurz darauf betritt er unangekündigt ihre Dusche; die Inszenierung springt von ihrer beschriebenen Abhängigkeit unmittelbar zu Sex und lässt ihre Entscheidung außerhalb der Szene.",
      "Damit arbeitet der Dialog gegen das Bild: Bond benennt Zwang sehr genau, doch die folgende Handlung gibt Sévérine weder einen klaren Wunsch noch einen Plan. Ihr späterer Tod erhält zusätzliches Gewicht, weil die versprochene Befreiung nie als ihr eigener Versuch begonnen hat."
    ], [Y("HYDbThcr2z4", "Skyfall · Bond und Sévérine auf der Chimera", 0)], [
      src("YouTube: Szenenausschnitt", "https://www.youtube.com/watch?v=HYDbThcr2z4"),
      src("007.com: Skyfall", "https://www.007.com/the-films/skyfall/")
    ], {summary:"Die Szene erkennt die Vorgeschichte einer ausgebeuteten Figur und übergeht sie im nächsten Schritt.",works:[
      "Sévérine lädt Bond ausdrücklich ein und legt selbst fest, wie beide Silva erreichen.",
      "Das Gespräch bleibt strategisch; körperliche Nähe folgt erst, nachdem sie Silvas Schiff aus eigener Entscheidung verlassen hat.",
      "Sévérine täuscht Bond zunächst, benutzt ihn gegen ihre Bewacher und gewinnt dadurch ein eigenes Ziel neben seiner Mission."
    ]}),

    // DasIstHierGanzInDerNähe
    card("DasIstHierGanzInDerNähe", "Multihalle Mannheim", [
      "Carlfried Mutschler und Frei Otto errichteten die Multihalle für die Bundesgartenschau 1975 im Herzogenriedpark. Schmale Hemlockleisten wurden zunächst als flaches Gitter ausgelegt, anschließend hochgedrückt und zur doppelt gekrümmten Schale fixiert. Ein Hängemodell lieferte die Form; Photogrammetrie überführte sie in Rechendaten.",
      "Mit 160 mal 115 Metern bildet sie weiterhin die größte freitragende Holzgitterschale der Welt. Das Dach erreicht 20 Meter Höhe und überspannt bis zu 60 Meter. Die Halle befindet sich in Sanierung; aktuelle Baustellenführungen und Zugänge stehen auf der Projektseite. Adresse des Parks: Max-Joseph-Straße 64, Mannheim."
    ], [F("Multihalle Mannheim, Innenraum große Halle.jpg", "Innenraum und Holzgitterschale der Multihalle"), site("https://mannheim-multihalle.de/en/architecture/", "Konstruktion der Multihalle")], [
      src("Multihalle Mannheim: Architektur", "https://mannheim-multihalle.de/en/architecture/"),
      src("Multihalle Mannheim: aktuelle Projektseite", "https://mannheim-multihalle.de/")
    ], {summary:"Mannheim · die größte freitragende Holzgitterschale der Welt."}),

    card("DasIstHierGanzInDerNähe", "Kriemhildenstuhl", [
      "Am Hang über Bad Dürkheim liegt ein römischer Steinbruch, den Soldaten der 22. Legion um 200 n. Chr. bearbeiteten. Keilrillen, glatte Abbauwände und unfertige Blöcke zeigen die Arbeitsschritte direkt im Fels. Eingemeißelte Namen, Einheitenzeichen und Darstellungen blieben an den Arbeitsflächen erhalten.",
      "Der Ort liegt frei zugänglich oberhalb der Stadt und verbindet archäologische Werkspur mit einem Blick über Rheinebene und Weinberge. Vom Mannheimer Zentrum sind es ungefähr 30 Kilometer. Zugang über den Wanderweg am Kästenberg, Bad Dürkheim; Koordinaten laut Pfalz-Touristik: 49.46390, 8.15879."
    ], [F("2014 06 22 028 Roemischer Steinbruch.jpg", "Römische Abbauwand am Kriemhildenstuhl"), site("https://www.pfalz.de/de/sehenswuerdigkeit/roemischer-steinbruch-kriemhildenstuhl", "Arbeitsrillen und Inschriften im Steinbruch")], [
      src("Pfalz-Touristik: Römischer Steinbruch Kriemhildenstuhl", "https://www.pfalz.de/de/sehenswuerdigkeit/roemischer-steinbruch-kriemhildenstuhl")
    ], {summary:"Bad Dürkheim · römischer Steinbruch mit erhaltenen Arbeitsrillen und Legionszeichen."}),

    card("DasIstHierGanzInDerNähe", "Deutsches Musikautomaten-Museum", [
      "Im Schloss Bruchsal stehen über 300 selbstspielende Instrumente aus drei Jahrhunderten. Die Sammlung reicht von kleinen Flötenuhren über Orchestrien bis zur Welte-Philharmonie-Orgel mit 1.269 Pfeifen. Ein Stummfilmkino, eine historische Wirtschaft und ein Tanzsaal zeigen die Maschinen in den Räumen, für die sie gebaut wurden.",
      "Besonders aufschlussreich ist das Phonoliszt-Violina: Ein Klavier und drei Geigen spielen durch gelochte Rollen gesteuert; ein kreisender Rahmen führt jeweils eine Violine an den Bogen. Bruchsal liegt rund 45 Kilometer südlich von Mannheim. Adresse: Schloss Bruchsal, 76646 Bruchsal."
    ], [site("https://www.landesmuseum.de/dmm", "Instrumente des Deutschen Musikautomaten-Museums"), site("https://www.dmm-bruchsal.de/informationen-zum-museum/", "Musikautomaten im Schloss Bruchsal")], [
      src("Badisches Landesmuseum: Deutsches Musikautomaten-Museum", "https://www.landesmuseum.de/dmm"),
      src("Förderverein DMM: Besuchsinformationen", "https://www.dmm-bruchsal.de/informationen-zum-museum/")
    ], {summary:"Bruchsal · mechanische Orchester, selbstspielende Geigen und eine Orgel mit 1.269 Pfeifen."}),

    card("DasIstHierGanzInDerNähe", "Schau- und Sichtungsgarten Hermannshof", [
      "Der Hermannshof in Weinheim erprobt Staudenpflanzungen unter realen Standortbedingungen. Rund 2.000 Arten und Sorten sind nach Lebensbereichen wie Gehölzrand, Prärie, Steppe und Freifläche angeordnet. Die Beete zeigen, wie Konkurrenz, Boden, Licht und jahreszeitlicher Rhythmus eine Pflanzung tragen.",
      "Der Garten ist zugleich Versuchsfeld und öffentlich zugänglicher Entwurfsraum. Besonders lehrreich sind die Gerüstbildner und flächigen Mischungen: Ihre Wirkung bleibt auch nach der Blüte über Halme, Samenstände und Blattmassen bestehen. Entfernung von Mannheim ungefähr 20 Kilometer. Adresse: Babostraße 5, 69469 Weinheim; Eintritt frei."
    ], [site("https://www.sichtungsgarten-hermannshof.de/", "Staudenpflanzung im Hermannshof"), site("https://www.weinheim.de/575505_651577_651702_673701_670023_746746.html", "Schau- und Sichtungsgarten in Weinheim")], [
      src("Schau- und Sichtungsgarten Hermannshof", "https://www.sichtungsgarten-hermannshof.de/"),
      src("Stadt Weinheim: Hermannshof", "https://www.weinheim.de/575505_651577_651702_673701_670023_746746.html")
    ], {summary:"Weinheim · ein öffentlicher Versuchsgarten für präzise geplante Staudenbilder."}),

    card("DasIstHierGanzInDerNähe", "Trullo auf dem Adelberg", [
      "Zwischen den Reben oberhalb von Flonheim steht ein weiß verputztes Rundhaus mit steinernem Kegeldach. Solche Trulli dienten Winzern im 18. Jahrhundert als Schutz vor Wetter und als Unterstand. In der Flonheimer Umgebung sind drei erhalten; eine direkte Ableitung von den apulischen Trulli ist historisch offen.",
      "Der Bau liegt am Rundweg durch das Aulheimer Tal, neben einem Rastplatz mit weitem Blick über das rheinhessische Hügelland. Die kurze Strecke verbindet ihn mit ehemaligen Andesit- und Sandsteinbrüchen. Entfernung von Mannheim ungefähr 65 Kilometer; Ausgangspunkt: Adelberghalle, Berliner Straße 16, 55237 Flonheim."
    ], [site("https://www.rheinhessen.de/a-flonheimer-trullo", "Trullo auf dem Adelberg"), site("https://www.outdooractive.com/de/poi/rheinhessen/flonheimer-trullo/2990054/", "Das Rundhaus zwischen den Weinbergen")], [
      src("Rheinhessen-Touristik: Trullo auf dem Adelberg", "https://www.rheinhessen.de/a-flonheimer-trullo"),
      src("Tourismus Alzey-Worms: Rundwege und Trullowege", "https://www.tourismus-alzey-worms.de/wf-wAssets/docs/entdecken/2025-26-tourismusbroschuere-alzey-worms.pdf")
    ], {summary:"Flonheim · ein steinernes Kegelhaus aus dem 18. Jahrhundert zwischen Weinbergen."}),

    // VisuelleIdeenDieIchKlauenWill
    card("VisuelleIdeenDieIchKlauenWill", "Josef Svoboda · Polyekran", [
      "Für die Expo 58 in Brüssel hängte Josef Svoboda acht verschieden große Projektionsflächen frei vor einen schwarzen Hintergrund. Acht Diaprojektoren und sieben Filmprojektoren bespielten die Flächen synchron. Bilder konnten zugleich nebeneinander stehen, sich widersprechen oder als Bewegung über mehrere Rechtecke springen.",
      "Die übertragbare Idee liegt in der ungleichen Fläche: Eine Präsentation braucht keine einzige Leinwand und kein gleichförmiges Raster. Größe, Abstand und Zeitpunkt erzeugen Hierarchie; der schwarze Zwischenraum wird zum aktiven Schnitt."
    ], [site("http://www.medienkunstnetz.de/works/polyekran/", "Polyekran auf der Expo 58"), site("https://www.svoboda-scenograph.cz/en/polyekran", "Josef Svobodas räumliche Mehrfachprojektion")], [
      src("Media Art Net: Polyekran", "http://www.medienkunstnetz.de/works/polyekran/"),
      src("Stiftung Preußischer Kulturbesitz: Retrotopia – Objektliste", "https://www.smb.museum/fileadmin/website/Presse/Pressematerial/2023/03/07_KGM_230324_Retrotopia_Objektliste_Archiv_Kunstgewerbemuseum_de_en.pdf")
    ], {summary:"Acht ungleich große Leinwände verwandelten Schnitt in räumliche Choreografie."}),

    card("VisuelleIdeenDieIchKlauenWill", "Karel Zeman · Invention for Destruction", [
      "Karel Zeman baute den Film von 1958 nach den gestochenen Illustrationen zu Jules Verne. Kulissen, Kostüme und Miniaturen tragen parallele Schraffuren; animierte Wellen und Rauch folgen derselben Linienlogik. Reale Schauspieler bewegen sich dadurch innerhalb einer gedruckt wirkenden Welt.",
      "Das Verfahren kopiert keinen einzelnen Stich. Es übersetzt eine grafische Regel in jedes Material und jede Bewegung. Für eigene Arbeiten ergibt sich daraus ein starkes Prinzip: Erst eine sichtbare Oberflächenlogik festlegen, dann Fotografie, Raum, Typografie und Animation derselben Logik unterwerfen."
    ], [site("https://karelzemanmuseum.org/invention-for-destruction/", "Invention for Destruction"), site("https://www.filmovyprehled.cz/en/film/396249/invention-for-destruction", "Schauspieler in Zemans gravierter Filmwelt")], [
      src("Karel Zeman Museum: Invention for Destruction", "https://karelzemanmuseum.org/invention-for-destruction/"),
      src("Karel Zeman Museum: restaurierte Filme", "https://karelzemanmuseum.org/karel-zeman-museum/karel-zeman-films/")
    ], {summary:"Ein ganzer Film folgt der Schraffur und Flächenlogik alter Verne-Stiche."}),

    card("VisuelleIdeenDieIchKlauenWill", "April Greiman · Design Quarterly 133", [
      "April Greiman behandelte die Zeitschriftenausgabe von 1986 als einen einzigen, mehrfach gefalteten Bogen von ungefähr 69 mal 193 Zentimetern. Beim Aufklappen erscheint ein lebensgroßes digitales Selbstbild zwischen Pixelvideo, Symbolen, Text, Messlinien und farbigen Flächen.",
      "Die Publikation besitzt gleichzeitig die Zeitfolge eines Hefts und die Gesamtfläche eines Posters. Falze werden zu Schnitten, einzelne Ansichten zu Ausschnitten eines größeren Körpers. Die Idee lässt sich auf Interfaces übertragen: Jede Bildschirmansicht bleibt lokal lesbar und gehört dennoch zu einer räumlich gedachten Gesamtkomposition."
    ], [site("https://www.moma.org/collection/works/172729", "Design Quarterly 133 im MoMA"), site("https://www.aprilgreiman.com/books/alt-dq-does-it-make-sense", "Aufgefaltete Ausgabe 133")], [
      src("Museum of Modern Art: Does It Make Sense?", "https://www.moma.org/collection/works/172729"),
      src("April Greiman: Design Quarterly 133", "https://www.aprilgreiman.com/books/alt-dq-does-it-make-sense")
    ], {summary:"Eine Zeitschrift entfaltet sich zu einem lebensgroßen digitalen Bildraum."}),

    card("VisuelleIdeenDieIchKlauenWill", "Muriel Cooper · Information Landscapes", [
      "Muriel Cooper und das Visible Language Workshop präsentierten 1994 einen Flug durch dreidimensionale Informationsräume. Textzeilen lagen als Ebenen in der Tiefe; Vergrößern, Neigen, Überblenden und räumliche Nähe ersetzten starre Fenster und Seiten. Typografie wurde zur Landschaft, durch die sich der Leser bewegte.",
      "Die überzeugende Idee ist weniger das damalige 3D als die kontinuierliche Orientierung. Information verschwindet beim Wechsel der Ebene nicht, sondern rückt in den Hintergrund und bleibt räumlich auffindbar. Ein heutiges Interface könnte so Verlauf und Zusammenhang sichtbar halten, statt jede Ansicht durch die nächste zu ersetzen."
    ], [site("https://www.media.mit.edu/posts/muriel-cooper-lasting-imprint/", "Muriel Cooper und Information Landscapes"), F("1994 Ted5 Muriel Cooper.png", "Dreidimensionale Typografie in Information Landscapes")], [
      src("MIT Media Lab: Muriel Cooper’s Lasting Imprint", "https://www.media.mit.edu/posts/muriel-cooper-lasting-imprint/"),
      src("MIT: Rethinking the Book – Information Landscapes", "https://acg.media.mit.edu/projects/thesis/DSThesis.pdf")
    ], {summary:"Typografische Ebenen blieben beim Navigieren als räumliche Umgebung erhalten."}),

    card("VisuelleIdeenDieIchKlauenWill", "Barbara Stauffacher Solomon · Sea Ranch Supergraphics", [
      "Barbara Stauffacher Solomon malte 1965 im Moonraker Athletic Center von Sea Ranch schwarze, rote und blaue Streifen, Kreise, Pfeile und übergroße Buchstaben über Wände, Ecken und Decken. Die Grafik rahmt den Raum weder ein noch dekoriert sie einzelne Flächen; sie setzt sich über Bauteilgrenzen hinweg.",
      "Das Verfahren erzeugt mit Farbe eine zweite Architektur. Ein Streifen zieht eine niedrige Decke in die Länge, ein Kreis verbindet zwei Wände, ein Buchstabe wird zur Türmarke und zum abstrakten Körper zugleich. Maßstab und Kante übernehmen Aufgaben, für die sonst zusätzliche Bauteile nötig wären."
    ], [site("https://www.sfmoma.org/exhibition/barbara-stauffacher-solomon-strips-of-stripes/", "Supergraphics von Barbara Stauffacher Solomon"), F("Locker Room at Sea Ranch’s Moonraker Athletic Center.jpg", "Supergraphics im Moonraker Athletic Center")], [
      src("SFMOMA: Barbara Stauffacher Solomon – Strips of Stripes", "https://www.sfmoma.org/exhibition/barbara-stauffacher-solomon-strips-of-stripes/"),
      src("SFMOMA: The Sea Ranch – Architecture, Environment, and Idealism", "https://www.sfmoma.org/press/release/the-sea-ranch/")
    ], {summary:"Grafik überspringt Wände und Decken und wird selbst zur Raumform."})
  );
})();
