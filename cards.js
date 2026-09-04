const mappedMedia=(key)=>window.MEDIA_FILES?.[key];
const C=(query,caption)=>{const mapped=mappedMedia(query);return{type:"commons",query,file:typeof mapped==="string"?mapped:mapped?.file,remote:typeof mapped==="object"?mapped:undefined,caption}};
const F=(file,caption)=>{const mapped=mappedMedia(file);return{type:"commons",query:file,file,remote:typeof mapped==="object"?mapped:undefined,caption}};
const I=(src,href,caption,credit)=>({type:"image",src,href,caption,credit});
const Y=(id,caption)=>({type:"youtube",id,caption});
const S=(label,url)=>({label,url});

window.KARTEN=[
  {
    category:"Aphorismen",kind:"quote",title:"„Es denkt, sollte man sagen, so wie man sagt: es blitzt.“",byline:"Georg Christoph Lichtenberg · Sudelbuch K 76",
    detail:[
      "Lichtenberg setzt beim Satz „Ich denke“ an. Die Grammatik legt ein Ich als Urheber fest, bevor geklärt ist, wie Denken entsteht. Seine Fassung behandelt Denken als Geschehen. Der Vergleich mit dem Blitz gibt dem Vorgang Plötzlichkeit, Energie und eine Ursache, die dem Bewusstsein vorausliegt.",
      "Friedrich Nietzsche griff die Beobachtung später auf: Ein Gedanke komme, wenn „er“ wolle. In der Philosophie des Geistes führt dieselbe Frage zu Modellen, in denen Wahrnehmung, Erinnerung und Sprache Gedanken hervorbringen, während das bewusste Ich einen Teil dieser Vorgänge erst im Nachhinein ordnet. Lichtenbergs Stärke liegt in der Form: Ein einziges Pronomen verändert das ganze Modell des Denkens."
    ],
    media:[C("Georg Christoph Lichtenberg engraving portrait","Georg Christoph Lichtenberg")],
    sources:[S("Lichtenberg: Sudelbücher bei Zeno.org","http://www.zeno.org/Literatur/M/Lichtenberg,+Georg+Christoph/Aphorismen/Sudelbücher")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Die Heuchelei ist eine Huldigung, die das Laster der Tugend erweist.“",byline:"François de La Rochefoucauld · Maxime 218",
    detail:[
      "La Rochefoucauld beschreibt Heuchelei als unfreiwilliges Urteil über die Macht moralischer Maßstäbe. Wer eine Tugend vorspielt, hält ihre öffentliche Anerkennung für so wichtig, dass selbst der eigene Vorteil ihre Sprache annehmen muss. Die Täuschung bestätigt damit den Wert dessen, was sie imitiert.",
      "Die Maximen untersuchen Eigenliebe, Eitelkeit, Ruhmsucht und Berechnung in scheinbar edlen Handlungen. Ihre Aufgabe besteht weder in Trost noch in moralischer Erbauung. Sie machen Motive prüfbar. Der französische Wortlaut lautet: „L’hypocrisie est un hommage que le vice rend à la vertu.“ Die deutsche Fassung folgt eng dem Satzbau des Originals."
    ],
    media:[C("François de La Rochefoucauld portrait","François de La Rochefoucauld")],
    original:{label:"Französischer Wortlaut · Maxime 218",text:"L’hypocrisie est un hommage que le vice rend à la vertu."},
    sources:[S("Réflexions ou sentences et maximes morales · Gallica","https://gallica.bnf.fr/ark:/12148/bpt6k1040569")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Das Herz hat seine Gründe, die die Vernunft nicht kennt.“",byline:"Blaise Pascal · Pensées, Fragment 423 (Lafuma)",
    detail:[
      "Pascal verwendet „Herz“ als Erkenntnisvermögen. Es erfasst erste Prinzipien, religiöse Gewissheit und die Bindung an andere Menschen unmittelbar. Die diskursive Vernunft arbeitet mit Beweisen und Folgerungen; sie beginnt bereits bei Voraussetzungen, die sie selbst kaum vollständig begründen kann.",
      "Der Satz gehört zu einer Passage über Glauben und Gotteserkenntnis. Seine moderne Verwendung als Lob spontaner Gefühle verkürzt den Zusammenhang. Pascal verteilt Erkenntnis auf verschiedene Fähigkeiten. Mathematik, Logik, Intuition und Liebe besitzen je eigene Gegenstände und Verfahren. Die Pointe begrenzt den Anspruch der Vernunft, während ihr genaues Arbeiten seinen vollen Wert behält."
    ],
    media:[C("Blaise Pascal portrait Philippe de Champaigne","Blaise Pascal, Porträt von Philippe de Champaigne")],
    original:{label:"Französischer Wortlaut",text:"Le cœur a ses raisons que la raison ne connaît point."},
    sources:[S("Pensées · Wikisource","https://fr.wikisource.org/wiki/Pens%C3%A9es/%C3%89dition_de_Port-Royal")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Man muss noch Chaos in sich haben, um einen tanzenden Stern gebären zu können.“",byline:"Friedrich Nietzsche · Also sprach Zarathustra, Vorrede 5",
    detail:[
      "Der Satz steht in Zarathustras Rede über den „letzten Menschen“. Dieser sucht Bequemlichkeit, Sicherheit und ein Leben ohne große Gefahr. Dem stellt Zarathustra den Menschen gegenüber, der innere Spannung aushält und aus ihr eine neue Form gewinnt.",
      "„Chaos“ meint hier rohe, ungeordnete Möglichkeiten. Der „tanzende Stern“ ist eine geschaffene Gestalt: beweglich, sichtbar und mit eigener Bahn. Nietzsche verbindet Geburt, Kunst und Selbstverwandlung. Der Satz verlangt deshalb mehr als Unruhe oder eine Pose des Genies. Er beschreibt Form als Ergebnis einer Auseinandersetzung, in der widersprüchliche Kräfte lange genug wirksam bleiben."
    ],
    media:[C("Friedrich Nietzsche 1882 portrait","Friedrich Nietzsche, 1882")],
    sources:[S("Also sprach Zarathustra · Deutsches Textarchiv","https://www.deutschestextarchiv.de/book/show/nietzsche_zarathustra01_1883")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Je näher man ein Wort ansieht, desto ferner sieht es zurück.“",byline:"Karl Kraus · Pro domo et mundo",
    detail:[
      "Kraus macht aus dem Wort einen Gegenstand mit eigenem Blick. Genaues Lesen führt tiefer in Herkunft, Mehrdeutigkeit, Klang und früheren Gebrauch. Das Wort erscheint dadurch älter und größer als die jeweilige Absicht des Schreibenden.",
      "Für Kraus war Sprachkritik zugleich Gesellschaftskritik. Zeitungen, Ämter und Politik verrieten ihre Denkweisen in festen Wendungen, falschen Bildern und gedankenlos wiederholten Formeln. Der Aphorismus beschreibt seine Arbeitsweise: Nähe zum einzelnen Wort öffnet historische Ferne. Sprache dient hier als Archiv. Wer sie genau ansieht, begegnet den Urteilen und Gewohnheiten, die bereits in ihr abgelagert sind."
    ],
    media:[C("Karl Kraus portrait","Karl Kraus")],
    sources:[S("Karl Kraus: Pro domo et mundo · Internet Archive","https://archive.org/details/prodomoetmundo00krau")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Die Gesellschaft besteht aus zwei großen Klassen: denen, die mehr Mahlzeiten als Appetit haben, und denen, die mehr Appetit als Mahlzeiten haben.“",byline:"Nicolas Chamfort · Maximes et pensées",
    detail:[
      "Chamfort ordnet die Gesellschaft nach einem einfachen Verhältnis: Nahrung und Bedürfnis. Die einen besitzen Überfluss und verlieren den Appetit; die anderen behalten den Hunger und erhalten zu wenig. Die Parallelform legt beide Gruppen in denselben Satz und zeigt Ungleichheit als Verteilung.",
      "Der Witz stammt aus einer Epoche, in der der französische Hof demonstrativen Luxus pflegte und wiederkehrende Versorgungskrisen die Bevölkerung trafen. Chamfort schrieb als Beobachter der Salons und später als Anhänger der Revolution. Die elegante Form verschärft den Befund. Sie macht aus einer abstrakten Klassenordnung zwei Körper am Tisch."
    ],
    media:[C("Nicolas Chamfort portrait engraving","Nicolas Chamfort")],
    original:{label:"Französischer Wortlaut",text:"La société est composée de deux grandes classes : ceux qui ont plus de dîners que d’appétit, et ceux qui ont plus d’appétit que de dîners."},
    sources:[S("Chamfort: Maximes et pensées · Wikisource","https://fr.wikisource.org/wiki/Maximes_et_Pens%C3%A9es")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Wir suchen überall das Unbedingte, und finden immer nur Dinge.“",byline:"Novalis · Blüthenstaub, Fragment 1",
    detail:[
      "Der Satz lebt aus der gemeinsamen Wortwurzel. Das Unbedingte bezeichnet das Absolute: etwas, dessen Sein von keiner weiteren Voraussetzung abhängt. Dinge begegnen uns dagegen als begrenzte, voneinander abhängige Gegenstände.",
      "Novalis fasst damit ein Grundmotiv der Frühromantik. Das Denken sucht Ganzheit, Ursprung und endgültigen Sinn; Erfahrung liefert einzelne Formen, Beziehungen und Zeichen. Diese Spannung treibt Philosophie, Religion und Kunst an. Das Wortspiel gibt ihr eine genaue Struktur. Jeder gefundene Gegenstand gehört zur Welt der Bedingungen und verschiebt die Suche nach dem Grund erneut."
    ],
    media:[C("Novalis portrait","Novalis")],
    sources:[S("Novalis: Blüthenstaub · Wikisource","https://de.wikisource.org/wiki/Bl%C3%BCthenstaub")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Das Gute, wenn kurz, ist doppelt gut.“",byline:"Baltasar Gracián · Handorakel, 105",
    detail:[
      "Gracián spricht über Maß. Eine gute Sache gewinnt durch Kürze, weil ihre Wirkung geschlossen bleibt und die Aufmerksamkeit des Gegenübers achtet. Im vollständigen Aphorismus folgt die Ergänzung, dass selbst Schlechtes erträglicher wird, sobald es kurz bleibt.",
      "Das Handorakel versammelt Regeln für Urteilskraft, Auftreten und kluges Handeln am Hof. Kürze ist bei Gracián eine Form der Kontrolle. Der Schreibende wählt, verdichtet und beendet rechtzeitig. Seine eigenen Sätze führen das vor: Sie lassen Raum für Anwendung, verlangen langsames Lesen und bleiben durch ihre Form im Gedächtnis."
    ],
    media:[C("Baltasar Gracian portrait","Baltasar Gracián")],
    original:{label:"Spanischer Wortlaut",text:"Lo bueno, si breve, dos veces bueno; y aun lo malo, si poco, no tan malo."},
    sources:[S("Oráculo manual y arte de prudencia · Wikisource","https://es.wikisource.org/wiki/Or%C3%A1culo_manual_y_arte_de_prudencia")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Jeder hält das Ende seines Gesichtskreises für das Ende der Welt.“",byline:"Arthur Schopenhauer · Parerga und Paralipomena",
    detail:[
      "„Gesichtskreis“ bezeichnet zugleich den sichtbaren Horizont und die Reichweite des eigenen Urteils. Erfahrungen, Bildung, Sprache und gesellschaftliche Stellung begrenzen, was jemand wahrnimmt. Aus dieser Begrenzung entsteht leicht ein umfassendes Weltbild.",
      "Schopenhauers Satz richtet sich an jeden Leser. Er beschreibt eine gewöhnliche Bewegung des Denkens: Die Grenze der eigenen Kenntnis erscheint als Grenze des Gegenstands. Mehr Perspektiven erweitern den Horizont, doch jeder neue Standort bringt wieder einen Rand hervor. Der Aphorismus fordert deshalb eine dauernde Prüfung des eigenen Maßstabs."
    ],
    media:[C("Arthur Schopenhauer portrait 1859","Arthur Schopenhauer, 1859")],
    sources:[S("Parerga und Paralipomena · Zeno.org","http://www.zeno.org/Philosophie/M/Schopenhauer,+Arthur/Parerga+und+Paralipomena")]
  },
  {
    category:"Aphorismen",kind:"quote",title:"„Der Weg hinauf und hinab ist ein und derselbe.“",byline:"Heraklit · Fragment B 60",
    detail:[
      "Ein Weg besitzt dieselbe Strecke, dieselben Kurven und denselben Untergrund. Aufstieg und Abstieg entstehen durch Richtung und Standort des Gehenden. Heraklit findet den Gegensatz innerhalb einer gemeinsamen Ordnung.",
      "Das Fragment gehört zu einer Philosophie, die Feuer, Wandel, Spannung und Logos zusammen denkt. Gegensätze bilden Verhältnisse: Tag und Nacht, Leben und Tod, Wachen und Schlafen. Ihre Verbindung hebt den Unterschied keineswegs auf. Sie zeigt, wie zwei Bewegungen aus derselben Struktur hervorgehen. Der kurze Satz macht diese Einheit körperlich erfahrbar; jeder Bergweg liefert das Modell."
    ],
    media:[C("Heraclitus bust","Heraklit, antike Büste")],
    original:{label:"Griechischer Wortlaut · Fragment B 60",text:"ὁδὸς ἄνω κάτω μία καὶ ὡυτή."},
    sources:[S("Heraklit-Fragmente · Wikisource","https://de.wikisource.org/wiki/Fragmente_des_Heraklit")]
  },

  {
    category:"Historische Koinzidenzen",title:"Charles Darwin und Abraham Lincoln · 12. Februar 1809",
    detail:[
      "Charles Darwin wurde in Shrewsbury in eine wohlhabende englische Arztfamilie geboren. Abraham Lincoln kam am selben Tag nahe Hodgenville in Kentucky zur Welt. Seine Eltern lebten als Farmer an der damaligen Siedlungsgrenze. Beide Männer erreichten ihre wichtigste öffentliche Wirkung rund fünfzig Jahre später.",
      "1859 erschien Darwins „On the Origin of Species“. Lincoln gewann 1860 die Präsidentschaftswahl; der Bürgerkrieg begann wenige Monate nach seinem Amtsantritt. 1863 verkündete er die Emanzipationsproklamation. Das gemeinsame Geburtsdatum verbindet zwei große Veränderungen des 19. Jahrhunderts: eine neue Erklärung der biologischen Abstammung und den politischen Kampf um die Abschaffung der Sklaverei in den Vereinigten Staaten."
    ],
    media:[C("Charles Darwin photograph 1868","Charles Darwin"),C("Abraham Lincoln O-77 matte collodion print","Abraham Lincoln")],
    sources:[S("Darwin Correspondence Project: Darwin’s life","https://www.darwinproject.ac.uk/charles-darwin"),S("Abraham Lincoln Birthplace · National Park Service","https://www.nps.gov/abli/index.htm")]
  },
  {
    category:"Historische Koinzidenzen",title:"Große Pyramide und letzte Wollhaarmammuts",
    detail:[
      "Die Große Pyramide von Gizeh entstand im 26. Jahrhundert v. Chr. als Grabmal des Pharaos Cheops. Zu dieser Zeit waren Wollhaarmammuts auf dem eurasischen Festland bereits weitgehend verschwunden. Eine kleine Population lebte jedoch auf der abgelegenen Wrangelinsel im Arktischen Ozean weiter.",
      "Knochenfunde und Radiokarbondaten reichen dort bis etwa 1650 v. Chr. Die Inseltiere überlebten die Fertigstellung der Pyramide damit ungefähr neun Jahrhunderte. Ihre geringe Körpergröße, Isolation und genetischen Veränderungen zeigen die Bedingungen einer Reliktpopulation. Monumentale Hochkultur am Nil und das letzte Kapitel einer eiszeitlichen Tierart gehörten für lange Zeit derselben Welt an."
    ],
    media:[C("Great Pyramid of Giza Khufu","Große Pyramide von Gizeh"),C("Woolly mammoth reconstruction","Wollhaarmammut, Rekonstruktion"),C("Wrangel Island tundra","Wrangelinsel")],
    sources:[S("The last woolly mammoths on Wrangel Island · Quaternary Science Reviews","https://doi.org/10.1016/j.quascirev.2019.105884"),S("Great Pyramid of Giza · Encyclopaedia Britannica","https://www.britannica.com/topic/Great-Pyramid-of-Giza")]
  },
  {
    category:"Historische Koinzidenzen",title:"Oxford und Tenochtitlan",
    detail:[
      "Unterricht in Oxford ist seit etwa 1096 belegt. Die Universität wuchs aus Schulen, Wohnhäusern, Kollegien und rechtlichen Privilegien. Tenochtitlan wurde 1325 auf Inseln im Texcoco-See gegründet und stieg 1428 zum Zentrum des aztekischen Dreibunds auf.",
      "Der Abstand von mehr als zwei Jahrhunderten wirkt überraschend, weil Schulbücher europäische Universitäten gern dem Mittelalter und das Aztekenreich einer eigenen, zeitlosen Vorgeschichte zuordnen. Beide Institutionen gehörten jedoch zur spätmittelalterlichen Welt. Mesoamerika besaß zu diesem Zeitpunkt bereits viele Jahrhunderte städtischer Geschichte: Teotihuacán, Monte Albán, Tula und zahlreiche Maya-Städte lagen weit vor der Gründung Tenochtitlans."
    ],
    media:[C("University of Oxford oldest colleges","Oxford"),C("Tenochtitlan mural Diego Rivera","Tenochtitlan, Rekonstruktion"),C("Map of Tenochtitlan 1524","Plan von Tenochtitlan, 1524")],
    sources:[S("University of Oxford: History","https://www.ox.ac.uk/about/organisation/history"),S("Templo Mayor Museum: Mexica history","https://www.templomayor.inah.gob.mx/")]
  },
  {
    category:"Historische Koinzidenzen",title:"1889: Eiffelturm, Sternennacht, Nintendo",
    detail:[
      "Der Eiffelturm öffnete im März 1889 zur Pariser Weltausstellung. Vincent van Gogh malte „Die Sternennacht“ im Juni in Saint-Rémy. Am 23. September gründete Fusajirō Yamauchi in Kyoto die Firma Nintendo Koppai und stellte handgefertigte Hanafuda-Spielkarten her.",
      "Die drei Ereignisse stehen heute für verschiedene Epochen: Eisenarchitektur des 19. Jahrhunderts, moderne Malerei und digitale Unterhaltung. Im gemeinsamen Jahr zeigen sie drei Arbeitsformen. Ein Ingenieurbüro organisierte industrielle Fertigung, ein Maler übersetzte Erinnerung und Beobachtung in rhythmische Farbe, ein kleiner Betrieb verband traditionelles Kartenspiel mit einem neuen Markennamen. Nintendos Weg zur Elektronik begann erst viele Jahrzehnte später."
    ],
    media:[C("Eiffel Tower 1889 exposition","Eiffelturm auf der Weltausstellung 1889"),C("Van Gogh Starry Night high resolution","Vincent van Gogh: Die Sternennacht"),C("Nintendo hanafuda cards early","Frühe Nintendo-Hanafuda")],
    sources:[S("Musée d’Orsay: Bau des Eiffelturms","https://www.musee-orsay.fr/en/artworks/the-eiffel-tower-115555"),S("MoMA: The Starry Night","https://www.moma.org/collection/works/79802"),S("Nintendo: Unternehmensgeschichte","https://www.nintendo.co.jp/corporate/en/history/index.html")]
  },
  {
    category:"Historische Koinzidenzen",title:"Charlie Chaplin und Adolf Hitler · April 1889",
    detail:[
      "Charlie Chaplin wurde am 16. April 1889 in London geboren, Adolf Hitler am 20. April in Braunau am Inn. Beide trugen später einen kleinen Zahnbürstenbart. Chaplin hatte diese Form bereits als Filmfigur etabliert, lange bevor Hitler sie zum Bestandteil seiner politischen Erscheinung machte.",
      "In „Der große Diktator“ von 1940 spielte Chaplin beide Seiten der Ähnlichkeit: den jüdischen Friseur und den Diktator Adenoid Hynkel. Körperhaltung, Bart, Uniform, Rede und Filmschnitt zerlegen die Technik faschistischer Selbstdarstellung. Der Film entstand während des Krieges in Europa und vor dem Kriegseintritt der USA. Chaplin verwandelte eine zufällige äußere Nähe in eine direkte politische Parodie."
    ],
    media:[C("Charlie Chaplin portrait 1921","Charlie Chaplin"),C("Adolf Hitler 1938 portrait","Adolf Hitler")],
    sources:[S("Charlie Chaplin: The Great Dictator","https://www.charliechaplin.com/en/films/7-the-great-dictator"),S("United States Holocaust Memorial Museum: Hitler","https://encyclopedia.ushmm.org/content/en/article/adolf-hitler")]
  },
  {
    category:"Historische Koinzidenzen",title:"Anne Frank und Martin Luther King Jr. · Jahrgang 1929",
    detail:[
      "Martin Luther King Jr. wurde am 15. Januar 1929 in Atlanta geboren. Anne Frank folgte am 12. Juni in Frankfurt am Main. Fotografien trennen beide Lebensläufe optisch: Frank bleibt als Jugendliche sichtbar, King erscheint als erwachsener Pfarrer und Redner der Bürgerrechtsbewegung.",
      "Anne Frank starb Anfang 1945 im Konzentrationslager Bergen-Belsen, wenige Wochen vor dessen Befreiung. King war damals sechzehn Jahre alt. 1955 begann mit dem Busboykott von Montgomery seine nationale Rolle; 1968 wurde er ermordet. Das gemeinsame Geburtsjahr setzt nationalsozialistische Verfolgung in Europa und den Kampf gegen Rassentrennung in den USA in einen biografischen Zeitrahmen."
    ],
    media:[C("Anne Frank 1942 photograph","Anne Frank"),C("Martin Luther King 1964 portrait","Martin Luther King Jr.")],
    sources:[S("Anne Frank House: Anne Frank’s life","https://www.annefrank.org/en/anne-frank/who-was-anne-frank/"),S("The King Center: Biography","https://thekingcenter.org/about-tkc/martin-luther-king-jr/")]
  },
  {
    category:"Historische Koinzidenzen",title:"Faxgerät und Samurai",
    detail:[
      "Der schottische Uhrmacher Alexander Bain patentierte 1843 ein Verfahren, das Bilder zeilenweise abtastete und elektrisch übertrug. Sender und Empfänger arbeiteten mit synchronisierten Pendeln. Frederick Bakewell und Giovanni Caselli verbesserten die Idee; Casellis Pantelegraph übermittelte in den 1860er Jahren Handschriften im kommerziellen Betrieb.",
      "In Japan bildeten Samurai zur selben Zeit weiterhin einen erblichen Stand. Erst die Meiji-Reformen beseitigten ihre Privilegien: 1871 verschwanden die feudalen Lehen, 1873 kam die allgemeine Wehrpflicht, 1876 das öffentliche Tragen von Schwertern als Standesrecht. Elektrische Bildübertragung und feudale Kriegerordnung überlappten mehr als drei Jahrzehnte."
    ],
    media:[C("Alexander Bain facsimile machine","Bains frühes Faxverfahren"),C("Pantelegraph Caselli","Casellis Pantelegraph"),C("Samurai 1860 photograph","Samurai, Fotografie aus den 1860er Jahren")],
    sources:[S("Science Museum Group: Alexander Bain facsimile","https://collection.sciencemuseumgroup.org.uk/people/cp36902/alexander-bain"),S("The Metropolitan Museum of Art: Samurai","https://www.metmuseum.org/toah/hd/samu/hd_samu.htm")]
  },
  {
    category:"Historische Koinzidenzen",title:"Star Wars und die letzte Guillotinierung in Frankreich · 1977",
    detail:[
      "„Star Wars“ startete am 25. Mai 1977 in amerikanischen Kinos und erreichte Frankreich im Oktober. Am 10. September desselben Jahres wurde Hamida Djandoubi im Gefängnis Baumettes in Marseille hingerichtet. Es war die letzte Vollstreckung eines Todesurteils durch die Guillotine in Frankreich und Westeuropa.",
      "François Mitterrand gewann 1981 die Präsidentschaftswahl mit dem Versprechen, die Todesstrafe abzuschaffen. Justizminister Robert Badinter brachte das Gesetz im selben Jahr durch das Parlament. Die zeitliche Nähe verbindet ein weltweites Zukunftsbild aus Raumfahrt und Robotik mit einem Strafgerät, das während der Französischen Revolution zum staatlichen Standard geworden war."
    ],
    media:[C("Star Wars 1977 cinema marquee","Star Wars im Kino, 1977"),C("French guillotine prison","Französische Guillotine im Gefängnismuseum Hỏa Lò")],
    sources:[S("INA: La dernière exécution capitale en France","https://www.ina.fr/ina-eclaire-actu/1977-la-derniere-execution-capitale-en-france"),S("Assemblée nationale: Abschaffung der Todesstrafe","https://www.assemblee-nationale.fr/dyn/histoire-et-patrimoine/peine-de-mort")]
  },
  {
    category:"Historische Koinzidenzen",title:"London Underground und Sklaverei in den USA · 1863",
    detail:[
      "Die Metropolitan Railway nahm am 10. Januar 1863 den Betrieb zwischen Paddington und Farringdon auf. Dampflokomotiven zogen beleuchtete Holzwagen durch flach gebaute Tunnel unter London. Damit begann das älteste U-Bahn-System der Welt.",
      "In den Vereinigten Staaten galt Sklaverei weiterhin als Rechtsordnung zahlreicher Bundesstaaten. Lincolns Emanzipationsproklamation trat am 1. Januar 1863 in Kraft und erklärte versklavte Menschen in den rebellierenden Gebieten für frei. Ihre Reichweite hing vom Vormarsch der Unionsarmee ab. Der 13. Verfassungszusatz beendete Sklaverei landesweit im Dezember 1865, mit einer Ausnahme für strafrechtliche Zwangsarbeit."
    ],
    media:[C("Metropolitan Railway 1863 train","Metropolitan Railway, 1863"),C("London Underground Baker Street 1863","Baker Street Station"),C("Emancipation Proclamation first page","Emanzipationsproklamation")],
    sources:[S("London Transport Museum: Metropolitan Railway","https://www.ltmuseum.co.uk/collections/stories/transport/metropolitan-railway"),S("US National Archives: Emancipation Proclamation","https://www.archives.gov/milestone-documents/emancipation-proclamation")]
  },
  {
    category:"Historische Koinzidenzen",title:"Orville Wright · 1903 bis Hiroshima",
    detail:[
      "Orville Wright steuerte am 17. Dezember 1903 den ersten motorisierten, kontrollierten Flug des Wright Flyer. Er dauerte zwölf Sekunden und führte über 36 Meter. Sein Bruder Wilbur lief neben der Maschine; John Daniels hielt den Augenblick auf einer Glasplatte fest.",
      "Orville starb 1948. In diesen 45 Jahren wurden Flugzeuge aus Holz und Stoff zu Verkehrsmaschinen, Jagdflugzeugen, Langstreckenbombern und Düsenflugzeugen. Im August 1945 warfen B-29-Bomber Atombomben auf Hiroshima und Nagasaki. Wright erlebte den Weg vom ersten kurzen Flug bis zur Verbindung von Luftfahrt und Kernwaffe in der Spanne eines Erwachsenenlebens."
    ],
    media:[C("First flight Wright Flyer 1903 John Daniels","Erster Motorflug, 17. Dezember 1903"),C("Orville Wright portrait","Orville Wright"),C("Enola Gay 1945","B-29 Enola Gay")],
    sources:[S("Smithsonian: 1903 Wright Flyer","https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000"),S("Atomic Heritage Foundation: Hiroshima","https://ahf.nuclearmuseum.org/ahf/history/hiroshima-and-nagasaki-bombings/")]
  },

  {
    category:"Philosophische Begriffe",title:"Dasein",summary:"Menschliches Sein, dem es im eigenen Leben um dieses Sein geht.",
    detail:[
      "Martin Heidegger verwendet „Dasein“ als Namen für die menschliche Weise zu sein. Menschen begegnen der Welt bereits in Tätigkeiten, Beziehungen, Werkzeugen, Erwartungen und Stimmungen. Ein Hammer erscheint zuerst als etwas zum Hämmern; seine messbaren Eigenschaften treten im praktischen Umgang zurück. Heidegger nennt diese Grundform In-der-Welt-sein.",
      "Die zeitliche Struktur des Daseins heißt Sorge. Menschen entwerfen Möglichkeiten, tragen eine übernommene Vergangenheit und leben in einer Gegenwart des Besorgens. Der Tod begrenzt diesen Möglichkeitsraum und macht das eigene Leben als Ganzes dringlich. „Eigentlichkeit“ bezeichnet ein wacheres Verhältnis zu den eigenen Möglichkeiten und zur Endlichkeit. Der Begriff beschreibt weder eine Seele noch eine biologische Art. Er untersucht die Bedingungen, unter denen überhaupt etwas Bedeutung erhält."
    ],
    media:[C("Martin Heidegger portrait","Martin Heidegger")],
    sources:[S("Stanford Encyclopedia of Philosophy: Martin Heidegger","https://plato.stanford.edu/entries/heidegger/")]
  },
  {
    category:"Philosophische Begriffe",title:"Kategorischer Imperativ",summary:"Eine Handlungsregel ist moralisch, wenn sie als allgemeines Gesetz für alle vernünftigen Wesen gilt.",
    detail:[
      "Immanuel Kant prüft Maximen: persönliche Regeln, nach denen jemand handelt. Eine Maxime besteht den Test, wenn ihre Verallgemeinerung als Gesetz denkbar und zugleich gewollt werden kann. Ein falsches Versprechen scheitert, weil eine allgemeine Praxis falscher Versprechen die Institution des Versprechens zerstören würde.",
      "Kant formuliert denselben Grundgedanken aus mehreren Blickrichtungen. Die Formel der Menschheit verlangt, jede Person stets zugleich als Zweck zu behandeln. Die Formel der Autonomie versteht moralische Subjekte als Mitgesetzgeber. Das Reich der Zwecke bezeichnet eine Gemeinschaft freier Personen unter gemeinsamen Gesetzen. Moral beruht hier auf Selbstgesetzgebung durch Vernunft. Folgen bleiben für Klugheit und politische Urteilskraft wichtig; der moralische Wert einer Maxime entsteht aus ihrer Form und aus der Achtung vor Personen."
    ],
    media:[C("Immanuel Kant portrait Doebler","Immanuel Kant")],
    sources:[S("Stanford Encyclopedia of Philosophy: Kant’s Moral Philosophy","https://plato.stanford.edu/entries/kant-moral/")]
  },
  {
    category:"Philosophische Begriffe",title:"Conatus",summary:"Das Bestreben eines einzelnen Wesens, seine Existenz und Wirksamkeit zu erhalten.",
    detail:[
      "Bei Thomas Hobbes bezeichnet conatus den kleinsten Anfang einer Bewegung. Baruch de Spinoza macht daraus ein Grundprinzip: Jedes einzelne Ding strebt, soweit es aus eigener Kraft kann, in seinem Sein zu verharren. Beim Menschen erscheint dieses Streben körperlich und geistig zugleich.",
      "Bewusst gewordener conatus heißt Begierde. Freude ist der Übergang zu größerer Tätigkeitsmacht, Traurigkeit der Übergang zu geringerer. Spinozas Ethik ordnet Handlungen danach, ob sie aus angemessener Erkenntnis und eigener Kraft entstehen oder aus Affekten, deren Ursachen der Mensch kaum versteht. Selbsterhaltung bedeutet deshalb mehr als Überleben. Sie umfasst die Entwicklung der Fähigkeiten, mit anderen zusammenzuarbeiten, klarer zu erkennen und freier zu handeln."
    ],
    media:[C("Baruch Spinoza portrait","Baruch de Spinoza")],
    sources:[S("Stanford Encyclopedia of Philosophy: Spinoza’s Psychological Theory","https://plato.stanford.edu/entries/spinoza-psychological/")]
  },
  {
    category:"Philosophische Begriffe",title:"Epoché",summary:"Die gewohnte Annahme einer unabhängig vorhandenen Welt wird methodisch eingeklammert.",
    detail:[
      "Edmund Husserl beginnt bei der natürlichen Einstellung: Im Alltag nehmen wir selbstverständlich an, dass Dinge, Menschen und Räume vorhanden sind. Die Epoché setzt diese Geltung vorläufig außer Kraft. Der Blick richtet sich nun darauf, wie ein Gegenstand im Bewusstsein erscheint und durch verschiedene Ansichten hindurch als derselbe gemeint bleibt.",
      "Ein Würfel zeigt jeweils nur einige Flächen; dennoch ist er als ganzer Würfel gegeben. Erinnerung, Erwartung, Körperbewegung und Horizont ergänzen die aktuelle Ansicht. Die phänomenologische Reduktion untersucht solche Strukturen der Gegebenheit. Sie führt zum Begriff der Intentionalität: Bewusstsein ist stets Bewusstsein von etwas. Die Epoché dient als Wechsel der Untersuchungsebene. Ihre Frage lautet, wie Weltbezug zustande kommt und welchen Sinn „Wirklichkeit“ in Erfahrung besitzt."
    ],
    media:[C("Edmund Husserl 1910 portrait","Edmund Husserl")],
    sources:[S("Stanford Encyclopedia of Philosophy: Husserl","https://plato.stanford.edu/entries/husserl/")]
  },
  {
    category:"Philosophische Begriffe",title:"Dialektik",summary:"Ein Verfahren, das Begriffe und Verhältnisse durch ihre inneren Spannungen entwickelt.",
    detail:[
      "Bei Platon ist Dialektik die Kunst des Fragens, Unterscheidens und Zusammenführens. Sie prüft Definitionen im Gespräch und führt von einzelnen Annahmen zu ihren Voraussetzungen. Bei Hegel wird Dialektik zur Bewegung der Sache selbst: Eine Bestimmung erzeugt durch ihre Einseitigkeit einen Widerspruch und geht in eine reichere Bestimmung über.",
      "Hegels „Aufhebung“ trägt drei Bedeutungen: beenden, bewahren und auf eine neue Ebene heben. Die populäre Folge These–Antithese–Synthese trifft dieses Verfahren nur ungefähr. Karl Marx übernimmt die Aufmerksamkeit für Widerspruch und Entwicklung und bezieht sie auf Arbeit, Eigentum, Klassen und materielle Produktion. „Dialektik“ bezeichnet daher mehrere verwandte Methoden. Gemeinsam ist ihnen, dass Begriffe ihre Bedeutung in Beziehungen und geschichtlichen Bewegungen gewinnen."
    ],
    media:[C("Plato Hegel Marx portraits","Platon, Hegel und Marx")],
    sources:[S("Stanford Encyclopedia of Philosophy: Hegel’s Dialectics","https://plato.stanford.edu/entries/hegel-dialectics/")]
  },
  {
    category:"Philosophische Begriffe",title:"Akrasia",summary:"Eine Person handelt gegen ihr eigenes besseres Urteil.",
    detail:[
      "Das klassische Problem lautet: Wie kann jemand überzeugt sein, dass Handlung A besser ist, und dennoch B wählen? Sokrates führt Fehlverhalten auf Unwissen zurück. Aristoteles beschreibt einen Zustand, in dem Wissen vorhanden bleibt, während Begierde, Zorn oder Gewohnheit den praktischen Schluss in der konkreten Situation bestimmen.",
      "Moderne Theorien unterscheiden Willensschwäche, Aufschub, Zwang und eine spätere Änderung des Urteils. Für echte Akrasia muss die Person A weiterhin für besser halten, frei handeln und B absichtlich tun. Der Begriff zeigt, dass Urteilen und Handeln verschiedene Fähigkeiten beanspruchen. Einsicht braucht Aufmerksamkeit, eingeübte Reaktionen, passende Gefühle und eine Umgebung, in der der gefasste Entschluss wirksam werden kann."
    ],
    media:[C("Aristotle bust Vienna","Aristoteles")],
    sources:[S("Stanford Encyclopedia of Philosophy: Weakness of Will","https://plato.stanford.edu/entries/weakness-will/")]
  },
  {
    category:"Philosophische Begriffe",title:"Familienähnlichkeit",summary:"Überlappende Ähnlichkeiten verbinden die Mitglieder einer Gruppe, obwohl ihnen kein einzelnes Merkmal gemeinsam ist.",
    detail:[
      "Ludwig Wittgenstein untersucht das Wort „Spiel“. Brettspiele, Ballspiele, Kartenspiele und Kinderspiele teilen Regeln, Vergnügen, Wettbewerb, Geschick oder Zufall in wechselnden Kombinationen. Ein Merkmal, das in jedem Fall vorkommt und allein die Gruppe definiert, lässt sich schwer angeben.",
      "Wittgenstein vergleicht die Struktur mit Ähnlichkeiten innerhalb einer Familie: Augen, Gang, Körperbau und Temperament kreuzen sich. Kategorien können auf dieselbe Weise stabil sein. Sprachliche Bedeutung entsteht im Gebrauch, in erlernten Praktiken und in wiederkehrenden Übergängen zwischen Fällen. Der Begriff erlaubt genaue Grenzen, sobald ein Zweck sie verlangt; er erklärt zugleich, weshalb viele Alltagsbegriffe ohne eine einzige verborgene Essenz zuverlässig funktionieren."
    ],
    media:[C("Ludwig Wittgenstein portrait 1930","Ludwig Wittgenstein")],
    sources:[S("Stanford Encyclopedia of Philosophy: Wittgenstein","https://plato.stanford.edu/entries/wittgenstein/")]
  },
  {
    category:"Philosophische Begriffe",title:"Différance",summary:"Bedeutung entsteht aus Unterschieden zwischen Zeichen und verschiebt sich entlang weiterer Zeichen.",
    detail:[
      "Jacques Derrida verbindet im französischen Wort différance zwei Vorgänge: différer heißt unterscheiden und aufschieben. Ein Zeichen erhält Bedeutung durch seinen Abstand zu anderen Zeichen. „Tag“ funktioniert im Netz von „Nacht“, „Woche“, „Licht“ und vielen weiteren Wörtern. Jede Erklärung führt zu neuen Zeichen.",
      "Der Buchstabe a bleibt in der französischen Aussprache unhörbar. Die Schreibweise zeigt damit am eigenen Körper, dass Schrift mehr leistet als eine sichtbare Kopie der Stimme. Derrida nennt die verbleibenden Beziehungen „Spuren“. Vollständige, isolierte Gegenwart eines Sinns weicht einem Geflecht aus Verweisen. Différance ist der Name für diesen Prozess, kein einzelnes Ding und kein Ursprung außerhalb der Zeichen."
    ],
    media:[F("File:Derrida EHESS (cropped).png","Jacques Derrida")],
    sources:[S("Stanford Encyclopedia of Philosophy: Jacques Derrida","https://plato.stanford.edu/entries/derrida/")]
  },
  {
    category:"Philosophische Begriffe",title:"Biomacht",summary:"Macht organisiert Körper, Gesundheit, Fortpflanzung und Bevölkerungen.",
    detail:[
      "Michel Foucault unterscheidet zwei Pole moderner Macht. Disziplin formt einzelne Körper durch Stundenpläne, Übungen, Prüfungen, Überwachung und räumliche Ordnung. Biopolitik arbeitet auf der Ebene von Bevölkerungen mit Geburtenraten, Lebenserwartung, Seuchen, Sexualität, Wohnverhältnissen und statistischem Risiko.",
      "Diese Macht wirkt produktiv: Sie erzeugt Wissen, Normen, gesunde Verhaltensweisen und leistungsfähige Körper. Staat, Medizin, Schule, Kaserne, Fabrik und Versicherung greifen dabei ineinander. Fürsorge und Kontrolle können dieselben Verfahren nutzen. Der Begriff erklärt die politische Bedeutung von Durchschnittswerten, Diagnosen und Grenzwerten. Spätere Autorinnen und Autoren wenden ihn auf Rassismus, Reproduktion, Kolonialismus, Behinderung und globale Gesundheit an."
    ],
    media:[F("File:Plan of Jeremy Bentham's panopticon prison, drawn by Willey Reveley in 1791.jpg","Panopticon-Entwurf von Willey Reveley, 1791")],
    sources:[S("Stanford Encyclopedia of Philosophy: Michel Foucault","https://plato.stanford.edu/entries/foucault/")]
  },
  {
    category:"Philosophische Begriffe",title:"Qualia",summary:"Die erlebte Qualität einer Wahrnehmung, etwa das Aussehen von Rot oder das Gefühl von Schmerz.",
    detail:[
      "Qualia bezeichnen das „Wie“ bewusster Erfahrung. Neurowissenschaften können Reize, Aktivitätsmuster, Berichte und Verhalten miteinander verbinden. Die philosophische Frage betrifft den Übergang von solchen Beschreibungen zum Erleben selbst.",
      "Drei Gedankenexperimente strukturieren die Debatte. Mary kennt in einem schwarzweißen Raum alle physikalischen Fakten über Farbe und sieht später erstmals Rot. Das invertierte Spektrum fragt, ob zwei Menschen gleiche Farbwörter verwenden und Farben verschieden erleben könnten. Der philosophische Zombie verhält sich wie ein Mensch, besitzt jedoch inneres Erleben. Physikalistische Theorien erklären Qualia über Funktionen, Repräsentationen oder neuronale Prozesse; andere Theorien behandeln Bewusstsein als eigenständige Grundeigenschaft."
    ],
    media:[C("color spectrum prism Newton","Farbspektrum")],
    sources:[S("Stanford Encyclopedia of Philosophy: Qualia","https://plato.stanford.edu/entries/qualia/")]
  },

  {
    category:"Künstler und drei Werke",title:"Piero della Francesca",summary:"Die Taufe Christi · Die Geißelung Christi · Die Auferstehung",
    detail:[
      "Piero della Francesca verband Malerei, Geometrie und Perspektivlehre. Seine Figuren stehen in klaren Räumen, das Licht modelliert Körper ruhig und gleichmäßig, und selbst dramatische Ereignisse erhalten eine langsame, genaue Ordnung. Er schrieb Abhandlungen über Perspektive und regelmäßige Körper; diese mathematische Arbeit gehört unmittelbar zu seiner Bildkomposition.",
      "Die drei Werke zeigen verschiedene Maßstäbe. In der „Taufe Christi“ verbindet der senkrechte Baum Himmel, Christus und Wasser. Die kleine „Geißelung“ legt die Passion in den Hintergrund eines streng konstruierten Palastes und stellt drei rätselhafte Männer nach vorn. Die „Auferstehung“ in Sansepolcro richtet den aufstehenden Christus frontal auf den Betrachter; die schlafenden Wächter bilden eine schwere Basis unter seinem Blick."
    ],
    works:["Die Taufe Christi, um 1448–1450","Die Geißelung Christi, um 1455–1460","Die Auferstehung, um 1463–1465"],
    media:[C("Piero della Francesca Baptism of Christ","Die Taufe Christi"),C("Piero della Francesca Flagellation","Die Geißelung Christi"),C("Piero della Francesca Resurrection Sansepolcro","Die Auferstehung")],
    sources:[S("National Gallery: The Baptism of Christ","https://www.nationalgallery.org.uk/paintings/piero-della-francesca-the-baptism-of-christ"),S("Museo Civico Sansepolcro: Resurrezione","https://museocivicosansepolcro.it/")]
  },
  {
    category:"Künstler und drei Werke",title:"Sofonisba Anguissola",summary:"Das Schachspiel · Bernardino Campi malt Sofonisba Anguissola · Selbstbildnis an der Staffelei",
    detail:[
      "Sofonisba Anguissola wuchs in Cremona auf und erhielt mit ihren Schwestern eine humanistische und künstlerische Ausbildung. Als Frau hatte sie kaum Zugang zu großen öffentlichen Aufträgen oder zum Studium nackter Modelle. Sie entwickelte deshalb Porträtformen, in denen Blick, Handlung und soziale Beziehung die fehlende Historienmalerei ersetzen.",
      "„Das Schachspiel“ zeigt drei Schwestern mitten in einer Partie; jede reagiert anders, während die Dienerin am Rand beobachtet. „Bernardino Campi malt Sofonisba Anguissola“ verschachtelt Meister, Schülerin und gemaltes Bild. Das Selbstbildnis an der Staffelei zeigt die Malerin bei einem religiösen Werk und verbindet handwerkliche Arbeit mit gelehrter Selbstbehauptung. Später wirkte Anguissola am spanischen Hof und prägte das offizielle Porträt."
    ],
    works:["Das Schachspiel, 1555","Bernardino Campi malt Sofonisba Anguissola, um 1559","Selbstbildnis an der Staffelei, 1556"],
    media:[C("Sofonisba Anguissola Chess Game 1555","Das Schachspiel"),C("Bernardino Campi painting Sofonisba Anguissola","Bernardino Campi malt Sofonisba Anguissola"),C("Sofonisba Anguissola self portrait easel 1556","Selbstbildnis an der Staffelei")],
    sources:[S("Museo Nacional del Prado: Sofonisba Anguissola","https://www.museodelprado.es/en/the-collection/artist/anguissola-sofonisba/59e626d8-aba8-4f40-bf31-1b85a2c86c48")]
  },
  {
    category:"Künstler und drei Werke",title:"Hilma af Klint",summary:"Die zehn Größten · Altarbilder · Der Schwan",
    detail:[
      "Hilma af Klint studierte an der Königlichen Kunstakademie in Stockholm und malte zunächst Porträts und Landschaften. Ab 1906 entstand ein großes abstraktes Werk aus Spiralen, Farbfeldern, Buchstaben, Symmetrien und diagrammatischen Formen. Sie verstand diese Bilder als geistigen Forschungsauftrag und arbeitete in sorgfältig geordneten Serien.",
      "„Die zehn Größten“ behandeln Kindheit, Jugend, Erwachsenenalter und Alter auf fast drei Meter hohen Papierbahnen. Die „Altarbilder“ verdichten den Zyklus „Die Gemälde für den Tempel“ in Kreise, Dreiecke und aufsteigende Farbbewegungen. „Der Schwan“ beginnt mit schwarzen und weißen Tieren und führt über geometrische Teilungen zu weitgehender Abstraktion. Af Klints Nachlassregel verzögerte die öffentliche Rezeption bis Jahrzehnte nach ihrem Tod."
    ],
    works:["Die zehn Größten, Gruppe IV, 1907","Altarbilder, Gruppe X, 1915","Der Schwan, Serie SUW, 1914–1915"],
    media:[C("Hilma af Klint The Ten Largest Adulthood No 7","Die zehn Größten: Erwachsenenalter Nr. 7"),C("Hilma af Klint Altarpiece No 1","Altarbild Nr. 1"),F("File:Hilma af Klint, 1915, Svanen, No. 17.jpg","Der Schwan Nr. 17")],
    sources:[S("Hilma af Klint Foundation: Works","https://hilmaafklint.se/about-hilma-af-klint/works-and-paintings/")]
  },
  {
    category:"Künstler und drei Werke",title:"Paula Modersohn-Becker",summary:"Selbstbildnis am 6. Hochzeitstag · Alte Armenhäuslerin · Mädchen mit Blumenkranz",
    detail:[
      "Paula Modersohn-Becker arbeitete zwischen der Künstlerkolonie Worpswede und Paris. Sie vereinfachte Körper zu großen Flächen, setzte erdige Farben gegen helle Haut und gab bäuerlichen Frauen, alten Menschen und Kindern eine körperliche Gegenwart fern von ländlicher Idylle.",
      "Im „Selbstbildnis am 6. Hochzeitstag“ stellt sie sich mit entblößtem Oberkörper und angedeuteter Schwangerschaft dar; die Schwangerschaft war erfunden, die schöpferische Selbstsetzung real. Die „Alte Armenhäuslerin“ verbindet frontale Würde mit schwerer Materialität. Das „Mädchen mit Blumenkranz“ verwendet die Form eines Renaissanceporträts für ein Worpsweder Kind. In gut zehn Arbeitsjahren entstanden rund 750 Gemälde und mehr als tausend Zeichnungen."
    ],
    works:["Selbstbildnis am 6. Hochzeitstag, 1906","Alte Armenhäuslerin im Garten, 1906","Mädchen mit Blumenkranz, um 1901"],
    media:[C("Paula Modersohn-Becker Selbstbildnis 6 Hochzeitstag","Selbstbildnis am 6. Hochzeitstag"),C("Paula Modersohn-Becker Alte Armenhäuslerin im Garten","Alte Armenhäuslerin"),C("Paula Modersohn Becker girl flower wreath","Mädchen mit Blumenkranz")],
    sources:[S("Paula Modersohn-Becker Museum: Sammlung","https://www.museen-boettcherstrasse.de/museen/paula-modersohn-becker-museum/")]
  },
  {
    category:"Künstler und drei Werke",title:"Félix Vallotton",summary:"Der Ball · Bad an einem Sommerabend · Verdun",
    detail:[
      "Félix Vallotton arbeitete als Maler, Holzschneider und scharfer Beobachter bürgerlicher Innenräume. Seine Flächen sind klar begrenzt, Perspektiven häufig hoch angesetzt, und zwischen Figuren bleibt eine Spannung, die der Bildraum kaum erklärt.",
      "In „Der Ball“ läuft ein Kind einem roten Ball über eine helle Rasenfläche nach; zwei Erwachsene stehen als kleine, schwer lesbare Gruppe im Hintergrund. „Bad an einem Sommerabend“ ordnet Frauenkörper, Wasser und Ufer fast wie ausgeschnittene Farbstücke und verbindet moderne Freizeit mit einer künstlich gebauten Bühne. „Verdun“ übersetzt den industrialisierten Krieg in kreuzende Lichtkegel, Rauch, Feuer und aufgerissene Erde. Die drei Werke reichen von alltäglicher Wahrnehmung bis zur Gewaltgeschichte."
    ],
    works:["Der Ball, 1899","Bad an einem Sommerabend, 1892–1893","Verdun, 1917"],
    media:[C("Felix Vallotton The Ball 1899","Der Ball"),C("Felix Vallotton Bathing on a Summer Evening","Bad an einem Sommerabend"),C("Felix Vallotton Verdun 1917","Verdun")],
    sources:[S("Musée d’Orsay: Félix Vallotton","https://www.musee-orsay.fr/en/artworks/le-ballon-20965")]
  },
  {
    category:"Künstler und drei Werke",title:"Suzanne Valadon",summary:"Das blaue Zimmer · Das Auswerfen des Netzes · Porträt von Erik Satie",
    detail:[
      "Suzanne Valadon arbeitete als Akrobatin, Modell und Zeichnerin im Pariser Montmartre. Edgar Degas erkannte ihr zeichnerisches Können und förderte ihre Druckgrafik. Als Malerin setzte sie feste Konturen, starke Farben und genaue Körper gegen die glatte Eleganz akademischer Aktbilder.",
      "„Das blaue Zimmer“ zeigt eine bekleidete Frau mit Zigarette auf einem gemusterten Bett; Haltung und Kleidung geben ihr den Raum eines selbstbestimmten Körpers. „Das Auswerfen des Netzes“ behandelt den männlichen Akt als Folge gespannter Bewegungen. Das kleine Porträt Erik Saties entstand während ihrer kurzen Beziehung und hält sein schmales Gesicht mit großer Konzentration fest. Valadon wechselte damit durch mehrere Rollen des Kunstbetriebs und bestimmte schließlich selbst den Blick."
    ],
    works:["Das blaue Zimmer, 1923","Das Auswerfen des Netzes, 1914","Porträt von Erik Satie, 1893"],
    media:[C("Suzanne Valadon The Blue Room 1923","Das blaue Zimmer"),C("Suzanne Valadon Casting the Net 1914","Das Auswerfen des Netzes"),C("Suzanne Valadon portrait Erik Satie","Porträt von Erik Satie")],
    sources:[S("Centre Pompidou: Suzanne Valadon","https://www.centrepompidou.fr/en/program/calendar/event/cxXAxAr")]
  },
  {
    category:"Künstler und drei Werke",title:"Tsukioka Yoshitoshi",summary:"Mond über dem Berg Yoshino · Der einsame Hausmond · Der Mond von Itsukushima",
    detail:[
      "Tsukioka Yoshitoshi führte den japanischen Farbholzschnitt durch Bürgerkrieg, Meiji-Restauration, neue Drucktechnik und wachsende Konkurrenz der Fotografie. Seine Bilder verbinden historisches Kostüm, Theater, Tagespresse und ungewöhnliche Schnitte. Späte Serien arbeiten mit viel leerem Raum und einer stark gebremsten Handlung.",
      "Die Folge „Hundert Ansichten des Mondes“ entstand von 1885 bis 1892. Auf jedem Blatt erscheint der Mond als Zeitzeichen, Lichtquelle oder unsichtbare Gegenwart. „Mond über dem Berg Yoshino“ zeigt den Krieger Iga no Tsubone in einem dramatischen Moment der Legende. Der „einsame Hausmond“ konzentriert sich auf die Dichterin Abutsu-ni. Beim „Mond von Itsukushima“ verschmelzen Torii, Wasser, Wolken und die Erinnerung an den Feldherrn Taira no Kiyomori."
    ],
    works:["Mond über dem Berg Yoshino, 1886","Der einsame Hausmond, 1891","Der Mond von Itsukushima, 1886"],
    media:[C("Yoshitoshi Moon Mount Yoshino","Mond über dem Berg Yoshino"),I("https://nippon-gallery37art.com/cdn/shop/files/0280.jpg?v=1711961355","https://nippon-gallery37art.com/products/tsukioka-yoshitoshi-moon-of-the-lonely-house","Der einsame Hausmond","Nippon Gallery"),C("Yoshitoshi Itsukushima moon","Der Mond von Itsukushima")],
    sources:[S("British Museum: Yoshitoshi","https://www.britishmuseum.org/collection/term/BIOG11250")]
  },
  {
    category:"Künstler und drei Werke",title:"Utagawa Kuniyoshi",summary:"Takiyasha und das Skelettgespenst · Miyamoto Musashi und der Wal · Katzen als Stationen des Tōkaidō",
    detail:[
      "Utagawa Kuniyoshi wurde mit Darstellungen der Helden des chinesischen Romans „Die Räuber vom Liang-Schan-Moor“ berühmt. Er beherrschte große Mehrblattkompositionen, Karikatur, Landschaft, Tierbild und visuelle Wortspiele. Staatliche Zensur führte häufig zu Bildern, deren politische Anspielungen in Tieren und historischen Masken verborgen lagen.",
      "„Takiyasha und das Skelettgespenst“ lässt ein riesiges Gerippe über zwei Blätter in einen Palast greifen. „Miyamoto Musashi und der Wal“ stellt den kleinen Krieger gegen die schwarze Masse des auftauchenden Tiers. In den „Katzen als Stationen des Tōkaidō“ verwandeln Körper, Gesten und Namen von Katzen die berühmte Reiseroute in ein dichtes Bilderrätsel. Kuniyoshis Größe liegt in der Verbindung von Lesbarkeit und formaler Kühnheit."
    ],
    works:["Takiyasha die Hexe und das Skelettgespenst, um 1844","Miyamoto Musashi tötet einen riesigen Wal, um 1847","Katzen als die 53 Stationen des Tōkaidō, 1850"],
    media:[C("Kuniyoshi Takiyasha witch skeleton spectre","Takiyasha und das Skelettgespenst"),C("Kuniyoshi Miyamoto Musashi whale","Miyamoto Musashi und der Wal"),C("Kuniyoshi cats 53 stations Tokaido","Katzen als Stationen des Tōkaidō")],
    sources:[S("Victoria and Albert Museum: Utagawa Kuniyoshi","https://www.vam.ac.uk/articles/utagawa-kuniyoshi-the-genius-of-the-japanese-woodblock-print")]
  },
  {
    category:"Künstler und drei Werke",title:"Zinaida Serebriakova",summary:"Am Toilettentisch · Die Ernte · Das Kartenhaus",
    detail:[
      "Zinaida Serebriakova wuchs auf dem Familiengut Neskutschnoje in einer russischen Künstlerfamilie auf. Ihre Malerei verbindet genaue Zeichnung mit hellen, beweglichen Farben. Bauern bei der Arbeit, Kinder, Selbstbildnisse und Ballettproben bilden ihre wichtigsten Themen.",
      "„Am Toilettentisch“ zeigt die Malerin in einem Spiegelraum aus Händen, Flaschen, Kerzen und offenem Blick. „Die Ernte“ baut vier Landarbeiterinnen als monumentale Gruppe vor gelben Feldern auf. „Das Kartenhaus“ entstand nach dem Tod ihres Mannes und zeigt ihre Kinder in konzentriertem, fragilem Spiel. 1924 reiste Serebriakova nach Paris und konnte wegen sowjetischer Grenzpolitik lange nur zwei ihrer vier Kinder zu sich holen. Diese Trennung prägte ihr späteres Werk."
    ],
    works:["Am Toilettentisch, 1909","Die Ernte, 1915","Das Kartenhaus, 1919"],
    media:[C("Zinaida Serebriakova At the Dressing Table","Am Toilettentisch"),C("Zinaida Serebriakova Harvest 1915","Die Ernte"),I("https://muzei-mira.com/templates/museum/images/paint/karto4nii-domik-serebriakova%2B.jpg","https://muzei-mira.com/kartini_russkih_hudojnikov/2843-kartochnyj-domik-zinaida-evgenevna-serebrjakova-opisanie-kartiny.html","Das Kartenhaus","Музеи мира")],
    sources:[S("State Tretyakov Gallery: Zinaida Serebriakova","https://www.tretyakovgallerymagazine.com/articles/2-2017-55/return-zinaida-serebriakova")]
  },
  {
    category:"Künstler und drei Werke",title:"Amrita Sher-Gil",summary:"Drei Mädchen · Toilette der Braut · Dorfszene",
    detail:[
      "Amrita Sher-Gil wurde in Budapest als Tochter einer ungarisch-jüdischen Sängerin und eines indischen Sikh-Gelehrten geboren. Sie studierte in Paris und kehrte 1934 nach Indien zurück. Dort verband sie europäische Ölmalerei mit der Farbordnung von Ajanta, Mogulmalerei und dem Alltag ländlicher Menschen.",
      "„Drei Mädchen“ stellt junge Frauen in einen engen, stillen Raum; Hände und gesenkte Blicke tragen die Spannung. Die „Toilette der Braut“ zeigt Vorbereitung als gemeinschaftliche Arbeit und zugleich als Zustand schwerer Erwartung. Die „Dorfszene“ ordnet viele Figuren in gedämpften Rot-, Ocker- und Grüntönen. Sher-Gil starb 1941 im Alter von 28 Jahren. Das kleine Werk veränderte die Möglichkeiten moderner Malerei in Indien grundlegend."
    ],
    works:["Drei Mädchen, 1935","Toilette der Braut, 1937","Dorfszene, 1938"],
    media:[C("Amrita Sher-Gil Three Girls 1935","Drei Mädchen"),C("Amrita Sher-Gil Bride's Toilet","Toilette der Braut"),C("Amrita Sher-Gil Village Scene","Dorfszene")],
    sources:[S("National Gallery of Modern Art India: Amrita Sher-Gil","https://ngmaindia.gov.in/virtual-tour-of-amrita-sher-gil.asp")]
  },

  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet.",
    detail:[
      "Franz Kafka, „Der Process“, geschrieben 1914/15, postum veröffentlicht 1925. Der erste Satz setzt Verhaftung, mögliche Verleumdung und Josef K.s Selbstgewissheit in ein einziges Verhältnis. Die Ursache bleibt unklar, die Wirkung tritt sofort ein. Zwei Wächter erscheinen in seinem Zimmer und erklären, dass das Verfahren bereits läuft.",
      "Josef K. sucht Zuständigkeiten, Regeln und eine Instanz, die seine Sache entscheidet. Das Gericht sitzt in Dachböden, Hinterzimmern, Kanzleien und Gesprächen. Mit jedem Versuch übernimmt K. mehr von seiner Sprache. Der Roman erzählt eine bürokratische Verfolgung und zugleich die innere Bindung an ein Urteil, dessen Inhalt verborgen bleibt. Max Brod ordnete die unvollendeten Kapitel nach Kafkas Tod."
    ],
    media:[C("Kafka Der Process first edition 1925","Der Process, erste Ausgabe 1925")],
    sources:[S("Der Process · Deutsches Textarchiv","https://www.deutschestextarchiv.de/book/show/kafka_process_1925")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Über dem Atlantik befand sich ein barometrisches Minimum; es wanderte ostwärts, einem über Rußland lagernden Maximum zu, und verriet noch nicht die Neigung, diesem nördlich auszuweichen.",
    detail:[
      "Robert Musil, „Der Mann ohne Eigenschaften“, Band 1, 1930. Der Roman beginnt mit einer meteorologischen Lagebeschreibung, steigert ihre Fachsprache und übersetzt sie schließlich in den alltäglichen Satz: „Es war ein schöner Augusttag des Jahres 1913.“ Präzision und Banalität stehen von Anfang an nebeneinander.",
      "Im Wien des erfundenen Staates Kakanien soll die „Parallelaktion“ das siebzigjährige Regierungsjubiläum Kaiser Franz Josephs für 1918 vorbereiten. Ulrich, Mathematiker und ehemaliger Offizier, nimmt Urlaub vom eigenen Leben und sucht eine angemessene Möglichkeit zu existieren. Ideen, Affären, Politik und Verwaltung kreisen um eine Zukunft, die Leser als Weltkrieg kennen. Musil arbeitete bis zu seinem Tod 1942 an dem unvollendeten Roman."
    ],
    media:[F("File:Musil.jpg","Robert Musil, 1930")],
    sources:[S("Der Mann ohne Eigenschaften · Internet Archive","https://archive.org/search?query=title%3A%28Der+Mann+ohne+Eigenschaften%29+AND+creator%3A%28Musil%29")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Mein Vater war ein Kaufmann.",
    detail:[
      "Adalbert Stifter, „Der Nachsommer“, 1857. Heinrich Drendorf berichtet seine Lebensgeschichte in ruhigem Rückblick. Der Vater hat Vermögen durch Handel erworben und ermöglicht dem Sohn eine Bildung ohne unmittelbaren Berufszwang. Aus dem schlichten Anfang entsteht eine genaue Beschreibung von Familie, Lernen und selbstgewählter Arbeit.",
      "Heinrich reist, beobachtet Gesteine, Pflanzen und Landschaften und sucht während eines Gewitters Schutz im Rosenhaus des Freiherrn von Risach. Dort begegnet er einer vollständig geordneten Lebenswelt aus Gartenbau, Kunst, Handwerk und behutsam restaurierten Dingen. Seine Beziehung zu Natalie wächst innerhalb dieser Ordnung. Handlung tritt hinter die Frage zurück, wie Wahrnehmung, Übung und Geschmack einen Menschen formen."
    ],
    media:[C("Adalbert Stifter Nachsommer 1857 title page","Der Nachsommer, Titelseite 1857")],
    sources:[S("Der Nachsommer · Deutsches Textarchiv","https://www.deutschestextarchiv.de/book/show/stifter_nachsommer01_1857")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Call me Ishmael.",
    detail:[
      "Herman Melville, „Moby-Dick; or, The Whale“, 1851. Ishmael bietet einen Namen an. Der biblische Ishmael ist ein Ausgestoßener; der Satz klingt zugleich vertraulich und vorsichtig. Der Erzähler flieht vor Schwermut ans Meer, begegnet dem Harpunier Queequeg und heuert auf dem Walfänger Pequod an.",
      "Kapitän Ahab richtet die Reise auf den weißen Pottwal Moby Dick aus, der ihm ein Bein abgerissen hat. Um diese Jagd legt Melville Kapitel über Anatomie, Arbeit, Handel, Farbe, Religion, Klassifikation und Erzähltechnik. Das Schiff wird zu einer kleinen Welt mit Männern aus vielen Ländern. Ishmael überlebt als einziger, getragen vom Sarg Queequegs, und kann deshalb die Geschichte erzählen."
    ],
    media:[C("Moby-Dick first edition title page 1851","Moby-Dick, erste amerikanische Ausgabe 1851")],
    sources:[S("Moby-Dick · Project Gutenberg","https://www.gutenberg.org/ebooks/2701")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Alle glücklichen Familien gleichen einander, jede unglückliche Familie ist auf ihre eigene Weise unglücklich.",
    detail:[
      "Lew Tolstoi, „Anna Karenina“, 1877/78. Wörtlich: „Alle glücklichen Familien ähneln einander; jede unglückliche Familie ist auf ihre eigene Weise unglücklich.“ Der Roman beginnt im Haus der Oblonskis. Stiwa hat seine Frau Dolly betrogen, das Personal wartet, die Kinder laufen durch die Zimmer, und Anna reist an, um zu vermitteln.",
      "Aus dieser Familienkrise entwickeln sich zwei große Linien. Anna beginnt eine Beziehung mit Wronski und gerät unter den Druck einer Gesellschaft, die männliche Untreue duldet und weibliche öffentlich bestraft. Lewin sucht mit Kitty eine gemeinsame Lebensform und ringt mit Landwirtschaft, Glaube, Arbeit und Tod. Der erste Satz bietet eine Formel, die der Roman an vielen sehr verschiedenen Haushalten prüft."
    ],
    media:[C("Anna Karenina 1878 first edition title page","Anna Karenina, Ausgabe von 1878")],
    original:{label:"Deutsche Übertragung",text:"Alle glücklichen Familien ähneln einander; jede unglückliche Familie ist auf ihre eigene Weise unglücklich."},
    sources:[S("Анна Каренина · Russian Wikisource","https://ru.wikisource.org/wiki/%D0%90%D0%BD%D0%BD%D0%B0_%D0%9A%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BD%D0%B0_(%D0%A2%D0%BE%D0%BB%D1%81%D1%82%D0%BE%D0%B9)")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    detail:[
      "Jane Austen, „Pride and Prejudice“, 1813. Der Satz gibt sich als allgemeine Wahrheit und spricht in Wirklichkeit für Familien mit unverheirateten Töchtern. Ein wohlhabender lediger Mann ist in ihrer Vorstellung bereits Teil des lokalen Heiratsmarkts. Mrs Bennet reagiert entsprechend auf die Ankunft von Charles Bingley.",
      "Elizabeth Bennet beurteilt Bingleys Freund Fitzwilliam Darcy als stolz und abweisend. Darcy hält ihre Familie für gesellschaftlich problematisch. Beide Urteile enthalten genaue Beobachtung, verletzten Stolz und fremde Täuschung. Briefe, Gespräche, Geld und Besuche verändern Schritt für Schritt ihr Wissen. Austens Komik entsteht aus der Lücke zwischen dem, was Figuren sagen, dem, was sie meinen, und dem, was der Erzähler erkennen lässt."
    ],
    media:[F("File:PrideAndPrejudiceTitlePage.jpg","Pride and Prejudice, Titelseite 1813")],
    sources:[S("Pride and Prejudice · Project Gutenberg","https://www.gutenberg.org/ebooks/1342")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Miss Brooke had that kind of beauty which seems to be thrown into relief by poor dress.",
    detail:[
      "George Eliot, „Middlemarch“, 1871/72. Dorothea Brooke trägt schlichte Kleidung und versteht ihre Askese als Zeichen geistiger Ernsthaftigkeit. Das Wort „seems“ hält bereits Abstand zu dieser Selbstdeutung. Schönheit, Moral und soziale Wirkung werden im ersten Satz zusammen beobachtet.",
      "Dorothea heiratet den älteren Gelehrten Casaubon und hofft auf Teilnahme an einem großen geistigen Werk. Der Arzt Tertius Lydgate kommt mit wissenschaftlichen Reformplänen nach Middlemarch. Beide treffen auf Ehe, Geld, Verwandtschaft, Gerücht und Institutionen. Eliot verbindet ihre Lebensläufe mit denen von Rosamond Vincy, Fred Vincy, Mary Garth und Will Ladislaw. Der Roman zeigt Folgen, die aus begrenztem Wissen und alltäglichen Entscheidungen wachsen."
    ],
    media:[C("Middlemarch 1871 title page first edition","Middlemarch, erste Ausgabe")],
    sources:[S("Middlemarch · Project Gutenberg","https://www.gutenberg.org/ebooks/145")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Wir waren im Studiersaal, als der Direktor eintrat, gefolgt von einem Neuen in bürgerlicher Kleidung und einem Schuldiener, der ein großes Pult trug.",
    detail:[
      "Gustave Flaubert, „Madame Bovary“, 1857. Ein schulisches „Wir“ beobachtet, wie Charles Bovary als unbeholfener neuer Schüler den Raum betritt. Der Roman beginnt mit Charles und einer Gruppe, danach löst sich der Erzähler von diesem Standpunkt. Emma erscheint erst später.",
      "Emma heiratet Charles und erwartet vom Leben die Intensität ihrer Lektüre. Provinzieller Alltag, Konsumwünsche und romantische Bilder verbinden sich mit ihren Beziehungen zu Rodolphe und Léon. Der Händler Lheureux verwandelt Wünsche in Schulden. Flauberts freie indirekte Rede lässt Emmas Sprache in die Erzählung gleiten und hält zugleich Abstand zu ihr. Der Roman untersucht deshalb auch, wie gelesene Formeln Gefühle und Entscheidungen prägen."
    ],
    media:[C("Madame Bovary 1857 title page","Madame Bovary, Ausgabe von 1857")],
    sources:[S("Madame Bovary · Project Gutenberg","https://www.gutenberg.org/ebooks/14155")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"An den Ufern der Havel lebte, um die Mitte des sechzehnten Jahrhunderts, ein Roßhändler, namens Michael Kohlhaas, Sohn eines Schulmeisters, einer der rechtschaffensten zugleich und entsetzlichsten Menschen seiner Zeit.",
    detail:[
      "Heinrich von Kleist, „Michael Kohlhaas“, 1810. Der Satz stellt Rechtschaffenheit und Entsetzlichkeit als Eigenschaften derselben Person voran. Kohlhaas handelt mit Pferden und wird an einer erfundenen Zollschranke des Junkers Wenzel von Tronka aufgehalten. Zwei als Pfand zurückgelassene Rappen findet er später misshandelt vor.",
      "Gerichte und persönliche Beziehungen schützen den Junker. Kohlhaas verlangt Wiederherstellung seines Rechts; nach dem Tod seiner Frau wird die Forderung zum bewaffneten Feldzug. Er verbrennt Städte, veröffentlicht Mandate und verhandelt mit Martin Luther und dem Kurfürsten. Kleist verfolgt genau, wie ein berechtigter Anspruch sich durch die Wahl seiner Mittel verändert. Recht, Gewalt und staatliche Autorität bleiben bis zur Hinrichtung miteinander verschränkt."
    ],
    media:[C("Heinrich von Kleist portrait","Heinrich von Kleist")],
    sources:[S("Michael Kohlhaas · Deutsches Textarchiv","https://www.deutschestextarchiv.de/book/show/kleist_kohlhaas_1810")]
  },
  {
    category:"Erste Sätze großer Romane",kind:"quote",title:"Eduard – so nennen wir einen reichen Baron im besten Mannesalter – Eduard hatte in seiner Baumschule die schönste Stunde eines Aprilnachmittags zugebracht, um frisch erhaltene Pfropfreiser auf junge Stämme zu bringen.",
    detail:[
      "Johann Wolfgang Goethe, „Die Wahlverwandtschaften“, 1809. Eduard verbindet in der Baumschule fremde Reiser mit jungen Stämmen. Das Pfropfen führt das Thema künstlicher und natürlicher Verbindung bereits in die erste Handlung ein. Eduard lebt mit Charlotte auf einem Landgut, das beide planend umgestalten.",
      "Der Hauptmann und Charlottes Nichte Ottilie kommen hinzu. Zwischen den vier Menschen entstehen neue Anziehungen, die sie mit dem chemischen Begriff der Wahlverwandtschaft deuten: Bestimmte Stoffe lösen bestehende Verbindungen und bilden neue. Das Modell gibt ihren Gefühlen eine scheinbar objektive Sprache. Der Roman verfolgt, wie Naturgesetz, Verantwortung, Ehe, Entsagung und Wunsch ineinandergreifen und wie gefährlich eine Metapher wird, sobald Menschen sie als Schicksal behandeln."
    ],
    media:[F("File:Goethe die wahlverwandtschaften erstausgabe 1809.jpg","Die Wahlverwandtschaften, Erstausgabe 1809")],
    sources:[S("Die Wahlverwandtschaften · Deutsches Textarchiv","https://www.deutschestextarchiv.de/book/show/goethe_wahlverw01_1809")]
  },

  {
    category:"Seltene Musikstile",title:"Canto a tenore · Sardinien",
    detail:[
      "Vier Männer stehen eng zusammen. Die boche führt Text und Melodie; mesu boche, contra und bassu antworten mit Silben, Bordun und obertonreichen Kehllauten. Die Stimmen beginnen oft aus einem kurzen Zeichen heraus und bilden einen dichten Akkordkörper, in dem sich jede Lage deutlich bewegt.",
      "Die Tradition gehört vor allem zu Orten in Barbagia und anderen Teilen Zentralsardiniens. Gesungen wird bei Festen, in Bars, auf Plätzen und auf der Bühne. Die Texte stammen aus überlieferter oder neuer sardischer Dichtung. Regionale Stile unterscheiden Klang, Rhythmus und Stimmführung. Das Video dokumentiert Körperhaltung, Abstand und Blickkontakt; diese sichtbare Koordination gehört zur Musik."
    ],
    media:[Y("cWVCMvbGcPA","UNESCO · Canto a tenore")],
    sources:[S("UNESCO: Canto a tenore","https://ich.unesco.org/en/RL/canto-a-tenore-sardinian-pastoral-songs-00165")]
  },
  {
    category:"Seltene Musikstile",title:"Georgische Mehrstimmigkeit",
    detail:[
      "Georgische Vokalmusik umfasst regionale Formen mit Bordun, unabhängigen Melodielinien, engen Reibungen und improvisierten Oberstimmen. In Kachetien führen zwei Solisten verzierte Linien über einem langen Bass. Westgeorgische Stile bewegen mehrere Stimmen freier gegeneinander. Swanetische Gesänge verwenden eigene Skalen, Rhythmen und einen schweren chorischen Klang.",
      "Lieder begleiten Arbeit, Tischritual, Hochzeit, Begräbnis, Tanz und religiöse Feste. Viele werden ohne Instrumente gesungen. Die Stimmführung entsteht aus gemeinsamem Gedächtnis und körperlicher Abstimmung, weniger aus einer schriftlichen Partitur. Das UNESCO-Video führt Aufnahmen aus mehreren Regionen zusammen; Unterschiede in Stimmführung, Dichte und Klang erklären die Breite des Sammelbegriffs."
    ],
    media:[Y("rg8xrdbnH8E","UNESCO · Georgian Polyphonic Singing")],
    sources:[S("UNESCO: Georgian polyphonic singing","https://ich.unesco.org/en/RL/georgian-polyphonic-singing-00008")]
  },
  {
    category:"Seltene Musikstile",title:"Seto leelo · Estland",
    detail:[
      "Beim Seto leelo führt eine Vorsängerin, die sõnolinõ, eine Textzeile an. Der Chor übernimmt ihre letzten Silben und antwortet in dichter Mehrstimmigkeit. Eine starke obere Stimme hebt sich aus dem Ensemble; die übrigen Sängerinnen bilden Varianten um die Hauptmelodie.",
      "Ansehen gewinnt, wer im Augenblick passende Verse schafft. Sprache, Gedächtnis und Reaktion bilden deshalb den Kern der Aufführung. Leelo begleitete früher Arbeit, Hochzeit, Klage und religiöse Feste. Heute tragen Chöre, Familientreffen und der Seto-Königreichstag die Praxis. Das Video dokumentiert den Wechsel zwischen Einzelstimme und Gruppe in Nahaufnahme."
    ],
    media:[Y("mSXcYph-ODc","UNESCO · Seto leelo")],
    sources:[S("UNESCO: Seto leelo","https://ich.unesco.org/en/RL/seto-leelo-seto-polyphonic-singing-tradition-00173")]
  },
  {
    category:"Seltene Musikstile",title:"Gagaku · Japan",
    detail:[
      "Gagaku ist die Hofmusik des japanischen Kaiserhauses. Zum Ensemble gehören die Mundorgel shō, das Doppelrohrblatt hichiriki, die Flöte ryūteki, Lauten, Zithern, Trommeln und Gong. Die shō hält leuchtende Akkordfelder; hichiriki und Flöte führen Linien mit stark geformten Tönen.",
      "Das Repertoire enthält Musik und Tanz aus unterschiedlichen historischen Schichten: einheimische Gesänge, aus China und Korea übernommene Formen sowie spätere Kompositionen. Der Rhythmus dehnt und verdichtet sich durch festgelegte Trommelschläge. Musiker lernen Gesten, Atem, Melodie und zeremonielle Ordnung über viele Jahre. Das UNESCO-Video zeigt Klang und bugaku-Tanz gemeinsam."
    ],
    media:[Y("5OA8HFUNfIk","UNESCO · Gagaku")],
    sources:[S("UNESCO: Gagaku","https://ich.unesco.org/en/RL/gagaku-00265")]
  },
  {
    category:"Seltene Musikstile",title:"Aka-Polyphonie · Zentralafrikanische Republik",
    detail:[
      "Aka-Sängerinnen und -Sänger verschränken kurze Muster, Jodel, Ruf und Antwort zu einem beweglichen Kontrapunkt. Verschiedene Personen übernehmen vier Grundfunktionen und variieren sie während der Aufführung. Mehrere rhythmische Zyklen laufen gleichzeitig; daraus entsteht eine genaue Ordnung ohne Dirigent.",
      "Musik begleitet Jagd, Heilung, Tanz, Spiel und soziale Unterweisung. Kinder lernen, indem sie mitten in der Gruppe zuhören und einzelne Funktionen übernehmen. Das UNESCO-Video verbindet Gesang mit Bewegung und Alltag. Waldverlust, Vertreibung und prekäre politische Lage greifen direkt in die Bedingungen ein, unter denen diese Praxis weitergegeben wird."
    ],
    media:[Y("yKLxFmnYO_I","UNESCO · Polyphonic Singing of the Aka")],
    sources:[S("UNESCO: Polyphonic singing of the Aka","https://ich.unesco.org/en/RL/polyphonic-singing-of-the-aka-pygmies-of-the-central-african-republic-00018")]
  },
  {
    category:"Seltene Musikstile",title:"Aserbaidschanischer Mugham",
    detail:[
      "Mugham führt durch ein modales System aus charakteristischen Tonstufen, melodischen Formeln und Abschnitten. Ein Sänger gestaltet klassische Dichtung und lange ornamentierte Linien. Tar, Kamancha und Rahmentrommel geben Antworten, Übergänge und rhythmische Teile.",
      "Eine Aufführung folgt überliefertem Wissen und entsteht zugleich im Moment. Der Sänger wählt Weg, Länge, Register und Steigerung nach Text, Raum und eigener Stimme. Mugham besitzt regionale Schulen und ein großes benanntes Repertoire. Das UNESCO-Video zeigt Unterricht, Konzert und Ensemblearbeit und eignet sich deshalb als Einführung in die ganze Praxis."
    ],
    media:[Y("f3DEyWWUwJI","UNESCO · Azerbaijani Mugham")],
    sources:[S("UNESCO: Azerbaijani Mugham","https://ich.unesco.org/en/RL/azerbaijani-mugham-00039")]
  },
  {
    category:"Seltene Musikstile",title:"Katajjaq · Nunavik und Baffin Island",
    detail:[
      "Zwei Frauen stehen einander gegenüber und verzahnen kurze Kehllaute, Silben, Atemgeräusche und Melodiefragmente. Ein Motiv fällt in die Lücke des anderen. Der Wechsel von Ein- und Ausatmen erzeugt einen schnellen kontinuierlichen Puls. Eine Runde endet, wenn eine Teilnehmerin den Rhythmus verliert, außer Atem gerät oder lachen muss.",
      "Katajjaq ist Spiel, musikalischer Wettkampf und soziale Begegnung. Die Motive greifen Tiere, Wind, Werkzeuge oder reine Klanggesten auf. In verschiedenen Inuit-Gemeinschaften existieren verwandte Formen und eigene Bezeichnungen. Das Video dokumentiert die körperliche Nähe und den Humor der Aufführung, zwei Aspekte, die eine reine Tonaufnahme kaum vermittelt."
    ],
    media:[Y("hWN36wBKFBM","Katajjaq · Inuit throat singing")],
    sources:[S("Canadian Encyclopedia: Inuit Vocal Games","https://thecanadianencyclopedia.ca/en/article/inuit-vocal-games")]
  },
  {
    category:"Seltene Musikstile",title:"Baul · Bengalen",
    detail:[
      "Baul-Sänger tragen Gedichte über den „Menschen des Herzens“, den Körper und die Suche nach unmittelbarer Erkenntnis vor. Häufig begleiten ektara, dotara, Trommel und Fußschellen den Gesang. Melodie und Text bleiben beweglich; eine einfache instrumentale Figur trägt lange Strophen.",
      "Baul bezeichnet zugleich Musiker, Lebensweg und ein offenes Feld religiöser Ideen. Einflüsse aus Vaishnava-Bhakti, Sufismus und tantrischen Praktiken treffen auf Kritik an Kaste, Buchgelehrsamkeit und äußerem Ritual. Meister geben Lieder mündlich weiter, Sänger verändern Verse in der Aufführung. Das UNESCO-Video zeigt Wanderschaft, Fest und Unterricht."
    ],
    media:[Y("L-KUUDi11R0","UNESCO · Baul Songs")],
    sources:[S("UNESCO: Baul songs","https://ich.unesco.org/en/RL/baul-songs-00107")]
  },
  {
    category:"Seltene Musikstile",title:"Nhã nhạc · Vietnam",
    detail:[
      "Nhã nhạc bedeutet „elegante Musik“ und bezeichnet die zeremonielle Musik des vietnamesischen Kaiserhofs, besonders unter der Nguyễn-Dynastie in Huế. Doppelrohrblätter, Flöten, zweisaitige Fiedeln, Lauten, Zithern, Trommeln und Gongs bilden Ensembles verschiedener Größe.",
      "Das Repertoire begleitete Krönung, Empfang, Opfer, Tempelritual und Ahnenverehrung. Jede Zeremonie verlangte eine festgelegte Folge von Stücken, Aufstellungen und Bewegungen. Hofmusik nahm über Jahrhunderte Einflüsse aus China und aus vietnamesischen Regionaltraditionen auf. Das UNESCO-Video dokumentiert Instrumente, Kostüm, Tanz und den historischen Aufführungsraum in Huế."
    ],
    media:[Y("G5X7KUtbEkk","UNESCO · Nha Nhac, Vietnamese Court Music")],
    sources:[S("UNESCO: Nha Nhac","https://ich.unesco.org/en/RL/nha-nhac-vietnamese-court-music-00074")]
  },
  {
    category:"Seltene Musikstile",title:"Irakischer Maqam",
    detail:[
      "Der irakische Maqam ist eine urbane Vokalsuite. Ein Sänger führt klassische oder irakisch-arabische Dichtung durch festgelegte Haupt- und Nebenmodi. Ornament, Registerwechsel und improvisierte Übergänge geben jeder Aufführung ihre Form. Das chalghi-Ensemble begleitet mit Santur, Joza, Dumbek und Riqq.",
      "Traditionelle Folgen verbinden den Maqam mit rhythmischen Liedern, den pesta. Bagdad wurde zum wichtigsten Zentrum, daneben entstanden Schulen in Mosul und Kirkuk. Sänger brauchen lange Ausbildung in Dichtung, Aussprache, Modus und Atemführung. Das UNESCO-Video zeigt eine vollständige Aufführungssituation und die enge Reaktion zwischen Stimme und Instrumenten."
    ],
    media:[Y("NOrqQKL99eo","UNESCO · Iraqi Maqam")],
    sources:[S("UNESCO: Iraqi Maqam","https://ich.unesco.org/en/RL/iraqi-maqam-00076")]
  },

  {
    category:"Vergessene Komponisten",title:"Louise Farrenc · Sinfonie Nr. 3 g-Moll, Scherzo",
    detail:[
      "Louise Farrenc war Pianistin, Komponistin, Professorin am Pariser Conservatoire und Mitherausgeberin der großen historischen Klaviersammlung „Le Trésor des pianistes“. Ihre dritte Sinfonie entstand 1847 und wurde 1849 vom Orchester der Société des Concerts du Conservatoire uraufgeführt.",
      "Das Scherzo zeigt ihre besondere Behandlung des Orchesters. Ein nervöser Streichersatz treibt vorwärts, Holzbläser setzen eigenständige Farben und kleine motivische Zellen wechseln schnell zwischen den Gruppen. Form, Instrumentation und rhythmische Energie tragen den Satz gemeinsam. Farrencs Sinfonien verschwanden nach ihrem Tod aus dem Repertoire; neue Aufführungen zeigen eine der stärksten französischen Sinfonikerinnen der Romantik."
    ],
    media:[Y("wRNkE1nZZ4M","Insula Orchestra · Laurence Equilbey · Scherzo aus Sinfonie Nr. 3")],
    sources:[S("Bru Zane Mediabase: Symphony No. 3","https://www.bruzanemediabase.com/en/exploration/works/symphony-no-3-g-minor-louise-farrenc")]
  },
  {
    category:"Vergessene Komponisten",title:"Dora Pejačević · Sinfonie fis-Moll op. 41",
    detail:[
      "Dora Pejačević erhielt Unterricht in Zagreb, Dresden und München und entwickelte ihr Werk weitgehend außerhalb einer festen Institution. Sie schrieb Lieder, Klavier- und Kammermusik sowie die erste bedeutende moderne Sinfonie Kroatiens. Die Partitur entstand 1916/17 und wurde für die vollständige Dresdner Aufführung von 1920 überarbeitet.",
      "Ein breites Hauptthema, chromatische Nebenstimmen und starke Bläserlinien prägen den ersten Satz. Das Andante spannt lange melodische Bögen, das Scherzo arbeitet mit federnder Bewegung, und das Finale führt Material der Sinfonie in eine große Steigerung. Pejačević kannte die mitteleuropäische Spätromantik genau und formte daraus eine eigene klare Dramaturgie."
    ],
    media:[Y("dOJSEQZYJWY","hr-Sinfonieorchester · Dora Pejačević: Sinfonie fis-Moll")],
    sources:[S("Croatian Music Information Centre: Dora Pejačević","https://mic.hr/en/dora-pejacevic/")]
  },
  {
    category:"Vergessene Komponisten",title:"Rued Langgaard · Sphärenmusik",
    detail:[
      "Rued Langgaard komponierte „Sphärenmusik“ zwischen 1916 und 1918 für großes Orchester, Chor, Orgel, Klavier und ein entfernt aufgestelltes Orchester. Die Uraufführung fand 1921 in Karlsruhe statt. In Dänemark blieb Langgaard lange am Rand eines Musiklebens, das sich stark an Carl Nielsen orientierte.",
      "Die Musik entwickelt sich in Flächen und räumlichen Schichten. Ein Akkord steht lange, während fernes Orchester, Solostimme oder Chor einen anderen Zeitmaßstab öffnen. Langgaard notierte Spiel im Inneren des Klaviers und überschrieb einen Abschnitt mit „Anti-Musik“. Die Partitur sucht weniger ein sinfonisches Ziel als einen Klangraum, in dem Nähe, Ferne und Stillstand selbst zum Material werden."
    ],
    media:[Y("-GixaHxgwYc","Rued Langgaard · Sphärenmusik")],
    sources:[S("Danish Centre for Music Editing: Rued Langgaard","https://www.kb.dk/en/dcm/editions/langgaard")]
  },
  {
    category:"Vergessene Komponisten",title:"Vítězslava Kaprálová · Militär-Sinfonietta op. 11",
    detail:[
      "Vítězslava Kaprálová schrieb die Militär-Sinfonietta 1936/37 als Abschlussarbeit am Brünner Konservatorium. Sie dirigierte die Uraufführung selbst und leitete das Werk 1938 beim Festival der International Society for Contemporary Music in London. Ihr Tod 1940 im Alter von 25 Jahren beendete ein bereits eigenständiges Werk.",
      "Fanfaren eröffnen die Partitur, doch ihr Ton bleibt beweglich: scharfe Rhythmen, lyrische Holzbläser und überraschende harmonische Richtungen verändern den militärischen Gestus fortlaufend. Kaprálová beherrscht große Form und schnelle Farbwechsel. Die Sinfonietta braucht den biografischen Zusatz vom „frühen Talent“ kaum; sie trägt als vollständiges Orchesterwerk."
    ],
    media:[Y("ADqFVSyyHgw","Vítězslava Kaprálová · Militär-Sinfonietta")],
    sources:[S("Kaprálová Society: The composer","https://www.kapralova.org/LIFE.htm")]
  },
  {
    category:"Vergessene Komponisten",title:"Mel Bonis · Femmes de légende",
    detail:[
      "Mélanie Bonis studierte am Pariser Conservatoire und veröffentlichte unter dem geschlechtsneutralen Namen Mel Bonis. Ihre Werke umfassen Klaviermusik, Kammermusik, Lieder, Orgel- und Orchestermusik. Die sieben Klavierstücke der später so genannten „Femmes de légende“ entstanden zwischen den 1890er Jahren und 1913.",
      "Phoebé, Salomé, Mélisande, Desdémone, Omphale, Ophélie und Viviane erhalten jeweils eine eigene Bewegungsart und Harmonik. In „Ophélie“ treibt eine wellenartige Figur unter einer zarten, zunehmend instabilen Melodie. „Salomé“ arbeitet mit scharfem Tanzimpuls; „Desdémone“ verdichtet Klage in kleine Intervalle. Maria Stembolskaia spielt im Video den vollständigen Zyklus."
    ],
    media:[Y("ANbF57KP9Ys","Maria Stembolskaia · Mel Bonis: Femmes de légende")],
    sources:[S("Association Mel Bonis: Femmes de légende","https://www.mel-bonis.com/EN/Partitions/28/femmes-de-legende-piano/")]
  },
  {
    category:"Vergessene Komponisten",title:"Joseph Martin Kraus · Sinfonie c-Moll VB 142",
    detail:[
      "Joseph Martin Kraus wurde 1756 geboren, im selben Jahr wie Mozart, und wirkte ab 1778 am Hof Gustav III. von Schweden. Als Kapellmeister reformierte er Oper, Orchester und Konzertleben in Stockholm. Die c-Moll-Sinfonie entstand aus einer früheren cis-Moll-Fassung und wurde wahrscheinlich für seine europäische Reise überarbeitet.",
      "Eine langsame Einleitung führt in ein Allegro aus Synkopen, Pausen und raschen dynamischen Gegensätzen. Der langsame Satz hält die melodische Linie unter harmonischem Druck, das Finale zieht das Material in einen knappen, unruhigen Lauf. Concerto Köln spielt mit der Schärfe historischer Instrumente und macht Kraus’ eigene Sprache neben Haydn und Mozart gut hörbar."
    ],
    media:[Y("tfzKhUd_sjQ","Concerto Köln · Joseph Martin Kraus: Sinfonie c-Moll VB 142")],
    sources:[S("Swedish Musical Heritage: Joseph Martin Kraus","https://www.swedishmusicalheritage.com/composers/kraus-joseph-martin/")]
  },
  {
    category:"Vergessene Komponisten",title:"Juan Crisóstomo de Arriaga · Sinfonie D-Dur",
    detail:[
      "Juan Crisóstomo de Arriaga wurde 1806 in Bilbao geboren, schrieb als Jugendlicher Oper und Kammermusik und studierte ab 1821 am Pariser Conservatoire. Er starb zehn Tage vor seinem zwanzigsten Geburtstag. Die Sinfonie D-Dur entstand wahrscheinlich um 1824 und blieb als Manuskript erhalten.",
      "Die langsame Einleitung beginnt in d-Moll; auch später werfen Mollfelder Schatten in die helle Grundtonart. Arriaga arbeitet mit kurzen Motiven, klaren Bläsersätzen und plötzlichen harmonischen Wendungen. Der Beiname „spanischer Mozart“ erklärt Alter und Begabung, verdeckt jedoch die eigene Mischung aus klassischer Form, französischer Orchesterpraxis und frühromantischer Spannung."
    ],
    media:[Y("lpnumm9-0uw","Juan Crisóstomo de Arriaga · Sinfonie D-Dur")],
    sources:[S("Biblioteca Nacional de España: Juan Crisóstomo de Arriaga","https://www.bne.es/es/autores/arriaga-juan-crisostomo")]
  },
  {
    category:"Vergessene Komponisten",title:"Albéric Magnard · Sinfonie Nr. 4 cis-Moll op. 21",
    detail:[
      "Albéric Magnard schrieb vier Sinfonien, Opern und Kammermusik und ließ viele Partituren auf eigene Kosten drucken. Die vierte Sinfonie entstand 1911–13. Magnard starb 1914 in seinem Haus in Baron, als deutsche Soldaten das Gebäude in Brand setzten; mehrere Manuskripte gingen dabei verloren.",
      "Die Vierte baut aus dichtem Kontrapunkt eine deutlich französische Orchesterfarbe. Themen kehren über Satzgrenzen hinweg und verändern ihre Funktion. Das Scherzo ist kurz und schneidend, der langsame Satz hält Wärme und harmonische Reibung zusammen, das Finale führt frühere Motive in eine kraftvolle Ordnung. Michel Plasson und das Orchestre du Capitole de Toulouse spielen das vollständige Werk."
    ],
    media:[Y("SDwfH5EsicA","Orchestre du Capitole de Toulouse · Magnard: Sinfonie Nr. 4")],
    sources:[S("Bru Zane Mediabase: Albéric Magnard","https://www.bruzanemediabase.com/exploration/artistes/magnard-alberic")]
  },
  {
    category:"Vergessene Komponisten",title:"Grażyna Bacewicz · Konzert für Streichorchester",
    detail:[
      "Grażyna Bacewicz war Violinistin, Konzertmeisterin des Polnischen Radioorchesters und eine der zentralen polnischen Komponistinnen des 20. Jahrhunderts. Das Konzert für Streichorchester entstand 1948 und wurde 1950 mit dem polnischen Staatspreis ausgezeichnet.",
      "Der erste Satz setzt kurze, motorische Figuren in kontrapunktische Bewegung. Das Andante baut einen langen Gesang über dunklen Stimmen auf. Im Finale springen Taktarten und Akzente, während Motive zwischen den Gruppen wechseln. Bacewicz schreibt aus genauer Kenntnis der Streichinstrumente: Jede Stimme besitzt Profil, und der Gesamtklang bleibt durchsichtig. Ruth Reinhardt dirigiert das Frankfurt Radio Symphony im hr-Sendesaal."
    ],
    media:[Y("-wCsnjWlW40","Frankfurt Radio Symphony · Bacewicz: Konzert für Streichorchester")],
    sources:[S("Polish Music Information Centre: Concerto for String Orchestra","https://bacewicz.polmic.pl/en/concerto-for-string-orchestra/")]
  },
  {
    category:"Vergessene Komponisten",title:"Mieczysław Weinberg · Klavierquintett op. 18",
    detail:[
      "Mieczysław Weinberg floh 1939 aus Warschau nach Minsk, 1941 weiter nach Taschkent und gelangte 1943 nach Moskau. Dort entstand 1944 das Klavierquintett. Dmitri Schostakowitsch wurde Freund und Förderer; Weinbergs Musik besitzt dennoch eigene melodische, rhythmische und dramatische Verfahren.",
      "Fünf Sätze führen von einem breit erzählten Moderato über einen knappen Tanz und ein rasendes Presto zu einem schweren Largo. Im Finale kehren marschartige und jüdisch gefärbte Gesten in wechselnder Beleuchtung wieder; die Coda zieht sich in eine leise, erschöpfte Ruhe zurück. Das ARC Ensemble spielt das vollständige Werk und lässt die verschiedenen Gewichte von Klavier und Streichquartett klar hervortreten."
    ],
    media:[Y("TDPWqjuSJKc","ARC Ensemble · Weinberg: Klavierquintett op. 18")],
    sources:[S("Orel Foundation: Mieczysław Weinberg","https://orelfoundation.org/composers/article/mieczyslaw_weinberg")]
  },

  {
    category:"Großartige Bilder und Design",title:"Marianne Brandt · Tee-Extraktkännchen MT 49",
    detail:[
      "Marianne Brandt entwarf das kleine Kännchen 1924 in der Metallwerkstatt des Bauhauses. Kugel, Kreis und Kreuz bestimmen den Aufbau. Der flache Körper hält eine konzentrierte Tee-Essenz; heißes Wasser wird erst in der Tasse ergänzt. Ebenholz an Griff und Knauf schützt die Hand vor Wärme.",
      "Das Objekt wirkt wie ein Muster industrieller Serienproduktion, wurde jedoch in wenigen Exemplaren von Hand aus Silber und Messing gefertigt. Gerade diese Spannung macht es wichtig. Brandt verwendete einfache Geometrie, während Proportion, Ausguss, Schwerpunkt und Materialwechsel sehr genau auf Gebrauch reagieren. Fotografien zeigen auch Varianten mit anderem Griff und anderen Metallen."
    ],
    media:[F("File:Marianne brandt, teiere, 1924 (cropped).JPG","Tee-Extraktkännchen MT 49"),F("File:MarianneBrandt.jpg","Marianne Brandt")],
    sources:[S("The Metropolitan Museum of Art: Tea Infuser and Strainer","https://www.metmuseum.org/art/collection/search/491299")]
  },
  {
    category:"Großartige Bilder und Design",title:"Eileen Gray · Transat Chair",
    detail:[
      "Eileen Gray entwarf den Transat Chair 1927 bis 1929 für das Haus E-1027 an der Côte d’Azur. Der Name kürzt transatlantique ab und verweist auf Liegestühle von Passagierschiffen. Ein lackierter Holzrahmen trägt den Sitz; verchromte Gelenke verbinden die Seitenteile; die gepolsterte Rückenlehne bewegt sich mit dem Körper.",
      "Gray entwickelte das Möbel für einen bestimmten Raum und eine bestimmte Haltung des Körpers. Die gebogenen Kufen, sichtbaren Verbindungen und die schmale Polsterung lassen die Konstruktion ablesbar. Das Victoria and Albert Museum besitzt ein Exemplar von 1929, das in Grays Pariser Galerie Jean Désert gefertigt wurde."
    ],
    media:[F("File:Armchair by Eileen Gray, V&A London 01.jpg","Transat Chair, 1929"),F("File:Eileen Gray.jpg","Eileen Gray")],
    sources:[S("Victoria and Albert Museum: Transat Chair","https://collections.vam.ac.uk/item/O22790/armchair-gray-eileen/")]
  },
  {
    category:"Großartige Bilder und Design",title:"Christopher Dresser · Teekanne, 1879",
    detail:[
      "Christopher Dresser entwarf diese galvanisch versilberte Teekanne für James Dixon & Sons. Ein fast kugelförmiger Körper, ein langer gerader Ausguss und der hohe eckige Griff werden aus wenigen klaren Teilen zusammengesetzt. Kleine Elfenbein- oder Holzstücke begrenzen die Wärmeleitung am Griff.",
      "Dresser war Botaniker, Ornamenttheoretiker und einer der ersten unabhängigen Industriedesigner Großbritanniens. Er lieferte Herstellern Entwürfe für Metall, Glas, Keramik, Tapeten und Textilien. Seine Japanreise von 1876/77 schärfte die Vorliebe für asymmetrische Profile und sichtbare Konstruktion. Die Teekanne wirkt aus heutiger Sicht erstaunlich modern, entstand aber mitten in der viktorianischen Warenwelt."
    ],
    media:[C("Christopher Dresser teapot 1879 James Dixon","Christopher Dresser: Teekanne, 1879")],
    sources:[S("The Metropolitan Museum of Art: Teapot by Christopher Dresser","https://www.metmuseum.org/art/collection/search/3937")]
  },
  {
    category:"Großartige Bilder und Design",title:"Koloman Moser und Josef Hoffmann · Armlehnstuhl, 1903",
    detail:[
      "Koloman Moser und Josef Hoffmann entwarfen diesen Armlehnstuhl 1903. Das Gestell besteht aus Holz, Sitz und Rücken sind mit Rohrgeflecht bespannt. Breite Seitenrahmen, rechtwinklige Verbindungen und das regelmäßige Geflecht bestimmen die Ansicht.",
      "Der Stuhl entstand in dem Jahr, in dem Moser, Hoffmann und Fritz Waerndorfer die Wiener Werkstätte gründeten. Möbel, Metallarbeiten, Stoffe und Drucksachen wurden dort gemeinsam entworfen und von spezialisierten Werkstätten ausgeführt. Das Exemplar des Metropolitan Museum of Art macht die Holzverbindungen und die tragende Funktion des Geflechts genau sichtbar."
    ],
    media:[F("File:Armchair MET DT8308.jpg","Armlehnstuhl, 1903"),F("File:Koloman Moser.jpg","Koloman Moser")],
    sources:[S("Metropolitan Museum of Art: Armchair","https://www.metmuseum.org/art/collection/search/484397")]
  },
  {
    category:"Großartige Bilder und Design",title:"Aino Aalto · Bölgeblick-Glas",
    detail:[
      "Aino Aalto gewann 1932 einen Designwettbewerb des finnischen Glaswerks Karhula-Iittala mit einer Serie aus stapelbaren Gläsern, Schalen und Krügen. Die horizontalen Ringe verstärken die dünne Glaswand, geben den Fingern Halt und verdecken kleine Spuren der maschinellen Herstellung.",
      "Der Name Bölgeblick stammt aus dem Schwedischen und bedeutet „Wellenblick“. Das Relief erinnert an Kreise auf Wasser, erfüllt jedoch mehrere praktische Aufgaben zugleich. Die Gefäße konnten preiswert gepresst, sicher gestapelt und im Alltag verwendet werden. Der Entwurf verbindet damit industrielle Logik und eine ruhige taktile Oberfläche. Er wird seit 1932 fast durchgehend produziert."
    ],
    media:[C("Aino Aalto Bölgeblick glass","Bölgeblick-Gläser")],
    sources:[S("Design Museum Finland: Aino Aalto","https://www.designmuseum.fi/en/collections/aino-aalto/")]
  },
  {
    category:"Großartige Bilder und Design",title:"Anna Ancher · Sonnenlicht im blauen Zimmer",
    detail:[
      "Anna Ancher malte 1891 ihre Tochter Helga im blauen Zimmer des Brøndum-Hauses in Skagen. Das Kind sitzt mit dem Rücken zum Fenster und häkelt. Rechteckige Sonnenflecken liegen auf Wand, Vorhang, Stuhl und Teppich und machen das Zimmer selbst zum Hauptgegenstand.",
      "Ancher kannte die naturalistische Malerei der Skagener Künstler, behandelte Licht jedoch zunehmend als eigenständige Farbstruktur. Blau, Gelb und Grün halten Fläche und Raum gleichzeitig offen. Die Ruhe des Kindes wirkt konkret, weil ihre Tätigkeit klein bleibt und das wandernde Licht den größeren Zeitablauf trägt. Das Bild gehört zu den genauesten Innenräumen des nordischen Realismus."
    ],
    media:[C("Anna Ancher Sunlight in the Blue Room","Sonnenlicht im blauen Zimmer"),C("Anna Ancher interior Brondum house","Innenraum im Brøndum-Haus")],
    sources:[S("Skagens Museum: Anna Ancher","https://skagensmuseum.dk/en/artists/anna-ancher/")]
  },
  {
    category:"Großartige Bilder und Design",title:"Marianne von Werefkin · Der Tänzer Alexander Sacharoff",
    detail:[
      "Marianne von Werefkin malte den Tänzer Alexander Sacharoff 1909. Die Figur steht frontal in einem langen roten Gewand, Hände und Gesicht sind hell gefasst, der dunkle Raum öffnet sich wie eine Bühne. Körperhaltung und Farbe tragen die Bewegung, obwohl der Tänzer fast stillsteht.",
      "Werefkin war Mitbegründerin der Neuen Künstlervereinigung München und gehörte zum Umfeld des Blauen Reiters. In ihren Skizzenbüchern entwickelte sie Kompositionen aus kräftigen Umrissen und psychologisch gesetzter Farbe. Sacharoff arbeitete an einer modernen Tanzform, in der Kostüm, Pose und langsame Geste entscheidend waren. Das Bild ist deshalb Porträt und genaue Analyse seiner Kunst."
    ],
    media:[C("Marianne Werefkin dancer Alexander Sakharoff","Der Tänzer Alexander Sacharoff")],
    sources:[S("Lenbachhaus: Marianne von Werefkin","https://www.lenbachhaus.de/en/discover/collection-online/person/werefkin-marianne-von-2459")]
  },
  {
    category:"Großartige Bilder und Design",title:"Watanabe Seitei · Vögel über Wellen",
    detail:[
      "Watanabe Seitei verband die genaue Pinselmalerei der japanischen Kachō-ga-Tradition mit räumlichen und farblichen Eindrücken aus Europa. Auf seinen Blättern treffen Vögel, Pflanzen, Schnee und Wasser in sehr knappen Situationen zusammen. Große freie Flächen geben jedem Strich Gewicht.",
      "Bei den Vögeln über Wellen kippt die Bewegung schräg durch das Bild. Federn, Schnäbel und Augen sind präzise gesetzt; das Wasser entsteht aus wenigen breiten Kurven und ausgespartem Papier. Seitei arbeitete auch für Cloisonné-Werkstätten und Zeitschriften. Seine Bildordnung beeinflusste japanisches Kunsthandwerk und die europäische Wahrnehmung japanischer Naturdarstellung um 1900."
    ],
    media:[C("Watanabe Seitei bird flower painting","Vogel- und Blumenbild")],
    sources:[S("The Metropolitan Museum of Art: Watanabe Seitei","https://www.metmuseum.org/art/collection/search?q=Watanabe%20Seitei")]
  },
  {
    category:"Großartige Bilder und Design",title:"Utagawa Kuniyoshi · Takiyasha und das Skelettgespenst",
    detail:[
      "Das Triptychon zeigt Prinzessin Takiyasha im verfallenen Palast ihres Vaters Taira no Masakado. Sie liest aus einer Schriftrolle und ruft ein Skelett herbei. Der Held Ōya no Mitsukuni zieht sein Schwert, während das Gerippe durch zerrissene Bambusjalousien in den Raum greift.",
      "Kuniyoshi verteilt den Schädel und die Rippen über zwei Druckblätter. Frühere Darstellungen zeigten viele kleine Skelette; hier entsteht ein einziger Körper in anatomisch glaubwürdiger Größe. Das Gerippe ist zugleich Figur und Architektur. Schwarze Hohlräume verbinden sich mit der Nacht hinter dem Palast, während die weißen Knochen die gesamte Komposition festhalten."
    ],
    media:[C("Kuniyoshi Takiyasha skeleton triptych high resolution","Takiyasha und das Skelettgespenst"),C("Takiyasha the Witch and Skeleton Spectre detail","Detail des Skeletts")],
    sources:[S("Victoria and Albert Museum: Takiyasha the Witch","https://collections.vam.ac.uk/item/O130246/takiyasha-the-witch-and-the-woodblock-print-utagawa-kuniyoshi/")]
  },
  {
    category:"Großartige Bilder und Design",title:"Amrita Sher-Gil · Drei Mädchen",
    detail:[
      "Amrita Sher-Gil malte „Drei Mädchen“ 1935 nach ihrer Rückkehr aus Paris nach Indien. Drei junge Frauen sitzen eng zusammen, ihre Körper bilden eine ruhige geschlossene Gruppe. Die Hände liegen schwer im Schoß; jede blickt in eine andere Richtung oder nach innen.",
      "Große Farbflächen in Rot, Grün, Ocker und Weiß tragen das Bild. Sher-Gil verzichtet auf erzählerische Requisiten und konzentriert die soziale Lage in Haltung, Stoff und Abstand. Sie schrieb über die „unendlich traurigen Augen“ der Menschen, die sie malen wollte. Das Bild wurde 1937 auf der Ausstellung der Bombay Art Society ausgezeichnet und gehört heute zur National Gallery of Modern Art in Neu-Delhi."
    ],
    media:[C("Amrita Sher-Gil Three Girls 1935","Drei Mädchen"),C("Amrita Sher-Gil portrait photograph","Selbstbildnis von Amrita Sher-Gil")],
    sources:[S("National Gallery of Modern Art India: Three Girls","https://ngmaindia.gov.in/virtual-tour-of-amrita-sher-gil.asp")]
  },

  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Rabe bringt das Tageslicht · Tlingit",
    detail:[
      "John R. Swanton veröffentlichte die Erzählung 1909 im Bulletin 39 des Bureau of American Ethnology. Die hier verwendete Wrangell-Fassung steht im Abschnitt „Myths recorded in English at Wrangell“. Swanton beschreibt, dass in früherer Zeit vor allem hochgestellte Personen die lange Raven-Erzählung vollständig beherrschten.",
      "Am Anfang liegt die Welt im Dunkeln. Raven-at-the-head-of-Nass bewahrt Sonne, Mond, Sterne und Tageslicht in seinem Haus. Raven lässt sich als Kind seiner Tochter wiedergebären. Als Enkel gewinnt er durch anhaltendes Weinen zuerst Mond und Sterne, zuletzt die Schachtel mit dem Tageslicht. Am Nass River öffnet er sie vor Menschen, die im Dunkeln Eulachon fischen. Das Licht fährt heraus und verändert Menschen und Tiere.",
      "Die Ausgabe enthält englische Erzähltexte, Tlingit-Texte, Interlinearübersetzungen und Angaben zu verschiedenen Orten. Sie bewahrt mehrere Fassungen nebeneinander. Schreibweise und Übersetzung folgen Swantons wissenschaftlicher Praxis von 1909; heutige Tlingit-Orthografien und Erklärungen setzen andere Maßstäbe."
    ],
    original:{label:"John R. Swanton, Tlingit Myths and Texts, 1909",text:"At the beginning of things there was no daylight and the world lay in blackness."},
    media:[C("Tlingit Raven mask museum","Tlingit-Rabenmaske"),C("Tlingit Raven rattle","Tlingit-Rabenrassel")],
    sources:[S("Wikisource: Wrangell Raven Myth","https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts/Wrangell_Raven_Myth"),S("Library of Congress: Originalausgabe","https://www.loc.gov/item/09026433/")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Sedna und der Eissturmvogel · Oqomiut und Akudnirmiut",
    detail:[
      "Franz Boas nahm die Erzählung während seiner Reise in Cumberland Sound und an der Davisstraße 1883–84 auf. Er nennt Oqomiut und Akudnirmiut als Herkunft der ausführlichen Fassung. Sie erschien 1888 im sechsten Jahresbericht des Bureau of Ethnology unter dem Titel „The Central Eskimo“.",
      "Sedna lebt mit ihrem Vater an einer einsamen Küste. Ein Eissturmvogel wirbt um sie und verspricht ein warmes Haus, Felle und reichlich Nahrung. In seinem Land findet sie ein zerrissenes Zelt und rohen Fisch. Ihr Vater holt sie im Boot zurück und tötet den Vogel. Dessen Gefährten schlagen mit ihren Flügeln einen Sturm. Der Vater wirft Sedna ins Meer und schneidet ihre Finger vom Bootsrand. Aus den Fingergliedern werden Wale, Ringelrobben und Bartrobben. Später sinken Vater, Tochter und Hunde in die Unterwelt Adlivun.",
      "Boas stellt außerdem eine Liedfassung vor, die einzelne Handlungen verändert. Schon die frühe Publikation zeigt damit mehrere Überlieferungswege. Die Bezeichnungen der Inuit-Gruppen und die englische Übersetzung folgen dem historischen Dokument."
    ],
    original:{label:"Franz Boas, The Central Eskimo, 1888",text:"Once upon a time there lived on a solitary shore an Inung with his daughter Sedna."},
    media:[C("Sedna Inuit sculpture","Sedna, Inuit-Skulptur"),C("Fulmar bird Arctic","Eissturmvogel")],
    sources:[S("Project Gutenberg: The Central Eskimo","https://www.gutenberg.org/files/42084/42084-h/42084-h.htm"),S("Smithsonian Repository: Originalausgabe","https://repository.si.edu/handle/10088/91644")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Māui fängt die Sonne · Māori",
    detail:[
      "George Grey veröffentlichte die englische Fassung 1855 in „Polynesian Mythology and Ancient Traditional History of the New Zealand Race“. Wesentliche Manuskripte und Erzähltexte erhielt er von Wiremu Maihi Te Rangikāheke und weiteren Māori-Gelehrten, deren Arbeit auf dem Titelblatt der frühen Ausgabe kaum sichtbar wurde.",
      "Die Tage sind so kurz, dass Menschen ihre Nahrung und Arbeit kaum vollenden. Māui schlägt seinen Brüdern vor, die Sonne zu fangen. Gemeinsam flechten sie verschiedene starke Seile aus Flachs und reisen nur nachts nach Osten. Am Ort des Sonnenaufgangs bauen sie Mauern und Verstecke. Als die Sonne emporsteigt, werfen sie die Schlingen über ihre Strahlen. Māui schlägt sie mit der Kinnlade seiner Ahnfrau Muri-ranga-whenua und zwingt sie zu einer langsameren Bahn.",
      "Greys Übersetzung erklärt neben der Handlung auch Begriffe für verschiedene Flechttechniken. Die Episode bindet kosmische Ordnung an konkrete Arbeit: Flachs vorbereiten, Seile herstellen, Wege planen und gemeinsam ziehen."
    ],
    original:{label:"George Grey, Polynesian Mythology, 1855",text:"Let us now catch the sun in a noose, so that we may compel him to move more slowly."},
    media:[F("File:Maui Snaring the Sun, pen and ink, circa 1927, Honolulu Academy of Arts.jpg","Māui fängt die Sonne"),I("https://media.tepapa.govt.nz/collection/680746/preview","https://collections.tepapa.govt.nz/object/1963653","Māui und seine Brüder bändigen die Sonne","Museum of New Zealand Te Papa Tongarewa")],
    sources:[S("Sacred Texts: The Legend of Maui","https://www.sacred-texts.com/pac/grey/grey04.htm"),S("Te Ara: Māui","https://teara.govt.nz/en/document/3802/maui")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Warum Sonne und Mond am Himmel leben · Efik",
    detail:[
      "Elphinstone Dayrell veröffentlichte diese Fassung 1910 in „Folk Stories from Southern Nigeria, West Africa“. Er arbeitete als britischer Kolonialbeamter im Cross-River-Gebiet und ordnete die Sammlung den Efik zu. Namen einzelner Erzählerinnen oder Erzähler fehlen in der Ausgabe.",
      "Sonne und Wasser leben auf der Erde und sind Freunde. Sonne besucht Wasser oft; Wasser bleibt fern, weil sein Gefolge jedes Haus füllen würde. Sonne baut mit Mond einen riesigen ummauerten Hof und lädt Wasser ein. Zuerst steigt es bis zu den Knien, dann über die Köpfe. Fische und Wassertiere strömen weiter herein. Sonne und Mond klettern auf das Dach. Als auch dieses überspült wird, ziehen sie an den Himmel und bleiben dort.",
      "Die Erzählung entwickelt ihre Größe aus wiederholter Höflichkeit. Sonne erlaubt bei jeder Nachfrage den weiteren Eintritt. Wasser handelt genau nach seiner Warnung. Dayrells englischer Text ist eine kolonialzeitliche Übertragung; die fehlenden Stimmen der Überliefernden gehören zur Quellenkritik."
    ],
    original:{label:"Elphinstone Dayrell, Folk Stories from Southern Nigeria, 1910",text:"Many years ago the sun and water were great friends, and both lived on the earth together."},
    media:[C("Cross River landscape Nigeria","Cross River")],
    sources:[S("Sacred Texts: Why the Sun and the Moon live in the Sky","https://sacred-texts.com/afr/fssn/fsn18.htm"),S("Project Gutenberg: vollständige Sammlung","https://www.gutenberg.org/ebooks/34655")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Sonne, Mond und ihre Kinder · Visayas",
    detail:[
      "Mabel Cook Cole veröffentlichte die Erzählung 1916 in „Philippine Folk Tales“. Ihr Material stammte aus Feldarbeit, aus Manuskripten und von Studierenden der University of the Philippines. Die kurze Fassung steht im Abschnitt „The Christianized Tribes“ und trägt die regionale Angabe Visayan.",
      "Sonne und Mond sind verheiratet, ihre Kinder sind die Sterne. Sonne liebt die Kinder, verbrennt sie jedoch bei jeder Umarmung. Mond warnt ihn und geht eines Morgens fort. Sonne nimmt die Kinder trotzdem in die Arme; viele sterben. Mond schlägt ihn aus Zorn, und Sonne verfolgt sie. Seitdem bewegen sich beide über den Himmel. Wenn Mond Sterne mit sich führt, erreicht Sonne sie am Tag kaum.",
      "Die Erzählung gibt Himmelsbeobachtung als Familienkonflikt wieder: Wärme erklärt die Unsichtbarkeit der Sterne am Tag, Verfolgung den Wechsel von Sonne und Mond. Coles Sammelkategorie deckt viele Sprachen und lokale Traditionen ab; „Visayan“ bleibt daher eine grobe Herkunftsangabe."
    ],
    original:{label:"Mabel Cook Cole, Philippine Folk Tales, 1916",text:"Once upon a time the Sun and the Moon were married, and they had many children who were the stars."},
    media:[C("Philippine Folk Tales Mabel Cook Cole title page","Philippine Folk Tales, 1916")],
    sources:[S("SurLaLune: The Sun and the Moon","https://surlalunefairytales.com/oldsite/books/philippines/cole/christiansunmoon.html"),S("Project Gutenberg: Philippine Folk Tales","https://www.gutenberg.org/ebooks/12814")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Das arme Truthahnmädchen · Zuni",
    detail:[
      "Frank Hamilton Cushing lebte ab 1879 in Zuni und veröffentlichte zahlreiche Erzählungen. „The Poor Turkey Girl“ erschien 1901 postum in „Zuñi Folk Tales“. Cushing gab sich als Übersetzer und Bearbeiter an; die gedruckte Fassung nennt für diese Geschichte keine einzelne erzählende Person.",
      "Ein armes Mädchen hütet die Truthähne reicher Familien von Mátsaki. Die Vögel sprechen zu ihr und bieten Hilfe für ein Fest an. Sie baden das Mädchen, glätten ihr Haar, geben ihr Schmuck und ein schönes Kleid. Dafür soll sie früh zurückkehren und den Stall öffnen. Beim Tanz vergisst sie die Zeit. Die Truthähne brechen selbst aus, ziehen singend zum Cañon Mesa und fliegen davon. Als das Mädchen zurückläuft, verwandelt sich ihre Kleidung wieder in Lumpen.",
      "Die Fassung endet mit Spuren im Fels: Truthahntritte und Zeichen des Liedes. Das bekannte Motiv der verwandelten armen Heldin führt hier zu einer Geschichte über Gegenseitigkeit, Versprechen und den Verlust domestizierter Tiere."
    ],
    original:{label:"Frank Hamilton Cushing, Zuñi Folk Tales, 1901",text:"Long, long ago, our ancients had neither sheep nor horses nor cattle; yet they had domestic animals of various kinds."},
    media:[C("Zuni Turkey Girl illustration Cushing","Historische Märchensammlung mit der Erzählung"),C("Zuni Pueblo historic photograph","Zuni Pueblo")],
    sources:[S("Sacred Texts: The Poor Turkey Girl","https://www.sacred-texts.com/nam/zuni/zft/zft05.htm"),S("Project Gutenberg: Zuñi Folk Tales","https://www.gutenberg.org/ebooks/54682")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Ṣàngó verlässt Ọ̀yọ́ · Yoruba",
    detail:[
      "A. B. Ellis veröffentlichte 1894 „The Yoruba-Speaking Peoples of the Slave Coast of West Africa“. Als britischer Offizier schrieb er aus kolonialer Perspektive. Seine Sammlung bewahrt frühe englische Fassungen, vermischt jedoch religiöse Praxis, mündliche Geschichte und eigene Wertungen. Die Namen seiner Gewährspersonen bleiben meist ungenannt.",
      "In der von Ellis wiedergegebenen historischen Erzählung wird Ṣàngó als König von Ọ̀yọ́ unerträglich. Die führenden Männer schicken ihm Papageieneier als Zeichen, dass seine Regierungszeit enden soll. Er versucht Anhänger zu sammeln, flieht nachts in Richtung Tapa und bleibt zuletzt mit einem Sklaven im Wald. Dort verschwindet er. Seine Anhänger erklären, Ṣàngó sei zur Erde gegangen; Gegner sagen, er habe sich erhängt. Blitz und Donner werden zum Zeichen seiner fortdauernden Macht.",
      "Yoruba- und Diasporatraditionen kennen viele weitere patakí, Lobnamen und rituelle Deutungen Ṣàngós. Ellis’ Text bildet eine historische Schicht unter mehreren und braucht diese klare Begrenzung."
    ],
    original:{label:"A. B. Ellis, The Yoruba-Speaking Peoples, 1894",text:"The foregoing are, with the exception of the myth of the fiery chains, the old ideas respecting Shango."},
    media:[C("Shango Yoruba staff museum","Yoruba-Stab für Ṣàngó"),C("Shango dance Yoruba Nigeria","Ṣàngó-Tanz")],
    sources:[S("Originalausgabe als PDF · Wikimedia Commons","https://commons.wikimedia.org/wiki/File:THE_YORUBA_SPEAKING_PEOPLE_OF_THE_SLAVE_COAST_OF_WEST_AFRICA_by_A._B_Ellis.pdf")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Raven reist · Haida",
    detail:[
      "John R. Swanton nahm die Texte im Winter 1900/01 in Skidegate auf Haida Gwaii auf. „Haida Texts and Myths: Skidegate Dialect“ erschien 1905 als Bulletin 29 des Bureau of American Ethnology. Für „Raven Traveling“ nennt er zwei Erzähler: John Sky von Those-born-at-Skedans und Job Moody von den Witch People.",
      "Die Erzählung beginnt auf einer vom Salzwasser bedeckten Insel. Raven sucht einen Sitzplatz und findet einen flachen Felsen, auf dem übernatürliche Wesen übereinander schlafen. Danach setzen viele Episoden ein: Raven gewinnt Licht, Nahrung und Wasser, täuscht Gastgeber, wird selbst getäuscht und verändert Landschaften. Der Zyklus folgt weniger einer geraden Heldenreise als einer Folge von Hunger, Einfall, Verwandlung und Folgen.",
      "Swanton druckte einen Teil der Sammlung auf Haida mit freier und interlinearer englischer Übersetzung. „Raven Traveling“ erscheint als englische Wiedergabe. Sprecherangaben, Dialekt und Ortsbezug machen die Ausgabe besonders wertvoll."
    ],
    original:{label:"John R. Swanton, Haida Texts and Myths, 1905",text:"Over this island salt water extended, they say. Raven flew about. He looked for a place upon which to sit."},
    media:[C("Haida Raven mask Charles Edenshaw","Haida-Rabenmaske")],
    sources:[S("Project Gutenberg: Haida Texts and Myths","https://www.gutenberg.org/ebooks/74172"),S("Raven Traveling mit Sprecherangaben","https://tianmu.org/good-work-library/native-american/haida/oral-literature/haida-texts-and-myths-skidegate-dialect")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Das Lied des Eulengottes · Ainu",
    detail:[
      "Chiri Yukie schrieb dreizehn kamuy yukar in romanisiertem Ainu auf und übersetzte sie selbst ins Japanische. Die Gesänge hatte sie vor allem von ihrer Tante Imekanu und ihrer Großmutter Monashinouku gehört. „Ainu Shin’yōshū“ erschien 1923, ein Jahr nach Chiris Tod im Alter von neunzehn Jahren.",
      "Im ersten Gesang spricht der Eulengott selbst. Er fliegt über ein Dorf, während silberne und goldene Tropfen um ihn fallen. Reiche Kinder schießen mit goldenen Pfeilen und verfehlen. Der arme Sohn einer ehemals angesehenen Familie trifft mit einem schlichten Holzpfeil. Der Eulengott nimmt die Gabe an, besucht das Haus, füllt es mit Reichtum und lehrt die Gemeinschaft den angemessenen Umgang mit Tiergöttern und Geschenken.",
      "Die Ich-Perspektive ist entscheidend. Ein kamuy berichtet von seinem Weg durch Menschen- und Götterwelt. Chiris parallele Ainu- und japanische Fassung bewahrt Klang, Refrain und Erläuterungen aus einer Ainu-Familie."
    ],
    original:{label:"Chiri Yukie, Ainu Shin’yōshū, 1923 · Refrain in Ainu",text:"Shirokanipe ranran pishkan, konkanipe ranran pishkan."},
    media:[C("Chiri Yukie 1922 photograph","Chiri Yukie")],
    sources:[S("Hokkaido Digital Museum: Ainu Shin’yōshū","https://hokkaido-digital-museum.jp/en/hokkaido/ainu/a-02/"),S("Englische Übersetzung mit Kommentar","https://apjjf.org/2016/15/Chiri")]
  },
  {
    category:"Märchen und Sagen in ethnografischen Quellen",title:"Scarface im Haus der Sonne · Blackfoot",
    detail:[
      "George Bird Grinnell veröffentlichte die Erzählung 1892 unter dem Titel „Scarface“ in „Blackfoot Lodge Tales“. Er sammelte Geschichten bei Angehörigen der Blackfoot Confederacy, nennt in der Druckfassung dieser Episode jedoch keine einzelne Erzählerin oder keinen einzelnen Erzähler. Die englische Prosa trägt deutliche Spuren seiner Bearbeitung.",
      "Ein armer junger Mann mit einer Narbe liebt eine Frau, die der Sonne ein Gelübde gegeben hat. Er reist westwärts bis zum Haus von Sonne und Mond. Dort freundet er sich mit Morning Star an. Trotz einer Warnung greifen tödliche Vögel am großen Wasser an; Scarface tötet sie und rettet Morning Star. Sonne entfernt daraufhin seine Narbe, gibt ihm bemalte Kleidung, Rabenfedern und die Anweisung für die Medicine Lodge.",
      "Scarface kehrt zurück, heiratet die Frau und richtet die erste Zeremonie nach den erhaltenen Vorgaben aus. Die Erzählung verbindet persönliche Heilung, kosmische Verwandtschaft und rituelle Autorität. Gegenwärtige Blackfoot-Erklärungen der Okan-Zeremonie stehen unter der Verantwortung der Gemeinschaften selbst."
    ],
    original:{label:"George Bird Grinnell, Blackfoot Lodge Tales, 1892",text:"Once there was a very poor young man, who had no relations, and lived by himself."},
    media:[C("Blackfoot tipi photograph historic","Blackfoot-Tipi")],
    sources:[S("Sacred Texts: Blackfoot Lodge Tales","https://www.sacred-texts.com/nam/pla/blt/index.htm"),S("Native Memory Project: Star Boy","https://nativememoryproject.org/story/star-boy/")]
  },

  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Sedna · Inuit",
    detail:[
      "Sedna heißt je nach Region und Sprache unter anderem Nuliajuk, Sanna, Arnakuagsak oder Takánakapsâluk. Die Erzählungen aus Baffin Island, Labrador, Grönland und der zentralen Arktis unterscheiden Herkunft, Ehemann, Vaterfigur und Verlauf. In vielen Fassungen wird eine junge Frau auf dem Meer ins Wasser gestoßen. Als sie sich am Boot festhält, trennt ihr Begleiter die Finger ab. Aus den Gliedern entstehen Robben, Walrosse und Wale.",
      "Sedna sinkt auf den Meeresgrund und wird Herrin der jagdbaren Meerestiere. Menschliche Verstöße, achtlos behandelte Tierkörper oder gebrochene Regeln sammeln sich als Schmutz in ihrem Haar. Da ihr die Finger fehlen, kann sie es selbst kaum ordnen. Ein angakkuq reist im Ritual zu ihr, beruhigt sie und kämmt das Haar. Danach gibt sie die Tiere wieder frei und die Jagd kann gelingen.",
      "Die Geschichte verbindet Nahrung mit Verpflichtung. Meerestiere stehen Menschen als handelnde Wesen gegenüber; Jagderfolg verlangt respektvolle Beziehungen. Sedna ist damit Ahnherrin der Tiere, verletzte Tochter, mächtige Bewohnerin der Tiefe und zentrale Figur schamanischer Reisen."
    ],
    media:[C("Sedna Inuit sculpture","Sedna oder Nuliajuk"),C("Inuit seal hunting historic photograph","Inuk im Kajak")],
    sources:[S("Franz Boas: The Central Eskimo","https://www.gutenberg.org/files/42084/42084-h/42084-h.htm"),S("Inuit Art Foundation: Nuliajuk","https://www.inuitartfoundation.org/iaq-online/29-2-sedna")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Anansi · Akan und Karibik",
    detail:[
      "Anansi ist eine Spinne, ein Mann oder beides zugleich. In einer Akan-Erzählung besitzt der Himmelsgott Nyame alle Geschichten. Anansi will sie kaufen. Der Preis besteht aus schwer fangbaren Wesen: der Python Onini, dem Leoparden Osebo, den Hornissen Mmoboro und der Fee Mmoatia. Mit seiner Frau Aso plant er für jedes Ziel eine andere List.",
      "Er überredet die Python, sich zum Größenvergleich an einen Ast binden zu lassen. Für den Leoparden gräbt er eine Falle und bietet scheinbar Hilfe an; seine gebogenen Stöcke werden zu Fesseln. Die Hornissen überzeugt er mit Wasser und einem Bananenblatt, dass ein Unwetter komme, und schließt sie in einer Kalebasse ein. Nyame übergibt ihm daraufhin die Geschichten, die seitdem Anansesem heißen.",
      "Durch den transatlantischen Sklavenhandel gelangte Anansi nach Jamaika, Suriname, Curaçao und auf weitere Inseln. Dort überlebt er als Kwaku Ananse, Aunt Nancy oder Nanzi. Seine Siege über Stärkere gaben sprachlicher Wendigkeit und verborgenem Widerstand eine Form; seine Gier lässt ihn ebenso oft scheitern."
    ],
    media:[F("File:Anansi-34.png","Anansi"),F("File:Staff of Office Figures spider web and spider motif.jpg","Stab mit Spinnennetz- und Spinnenmotiv"),I("https://www.art-africain.co/contents/media/l_poids-a-peser-or-africain-art-220615-00039.jpg","https://www.art-africain.co/contents/fr/p1177_figure_africaine-poids_akan.html","Akan-Goldgewicht in Spinnenform","Art Africain")],
    sources:[S("R. S. Rattray: Akan-Ashanti Folk-Tales","https://archive.org/details/akanashantifolkt00ratt"),S("Martha Beckwith: Jamaica Anansi Stories","https://www.sacred-texts.com/afr/jas/")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Baba Jaga · Osteuropa",
    detail:[
      "Baba Jaga lebt im Wald in einer Hütte auf Hühnerbeinen. Ein Zaun aus Knochen und Schädeln umgibt das Haus. Sie fliegt in einem Mörser, treibt ihn mit dem Stößel und verwischt ihre Spur mit einem Besen. In den russischen Zaubermärchen Alexander Afanasjews kann sie Menschen fressen, Aufgaben stellen, beraten oder das fehlende Pferd und den Weg in eine andere Welt geben.",
      "In „Die schöne Wassilissa“ schickt eine Stiefmutter das Mädchen zu Baba Jaga, um Feuer zu holen. Eine Puppe, das letzte Geschenk der Mutter, hilft Wassilissa bei den unmöglichen Arbeiten: Getreide sortieren, Haus reinigen, Essen bereiten. Drei Reiter ziehen vorbei – weißer Tag, rote Sonne, schwarze Nacht. Baba Jaga entlässt das Mädchen mit einem leuchtenden Schädel, dessen Blick die grausame Stieffamilie verbrennt.",
      "Die Figur bewacht Übergänge zwischen Dorf und Wald, Kindheit und Erwachsensein, Lebenden und Toten. Ihre Gabe folgt genauer Aufmerksamkeit, Arbeit und richtigem Sprechen. Jede Erzählung ordnet diese Kräfte neu."
    ],
    media:[C("Baba Yaga Ivan Bilibin illustration","Baba Jaga, Illustration von Iwan Bilibin"),C("Vasilisa Baba Yaga skull Bilibin","Wassilissa erhält den leuchtenden Schädel")],
    sources:[S("Afanasjew: Russische Volksmärchen · Wikisource","https://de.wikisource.org/wiki/Russische_Volksm%C3%A4rchen")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Māui · Polynesien",
    detail:[
      "Māui gehört zu Erzähltraditionen in Aotearoa, Hawaiʻi, Tahiti, Samoa, Tonga und vielen weiteren Inselwelten. Namen, Verwandtschaft und einzelne Taten wechseln. In Māori-Fassungen wird Māui-tikitiki-a-Taranga zu früh geboren und von seiner Mutter ins Meer geworfen. Meerwesen schützen ihn; später findet er seine Familie und gewinnt die Kinnlade der Ahnfrau Muri-ranga-whenua als Waffe.",
      "Mit seinen Brüdern fängt er die Sonne, damit die Tage länger werden. Beim Fischen benutzt er einen magischen Haken und zieht einen großen Landkörper aus dem Meer; in Aotearoa wird daraus Te Ika-a-Māui, der Fisch des Māui, also die Nordinsel. Feuer erhält er von Mahuika. Er löscht ihre Fingernagelflammen eine nach der anderen und zwingt sie, den Ursprung des Feuers in bestimmte Hölzer zu legen, aus denen Menschen es durch Reibung gewinnen.",
      "Sein letzter Plan betrifft den Tod. Māui will durch den Körper von Hine-nui-te-pō kriechen und durch ihren Mund wieder hervorkommen. Er befiehlt den Vögeln zu schweigen. Der Tīwakawaka lacht, die große Göttin erwacht und zerquetscht Māui mit den Zähnen aus Obsidian an ihrem Körper. Seitdem bleibt der Tod Teil des menschlichen Lebens. Māui erweitert die Welt durch Mut, Technik und List; eine letzte Grenze übersteigt seine Macht."
    ],
    media:[F("File:Maui Snaring the Sun, pen and ink, circa 1927, Honolulu Academy of Arts.jpg","Māui bändigt die Sonne"),F("File:Te Tohunga - p49.png","Māui in Wilhelm Dittmers Te Tohunga"),F("File:Te Tohunga - p56 headpiece.png","Illustration aus Te Tohunga")],
    sources:[S("George Grey: Polynesian Mythology","https://www.sacred-texts.com/pac/grey/"),S("Te Ara: Māui","https://teara.govt.nz/en/1966/maui-polynesian-demigod")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Sun Wukong · China",
    detail:[
      "Sun Wukong wird im Roman „Die Reise nach Westen“ aus einem Stein geboren, den Himmel und Erde genährt haben. Er führt die Affen des Berges der Blumen und Früchte an und sucht aus Angst vor dem Tod einen Meister. Der Patriarch Subhuti lehrt ihn Wolkensprung, Kampfkunst und zweiundsiebzig Verwandlungen. Vom Drachenkönig erhält er den eisenbeschlagenen Stab Ruyi Jingu Bang, der Größe und Gewicht wechseln kann.",
      "Der Affenkönig streicht seinen Namen aus dem Totenregister, stiehlt Pfirsiche der Unsterblichkeit und überlebt den alchemistischen Ofen Laozis. Im Himmel erhält er niedrige Ämter, erkennt die Herabsetzung und erklärt sich zum „Großen Weisen, dem Himmel ebenbürtig“. Armeen und Götter scheitern an ihm. Buddha hält ihn schließlich unter dem Berg der fünf Elemente fest.",
      "Jahrhunderte später befreit ihn der Mönch Tang Sanzang für die Reise nach Indien. Guanyin gibt dem Mönch einen Reif, der sich bei einem gesprochenen Vers schmerzhaft zusammenzieht. Sun Wukongs Zorn, Witz und Scharfsicht schützen die Pilger gegen Dämonen und Täuschungen. Am Ende erhält er den Rang eines Buddha."
    ],
    media:[C("Sun Wukong 19th century Chinese illustration","Sun Wukong"),C("Journey to the West woodblock Monkey King","Holzschnitt zur Reise nach Westen"),C("Sun Wukong havoc in heaven painting","Aufruhr im Himmel")],
    sources:[S("Die Reise nach Westen · Chinese Wikisource","https://zh.wikisource.org/wiki/%E8%A5%BF%E9%81%8A%E8%A8%98")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Coyote · Nordamerika",
    detail:[
      "Coyote erscheint in vielen eigenständigen Traditionen des westlichen Nordamerika. Bei Nimiipuu, Sahaptin, Salish, Paiute, Diné und weiteren Gemeinschaften trägt er verschiedene Namen und Beziehungen. Ein gemeinsamer Kontinent-Mythos existiert hier kaum; jede Erzählung gehört zu Sprache, Ort und Erzählrecht einer bestimmten Gemeinschaft.",
      "In Nimiipuu-Geschichten besiegt Coyote ein gewaltiges Wesen, das Tiere verschlungen hat. Er lässt sich aufnehmen, schneidet im Inneren das Herz ab und befreit die Gefangenen. Aus Teilen des Körpers verteilt er Völker über das Land; für den Ort der Nimiipuu bleibt nur Blut an seinen Händen, das er abwäscht. Andere Zyklen erzählen, wie Coyote Feuer stiehlt, Lachse freisetzt oder den Tod durch eine vorschnelle Entscheidung dauerhaft macht.",
      "Er ist Schöpfer und Störer. Hunger, Sexualität, Prahlerei und Nachahmung treiben ihn zu Fehlern. Dieselbe Beweglichkeit erlaubt ihm, Regeln zu brechen, verschlossene Nahrung zu öffnen und mächtige Gegner auszutricksen. Seine Komik erklärt, warum die Welt lebensfähig und zugleich voller Schwierigkeiten ist."
    ],
    media:[C("Coyote animal North America","Kojote"),C("Nez Perce Coyote stone heart monster","Heart of the Monster, Nimiipuu")],
    sources:[S("Nez Perce National Historical Park: Coyote and the Monster","https://www.nps.gov/nepe/learn/historyculture/coyote-and-the-monster.htm"),S("Confederated Tribes of Grand Ronde: Coyote Stories","https://www.grandronde.org/history-culture/culture/coyote-stories/")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Erlik · Altai und Zentralasien",
    detail:[
      "Erlik ist in verschiedenen turk- und mongolischsprachigen Traditionen Herr einer unteren Welt. Altaische Erzählungen stellen ihm häufig Ülgen oder Kudai gegenüber. Bei der Erschaffung des Landes taucht Erlik zum Meeresgrund und bringt Erde herauf. Einen Teil verbirgt er im Mund; als die Erde wächst, quillt dieser Anteil hervor und bildet Berge, Sümpfe oder andere unebene Orte.",
      "Spätere Fassungen erzählen von seinem Sturz in die Tiefe. Dort herrscht er über Verstorbene, Krankheitsgeister und seine Söhne und Töchter. Die Unterwelt besitzt mehrere Schichten, Flüsse, eiserne Paläste und Zugänge, die ein Schamane auf seiner Reise durchquert. Opfer an Erlik dienen der Abwehr, Verhandlung und Wiederherstellung eines gestörten Verhältnisses.",
      "Mission, Buddhismus, Islam und russische Ethnografie haben die Überlieferungen über Jahrhunderte mitgeprägt. Die Gleichsetzung mit dem christlichen Teufel verengt Erliks kosmische Rolle. Er verkörpert Tod, Krankheit, unterirdischen Reichtum und eine Macht, mit der Menschen rituell umgehen müssen."
    ],
    media:[C("Altai shaman drum museum","Altai-Schamanentrommel mit Weltenbild")],
    sources:[S("W. Radloff: Proben der Volkslitteratur der türkischen Stämme","https://archive.org/details/probendervolksli01radl")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Melusine · Frankreich und Luxemburg",
    detail:[
      "Jean d’Arras schrieb um 1393 den „Roman de Mélusine“ für den Hof des Herzogs von Berry. Raymondin begegnet Melusine an einer Quelle. Sie verspricht Reichtum, Land und Nachkommen unter einer Bedingung: An jedem Samstag erhält sie einen eigenen Raum, den er weder betreten noch beobachten darf. Melusine baut Burgen und Städte und begründet die Linie der Lusignan.",
      "Ihre Söhne tragen auffällige Körperzeichen. Als ein Verwandter Misstrauen sät, bohrt Raymondin ein Loch in die Tür. Er sieht Melusine im Bad, vom Nabel abwärts als Schlange oder Fisch. Zunächst schweigt er. Nach einer Gewalttat eines Sohnes beschimpft er sie öffentlich als Schlange. Damit bricht er den Eid endgültig. Melusine verwandelt sich in ein geflügeltes Wesen, umkreist die Burg und fliegt davon.",
      "Sie kehrt nachts zu ihren jüngsten Kindern zurück und kündigt später Todesfälle im Haus Lusignan an. Die Erzählung gibt einer Dynastie eine übernatürliche Gründerin. Gerade die Frau, deren Baukraft Herrschaft ermöglicht, wird durch Kontrolle und öffentliches Wort vertrieben."
    ],
    media:[C("Melusine Jean d'Arras manuscript","Melusine in einer Handschrift"),C("Melusine Lusignan Très Riches Heures","Melusine über der Burg Lusignan")],
    sources:[S("Jean d’Arras: Mélusine · Gallica","https://gallica.bnf.fr/ark:/12148/btv1b6000798s"),S("Bibliothèque nationale de France: Mélusine","https://essentiels.bnf.fr/fr/article/f8e9e12c-541c-45e7-8c96-0a183c64722d-melusine")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"La Llorona · Mexiko",
    detail:[
      "La Llorona, die weinende Frau, erscheint nachts an Flüssen, Kanälen und Straßen. In einer weit verbreiteten Fassung bekommt eine Frau Kinder mit einem Mann, der sie später verlässt. In Wut oder Verzweiflung ertränkt sie die Kinder. Als sie begreift, was geschehen ist, sucht sie sie mit dem Ruf „¡Ay, mis hijos!“ Ihre Gestalt warnt Kinder vor Wasser und Erwachsene vor einer nächtlichen Begegnung.",
      "Die Überlieferung besitzt viele Anfänge. Bernardino de Sahagún berichtet im 16. Jahrhundert von Cihuacóatl, die nachts weint und das kommende Unglück ihrer Kinder beklagt. Koloniale und spätere Fassungen verbinden die Gestalt mit christlicher Schuld, der Eroberung Mexikos, verlassenen Frauen, Kindstötung und lokalen Todesfällen. Die Namen der Kinder, des Mannes und des Flusses wechseln von Ort zu Ort.",
      "In Theater, Film, Liedern und politischer Kunst nimmt La Llorona neue Verluste auf: Migration, Femizid, Krieg und verschwundene Kinder. Ihr Schrei hält Erinnerung im öffentlichen Raum. Die Suche endet in den meisten Fassungen erst, wenn ihre Kinder gefunden oder ihre Schuld gelöst wird."
    ],
    media:[C("Cihuacoatl Aztec sculpture","Cihuacóatl"),C("Xochimilco canal night","Kanäle von Xochimilco")],
    sources:[S("Florentine Codex · World Digital Library","https://www.loc.gov/resource/gdcwdl.wdl_10623/"),S("Smithsonian Magazine: The Legend of La Llorona","https://www.smithsonianmag.com/smithsonian-institution/evolution-la-llorona-legend-mexican-folklore-180978649/")]
  },
  {
    category:"Sagengestalten, Legenden und Märchen weltweit",title:"Saci-pererê · Brasilien",
    detail:[
      "Saci ist ein einbeiniger schwarzer Junge mit roter Mütze und Pfeife. Er reist in Staubwirbeln, erschreckt Tiere, verheddert Pferdemähnen, versteckt Gegenstände und bringt Küchenarbeiten durcheinander. Wer ein Sieb über den Wirbel wirft, kann ihn fangen. Die rote Mütze verleiht ihm Macht; in manchen Erzählungen wird Saci samt Mütze in einer Flasche eingeschlossen.",
      "Die Figur entstand aus mehreren Traditionen. Guaraní-Erzählungen kennen einen vogelartigen oder jugendlichen Waldgeist; afrikanische und afrobrasilianische Motive prägten Körper, Pfeife und List; die rote Kappe erinnert an portugiesische Zauberhauben. Regionale Fassungen unterscheiden Hautfarbe, Alter, Absichten und sogar die Zahl der Beine.",
      "Monteiro Lobato sammelte 1917 Zuschriften über Saci und machte ihn später zur Figur seines Kinderbuchs „O Saci“. Diese literarische Fassung prägte das nationale Bild stark. Heute erscheint Saci in Festen, Fußballmaskottchen, Naturschutz und dem brasilianischen Saci-Tag am 31. Oktober. Hinter der populären Figur bleibt ein bewegliches Archiv indigener, afrikanischer und europäischer Erzählungen."
    ],
    media:[C("Saci Perere illustration Lobato","Saci-pererê"),C("Saci Brazilian postage stamp","Saci auf einer brasilianischen Briefmarke")],
    sources:[S("Monteiro Lobato: O Saci · Wikisource","https://pt.wikisource.org/wiki/O_Saci"),S("Biblioteca Nacional Brasil: Saci","https://bndigital.bn.gov.br/artigos/saci-perere/")]
  }
];

const komponistenErgaenzungen={
  "Louise Farrenc · Sinfonie Nr. 3 g-Moll, Scherzo":"Farrenc behandelt Holzbläser, Hörner und Streicher als selbstständige Gruppen und hält auch in schnellen Übergängen die Stimmen klar. In Frankreich dominierten in den 1840er Jahren Opern; Farrenc arbeitete zugleich an einer großformatigen Sinfonik. Die Verbindung aus strenger Form und eigenständiger Orchesterfarbe stellt ihre Dritte neben die Sinfonien ihrer bekannten Zeitgenossen.",
  "Dora Pejačević · Sinfonie fis-Moll op. 41":"Kleine rhythmische Zellen tragen lange Spannungsbögen; spätromantische Harmonik trifft auf eine harte, durchsichtige Orchesterfarbe. Pejačević kannte Mahler und Strauss, ordnete ihre Sinfonie aber nach einer eigenen Dramaturgie. Genau diese Verbindung verankert das Werk in der mitteleuropäischen Sinfonik des frühen 20. Jahrhunderts.",
  "Rued Langgaard · Sphärenmusik":"Getrennte Orchestergruppen, Chorflächen, Orgel, eine entfernte Sopranstimme und lange gehaltene Klänge staffeln den Raum nach Nähe und Ferne. Die Partitur von 1916 verlangt außerdem Spiel im Inneren des Klaviers. Damit gehört sie zu den frühen Orchesterwerken, die den Aufführungsraum selbst als kompositorisches Material behandeln.",
  "Vítězslava Kaprálová · Militär-Sinfonietta op. 11":"Kaprálová verdichtet Marschrhythmus, Fanfaren und lyrische Episoden auf eine kurze Form. Instrumente wechseln rasch zwischen Vorder- und Hintergrund; selbst die großen Steigerungen bleiben beweglich. Die formale Konzentration und die sichere Orchestertechnik tragen das Werk weit über die biografische Erzählung vom früh verstorbenen Talent hinaus.",
  "Mel Bonis · Femmes de légende":"Bonis charakterisiert jede Figur durch Harmonik, Register und Bewegung. Ihre Klaviermusik verlangt genaue Kontrolle von Klangschichten und Pedal; unter der knappen Oberfläche ändern sich die harmonischen Gewichte fortwährend. Der Zyklus erschließt eine eigenständige französische Klaviersprache um 1900, deren Werkzusammenhang lange ausgeblendet blieb.",
  "Joseph Martin Kraus · Sinfonie c-Moll VB 142":"Abrupte Pausen, scharfe dynamische Gegensätze und dunkle Orchesterfarben bestimmen den Satz. Kraus gehört zur Generation von Haydns Pariser Sinfonien, entwickelt Spannung aber mit einer eigenen Folge aus Unterbrechung und plötzlichem Fortgang. Diese dramatische Grammatik unterscheidet ihn deutlich von den vertrauten Wiener Namen.",
  "Juan Crisóstomo de Arriaga · Sinfonie D-Dur":"Arriaga verbindet kontrapunktische Sicherheit mit überraschenden Modulationen und einer beweglichen Behandlung der Holzbläser. Mollfelder verdunkeln die D-Dur-Grundtonart und geben der klassischen Form frühromantische Spannung. Alter und früher Tod erklären die Überlieferung des Werks, seine kompositorische Substanz liegt in diesen harmonischen und instrumentalen Entscheidungen.",
  "Albéric Magnard · Sinfonie Nr. 4 cis-Moll op. 21":"Magnard führt Motive über alle vier Sätze weiter und hält dichte Gegenstimmen auch in großen Steigerungen hörbar. Erst im Finale schließen sich frühere Themen zu einer Gesamtform zusammen. Sein Tod und der Verlust von Manuskripten im Jahr 1914 erklären einen Teil der geringen Verbreitung dieser sorgfältig gebauten Sinfonik.",
  "Grażyna Bacewicz · Konzert für Streichorchester":"Kurze Motive wandern durch die Stimmgruppen, raue Akkorde schneiden in klare Linien, und der Rhythmus trägt die Form. Bacewicz verbindet barocke Satztypen mit der Energie der polnischen Moderne. Das kompakte Konzert führt unmittelbar in ein umfangreiches Werk mit eigener Stellung zwischen Szymanowski und Lutosławski.",
  "Mieczysław Weinberg · Klavierquintett op. 18":"Weinberg verbindet jüdisch geprägte Melodik, Marschgesten, kammermusikalische Gegenrede und lange stille Abgänge. Die fünf Sätze bringen biografische Erfahrung in eine strenge Form. Sein Umgang mit wechselnden Gewichten, abrupter Groteske und erschöpften Schlussbildungen löst das Quintett aus der üblichen Einordnung als Nebenwerk im Umkreis Schostakowitschs."
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
    detail:["Mary Toft aus Godalming behauptete 1726, Kaninchenteile und andere Tierstücke geboren zu haben. Der örtliche Chirurg John Howard bestätigte mehrere angebliche Geburten. Berichte erreichten den Hof Georgs I.; Ärzte reisten an und untersuchten sie.","In London wurde ein Diener dabei ertappt, wie er ein Kaninchen beschaffen wollte. Toft gestand, dass Tierstücke eingeführt worden waren. Der Fall beschädigte den Ruf mehrerer Ärzte und wurde von William Hogarth verspottet. Ärztliche Autorität, Sensationspresse und der Wunsch nach einem Wunder hielten die grobe Täuschung zeitweise aufrecht."],
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
    detail:["Papst Stephan VI. ließ den Leichnam seines Vorgängers Formosus ausgraben, in päpstliche Gewänder kleiden und vor ein Kirchengericht setzen. Ein Diakon antwortete für den Toten. Das Gericht erklärte Formosus' Amtshandlungen für ungültig, schnitt die Segensfinger ab und ließ den Körper in den Tiber werfen.","Hinter dem Verfahren standen römische Adelskämpfe und wechselnde Bündnisse um die Kaiserkrone. Die öffentliche Empörung trug zum Sturz Stephans bei; er wurde noch im selben Jahr im Gefängnis erdrosselt. Spätere Päpste änderten die Urteile erneut. Die Synode benutzte ein Gerichtsverfahren, um einen toten Gegner öffentlich zu demütigen und frühere Amtsakte rückgängig zu machen."],
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
    detail:["Ignaz Semmelweis verglich 1847 zwei Geburtskliniken im Wiener Allgemeinen Krankenhaus. In der von Ärzten und Studenten betreuten Abteilung starben deutlich mehr Frauen am Kindbettfieber. Nach dem Tod eines Kollegen erkannte Semmelweis eine Verbindung zu Leichensektionen.","Er ordnete Händewaschen mit Chlorkalklösung vor Untersuchungen an; die Sterblichkeit sank stark. Eine Keimtheorie stand noch aus, Semmelweis erklärte den Mechanismus unvollständig und kommunizierte zunehmend scharf. Viele Kollegen lehnten seine Folgerungen ab. Die überzeugenden Daten änderten die Praxis deshalb lange kaum: Es fehlten eine anerkannte Erklärung, institutionelle Unterstützung und eine Vermittlung, die seine Kollegen erreichte."],
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

const NC=(category,title,summary,detail,media,sources=[],extra={})=>({category,title,...(summary?{summary}:{}),detail,media,sources,...extra});
const Q=(label,url)=>S(label,url);

window.KARTEN.push(
  NC("Philosophische Begriffe","Aufhebung","Etwas wird beendet, bewahrt und auf eine neue Stufe gebracht.",["Hegel nutzt alle drei Bedeutungen des Verbs aufheben. Eine Bestimmung verliert ihre selbständige Geltung; ihr Gehalt bleibt im folgenden Begriff erhalten und wird dort verändert.","Aufhebung ist kein versöhnlicher Mittelweg. Der neue Begriff entsteht aus dem bestimmten Widerspruch des vorherigen."],[C("Georg Wilhelm Friedrich Hegel portrait","Hegel")],[Q("Hegel: Wissenschaft der Logik","https://www.projekt-gutenberg.org/hegel/logik1/logik1.html")]),
  NC("Philosophische Begriffe","Habitus","Erworbene Neigungen, durch die Menschen wahrnehmen und handeln.",["Bei Pierre Bourdieu entsteht der Habitus aus Lebensbedingungen, Erziehung und wiederholter Praxis. Er wirkt in Geschmack, Körperhaltung, Erwartungen und spontanen Entscheidungen.","Der Begriff verbindet Gesellschaft und individuelles Handeln: Menschen improvisieren, doch ihr Sinn für das Mögliche trägt die Geschichte ihrer sozialen Position in sich."],[C("Pierre Bourdieu portrait","Pierre Bourdieu")],[Q("Encyclopaedia Britannica: Pierre Bourdieu","https://www.britannica.com/biography/Pierre-Bourdieu")]),
  NC("Philosophische Begriffe","Intentionalität","Bewusstsein ist stets auf etwas gerichtet.",["Brentano bezeichnete die Beziehung auf einen Gegenstand als Kennzeichen psychischer Akte. Husserl machte sie zum Ausgangspunkt der Phänomenologie: Wahrnehmen, Erinnern, Urteilen und Hoffen geben ihre Gegenstände jeweils anders.","Der Gegenstand muss real nicht vorhanden sein. Auch eine Erwartung, eine Zahl oder eine erfundene Figur kann gemeint sein."],[C("Edmund Husserl 1910","Edmund Husserl")],[Q("Stanford Encyclopedia of Philosophy: Intentionality","https://plato.stanford.edu/entries/intentionality/")]),
  NC("Philosophische Begriffe","Schleier des Nichtwissens","Grundsätze werden gewählt, ohne die eigene spätere Stellung zu kennen.",["In John Rawls' Ursprungssituation kennen die Beteiligten ihre Klasse, Begabungen, Religion, Herkunft und Lebensziele nicht. Allgemeines Wissen über Gesellschaft bleibt verfügbar.","Der Schleier entfernt Zufallsvorteile aus der Wahl gemeinsamer Regeln. Er ist ein Prüfverfahren für faire Institutionen."],[C("John Rawls portrait","John Rawls")],[Q("Stanford Encyclopedia of Philosophy: Original Position","https://plato.stanford.edu/entries/original-position/")]),
  NC("Philosophische Begriffe","Wu wei","Handeln ohne erzwungenes Eingreifen.",["Im Daodejing meint wu wei keine Untätigkeit. Eine Handlung folgt den Bedingungen so genau, dass sie ohne angestrengte Beherrschung, Übermaß und unnötige Reibung auskommt.","Politisch richtet sich der Begriff gegen kleinteilige Kontrolle; persönlich gegen ein Wollen, das jede Lage gewaltsam formt."],[C("Daodejing Mawangdui manuscript","Daodejing-Manuskript")],[Q("Chinese Text Project: Dao De Jing","https://ctext.org/dao-de-jing")]),

  NC("Künstler und drei Werke","Gwen John","The Convalescent · Dorelia in a Black Dress · A Corner of the Artist’s Room",["John baute Figuren und Räume aus gedämpften Farbschichten. Kleine Verschiebungen von Blick, Haltung und Licht tragen die Spannung. Ihre konzentrierte Malerei wurde lange von der öffentlichen Rolle ihres Bruders Augustus verdeckt."],[C("Gwen John The Convalescent","The Convalescent"),C("Gwen John Dorelia black dress","Dorelia in a Black Dress"),C("Gwen John artist room Paris","A Corner of the Artist’s Room")],[Q("Tate: Gwen John","https://www.tate.org.uk/art/artists/gwen-john-1366")],{works:["The Convalescent, um 1923–24","Dorelia in a Black Dress, um 1903–04","A Corner of the Artist’s Room in Paris, 1907–09"]}),
  NC("Künstler und drei Werke","Evelyn De Morgan","Medea · Night and Sleep · The Gilded Cage",["De Morgan verband präzise Figurenmalerei mit Allegorien über Krieg, Gefangenschaft, geistige Freiheit und die Lage von Frauen. Ihre leuchtende Oberfläche trägt oft einen scharfen politischen Gedanken."],[C("Evelyn De Morgan Medea","Medea"),C("Evelyn De Morgan Night and Sleep","Night and Sleep"),C("Evelyn De Morgan Gilded Cage","The Gilded Cage")],[Q("De Morgan Collection","https://www.demorgan.org.uk/collection/")],{works:["Medea, 1889","Night and Sleep, 1878","The Gilded Cage, 1919"]}),
  NC("Künstler und drei Werke","Edmonia Lewis","Forever Free · The Death of Cleopatra · The Old Arrow Maker",["Lewis arbeitete in Rom im weißen Marmor der neoklassizistischen Bildhauerei. Sie gab historischen und biblischen Stoffen eine eigene politische Reichweite und behauptete sich als Frau afroamerikanischer und indigener Herkunft im internationalen Kunstbetrieb."],[C("Edmonia Lewis Forever Free","Forever Free"),C("Edmonia Lewis Death Cleopatra","The Death of Cleopatra"),C("Edmonia Lewis Old Arrow Maker","The Old Arrow Maker")],[Q("Smithsonian American Art Museum: Edmonia Lewis","https://americanart.si.edu/artist/edmonia-lewis-2914")],{works:["Forever Free, 1867","The Death of Cleopatra, 1876","The Old Arrow Maker, 1872"]}),
  NC("Künstler und drei Werke","Léon Spilliaert","Selbstbildnis vor dem Spiegel · Schwindel · Mondhelle Marine",["Spilliaert setzte Tusche, Kreide und verdünnte Farbe ein, um leere Promenaden, steile Räume und das eigene Gesicht in psychische Landschaften zu verwandeln. Linien und dunkle Flächen erzeugen die Wirkung."],[C("Leon Spilliaert self portrait mirror 1908","Selbstbildnis"),C("Leon Spilliaert Vertigo 1908","Schwindel"),C("Leon Spilliaert moonlit marine","Mondhelle Marine")],[Q("Royal Museums of Fine Arts Belgium: Spilliaert","https://fine-arts-museum.be/en/the-artists/leon-spilliaert")],{works:["Self-Portrait in Front of the Mirror, 1908","Vertigo, 1908","Moonlit Marine, um 1900"]}),
  NC("Künstler und drei Werke","Käthe Kollwitz","Frau mit totem Kind · Weberzug · Die Mütter",["Kollwitz entwickelte aus Radierung, Lithografie, Holzschnitt und Plastik eine Bildsprache für Trauer, Armut, Widerstand und körperliche Nähe. Die Figuren gewinnen ihre Kraft aus Haltung und Gewicht."],[C("Käthe Kollwitz Woman with Dead Child","Frau mit totem Kind"),C("Käthe Kollwitz March Weavers","Weberzug"),C("Käthe Kollwitz Mothers 1922","Die Mütter")],[Q("Käthe Kollwitz Museum Köln","https://www.kollwitz.de/sammlung")],{works:["Frau mit totem Kind, 1903","Weberzug, 1897","Die Mütter, 1922–23"]}),

  NC("Erste Sätze großer Romane","It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness …",null,["Charles Dickens eröffnet A Tale of Two Cities (1859) mit einer langen Folge von Gegensätzen. Der Roman spielt in London und Paris vor und während der Französischen Revolution. Charles Darnay, Sydney Carton und Lucie Manette geraten in eine Geschichte von Haft, politischer Gewalt, Ähnlichkeit und Opfer."],[C("A Tale of Two Cities first edition title page","Erstausgabe von 1859")],[Q("Project Gutenberg: A Tale of Two Cities","https://www.gutenberg.org/ebooks/98")],{kind:"quote"}),
  NC("Erste Sätze großer Romane","Mrs Dalloway said she would buy the flowers herself.",null,["Virginia Woolfs Mrs Dalloway (1925) folgt Clarissa Dalloway an einem Junitag durch London und verbindet ihre Vorbereitungen für eine Abendgesellschaft mit den Erfahrungen des Kriegsveteranen Septimus Warren Smith. Gedanken, Erinnerungen und Straßengeräusche wechseln zwischen den Figuren."],[C("Mrs Dalloway first edition cover","Erstausgabe von 1925")],[Q("British Library: Mrs Dalloway","https://www.bl.uk/works/mrs-dalloway")],{kind:"quote"}),
  NC("Erste Sätze großer Romane","Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.",null,["Ulysses (1922) beginnt am Morgen des 16. Juni 1904 im Martello Tower bei Dublin. James Joyce führt Stephen Dedalus, Leopold Bloom und Molly Bloom durch einen einzigen Tag; Aufbau und Motive beziehen sich auf Homers Odyssee."],[C("Ulysses 1922 first edition","Erstausgabe von Ulysses")],[Q("Project Gutenberg: Ulysses","https://www.gutenberg.org/ebooks/4300")],{kind:"quote"}),
  NC("Erste Sätze großer Romane","This is the saddest story I have ever heard.",null,["Ford Madox Fords The Good Soldier (1915) wird von John Dowell erzählt. Erst nach und nach zeigt sich, wie wenig er die beiden Ehepaare verstanden hat, über die er berichtet. Zeitsprünge und Korrekturen machen seine Unsicherheit zur Form des Romans."],[C("The Good Soldier Ford first edition","Erstausgabe von 1915")],[Q("Project Gutenberg: The Good Soldier","https://www.gutenberg.org/ebooks/2775")],{kind:"quote"}),
  NC("Erste Sätze großer Romane","Ich bin ein kranker Mensch … Ich bin ein böser Mensch.",null,["Der Erzähler von Dostojewskis Aufzeichnungen aus dem Kellerloch (1864) stellt sich als kranker, boshafter Mensch vor. Aus seinem Petersburger Zimmer greift er Vernunftoptimismus und die Vorstellung berechenbarer Interessen an; anschließend erzählt er Szenen eigener Demütigung und Grausamkeit."],[C("Dostoevsky Notes from Underground edition","Frühe Ausgabe")],[Q("Wikisource: Записки из подполья","https://ru.wikisource.org/wiki/Записки_из_подполья_(Достоевский)")],{kind:"quote"}),

  NC("Seltene Musikstile","Dhrupad · Nordindien",null,["Dhrupad ist eine alte Form nordindischer Kunstmusik. Ein langsamer, rhythmisch freier Alap entfaltet den Raga Ton für Ton; im gebundenen Teil tragen Pakhawaj-Trommel und ein strenger Gedichttext die Form."],[Y("HpknENIsIMo","Gundecha Brothers · Dhrupad")],[Q("Sangeet Natak Akademi","https://www.sangeetnatak.gov.in/")]),
  NC("Seltene Musikstile","Shōmyō · Japan",null,["Shōmyō bezeichnet buddhistischen Ritualgesang. Lange Melismen, gleitende Tonhöhen und festgelegte Formeln ordnen die Rezitation; die Schulen Tendai und Shingon bewahren verschiedene Linien."],[Y("Qe7Rer-q0eg","Shōmyō · Japan Society")],[Q("Japan Society","https://japansociety.org/")]),
  NC("Seltene Musikstile","Paghjella · Korsika",null,["Die Paghjella wird meist von drei Männerstimmen gesungen. Bassu, seconda und terza setzen nacheinander ein und bilden enge, raue Zusammenklänge mit reich verzierten Oberstimmen."],[Y("gd3uR-wr1yI","Paghjella aus Korsika")],[Q("UNESCO: Cantu in paghjella","https://ich.unesco.org/en/USL/cantu-in-paghjella-00173")]),
  NC("Seltene Musikstile","Gnawa · Marokko",null,["Gnawa-Musik verbindet responsorialen Gesang, die dreisaitige Basslaute Guembri und eiserne Qarqaba-Kastagnetten. In der nächtlichen Lila-Zeremonie gliedern Melodien, Farben und Räucherstoffe eine Folge ritueller Abschnitte."],[Y("t9ZmTodoSII","Gnawa-Ensemble")],[Q("UNESCO: Gnawa","https://ich.unesco.org/en/RL/gnawa-01170")]),
  NC("Seltene Musikstile","Launeddas · Sardinien",null,["Die Launeddas besteht aus drei gleichzeitig gespielten Rohrpfeifen. Zirkularatmung hält den Klang ohne Unterbrechung; zwei Pfeifen bilden Bordun und Grundgerüst, die dritte führt bewegliche Melodien."],[Y("BzWITU3L-F0","Luigi Lai spielt Launeddas")],[Q("Sardegna Cultura","https://www.sardegnacultura.it/")]),

  NC("Vergessene Komponisten","Emilie Mayer · Sinfonie Nr. 7 f-Moll",null,["Mayer führt kurze Motive sicher durch das Orchester. Unruhige Begleitfiguren, scharf gesetzte Bläsereinsätze und abrupte harmonische Wendungen geben der Sinfonie ihr Profil.","Mayer leitete in Berlin eigene Konzerte. In der Siebten verbinden sich klare Großform, scharf gesetzte Bläser und eine unruhige Begleitmotorik zu einer eigenständigen Sinfonik des 19. Jahrhunderts."],[Y("3GaUyM8gr_Q","Emilie Mayer · Sinfonie Nr. 7"),C("Emilie Mayer portrait","Emilie Mayer")],[Q("MUGI: Emilie Mayer","https://mugi.hfmt-hamburg.de/artikel/Emilie_Mayer.html")]),
  NC("Vergessene Komponisten","Ethel Smyth · The Wreckers",null,["Smyth verbindet schroffe Chorblöcke, bewegliche Orchesterfarben und eine Liebestragödie an der kornischen Küste. Meer, religiöser Fanatismus und Gewalt werden musikalisch zu handelnden Kräften.","Leitmotive, Chorszenen und die wechselnde Klanggestalt des Meeres halten die Handlung zusammen. Damit ist The Wreckers eine geschlossene englische Oper aus der Zeit um 1900, keine bloße historische Kuriosität."],[Y("dj9U3QLTd1c","The Wreckers · Ouvertüre"),C("Ethel Smyth portrait","Ethel Smyth")],[Q("British Library: Ethel Smyth","https://www.bl.uk/people/ethel-smyth")]),
  NC("Vergessene Komponisten","Margaret Bonds · Montgomery Variations",null,["Bonds verwandelt das Spiritual I Want Jesus to Walk with Me in sieben Variationen. Jede erhält eine politische Widmung; Spiritual, Blues, Kontrapunkt und Orchesterklang bleiben eng verbunden.","Die politische Folge entsteht aus der musikalischen Form selbst: Das Spiritual wechselt Gestalt, bleibt aber in jeder Variation erkennbar. Bonds fasst die Bürgerrechtsbewegung so in einen großen sinfonischen Zusammenhang."],[Y("ereaXUDie-A","Montgomery Variations"),C("Margaret Bonds composer","Margaret Bonds")],[Q("Library of Congress: Margaret Bonds","https://www.loc.gov/item/ihas.200152702/")]),
  NC("Vergessene Komponisten","Rebecca Clarke · Viola Sonata",null,["Clarke nutzt die dunkle Mittellage der Viola, weite Linien, Flageoletts und eine Klavierstimme, die Farbe und Rhythmus gleichberechtigt trägt. Wiederkehrende Motive verbinden die drei Sätze.","Die Sonate behandelt Viola und Klavier als gleichberechtigte Klangkörper. Instrumentale Kenntnis, knappe motivische Arbeit und eine zwischen modalem und spätromantischem Klang wechselnde Harmonik tragen das Werk."],[Y("kyhWWyDHIfM","Rebecca Clarke · Viola Sonata"),C("Rebecca Clarke composer portrait","Rebecca Clarke")],[Q("Rebecca Clarke Society","https://rebeccaclarke.org/")]),
  NC("Vergessene Komponisten","Florence Price · Sinfonie Nr. 3 c-Moll",null,["Price verbindet sinfonische Entwicklung mit Juba-Rhythmen, Bluesfärbungen und fein geschichteten Orchesterfarben. Das Scherzo gewinnt seine Form aus dem Tanz.","Die Dritte ist ein reifes Werk: Tanzrhythmus und Bluesfärbung bestimmen Themenbildung, Satzform und Instrumentation. Jahrzehntelang schwer zugängliche Partituren ließen genau diesen Teil der amerikanischen Sinfonik aus dem Konzertleben verschwinden."],[Y("jI6qZFrsDnw","Florence Price · Sinfonie Nr. 3"),C("Florence Price composer portrait","Florence Price")],[Q("University of Arkansas: Florence Price","https://libraries.uark.edu/specialcollections/fprice/")]),

  NC("Großartige Bilder und Design","W. E. B. Du Bois · Data Portraits",null,["Für die Pariser Weltausstellung 1900 entwarf Du Bois mit seinem Team Diagramme zum Leben afroamerikanischer Menschen. Spiralen, Fächer und Farbflächen verwandeln statistische Daten in eine radikale visuelle Grammatik."],[C("WEB Du Bois data portrait 1900","Data Portrait"),C("Du Bois Georgia Negro chart","Diagramm zur Ausstellung")],[Q("Library of Congress: Du Bois data portraits","https://www.loc.gov/pictures/collection/anedub/")]),
  NC("Großartige Bilder und Design","Talwin Morris · Buchgestaltung für Blackie & Son",null,["Morris ordnete Pflanzenlinien, Rechtecke und kleine Farbfelder zu klaren Einbänden. Seine Bücher zeigen, wie der Glasgow Style auf preiswerte Serienproduktion übertragen wurde."],[C("Talwin Morris book cover","Bucheinband"),C("Talwin Morris Blackie binding","Einband für Blackie & Son")],[Q("V&A: Talwin Morris","https://www.vam.ac.uk/articles/talwin-morris")]),
  NC("Großartige Bilder und Design","Margaret Macdonald Mackintosh · The Mysterious Garden",null,["Gesso, Metall, Perlen und Farbe bilden eine flache, zugleich körperliche Oberfläche. Figuren wachsen aus Ornamenten hervor; Material und Bild lassen sich kaum trennen."],[C("Margaret Macdonald Mackintosh Mysterious Garden","The Mysterious Garden"),C("Margaret Macdonald Mackintosh gesso panel","Gesso-Detail")],[Q("National Galleries Scotland: Mackintosh","https://www.nationalgalleries.org/art-and-artists/artists/margaret-macdonald-mackintosh")]),
  NC("Großartige Bilder und Design","Daum Frères · Cameo-Glas",null,["Mehrschichtiges Glas wurde geätzt, geschnitten, emailliert und teilweise mit eingeschmolzenen Pulvern modelliert. Landschaften und Pflanzen entstehen aus dem Material selbst."],[C("Daum Nancy cameo glass vase","Cameo-Glasvase"),C("Daum Freres landscape vase","Landschaftsvase")],[Q("Musée des Beaux-Arts de Nancy","https://musee-des-beaux-arts.nancy.fr/")]),
  NC("Großartige Bilder und Design","Aubrey Beardsley · The Peacock Skirt",null,["Beardsley verteilt Schwarz und Weiß in großen, präzisen Flächen. Pfauenmuster, Profile und der fast leere Raum machen die Illustration zu einer eigenständigen Komposition."],[C("Aubrey Beardsley Peacock Skirt 1894","The Peacock Skirt"),C("Beardsley Salome Peacock Skirt","Detail")],[Q("V&A: Aubrey Beardsley","https://www.vam.ac.uk/articles/aubrey-beardsley")]),

  NC("Märchen und Sagen in ethnografischen Quellen","Die Ermordung Tuwhakararos · Māori",null,["Tuwhakararo wird bei einem Besuch in einer fremden Siedlung getötet. Seine Mutter Apakura ruft in einem Klagegesang die Verwandten zur Vergeltung; Whakatau führt den Angriff auf das Haus der Gegner.","George Grey veröffentlichte die überlieferte Erzählung 1855. Die Textdatei enthält den vollständigen historischen Wortlaut des Kapitels."],[C("Maori waka historical","Māori-Waka"),C("Maori meeting house carving","Versammlungshaus")],[Q("George Grey: Polynesian Mythology","https://www.sacred-texts.com/pac/grey/grey08.htm")],{original:{label:"Vollständiger Originaltext · Grey (1855)",file:"texts/maui-mahuika.txt",source:"https://www.sacred-texts.com/pac/grey/grey08.htm"}}),
  NC("Märchen und Sagen in ethnografischen Quellen","Die Schildkröte mit der schönen Tochter · Efik",null,["Eine Schildkröte verbirgt ihre schöne Tochter, nachdem der König erklärt hat, nur ein reicher Mann dürfe ein solches Mädchen heiraten. Der Königssohn entdeckt sie.","Elphinstone Dayrell veröffentlichte die in Südnigeria aufgezeichnete Fassung 1910."],[C("African spurred tortoise","Schildkröte"),C("Calabar Nigeria 1900","Calabar")],[Q("Dayrell: Folk Stories from Southern Nigeria","https://sacred-texts.com/afr/fssn/fsn03.htm")],{original:{label:"Vollständiger Originaltext · Dayrell (1910)",source:"https://sacred-texts.com/afr/fssn/fsn03.htm"}}),
  NC("Märchen und Sagen in ethnografischen Quellen","Die Frau mit zwei Häuten · Efik",null,["Eine Frau besitzt eine schöne und eine hässliche Haut. Ihre eifersüchtige Mitfrau beobachtet den Wechsel und verrät das Geheimnis dem gemeinsamen Mann.","Elphinstone Dayrell veröffentlichte die in Südnigeria aufgezeichnete Fassung 1910. Die Datei enthält die Erzählung vollständig."],[C("Calabar woman historical","Frau aus Calabar"),C("Calabar Nigeria historical","Calabar")],[Q("Dayrell: Folk Stories from Southern Nigeria","https://sacred-texts.com/afr/fssn/fsn05.htm")],{original:{label:"Vollständiger Originaltext · Dayrell (1910)",file:"texts/woman-two-skins-efik.txt",source:"https://sacred-texts.com/afr/fssn/fsn05.htm"}}),
  NC("Märchen und Sagen in ethnografischen Quellen","Warum die Fledermaus nachts fliegt · Efik",null,["Eine Fledermaus bringt eine Ratte durch eine falsche Kochanweisung in tödliche Gefahr und versucht anschließend, sich der Verantwortung zu entziehen.","Dayrells Sammlung von 1910 gibt die Erzählung samt der abschließenden Erklärung wieder. Die Textdatei enthält den ganzen historischen Wortlaut."],[C("African bat","Fledermaus"),C("Calabar Nigeria 1900","Calabar")],[Q("Dayrell: Folk Stories from Southern Nigeria","https://sacred-texts.com/afr/fssn/fsn09.htm")],{original:{label:"Vollständiger Originaltext · Dayrell (1910)",file:"texts/bat-night-efik.txt",source:"https://sacred-texts.com/afr/fssn/fsn09.htm"}}),
  NC("Märchen und Sagen in ethnografischen Quellen","Die Zaubertrommel · Efik",null,["Eine Schildkröte erhält eine Trommel, die auf Wunsch Essen hervorbringt. Gier, öffentliches Vorführen und ein Regelverstoß verwandeln die Gabe in eine Gefahr.","Elphinstone Dayrell veröffentlichte die Erzählung 1910. Die Textdatei gibt sie vom ersten bis zum letzten Satz wieder."],[C("African slit drum historical","Trommel"),C("Calabar Nigeria 1900","Calabar")],[Q("Dayrell: Folk Stories from Southern Nigeria","https://sacred-texts.com/afr/fssn/fsn06.htm")],{original:{label:"Vollständiger Originaltext · Dayrell (1910)",file:"texts/magic-drum-efik.txt",source:"https://sacred-texts.com/afr/fssn/fsn06.htm"}}),

  NC("Sagengestalten, Legenden und Märchen weltweit","Inanna · Sumer",null,["Inanna, Göttin von Macht, Sexualität und Krieg, passiert auf dem Weg in die Unterwelt sieben Tore und legt an jedem ein Zeichen ihrer Herrschaft ab. Ereškigal lässt sie töten und an einen Haken hängen.","Boten erwirken ihre Rückkehr, doch jemand muss ihren Platz einnehmen. Inanna bestimmt Dumuzi; dessen Schwester Geštinanna teilt später seinen Aufenthalt. Der Wechsel verbindet die Erzählung mit dem jahreszeitlichen Rhythmus des Kultes."],[C("Burney Relief Inanna","Inanna"),C("Inanna Ishtar cylinder seal","Siegelbild")],[Q("ETCSL: Inana's descent","https://etcsl.orinst.ox.ac.uk/section1/tr141.htm")]),
  NC("Sagengestalten, Legenden und Märchen weltweit","Ame-no-Uzume · Japan",null,["Als Amaterasu sich in eine Felsenhöhle zurückzieht, verschwindet das Licht. Die Götter hängen Spiegel und Juwelen an einen Baum.","Ame-no-Uzume tanzt auf einem umgedrehten Trog; das Gelächter macht Amaterasu neugierig. Als sie hinausschaut, wird sie herausgezogen. Uzumes Aufführung verbindet Komik, Ritual und die Wiederkehr des Lichts."],[C("Ame no Uzume Amaterasu cave","Ame-no-Uzume"),C("Uzume Japanese print","Uzumes Tanz")],[Q("Kojiki · Sacred Texts","https://sacred-texts.com/shi/kj/index.htm")]),
  NC("Sagengestalten, Legenden und Märchen weltweit","Väinämöinen · Finnland und Karelien",null,["Väinämöinen ist Sänger, Zauberer und Hauptheld des Kalevala. Seine Macht liegt im Wissen um Ursprungslieder. Aus dem Kiefer eines riesigen Hechts baut er die erste Kantele; sein Spiel bewegt Menschen, Tiere und Natur.","Elias Lönnrot formte die Figur aus verschiedenen karelischen Gesängen zu einem epischen Helden. Am Ende fährt Väinämöinen in einem kupfernen Boot fort und lässt Kantele und Lieder zurück."],[C("Gallen Kallela Väinämöinen","Väinämöinen"),C("Väinämöinen kantele","Kantele")],[Q("Project Gutenberg: Kalevala","https://www.gutenberg.org/ebooks/5186")]),
  NC("Sagengestalten, Legenden und Märchen weltweit","Koschtschei der Todlose · Ostslawische Märchen",null,["Koschtschei ist ein dürrer Zauberer, der Frauen entführt und Schätze bewacht. Sein Tod liegt außerhalb seines Körpers: oft in einer Nadel, die in Ei, Ente, Hase und Truhe verborgen ist.","Der Held muss die verschachtelten Behälter finden; mit der Nadel stirbt Koschtschei. Mehrere Märchen verbinden das Motiv mit Iwan Zarewitsch, Marja Morewna oder der Froschprinzessin."],[C("Koschei Deathless Vasnetsov","Koschtschei"),C("Ivan Bilibin Koschei","Bilibins Illustration")],[Q("Wikisource: Russian Folk-Tales","https://en.wikisource.org/wiki/Russian_Folk-Tales")]),
  NC("Sagengestalten, Legenden und Märchen weltweit","Popocatépetl und Iztaccíhuatl · Mexiko",null,["Eine verbreitete Legendenfassung erzählt von der Prinzessin Iztaccíhuatl und dem Krieger Popocatépetl. Eine falsche Todesmeldung tötet ihre Hoffnung; der Heimkehrer trägt sie in die Berge und wacht bei ihr.","Die Vulkane werden als liegende Frau und kniender Wächter gelesen. Frühe koloniale Quellen belegen Namen und Kulte der Berge; die geschlossene Liebesgeschichte zirkuliert in späteren Varianten."],[C("Popocatepetl Iztaccihuatl view","Die beiden Vulkane"),C("Iztaccihuatl sleeping woman","Iztaccíhuatl")],[Q("Instituto Nacional de Antropología e Historia","https://www.inah.gob.mx/")])
);

window.KARTEN.push(
  {category:"Aphorismen",kind:"quote",title:"„Ein Aphorismus ist der letzte Ring einer langen Gedankenkette.“",byline:"Marie von Ebner-Eschenbach · Aphorismen, 1893",detail:["Der Satz steht als Motto unmittelbar vor dem „Ersten Hundert“ ihrer Aphorismen. Die kurze Form erscheint als sichtbarer Abschluss einer langen Arbeit des Beobachtens, Prüfens und Verdichtens.","In der Aphorismusforschung beschreibt der Satz die Klärung: Ein Gedanke gewinnt nach längerer Reflexion seine knappe, sprachlich geschlossene Gestalt. Der Leser erschließt die vorausgehende Gedankenkette aus dem Ergebnis."],media:[C("Marie von Ebner-Eschenbach portrait 1900","Marie von Ebner-Eschenbach")],sources:[S("Ebner-Eschenbach: Aphorismen · Project Gutenberg","https://www.gutenberg.org/files/77889/77889-h/77889-h.htm")]},
  {category:"Aphorismen",kind:"quote",title:"„Sind meine Freunde einäugig, betrachte ich sie im Profil.“",byline:"Joseph Joubert · Pensées, essais et maximes",detail:["Jouberts französischer Satz lautet: „Quand mes amis sont borgnes, je les regarde de profil.“ Die Schwäche des Freundes bleibt bekannt; Freundschaft entscheidet, welchen Anteil sie an der Wahrnehmung erhält.","Joubert führte über Jahrzehnte Notizbücher und veröffentlichte zu Lebzeiten kaum etwas daraus. Ein genau gewähltes Bild trägt die moralische Beobachtung, ohne sie auszuerzählen."],original:{label:"Französischer Wortlaut",text:"Quand mes amis sont borgnes, je les regarde de profil."},media:[C("Joseph Joubert portrait","Joseph Joubert")],sources:[S("Joubert: Pensées, essais et maximes · Wikisource","https://fr.wikisource.org/wiki/Pens%C3%A9es,_essais_et_maximes_(Joubert)/Texte_entier")]},
  {category:"Aphorismen",kind:"quote",title:"CYNIC, n. A blackguard whose faulty vision sees things as they are, not as they ought to be.",byline:"Ambrose Bierce · The Devil’s Dictionary",detail:["Auf Deutsch: „Zyniker, Substantiv: ein Schuft, dessen fehlerhafter Blick die Dinge so sieht, wie sie sind, statt wie sie sein sollten.“ Die Definition kehrt einen moralischen Vorwurf um: Gerade die genaue Wahrnehmung gilt der Umgebung als Sehfehler.","Bierce schrieb seine erfundenen Wörterbuchartikel über mehrere Jahrzehnte. Die Form verbindet sprachliche Definition und Gesellschaftskritik; ein Eintrag erklärt zugleich das Wort und die Interessen der Menschen, die es abwertend gebrauchen."],media:[C("Ambrose Bierce portrait","Ambrose Bierce")],sources:[S("Bierce: The Devil’s Dictionary · Project Gutenberg","https://www.gutenberg.org/files/972/972-h/972-h.htm")]},

  {category:"Historische Koinzidenzen",title:"Onfim · Birkenrindenbrief Nr. 199",summary:"Alphabet, Silben, Grußformel und Zeichnungen eines Nowgoroder Kindes.",detail:["Zwischen 1240 und 1260 übte der Junge Onfim auf Birkenrinde Schreiben. Brief Nr. 199 enthält Buchstaben, Silben, eine Grußformel an Danilo und Zeichnungen: einen Reiter, kämpfende Figuren und ein vierbeiniges Wesen, neben dem Onfim sich selbst benennt.","Die Nowgoroder Birkenrindenfunde bewahren gewöhnliche Mitteilungen, Schulaufgaben und Kritzeleien. Bei Onfim liegen Unterricht und Spiel auf derselben Oberfläche. Sichtbar werden einzelne Arbeitsschritte eines mittelalterlichen Kindes: Buchstaben wiederholen, Formeln abschreiben, Figuren erfinden."],media:[F("Bb199.gif","Birkenrindenbrief Nr. 199"),F("Onfim.jpg","Weitere Zeichnungen Onfims")],sources:[S("Gramoty.ru: Birkenrindenbrief Nr. 199","https://gramoty.ru/birchbark/document/list/?number=199"),S("Staatliches Historisches Museum: Onfims Birkenrinde","https://nav.shm.ru/en/exhibits/1714/")]},
  {category:"Historische Koinzidenzen",title:"Henry „Box“ Brown · Richmond–Philadelphia, 1849",summary:"Eine Flucht aus der Sklaverei in einer Transportkiste.",detail:["Am 29. März 1849 ließ sich Henry Brown in eine Kiste von rund 94 mal 76 mal 61 Zentimetern schließen. Drei Luftlöcher, etwas Wasser und ein Werkzeug gehörten zur Ausstattung. Die Kiste reiste per Wagen, Eisenbahn und Dampfschiff von Richmond nach Philadelphia. Brown verbrachte 27 Stunden darin und lag während eines langen Streckenabschnitts auf dem Kopf.","Nach seiner Ankunft trat Brown als abolitionistischer Redner auf und veröffentlichte seine Lebensgeschichte. Die Flucht nutzte dieselbe Transportordnung, in der Waren erfasst, umgeladen und ohne persönliche Kenntnis des Absenders weiterbefördert wurden. Brown machte diese Logistik anschließend zum Gegenstand öffentlicher Zeugenschaft."],media:[F("Boxbrown.jpg","Henry Browns Ankunft in Philadelphia"),F("NHBB D004 Henry Box Brown.jpg","Titelbild seiner Lebensgeschichte von 1849")],sources:[S("National Park Service: Henry Box Brown","https://home.nps.gov/nebe/learn/historyculture/henryboxbrown.htm"),S("Library of Congress: The Resurrection of Henry Box Brown","https://www.loc.gov/pictures/item/2004665363/")]},
  {category:"Historische Koinzidenzen",title:"Der Dreadnought-Streich · 7. Februar 1910",summary:"Eine fingierte abessinische Delegation besichtigt das modernste Schlachtschiff der Royal Navy.",detail:["Horace de Vere Cole schickte ein gefälschtes Telegramm des Foreign Office an die Marine. Anschließend reiste er mit fünf Freunden, darunter Virginia Stephen, Adrian Stephen und Duncan Grant, nach Weymouth. In orientalisierenden Kostümen und Blackface erhielten sie mit einer erfundenen Sprache eine offizielle Führung durch die HMS Dreadnought.","Das Gruppenbild dokumentiert die rassistische Verkleidung. Der Erfolg beruhte auf kolonialen Stereotypen, amtlichen Umgangsformen und der geringen Kenntnis der Gastgeber über afrikanische Sprachen und Höfe. Nach der Veröffentlichung wurde die Sicherheit bei Marinebesuchen verschärft."],media:[F("Dreadnought hoax.png","Die Gruppe vor der Fahrt nach Weymouth"),F("Dreadnought hoax telegram.jpg","Das gefälschte Telegramm"),F("HMS Dreadnought 1906 H61017.jpg","HMS Dreadnought")],sources:[S("National Portrait Gallery: The Dreadnought Hoax","https://www.npg.org.uk/collections/search/portrait/mw136268/The-Dreadnought-Hoax")]},

  {category:"Philosophische Begriffe",title:"Haecceitas · Diesheit",summary:"Das Prinzip, durch das ein Wesen genau dieses unwiederholbare Einzelne ist.",detail:["Johannes Duns Scotus unterscheidet die gemeinsame Natur von ihrer individuellen Verwirklichung. Menschlichkeit kommt Sokrates und Platon gemeinsam zu; ihre jeweilige Haecceitas macht jeden zu diesem einzelnen Menschen.","Die Haecceitas liegt tiefer als eine Liste beobachtbarer Eigenschaften. Zwei Wesen könnten einander in allen beschreibbaren Merkmalen gleichen und blieben dennoch zwei Einzelne. Der Begriff wirkt bis in Debatten über Identität, mögliche Welten und das Fortbestehen einer Person."],media:[F("Duns Scotus Painting (cropped).jpg","Johannes Duns Scotus")],sources:[S("Stanford Encyclopedia of Philosophy: John Duns Scotus","https://plato.stanford.edu/entries/duns-scotus/")]},
  {category:"Philosophische Begriffe",title:"Prohairesis",summary:"Die Fähigkeit, Eindrücke zu prüfen und ihnen zuzustimmen oder die Zustimmung zu verweigern.",detail:["Bei Epiktet bezeichnet Prohairesis das entscheidende Vermögen des Urteilens und Wählens. Ein Eindruck tritt auf; der Mensch prüft ihn, stimmt ihm zu, weist ihn zurück oder hält das Urteil offen. Aus wiederholten Entscheidungen entsteht der moralische Charakter.","Körper, Besitz, Rang, Gesundheit und fremde Entscheidungen bleiben äußere Bedingungen. Stoische Freiheit liegt in der verantworteten Zustimmung und im Gebrauch der Eindrücke. Darum kann Epiktet die Prohairesis als ihrem Wesen nach ungehindert beschreiben."],media:[F("Epictetus portrait from Les Morales de Plutarque, Sénèque, Socrate et Epictète, 1653, Indian ink.png","Epiktet, idealisiertes Porträt von 1653")],sources:[S("Stanford Encyclopedia of Philosophy: Epictetus","https://plato.stanford.edu/entries/epictetus/")]},
  {category:"Philosophische Begriffe",title:"Supererogation",summary:"Eine moralisch gute Handlung, deren Unterlassung erlaubt bleibt.",detail:["Wer sich unter großer Gefahr für einen Fremden einsetzt oder weit mehr Hilfe leistet, als eine Pflicht verlangt, handelt supererogatorisch. Lob ist angemessen; die Auslassung bleibt moralisch erlaubt. Der Begriff trennt den Bereich des Guten vom engeren Bereich des Geschuldeten.","Das lateinische Wort stammt aus der Vulgata-Fassung vom barmherzigen Samariter und wurde später für religiöse Leistungen über das Gebot hinaus gebraucht. Seit J. O. Urmsons Aufsatz „Saints and Heroes“ von 1958 untersucht die Moralphilosophie, wie freiwilliges Mehr in Theorien von Pflicht und Wert passt."],media:[F("Rembrandt - The Good Samaritan - Berlin.jpg","Rembrandt: Der barmherzige Samariter")],sources:[S("Stanford Encyclopedia of Philosophy: Supererogation","https://plato.stanford.edu/entries/supererogation/")]},

  {category:"Künstler und drei Werke",title:"Olga Rozanova",summary:"Man on the Street · Suprematism · Green Stripe",detail:["„Man on the Street“ zerlegt eine Stadtfigur in Schilder, Zahlen, Körperteile und kantige Farbfelder. In „Suprematism“ lösen sich Gegenstände vollständig auf; leuchtende Flächen und eine schwarze Querform bestimmen Spannung und Gewicht.","„Green Stripe“ führt diese Entwicklung zu einer einzigen senkrechten Farbspur auf hellem Grund. Die unscharfen Ränder lassen das Grün wie Licht in die Fläche eindringen. Die drei Werke zeigen Rozanovas Weg vom Kubofuturismus zu einer Abstraktion, in der Farbe selbst zum Gegenstand wird."],works:["Man on the Street (Analysis of Volumes), 1913","Suprematism, 1916","Green Stripe (Sprayed Light), 1917–1918"],media:[F("Man on the Street (Analysis of Volumes) (Rozanova, 1913).jpg","Man on the Street"),F("Suprematism (Rozanova, 1916 (RM, a)).jpg","Suprematism"),F("Green Stripe (Rozanova, 1917).jpg","Green Stripe")],sources:[S("Museo Thyssen-Bornemisza: Man on the Street","https://www.museothyssen.org/en/collection/artists/rozanova-olga/man-street-analysis-volumes"),S("Russian Museum: Suprematism","https://rusmuseumvrm.ru/data/collections/painting/19_20/zhb-1382/index.php?lang=en"),S("Rostov Kremlin Museum: Green Stripe","https://www.rostmuseum.ru/collections/catalog/vystavka-khvost-komety/kollektsiya-avangarda/rozanova-olga-vladimirovna-1886-1918-zelenaya-polosa-raspylennyy-svet-1917-1918/")]},
  {category:"Künstler und drei Werke",title:"Helene Schjerfbeck",summary:"The Door · The Convalescent · Self-Portrait, Black Background",detail:["„The Door“ zeigt einen fast leeren Kapellenraum in der Bretagne. Licht, Wand und Öffnung tragen die ganze Spannung. „The Convalescent“ entstand in St Ives: Das Kind hält einen austreibenden Zweig und richtet seine Aufmerksamkeit auf das zurückkehrende Leben.","Im Selbstbildnis von 1915 werden Hintergrund, Kleidung und Haar zu wenigen dunklen Flächen; Gesicht und Blick bleiben aus dünnen, stellenweise abgeriebenen Farbschichten stehen. Die Auswahl zeigt Schjerfbecks Entwicklung von genauer naturalistischer Beobachtung zu einer stark reduzierten modernen Bildsprache."],works:["The Door, 1884","The Convalescent, 1888","Self-Portrait, Black Background, 1915"],media:[F("Helene Schjerfbeck - The Door - A IV 3680 - Finnish National Gallery.jpg","The Door"),F("Helene Schjerfbeck - The Convalescent.jpg","The Convalescent"),F("Helene Schjerfbeck, Self-Portrait, Black Background, 1915.jpg","Self-Portrait, Black Background")],sources:[S("Finnish National Gallery: The Door","https://www.kansallisgalleria.fi/en/object/485483"),S("Finnish National Gallery: The Convalescent","https://www.kansallisgalleria.fi/en/object/624337"),S("Finnish National Gallery: Self-Portrait","https://www.kansallisgalleria.fi/en/object/399658")]},
  {category:"Künstler und drei Werke",title:"Uemura Shōen",summary:"Flames · Mother and Child · Jo-no-mai",detail:["„Flames“ greift die eifersüchtige Rokujō aus dem Genji monogatari auf. Haar, Spinnennetzmuster und flammenartige Linien verwandeln die höfische Gestalt in einen rächenden Geist. „Mother and Child“ gewinnt seine Nähe aus der genauen Haltung der Körper und dem Griff des Kindes an den Kimono.","„Jo-no-mai“ zeigt den langsamen Beginn eines Nō-Tanzes. Fächer, Ärmel und Blick halten die Bewegung in strenger Balance. Shōen verband die Linien- und Farbtechnik des Kyōto-Nihonga mit genauer Kenntnis von Kleidung und Gestik."],works:["Flames, 1918","Mother and Child, 1934","Jo-no-mai, 1936"],media:[F("Uemura-Flame-1918.jpg","Flames"),F("Uemura Shōen - Mother and Child.jpg","Mother and Child"),F("Jo-no-mai by Uemura Shoen.jpg","Jo-no-mai")],sources:[S("Tokyo National Museum: Flames","https://www.tnm.jp/modules/r_free_page/index.php?id=2517&lang=en"),S("National Museum of Modern Art, Tokyo: Mother and Child","https://search.artmuseums.go.jp/search_e/records.php?sakuhin=2100"),S("Tokyo University of the Arts: Jo-no-mai","https://jmapps.ne.jp/geidai/det.html?data_id=1339")]},

  {category:"Erste Sätze großer Romane",kind:"quote",title:"The sun shone, having no alternative, on the nothing new.",detail:["Samuel Beckett, Murphy, 1938. Der Satz gibt der Sonne eine erzwungene Handlung und verbindet den gewöhnlichen Tagesbeginn mit „nothing new“ aus dem Buch Kohelet. Schon die Grammatik folgt der komischen Logik des Romans.","Murphy sucht einen Rückzug aus Arbeit, Geld und gesellschaftlichen Erwartungen in die eigene Innenwelt. Seine Beziehung zu Celia und seine spätere Tätigkeit in einer psychiatrischen Klinik führen diese Vorstellung durch körperliche, philosophische und groteske Situationen."],media:[F("Samuel Beckett, Pic, 1 (cropped2).jpg","Samuel Beckett")],sources:[S("Grove Atlantic: Murphy","https://groveatlantic.com/book/murphy/")]},
  {category:"Erste Sätze großer Romane",kind:"quote",title:"Ich kam nach Comala, weil man mir gesagt hatte, hier lebe mein Vater, ein gewisser Pedro Páramo.",detail:["Juan Rulfo, Pedro Páramo, 1955. Juan Preciado reist nach dem Tod seiner Mutter nach Comala, um seinen Vater zu suchen. Dort begegnet er Stimmen, Erinnerungen und Toten. Wechselnde Erzähler und Zeiten setzen nach und nach die Geschichte von Pedro Páramos Herrschaft zusammen.","Eine frühe Fassung begann mit „Fui a Tuxcacuesco“ und sprach vom Ziel als „allá“. Rulfo änderte dies zu „Vine a Comala“ und „acá“. Die Stimme spricht dadurch bereits aus dem Ort, den sie im ersten Satz zu erreichen scheint."],media:[F("Juan Rulfo (cropped).jpg","Juan Rulfo")],sources:[S("Secretaría de Cultura de México: Juan Rulfo","https://www.gob.mx/cultura/articulos/juan-rulfo-137510?idiom=es"),S("La Jornada: Die Überarbeitung des ersten Satzes","https://www.jornada.com.mx/2005/07/03/sem-pedro.html")]},
  {category:"Erste Sätze großer Romane",kind:"quote",title:"Ich nannte diesen Menschen immer Sensei.",detail:["Natsume Sōseki, こころ / Kokoro, 1914. Der Satz bedeutet: „Ich nannte diesen Menschen stets Sensei.“ Der Erzähler erklärt anschließend, dass diese Anrede für ihn natürlicher klingt als der wirkliche Name. Damit beginnt die Beziehung als Mischung aus Nähe, Abstand und Autorität.","Der junge Erzähler begegnet Sensei in Kamakura. Später erhält er dessen langen autobiografischen Brief über Freundschaft, Verrat, Schuld und den Tod des Freundes K. Das Bekenntnis steht zugleich vor dem Ende der Meiji-Zeit und wird an einen Angehörigen der folgenden Generation weitergegeben."],media:[F("Natsume Soseki photo.jpg","Natsume Sōseki"),F("Natsume Sôseki Umschlag \"Kokoro\".jpg","Umschlag der Erstausgabe")],sources:[S("Aozora Bunko: こころ","https://www.aozora.gr.jp/cards/000148/files/773_14560.html")]}
);

window.KARTEN.push(
  {category:"Märchen und Sagen in ethnografischen Quellen",title:"Die alte Frau und ihr Bärenpflegesohn · Inughuit (Smith Sound)",summary:"Eine alte Frau zieht ein verwaistes Bärenjunges auf; als erwachsener Jäger versorgt es sie und trägt ihre schwarze Handspur in die Ferne.",detail:["Die Frau taut das fast erfrorene Junge auf, füttert es mit Speck und spricht so lange mit ihm, bis es menschlichen Verstand gewinnt. Es lernt beim Spiel die Krallen einzuziehen, jagt später Robben für die Siedlung und wird durch einen breiten Sehnenkragen vor fremden Jägern kenntlich gemacht. Nur einen Mann, der es trotz der Warnungen angreift, tötet es.","Aus Angst um sein Leben schickt die Pflegemutter den Bären schließlich zu seinesgleichen. Beim Abschied streicht sie ihm heimlich mit rußigen, öligen Händen über die Seite. Seitdem, heißt es, erscheine im Norden bisweilen ein eisberggroßer Bär mit schwarzem Fleck. Rasmussen ordnet die Erzählung den Inughuit am Smith Sound zu; die Karte lädt den vollständigen englischen Text der Ausgabe von 1921."],media:[C("Knud Rasmussen Eskimo Folk-Tales bear","Rasmussens Ausgabe von 1921"),F("Capturing polar bear alive on Paul J. Rainey's hunting expedition, Greenland LCCN2007677139.tif","Eisbär in Grönland, 1911")],sources:[S("Project Gutenberg: Eskimo Folk-Tales","https://www.gutenberg.org/ebooks/28932"),S("Smithsonian Libraries: Eskimo Folk-Tales (1921)","https://library.si.edu/digital-library/book/eskimofolktale00rasm")],original:{label:"Vollständiger Originaltext · Rasmussen/Worster (1921)",source:"https://www.gutenberg.org/ebooks/28932",remote:{url:"https://raw.githubusercontent.com/GITenberg/Eskimo-Folk-Tales_28932/master/28932-8.txt",encoding:"windows-1252",start:"THE WOMAN WHO HAD A BEAR AS A FOSTER-SON",end:"ÍMARASUGSSUAQ, WHO ATE HIS WIVES",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
  {category:"Märchen und Sagen in ethnografischen Quellen",title:"Die Sarsagun-Braut und der Bonga · Santal",summary:"Die Braut muss Spiegel und Kamm zu einem Bonga zurückbringen und wird hinter dessen Steintür eingeschlossen.",detail:["Vor der Hochzeit gehen die jungen Frauen Blätter sammeln. Für Blumen im Haar leihen sie bei einem Bonga Spiegel und Kamm; nachher weigern sich alle außer der Sarsagun-Braut, die Dinge zurückzutragen. Der Bonga lockt sie hinein und verschließt den Ausgang. Vater, Bruder, Onkel und Tante rufen sie in gesungenen Versen, doch aus dem Felsen antwortet sie, sie sollten heimkehren.","Als der Bräutigam ankommt, erfährt er, warum die Braut fehlt, und reitet wütend los. Sein Pferd tritt genau auf die verborgene Tür, sie springt auf, und er zieht die Braut heraus. P. O. Bodding ließ den größten Teil dieser Sammlung auf Santali niederschreiben, vor allem durch Sagram Murmu; Cecil H. Bompas bezeichnete seine englische Übersetzung von 1909 als wörtlich, aber gekürzt. Angezeigt wird dieser historische Text vollständig."],media:[C("Santal Wedding Dance","Santal-Hochzeitstanz"),C("Folklore of the Santal Parganas 1909","Ausgabe der Santal-Sammlung")],sources:[S("Project Gutenberg: Folklore of the Santal Parganas","https://www.gutenberg.org/ebooks/11938"),S("Nationalbibliothek Norwegen: Santali manuscripts and cultural heritage","https://www.nb.no/en/research/santali-manuscripts-and-cultural-heritage/")],original:{label:"Vollständiger Originaltext · Bodding/Bompas (1909)",source:"https://www.gutenberg.org/ebooks/11938",remote:{url:"https://raw.githubusercontent.com/GITenberg/Folklore-of-the-Santal-Parganas_11938/master/11938-8.txt",encoding:"windows-1252",start:"CLII. The Sarsagun Maiden.",end:"CLIII. The Schoolboy and the Bonga.",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
  {category:"Märchen und Sagen in ethnografischen Quellen",title:"Die Alan und die Jäger · Itneg (Tinguian)",summary:"Zwei Jäger bitten eine Waldgeistfrau um Feuer; ihr eigener Verrat setzt eine Kette von Täuschung und Gewalt in Gang.",detail:["Zwei Männer haben ein Wildschwein erlegt, aber kein Feuer. Eine Alan gibt ihnen Feuer, hilft beim Zerlegen und schickt einen der Männer mit der Leber zu ihrem Kind. Er isst die Leber selbst, wirft das Kind in einen Kessel und behauptet, es habe gut gegessen. Als die Alan den Mord entdeckt, fliehen beide auf einen Baum.","Die Alan greift zunächst nach den Spiegelbildern im Wasser. Auf ihre Frage behaupten die Männer, sie seien mit den Füßen voran hinaufgeklettert. Sie versucht es an einer Liane; die Männer schneiden sie durch, töten die stürzende Alan und rauben aus ihrem Haus Perlen und Gold. Die Aufzeichnung beschönigt die Jäger nicht. Mabel Cook Cole veröffentlichte sie 1916 aus dem Umfeld der Feldforschung unter den Itneg Nord-Luzons; „Tinguian“ ist die historische Bezeichnung der Ausgabe."],media:[C("Tinguin men of Sallapadin","Itneg-Männer aus Sallapadin"),C("Tinguian people Philippines historical","Coles historische Tinguian-Feldsammlung")],sources:[S("Project Gutenberg: Philippine Folk Tales","https://www.gutenberg.org/ebooks/12814"),S("Field Museum: Anthropological Expedition Philippines","https://philippines.fieldmuseum.org/heritage/narrative/4705")],original:{label:"Vollständiger Originaltext · Mabel Cook Cole (1916)",source:"https://www.gutenberg.org/ebooks/12814",remote:{url:"https://raw.githubusercontent.com/GITenberg/Philippine-Folk-Tales_12814/master/12814-8.txt",encoding:"windows-1252",start:"The Alan and the Hunters\n\n_Tinguian_\n\n\nTwo men once went to hunt wild pig in the mountains",end:"Man and the Alan\n\n_Tinguian_",reflow:true,fetchLabel:"GITenberg-Transkription"}}},

  {category:"Sagengestalten, Legenden und Märchen weltweit",title:"Żaḥḥāk / Aži Dahāka · Iranische Überlieferung",summary:"Ein Herrscher mit zwei Schulterschlangen macht den Hunger der Ungeheuer zum Regierungssystem.",detail:["Im Schāhnāme verführt Eblis den jungen Żaḥḥāk erst zum Vatermord und dann als Koch zum Fleischgenuss. Als Lohn darf er dessen Schultern küssen; dort wachsen zwei Schlangen, die nach dem Rat eines falschen Arztes täglich Menschenhirne erhalten. Der Schmied Kāva, dessen Söhne dafür getötet wurden, zerreißt Żaḥḥāks erzwungenes Zeugnis einer gerechten Herrschaft und erhebt seine Lederschürze zum Banner. Unter diesem Zeichen führt er den Aufstand zu Ferēdūn.","Ferēdūn besiegt Żaḥḥāk, tötet ihn aber nicht, sondern bindet ihn im Berg Damāvand. Die Figur hat mehrere Schichten: Der avestische Aži Dahāka ist ein dreiköpfiges, sechsäugiges Drachenwesen; das Schāhnāme macht daraus einen scheinbar historischen Tyrannen, an dessen Schultern die alte Drachengestalt weiterlebt."],media:[C("Zahhak Shahnameh","Żaḥḥāk und die Ärzte im Schāhnāme"),C("Kaveh blacksmith Shahnameh","Kāvas Aufstand")],sources:[S("Encyclopaedia Iranica: Iran – Myths and Legends","https://www.iranicaonline.org/articles/iran-iv-myths-and-legends/"),S("Encyclopaedia Iranica: Kāva","https://www.iranicaonline.org/articles/kava-hero/"),S("Metropolitan Museum: Bowl Depicting King Zahhak","https://www.metmuseum.org/art/collection/search/451774")]},
  {category:"Sagengestalten, Legenden und Märchen weltweit",title:"Blodeuwedd · Wales",summary:"Aus Blüten als Ehefrau geschaffen, plant Blodeuwedd einen unmöglichen Mord und wird zur Eule.",detail:["Weil Arianrhod ihrem Sohn Lleu eine menschliche Ehefrau verweigert, formen Math und Gwydion für ihn eine Frau aus Eichen-, Ginster- und Mädesüßblüten. Blodeuwedd verliebt sich in Gronw Pebyr und entlockt Lleu die einzige Lage, in der er verwundet werden kann: weder drinnen noch draußen, weder gehend noch reitend, mit einem Fuß auf einer Ziege und dem anderen am Badezuber. Gronws eigens gefertigter Speer trifft ihn; Lleu fliegt als Adler davon.","Gwydion findet den verletzten Adler, gibt Lleu seine Gestalt zurück und verfolgt Blodeuwedd. Er verwandelt sie in eine Eule, die das Tageslicht und die übrigen Vögel meiden muss; Lleu tötet Gronw mit einem Speerwurf durch den Stein, hinter dem dieser Schutz sucht. Die Erzählung steht im vierten Zweig des Mabinogi und ist im Weißen und Roten Buch, Handschriften des 14. Jahrhunderts, überliefert."],media:[C("White Book Rhydderch","Das Weiße Buch von Rhydderch"),C("Llech Ronw","Llech Ronw, der mit Gronws Ende verbundene Stein")],sources:[S("National Library of Wales: The White Book of Rhydderch","https://www.library.wales/discover-learn/education/learning-resources/the-white-book-of-rhydderch"),S("Eryri National Park: Blodeuwedd","https://eryri.gov.wales/discover/history-and-heritage/mythology-and-folklore/blodeuwedd/"),S("Wikisource: The Mabinogion – Math the Son of Mathonwy","https://en.wikisource.org/wiki/The_Mabinogion/Math_the_Son_of_Mathonwy")]},
  {category:"Sagengestalten, Legenden und Märchen weltweit",title:"Kintu, Nambi und Walumbe · Buganda",summary:"Ein vergessenes Körnchen Hirse bringt Walumbe, die personifizierte Krankheit und den Tod, von der Himmelswelt auf die Erde.",detail:["Kintu lebt mit seiner Kuh allein auf der Erde, bis Nambi, Tochter des Himmelswesens Ggulu, ihn heiraten will. Ggulu erlaubt es, warnt das Paar aber, ohne Rückkehr aufzubrechen, damit Nambis Bruder Walumbe ihnen nicht folgt. Unterwegs fällt Nambi das Futter für ihr Huhn ein. Sie kehrt um; Walumbe bemerkt den Aufbruch und kommt mit auf die Erde. Als Kintu ihm später kein Kind überlässt, beginnt Walumbe, die Nachkommen des Paares zu holen.","In einer verbreiteten Fortsetzung jagt Nambis Bruder Kayiikuuzi Walumbe, der immer wieder in die Erde schlüpft. Menschenkinder sollen schweigen, sobald sie ihn sehen, rufen aber doch; Walumbe entkommt und der Tod bleibt. Die Tanda-Gruben westlich von Kampala werden mit dieser unterirdischen Jagd verbunden. Der mythische erste Mensch Kintu und Kintu als erster Kabaka überlagern einander, gehören aber verschiedenen Traditionsschichten an."],media:[F("Ttanda Archaeological Pits - Ennyanga Za Walumbe Ttanda 13.jpg","Tanda-Gruben, mit Walumbes Flucht verbunden")],sources:[S("Ugandas Bildungsministerium: Traditional Beliefs about the Origin of Man","https://www.education.go.ug/wp-content/uploads/2020/04/S1-Materials-HUMANITIES-2.pdf"),S("Cambridge University Press: The story and its making","https://www.cambridge.org/core/books/kingship-and-state/story-and-its-making/01188049B36BC5F602E939E202CD4C05")]}
);

window.KARTEN.push(
  {category:"Seltene Musikstile",title:"Sutartinės · Nordostlitauen",detail:["Kurze Melodien aus zwei bis fünf Tönen werden auf zwei, drei oder vier Sängerinnen verteilt. Zwei Stimmen können in parallelen Sekunden geführt sein; drei Stimmen setzen dieselben Phrasen als strengen Kanon versetzt ein. Haupttext und Refrain laufen dabei gleichzeitig, sodass Sekundenreibungen, Synkopen und wechselnde Wortakzente den charakteristischen Puls bilden.","Die Texte behandeln Arbeit, Kalenderbräuche, Hochzeiten, Krieg und Familienleben. Männer überliefern verwandte Instrumentalfassungen auf Skudučiai-Panflöten, Hörnern, langen Holztrompeten, Kernspaltflöten und Zithern. Die Aufnahme zeigt Gesang, Kreisbewegung und instrumentale Praxis im Zusammenhang."],media:[Y("Wij_cgVGOxw","UNESCO · Lithuanian Multipart Songs – Sutartinės")],sources:[S("UNESCO: Sutartinės, Lithuanian multipart songs","https://ich.unesco.org/en/RL/sutartins-lithuanian-multipart-songs-00433")]},
  {category:"Seltene Musikstile",title:"Nanyin · Südliches Fujian",detail:["Im Kernensemble gliedert eine waagerecht gehaltene, geknickthalsige Pipa den Verlauf; Dongxiao-Bambusflöte, Sanxian und Erxian ziehen langsam verzierte Linien darum. Der Solist singt im Quanzhou-Dialekt und schlägt häufig selbst die hölzernen Klappern. Atem, Silbenlänge und festgelegte Instrumentalformeln erzeugen eine fein abgestufte Zeitordnung.","Das Repertoire umfasst reine Instrumentalstücke, vokal-instrumentale Formen und begleitete Balladen. Nanyin wird in lokalen Musikvereinen, bei Frühlings- und Herbstriten, Hochzeiten, Begräbnissen und Festen gepflegt; Minnan-Gemeinschaften verbreiteten die Praxis außerdem nach Taiwan und Südostasien."],media:[Y("x0EXIrADaIU","UNESCO · Nanyin")],sources:[S("UNESCO: Nanyin","https://ich.unesco.org/en/RL/nanyin-00199")]},
  {category:"Seltene Musikstile",title:"Chopi-Timbila · Mosambik",detail:["Ein Orchester vereint fünf bis dreißig Timbila-Xylophone verschiedener Register. Unter jedem Stab sitzt eine mit Bienenwachs abgedichtete Kalebasse als Resonator; eine Membran färbt den Ton nasal und lässt ihn vibrieren. Die Hände eines Spielers können verschiedene Rhythmen ausführen, während mehrere Register ineinandergreifen.","Jährlich entstehen neue, etwa einstündige Folgen für Orchester, Gesang und Tanz. Zum Ablauf gehört der langsame M’zeno-Gesang, dessen Texte mit Humor und Sarkasmus aktuelle Ereignisse kommentieren. Meister, Lernende und Kinder spielen gemeinsam; die knapper werdenden Mwenje-Hölzer bedrohen zugleich den Instrumentenbau."],media:[Y("IgZV9nR-m2o","UNESCO · The Chopi Timbila")],sources:[S("UNESCO: Chopi Timbila","https://ich.unesco.org/en/RL/chopi-timbila-00133")]},

  {category:"Vergessene Komponisten",title:"Johanna Senfter · Sinfonien Nr. 1 und 9",detail:["Die Erste in F-Dur op. 22 von 1914 bündelt ihre dicht polyphone Schreibweise in drei Sätzen: bewegliche Chromatik hält die Harmonie in Fluss, ein gewichtiger langsamer Satz arbeitet mit Blechbläserchorälen, und das Finale verbindet Marschrhythmus mit einem lyrischen Seitengedanken. Die Neunte in Es-Dur op. 117 von 1949 gewinnt alle vier Sätze aus dem Luther-Choral „Aus tiefer Not schrei ich zu dir“. Das Thema erscheint wörtlich und in wechselnden Charakteren; eine streng ausgearbeitete Schlussfuge führt Choral und kontrapunktische Linien zusammen.","Der Abstand von 35 Jahren macht Senfters Entwicklung von einer gedrängten spätromantischen Sinfonik zu einer noch stärker integrierten Choralform hörbar. Die Weltersteinspielungen der ersten und letzten ihrer neun Sinfonien schließen eine erhebliche Repertoirelücke und erschließen ein Orchesterwerk, das zuvor fast vollständig unaufgenommen war."],media:[Y("guZG_-SStrI","Johanna Senfter · Sinfonien Nr. 1 und 9 · Chelsea Gallo")],sources:[S("Capriccio/Naxos: Senfter, Symphonies Nos. 1 and 9","https://www.naxos.com/CatalogueDetail/?id=C5555"),S("MUGI: Johanna Senfter","https://mugi.hfmt-hamburg.de/artikel/Johanna_Senfter.html")]},
  {category:"Vergessene Komponisten",title:"Ina Boyle · Sinfonie Nr. 1 „Glencree“",detail:["Die drei Sätze „On Lacken Hill“, „Nightwinds in the Valley“ und „Above Lough Bray“ bilden eine Folge von Landschaftssätzen. Zu Beginn singt die Oboe über ruhigen Streichern. Das kurze Mittelscherzo schleudert aufsteigende chromatische Figuren durch das Orchester und verdichtet sie zu einem wirbelnden Jig-Rhythmus. Im Finale zieht eine weit gespannte Melodie der ersten Violinen durch mehrere Register; Tremoli der Mittelstimmen und Pizzicati der Bässe geben ihr Tiefe und Bewegung.","Boyle formt Landschaft durch Register, Textur und Tempo und hält die drei Ortsbilder in einer knappen sinfonischen Proportion. Die vollständige Uraufführung erfolgte erst 1945; große Teile ihres Œuvres blieben als Manuskripte im Trinity College Dublin schwer zugänglich. „Glencree“ verdient regelmäßige Aufführungen als präzise orchestrierte Stimme der irischen Musik zwischen Spätromantik und Moderne."],media:[Y("P_n34JV5aGA","Ina Boyle · Symphony No. 1 „Glencree“ · RTÉ Concert Orchestra"),C("Lough Bray County Wicklow Ireland","Lough Bray in den Wicklow Mountains")],sources:[S("Contemporary Music Centre: Symphony No. 1, Glencree","https://www.cmc.ie/music/symphony-no-1-glencree"),S("Trinity College Dublin: Ina Boyle","https://www.tcd.ie/library/exhibitions/in-tune/modern_irish_masters.php")]},
  {category:"Vergessene Komponisten",title:"Henriëtte Bosmans · Zweites Cellokonzert",detail:["Das Solocello eröffnet den ersten Satz allein mit einer nachdenklichen Linie aus der Tiefe; das Orchester bleibt zunächst leicht und erweitert den Satz später um scharf rhythmische, martialische Episoden. Im Scherzo treffen Holzbläserarabesken und ein dunkel rollender Streicherbass auf bewegliche Cellogesten. Das Finale beginnt Molto lento mit einem hohen Duett von Cello und Solovioline über Harfenklängen und kippt anschließend in einen kräftigen Tanz mit farbiger Perkussion.","Bosmans schreibt lange, sprachähnliche Bögen für das Cello und bindet den Solisten durch kammermusikalische Dialoge an Harfe, Holzbläser und Konzertmeister. Sie vollendete das Werk 1923 für Frieda Belinfante, die am 31. Januar 1924 die Uraufführung spielte. Nach der letzten bekannten Aufführung 1933 verschwand es für Jahrzehnte; seine melodische Sicherheit, die raschen Stimmungswechsel und die transparente Orchesterfarbe rechtfertigen einen festen Platz im Cellorepertoire."],media:[Y("k__8K8ISmf8","Henriëtte Bosmans · Cellokonzert Nr. 2"),C("Photograph Henriëtte Bosmans Jacob Merkelbach 1917","Henriëtte Bosmans, 1917")],sources:[S("Forbidden Music Regained: Deuxième Concerto pour Violoncelle","https://www.forbiddenmusicregained.org/search/composition/id/100626"),S("Donemus: Second Concerto for cello and orchestra","https://webshop.donemus.nl/action/front/sheetmusic/12798")]},

  {category:"Großartige Bilder und Design",title:"Samuel van Hoogstraten · Perspektivkasten mit holländischem Haus",detail:["Van Hoogstraten bemalte um 1655–60 die Innenflächen eines rechteckigen Holzkastens mit stark verzerrten Zimmern, Türen, Fliesen und Figuren. Erst durch eines der beiden Gucklöcher richten sich die Anamorphosen zu einem tiefen, zusammenhängenden Haus aus. Das offene Ende ließ Licht ein; ursprünglich streute geöltes Papier den Einfall. Mehrere gemalte Durchblicke verbinden real getrennte Flächen.","Der festgelegte Blickpunkt wird selbst zum Bildthema. Von links sieht der Betrachter einen Mann, der heimlich eine lesende Frau beobachtet; von rechts erwidert ein Hund den Blick. Außenflächen zeigen Allegorien von Liebe, Gewinn und Ruhm, der Deckel eine anamorph verzerrte Venus. Malerei, optisches Gerät und Beobachtungsszene bilden ein einziges Objekt."],media:[F("Hoogstraten Perspective Box.jpg","Innenansicht durch ein Guckloch"),F("Samuel van Hoogstraten (1627-1678) - A Peepshow with Views of the Interior of a Dutch House - NG3832 - National Gallery.jpg","Außenansicht des Perspektivkastens")],sources:[S("National Gallery: A Peepshow with Views of the Interior of a Dutch House","https://www.nationalgallery.org.uk/paintings/samuel-van-hoogstraten-a-peepshow-with-views-of-the-interior-of-a-dutch-house")]},
  {category:"Großartige Bilder und Design",title:"Kamisaka Sekka · „Momoyogusa“",detail:["Die drei 1909–10 gedruckten Bände versammeln Natur, Figuren und Landschaften als doppelseitige Farbholzschnitte. In „Hohe Welle“ steht eine einzige gekrümmte Form vor dunkelblauem Grund und silbernem Mond. „Bambus im Schnee“ verteilt zwei grüne Triebe, einen kleinen Sperling und große graue Leerflächen über das Querformat. Maßstab, Anschnitt und Materialfarbe tragen die Komposition.","Sekka überführt Verfahren der Rinpa-Tradition in eine reproduzierbare Mustersammlung für die moderne Gestaltung. Silberpigment, flächige Farbblöcke und abrupte Ausschnitte lassen jede Doppelseite zugleich als Bild und als Entwurfsmodell für Textil, Lack oder Keramik funktionieren."],media:[C("Kamisaka Sekka Momoyogusa Tatsunami RP-P-1992-95","Hohe Welle vor silbernem Mond"),C("Kamisaka Sekka Momoyogusa Settchu take RP-P-1992-108","Bambus im Schnee")],sources:[S("LACMA: Flowers of One Hundred Worlds, 1909/1910","https://collections.lacma.org/object/129971"),S("Rijksmuseum: Hohe Welle, RP-P-1992-95","https://www.rijksmuseum.nl/en/collection/RP-P-1992-95")]},
  {category:"Großartige Bilder und Design",title:"Jan Eisenloeffel · Teekessel und Service um 1903",detail:["Der Kessel sitzt auf einem offenen, sichtbar vernieteten Gestell. Ein langer gerader Ausguss führt die Achse des Gefäßes fort; Rohr, Holzknauf und das mit Rattan umwickelte Bügelgriffstück trennen die Hand von den heißen Metallflächen. Beim mehrteiligen Service bilden zylindrische Gefäße und das rechteckige Tablett eine klar erkennbare Produktfamilie. Sichtbare Verbindungen übernehmen zugleich die Aufgabe des Ornaments.","Eisenloeffel kombiniert Messing, Kupfer, Glas, Holz und Flechtwerk nach ihren thermischen und konstruktiven Aufgaben. Die wenigen Grundformen lassen sich auf Kessel, Milchkanne, Zuckerdose und Behälter übertragen. Damit verbindet das Ensemble präzise Werkstattarbeit mit dem Gedanken einer wiederholbaren Serie im niederländischen Kunsthandwerk um 1900."],media:[F("Teapot with rechaud, designed by Jan Eisenloeffel, Overveen, Netherlands, 1900-1902, brass, rattan, wood - Museum für Angewandte Kunst Köln - Cologne, Germany - DSC09591.jpg","Teekessel mit Rechaud"),C("Tea Tray Netherlands ca. 1903 CH 18620499","Tablett des siebenteiligen Teeservices")],sources:[S("Cooper Hewitt/Smithsonian: Tea set, ca. 1903","https://www.si.edu/object/tea-set%3Achndm_1986-14-1_6"),S("British Museum: kettle, stand and spirit lamp","https://www.britishmuseum.org/collection/object/H_1987-0110-1")]}
);

window.KARTEN.push(
  NC("Literarische und filmische Tropen und Typenszenen","Anagnorisis durch Zeichen","Eine Narbe, ein Gewebe oder ein Körpermal macht eine verborgene Identität lesbar.",["Aristoteles nennt den Umschlag vom Nichtwissen zum Wissen Anagnorisis. Wiederkehrende Zeichen lassen eine frühere Geschichte plötzlich beweisbar werden; ihre Vorbereitung entscheidet über die Wirkung.","Eurykleia erkennt den verkleideten Odysseus an seiner Eberzahn-Narbe. In Euripides’ Ion führen Korb, Gewebe und Schmuck Mutter und Sohn zusammen. In Cymbeline bestätigen ein Mantel und das sternförmige Halsmal des Guiderius die Herkunft der verlorenen Prinzen."],[C("Eurycleia recognizes Odysseus scar illustration","Eurykleia erkennt Odysseus"),C("Euripides Ion manuscript","Euripides’ Ion"),C("Cymbeline Guiderius illustration","Guiderius in Cymbeline")],[Q("Harvard CHS: Disguise and Recognition in the Odyssey","https://www-current.chs.harvard.edu/sheila-murnaghan-disguise-and-recognition-in-the-odyssey-chapter-1/"),Q("Folger Shakespeare Library: Cymbeline 5.5","https://www.folger.edu/explore/shakespeares-works/cymbeline/read/5/5/")]),
  NC("Literarische und filmische Tropen und Typenszenen","Bed Trick","Eine erwartete Person wird im dunklen Bett unbemerkt durch eine andere ersetzt.",["Die Szene verbindet Verkleidung, Dunkelheit und ein später vorgelegtes Beweisstück. Ihre Handlung beruht auf Täuschung und berührt unmittelbar die Frage sexueller Zustimmung.","In Genesis 29 schiebt Laban Jakob in der Hochzeitsnacht Lea anstelle Rachels unter. Boccaccios Decameron III.9 lässt Giletta den Platz einer begehrten Frau einnehmen. Shakespeare übernimmt diese Konstruktion in All’s Well That Ends Well und macht Ring und Schwangerschaft zu Beweisen der Begegnung."],[C("Jacob Rachel Leah manuscript illumination","Jakob, Rahel und Lea"),C("All's Well That Ends Well First Folio","All’s Well That Ends Well")],[Q("Folgerpedia: Sources of All’s Well That Ends Well","https://folgerpedia.folger.edu/All%27s_Well_That_Ends_Well"),Q("Folger Shakespeare Library: The Bed Trick","https://www.folger.edu/explore/shakespeares-works/measure-for-measure/further-reading/")]),
  NC("Literarische und filmische Tropen und Typenszenen","Gefundenes Manuskript","Ein Werk gibt sich als entdecktes, übersetztes oder nur herausgegebenes Dokument aus.",["Der fingierte Überlieferungsweg verteilt die Verantwortung auf Autor, Herausgeber, Übersetzer und angebliche Zeugen. Er kann Authentizität erzeugen und sie zugleich untergraben.","Don Quijote beruft sich auf eine arabische Chronik des Cide Hamete Benengeli und einen moriskischen Übersetzer. Die erste Ausgabe von The Castle of Otranto behauptet, ein italienischer Druck von 1529 sei übersetzt worden. Potockis Manuscrit trouvé à Saragosse verschachtelt eine gefundene Handschrift mit zahlreichen Erzählungen in Erzählungen."],[C("Cide Hamete Benengeli Gustave Dore","Cide Hamete Benengeli"),C("Castle of Otranto first edition title page","The Castle of Otranto, Erstausgabe"),C("Jan Potocki portrait","Jan Potocki")],[Q("Cervantes Society of America: Cide Hamete and the Manuscript Fiction","https://www.cervantesvirtual.com/obra-visor/cervantes-bulletin-of-the-cervantes-society-of-america--27/html/027896ec-82b2-11df-acc7-002185ce6064_19.html"),Q("Ca’ Foscari: The Gothic Novel and its Framing Devices","https://edizionicafoscari.unive.it/media/pdf/journals/english-literature/2020/1/iss-7-2020.pdf")]),
  NC("Literarische und filmische Tropen und Typenszenen","Herrscher inkognito","Ein Herrscher legt Rangzeichen ab und hört, wie Untertanen ohne höfische Kontrolle sprechen.",["Die Verkleidung verschiebt Wissen und Macht: Das Publikum kennt die Identität, die Begegnenden bleiben ahnungslos. Beschwerden, Loyalität und Angst werden dadurch prüfbar.","In Erzählungen aus Tausendundeiner Nacht durchstreift Hārūn ar-Raschīd mit Dschaʿfar und Masrūr das nächtliche Bagdad. In Boccaccios Decameron X.9 reist Saladin verkleidet nach Europa. Heinrich V. leiht sich in Shakespeares Henry V vor Azincourt Erpinghams Mantel und hört Williams’ Zweifel an der Verantwortung des Königs."],[C("Harun al Rashid Thousand and One Nights illustration","Hārūn ar-Raschīd inkognito"),C("Henry V night camp engraving","Heinrich V. im nächtlichen Lager")],[Q("Cardiff University: Mingling Kings and Clowns","https://orca.cardiff.ac.uk/id/eprint/82347/1/Mark%20Truesdale%20Mingling%20Kings%20and%20Clowns.pdf"),Q("Folger Shakespeare Library: Henry V 4.1","https://www.folger.edu/explore/shakespeares-works/henry-v/read/4/1/")]),
  NC("Literarische und filmische Tropen und Typenszenen","Offenbarendes Porträt","Ein Bild zeigt eine Wahrheit über die dargestellte Person, bevor die Handlung sie bestätigt.",["Das Porträt wirkt als zweiter Körper: Es bewahrt Abwesenheit, verdichtet einen Charakterzug oder macht die Gewalt des Betrachtens sichtbar. Kamera und Erzählstimme können seine Deutung anschließend korrigieren.","In Poes The Oval Portrait vollendet der Maler das Bild in dem Augenblick, in dem das Modell stirbt. In Lady Audley’s Secret lässt das Porträt Härte und Verborgenes im Gesicht der scheinbar sanften Lady Audley hervortreten. In Laura beherrscht das gemalte Bild der vermeintlich Toten Wohnung und Vorstellung des Ermittlers, bevor Laura selbst erscheint."],[C("The Oval Portrait Harry Clarke","Poes The Oval Portrait"),C("Lady Audley's Secret illustration portrait","Lady Audleys Porträt"),C("Laura 1944 film poster","Laura, 1944")],[Q("University of Hildesheim: Portraits and Revelation in Victorian Fiction","https://www.intechopen.com/chapters/1208039"),Q("BFI: Paintings in Film","https://www.bfi.org.uk/lists/paintings-film")]),
  NC("Literarische und filmische Tropen und Typenszenen","Lewton Bus","Ein lautes, harmloses Ereignis entlädt eine zuvor sorgfältig aufgebaute Bedrohung.",["Stille, verlangsamte Bewegung und unsichtbarer Raum erzeugen die Erwartung eines Angriffs. Ein abrupter Schnitt und ein realistisches Geräusch liefern einen falschen Schreck; der Begriff stammt von den zischenden Bremsen eines Busses in Cat People.","Regisseur Jacques Tourneur, Produzent Val Lewton und Cutter Mark Robson formten die Szene 1942 in Cat People. Lewtons Produktionen The Leopard Man und The Seventh Victim variierten die Verbindung aus offscreen Gefahr, Tonstoß und verspäteter Erklärung."],[F("Cat People (1942 poster).jpg","Cat People, 1942"),F("Cat People trailer.jpg","Jane Randolph im Trailer zu Cat People")],[Q("BFI: Where to begin with Val Lewton","https://www.bfi.org.uk/features/where-begin-val-lewton"),Q("Turner Classic Movies: Behind the Camera — Cat People","https://www.tcm.com/articles/363103/behind-the-camera-cat-people")]),
  NC("Literarische und filmische Tropen und Typenszenen","Schlüsselloch-Matte","Eine schwarze Maske begrenzt das Bild und markiert es als Blick durch Linse, Loch oder Spalt.",["Die Matte macht den Standort des Blickenden sichtbar. Frühe Filme konnten damit Nahaufnahmen in eine Totale einsetzen und zugleich Neugier, Überwachung oder Voyeurismus erzählen.","Grandma’s Reading Glass von 1900 schneidet kreisförmige Vergrößerungen von Uhr, Vogel und Auge ein. Ferdinand Zeccas Par le trou de la serrure von 1901 ordnet mehrere Beobachtungen durch eine Schlüssellochform. A Search for Evidence von 1903 nutzt den begrenzten Blick als Motor einer ehelichen Ermittlung."],[C("Grandma's Reading Glass 1900 film","Grandma’s Reading Glass"),C("Par le trou de la serrure 1901 film","Par le trou de la serrure"),C("A Search for Evidence 1903 film","A Search for Evidence")],[Q("BFI Replay: Grandma’s Reading Glass","https://replay.bfi.org.uk/video/187/bc4007f9-c8fa-5293-846a-de032dc142af"),Q("Treccani, Enciclopedia del Cinema: Soggettiva","https://www.treccani.it/enciclopedia/soggettiva_%28Enciclopedia-del-Cinema%29/")]),
  NC("Literarische und filmische Tropen und Typenszenen","Phantom Ride","Eine Kamera fährt auf einem Zug mit; das Fahrzeug verschwindet aus dem Bild und Bewegung wird zum Ereignis.",["Die Kamera saß meist an Lokomotive oder Wagenfront. Gleise, Tunnel und Landschaft strömen direkt auf das Publikum zu und erzeugen einen körperlichen Reiseeindruck.","Alexandre Promios Départ de Jérusalem en chemin de fer von 1897 blickt vom abfahrenden Zug zurück. Haverstraw Tunnel von 1897 fährt vorwärts in die Dunkelheit. Panoramic View of Conway Castle von 1898 verbindet Bahnbewegung, Landschaft und handkolorierte Bildflächen; Hale’s Tours überführte das Prinzip später in simulierte Eisenbahnfahrten."],[C("Haverstraw Tunnel 1897 film","Haverstraw Tunnel"),C("Panoramic View Conway Castle 1898 film","Panoramic View of Conway Castle")],[Q("BFI Archive: Phantom Rides and Victorian Train Films","https://www.bfi.org.uk/inside-the-archive/features/phantom-rides-kisses-tunnels-victorian-craze-train-films"),Q("BFI Player: Panoramic View of Conway Castle","https://player.bfi.org.uk/free/film/watch-conway-castle-panoramic-view-of-conway-on-the-l-nw-railway-1898-online")]),
  NC("Literarische und filmische Tropen und Typenszenen","Telefon-Split-Screen","Getrennte Räume erscheinen gleichzeitig, weil eine Telefonleitung ihre Figuren verbindet.",["Die Teilung macht Gleichzeitigkeit sichtbar und erlaubt Blickbeziehungen, die räumlich unmöglich sind. Form und Anzahl der Segmente können die Lage der Beteiligten ordnen.","Are You There? von 1901 stellt beide Enden eines Gesprächs in ein geteiltes Bühnenbild. Suspense von Lois Weber und Phillips Smalley zeigt 1913 Ehefrau, Ehemann und Einbrecher zugleich in einem dreieckigen Dreifachbild. Pillow Talk nutzt 1959 das breite CinemaScope-Bild für parallel inszenierte Bett- und Badeszenen."],[C("Suspense 1913 split screen","Dreigeteiltes Bild in Suspense"),C("Pillow Talk 1959 split screen","Telefonbild in Pillow Talk")],[Q("BFI Replay: Are You There?","https://replay.bfi.org.uk/video/187/dded8666-1f7b-5eb5-bbc3-93a2dea0d53f"),Q("BFI: Suspense","https://www.bfi.org.uk/film/6fec2bfd-590f-5838-8295-2b3946dff65a/suspense"),Q("BFI: Great Films Shot in CinemaScope","https://www.bfi.org.uk/lists/10-great-films-shot-cinemascope")]),
  NC("Literarische und filmische Tropen und Typenszenen","Substitutionsschnitt","Die Kamera stoppt, etwas im Bild wird ausgetauscht, und die Aufnahme läuft aus derselben Position weiter.",["Beim Zusammenfügen verschwinden Unterbrechung und Austausch. Eine Person kann sich augenblicklich in einen Gegenstand verwandeln, verschwinden oder vervielfachen.","Für The Execution of Mary, Queen of Scots von 1895 ersetzte Alfred Clark den Darsteller Robert Thomae durch eine Puppe. Méliès ließ in Escamotage d’une dame chez Robert-Houdin von 1896 eine Frau verschwinden und als Skelett wiederkehren. The Conjurer von 1899 baut eine ganze Folge von Körper- und Objektwechseln aus demselben Verfahren."],[Y("XgDG_wc19aU","The Execution of Mary, Queen of Scots, 1895 · Library of Congress"),C("Escamotage d'une dame chez Robert-Houdin 1896","Méliès’ Substitutionsschnitt")],[Q("Library of Congress: The Execution of Mary, Queen of Scots","https://www.loc.gov/item/00694120/"),Q("Museum of Modern Art: Georges Méliès and Early Film Trickery","https://www.moma.org/docs/press_archives/504/releases/MOMA_1939_0035_1939-06-26_39626-29.pdf")]),

  NC("Wichtige Akkorde und Akkordfolgen","Farben-Akkord","C–Gis–H–E–A: fünf Töne, deren langsame Veränderung Harmonie und Klangfarbe verschränkt.",["Schönbergs Farben, das dritte der Fünf Orchesterstücke op. 16 von 1909, lässt den Akkord zwischen Instrumentengruppen wandern. Ab Takt 3 verschieben kanonisch einsetzende Halb- und Ganztonbewegungen nach und nach die gesamte Sonorität.","Der Akkord eröffnet auch das zweite Stück von op. 16; das vierte entfaltet seine Töne als Linie. Berg verwendet dieselbe fünftönige Klasse als eine der harmonischen Grundlagen von Wozzeck, I. Akt, 2. Szene."],[F("Farben chord.png","Farben-Akkord: C–Gis–H–E–A"),C("Arnold Schoenberg Five Pieces Orchestra manuscript","Schönbergs Fünf Orchesterstücke")],[Q("Arnold Schönberg Center: Five Pieces for Orchestra op. 16","https://schoenberg.at/en/schoenberg/kompositionen/five-orchestral-pieces-op-16"),Q("College Music Symposium: Pitch-Class-Set Extension in Atonal Music","https://symposium.music.org/volume-41/articles-1752877058/a-theory-of-pitch-class-set-extension-in-atonal-music")]),
  NC("Wichtige Akkorde und Akkordfolgen","Großmutterakkord","Eine symmetrische Zwölftonordnung enthält zwischen benachbarten Tönen jedes Intervall von einem bis elf Halbtönen genau einmal.",["Nicolas Slonimsky konstruierte die Reihe 1938 als Steigerung von Fritz Heinrich Kleins Mutterakkord. Zwei ineinander verschränkte chromatische Linien öffnen sich keilförmig; die Intervallfolge bleibt spiegelbar.","Karl-Birger Blomdahls Weltraumoper Aniara von 1959 beginnt mit auf- und abwärts arpeggierten Großmutterakkorden und ordnet ihre sechs Zweitonpaare ständig neu. Luigi Nono verwendet dieselbe Allintervall-Reihe in Canti per 13 und Il canto sospeso."],[F("Grossmutterakkord.PNG","Slonimskys Großmutterakkord")],[Q("Music Theory Online: Twelve-Tone Chords and Aniara","https://mtosmt.org/issues/mto.18.24.2/mto.18.24.2.segall.html"),Q("Open Music Theory: Row Properties","https://viva.pressbooks.pub/openmusictheory/chapter/row-properties/"),Q("Luigi Nono Foundation: Il canto sospeso","https://www.luiginono.it/opere/il-canto-sospeso/")]),
  NC("Wichtige Akkorde und Akkordfolgen","Petruschka-Akkord","C-Dur und Fis-Dur erklingen zugleich: zwei Dreiklänge im Tritonusabstand.",["Strawinsky macht die sechs Töne im zweiten Bild von Petruschka zu einer scharf konturierten Klavierfigur. Die beiden vertrauten Dreiklänge lassen sich einzeln hören, ihre Überlagerung entzieht ihnen eine eindeutige Tonika.","Eric Dolphy notierte und zerlegte den Akkord in seinen Skizzenbüchern. Yusef Lateef kombinierte ihn in seinem Repository of Scales and Melodic Patterns mit weiteren Strawinsky-Sonoritäten und verwandelte das Material in Skalen und Improvisationsübungen."],[F("Petrushka chord.PNG","C-Dur und Fis-Dur zugleich"),F("Petrushka chord Second Tableau.png","Petruschkas Klavierfigur")],[Q("Los Angeles Philharmonic: Petrushka","https://www.laphil.com/works/petrushka"),Q("Music Theory Online: Eric Dolphy’s Sketchbooks","https://www.mtosmt.org/issues/mto.25.31.2/mto.25.31.2.hannaford.html")]),
  NC("Wichtige Akkorde und Akkordfolgen","Mystischer Akkord","C–Fis–B–E–A–D: eine sechstönige Sammlung, die Skrjabin vertikal und melodisch verwendet.",["In Quarten angeordnet enthält der Akkord reine, übermäßige und verminderte Abstände. Transpositionen ersetzen in Skrjabins Spätstil große Teile der herkömmlichen Dur-Moll-Funktion; Melodie und Begleitung greifen auf dieselben sechs Töne zu.","Prométhée, Le Poème du feu op. 60 entwickelt Themen und Harmonie aus der Sammlung. Feuillet d’album op. 58 arbeitet fast ausschließlich mit zwei Lagen derselben Tonklasse. Vers la flamme op. 72 verdichtet verwandte Transpositionen zu seinem ununterbrochenen Steigerungsverlauf."],[F("Mysticchord.png","Skrjabins mystischer Akkord"),C("Scriabin Prometheus score clavier lumiere","Partitur von Prométhée")],[Q("Boston Symphony Orchestra: Scriabin’s Prometheus","https://www.bso.org/works/scriabin-prometheus-poem-of-fire"),Q("STM-Online: Scriabin’s Mature Style","https://publicera.kb.se/stm-sjm/article/download/55967/44813?inline=1"),Q("USC: Mystic Chord and Prometheus","https://scalar.usc.edu/works/at-the-crossroads-of-the-senses/dh-46-9-music-examples")]),
  NC("Wichtige Akkorde und Akkordfolgen","So-What-Voicing","Drei reine Quarten und oben eine große Terz bilden einen offenen fünfstimmigen Klaviersatz.",["Bill Evans spielt in So What von Miles Davis die Lage E–A–D–G–H über dem modalen Zentrum D. Der Akkord enthält Grundton, Quarte, Quinte, Sexte und None; seine Gestalt lässt sich für den Es-dorischen Mittelteil geschlossen transponieren.","John Coltranes Impressions übernimmt den dorischen Formplan und macht verwandte Voicings zu McCoy Tyners beweglichem Begleitsatz. Herbie Hancocks Maiden Voyage entwickelt aus Quartenlagen und Basstönen eine eigene Folge schwebender Sus-Klänge."],[F("So What chord.png","Das So-What-Voicing"),C("Miles Davis Kind of Blue session","Miles Davis und Bill Evans")],[Q("piano.org: The So What Chord","https://piano.org/theory/so-what-voicings/"),Q("University of the Arts Helsinki: McCoy Tyner, Modal Jazz, and the Dominant Chord","https://taju.uniarts.fi/bitstream/10024/6819/1/302684_Sami_Linna_McCoyTynerModalJazzandtheDominantChord_verkkoversio.pdf"),Q("Library of Congress: Kind of Blue","https://www.loc.gov/static/programs/national-recording-preservation-board/documents/KindOfBlue.pdf")]),
  NC("Wichtige Akkorde und Akkordfolgen","Mu-major-Akkord","Ein Dur-Dreiklang erhält die große Sekunde; Sekunde und Terz bleiben als enger Ganzton zusammen.",["Walter Becker und Donald Fagen beschrieben die Töne als 1–2–3–5 und nannten die Lage im Steely-Dan-Songbook µ major. Die Terz bleibt erhalten, daher besitzt der Akkord weiterhin eine klare Durfarbe; seine charakteristische Reibung hängt von der konkreten Lage ab.","Der Anfang von Any Major Dude Will Tell You zeigt eine transparente Form. Dr. Wu setzt entsprechende Lagen an den Versenden ein. Deacon Blues verwendet Umkehrungen, bei denen Bass und Oberstimmen den Akkord fast wie eine andere Jazzharmonie erscheinen lassen."],[F("Mu major chord on C.png","Mu major auf C"),C("Steely Dan 1974","Walter Becker und Donald Fagen")],[Q("Steely Dan Songbook Archive: Intro to the Song Book","https://sdarchive.com/songbook.html"),Q("The Steely Dan Reader: Walter Becker on the Mu Chord","https://steelydanreader.com/1990/10/15/metal-leg-14/")]),
  NC("Wichtige Akkorde und Akkordfolgen","Corelli-Clash","Eine vorweggenommene Tonika reibt sich an Leitton oder Sekunde, bevor beide Stimmen die Kadenz erreichen.",["Die Dissonanz entsteht aus selbständigen melodischen Formeln: Eine Stimme kommt früh auf dem Grundton an, eine andere hält ihren Leitton oder oberen Nebenton. Dadurch erscheinen an der Kadenz kurz parallele große oder kleine Sekunden.","Stefano Landis Il Sant’Alessio von 1634 enthält die Formel schon vor Corelli. In Corellis Violinsonate F-Dur op. 5 Nr. 4 trifft in Takt 12 ein vorweggenommener Ton auf den verzögerten Leitton. Bach bildet beim Halleluja von Christ lag in Todesbanden BWV 4 eine ganze Kette entsprechender 2–3-Vorhalte."],[C("Arcangelo Corelli portrait","Arcangelo Corelli"),C("Corelli Opus 5 number 4 score","Corelli: Sonate op. 5 Nr. 4"),C("Bach Christ lag in Todesbanden autograph","Bach: Christ lag in Todesbanden")],[Q("Bach Choir of Bethlehem: Cantata BWV 4","https://bach.org/education/cantata-bwv-4/"),Q("UNT Digital Library: Corelli-Clash and Parallel Seconds","https://digital.library.unt.edu/ark:/67531/metadc1038751/m1/6/")]),
  NC("Wichtige Akkorde und Akkordfolgen","Landini-Kadenz","Die Oberstimme geht 7–6–1; ihr Schritt abwärts und Terzsprung verzögern die Auflösung zur Oktave.",["Zwischen einer großen Sexte und der Schlussoktave steht für einen Moment die Quinte: 6–5–8. In dreistimmiger Musik verbindet sich diese Außenstimmenformel häufig mit einer 3–5-Bewegung der Mittelstimme.","Der Conductus-Motettensatz Ad veniam/TAMQUAM und Adam de la Halles A Dieu commant amouretes belegen die Formel bereits im 13. Jahrhundert. Landinis Ballata L’alma mia piange formt zwei Abschnittsschlüsse aus derselben melodischen Idee. Der Name bezeichnet seine besonders reiche Nutzung; frühere Beispiele sind erhalten."],[F("Landini cadence.png","Oberstimme 7–6–1, Außenstimmen 6–5–8"),C("Francesco Landini Squarcialupi Codex","Francesco Landini im Squarcialupi-Codex")],[Q("Early Music FAQ: What is a Landini cadence?","https://medieval.org/emfaq/harmony/landini.html"),Q("Early Music FAQ: Francesco Landini","https://www.medieval.org/emfaq/composers/landini.html")]),
  NC("Wichtige Akkorde und Akkordfolgen","Omnibus-Folge","Zwei chromatische Außenstimmen laufen gegeneinander und tauschen Akkordtöne über gehaltenen Mittelstimmen.",["Der Bass sinkt in Halbtönen, während eine Oberstimme steigt; die Mittelstimmen verlängern meist eine Dominantfunktion. Enharmonische Umdeutung erlaubt an fast jeder Station den Übergang in eine entfernte Tonart.","C. P. E. Bachs Rondo a-Moll Wq 56/5 führt den Keil durch eine ganze Oktave. Schuberts Klaviersonate a-Moll D 845 nutzt ihn in der Überleitung des ersten Satzes. Brahms setzt in seiner Zweiten Sinfonie, I. Satz, Takte 76–82 eine verdichtete, konvergierende Form ein."],[F("Detail from CPE Bach's Rondo in A Minor.png","C. P. E. Bachs vollständiger Omnibus"),F("Detail from Schubert D 845.png","Schuberts Omnibus-Folge in D 845")],[Q("Open Music Theory: The Omnibus Progression","https://viva.pressbooks.pub/openmusictheory/chapter/the-omnibus-progression/"),Q("Music Theory Examples: Voice Exchanges and Omnibus Progressions","https://meganlavengood.github.io/musictheoryexamples/2024/12/01/VE.html")]),
  NC("Wichtige Akkorde und Akkordfolgen","Tarnhelm-Folge","Zwei Moll-Dreiklänge im Großterzabstand teilen einen Ton; die übrigen Stimmen bewegen sich halbtonweise.",["In c-Moll führt die typische Form nach as-Moll, harmonisch i–♭vi⁶ beziehungsweise eine LP-Verbindung. Der gemeinsame Ton hält die Akkorde zusammen, während zwei chromatische Stimmen auseinanderlaufen.","Wagners Tarnhelm-Motiv in Das Rheingold gab der Folge ihren Namen und verband sie mit Verwandlung und verborgener Macht. Jerry Goldsmith verwendet sie beim Eintritt in die Wolke in Star Trek: The Motion Picture. Nobuo Uematsu baut sie in die Anfangsphrase des Main Theme of Final Fantasy VII ein und entwickelt daraus ein Motiv für Clouds gebrochene Identität."],[F("Illustration to Richard Wagner's \"Das Rheingold\".jpg","Alberich und der Tarnhelm · Arthur Rackham"),C("Final Fantasy VII 1997 cover","Final Fantasy VII")],[Q("Music Theory Online: PL Voice Leading and the Uncanny","https://mtosmt.org/issues/mto.17.23.4/mto.17.23.4.forrest.pdf"),Q("Journal of Sound and Music in Games: Kishōtenketsu as Leitmotif","https://online.ucpress.edu/jsmg/article/4/4/15/197773/Kishotenketsu-as-LeitmotifStorytelling-and-Musical"),Q("Journal of Sound and Music in Games: The Cinematic Promise of Video Game Music","https://online.ucpress.edu/jsmg/article/4/4/108/197768/The-Cinematic-Promise-of-Video-Game-MusicStylistic")])
);

(() => {
  "use strict";
  const src=(label,url)=>S(label,url);
  const card=(category,title,detail,media,sources=[],extra={})=>({category,title,detail,media,sources,...extra});
  const wiki=(page,language="de",count=1)=>({page,language,count});
  const wikiSource=(page,language="de")=>src(`Wikipedia: ${page}`,`https://${language}.wikipedia.org/wiki/${encodeURIComponent(page).replace(/%20/g,"_").replace(/%2F/g,"/")}`);
  const DAYRELL="https://raw.githubusercontent.com/GITenberg/Folk-Stories-from-Southern-Nigeria-West-Africa_34655/master/34655-8.txt";
  const COLE="https://raw.githubusercontent.com/GITenberg/Philippine-Folk-Tales_12814/master/12814-8.txt";
  const CUSHING="https://raw.githubusercontent.com/GITenberg/Zuni-Folk-Tales_54682/master/54682-0.txt";
  const GRINNELL="https://raw.githubusercontent.com/GITenberg/Blackfoot-Lodge-Tales--13-The-Story-of-a-Prairie-People_11547/master/11547-8.txt";

  window.KARTEN.push(
    {category:"Aphorismen",kind:"quote",title:"„Überzeugungen sind gefährlichere Feinde der Wahrheit als Lügen.“",byline:"Friedrich Nietzsche · Menschliches, Allzumenschliches I, 483",detail:[],media:[C("Friedrich Nietzsche portrait 1882","Friedrich Nietzsche")],sources:[src("Nietzsche Source: Menschliches, Allzumenschliches","http://www.nietzschesource.org/#eKGWB/MA-483")]},
    {category:"Aphorismen",kind:"quote",title:"« La clarté est la bonne foi des philosophes. »",byline:"Luc de Clapiers, Marquis de Vauvenargues · Réflexions et maximes, 369",detail:[],media:[C("Vauvenargues portrait engraving","Vauvenargues")],sources:[src("Wikisource: Réflexions et maximes","https://fr.wikisource.org/wiki/R%C3%A9flexions_et_maximes")]},
    {category:"Aphorismen",kind:"quote",title:"« La justice est la vérité en action. »",byline:"Joseph Joubert · Carnets",detail:[],media:[C("Joseph Joubert portrait","Joseph Joubert")],sources:[src("Wikisource: Pensées, essais et maximes","https://fr.wikisource.org/wiki/Pens%C3%A9es,_essais_et_maximes_(Joubert)/Texte_entier")]},
    {category:"Aphorismen",kind:"quote",title:"« Tout est dit, et l’on vient trop tard depuis plus de sept mille ans qu’il y a des hommes, et qui pensent. »",byline:"Jean de La Bruyère · Les Caractères, Des ouvrages de l’esprit, 1",detail:[],media:[C("Jean de La Bruyere portrait","Jean de La Bruyère")],sources:[src("Wikisource: Les Caractères","https://fr.wikisource.org/wiki/Les_Caract%C3%A8res/Des_ouvrages_de_l%E2%80%99esprit")]},
    {category:"Aphorismen",kind:"quote",title:"„Der Skandal fängt an, wenn die Polizei ihm ein Ende macht.“",byline:"Karl Kraus · Die Fackel",detail:[],media:[C("Karl Kraus portrait 1900","Karl Kraus")],sources:[src("Die Fackel · Österreichische Akademie der Wissenschaften","https://fackel.oeaw.ac.at/")]},

    card("Philosophische Begriffe","Oikeiosis",[],[C("Zeno of Citium bust","Zenon von Kition")],[wikiSource("Oikeiosis")],{wiki:wiki("Oikeiosis")}),
    card("Philosophische Begriffe","Präsentismus",[],[C("time philosophy past present future diagram","Gegenwart zwischen Vergangenheit und Zukunft")],[wikiSource("Präsentismus")],{wiki:wiki("Präsentismus")}),
    card("Philosophische Begriffe","Epistemische Ungerechtigkeit",[],[C("Miranda Fricker philosopher","Miranda Fricker")],[wikiSource("Epistemische Ungerechtigkeit")],{wiki:wiki("Epistemische Ungerechtigkeit")}),
    card("Philosophische Begriffe","Mereologie",[],[C("Stanislaw Lesniewski portrait","Stanisław Leśniewski")],[wikiSource("Mereologie")],{wiki:wiki("Mereologie")}),
    card("Philosophische Begriffe","Parrhesia",[],[C("Diogenes by Jean Leon Gerome","Diogenes als Verkörperung freier Rede")],[wikiSource("Parrhesia")],{wiki:wiki("Parrhesia")}),

    card("Künstler und drei Werke","Florine Stettheimer",[
      "Family Portrait II ordnet vier Figuren wie auf einer flachen Bühne um einen Blumenstrauß; jede Person erhält eine eigene Haltung und einen eigenen Farbraum. The Cathedrals of Wall Street verbindet Börse, Banken, Fahnen und Hochzeitsgesellschaft zu einem präzisen Gesellschaftsbild. The Cathedrals of Art zeigt Museum, Publikum und Kunstbetrieb als festliche, leicht spöttische Zeremonie.",
      "Stettheimer malte dünne Farbschichten, scharfe Konturen und bewusst unstabile Räume. Ihre Bilder halten New Yorks gesellschaftliche Rituale fest und behandeln Malerei zugleich als privates Theater."
    ],[C("Florine Stettheimer Family Portrait II","Family Portrait II"),C("Florine Stettheimer Cathedrals of Wall Street","The Cathedrals of Wall Street"),C("Florine Stettheimer Cathedrals of Art","The Cathedrals of Art")],[src("Museum of Modern Art: Florine Stettheimer","https://www.moma.org/artists/5646")],{works:["Family Portrait II, 1933","The Cathedrals of Wall Street, 1939","The Cathedrals of Art, 1942"]}),
    card("Künstler und drei Werke","Anne Vallayer-Coster",[
      "Attributes of Painting, Sculpture, and Architecture baut Pinsel, Palette, Modelle und Architekturzeichnungen zu einer dichten Diagonale. Still Life with Lobster setzt den roten Panzer gegen Silber, Glas und dunklen Grund. A Vase of Flowers verbindet botanische Genauigkeit mit locker gesetzten Lichtreflexen.",
      "Vallayer-Coster beherrschte matte, glänzende, harte und durchsichtige Oberflächen. Ihre Stillleben besitzen eine ruhige Ordnung, während Licht und Material jede Zone anders behandeln."
    ],[C("Vallayer-Coster Attributes of Painting Sculpture Architecture","Attributes of Painting, Sculpture, and Architecture"),C("Vallayer-Coster Still Life with Lobster","Still Life with Lobster"),C("Vallayer-Coster Vase of Flowers","A Vase of Flowers")],[src("Metropolitan Museum of Art: Vallayer-Coster","https://www.metmuseum.org/art/collection/search?q=Anne%20Vallayer-Coster")],{works:["Attributes of Painting, Sculpture, and Architecture, 1769","Still Life with Lobster, 1781","A Vase of Flowers, 1774"]}),
    card("Künstler und drei Werke","Marsden Hartley",[
      "Portrait of a German Officer ersetzt das Gesicht durch Schulterklappen, Zahlen, Flaggen und militärische Abzeichen. Himmel ordnet Berge, Kreuze und Wolken zu einer schweren, fast heraldischen Landschaft. Lobster Fishermen zeigt die Körper der Fischer als kompakte Formen zwischen Boot, Fels und kaltem Wasser.",
      "Hartley wechselte zwischen Berliner Zeichenbildern und Landschaften aus Maine. Wiederkehrende Formen tragen persönliche Erinnerung, Ortsgeschichte und körperliche Arbeit."
    ],[C("Marsden Hartley Portrait of a German Officer","Portrait of a German Officer"),C("Marsden Hartley Himmel painting","Himmel"),C("Marsden Hartley Lobster Fishermen","Lobster Fishermen")],[src("Metropolitan Museum of Art: Marsden Hartley","https://www.metmuseum.org/toah/hd/hart/hd_hart.htm")],{works:["Portrait of a German Officer, 1914","Himmel, 1914–1915","Lobster Fishermen, 1940–1941"]}),
    card("Künstler und drei Werke","Ivan Bilibin",[
      "Die Illustration zu Wassilissa zeigt den dunklen Wald als Wand aus Stämmen, Pilzen und Ornamenten. Baba Jaga im Mörser verbindet schnelle Bewegung mit einem flachen dekorativen Bildraum. Die Bühnenentwürfe zu Der goldene Hahn übersetzen altrussische Architektur in klare, leuchtende Farbflächen.",
      "Bilibin verband Holzschnittkonturen, Volkskunst, Buchornament und genaue Studien historischer Bauten. Rahmen und Bild gehören bei ihm zu einer einzigen Erzählfläche."
    ],[C("Ivan Bilibin Vasilisa the Beautiful illustration","Wassilissa im Wald"),C("Ivan Bilibin Baba Yaga mortar","Baba Jaga im Mörser"),C("Ivan Bilibin Golden Cockerel stage design","Der goldene Hahn")],[src("The State Russian Museum: Ivan Bilibin","https://rusmuseumvrm.ru/reference/classifier/author/bilibin_i_ya/index.php?lang=en")],{works:["Wassilissa die Wunderschöne, 1899","Baba Jaga, 1900","Der goldene Hahn, Bühnenentwürfe, 1909"]}),
    card("Künstler und drei Werke","Léon Bakst",[
      "Der Bühnenraum von Schéhérazade füllt die Fläche mit tiefem Blau, Orange, Teppichen und niedrigen Bögen. Das Kostüm für den Faun baut den Körper aus Flecken, Linien und einem kurzen Schweif neu. Das Kostüm der Feuerfee arbeitet mit gestaffelten Flammenformen, die jede Bewegung fortsetzen.",
      "Bakst behandelte Farbe, Stoff, Körper und Bühnenraum gemeinsam. Seine Entwürfe machten die Bewegung der Tänzer schon in der Zeichnung sichtbar."
    ],[C("Leon Bakst Scheherazade set design","Schéhérazade"),C("Leon Bakst Nijinsky Faun costume","Kostüm für den Faun"),C("Leon Bakst Firebird costume design","Kostüm der Feuerfee")],[src("Victoria and Albert Museum: Léon Bakst","https://www.vam.ac.uk/articles/leon-bakst-and-the-ballets-russes")],{works:["Schéhérazade, Bühnenbild, 1910","L’Après-midi d’un faune, Kostüm, 1912","The Firebird, Kostümentwurf, 1910"]}),

    card("Erste Sätze großer Romane","The sky above the port was the color of television, tuned to a dead channel.",[],[C("William Gibson author portrait","William Gibson")],[src("Project Gutenberg Canada: Neuromancer bibliographic record","https://www.isfdb.org/cgi-bin/title.cgi?1475"),wikiSource("Neuromancer","en")],{kind:"quote",wiki:wiki("Neuromancer","en")}),
    card("Erste Sätze großer Romane","I am an invisible man.",[],[C("Ralph Ellison portrait","Ralph Ellison")],[wikiSource("Invisible Man","en")],{kind:"quote",wiki:wiki("Invisible Man","en")}),
    card("Erste Sätze großer Romane","The past is a foreign country: they do things differently there.",[],[C("L P Hartley portrait","L. P. Hartley")],[wikiSource("The Go-Between","en")],{kind:"quote",wiki:wiki("The Go-Between","en")}),
    card("Erste Sätze großer Romane","A green hunting cap squeezed the top of the fleshy balloon of a head.",[],[C("John Kennedy Toole portrait","John Kennedy Toole")],[wikiSource("A Confederacy of Dunces","en")],{kind:"quote",wiki:wiki("A Confederacy of Dunces","en")}),
    card("Erste Sätze großer Romane","Under certain circumstances there are few hours in life more agreeable than the hour dedicated to the ceremony known as afternoon tea.",[],[C("Henry James portrait 1890","Henry James")],[src("Project Gutenberg: The Portrait of a Lady","https://www.gutenberg.org/ebooks/2833"),wikiSource("The Portrait of a Lady","en")],{kind:"quote",wiki:wiki("The Portrait of a Lady","en")}),

    card("Seltene Musikstile","Tumba Francesa · Kuba",[
      "Tumba Francesa entstand in den östlichen Städten Kubas aus den Musik- und Tanzpraktiken haitianischer Einwanderer. Ein Vorsänger setzt den Text, ein Chor antwortet; die Trommeln premier, bulá und segón tragen verschiedene Aufgaben.",
      "Im Video beginnt ab 0:42 der Wechsel zwischen Vorsängerin und Chor. Die Antwort bleibt rhythmisch knapp, während die Trommeln den Tanz in mehreren Schichten gliedern."
    ],[Y("wJlzsXOsg6A","Tumba Francesa · Wechselgesang und Trommelensemble")],[src("UNESCO: La Tumba Francesa","https://ich.unesco.org/en/RL/la-tumba-francesa-00052")]),
    card("Seltene Musikstile","Shashmaqom · Tadschikistan und Usbekistan",[
      "Shashmaqom verbindet sechs modale Zyklen mit instrumentalen Vorspielen, Gesang und rhythmisch gebundenen Abschnitten. Tanbur, Dutar, Sato und Rahmentrommel tragen lange melodische Linien.",
      "Ab 1:08 führt die Stimme eine verzierte Phrase über dem gehaltenen Instrumentalsatz. Die Melodie kehrt zu Gerüsttönen zurück und erweitert den Ambitus schrittweise."
    ],[Y("ZagFXO6uVXE","Shashmaqom · vokaler Abschnitt")],[src("UNESCO: Shashmaqom music","https://ich.unesco.org/en/RL/shashmaqom-music-00089")]),
    card("Seltene Musikstile","Bigwala · Busoga, Uganda",[
      "Bigwala bezeichnet ein Ensemble aus fünf oder mehr Eintontrompeten aus Kalebassen. Jede Trompete liefert einzelne Töne; erst das ineinandergreifende Spiel erzeugt die Melodie. Trommeln, Gesang und Tanz ergänzen das Ensemble.",
      "Ab 0:36 ist das Hocket deutlich hörbar: kurze Trompetentöne wandern durch die Gruppe und ergeben gemeinsam eine Linie."
    ],[Y("ymWBjb1VzBc","Bigwala · ineinandergreifende Kalebassentrompeten")],[src("UNESCO: Bigwala","https://ich.unesco.org/en/USL/bigwala-gourd-trumpet-music-and-dance-of-the-busoga-kingdom-in-uganda-00749")]),
    card("Seltene Musikstile","Gbofe · Afounkaha, Côte d’Ivoire",[
      "Gbofe ist die Musik der Tagbana mit sechs quer geblasenen Naturtrompeten. Jede Größe besitzt einen Tonbereich und eine eigene rhythmische Figur; Stimmen und Tanz beantworten das Trompetenensemble.",
      "Ab 0:47 treten die Trompeten nacheinander in das Muster ein. Der musikalische Satz entsteht aus ihren versetzten Rufen."
    ],[Y("C8-Y6HdnQlk","Gbofe · Einsatz der sechs Naturtrompeten")],[src("UNESCO: Gbofe of Afounkaha","https://ich.unesco.org/en/RL/gbofe-of-afounkaha-the-music-of-the-transverse-trumps-of-the-tagbana-community-00005")]),
    card("Seltene Musikstile","Hudhud · Ifugao, Philippinen",[
      "Die Hudhud-Gesänge erzählen in langen Episoden von Ahnen, Recht, Reisanbau und Bündnissen. Eine erfahrene Sängerin führt den Text; eine Gruppe antwortet auf einer wiederkehrenden Melodie.",
      "Ab 1:00 hört man die klare Rollenverteilung zwischen Erzählerin und Chor. Die Wiederholung trägt den umfangreichen Text und hält die Gruppe zusammen."
    ],[Y("qDImhwTKMOk","Hudhud · Erzählerin und antwortender Chor")],[src("UNESCO: Hudhud chants of the Ifugao","https://ich.unesco.org/en/RL/hudhud-chants-of-the-ifugao-00015")]),

    card("Vergessene Komponisten","Elfrida Andrée · Orgelsinfonie Nr. 2 Es-Dur, II. Andante cantabile",[
      "Der zweite Satz beginnt bei 6:20. Die Orgel führt eine weit gespannte Gesangslinie; Hörner und tiefes Blech antworten in getrennten Registern. Die Besetzung erzeugt einen kammermusikalischen Dialog, obwohl Orgel und Bläser große Klangreserven besitzen.",
      "Andrée schrieb das Werk 1892 für Orgel und Blechbläser. Die genaue Balance zwischen getragenem Orgelklang und atmenden Bläserphrasen zeigt eine eigenständige Behandlung dieser seltenen Besetzung und verdient regelmäßige Konzertaufführungen."
    ],[Y("5w_BfXxmnIc","II. Andante cantabile")],[src("Swedish Musical Heritage: Elfrida Andrée","https://www.swedishmusicalheritage.com/composers/andree-elfrida/")]),
    card("Vergessene Komponisten","Ernst Mielck · Sinfonie f-Moll op. 4, III. Andante cantabile",[
      "Der dritte Satz beginnt bei 20:03. Ein ruhiges Streicherthema wird von Holzbläserfarben übernommen und in immer dichtere Gegenstimmen geführt. Die Harmonik bleibt spätromantisch, doch die Linienführung ist knapp und klar.",
      "Mielck vollendete die Sinfonie 1897 und starb zwei Jahre später mit einundzwanzig Jahren. Das Andante zeigt bereits eine sichere Großform und eine persönliche finnische Orchesterfarbe; das Werk gehört deshalb neben die frühen Sinfonien seiner bekannteren Zeitgenossen."
    ],[Y("sXKjLkrQQzM","III. Andante cantabile")],[src("IMSLP: Symphony in F minor, Op. 4","https://imslp.org/wiki/Symphony_in_F_minor%2C_Op.4_(Mielck%2C_Ernst)")]),
    card("Vergessene Komponisten","Augusta Holmès · Andromède",[
      "Das einsätzige symphonische Gedicht beginnt mit einer dunklen, eng geführten Orchesterschicht. Fanfaren und aufsteigende Linien treiben die Befreiungsszene voran; das lyrische Thema erhält seine Wirkung aus dem Gegensatz zu den harten rhythmischen Blöcken.",
      "Holmès schrieb Textprogramme und Musik selbst und behandelte das Orchester mit kräftigen Blechfarben und langen dramatischen Bögen. Andromède zeigt ihre Fähigkeit, eine mythologische Handlung ohne Bühne verständlich zu gliedern."
    ],[Y("HzfWfYBEbrU","Andromède · vollständiges symphonisches Gedicht")],[src("Bibliothèque nationale de France: Augusta Holmès","https://data.bnf.fr/en/ark:/12148/cb13895273p")]),
    card("Vergessene Komponisten","Charlotte Sohy · Symphonie „Grande Guerre“, I. Lent – Vif",[
      "Der erste Satz beginnt bei 0:00. Eine langsame Einleitung sammelt kurze Motive in tiefen Streichern und Holzbläsern; der schnelle Hauptteil verwandelt sie in scharf akzentuierte Bewegung. Die Übergänge tragen die Spannung stärker als ein einzelnes Hauptthema.",
      "Sohy schrieb die Sinfonie während und nach dem Ersten Weltkrieg und signierte zeitweise mit dem männlich lesbaren Namen Charles Sohy. Die konzentrierte Motivarbeit und die dunkle Orchesterfarbe machen das Werk zu einer wichtigen französischen Sinfonie dieser Jahre."
    ],[Y("ZaLdxbQoqMk","I. Lent – Vif")],[src("Présence Compositrices: Charlotte Sohy","https://presencecompositrices.com/compositrice/sohy-charlotte/")]),
    card("Vergessene Komponisten","Leokadija Kaschperowa · Sinfonie h-Moll op. 4, I. Andante – Allegro risoluto",[
      "Der erste Satz trägt die Bezeichnung Andante – Allegro risoluto. Die langsame Einleitung stellt melodische Wendungen vor, die das Allegro in energische Rhythmen überführt. Holzbläser und Streicher teilen das Material; das Blech markiert formale Wendepunkte und lässt die übrigen Linien durchsichtig.",
      "Kaschperowa war als Pianistin international anerkannt; nach 1917 verschwanden ihre Werke aus dem Konzertleben. Die Sinfonie zeigt eine ausgereifte russische Spätromantik mit eigenständiger motivischer Arbeit und erweitert das Repertoire über die vertrauten Petersburger Namen hinaus."
    ],[Y("fFPLqZY4ns8","Orchesterproben und Ausschnitte aus der Sinfonie")],[src("Boosey & Hawkes: Leokadiya Kashperova","https://www.boosey.com/composer/Leokadiya+Kashperova")]),

    card("Großartige Bilder und Design","Archibald Knox · Tudric-Zinnarbeiten",[
      "Knox legte Silber- oder Kupfereinlagen in gehämmertes Zinn und führte die Linien ohne sichtbaren Anfang über Deckel, Henkel und Füße. Die Uhr Modell 0252 spannt ein türkisfarbenes Emailzifferblatt zwischen zwei breite Seitenwangen. Die Teekanne Modell 0231 übersetzt denselben Linienfluss in Griff und Ausguss.",
      "Liberty & Co. verkaufte die Tudric-Serie ab 1902. Knox verband keltische Flechtmotive mit einer klaren, industriell vervielfältigbaren Form."
    ],[C("Archibald Knox Tudric clock 0252","Tudric-Uhr Modell 0252"),C("Archibald Knox Tudric teapot 0231","Tudric-Teekanne"),C("Archibald Knox Tudric candlestick","Tudric-Leuchter")],[src("Victoria and Albert Museum: Archibald Knox","https://collections.vam.ac.uk/search/?q=Archibald%20Knox")]),
    card("Großartige Bilder und Design","Dagobert Peche · Wiener Werkstätte",[
      "Peche zerlegte Gefäße, Möbel und Muster in gezackte Blätter, Kugeln, Spitzen und schräg gesetzte Flächen. Seine Silberdose von 1920 wirkt wie ein kleines Bauwerk aus Blüten und Dornen. Der Schrank von 1913 trägt sein Ornament auf der gesamten Oberfläche; das Tapetenmuster Jagdfalke macht die Wand zur bewegten Bildfläche.",
      "Die Wiener Werkstätte gewann durch Peche eine leichtere, unruhigere Formensprache. Konstruktion und Dekor bleiben sichtbar miteinander verzahnt."
    ],[C("Dagobert Peche silver box Wiener Werkstatte","Silberdose"),C("Dagobert Peche cabinet 1913","Schrank"),C("Dagobert Peche wallpaper","Tapetenmuster")],[src("MAK Sammlung: Dagobert Peche","https://sammlung.mak.at/sammlung_online?&q=Dagobert%20Peche")]),
    card("Großartige Bilder und Design","Otto Eckmann · Fünf Schwäne",[
      "Der Wandbehang Fünf Schwäne führt Hälse, Flügel, Wasserpflanzen und Wellen in einem einzigen Rhythmus. Das Motiv bleibt lesbar, während jede Kontur zugleich Teil des Flächenmusters wird. Eckmanns Jugend-Titel und die nach ihm benannte Druckschrift übertragen dieselbe breite, pinselartige Linie in Grafik und Buchstaben.",
      "Eckmann behandelte Textil, Zeitschrift und Schrift als verwandte Aufgaben. Die Linie trägt Bild, Ornament und Lesbarkeit."
    ],[C("Otto Eckmann Five Swans tapestry","Fünf Schwäne"),C("Otto Eckmann Jugend cover","Titelblatt der Jugend"),C("Eckmann typeface specimen","Eckmann-Schrift")],[src("Bröhan-Museum: Otto Eckmann","https://www.broehan-museum.de/sammlung/kuenstler/otto-eckmann/")]),
    card("Großartige Bilder und Design","Mela Köhler · Postkarten und Modeblätter",[
      "Köhlers Figuren bestehen aus langen Silhouetten, klar abgegrenzten Stoffmustern und wenigen präzisen Gesten. Die Wiener-Werkstätte-Postkarten setzen Mode, Schrift und leeren Grund zu kleinen Bühnen zusammen. Ihre Blätter für die Mappen Mode Wien 1914/15 zeigen Kleidung als Bewegung und grafische Konstruktion.",
      "Die Drucke verbinden Modezeichnung und eigenständige Gebrauchsgrafik. Muster beschreiben zugleich Stoff, Körperhaltung und sozialen Auftritt."
    ],[C("Mela Koehler Wiener Werkstatte postcard","Wiener-Werkstätte-Postkarte"),C("Mela Köhler Mode Wien 1914","Mode Wien 1914/15"),C("Mela Koehler fashion illustration","Modezeichnung")],[src("MAK Sammlung: Mela Köhler","https://sammlung.mak.at/sammlung_online?&q=Mela%20K%C3%B6hler")]),
    card("Großartige Bilder und Design","Maria Longworth Nichols Storer · Rookwood Pottery",[
      "Storer gründete 1880 in Cincinnati die Rookwood Pottery. Unter transparenten Glasuren blieben gemalte Pflanzen, Tiere und Landschaften sichtbar und gewannen durch den Brand räumliche Tiefe. Die Iris-Glasur erzeugte einen metallischen Schimmer; Black Iris legte dunkle Konturen unter eine bewegte Oberfläche.",
      "Rookwood verband einzelne Künstlerentwürfe mit systematischer Werkstattproduktion. Marken am Gefäß dokumentieren Jahr, Form, Dekorateur und Glasur."
    ],[C("Rookwood pottery Maria Longworth Nichols Storer vase","Rookwood-Vase"),C("Rookwood Iris glaze vase","Iris-Glasur"),C("Rookwood Black Iris pottery","Black-Iris-Glasur")],[src("Cincinnati Art Museum: Rookwood Pottery","https://www.cincinnatiartmuseum.org/art/explore-the-collection/rookwood/")]),

    {category:"Märchen und Sagen in ethnografischen Quellen",title:"Aponibolinayen und die Sonne · Tinguian",detail:["Aponibolinayen wird von einer Orangenpflanze schwanger und bringt den Jungen Kanag zur Welt. Die Sonne holt Mutter und Kind in den Himmel; Kanag kehrt später zur Erde zurück und verbindet die getrennten Familien.","Mabel Cook Cole zeichnete Tinguian-Erzählungen während ethnologischer Feldarbeit auf den Philippinen auf. Die Anwendung lädt die vollständige englische Fassung aus ihrer Ausgabe von 1916."],media:[C("Tinguian people Philippines 1910","Tinguian auf Luzon"),C("Mabel Cook Cole Philippine Folk Tales","Philippine Folk Tales, 1916")],sources:[src("Project Gutenberg: Philippine Folk Tales","https://www.gutenberg.org/ebooks/12814")],original:{label:"Vollständiger Originaltext · Mabel Cook Cole, 1916",source:"https://archive.org/details/philippinefolkta00cole",remote:{url:COLE,encoding:"windows-1252",start:"\nAponibolinayen and the Sun\n",end:"\nAponibolinayen\n",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
    {category:"Märchen und Sagen in ethnografischen Quellen",title:"Wie die Sommervögel kamen · Zuni",detail:["Ein Junge folgt den verschwundenen Vögeln, gelangt in ihre unterirdische Welt und bittet sie um Rückkehr. Die Erzählung verbindet Jahreszeiten, Wanderung und rituelle Beziehungen zwischen Menschen und Vögeln.","Frank Hamilton Cushing lebte ab 1879 in Zuni und veröffentlichte die Erzählung 1901. Die Karte lädt den vollständigen englischen Text dieser Ausgabe."],media:[C("Zuni Pueblo 1900","Zuni Pueblo um 1900"),C("Frank Hamilton Cushing portrait","Frank Hamilton Cushing")],sources:[src("Project Gutenberg: Zuñi Folk Tales","https://www.gutenberg.org/ebooks/54682")],original:{label:"Vollständiger Originaltext · Frank Hamilton Cushing, 1901",source:"https://archive.org/details/zuifolktales00cushrich",remote:{url:CUSHING,start:"HOW THE SUMMER BIRDS CAME",startLast:true,end:"THE SERPENT OF THE SEA",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
    {category:"Märchen und Sagen in ethnografischen Quellen",title:"Der wunderbare Vogel · Blackfoot",detail:["Old Man verfolgt einen großen Vogel und versucht, dessen Kraft für sich zu gewinnen. Seine Ungeduld und sein falsches Urteil kehren den erhofften Vorteil gegen ihn.","George Bird Grinnell stellte die Erzählungen aus Gesprächen mit Blackfoot-Sprechern zusammen. Die Karte lädt den vollständigen Text aus Blackfoot Lodge Tales von 1892."],media:[C("Blackfoot camp 1890","Blackfoot-Lager"),C("George Bird Grinnell portrait","George Bird Grinnell")],sources:[src("Project Gutenberg: Blackfoot Lodge Tales","https://www.gutenberg.org/ebooks/11547")],original:{label:"Vollständiger Originaltext · George Bird Grinnell, 1892",source:"https://archive.org/details/blackfootlodgeta00grin",remote:{url:GRINNELL,encoding:"windows-1252",start:"THE WONDERFUL BIRD",startLast:true,end:"THE RACE",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
    {category:"Märchen und Sagen in ethnografischen Quellen",title:"Blitz und Donner · Efik",detail:["Blitz und Donner leben zunächst unter den Menschen. Donner zerstört im Zorn Häuser und Bäume; Blitz warnt ihn vergeblich. Der König weist beide aus der Stadt, später von der Erde, und erklärt so ihre Entfernung am Himmel.","Elphinstone Dayrell veröffentlichte die Efik-Erzählung 1910. Die Karte lädt den vollständigen englischen Wortlaut des Kapitels."],media:[C("Calabar Nigeria 1900 Efik","Calabar um 1900"),C("Folk Stories Southern Nigeria Dayrell cover","Dayrells Sammlung")],sources:[src("Project Gutenberg: Folk Stories from Southern Nigeria","https://www.gutenberg.org/ebooks/34655")],original:{label:"Vollständiger Originaltext · Elphinstone Dayrell, 1910",source:"https://archive.org/details/folkstoriesfroms00dayr",remote:{url:DAYRELL,encoding:"windows-1252",start:"_The Story of the Lightning and the Thunder_",end:"_Why the Bush Cow and the Elephant are bad Friends_",reflow:true,fetchLabel:"GITenberg-Transkription"}}},
    {category:"Märchen und Sagen in ethnografischen Quellen",title:"Warum der Mond zu- und abnimmt · Efik",detail:["Der Mond leiht einer alten Frau Licht und Nahrung, verlangt dafür jedoch Gehorsam. Ein Regelbruch verändert seine Gestalt; Wachstum und Schwinden werden als Folgen dieser Beziehung erzählt.","Dayrells Ausgabe nennt die Erzählung als Efik-Geschichte aus Südnigeria. Der vollständige englische Text wird aus der gemeinfreien Transkription geladen."],media:[C("Old Calabar market 1900","Old Calabar"),C("Elphinstone Dayrell portrait","Elphinstone Dayrell")],sources:[src("Project Gutenberg: Folk Stories from Southern Nigeria","https://www.gutenberg.org/ebooks/34655")],original:{label:"Vollständiger Originaltext · Elphinstone Dayrell, 1910",source:"https://archive.org/details/folkstoriesfroms00dayr",remote:{url:DAYRELL,encoding:"windows-1252",start:"_Why the Moon Waxes and Wanes_",end:"_The Story of the Leopard, the Tortoise, and the Bush Rat_",reflow:true,fetchLabel:"GITenberg-Transkription"}}},

    card("Sagengestalten, Legenden und Märchen weltweit","Mami Wata · West- und Zentralafrika",[],[C("Mami Wata chromolithograph","Mami-Wata-Druck"),C("Mami Wata shrine","Mami-Wata-Schrein")],[wikiSource("Mami Wata","en")],{wiki:wiki("Mami Wata","en",3)}),
    card("Sagengestalten, Legenden und Märchen weltweit","Nuckelavee · Orkney",[],[C("Nuckelavee illustration","Nuckelavee"),C("Orkney sea cliffs","Küste der Orkney")],[wikiSource("Nuckelavee","en")],{wiki:wiki("Nuckelavee","en",3)}),
    card("Sagengestalten, Legenden und Märchen weltweit","Ahuizotl · Mexica",[],[C("Ahuizotl Codex Florentine","Ahuizotl im Florentiner Codex"),C("Ahuizotl Codex Tudela","Ahuizotl im Codex Tudela")],[wikiSource("Ahuizotl (mythology)","en")],{wiki:wiki("Ahuizotl (mythology)","en",3)}),
    card("Sagengestalten, Legenden und Märchen weltweit","Iara · Brasilien",[],[C("Iara Brazilian mythology painting","Iara"),C("Amazon river 19th century illustration","Amazonas")],[wikiSource("Iara (mythology)","en")],{wiki:wiki("Iara (mythology)","en",3)}),
    card("Sagengestalten, Legenden und Märchen weltweit","Taniwha · Māori",[],[C("Taniwha Maori carving","Taniwha-Schnitzerei"),C("Maori waka taniwha","Waka mit Taniwha-Motiv")],[wikiSource("Taniwha","en")],{wiki:wiki("Taniwha","en",3)}),

    card("Historische Koinzidenzen","Die Fortsas-Auktion · Binche, 1840",[
      "Belgische Bibliophile erhielten einen Katalog mit 52 Büchern aus der Sammlung des verstorbenen Grafen Fortsas. Jedes Buch, so hieß es, sei das einzige bekannte Exemplar. Am Auktionstag fanden die angereisten Sammler weder Auktionssaal noch Nachlass: Graf, Sammlung und Versteigerung waren Erfindungen des Antiquars Renier Hubert Ghislain Chalon.",
      "Der Katalog war präzise genug, um Begehrlichkeit und wissenschaftliche Neugier auszulösen. Ein Exemplar des erfundenen Katalogs wurde später selbst zu einem gesuchten Sammlerstück."
    ],[C("Fortsas catalogue 1840","Katalog der Fortsas-Auktion"),C("Binche Belgium 19th century","Binche")],[src("Internet Archive: Catalogue d’une très-riche mais peu nombreuse collection de livres","https://archive.org/details/cataloguedunetr00fort")]),
    card("Historische Koinzidenzen","Der große Diamantenschwindel · Wyoming, 1872",[
      "Philip Arnold und John Slack streuten ungeschliffene Diamanten und Rubine auf ein abgelegenes Gelände und führten Investoren dorthin. Ein Gutachter von Tiffany & Co. erklärte die Steine für wertvoll. Clarence King untersuchte das Feld genauer, fand Edelsteine in unnatürlicher Verteilung und entdeckte sogar einen teilweise geschliffenen Diamanten.",
      "Die Täter nutzten echte Steine, angesehene Namen und die Geheimhaltung der Investoren. Kings geologische Prüfung beendete den Verkauf weiterer Anteile."
    ],[C("Great Diamond Hoax 1872 map","Ort des Diamantenschwindels"),C("Clarence King portrait","Clarence King")],[src("Smithsonian Magazine: The Great Diamond Hoax","https://www.smithsonianmag.com/history/the-great-diamond-hoax-of-1872-2630188/")]),
    card("Historische Koinzidenzen","Clement Vallandighams tödliche Vorführung · 1871",[
      "Der Anwalt Clement Vallandigham verteidigte Thomas McGehan gegen eine Mordanklage. Im Hotelzimmer wollte er zeigen, wie das Opfer beim Aufstehen die eigene Pistole ausgelöst hatte. Vallandigham hielt dabei versehentlich die geladene Waffe in der Hand und schoss sich in den Bauch.",
      "Seine Vorführung stützte die Verteidigungsthese. McGehan wurde freigesprochen; Vallandigham starb am folgenden Tag."
    ],[C("Clement Vallandigham portrait","Clement Vallandigham"),C("Lebanon Ohio 1870","Lebanon, Ohio")],[src("Ohio History Connection: Clement Vallandigham","https://ohiohistorycentral.org/w/Clement_L._Vallandigham")]),
    card("Historische Koinzidenzen","Die Ballonbombe von Bly · Oregon, 1945",[
      "Am 5. Mai 1945 fanden Elsie Mitchell und fünf Kinder bei einem Ausflug nahe Bly einen japanischen Fu-Go-Ballon. Die daran hängende Bombe explodierte, als die Gruppe sich näherte. Alle sechs starben; sie waren die einzigen Menschen auf dem amerikanischen Festland, die durch feindliche Kampfhandlungen des Zweiten Weltkriegs getötet wurden.",
      "Japan ließ mehr als neuntausend Ballons vom Jetstream über den Pazifik tragen. Amerikanische Stellen hielten Funde aus den Nachrichten, um Japan keine Rückmeldung über die Reichweite zu geben."
    ],[C("Mitchell Monument Bly Oregon","Mitchell Monument"),C("Japanese fire balloon Moffett Field","Japanischer Fu-Go-Ballon")],[src("U.S. Forest Service: Mitchell Monument","https://www.fs.usda.gov/recarea/fremont-winema/recarea/?recid=59797")]),
    card("Historische Koinzidenzen","Prinzessin Caraboo · Almondsbury, 1817",[
      "Eine junge Frau mit Turban erschien in Gloucestershire und sprach eine unverständliche Sprache. Ein portugiesischer Seemann behauptete, sie als Prinzessin Caraboo von der Insel Javasu erkannt zu haben. Wochenlang empfing die örtliche Gesellschaft sie als exotische Adlige. Eine frühere Vermieterin erkannte schließlich Mary Baker, die Tochter eines Schusters aus Devon.",
      "Baker hatte Sprache, Schrift, Gebete und Herkunft erfunden. Ihre Geschichte zeigt, wie bereitwillig koloniale Erwartungen eine lückenhafte Erzählung in vermeintliches Wissen verwandelten."
    ],[C("Princess Caraboo painting","Prinzessin Caraboo"),C("Almondsbury 19th century","Almondsbury")],[src("Bristol Museum: Princess Caraboo","https://www.bristolmuseums.org.uk/stories/princess-caraboo/")]),

    card("Literarische und filmische Tropen und Typenszenen","Erkennung an einer Narbe",[
      "Eine Figur kehrt unerkannt zurück; eine Narbe verbindet den gegenwärtigen Körper mit einer früher erzählten Verletzung. In der Odyssee erkennt Eurykleia Odysseus beim Waschen seiner Füße an der Jagdnarbe. In Wolframs Parzival bestätigt eine Körpermarke Herkunft. In The Man Who Shot Liberty Valance trägt der verletzte Arm zur Prüfung widersprüchlicher Erinnerungen bei.",
      "Die Szene liefert einen materiellen Beweis, der Verkleidung, Zeit und Erzählung übersteht. Ihre Stärke liegt im Übergang vom privaten Körperzeichen zur öffentlichen Identität."
    ],[C("Eurycleia recognizes Odysseus scar","Eurykleia erkennt Odysseus"),C("Odysseus scar vase painting","Odysseus und die Narbe")],[src("Perseus: Odyssey, Book 19","https://www.perseus.tufts.edu/hopper/text?doc=Hom.%20Od.%2019")]),
    card("Literarische und filmische Tropen und Typenszenen","Lauschen hinter dem Vorhang",[
      "Der verdeckte Zuhörer macht ein privates Gespräch zur gefährlichen Aufführung. In Hamlet versteckt sich Polonius hinter dem Wandteppich und wird von Hamlet erstochen. In The School for Scandal verbirgt sich Lady Teazle hinter einem Wandschirm; das Umstürzen des Schirms ordnet alle Beziehungen der Szene neu. Lubitschs Trouble in Paradise verwandelt Türen und Nebenräume in ein System gegenseitiger Beobachtung.",
      "Vorhang, Schirm und Tür teilen den Raum, lassen Stimmen jedoch passieren. Die Enthüllung geschieht als sichtbare Veränderung der Bühnentopografie."
    ],[C("Hamlet kills Polonius behind arras illustration","Hamlet und Polonius"),C("School for Scandal screen scene illustration","Die Wandschirmszene in The School for Scandal")],[src("Folger Shakespeare Library: Hamlet 3.4","https://www.folger.edu/explore/shakespeares-works/hamlet/read/3/4/")]),
    card("Literarische und filmische Tropen und Typenszenen","Verzögertes Verstehen",[
      "Die Wahrnehmung wird zuerst genau beschrieben; ihre Bedeutung erreicht Erzähler und Leser erst später. In Conrads Heart of Darkness erscheinen an Pfählen zunächst runde Verzierungen, die Marlow anschließend als abgeschlagene Köpfe erkennt. Ford Madox Ford nutzt das Verfahren in The Good Soldier für soziale und persönliche Tatsachen. In The Conversation hört Harry Caul denselben aufgezeichneten Satz mehrfach, bis Betonung und Zusammenhang seine Bedeutung umkehren.",
      "Das Verfahren trennt Sinneseindruck und Deutung. Die Verzögerung macht den Augenblick sichtbar, in dem vorhandene Informationen eine neue Ordnung erhalten."
    ],[C("Heart of Darkness 1902 cover","Heart of Darkness"),C("The Conversation 1974 film still surveillance","The Conversation")],[src("Project Gutenberg: Heart of Darkness","https://www.gutenberg.org/ebooks/219")]),
    card("Literarische und filmische Tropen und Typenszenen","Das beobachtende Porträt",[
      "Ein Bild im Raum erhält den Blick einer handelnden Figur. In The Castle of Otranto verlässt das Porträt des Ahnen seinen Rahmen und führt Manfred fort. In The Picture of Dorian Gray übernimmt das Gemälde Alter und Schuld seines Modells. In Laura bestimmt das Porträt einer vermeintlich Toten die Ermittlungen und die Begierde des Detektivs.",
      "Das Porträt speichert Identität außerhalb des Körpers. Sobald Bild und Person auseinandergehen, entsteht die Handlung aus ihrer Konkurrenz."
    ],[C("Castle of Otranto walking portrait illustration","Das Porträt in The Castle of Otranto"),C("Dorian Gray portrait illustration","Dorian Gray und sein Porträt"),C("Laura 1944 portrait Gene Tierney","Das Porträt in Laura")],[src("British Library: The Castle of Otranto","https://www.bl.uk/collection-items/the-castle-of-otranto-by-horace-walpole")]),
    card("Literarische und filmische Tropen und Typenszenen","Rettung durch Parallelmontage",[
      "Zwei räumlich getrennte Handlungen werden abwechselnd gezeigt: eine bedrohte Person und die herannahende Hilfe. Edwin S. Porters The Lonedale Operator von 1911 verbindet das verbarrikadierte Telegrafenbüro mit dem Zug der Retter. D. W. Griffith dehnt das Muster in The Birth of a Nation und Intolerance aus. The Silence of the Lambs benutzt dieselbe Grammatik für eine Täuschung: Polizei und Täter scheinen am selben Haus zu sein, bis der Schnitt zwei Orte offenlegt.",
      "Die Montage erzeugt eine gemeinsame Zeit, bevor der Raum geklärt ist. Dadurch trägt der Schnitt selbst Hoffnung, Frist oder Irrtum."
    ],[C("The Lonedale Operator 1911 still","The Lonedale Operator"),C("Intolerance 1916 rescue scene","Intolerance"),C("Silence of the Lambs house door scene","The Silence of the Lambs")],[src("Library of Congress: The Lonedale Operator","https://www.loc.gov/item/2017600664/")]),

    card("Wichtige Akkorde und Akkordfolgen","Elektra-Akkord",[
      "Strauss schichtet E-Dur und Cis-Dur zu E–Gis–H–Cis–Eis. In Elektra erscheint der Akkord als Signatur der Titelfigur: zuerst als gespannte Verbindung mit dem Agamemnon-Motiv, später in anderer Lage und Tonhöhe bei der Wiedererkennung Orests.",
      "Im Video werden Partiturstellen und Lagen direkt vorgespielt. Entscheidend ist der Abstand zwischen dem gemeinsamen E-Klangraum und dem Eis des zweiten Dreiklangs; die Reibung gehört zur Figur und kehrt motivisch wieder."
    ],[Y("EqSpq7wWvSI","Elektra-Akkord · Partiturbeispiele"),F("Elektra chord.png","Elektra-Akkord")],[src("Lyric Opera of Chicago: The Elektra Chord","https://www.lyricopera.org/learn-engage/learning-resources/elektra/")]),
    card("Wichtige Akkorde und Akkordfolgen","Psalm-Akkord",[
      "Strawinskys Psalmensinfonie beginnt mit einem weit auseinandergezogenen e-Moll-Dreiklang. Das G, die Terz, liegt in vier Oktavlagen; Grundton und Quinte stehen an den Rändern. Der Akkord wirkt deshalb zugleich elementar und fremd.",
      "Im ersten Satz trennt der kurze Akkordschlag Abschnitte, die sich auf e-phrygisches und oktatonisches Material stützen. Gehört werden soll der Beginn des ersten Satzes und jedes spätere Wiederkehren dieses isolierten Schlages."
    ],[F("Psalms chord.png","Eröffnungsakkord der Psalmensinfonie"),C("Igor Stravinsky Symphony of Psalms score","Partitur der Psalmensinfonie")],[src("IMSLP: Symphony of Psalms","https://imslp.org/wiki/Symphony_of_Psalms_(Stravinsky%2C_Igor)")]),
    card("Wichtige Akkorde und Akkordfolgen","Backdoor-Kadenz",[
      "Die Tonika wird über ♭VII7 erreicht, meist vorbereitet durch iv: in C-Dur etwa Fm7–B♭7–Cmaj7. Die Oberstimmen führen dabei A♭–A–G oder F–F–E; der Dominantseptakkord löst sich außerhalb seiner üblichen Quintbeziehung.",
      "In Lady Birds gleichnamigem Jazzstandard prägt die Bewegung Teile des Turnarounds. In Just the Two of Us erscheint die Farbe innerhalb der längeren Folge. Gehört werden soll jeweils der Eintritt der Durtonika nach dem Dominantseptakkord auf der erniedrigten siebten Stufe."
    ],[C("backdoor progression sheet music","Backdoor-Kadenz in C-Dur"),C("Tadd Dameron portrait","Tadd Dameron")],[src("Open Music Theory: Modal Schemas","https://viva.pressbooks.pub/openmusictheory/chapter/modal-schemas/")]),
    card("Wichtige Akkorde und Akkordfolgen","Hexatonischer Pol",[
      "Zwei Dreiklänge stehen im hexatonischen Polverhältnis, wenn einer Dur und der andere Moll ist und alle drei Stimmen sich um einen Halbton bewegen. C-Dur führt so nach cis-Moll: C–E–G wird Cis–E–Gis.",
      "Schuberts späte Musik nutzt solche Übergänge für plötzliche Helligkeitswechsel; Richard Strauss setzt sie in Verklärte Nacht und in Opern als stark gefärbte Verwandlung ein. Gehört werden soll der unmittelbare Akkordwechsel: Er erhält keine gemeinsame Tonhöhe und wirkt dennoch durch die drei kleinsten Stimmbewegungen geschlossen."
    ],[C("hexatonic pole C major C sharp minor","C-Dur und cis-Moll als hexatonischer Pol"),C("Richard Strauss score manuscript","Strauss-Partitur")],[src("Music Theory Online: Hexatonic Systems","https://mtosmt.org/issues/mto.99.5.4/mto.99.5.4.cohn.html")]),
    card("Wichtige Akkorde und Akkordfolgen","Ōdō shinkō · 王道進行",[
      "Die japanische Royal-Road-Folge lautet IV–V–iii–vi, in C-Dur also F–G–Em–Am. Der Leitton H steigt auf C, während der Bass von G nach E springt; die erwartete Tonika erscheint als Bestandteil der folgenden Mollstufe statt als eigener Grundakkord.",
      "Ab 0:45 führt das Video Beispiele aus japanischer Popmusik vor. Ab 4:33 wird die Stimmführung am Klavier zerlegt. Gehört werden soll besonders der Übergang V–iii: Die Dominante löst ihre Spannung in einen Mollklang mit zwei Tonikatönen."
    ],[Y("6aezSL_GvZA","Ōdō shinkō · Beispiele"),C("Odo shinko chord progression notation","IV–V–iii–vi")],[src("Hooktheory: Royal Road progression","https://www.hooktheory.com/theorytab/common-chord-progressions/royal-road")])
  );
})();

(() => {
  "use strict";
  const src=(label,url)=>S(label,url);
  const card=(category,title,detail,media,sources=[],extra={})=>({category,title,detail,media,sources,...extra});

  window.KARTEN.push(
    card("Aphorismen","Le silence éternel de ces espaces infinis m’effraie.",[],[
      C("Blaise Pascal portrait Philippe de Champaigne","Blaise Pascal")
    ],[
      src("Wikisource: Pensées de Pascal","https://fr.wikisource.org/wiki/Pens%C3%A9es_de_Pascal_(Brunschvicg)/Section_III")
    ],{kind:"quote",byline:"Blaise Pascal"}),

    card("Historische Anekdoten","Kempton Bunton und der Goya",[
      "Am 21. August 1961 verschwand Goyas Porträt des Herzogs von Wellington aus der National Gallery in London. Vier Jahre später lag das Bild unbeschädigt in der Gepäckaufbewahrung des Bahnhofs Birmingham New Street. Kurz darauf stellte sich der pensionierte Busfahrer Kempton Bunton der Polizei. Er hatte zuvor Lösegeld in Höhe des Kaufpreises verlangt, das für Fernsehgebühren bedürftiger Rentner bestimmt sein sollte.",
      "Vor Gericht wurde Bunton vom Diebstahl des Gemäldes freigesprochen, weil die Anklage ihm keine dauerhafte Aneignungsabsicht nachweisen konnte. Verurteilt wurde er wegen des nicht zurückgegebenen Rahmens. Das Urteil machte eine Lücke im damaligen Recht sichtbar; der Theft Act von 1968 erfasste danach ausdrücklich die unbefugte Entnahme öffentlich ausgestellter Gegenstände. 1969 bekannte sich Buntons Sohn John zur eigentlichen Wegnahme des Bildes."
    ],[
      C("Goya Duke of Wellington National Gallery","Goyas Herzog von Wellington"),
      C("Kempton Bunton National Gallery ransom note","Eine der Lösegeldmitteilungen")
    ],[
      src("National Gallery: Archiv zum Prozess","https://www.nationalgallery.org.uk/research/research-centre/archive/record/NGA26"),
      src("National Gallery: Geschichte des Diebstahls","https://www.nationalgallery.org.uk/stories/jim-broadbent-meets-the-duke-of-wellington")
    ],{summary:"Ein Rentner forderte für ein gestohlenes Staatsgemälde kostenlose Fernsehgebühren für Bedürftige.",searchTerm:"Kempton Bunton Goya theft trial frame Theft Act 1968"}),

    card("Philosophische Begriffe","Duhem-Quine-These",[
      "Eine einzelne wissenschaftliche Annahme wird nie für sich allein geprüft. Aus ihr folgt eine beobachtbare Vorhersage erst zusammen mit weiteren Annahmen über Messgeräte, Randbedingungen und bereits akzeptierte Theorien. Scheitert die Vorhersage, bestimmt das Ergebnis deshalb noch nicht, welcher Teil dieses Gefüges falsch ist."
    ],[
      C("Pierre Duhem portrait photograph","Pierre Duhem"),
      C("Willard Van Orman Quine portrait","Willard Van Orman Quine")
    ],[
      src("Wikipedia: Duhem-Quine-These","https://de.wikipedia.org/wiki/Duhem-Quine-These"),
      src("Stanford Encyclopedia: Underdetermination","https://plato.stanford.edu/entries/scientific-underdetermination/")
    ],{summary:"Beobachtungen prüfen ein Gefüge von Annahmen, keine einzelne Hypothese.",wiki:{page:"Duhem-Quine-These",language:"de"},searchTerm:"Duhem Quine These Unterbestimmtheit Hilfshypothesen"}),

    card("Künstler und drei Werke","Jakub Schikaneder",[
      "„Mord im Hause“ zeigt eine Tote im Hof eines Prager Mietshauses. Die Zuschauer stehen dicht am Bildrand, während die helle Leiche als einzige waagerechte Form im engen Raum liegt. „Allerseelentag“ setzt eine einzelne Frau vor die Mauer eines Friedhofs; die wenigen Kränze und Lampen reichen aus, um den Ort zu bestimmen.",
      "In „Abendstraße“ bleibt die Straße fast leer. Das Licht kommt aus einzelnen Fenstern und spiegelt sich schwach im Pflaster. Schikaneder benutzte gedämpfte Farben und große, wenig gegliederte Flächen, um die Prager Randbezirke als konkrete Wohnorte zu zeigen, ohne die Figuren zu bloßen Illustrationen von Armut zu machen."
    ],[
      F("Jakub Schikaneder - Murder in the House.JPG","Mord im Hause, 1890"),
      C("Jakub Schikaneder All Souls Day 1888","Allerseelentag, 1888"),
      C("Jakub Schikaneder Evening Street 1906","Abendstraße, 1906")
    ],[
      src("Nationalgalerie Prag: Jakub Schikaneder","https://www.ngprague.cz/en/about/collection-online?author=jakub-schikaneder"),
      src("Wikimedia Commons: Mord im Hause","https://commons.wikimedia.org/wiki/File:Jakub_Schikaneder_-_Murder_in_the_House.JPG")
    ],{summary:"Mord im Hause · Allerseelentag · Abendstraße",works:["Mord im Hause, 1890","Allerseelentag, 1888","Abendstraße, 1906"],searchTerm:"Jakub Schikaneder Murder in the House All Souls Day Evening Street"}),

    card("Erste Sätze großer Romane","In the town there were two mutes, and they were always together.",[],[
      C("Carson McCullers portrait photograph","Carson McCullers")
    ],[
      src("Wikipedia: The Heart Is a Lonely Hunter","https://en.wikipedia.org/wiki/The_Heart_Is_a_Lonely_Hunter")
    ],{kind:"quote",wiki:{page:"The_Heart_Is_a_Lonely_Hunter",language:"en"},searchTerm:"The Heart Is a Lonely Hunter first sentence two mutes Carson McCullers"}),

    card("Seltene Musikstile","Ganggangsullae · Südwestkorea",[
      "Ganggangsullae ist ein nächtlicher Rundtanz mit Wechselgesang aus dem Südwesten Südkoreas. Eine Vorsängerin gibt die Verse vor; der Kreis antwortet mit dem gleichbleibenden Refrain. Das Tempo nimmt während der Aufführung zu. Instrumente sind nicht erforderlich.",
      "Traditionell wurde der Tanz von Frauen bei Vollmond aufgeführt, besonders an Chuseok im achten Mondmonat. Zwischen den Rundtänzen erscheinen kleine Spielszenen aus dem Dorfleben. Im Video ist auf den Einsatz der Vorsängerin und den geschlossenen Refrain des Kreises zu hören."
    ],[
      Y("6D73WBzzEG4","Ganggangsullae · UNESCO")
    ],[
      src("UNESCO: Ganggangsullae","https://ich.unesco.org/en/RL/ganggangsullae-00188"),
      src("UNESCO: Video","https://ich.unesco.org/en/video/1182")
    ],{summary:"Nächtlicher Rundtanz mit Vorsängerin und gemeinsamem Refrain.",searchTerm:"Ganggangsullae southwest Korea call response Chuseok"}),

    card("Vergessene Komponisten","Valborg Aulin · Streichquartett Nr. 1 F-Dur",[
      "Valborg Aulin schrieb ihr erstes Streichquartett 1884; vier Jahre später erschien es im Druck. Im ersten Satz beantwortet ein kantiges Hauptthema die langen melodischen Bögen der Mittelstimmen. Die Übergänge entstehen häufig aus Motiven des Hauptthemas; das Stück wirkt deshalb geschlossen, obwohl die Tonarten weit auseinanderliegen.",
      "Zu hören ist besonders der erste Satz, Allegro con brio. Aulin behandelt das Quartett nicht als Violine mit Begleitung: Bratsche und Violoncello tragen eigene Linien, die den harmonischen Verlauf bestimmen. Die beiden Quartette besitzen nach dem Werkverzeichnis der Königlich Schwedischen Musikakademie starke Formen und einen anspruchsvollen Quartettsatz. Nach Aulins Umzug nach Örebro im Jahr 1903 verschwanden ihre Werke weitgehend aus den Konzertprogrammen."
    ],[
      Y("uVeo7NpnMMY","Valborg Aulin · Streichquartett Nr. 1")
    ],[
      src("Corelia Project: String Quartet No. 1","https://www.coreliaproject.org/repertoire/f21b10fe-cd8d-446b-8e2c-0724f95813b2"),
      src("Swedish Musical Heritage: Valborg Aulin","https://www.swedishmusicalheritage.com/composers/aulin-valborg/")
    ],{summary:"Im ersten Satz erhalten Bratsche und Violoncello tragende melodische Aufgaben.",searchTerm:"Valborg Aulin string quartet 1 op 17 analysis"}),

    card("Großartige Bilder und Design","Georges de Feure · Entwurf für einen Flur",[
      "Der Aquarellentwurf von etwa 1925 zeigt einen schmalen Flur mit Treppe, Tisch und Schirmständer. De Feure zeichnet das Schmiedeeisen als wiederkehrende Folge aus engen Bögen. Die Treppenbrüstung, die Tischbeine und der Ständer gehören dadurch sichtbar zu einer Einrichtung, obwohl jedes Stück eine andere Aufgabe hat.",
      "Der Fluchtpunkt liegt tief und weit rechts. Die schräge Decke drückt den Raum nach unten, während die dunkle Treppe den Blick nach hinten führt. Die Zeichnung ist kein allgemeines Stimmungsbild, sondern legt Material, Proportionen und die Stellung der Möbel so genau fest, dass sich der geplante Innenraum daraus bauen ließe."
    ],[
      C("Georges de Feure Design for a Hallway with Wrought-iron Details","Entwurf für einen Flur, um 1925")
    ],[
      src("Metropolitan Museum: Design for a Hallway","https://www.metmuseum.org/art/collection/search/342980")
    ],{summary:"Ein Flurentwurf ordnet Treppe und Möbel durch dasselbe Schmiedeeisenmuster.",searchTerm:"Georges de Feure hallway wrought iron design 342980"}),

    card("Märchen und Sagen in ethnografischen Quellen","Das verlorene Buch · Khasi",[
      "Gott gibt einem Khasi und einem Fremden je ein Buch mit den Regeln des Gottesdienstes. Auf dem Rückweg müssen beide einen angeschwollenen Fluss durchschwimmen. Der Fremde bindet sein Buch in das lange Haar; der Khasi nimmt seines zwischen die Zähne. Im Wasser zerfällt es zu Brei.",
      "Die Erzählung begründet, warum religiöses Wissen der Khasi mündlich überliefert werde, während andere Völker Bücher besäßen. K. U. Rafy veröffentlichte sie 1920 in Shillong. Die Khasi leben vor allem im heutigen indischen Bundesstaat Meghalaya; Shillong liegt im Zentrum ihres Hochlands. Die vollständige englische Fassung wird aus der gemeinfreien Ausgabe geladen."
    ],[
      C("Khasi sacred grove monoliths 1918","Khasi-Monolithen und heiliger Hain"),
      C("Khasi people Meghalaya historical photograph","Khasi im Hochland von Meghalaya")
    ],[
      src("Project Gutenberg: Folk-Tales of the Khasis","https://www.gutenberg.org/ebooks/37884"),
      src("Internet Archive: Folk-Tales of the Khasis","https://archive.org/details/folktalesofkhasi00rafy")
    ],{summary:"Eine Khasi-Erzählung über den Verlust der Schrift beim Durchqueren eines Flusses.",original:{label:"Vollständiger Originaltext · K. U. Rafy, 1920",source:"https://www.gutenberg.org/ebooks/37884",remote:{url:"https://www.gutenberg.org/cache/epub/37884/pg37884.txt",start:"THE LOST BOOK",startLast:true,end:"THE BLESSING OF THE MENDICANT",reflow:true,fetchLabel:"Project-Gutenberg-Transkription"}},searchTerm:"Khasi The Lost Book K U Rafy oral tradition Meghalaya"}),

    card("Sagengestalten, Legenden und Märchen weltweit","Glooscap · Wabanaki",[
      "Glooscap ist eine Kulturfigur in den Erzählungen mehrerer Wabanaki-Völker im heutigen Maine und in den kanadischen Atlantikprovinzen. Zu diesen Völkern gehören Mi’kmaq, Wolastoqiyik, Passamaquoddy, Penobscot und Abenaki. Sein Name und die Einzelheiten der Geschichten unterscheiden sich zwischen ihren Sprachen.",
      "In Mi’kmaq-Erzählungen formt Glooscap Landschaften, bezwingt übergroße Tiere und lehrt Menschen, wie sie in ihrer Umgebung leben. Seine Macht bleibt begrenzt: Der kleine Frosch hält alles Wasser zurück, und eine unscheinbare Erscheinung schlägt ihn im Wettstreit. Diese Episoden erklären Ortsformen und setzen körperliche Größe wiederholt von tatsächlicher Wirksamkeit ab."
    ],[
      C("Glooscap Mi'kmaq illustration","Glooscap in einer historischen Illustration"),
      C("Mi'kmaq Bay of Fundy historical","Mi’kmaq an der Bay of Fundy")
    ],[
      src("The Canadian Encyclopedia: Glooscap","https://thecanadianencyclopedia.ca/en/article/glooscap"),
      src("Wikipedia: Glooscap","https://en.wikipedia.org/wiki/Glooscap")
    ],{summary:"Eine Kulturfigur der Wabanaki-Völker im Nordosten Nordamerikas.",wiki:{page:"Glooscap",language:"en"},searchTerm:"Glooscap Wabanaki Mi'kmaq stories geography"}),

    card("Literarische und filmische Tropen und Typenszenen","Der maskierte Blick",[
      "Eine schwarze Maske mit rundem oder schlüssellochförmigem Ausschnitt zeigt, dass das Bild den Blick einer Figur wiedergibt. Die Maske liefert dabei mehr Information als das Gesehene selbst: Fernglas, Fernrohr oder Schlüsselloch bestimmen heimliches Beobachten, Entfernung und eingeschränktes Wissen.",
      "George Albert Smith schnitt in „Grandma’s Reading Glass“ von 1900 wiederholt vom Jungen zu runden Nahaufnahmen dessen, was er durch eine Lupe betrachtet. Spätere Filme gaben Fernglasbildern zwei überlappende Kreise, obwohl ein echtes Fernglas bei richtiger Einstellung meist ein einziges Gesichtsfeld erzeugt. Die Form blieb, weil sie den Wechsel der Blickinstanz augenblicklich lesbar macht."
    ],[
      C("Grandma's Reading Glass 1900 film still","Grandma’s Reading Glass, 1900"),
      C("binocular point of view shot film","Die übliche Fernglasmaske")
    ],[
      src("BFI Replay: Grandma’s Reading Glass","https://replay.bfi.org.uk/video/187/bc4007f9-c8fa-5293-846a-de032dc142af"),
      src("University of Bologna: Grandma’s Reading Glass","https://cris.unibo.it/handle/11585/962676")
    ],{summary:"Eine Bildmaske kennzeichnet den Blick durch Lupe, Fernrohr oder Schlüsselloch.",searchTerm:"masked point of view shot binocular matte early cinema history"}),

    card("Wichtige Akkorde und Akkordfolgen","Common-tone diminished seventh · CT°7",[
      "Dieser vollständig verminderte Septakkord teilt einen Ton mit dem Durakkord, den er ausschmückt. Vor C-Dur lässt sich CT°7 als C–Dis–Fis–A schreiben: C bleibt liegen, Dis steigt zu E, während Fis und A nach G gehen. Anders als ein Leittonseptakkord treibt er die Harmonie nicht zu einem neuen Grundton; die chromatischen Nachbartöne kehren zum bereits geltenden Akkord zurück.",
      "In Scott Joplins „The Sycamore“ ist der Akkord in den Takten 20 bis 27 zu hören. Schuberts Moment musical As-Dur D 780 Nr. 6 benutzt denselben Akkordtyp innerhalb der ausgedehnten Tonikaflächen. Entscheidend ist jeweils der gehaltene gemeinsame Ton: Der scharf gespannte Septakkord erscheint für einen Augenblick, ohne eine gewöhnliche Dominantkadenz auszulösen."
    ],[
      C("common tone diminished seventh chord notation","Stimmführung des CT°7"),
      C("Scott Joplin The Sycamore sheet music","The Sycamore von Scott Joplin")
    ],[
      src("Open Music Theory: Common-Tone Chords","https://human.libretexts.org/Bookshelves/Music/Music_Theory/Open_Music_Theory_2e_(Gotham_et_al.)/05%3A_Chromaticism/5.04%3A_Common-Tone_Chords_(CT7_and_CT6)"),
      src("Diverse Music Theory Examples: CT°7","https://diversemusictheoryexamples.com/common-tone-diminished-seventh-chords/")
    ],{summary:"Ein gemeinsamer Ton bleibt liegen, während drei chromatische Nachbartöne zum Ausgangsakkord zurückkehren.",searchTerm:"common-tone diminished seventh CT°7 Joplin Sycamore Schubert D780"}),

    card("Falsche Modelle mit großer Erklärungskraft","Der Planet Vulkan",[
      "Urbain Le Verrier bestimmte 1859, dass sich Merkurs sonnennächster Bahnpunkt etwas schneller verschob, als die Störungen durch die bekannten Planeten nach Newtons Theorie erwarten ließen. Weil Le Verrier mit derselben Methode Neptuns Ort vorausgesagt hatte, war ein weiterer Planet innerhalb der Merkurbahn eine ernsthafte Erklärung. Der Name Vulkan setzte sich für ihn durch.",
      "Beobachter meldeten dunkle Punkte vor der Sonne, doch keine Sichtung ließ sich zuverlässig wiederholen. Einsteins allgemeine Relativitätstheorie erklärte 1915 den fehlenden Anteil der Periheldrehung von rund 43 Bogensekunden pro Jahrhundert aus der Raumzeitkrümmung nahe der Sonne. Vulkan scheiterte nicht an einer einzelnen leeren Suche, sondern daran, dass eine neue Theorie den Messwert ohne zusätzlichen Himmelskörper genau traf."
    ],[
      C("Vulcan hypothetical planet 19th century illustration","Eine historische Darstellung des vermuteten Planeten"),
      C("Mercury perihelion precession diagram","Die Drehung von Merkurs Bahnellipse")
    ],[
      src("NASA: Merkur und die Relativitätstheorie","https://www.grc.nasa.gov/www/k-12/Numbers/Math/Mathematical_Thinking/field_equations.htm"),
      src("NASA: Periheldrehung des Merkur","https://pgda.gsfc.nasa.gov/products/66")
    ],{summary:"Ein unentdeckter Planet sollte die unerklärte Drehung von Merkurs Bahn erklären.",searchTerm:"Le Verrier planet Vulcan Mercury perihelion 43 arcseconds Einstein"}),

    card("Entzifferte Schriften","Die Bilingue von Karatepe",[
      "Am Burgberg Karatepe-Arslantaş in der heutigen türkischen Provinz Osmaniye wurde 1946 eine Inschrift des späten 8. Jahrhunderts v. Chr. entdeckt. Derselbe Herrschertext steht dort in phönizischer Alphabetschrift und in hieroglyphenluwischen Zeichen. Das lesbare Phönizisch gab Inhalt und Eigennamen vor; wiederkehrende Zeichengruppen der luwischen Fassung ließen sich daran prüfen.",
      "Franz Steinherr erkannte 1947 in der Zeichenfolge des luwischen Textes den Herrschernamen Azatiwada. Spätere Arbeit korrigierte zahlreiche ältere Lautwerte und zeigte, dass die sogenannten hethitischen Hieroglyphen eine luwische Sprache wiedergeben. Der Anfang lautet sinngemäß: „Ich bin Azatiwada, der von der Sonne Gesegnete.“ Die Entzifferung beruhte nicht auf einem einzigen Schlüssel, sondern auf der Wort-für-Wort-Kontrolle beider Fassungen."
    ],[
      C("Karatepe bilingual inscription hieroglyphic Luwian","Hieroglyphenluwischer Teil der Inschrift"),
      C("Karatepe bilingual Phoenician inscription","Phönizischer Paralleltext")
    ],[
      src("Oxford: The Hieroglyphic Text of Karatepe","https://www.ling-phil.ox.ac.uk/files/hawkins-amd_karatepe._the_hieroglyphic_text_anatolian_studies_28_1978.pdf"),
      src("Wikipedia: Bilingue von Karatepe","https://de.wikipedia.org/wiki/Bilingue_von_Karatepe")
    ],{summary:"Ein Herrschertext in Phönizisch und Hieroglyphenluwisch ordnete Zeichen und Wörter einander zu.",searchTerm:"Karatepe bilingual Azatiwada Hieroglyphic Luwian decipherment"}),

    card("Etymologien und Begriffsgeschichten","Horde",[
      "Das Wort geht auf westtürkisch ordu beziehungsweise tatarisch urda zurück. Gemeint waren zunächst Lager, Heerlager und der Hof eines Herrschers. Aus demselben Wort entstand der Name der Sprache Urdu: zabān-e urdū war die „Sprache des Lagers“, die sich im mehrsprachigen Umfeld nordindischer Herrscher und Soldaten entwickelte.",
      "Über polnisch horda und andere europäische Vermittlersprachen gelangte das Wort im 16. Jahrhundert nach West- und Mitteleuropa. Dort bezeichnete es zuerst nomadische politische Verbände wie die Goldene Horde. Die spätere Bedeutung „ungeordnete Menschenmenge“ löste das Wort von Lager und Herrschaft und übernahm zugleich die abwertende europäische Vorstellung vom Nomadischen."
    ],[
      C("Golden Horde camp medieval manuscript","Ein Heerlager der Goldenen Horde"),
      C("Mughal military camp manuscript","Ein nordindisches Heerlager")
    ],[
      src("DWDS: Horde","https://www.dwds.de/wb/Horde"),
      src("Online Etymology Dictionary: horde","https://www.etymonline.com/word/horde"),
      src("Oxford Reference: Urdu","https://www.oxfordreference.com/display/10.1093/oi/authority.20110803114840390")
    ],{summary:"Aus einem türkischen Wort für Lager und Herrscherhof wurde eine abwertende Bezeichnung für eine Menge.",searchTerm:"Horde Etymologie ordu Urdu Goldene Horde Bedeutungswandel"}),

    card("Rhetorische und poetische Verfahren","Love is not love / Which alters when it alteration finds, / Or bends with the remover to remove.",[
      "Shakespeare wiederholt in Sonett 116 denselben Wortstamm in wechselnder grammatischer Form: love steht als Substantiv und als Teil der Aussage „is not love“, alters als Verb neben alteration als Substantiv, remover neben remove. Dieses Verfahren heißt Polyptoton. Die Wiederkehr prüft hier die behauptete Beständigkeit der Liebe an Wörtern, die ihre eigene Form verändern.",
      "Quintilian behandelt die Wiederholung eines Wortes in verschiedenen Kasus unter den Figuren, die aus einer kleinen Veränderung der Form entstehen. Seine Beispiele zeigen, dass die Flexion eine Beziehung hörbar macht, ohne dass der Wortstamm ausgetauscht wird. Im Sonett widerspricht die Form dem Inhalt nur scheinbar: Die Wörter verändern sich, der wiedererkennbare Stamm bleibt bestehen."
    ],[
      C("Shakespeare Sonnet 116 first quarto","Sonett 116 im Quarto von 1609"),
      C("Quintilian manuscript Institutio Oratoria","Handschrift der Institutio oratoria")
    ],[
      src("Wikisource: Sonnet 116","https://en.wikisource.org/wiki/Shakespeare%27s_Sonnets_(1609)/Sonnet_116"),
      src("Perseus: Quintilian, Institutio oratoria IX","https://www.perseus.tufts.edu/hopper/text?doc=Quint.%209.3")
    ],{summary:"Polyptoton · Shakespeare, Sonett 116",searchTerm:"polyptoton Shakespeare alters alteration remover remove Quintilian"}),

    card("Urban Legends","Mel’s Hole",[
      "Am 21. Februar 1997 las Radiomoderator Art Bell in „Coast to Coast AM“ das Fax eines Mannes vor, der sich Mel Waters nannte. Auf seinem Grundstück westlich von Ellensburg im US-Bundesstaat Washington liege ein Loch, das Abfälle aufnehme, ohne sich zu füllen. Waters behauptete später, 80.000 Fuß Angelschnur hinabgelassen zu haben, ohne den Boden zu erreichen.",
      "Weitere Sendungen ergänzten tote Tiere, staatliche Sperrgebiete und ein zweites Loch in Nevada. Jede neue Behauptung entstand im selben Medium: in langen nächtlichen Anrufen ohne überprüfbaren Ort. Recherchen fanden weder das Grundstück noch einen dort gemeldeten Mel Waters. Die Legende zeigt, wie das Call-in-Radio der 1990er Jahre eine Geschichte seriell fortschreiben ließ, noch bevor Foren und Podcasts diese Form übernahmen."
    ],[
      C("Ellensburg Washington landscape","Die Landschaft bei Ellensburg"),
      C("Art Bell radio studio Coast to Coast AM","Art Bell im Radiostudio")
    ],[
      src("Coast to Coast AM: Sendung vom 21. Februar 1997","https://www.coasttocoastam.com/alternate/amp/show/ufo-disclosure-mels-hole/"),
      src("Wikipedia: Mel’s Hole","https://en.wikipedia.org/wiki/Mel%27s_Hole")
    ],{summary:"Eine angeblich bodenlose Grube wuchs in nächtlichen Radiosendungen zu einer fortlaufenden Legende.",searchTerm:"Mel's Hole 1997 Ellensburg Art Bell investigation"}),

    card("Interessante Sprachen und Sprachmerkmale","Warlpiri: das Hilfswort an zweiter Stelle",[
      "Warlpiri wird vor allem in Yuendumu, Lajamanu und weiteren Gemeinden im Northern Territory Australiens gesprochen. Yuendumu liegt etwa 290 Kilometer nordwestlich von Alice Springs. Die Sprache gehört zur ngumpin-yapa-Gruppe der pama-nyunganischen Sprachfamilie.",
      "<strong>kapi-rna-ngku</strong> <em>nyanyi</em><br>FUT-1SG.SUBJ-2SG.OBJ sehen.NICHTVERG<br>„Ich werde dich sehen.“<br><br><em>nyangu</em><strong>-rna-ngku</strong><br>sehen.VERG-1SG.SUBJ-2SG.OBJ<br>„Ich sah dich.“<br><br>Im ersten Beispiel steht <strong>kapi</strong> für die Zukunft; die angehängten Formen nennen Subjekt und Objekt. Der gesamte Komplex besetzt gewöhnlich die zweite Position des Satzes. Fehlt das Hilfswort im Präteritum, heften sich dieselben Personenmarker an das erste geeignete Wort."
    ],[
      C("Yuendumu Northern Territory aerial","Yuendumu im Northern Territory"),
      C("Warlpiri country map Australia","Siedlungsgebiet der Warlpiri")
    ],[
      src("AIATSIS: Warlpiri","https://collection.aiatsis.gov.au/austlang/language/c15"),
      src("Warlpiri Grammar: Second-position clitics","https://www.ling.upenn.edu/~jlegate/nllt26.pdf"),
      src("Wikipedia: Warlpiri language","https://en.wikipedia.org/wiki/Warlpiri_language")
    ],{summary:"Tempus sowie Personen von Subjekt und Objekt stehen gewöhnlich im zweiten Satzglied.",searchTerm:"Warlpiri auxiliary second position kapirnangku nyanyi Yuendumu"}),

    card("Interessante Listen","Henslowes Bühnenrequisiten · 1598",[
      "Im Inventar der Admiral’s Men stehen unter anderem: eine Höllenöffnung, ein Felsstück, ein Käfig, ein Grab, eine goldene Weltkugel, ein Eberkopf, ein hölzernes Bein, ein goldenes Vlies, ein Lorbeerbaum und der Kessel aus „The Jew of Malta“. Hinzu kommen Kronen, Schilde und mehrere Waffen.",
      "Der Theaterunternehmer Philip Henslowe schrieb das Inventar 1598 in sein Geschäftsbuch. Die Liste nennt keine abstrakten Bühnenbilder, sondern Dinge, die gelagert und in verschiedenen Stücken erneut benutzt wurden. Aus ihr wird sichtbar, wie das elisabethanische Theater Orte mit wenigen beweglichen Gegenständen erzeugte: Eine Höllenöffnung oder ein einzelner Baum genügte als räumliche Festlegung."
    ],[
      C("Philip Henslowe diary manuscript inventory 1598","Henslowes handschriftliches Geschäftsbuch"),
      C("Elizabethan theatre stage drawing Swan 1596","Skizze des Swan Theatre, 1596")
    ],[
      src("Folger Lost Plays Database: Inventories","https://lostplays.folger.edu/Category:Inventories"),
      src("Map of Early Modern London: Henslowe’s Diary","https://mapoflondon.uvic.ca/HENS2.htm")
    ],{summary:"Ein Inventar zeigt, mit welchen wiederverwendbaren Dingen ein Londoner Theater seine Spielorte baute.",searchTerm:"Henslowe diary 1598 inventory stage properties hell mouth golden fleece"}),

    card("Gute einfache Cartoons","Substance and Shadow · John Leech",[
      "Vor der Westminster Hall betrachten zerlumpte Kinder die Entwürfe für neue Parlamentsfresken. Der Begleittext schlägt spöttisch vor, die Regierung solle lieber Kunst fördern als Arme ernähren. Leech richtet die Blickachse der Kinder auf Bilder einer idealisierten nationalen Vergangenheit, während ihre eigene Gegenwart außerhalb der Ausstellung bleibt.",
      "Die Zeichnung erschien am 15. Juli 1843 in Punch unter der Überschrift „Cartoon No. 1“. Bis dahin bezeichnete cartoon vor allem einen großformatigen Vorentwurf für ein Fresko. Punch übertrug das Wort auf die satirische Zeichnung; aus diesem Gebrauch entstand die heutige Bedeutung."
    ],[
      F("SubstanceandShadow.jpg","Substance and Shadow, Punch, 15. Juli 1843")
    ],[
      src("Victorian Web: Substance and Shadow","https://victorianweb.org/art/illustration/leech/98.html"),
      src("Wikimedia Commons: John Leech","https://commons.wikimedia.org/wiki/John_Leech")
    ],{summary:"Arme Kinder sehen die staatlich bestellten Freskenentwürfe für das Parlament.",searchTerm:"John Leech Substance and Shadow Cartoon No 1 Punch 1843"}),

    card("Grenzfälle","Xenophyophoren · eine Zelle von zwanzig Zentimetern",[
      "Xenophyophoren leben auf dem Boden der Tiefsee und gehören zu den Foraminiferen. Einzelne Arten bauen aus Sedimentkörnern verzweigte Gehäuse von mehr als zwanzig Zentimetern Durchmesser. Im Inneren liegt eine einzige, vielfach verzweigte Zelle mit zahlreichen Zellkernen.",
      "Ihre Größe legt zunächst ein vielzelliges Tier oder einen Schwamm nahe. Der Grenzfall zeigt, dass „einzellig“ keine Aussage über sichtbare Größe oder einfache Gestalt ist. Die Zelle verteilt ihr Plasma durch ein Röhrensystem im Gehäuse; zugleich schafft dieses Gehäuse festen Lebensraum für andere Tiefseetiere."
    ],[
      C("xenophyophore NOAA deep sea","Eine Xenophyophore auf dem Tiefseeboden"),
      C("Syringammina fragilissima xenophyophore","Das verzweigte Gehäuse einer Xenophyophore")
    ],[
      src("NOAA Ocean Exploration: Xenophyophores","https://oceanexplorer.noaa.gov/edu/development/newsletters/newsletter_archive/education_newsletter_020117.pdf"),
      src("NOAA: East Samoa Basin","https://oceanexplorer.noaa.gov/dive-04-ex2606/")
    ],{summary:"Ein sichtbares Tiefseengebilde von bis zu zwanzig Zentimetern besteht aus einer einzigen Zelle.",searchTerm:"xenophyophore giant single cell multinucleate test deep sea"}),

    card("UnsichtbareKonventionen","Warum Filmnummern mit 555 beginnen",[
      "In nordamerikanischen Filmen beginnen Telefonnummern häufig mit 555. Reserviert ist jedoch nicht jede solche Nummer, sondern nur der Block 555-0100 bis 555-0199. Diese hundert Anschlüsse sind absichtlich nicht geschaltet und dürfen in Unterhaltung und Werbung erscheinen.",
      "Die Regel verhindert, dass Zuschauer eine sichtbare Nummer anrufen und bei einer unbeteiligten Person landen. Wird irgendeine andere 555-Nummer benutzt, ist der Schutz bereits unsicher; 555-1212 dient beispielsweise der Telefonauskunft. Die Konvention fällt erst auf, wenn eine Produktion eine gewöhnliche Nummer zeigt und deren Besitzer danach Anrufe erhalten."
    ],[
      C("rotary dial telephone North America","Nordamerikanisches Wähltelefon"),
      C("telephone dial movie prop","Telefon als Filmrequisite")
    ],[
      src("NANPA: 555 Line Numbers","https://nanpa.com/numbering/555-line-numbers"),
      src("ATIS: 555 NXX Line Number Reference","https://www.nanpa.com/sites/default/files/2024-07/ATIS-0300115.pdf")
    ],{summary:"Nur hundert nordamerikanische Telefonnummern sind ausdrücklich für fiktive Verwendungen reserviert.",searchTerm:"NANPA fictional telephone numbers 555-0100 0199 film convention"}),

    card("VerloreneTechniken","Negativschnitt nach Randnummern",[
      "Beim analogen Filmschnitt wurde zunächst eine Arbeitskopie zerschnitten. Nach dem endgültigen Schnitt erhielt der Negativcutter eine Schnittliste mit den Randnummern jedes verwendeten Bildabschnitts. Unter der Lupe suchte er dieselben Nummern im Kameranegativ, schnitt die verlangten Einzelbilder heraus und klebte sie in der festgelegten Reihenfolge zusammen.",
      "Ein falscher Schnitt beschädigte das Original. Dunkle Einstellungen und sehr kurze Stücke verlangten deshalb genaue Kenntnis der Abstände zwischen Nummer, Perforation und Bildlinie. KEYKODE ergänzte später maschinenlesbare Strichcodes. Mit dem digitalen Zwischenpositiv verschwand der manuelle Negativschnitt aus der üblichen Postproduktion; erhalten blieb die Aufgabe des Conformings, nun als Abgleich von Dateien und Schnittliste."
    ],[
      C("motion picture film edge numbers keykode","Randnummern eines Kameranegativs"),
      C("film negative cutter editing bench","Arbeitsplatz für den Negativschnitt")
    ],[
      src("Kodak: Glossary of Motion Picture Terms","https://www.kodak.com/en/motion/page/glossary-of-motion-picture-terms/"),
      src("Kodak: Essential Reference Guide for Filmmakers","https://www.kodak.com/content/products-brochures/Film/kodak-essential-reference-guide-for-filmmakers.pdf")
    ],{summary:"Ein Negativcutter übertrug den Schnitt der Arbeitskopie Bild für Bild auf das Kameranegativ.",searchTerm:"negative cutting edge numbers KEYKODE conform workprint craft"}),

    card("InternetArchäologie","World Wide Web Virtual Library",[
      "Die World Wide Web Virtual Library ist ein nach Fachgebieten geordnetes Verzeichnis von Webseiten. Tim Berners-Lee begann die Linkliste 1991 am CERN. Später übernahmen freiwillige Fachredaktionen einzelne Bereiche. Die Seite ist damit älter als große Suchmaschinen und folgt einer anderen Ordnung: Ein Mensch entscheidet, welche Links unter Geschichte, Ozeanographie oder Stadtplanung erscheinen.",
      "Unter vlib.org öffnet sich weiterhin eine schlichte Liste der Fachgebiete. Die Unterseiten liegen auf den Servern der jeweiligen Redaktionen; einige werden gepflegt, andere bewahren Linkbestände aus früheren Jahrzehnten, und manche Ziele sind ausgefallen. Benutzbar ist das Verzeichnis ohne Anmeldung oder besondere Software."
    ],[
      C("World Wide Web NeXT computer CERN 1991","Der erste Webserver am CERN"),
      C("Tim Berners-Lee 1994 photograph","Tim Berners-Lee")
    ],[
      src("World Wide Web Virtual Library","https://vlib.org/"),
      src("Virtual Library: Geschichte","https://vlib.org/admin/history")
    ],{summary:"Ein handgepflegtes Fachverzeichnis aus dem Jahr 1991 ist weiterhin online.",searchTerm:"World Wide Web Virtual Library 1991 Tim Berners-Lee history"}),

    card("SchlechtesWritingSeziert","The Rise of Skywalker · der Sith-Dolch",[
      "Auf Kef Bir hält Rey den Rand eines Dolches gegen das Wrack des zweiten Todessterns. Seine ausgeklappte Spitze zeigt aus genau dieser Blickposition auf den Raum mit dem Wegfinder. Die Szene macht einen Gegenstand zum Lageplan, ohne vorher festzulegen, wann und für wen er angefertigt wurde. Küstenerosion, die Lage des Wracks und der einzige brauchbare Standort müssen über Jahre unverändert bleiben. Dadurch wirkt die Lösung vom Drehbuch für diesen Augenblick hergestellt.",
      "Drei tragfähigere Lösungen:<br><br><strong>1.</strong> Der Dolch trägt Koordinaten und ein Peilsignal; C-3PO übersetzt beides, das Wrack ist nur das Ziel.<br><strong>2.</strong> Ein jüngerer Anhänger Palpatines fertigte die Klinge nach dem Absturz an. Eine kurze Datierung macht ihre Silhouette plausibel.<br><strong>3.</strong> Rey erkennt wiederkehrende Bauteile in einer technischen Skizze. Ihr Wissen aus dem Ausschlachten von Wracks löst die Aufgabe, während der Dolch nur den Zugangscode liefert."
    ],[
      Y("8Qn_spdM5Zg","Star Wars: The Rise of Skywalker · offizieller Trailer")
    ],[
      src("Lucasfilm: The Rise of Skywalker","https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker"),
      src("GameSpot: Filmkritik","https://www.gamespot.com/reviews/star-wars-episode-9-the-rise-of-skywalker-review-a/1900-6417383/")
    ],{summary:"Ein Dolch passt nur von einem einzigen Standort genau zur Silhouette eines Wracks.",searchTerm:"Rise of Skywalker Sith dagger wreckage scene writing criticism"}),

    card("DasIstHierGanzInDerNähe","Deutsches Drachenmuseum · Lindenfels",[
      "Das Museum befindet sich im Haus Baureneck, In der Stadt 2, 64678 Lindenfels, rund 35 Kilometer nordöstlich von Mannheim. Die Ausstellung verfolgt Drachenbilder aus Vorderasien, Ostasien und Europa. Zu sehen sind unter anderem Abdrücke assyrischer Rollsiegel, chinesische Dachreiter und Darstellungen des heiligen Georg.",
      "Im benachbarten Bürgerturm hängen großformatige Drachenbilder; seine Plattform bietet einen Blick über den Odenwald. Museum: samstags, sonntags und an gesetzlichen Feiertagen 14 bis 17 Uhr. Der Drachengarten und der Bürgerturm sind täglich zugänglich. Vor der Fahrt sollten die aktuellen Zeiten auf der Museumsseite geprüft werden."
    ],[
      C("Deutsches Drachenmuseum Lindenfels","Das Drachenmuseum im Haus Baureneck"),
      C("Bürgerturm Lindenfels","Der benachbarte Bürgerturm")
    ],[
      src("Deutsches Drachenmuseum","https://www.deutsches-drachenmuseum.de/?Itemid=20&id=32&option=com_content&view=article"),
      src("Museen in Hessen: Drachenmuseum","https://museen-in-hessen.de/de/museen/deutsches_drachenmuseum")
    ],{summary:"In der Stadt 2, 64678 Lindenfels · etwa 35 km von Mannheim.",searchTerm:"Deutsches Drachenmuseum Lindenfels In der Stadt 2 Öffnungszeiten"}),

    card("VisuelleIdeenDieIchKlauenWill","Alexeieff und Parker · der Nadelschirm",[
      "Ein Nadelschirm besteht aus einer weißen Platte mit vielen dicht gesetzten Stiften. Werden die Stifte verschieden weit herausgedrückt und von der Seite beleuchtet, werfen sie unterschiedlich lange Schatten. Die Kamera sieht keine Linienzeichnung, sondern ein Feld aus Lichtwerten, das wie eine Aquatinta oder Mezzotinto wirkt.",
      "Alexandre Alexeieff und Claire Parker bauten für „Eine Nacht auf dem kahlen Berge“ von 1933 einen Schirm mit Hunderttausenden Stiften. Für jedes Einzelbild veränderten sie deren Höhen mit Rollen und kleinen Werkzeugen. Die brauchbare Bildidee liegt im indirekten Verfahren: Das Werkzeug setzt keine sichtbare Spur. Es formt eine Oberfläche, und erst das seitliche Licht zeichnet das Bild."
    ],[
      C("Alexandre Alexeieff Claire Parker pinscreen","Alexeieff und Parker am Nadelschirm"),
      C("Night on Bald Mountain Alexeieff 1933 still","Eine Nacht auf dem kahlen Berge, 1933")
    ],[
      src("National Film Board of Canada: Pinscreen","https://collection.nfb.ca/film/pinscreen"),
      src("Centre Pompidou: Une nuit sur le mont chauve","https://www.centrepompidou.fr/en/ressources/oeuvre/cezK8g")
    ],{summary:"Seitliches Licht zeichnet die Höhenunterschiede Tausender beweglicher Stifte.",searchTerm:"Alexeieff Parker pinscreen 240000 pins Night on Bald Mountain"}),

    card("Eigene GIFs","Fünf gekoppelte Pendel",[],[
      {type:"image",src:"assets/gifs/gekoppelte-pendel.gif",href:"assets/gifs/gekoppelte-pendel.gif",caption:"Eigene Animation · fünf gekoppelte Pendel",credit:"eigene Animation"}
    ],[],{kind:"gif"}),

    card("Trends in Art","Benjamin Blanc · Dust Collectors",[
      "„Dust Collectors“ entstand 2026 als Ölgemälde auf einer zwei Meter hohen Leinwand. Mehrere Körper liegen in einem Zimmer unterhalb eines hoch sitzenden Fensters. Ihre Gliedmaßen bilden keinen übersichtlichen Figurenverband; Ellbogen, Knie und Rücken stoßen aneinander und an die Grenzen des Raums. Über der Gruppe liegt ein Büschel Straußenfedern.",
      "Blanc, Jahrgang 2000, schloss 2026 den MA Painting am Royal College of Art ab. Er arbeitet nach eigenen Angaben aus erinnerten Körperempfindungen statt nach einer zusammenhängenden Szene. In diesem Bild wird das an den verkürzten, geknickten Haltungen sichtbar: Die Figuren erscheinen weder als Porträtgruppe noch als erzählte Handlung. Das enge Zimmer gibt jeder Bewegung sofort ein Hindernis."
    ],[
      I("https://artplugged.co.uk/wp-content/uploads/2026/08/Dust-Collectors-dad5183595764674-1024x768.jpeg","https://artplugged.co.uk/benjamin-blancs-paintings-nothing-quite-settles/","Dust Collectors, 2026","© Benjamin Blanc, courtesy the artist")
    ],[
      src("Royal College of Art: Painting MA 2026","https://2026.rca.ac.uk/school/painting-ma/"),
      src("Art Plugged: Benjamin Blanc","https://artplugged.co.uk/benjamin-blancs-paintings-nothing-quite-settles/")
    ],{summary:"Benjamin Blanc, 2026 · Öl auf Leinwand · 200 × 180 cm.",searchTerm:"Benjamin Blanc Dust Collectors 2026 painting"}),

    card("Writing Tipps","Szene und Panorama bewusst wechseln",[
      "Prüfe bei jedem längeren Abschnitt, ob er eine Szene oder einen Überblick braucht. Eine Szene verfolgt Handlungen in annähernd erlebter Zeit und hält die Wahrnehmung an einen Ort. Ein Panorama fasst Monate, Reisen oder wiederholte Vorgänge zusammen. Der Wechsel ist sinnvoll, wenn sich der Maßstab der erzählten Zeit tatsächlich ändert.",
      "Markiere im Entwurf jede Stelle, an der ein Überblick plötzlich einen einzelnen Blick, Satz oder Griff ausführlich wiedergibt. Dort beginnt bereits eine Szene. Umgekehrt verrät eine Szene ihren fehlenden Schwerpunkt, wenn mehrere Tage in erklärenden Nebensätzen abgehandelt werden. Entscheide an solchen Nähten, welcher Zeitraum das Gewicht des Abschnitts tragen soll."
    ],[
      C("Percy Lubbock portrait","Percy Lubbock"),
      C("Vanity Fair manuscript Thackeray","Thackerays Manuskript zu Vanity Fair")
    ],[
      src("Project Gutenberg: The Craft of Fiction","https://www.gutenberg.org/ebooks/18961")
    ],{summary:"Der Wechsel zwischen Szene und Überblick folgt dem Maßstab der erzählten Zeit.",writingSource:{label:"Wortlaut · Percy Lubbock, The Craft of Fiction, Kapitel VII",source:"https://archive.org/details/craftoffiction00lubb",remote:{url:"https://www.gutenberg.org/cache/epub/18961/pg18961.txt",start:"I start from that distinction between the \"panoramic\" and the \"scenic\" presentation of a story",end:"Becky's valiant struggle in the world of her ambition",flexibleMarkers:true,reflow:true,fetchLabel:"Project-Gutenberg-Transkription"}},searchTerm:"Percy Lubbock scenic panoramic presentation craft of fiction"}),

    card("Englisch Vokabular","shirty",[],[
      C("irritated man office conversation","Ein gereiztes Gespräch")
    ],[
      src("Cambridge Dictionary: shirty","https://dictionary.cambridge.org/dictionary/english/shirty"),
      src("Collins Dictionary: shirty","https://www.collinsdictionary.com/dictionary/english/shirty")
    ],{summary:"gereizt und unnötig schroff",searchTerm:"shirty British English meaning pronunciation examples",vocabulary:{pronunciation:"/ˈʃɜː.ti/",register:"britisch, informell",meaning:"Shirty beschreibt jemanden, der auf eine harmlose Frage gereizt oder schroff reagiert. Das Wort bezeichnet meist einen kurzen Anflug von Ärger, nicht dauerhafte Feindseligkeit.",examples:[
      {english:"There’s no need to get shirty; I only asked for the receipt.",german:"Du musst nicht gleich so gereizt werden; ich habe nur nach dem Beleg gefragt."},
      {english:"He was shirty with the waiter after waiting ten minutes.",german:"Nach zehn Minuten Wartezeit fuhr er den Kellner unnötig schroff an."},
      {english:"Her email sounded shirty, though the problem was easy to fix.",german:"Ihre E-Mail klang gereizt, obwohl sich das Problem leicht beheben ließ."}
    ]}}),

    card("Geo Atlas","Cabinda",[
      "Cabinda ist eine angolanische Provinz an der Atlantikküste, die durch einen schmalen Küstenstreifen der Demokratischen Republik Kongo vom übrigen Angola getrennt ist. Im Norden grenzt sie an die Republik Kongo. Die Provinzhauptstadt Cabinda liegt etwa 380 Kilometer nördlich von Luanda und knapp 60 Kilometer von Pointe-Noire entfernt.",
      "Die heutige Grenze geht auf den Vertrag von Simulambuco von 1885 zurück, mit dem Portugal über das Gebiet ein Protektorat errichtete. Seit Angolas Unabhängigkeit 1975 bestreiten separatistische Gruppen die Zugehörigkeit der Provinz. Vor der Küste liegen große Erdölfelder; ihre Einnahmen geben dem kleinen Gebiet ein außerordentliches Gewicht für den angolanischen Staat. Der Hafen von Pointe-Noire und die Kongomündung bestimmen zugleich seine regionale Lage."
    ],[
      C("Cabinda map Angola exclave","Cabinda zwischen den beiden Kongostaaten"),
      C("Cabinda Angola coast","Die Küste bei Cabinda")
    ],[
      src("Encyclopaedia Britannica: Cabinda","https://www.britannica.com/place/Cabinda-province-Angola"),
      src("Wikipedia: Cabinda Province","https://en.wikipedia.org/wiki/Cabinda_Province")
    ],{summary:"Die angolanische Exklave liegt zwischen der Republik Kongo und der Demokratischen Republik Kongo.",wiki:{page:"Cabinda_Province",language:"en"},searchTerm:"Cabinda Angola exclave Simulambuco oil map history"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben","Steter Tropfen höhlt den Stein.",[
      "Lautwert: /ˈʃteːtɐ ˈtʁɔpfn̩ høːlt deːn ʃtaɪn/. Шт gibt das anlautende st wieder. Ё nähert den gerundeten ö-Laut an; й markiert den zweiten Teil des Diphthongs ei. Das deutsche d in den steht als д."
    ],[
      C("water drop eroded stone close up","Vom Wasser ausgehöhlter Stein")
    ],[
      src("Wikiquote: Deutsche Sprichwörter","https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
      src("Wikipedia: Kyrillisches Alphabet","https://de.wikipedia.org/wiki/Kyrillisches_Alphabet")
    ],{summary:"Штетер Тропфен хёльт ден Штайн.",searchTerm:"Steter Tropfen höhlt den Stein Herkunft Lautschrift"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben","Der Ton macht die Musik.",[
      "Lautwert: /deːɐ̯ toːn maxt diː muˈziːk/. Δ steht hier entsprechend der verlangten lautnahen Zuordnung für das deutsche d; im heutigen Griechisch hat der Buchstabe gewöhnlich den Lautwert /ð/. Χ gibt den ach-Laut in macht wieder."
    ],[
      C("conductor rehearsal orchestra gesture","Tonfall und musikalische Geste")
    ],[
      src("Wikiquote: Deutsche Sprichwörter","https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
      src("Wikipedia: Griechisches Alphabet","https://de.wikipedia.org/wiki/Griechisches_Alphabet")
    ],{summary:"Δερ Τον μαχτ δι Μουζίκ.",searchTerm:"Der Ton macht die Musik Herkunft Lautschrift"})
  );
})();

(() => {
  "use strict";
  const card = (category, title, detail, media, sources = [], extra = {}) => ({category, title, detail, media, sources, ...extra});
  const source = (label, url) => S(label, url);
  const proverbSources = (term, alphabet) => [
    source("Wikiquote: Deutsche Sprichwörter", "https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
    source(`Wikipedia: ${alphabet}`, alphabet === "Kyrillisches Alphabet" ? "https://de.wikipedia.org/wiki/Kyrillisches_Alphabet" : "https://de.wikipedia.org/wiki/Griechisches_Alphabet"),
    source(`Duden-Suche: ${term}`, `https://www.duden.de/suchen/dudenonline/${encodeURIComponent(term)}`)
  ];

  window.KARTEN.push(
    {
      category:"Aphorismen",
      kind:"quote",
      title:"„Im Kampf zwischen dir und der Welt sekundiere der Welt.“",
      byline:"Franz Kafka · Zürauer Aphorismen, Nr. 52",
      detail:[],
      media:[F("Franz Kafka, 1923.jpg", "Franz Kafka")],
      sources:[source("Franz Kafka: Zürauer Aphorismen · Wikisource", "https://de.wikisource.org/wiki/Betrachtungen_%C3%BCber_S%C3%BCnde,_Leid,_Hoffnung_und_den_wahren_Weg")]
    },

    card("Historische Anekdoten", "Die Übergabe der eingefrorenen Flotte · Den Helder 1795", [
      "Am 23. Januar 1795 erreichten 128 französische Husaren und weitere Soldaten das Nieuwediep bei Den Helder. Dort lagen vierzehn niederländische Kriegsschiffe im Eis. Die Reiter näherten sich über die gefrorene Wasserfläche; die Schiffe blieben vor Anker und leisteten keinen Widerstand.",
      "Aus dem Vorgang entstand die Geschichte einer Kavallerieattacke auf eine Flotte. Niederländische Akten zeigen einen anderen Ablauf: Die Besatzungen hatten bereits den Befehl erhalten, sich den Franzosen nicht zu widersetzen. Verhandelt wurde über das Verbleiben der Schiffe, nicht nach einem Angriff zwischen Pferden und Kanonen. Der ungewöhnliche Anblick war echt; die spätere Schlachtbeschreibung war es nicht."
    ], [F("The French cavalry take the battle fleet caught in the ice in the waters of Texel, 21 January 1795 (by Charles Louis Mozin).jpg", "Die niederländische Flotte im Eis bei Den Helder")], [
      source("F. de Bas: De overgave van de Bataafsche vloot, 1795", "https://www.dbnl.org/tekst/_bij005188401_01/_bij005188401_01_0003.php"),
      source("George T. Denison: Berichtigung in A History of Cavalry", "https://brittlebooks.library.illinois.edu/brittlebooks_open/Books2012-09/denige0001hiscav/denige0001hiscav.pdf")
    ], {summary:"Den Helder, 23. Januar 1795: Husaren erreichten vierzehn im Eis liegende Kriegsschiffe."}),

    card("Philosophische Begriffe", "Überlegungsgleichgewicht", [
      "Wohlüberlegte Einzelurteile und allgemeine Grundsätze werden so lange gegenseitig berichtigt, bis sie zusammenpassen. Weder ein erster Grundsatz noch eine spontane Überzeugung ist dabei von vornherein unangreifbar.",
      "John Rawls übernahm das Verfahren von Nelson Goodmans Beschreibung wissenschaftlicher Rechtfertigung. Ein enges Überlegungsgleichgewicht prüft Urteile gegen wenige naheliegende Grundsätze. Ein weites bezieht konkurrierende Theorien und zusätzliche Gründe ein. Das Ergebnis bleibt vorläufig: Neue Gründe setzen die Prüfung erneut in Gang."
    ], [F("John Rawls (1971 photo portrait).jpg", "John Rawls")], [
      source("Wikipedia: A Theory of Justice · Abschnitt Überlegungsgleichgewicht", "https://de.wikipedia.org/wiki/A_Theory_of_Justice#%C3%9Cberlegungsgleichgewicht_(reflective_equilibrium)"),
      source("Stanford Encyclopedia of Philosophy: Reflective Equilibrium", "https://plato.stanford.edu/entries/reflective-equilibrium/")
    ], {summary:"Abgleich zwischen wohlüberlegten Einzelurteilen und allgemeinen Grundsätzen.", wiki:{page:"A_Theory_of_Justice",language:"de",section:"Überlegungsgleichgewicht (reflective equilibrium)"}}),

    card("Künstler und drei Werke", "Marianne Stokes", [
      "Marianne Stokes arbeitete zunächst in Öl und wechselte um 1900 häufig zu Tempera auf Gesso. Die matte Oberfläche, die flachen Räume und die klaren Konturen erinnern an Fresken und frühe italienische Tafelmalerei. Ihre Figuren bleiben dennoch genau beobachtete Menschen aus ihrer Gegenwart.",
      "Die drei Werke zeigen verschiedene Seiten dieser Malerei: das nächtliche Gegenlicht in Lantern Light, eine mittelalterliche Liebeserzählung in Aucassin and Nicolette und die fast bildfüllende Figur in Melisande. Stokes gehört außerdem zu den Malerinnen, deren Bilder aus der Slowakei von 1905 Kleidung und Lebensumstände der Dörfer genau festhalten."
    ], [
      F("Marianne Stokes (1855-1927) - Lantern Light - PEZPH, 2011.51 - Penlee House Museum and Gallery.jpg", "Lantern Light, 1888"),
      F("Marianne Stokes05.jpg", "Aucassin and Nicolette"),
      F("Marianne Stokes Melisande.jpg", "Melisande, 1895–1898")
    ], [
      source("Penlee House: Lantern Light", "https://penleehouse.org.uk/product/lantern-light-by-marianne-stokes/"),
      source("Victorian Web: Marianne Stokes", "https://victorianweb.org/victorian/painting/stokes/bio.html")
    ], {works:["Lantern Light, 1888","Aucassin and Nicolette, um 1898","Melisande, 1895–1898"],summary:"Lantern Light · Aucassin and Nicolette · Melisande"}),

    {
      category:"Erste Sätze großer Romane",
      kind:"quote",
      title:"Das Mondlicht fällt auf das Fußende meines Bettes und liegt dort wie ein großer, heller, flacher Stein.",
      detail:[],
      media:[F("Gustav Meyrink, portrait.gif", "Gustav Meyrink")],
      wiki:{page:"Der_Golem",language:"de"},
      sources:[
        source("Project Gutenberg: Gustav Meyrink, Der Golem", "https://www.gutenberg.org/ebooks/51476"),
        source("Wikipedia: Der Golem", "https://de.wikipedia.org/wiki/Der_Golem")
      ]
    },

    card("Seltene Musikstile", "Sankirtana · Manipur", [
      "Sankirtana wird von den Meitei in der Ebene von Manipur im Nordosten Indiens gepflegt, besonders in und um Imphal. Sänger, Tänzer und Musiker führen Episoden aus dem Leben Krishnas auf. Die Pung-Trommel gibt dabei ein eigenes Bewegungsrepertoire vor; kleine Kartal-Zimbeln gliedern den Gesang.",
      "Die Aufführungen gehören zu Tempelfesten und zu privaten Lebenszyklusriten. Im Video ist von Beginn an zu hören, wie der Chor kurze melodische Formeln wiederholt, während Trommelschläge und Schritte das Tempo verändern. Die Aufnahme stammt von der UNESCO und beginnt bei 0:00."
    ], [Y("TaIr4jvY9vE", "Sankirtana · UNESCO")], [
      source("UNESCO: Sankirtana, ritual singing, drumming and dancing of Manipur", "https://ich.unesco.org/en/RL/sankirtana-ritual-singing-drumming-and-dancing-of-manipur-00843"),
      source("YouTube: UNESCO-Aufnahme", "https://www.youtube.com/watch?v=TaIr4jvY9vE")
    ], {summary:"Ritueller Gesang, Pung-Trommeln und Tanz der Meitei in Manipur, Nordostindien."}),

    card("Vergessene Komponisten", "Helena Munktell · Bränningar", [
      "Helena Munktell schrieb die etwa zwölfminütige sinfonische Dichtung in den 1890er Jahren; die ersten Aufführungen fanden 1898 und 1902 in Monte Carlo unter dem französischen Titel Sur les brisants statt. Das Stück arbeitet mit wenig thematischem Material. Wellenbewegungen entstehen durch den unruhigen Sechsachteltakt, dicht gesetzte Streicher und rasche Wechsel der Orchesterfarbe.",
      "Munktell hatte in Paris bei Benjamin Godard und Vincent d’Indy studiert. Bränningar zeigt, wie sicher sie ein großes Orchester behandelte: Harfe, tiefes Blech und drei Schlagzeuger verändern Gewicht und Oberfläche derselben Motive, anstatt nur ein Meeresbild zu illustrieren. Das Werk verdient neue Aufführungen, weil hier eine frühe schwedische sinfonische Dichtung mit eigener französisch geprägter Instrumentation vorliegt. Zu hören ist das vollständige einsätzige Werk von Beginn an."
    ], [Y("av1Q6mpH39E", "Bränningar · Gävle Symphony Orchestra")], [
      source("Swedish Musical Heritage: Bränningar, op. 19", "https://www.swedishmusicalheritage.com/composers/munktell-helena/SMH-W384-Breaking_Waves_Symphonic_Picture?action=composers&composer=munktell-helena&workid=384"),
      source("YouTube: Gävle Symphony Orchestra", "https://www.youtube.com/watch?v=av1Q6mpH39E")
    ], {summary:"Bränningar, sinfonische Dichtung op. 19 · Gävle Symphony Orchestra"}),

    card("Großartige Bilder und Design", "Marion Mahony Griffin · Forest Portraits", [
      "Zwischen 1918 und den 1920er Jahren entstanden vierundzwanzig großformatige Studien australischer Bäume. Für die Drucke zeichnete Marion Mahony Griffin mit Eisensalzen auf eine Gelatineplatte. Beim Abrollen der Seide haftete die Druckfarbe an den gehärteten Partien; anschließend trug sie Tinten und Farbstoffe auf. Die Kronen bestehen aus dichten schwarzen Linien, zwischen denen große Flächen des farbigen Stoffes sichtbar bleiben.",
      "Eucalyptus urnigera, Tasmania/Scarlet Bark, Sunset nutzt rötliche Seide für die leuchtende Rinde. In Tree Fern Gully bleiben einzelne Stämme und Farnwedel auch in den übereinanderliegenden Vegetationsschichten unterscheidbar. Beide Blätter zeigen, wie genau Mahony Griffin die freien Flächen zwischen den Zweigen in die Zeichnung einbezog."
    ], [
      I("https://pioneeringwomen.bwaf.org/wp-content/uploads/2017/09/3.-1985.1.117-MM-Griffin.jpg", "https://pioneeringwomen.bwaf.org/marion-mahony-griffin/", "Eucalyptus urnigera, Forest Portrait Nr. 11, um 1919", "Marion Mahony Griffin · Mary and Leigh Block Museum of Art")
    ], [
      source("Block Museum: Griffin Architectural Drawings", "https://blockmuseum.emuseum.com/collections/29422/griffin-architectural-drawings/objects"),
      source("Pioneering Women of American Architecture: Marion Mahony Griffin", "https://pioneeringwomen.bwaf.org/marion-mahony-griffin/"),
      source("Lynn Becker: Marion Mahony Griffin in Australia and Beyond", "https://lynnbecker.com/repeat/Mahony/mahonyaussie.htm"),
      source("National Library of Australia: Marion Mahony Griffin", "https://www.nla.gov.au/sites/default/files/t_largeprintlabels_4_march.pdf")
    ], {summary:"Vierundzwanzig Baumstudien auf Seide, Australien 1918–1920er Jahre."}),

    card("Märchen und Sagen in ethnografischen Quellen", "Der Mann und die Alan · Itneg", [
      "Ein Mann begegnet im Wald den Alan, menschenhohen Geistern, die kopfüber in einem Baum hängen. Aus Angst fällt er zu Boden. Die Alan halten ihn für tot, steigen herab und legen Gold und Perlen auf seinen Körper. Als er aufspringt, verlangen sie nur eine besondere Nagaba-Perle zurück. Er verweigert sie; darauf kündigen sie an, sein Haus zu verbrennen, und führen die Drohung aus.",
      "Mabel Cook Cole veröffentlichte die Erzählung 1916 unter der damaligen Bezeichnung Tinguian. Gemeint sind die Itneg in der heutigen Provinz Abra im nördlichen Luzon auf den Philippinen. Die Ausgabe nennt für diese einzelne Erzählung keinen Erzähler. Der vollständige englische Text wird aus der gemeinfreien Transkription geladen."
    ], [
      F("Young Tingian woman of Danglas, Abra (1906).png", "Eine junge Itneg-Frau aus Danglas in Abra, 1906"),
      F("A typical Tingian man of Manobo, Abra (1906).png", "Ein Itneg-Mann aus Manabo in Abra, 1906")
    ], [source("Project Gutenberg: Philippine Folk Tales", "https://www.gutenberg.org/ebooks/12814")], {
      summary:"Eine Itneg-Erzählung aus Abra im nördlichen Luzon, veröffentlicht 1916.",
      original:{label:"Vollständiger Originaltext · Mabel Cook Cole, 1916",source:"https://archive.org/details/philippinefolkta00cole",remote:{url:"https://www.gutenberg.org/cache/epub/12814/pg12814.txt",start:"Man and the Alan\n\n_Tinguian_",startLast:true,end:"Sogsogot\n\n_Tinguian_",reflow:true,fetchLabel:"Project-Gutenberg-Transkription"}}
    }),

    card("Sagengestalten, Legenden und Märchen weltweit", "Curupira · Brasilien", [
      "Der Curupira ist ein Waldwesen brasilianischer Erzähltraditionen. In weit verbreiteten Fassungen hat er rote Haare und nach hinten gedrehte Füße. Die falsche Richtung seiner Spuren bringt Jäger vom Weg ab. Wer Wild ohne Maß tötet oder den Wald beschädigt, hört Pfiffe, wird verwirrt oder findet den Rückweg nicht; respektvolle Jäger versuchen ihn mit Tabak oder kleinen Gaben zu besänftigen.",
      "Die Gestalt besitzt je nach Region ein anderes Aussehen und überschneidet sich teilweise mit Caipora. José de Anchieta erwähnte den Namen 1560 in einem Brief aus São Vicente. Er deutete die Berichte seiner Zeit aus christlicher Sicht als dämonische Angriffe. Der frühe Text belegt deshalb den Namen, aber nicht eine für ganz Brasilien verbindliche Gestalt."
    ], [F("O Curupira - Manoel Santiago, 1926.jpg", "Manoel Santiago: O Curupira, 1926")], [
      source("Biblioteca Brasiliana Guita e José Mindlin: Schriften José de Anchietas", "https://digital.bbm.usp.br/handle/bbm/8015?locale=pt_BR"),
      source("Wikipedia: Curupira", "https://pt.wikipedia.org/wiki/Curupira")
    ], {wiki:{page:"Curupira",language:"pt"},summary:"Waldwesen brasilianischer Überlieferungen; seine rückwärts gerichteten Füße legen falsche Spuren."}),

    card("Literarische und filmische Tropen und Typenszenen", "Das Lid vor der Kamera", [
      "Eine subjektive Kamera zeigt das Öffnen oder Schließen der Augen als schwarze Ränder im Bild. Der Effekt übersetzt einen körperlichen Vorgang in eine sichtbare Blende: Erwachen, Ohnmacht und Tod erhalten einen eindeutigen Übergang, obwohl ein Mensch seine eigenen Lider gewöhnlich nicht als scharf begrenzte Flächen sieht.",
      "Lady in the Lake machte 1947 fast den ganzen Film zur Sicht des Detektivs; Spiegel zeigen den Körper, den die Kamera ersetzt. In The Diving Bell and the Butterfly von 2007 verengt ein gelähmtes Auge die Bildfläche, und Schnitte folgen dem Blinzeln. Enter the Void setzt 2009 sichtbare Lidschläge in lange subjektive Einstellungen. Die Typenszene blieb brauchbar, weil sie zugleich Blick, Schnitt und Bewusstseinszustand markiert."
    ], [F("Eye closing and opening2.gif", "Ein sich schließendes und öffnendes Auge")], [
      source("AFI Catalog: Lady in the Lake", "https://catalog.afi.com/Film/24847-LADY-IN-THE-LAKE"),
      source("University of Edinburgh: First-person camera cinema", "https://www.research.ed.ac.uk/en/publications/seeing-oneself-speak-speech-and-thought-in-first-person-camera-ci/")
    ], {summary:"Die Bildränder schließen sich wie Augenlider und markieren einen Wechsel des Bewusstseins."}),

    card("Wichtige Akkorde und Akkordfolgen", "Bird-Blues-Folge", [
      "Charlie Parkers Blues for Alice behält die zwölf Takte des Blues, ersetzt aber lange Flächen durch absteigende II–V-Verbindungen. In F lautet eine verbreitete Fassung: Fmaj7 | Em7♭5 A7♭9 | Dm7 G7 | Cm7 F7 | B♭7 | B♭m7 E♭7 | Am7 D7 | A♭m7 D♭7 | Gm7 | C7 | Fmaj7 D7 | Gm7 C7.",
      "Die ersten vier Takte führen schrittweise von F nach B♭. In Takt 6 wird B♭-Dur zu B♭-Moll; E♭7 leitet danach nicht nach A♭, sondern einen Halbton weiter zu Am7. Die Folge A♭m7–D♭7 nähert sich Gm7 ebenfalls von oben. Zu hören ist Parkers Aufnahme von Beginn an: Die Melodie benennt die schnellen Zielakkorde, anstatt nur über einem unveränderten Bluesgerüst zu liegen."
    ], [Y("G7USMqAH8qk", "Charlie Parker · Blues for Alice")], [
      source("Chasing the Bird: Harmonik von Blues for Alice", "https://www.musiikkiarkisto.fi/oa/_tiedostot/julkaisut/chasing-the-bird.pdf"),
      source("YouTube: Charlie Parker · Blues for Alice", "https://www.youtube.com/watch?v=G7USMqAH8qk")
    ], {summary:"Zwölf Takte Blues mit absteigenden II–V-Verbindungen und chromatischen Zielpunkten."}),

    card("Falsche Modelle mit großer Erklärungskraft", "Darwins Pangenesis", [
      "Charles Darwin nahm 1868 an, dass sämtliche Körperteile winzige Keimchen, die gemmules, abgeben. Diese sollten sich in den Fortpflanzungsorganen sammeln. Damit ließ sich in einem einzigen Modell erklären, warum Nachkommen Merkmale beider Eltern tragen, warum lange verborgene Merkmale wiederauftreten und wie erworbene Veränderungen vererbt werden sollten.",
      "Francis Galton übertrug zwischen 1869 und 1871 große Mengen Blut zwischen verschieden gefärbten Kaninchen. Die Nachkommen zeigten keine Merkmale der Blutspender. Darwin erwiderte zu Recht, dass seine Hypothese das Blut nicht ausdrücklich als einzigen Transportweg festgelegt hatte. Entscheidend scheiterte Pangenesis später an der Trennung von Körper- und Keimbahn sowie an der Chromosomentheorie der Vererbung: Veränderungen des Körpers schreiben die Erbinformation der Keimzellen nicht auf die vorausgesetzte Weise um."
    ], [F("Darwin's Pangenesis.svg", "Darwins hypothetische Gemmulae")], [
      source("Darwin Online: Pangenesis, 1871", "https://darwin-online.org.uk/converted/published/1871_pangenesis_F1751.html"),
      source("Francis Galton: Experiments in Pangenesis", "https://galton.org/essays/1870-1879/galton-1871-annals-pangenesis.pdf")
    ], {summary:"Alle Körperteile sollten Erbteilchen abgeben, die sich in den Keimzellen sammeln."}),

    card("Entzifferte Schriften", "Brahmi · 𑀤𑁂𑀯𑀸𑀦𑀁𑀧𑀺𑀬 𑀧𑀺𑀬𑀤𑀲𑀺", [
      "Brahmi ist seit dem 3. Jahrhundert v. Chr. in weiten Teilen Südasiens belegt. Die meisten großen Inschriften des Maurya-Herrschers Ashoka geben damit mittelindische Prakrit-Sprachen wieder. Das Zeicheninventar wurde zum Ausgangspunkt zahlreicher späterer Schriften Süd- und Südostasiens.",
      "James Prinsep verglich 1837 kurze Stifterinschriften auf buddhistischen Monumenten. Ihre wiederkehrende Endung las er als dānaṃ, „Gabe“. Dadurch gewann er mehrere Konsonanten und Vokale. Längere Inschriften ergaben den Königstitel devānaṃpiya piyadasi. George Turnour erkannte Piyadasi in sri-lankischen Chroniken als Titel Ashokas; Inschriften mit dem Namen Ashoka bestätigten die Zuordnung später. Die gezeigte Folge lautet devānaṃpiya piyadasi: „der Göttergeliebte Piyadasi“."
    ], [F("0121421 Brahmi script Prakrit language 3rd-century BCE, Ashoka Minor Rock Edict, Gujarra Madhya Pradesh 03.jpg", "Ashokas Felsenedikt von Gujarra in Brahmi-Schrift"),F("JamesPrinsep.jpg", "James Prinsep")], [
      source("British Library: Deciphering ancient Indian scripts", "https://www.bl.uk/stories/blogs/posts/how-the-brahmi-script-was-deciphered"),
      source("Encyclopaedia Britannica: Brahmi", "https://www.britannica.com/topic/Brahmi")
    ], {summary:"devānaṃpiya piyadasi · „der Göttergeliebte Piyadasi“"}),

    card("Etymologien und Begriffsgeschichten", "Magazin", [
      "Arabisch maḫzan bezeichnet einen Speicher oder ein Lager; maḫāzin ist der Plural. Über italienisch magazzino und französisch magasin gelangte das Wort in die europäischen Handels- und Militärsprachen. Im Deutschen blieb Magazin zunächst ein Vorratsraum, besonders für Waffen und Pulver.",
      "Edward Cave nannte seine Londoner Monatsschrift 1731 The Gentleman’s Magazine: eine Sammlung als Wissensspeicher. Diese bildliche Verwendung wurde zur Bezeichnung periodischer Hefte. Im 19. Jahrhundert kam eine technische Abzweigung hinzu: Das Magazin eines Gewehrs hält Patronen bereit; später erhielten Kameras und Projektoren Film-Magazine. Speicher, Zeitschrift und Munitionsbehälter gehen damit auf denselben Weg zurück."
    ], [F("Inside the Gunpowder Magazines at Tilbury Fort - geograph.org.uk - 6570928.jpg", "Das Innere eines historischen Pulvermagazins in Tilbury Fort")], [
      source("Etymonline: magazine", "https://www.etymonline.com/word/magazine"),
      source("DWDS: Magazin", "https://www.dwds.de/wb/Magazin")
    ], {summary:"maḫzan: Lagerraum → Wissensspeicher → Zeitschrift und technischer Vorratsbehälter."}),

    card("Rhetorische und poetische Verfahren", "„Moriamur et in media arma ruamus.“", [
      "Vergil lässt Aeneas sagen: „Lasst uns sterben und mitten in die Waffen stürzen.“ Der Tod steht im Satz vor dem Angriff, der ihn erst herbeiführen soll. Diese Umkehr der sachlichen Reihenfolge heißt hysteron proteron, wörtlich „das Spätere zuerst“.",
      "Antike Grammatiker behandelten die Figur als absichtliche Verkehrung der natürlichen Abfolge. An dieser Stelle bildet sie keine bloße Zierde. Aeneas spricht nach dem Fall Trojas zu einer Gruppe, die den eigenen Tod bereits beschlossen hat. Die grammatische Reihenfolge macht das Ergebnis zur Voraussetzung des Handelns; der anschließende Sturm in die Waffen vollzieht nur noch den gefassten Entschluss."
    ], [I("assets/hysteron-proteron.svg", "assets/hysteron-proteron.svg", "Die im Satz umgekehrte Reihenfolge von Tod und Angriff", "Eigene Darstellung")], [
      source("Perseus: Vergil, Aeneis 2,353", "https://www.perseus.tufts.edu/hopper/text?doc=Verg.%20A.%202.353"),
      source("Treccani: Hysteron proteron", "https://www.treccani.it/enciclopedia/hysteron-proteron/")
    ], {summary:"Hysteron proteron: Die Wirkung steht vor der Handlung, die sie verursacht."}),

    card("Urban Legends", "Blue-Star-LSD-Tattoos", [
      "Seit den späten 1970er Jahren warnten fotokopierte Zettel in Schulen vor abziehbaren Kinder-Tattoos, die angeblich mit LSD getränkt seien. Das Motiv wechselte: blauer Stern, Mickey Mouse, Superman oder später Bart Simpson. Meist berief sich der Zettel auf ein Krankenhaus, die Polizei oder einen nicht näher genannten Regierungsberater.",
      "Ein belegter Fall, in dem Händler solche Bilder an Kinder verteilten, ist nicht bekannt. Die Geschichte übertrug zwei wirkliche Dinge aufeinander: LSD wurde auf bedrucktem Löschpapier verkauft, und Kinder sammelten Abziehbilder. Jede neue Kopie machte aus einem allgemeinen Gerücht eine örtliche Warnung. Gerade die amtlich wirkende Form des Zettels hielt die Legende am Leben."
    ], [I("assets/blue-star-geruecht.svg", "assets/blue-star-geruecht.svg", "Die Stationen des Blue-Star-Gerüchts", "Eigene Darstellung")], [
      source("Los Angeles Times: Flyer Says Drug Is in Rub-On Tattoos", "https://www.latimes.com/archives/la-xpm-1987-12-09-mn-18352-story.html"),
      source("Snopes: LSD Tattoos", "https://www.snopes.com/fact-check/blue-star-acid/")
    ], {summary:"Eine fotokopierte Schulwarnung machte aus Löschpapier und Abziehbildern eine langlebige Drogenlegende."}),

    card("Interessante Sprachen und Sprachmerkmale", "Baskisch: Anrede im Verb", [
      "Beim vertrauten hika kann ein baskisches Verb das Geschlecht der angesprochenen Person markieren, obwohl diese Person an dem beschriebenen Vorgang gar nicht beteiligt ist. Die neutrale Aussage Jon etorri da bedeutet „Jon ist gekommen“. Zu einem vertrauten Mann heißt derselbe Sachverhalt Jon etorri duk, zu einer vertrauten Frau Jon etorri dun.",
      "Das Merkmal heißt allokutive Kongruenz. Es gehört zur sozialen Beziehung zwischen Sprecher und Hörer und darf nicht mit dem Geschlecht des Subjekts Jon verwechselt werden. Die Formen stehen vor allem in selbstständigen Hauptsätzen. Baskisch wird im Baskenland beiderseits der spanisch-französischen Grenze gesprochen; die hika-Formen leben regional und altersabhängig unterschiedlich stark fort."
    ], [F("Euskalkiak.svg", "Die baskischen Dialektgebiete in Nordspanien und Südwestfrankreich")], [
      source("University of Surrey: Deponency in Basque", "https://www.smg.surrey.ac.uk/deponency/Examples/Basque.htm"),
      source("Journal of Memory and Language: Basque allocutive agreement", "https://pmc.ncbi.nlm.nih.gov/articles/PMC5591851/")
    ], {summary:"Das Verb zeigt, ob eine vertraut angesprochene Person männlich oder weiblich ist.",languageInfo:[["neutral","Jon etorri da. — Jon ist gekommen."],["zu einem Mann","Jon etorri duk. — Jon ist gekommen."],["zu einer Frau","Jon etorri dun. — Jon ist gekommen."],["Region","Baskenland in Nordspanien und Südwestfrankreich"]]}),

    card("Interessante Listen", "Die Einkaufsliste von Vindolanda · Tafel 302", [
      "Die schmale Holztafel entstand um 85–92 n. Chr. am römischen Kastell Vindolanda, nahe der heutigen Stadt Hexham in Nordengland. Wahrscheinlich sollte ein Sklave des Präfekten Verecundus Lebensmittel für den Haushalt beschaffen. Erhalten ist nur ein Teil der Liste; unsichere Lesungen bleiben in der Edition gekennzeichnet.",
      "Die Mengen zeigen keinen kargen Außenposten. Gewünscht waren gute Äpfel, Eier nur zu einem angemessenen Preis und importierte Würzmittel. Die Liste gibt damit zugleich Geschmack, Vorratshaltung und Preisbewusstsein eines Offiziershaushalts an der Nordgrenze des Römischen Reiches zu erkennen."
    ], [I("https://romaninscriptionsofbritain.org/images/TV.302f.jpg", "https://romaninscriptionsofbritain.org/inscriptions/TabVindol302", "Die Vorderseite der Tafel 302", "Roman Inscriptions of Britain"),F("Kastell und Vicus von Vindolanda, Luftbild, 2010.jpg", "Kastell und Vicus von Vindolanda, Luftbild von 2010")], [
      source("Roman Inscriptions of Britain: Tab. Vindol. 302", "https://romaninscriptionsofbritain.org/inscriptions/TabVindol302"),
      source("British Museum: The Vindolanda tablets", "https://www.britishmuseum.org/collection/galleries/roman-britain/vindolanda-tablets")
    ], {summary:"Eine Lebensmittelbestellung aus einem römischen Kastell, um 85–92 n. Chr.",works:["zerstoßene Bohnen · zwei modii","zwanzig Hühner","einhundert gute Äpfel, sofern welche zu finden sind","einhundert oder zweihundert Eier, sofern der Preis angemessen ist","acht sextarii Fischsauce","ein modius Oliven"]}),

    card("Gute einfache Cartoons", "Honoré Daumier · Nadar erhebt die Fotografie zur Kunst", [
      "Nadar steht mit Kamera und Stativ in einem schwankenden Ballonkorb. Tief unter ihm füllt sich Paris mit kleinen fotografischen Ateliers. Die Bildunterschrift nimmt die Redewendung wörtlich: Nadar erhebt die Fotografie „zur Höhe der Kunst“.",
      "Daumier veröffentlichte die Lithografie am 25. Mai 1862. Nadar war tatsächlich Ballonfahrer, Fotograf und Verfechter der Luftbildfotografie. Der Witz braucht deshalb nur eine räumliche Verschiebung: Ein abstrakter Anspruch wird zur riskanten Arbeit über den Dächern."
    ], [F("Honoré Daumier, Nadar élevant la Photographie à la hauteur de l'Art, 1862, NGA 42966.jpg", "Honoré Daumier, 25. Mai 1862")], [
      source("Metropolitan Museum of Art: Nadar Élevant la Photographie à la Hauteur de l’Art", "https://www.metmuseum.org/art/collection/search/364205"),
      source("National Gallery of Art: Nadar Elevating Photography to Art", "https://www.nga.gov/artworks/42966-nadar-elevant-la-photographie-la-hauteur-de-lart-nadar-elevating-photography-art")
    ], {summary:"Honoré Daumier · Lithografie · 25. Mai 1862"}),

    card("Grenzfälle", "La Jetée · Film oder Fotoserie", [
      "Chris Markers La Jetée von 1962 besteht fast vollständig aus schwarzweißen Fotografien. Schnittdauer, Off-Kommentar, Musik und Geräusch geben den unbewegten Bildern eine genaue zeitliche Ordnung. In einer kurzen Einstellung öffnet eine Frau die Augen; die erste sichtbare Bewegung trifft deshalb mit ungewöhnlicher Kraft.",
      "Der Film bleibt auch ohne fortlaufend aufgenommene Bewegung Kino. Seine Zeit entsteht zwischen den Bildern: Ein Schnitt kann Jahre überspringen, zwei ähnliche Fotos bilden eine Bewegung, und der Ton hält getrennte Aufnahmen in derselben Szene. Der Grenzfall zeigt, dass Filmzeit nicht im einzelnen Bild liegen muss."
    ], [I("assets/la-jetee-fotofilm.svg", "assets/la-jetee-fotofilm.svg", "Fotografien, Schnitt und eine kurze Bewegung", "Eigene Darstellung")], [
      source("BFI: La Jetée", "https://www.bfi.org.uk/film/e6855ee9-c56d-5914-9f9b-69307cef5b18/la-jetee"),
      source("BFI Player: La Jetée", "https://player.bfi.org.uk/subscription/film/watch-la-jetee-1962-online")
    ], {summary:"Ein 28-minütiger Film aus fast ausschließlich unbewegten Fotografien."}),

    card("UnsichtbareKonventionen", "Warum Kinodialog aus der Mitte kommt", [
      "In einem Kinosaal steht der Centerlautsprecher hinter der Leinwand. Der größte Teil des Dialogs wird auf diesen Kanal gelegt, selbst wenn eine sprechende Figur links oder rechts im Bild steht. Das Gehirn ordnet die Stimme den sichtbaren Lippen zu; zugleich hören Plätze am Rand dieselbe feste Quelle.",
      "Würde jede Stimme genau mit der Figur zwischen linkem und rechtem Lautsprecher verschoben, entstünde der gewünschte Ort nur für wenige Sitze. Seitlich sitzende Zuschauer hörten Sprünge und andere Lautstärken. Tonmischungen lösen die Regel deshalb meist erst bei einer hörbaren Bewegung, einer Stimme außerhalb des Bildes oder einer ausdrücklich räumlichen Wirkung."
    ], [I("assets/kino-centerkanal.svg", "assets/kino-centerkanal.svg", "Centerkanal hinter der Leinwand", "Eigene Darstellung")], [
      source("Dolby: Speaker setup guides", "https://www.dolby.com/about/support/guide/speaker-setup-guides/"),
      source("Cinema Audio Society: Dialogue and the center channel", "https://cinemaaudiosociety.org/")
    ], {summary:"Der Centerkanal hält Sprache für alle Sitzplätze an der Leinwand fest."}),

    card("VerloreneTechniken", "Längengrad durch Monddistanzen", [
      "Ein Navigator maß mit dem Sextanten den Winkel zwischen dem Mondrand und einem bekannten Stern oder der Sonne. Nach Korrekturen für Augenhöhe, Brechung und Mondparallaxe verglich er den Winkel mit den vorausberechneten Werten des Nautical Almanac. Daraus erhielt er die Uhrzeit in Greenwich. Der Unterschied zur örtlichen Sonnenzeit ergab den Längengrad.",
      "Nevil Maskelyne ließ die nötigen Tabellen ab 1767 jährlich veröffentlichen. Eine sorgfältige Rechnung dauerte anfangs mehrere Stunden und verlangte genaue Winkelmessung auf einem bewegten Schiff. Bis zur Mitte des 19. Jahrhunderts nutzten Seeleute das Verfahren neben Chronometern; mit preiswerteren zuverlässigen Uhren verlor die aufwendige Rechnung ihren praktischen Vorteil."
    ], [F("Observing Lunar Distance at Sea.jpg", "Messung einer Monddistanz mit dem Sextanten")], [
      source("Royal Museums Greenwich: Nevil Maskelyne and the lunar method", "https://www.rmg.co.uk/stories/time/longitude-found-nevil-maskelyne-lunar-method"),
      source("Royal Museums Greenwich: Workbook for clearing a lunar distance", "https://www.rmg.co.uk/collections/archive/rmgc-object-500336")
    ], {summary:"Mondwinkel plus Tabellen lieferten die Greenwich-Zeit und damit den Längengrad."}),

    card("InternetArchäologie", "The Medieval Bestiary · bestiary.ca", [
      "Der unabhängige Forscher David Badke begann die Website 2002 in Victoria, Kanada. Sie erschließt mittelalterliche Tierbücher nach Tieren, Handschriften, Quellen, Bildmotiven und Forschungsliteratur. Beim Öffnen erscheint eine schlichte, überwiegend statische Website mit alphabetischen Registern und langen Querverweislisten.",
      "Zu einem Tier findet man lateinische Namen, überlieferte Eigenschaften, moralische Deutungen und Abbildungen aus verschiedenen Handschriften. Das Handschriftenverzeichnis führt weiter zu Bibliothek, Signatur, Datierung und vorhandenen Digitalisaten. Die Seite funktioniert weiterhin ohne Konto; einzelne ältere externe Bildlinks können inzwischen ausfallen."
    ], [F("RochesterBestiaryFolio005vLion.jpg", "Löwe im Rochester-Bestiarium, 13. Jahrhundert"),F("12th-century painters - On Whales, folio from a Bestiary - WGA15746.jpg", "Wal in einem englischen Bestiarium der 1190er Jahre")], [
      source("The Medieval Bestiary", "https://bestiary.ca/"),
      source("The Medieval Bestiary: About", "https://bestiary.ca/about.htm")
    ], {summary:"Seit 2002: ein durchsuchbares Verzeichnis mittelalterlicher Tiere, Handschriften und Bilder."}),

    card("SchlechtesWritingSeziert", "Prometheus · Millburn und die Hammerpede", [
      "Der Biologe Millburn erschrickt vor einem toten außerirdischen Körper und will das Bauwerk verlassen. Wenig später nähert er sich einer lebenden, zischenden Kreatur mit aufgerichtetem Kopf, spricht sie wie ein harmloses Tier an und streckt die Hand aus. Gleichzeitig verirrt sich der Geologe Fifield, obwohl gerade seine Kartierungssonden den Bau vermessen und das Schiff ihre Position sieht.",
      "Beide Todesfälle brauchen, dass die Fachleute genau die Fähigkeit verlieren, mit der der Film sie vorgestellt hat. Das wirkt erzwungen, weil keine neue Information ihre Entscheidungen erklärt. Gefahr entsteht hier aus einem Wechsel der Figurenlogik, nicht aus einer stärkeren Lage."
    ], [I("assets/prometheus-szenenlogik.svg", "assets/prometheus-szenenlogik.svg", "Fähigkeit und Handlung in der Hammerpede-Szene", "Eigene Darstellung")], [
      source("Prometheus screenplay", "https://assets.scriptslug.com/live/pdf/scripts/prometheus-2012.pdf"),
      source("20th Century Studios: Prometheus", "https://www.20thcenturystudios.com/movies/prometheus")
    ], {summary:"Zwei Fachleute handeln plötzlich gegen die Fähigkeiten, mit denen der Film sie eingeführt hat.",works:["Die Kreatur liegt zunächst reglos und zeigt ihre Drohhaltung erst, als Millburn bereits zu nah ist.","Ein elektromagnetischer Ausfall löscht Fifields Karte und unterbricht die Positionsdaten zum Schiff.","Millburn erkennt ein vertrautes Beschwichtigungsverhalten, deutet jedoch ein entscheidendes anatomisches Zeichen falsch; sein Irrtum folgt dann aus Fachwissen statt aus dessen Verschwinden."]}),

    card("DasIstHierGanzInDerNähe", "Deutsches Verpackungs-Museum · Heidelberg", [
      "Das Museum liegt im Innenhof der Hauptstraße 22 in der Heidelberger Altstadt, rund zwanzig Kilometer von Mannheim entfernt. Es zeigt Verpackungen als Gebrauchs- und Werbegeschichte: Markenformen, Materialwechsel, Transportbehälter und alltägliche Packungen, die nach dem Öffnen gewöhnlich weggeworfen wurden.",
      "Die Sammlung befindet sich in einer ehemaligen Notkirche. Dadurch stehen kleine Serien und Vitrinen in einem ungewöhnlich hohen Raum. Geöffnet ist Donnerstag bis Sonntag von 11 bis 17 Uhr; montags bis mittwochs und an Feiertagen bleibt das Museum geschlossen. Vor einer Fahrt empfiehlt sich ein Blick auf die aktuellen Hinweise der Museumsseite."
    ], [I("https://www.verpackungsmuseum.de/media/museum_1.jpg", "https://www.verpackungsmuseum.de/", "Der Eingang des Deutschen Verpackungs-Museums im Innenhof", "Deutsches Verpackungs-Museum")], [
      source("Deutsches Verpackungs-Museum: Öffnungszeiten und Adresse", "https://www.verpackungsmuseum.de/oeffnungszeiten-adresse/"),
      source("Deutsches Verpackungs-Museum", "https://www.verpackungsmuseum.de/")
    ], {summary:"Heidelberg · Verpackungs- und Markengeschichte in einer ehemaligen Notkirche."}),

    card("VisuelleIdeenDieIchKlauenWill", "Len Lye · Free Radicals", [
      "Len Lye ritzte Linien direkt in schwarzen 16-mm-Film. Dentalinstrumente, Nadeln und eine Pfeilspitze entfernten die Emulsion; bei der Projektion erscheinen die Kratzer als weißes Licht auf schwarzem Grund. Free Radicals entstand 1958 und wurde 1979 überarbeitet.",
      "Die brauchbare Bildidee liegt im Weglassen eines üblichen Zwischenschritts. Es gibt weder Kamera noch gezeichneten Hintergrund: Werkzeugbreite, Druck und Abstand der Ritzungen werden unmittelbar zu Form und Rhythmus. Die hellen Zeichen wechseln zwischen einzelnen Hieben, zitternden Bündeln und großen offenen Konturen. Im Video ist die Arbeit von Beginn an zu sehen."
    ], [Y("nkcHVhMq6U0", "Len Lye · Free Radicals · SCHIRN")], [
      source("Govett-Brewster: Free Radicals", "https://shop.govettbrewster.com/products/free-radicals-solo-journal"),
      source("YouTube: SCHIRN Kunsthalle Frankfurt", "https://www.youtube.com/watch?v=nkcHVhMq6U0")
    ], {summary:"Weiße Linien entstehen, indem Werkzeuge die schwarze Filmemulsion abtragen."}),

    {category:"Eigene GIFs",kind:"gif",title:"Drei gegenläufige Ringe",detail:[],media:[I("assets/gifs/phasenschnitt.gif","assets/gifs/phasenschnitt.gif","Drei gegenläufige Ringe","Eigene Animation")],sources:[]},

    card("Trends in Art", "Harriet Rutter · Symbiosis — beech tree, Wytham Woods", [
      "Harriet Rutter fotografierte eine Buche im Forschungswald Wytham Woods bei Oxford auf analogem Film. Danach vergrub sie das belichtete Material im Boden am Aufnahmeort. Feuchtigkeit, Pilzgeflecht und Mikroorganismen griffen die Emulsion an, bevor das Bild ausgearbeitet wurde.",
      "Das Werk von 2026 ist als sehr schmales, hochformatiges Baumporträt montiert. Stamm und Äste bleiben über viele zusammengesetzte Aufnahmen lesbar; Flecken, Ausbleichungen und beschädigte Ränder geben dagegen die Vorgänge im Boden wieder. Die chemische Veränderung ist hier Teil der Aufnahme und kein nachträglich gesetzter Filter."
    ], [I("https://2026.rca.ac.uk/files/2026/06/H-Rutter-whole-tree-2be64c6231f99657.jpg", "https://2026.rca.ac.uk/school-of-arts-humanities/photography-ma/profile/harriet-rutter-ma-photography/", "Symbiosis — beech tree, Wytham Woods, 2026", "Harriet Rutter · RCA2026")], [
      source("RCA2026: Harriet Rutter, MA Photography", "https://2026.rca.ac.uk/school-of-arts-humanities/photography-ma/profile/harriet-rutter-ma-photography/")
    ], {summary:"Analoger Film wurde nach der Aufnahme unter derselben Buche vergraben."}),

    card("Writing Tipps", "Eine kurze Erzählung auf eine Zeitspanne begrenzen", [
      "Prüfe bei jeder längeren Vorgeschichte, ob ein einziger Rückblick die gegenwärtige Lage verständlich macht. Wenn sich Figuren oder Umstände während eines übersprungenen Zeitraums sichtbar verändern müssen, verlangt der Stoff eine längere Form. Die Kurzgeschichte setzt später ein: bei der Situation, in der frühere Entscheidungen gleichzeitig wirksam werden.",
      "Edith Wharton trennt auf diese Weise die kurze Erzählung vom bloß zusammengedrückten Roman. Ein Zeitsprung ist für sie kein neutrales Kürzungsmittel. Sobald der ausgelassene Zeitraum eine eigene Entwicklung trägt, bleibt nach der Kürzung nur noch das Handlungsgerüst."
    ], [F("Edith Newbold Jones Wharton.jpg", "Edith Wharton")], [
      source("Project Gutenberg: Edith Wharton, The Writing of Fiction", "https://www.gutenberg.org/ebooks/72446"),
      source("Internet Archive: The Writing of Fiction", "https://archive.org/details/writingoffiction00whar")
    ], {summary:"Ein Zeitsprung darf keine Entwicklung verdecken, die eine eigene Szene oder längere Form braucht.",writingSource:{label:"Wortlaut · Edith Wharton, The Writing of Fiction, Kapitel II",source:"https://archive.org/details/writingoffiction00whar",remote:{url:"https://raw.githubusercontent.com/GITenberg/The-writing-of-fiction_72446/master/72446-0.txt",start:"There are cases, indeed, when the short story may make use",end:"In the third chapter, where an attempt will be made",flexibleMarkers:true,reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    card("Englisch Vokabular", "scupper", [], [F("Deck scupper.png", "Ein Speigatt im Deck eines Schiffs")], [
      source("Cambridge Dictionary: scupper", "https://dictionary.cambridge.org/dictionary/english/scupper"),
      source("Merriam-Webster: scupper", "https://www.merriam-webster.com/dictionary/scupper")
    ], {summary:"einen Plan vereiteln; ein Schiff absichtlich versenken",vocabulary:{pronunciation:"UK /ˈskʌp.ə/, US /ˈskʌp.ɚ/",register:"informell; vor allem britisch",meaning:"Als Verb bedeutet scupper meist, einen Plan oder eine Aussicht vollständig scheitern zu lassen. In der älteren Seemannssprache heißt es außerdem, ein Schiff zu versenken. Das gleich geschriebene Substantiv bezeichnet einen Wasserablauf im Schiffsdeck.",examples:[
      {english:"A missing permit scuppered the exhibition.",german:"Eine fehlende Genehmigung ließ die Ausstellung scheitern."},
      {english:"One bad estimate could scupper the entire budget.",german:"Eine einzige falsche Schätzung könnte den gesamten Finanzplan zunichtemachen."},
      {english:"The crew scuppered the captured vessel before dawn.",german:"Die Besatzung versenkte das erbeutete Schiff vor Tagesanbruch."}
    ]}}),

    card("Geo Atlas", "Sistan-Becken", [
      "Das abflusslose Sistan-Becken liegt beiderseits der Grenze zwischen Südwestafghanistan und Südostiran. Der Helmand bringt Schmelzwasser aus dem Hindukusch in die flachen Hamun-Seen bei Zaranj und Zabol. In nassen Jahren laufen sie nach Süden in die salzige Senke Gowd-e Zereh über; in Dürrejahren zerfallen sie in trockene Schlammflächen.",
      "Bewässerung trug hier seit mehr als sechs Jahrtausenden Städte und Landwirtschaft. Der Name Sistan geht auf Sakastan, „Land der Saken“, zurück. Seit Grenzkommissionen des 19. Jahrhunderts sind Flussarme, Staudämme und Wasserrechte zugleich politische Fragen zwischen Iran und Afghanistan. Von Mai bis Oktober treibt der „Wind der 120 Tage“ Staub durch das Becken; sinkt der Wasserstand, wird der ehemalige Seeboden selbst zur Staubquelle."
    ], [F("Geography avesta sistan.png", "Das Sistan-Becken an der Grenze zwischen Afghanistan und Iran"),F("Hamoun Wetlands and the Godzareh Depression (MODIS 2024-07-16).jpg", "Die Hamun-Feuchtgebiete und die Godzareh-Senke, 22. Juni 2024")], [
      source("USGS: Geology, Water, and Wind in the Lower Helmand Basin", "https://pubs.usgs.gov/sir/2006/5182/index.html"),
      source("Encyclopaedia Iranica: Helmand River · Geography", "https://www.iranicaonline.org/articles/helmand-river-i/")
    ], {summary:"Endbecken des Helmand zwischen Zaranj und Zabol, an der afghanisch-iranischen Grenze."}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Ende gut, alles gut.", [
      "Lautwert: /ˈɛndə ɡuːt ˈaləs ɡuːt/. Д steht für das deutsche d; im kyrillischen Alphabet ist dafür keine Ersatzfolge nötig. Э gibt das offene e am Wortanfang wieder, у das lange u."
    ], [I("assets/sprichwort-kyrillisch.svg", "assets/sprichwort-kyrillisch.svg", "Das Sprichwort in lateinischer und kyrillischer Schrift", "Eigene Darstellung")], proverbSources("Ende gut alles gut", "Kyrillisches Alphabet"), {summary:"Энде гут, аллес гут."}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Geteiltes Leid ist halbes Leid.", [
      "Lautwert: /ɡəˈtaɪ̯ltəs laɪ̯t ɪst ˈhalbəs laɪ̯t/. Γκ nähert das deutsche g an; άϊ steht für ei. Das d am Wortende wird als δ geschrieben. Für h dient hier ἁ: Der Spiritus asper bezeichnete im Altgriechischen einen anlautenden h-Laut, der im heutigen Griechisch verschwunden ist."
    ], [I("assets/sprichwort-griechisch.svg", "assets/sprichwort-griechisch.svg", "Das Sprichwort in lateinischer und griechischer Schrift", "Eigene Darstellung")], proverbSources("Geteiltes Leid ist halbes Leid", "Griechisches Alphabet"), {summary:"Γκετάϊλτες Λάϊδ ιστ ἅλμπες Λάϊδ."})
  );
})();

(() => {
  "use strict";
  const card=(category,title,detail,media,sources=[],extra={})=>({category,title,detail,media,sources,...extra});
  const src=(label,url)=>S(label,url);

  window.KARTEN.push(
    card("Aphorismen", "„Die gefährlichsten Unwahrheiten sind Wahrheiten mäßig entstellt.“", [],
      [F("Georg Christoph Lichtenberg Big.jpg", "Georg Christoph Lichtenberg")],
      [src("Lichtenberg: Sudelbücher", "http://www.zeno.org/Literatur/M/Lichtenberg,+Georg+Christoph/Aphorismen/Sudelbücher")],
      {kind:"quote",byline:"Georg Christoph Lichtenberg · Sudelbuch H 24",summary:""}),

    card("DasIstHierGanzInDerNähe", "Eremitage Waghäusel", [
      "Die Eremitage steht rund 30 Kilometer südlich von Mannheim. Für Damian Hugo von Schönborn, den Fürstbischof von Speyer, entstand ab 1724 ein Jagd- und Lustschloss. Im Mittelpunkt lag ein sechzehneckiger Bau; acht Wege liefen sternförmig darauf zu. Vier zweigeschossige Pavillons ergänzten die Anlage ab 1730.",
      "Ab 1837 nutzte die Badische Gesellschaft für Zuckerfabrikation das Gelände. Fabrikbauten umgaben das Schloss, bis die Zuckerfabrik 1995 schloss. Heute stehen die restaurierte Eremitage und ein Teil der Industrieanlage nebeneinander."
    ], [F("Eremitage Waghäusel - panoramio.jpg", "Die Eremitage in Waghäusel")], [
      src("Stadt Waghäusel: Geschichte der Eremitage", "https://www.waghaeusel-eremitage.de/eremitage-waghaeusel/geschichte/1724-1747"),
      src("Stadt Waghäusel: Ortsgeschichte", "https://www.waghaeusel.de/stadt-wirtschaft/geschichte-wappen/blick-in-die-ortsgeschichte")
    ], {summary:"Ein fürstbischöfliches Jagdschloss steht mitten im Gelände einer früheren Zuckerfabrik.",searchTerm:"Eremitage Waghäusel Jagdschloss Zuckerfabrik Geschichte"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Was du heute kannst besorgen, das verschiebe nicht auf morgen.", [
      "β steht hier für das deutsche w mit dem Lautwert /v/, δ für d und φ für f. χ nähert die beiden deutschen ch-Laute an. Die Schreibweise gibt deutsche Laute wieder; sie ist kein griechischer Satz."
    ], [F("Sunrise in germany.jpg", "Ein Morgen in Deutschland")], [
      src("Wikiquote: Deutsche Sprichwörter", "https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
      src("Wikipedia: Griechisches Alphabet", "https://de.wikipedia.org/wiki/Griechisches_Alphabet")
    ], {summary:"Βας δου χόϊτε κανστ μπεζόργκεν, δας φερσίμπε νιχτ αουφ μόργκεν.",searchTerm:"Was du heute kannst besorgen Sprichwort Herkunft"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Aller Anfang ist schwer.", [
      "ш gibt den deutschen sch-Laut wieder. Das w in schwer hat den Lautwert /v/ und erscheint deshalb als в. Die Folge нг nähert den einzelnen Nasallaut am Ende von Anfang an."
    ], [F("Student Violin.jpg", "Eine erste Geigenübung")], [
      src("Wikiquote: Deutsche Sprichwörter", "https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
      src("Wikipedia: Kyrillisches Alphabet", "https://de.wikipedia.org/wiki/Kyrillisches_Alphabet")
    ], {summary:"Аллер Анфанг ист швер.",searchTerm:"Aller Anfang ist schwer Sprichwort Herkunft"}),

    card("Eigene GIFs", "Schattenzeiger", [],
      [I("assets/gifs/schattenzeiger.gif", "assets/gifs/schattenzeiger.gif", "Schattenzeiger", "Eigene Animation")], [],
      {kind:"gif",summary:""}),

    card("Englisch Vokabular", "naff", [],
      [C("kitsch plastic gold ornament", "Eine goldfarbene Kunststoffverzierung")],
      [src("Cambridge Dictionary: naff", "https://dictionary.cambridge.org/dictionary/english/naff")], {
        summary:"geschmacklos; billig wirkend; misslungen",
        vocabulary:{pronunciation:"/næf/",register:"britisch, informell",meaning:"Naff bezeichnet etwas Geschmackloses oder merklich Billiges. Das Wort fällt oft über Kleidung, Gestaltung oder eine misslungene Pointe.",examples:[
          {english:"The fake-gold handles make the cabinet look naff.",german:"Die goldfarbenen Kunststoffgriffe lassen den Schrank billig aussehen."},
          {english:"That ending was too naff for an otherwise sharp comedy.",german:"Dieses Ende war für eine sonst kluge Komödie zu abgeschmackt."},
          {english:"The first logo felt naff, so they kept the plain wordmark.",german:"Das erste Logo wirkte geschmacklos; deshalb behielten sie die schlichte Wortmarke."}
        ]},searchTerm:"naff British English meaning examples"
      }),

    card("Entzifferte Schriften", "Kyprische Silbenschrift · pa-si-le-wo-se", [
      "Griechische Texte wurden auf Zypern vom 11. bis zum 4. Jahrhundert v. Chr. mit einer Silbenschrift geschrieben. Jedes Zeichen bezeichnete meist eine Folge aus Konsonant und Vokal. Die Sprache blieb Griechisch, obwohl die Zeichen anders aussahen als das griechische Alphabet.",
      "Die zweisprachige Inschrift von Idalion gab denselben Text in Phönizisch und in kyprischen Zeichen wieder. George Smith erkannte 1871 darin griechische Namen und Flexionsformen. pa-si-le-wo-se gibt basilēwos wieder; das w bezeichnet einen Laut, der im späteren Griechisch verschwunden ist.",
      "Vollständige Übersetzung des Ausschnitts: des Königs."
    ], [F("Idalion bilingual and the decipherment of the the Cypriot syllabary.jpg", "Die zweisprachige Inschrift von Idalion")], [
      src("Kyprios Character: Decipherment of the Cypriot syllabary", "https://kyprioscharacter.eie.gr/en/scientific-texts/details/inscriptions/the-decipherment-of-the-cypriot-syllabary"),
      src("Wikipedia: Cypriot syllabary", "https://en.wikipedia.org/wiki/Cypriot_syllabary")
    ], {summary:"pa-si-le-wo-se · des Königs",searchTerm:"Cypriot syllabary pa-si-le-wo-se Idalion bilingual"}),

    card("Erste Sätze großer Romane", "Unter meinen Jugendbekannten war ein sonderbarer Mensch, dessen Geschichte wohl wert ist, der Vergessenheit entrissen zu werden.", [],
      [F("Alfred Kubin (Zeitgenossen, 5) - Rudolf Großmann - G 58 004 e M f Neue Kunst Freiburg.png", "Alfred Kubin")], [
        src("Project Gutenberg: Die andere Seite", "https://www.gutenberg.org/ebooks/75988"),
        src("Wikipedia: Die andere Seite", "https://de.wikipedia.org/wiki/Die_andere_Seite_(Roman)")
      ], {kind:"quote",byline:"Alfred Kubin · Die andere Seite",wiki:{page:"Die_andere_Seite_(Roman)",language:"de"},summary:""}),

    card("Etymologien und Begriffsgeschichten", "Kiosk", [
      "Das mittelpersische kōšk bezeichnete einen Palast oder einen freistehenden Prachtbau. Das Türkische übernahm das Wort als köşk für einen Gartenpavillon. Reisende und Architekten brachten es nach Westeuropa, wo Kiosk zunächst einen offenen Pavillon in einem Park meinte.",
      "Im 19. Jahrhundert ging der Name auf kleine Verkaufsstände im Straßenraum über. Die Bauform schrumpfte, die öffentliche Zugänglichkeit blieb. Heute bezeichnet Kiosk außerdem selbstbediente Terminals; aus dem Gartenhaus wurde über den Verkaufsstand eine Bedienoberfläche."
    ], [F("Marble Kiosk, Beylerbeyi Palace-exterior 2 (cropped).jpg", "Ein osmanischer Kiosk am Beylerbeyi-Palast"),C("newspaper kiosk street", "Ein Verkaufskiosk")], [
      src("DWDS: Kiosk", "https://www.dwds.de/wb/Kiosk"),
      src("Wikipedia: Kiosk", "https://de.wikipedia.org/wiki/Kiosk")
    ], {summary:"Vom persischen Palast über den türkischen Gartenpavillon zum Verkaufsstand und zum Terminal.",searchTerm:"Kiosk Etymologie persisch köşk Bedeutungswandel"}),

    card("Falsche Modelle mit großer Erklärungskraft", "Prouts Hypothese", [
      "William Prout bemerkte 1815, dass viele gemessene Atomgewichte nahe bei ganzen Vielfachen des Wasserstoffgewichts lagen. Er vermutete deshalb einen gemeinsamen Urstoff, aus dessen Wasserstoffeinheiten alle Elemente aufgebaut seien. Das Modell gab den Atomgewichten eine einfache Ordnung und regte genauere Messungen an.",
      "Chlor mit einem mittleren Atomgewicht von etwa 35,45 widersprach der strengen Ganzzahligkeit. Erst die Entdeckung der Isotope erklärte beides: Einzelne Nuklide besitzen annähernd ganzzahlige Massenzahlen, natürliche Elemente bestehen jedoch oft aus mehreren Isotopen. Der Name Proton erinnert an Prouts vermuteten Urbaustein."
    ], [F("Henry Wyndham Phillips (1820-1868) - William Prout (1784–1850) - X269 - Royal College of Physicians.jpg", "William Prout")], [
      src("Encyclopaedia Britannica: Prout's hypothesis", "https://www.britannica.com/science/Prouts-hypothesis"),
      src("Wikipedia: Proutsche Hypothese", "https://de.wikipedia.org/wiki/Proutsche_Hypothese")
    ], {summary:"Alle Atomgewichte sollten ganze Vielfache des Wasserstoffgewichts sein.",searchTerm:"Prout hypothesis atomic weights isotopes history"}),

    card("Geo Atlas", "Qattara-Senke", [
      "Die Qattara-Senke liegt in der Westlichen Wüste Ägyptens, südlich der Mittelmeerküste. Ihr tiefster Punkt befindet sich 133 Meter unter dem Meeresspiegel. Steile Ränder, Salzpfannen und weicher Untergrund erschweren eine Durchquerung.",
      "Im Zweiten Weltkrieg sicherte die Senke bei El Alamein die südliche Flanke der Front, weil große motorisierte Verbände dort kaum passieren konnten. Seit dem frühen 20. Jahrhundert wurden Kanäle oder Tunnel vom Mittelmeer vorgeschlagen, um ein Gefälle für Wasserkraft zu nutzen. Keiner dieser Eingriffe wurde gebaut."
    ], [F("Qattara depression map.png", "Lage und Höhenstufen der Qattara-Senke"),C("Qattara Depression Egypt landscape", "Die Qattara-Senke")], [
      src("Encyclopaedia Britannica: Qattara Depression", "https://www.britannica.com/place/Qattara-Depression"),
      src("Wikipedia: Qattara Depression", "https://en.wikipedia.org/wiki/Qattara_Depression")
    ], {summary:"Eine Senke unter dem Meeresspiegel prägte 1942 die Front von El Alamein.",searchTerm:"Qattara Depression map El Alamein hydropower project"}),

    card("Grenzfälle", "The Battle of the Somme · Dokument und Inszenierung", [
      "Geoffrey Malins und John McDowell drehten 1916 einen langen offiziellen Film über die britische Somme-Offensive. Zu sehen sind Vorbereitungen, Artilleriefeuer, Verwundete und Gefangene. Ein Teil der Aufnahmen entstand nahe der Front und bewahrte Vorgänge, die sonst nur beschrieben worden wären.",
      "Die berühmte Einstellung angreifender Soldaten wurde hinter den Linien inszeniert; eine Kamera hätte den wirklichen Sturmangriff kaum aus dieser Position filmen können. Der Film ist deshalb zugleich Quelle und Rekonstruktion. Gerade die Montage beider Arten von Bildern zeigt, weshalb historisches Filmmaterial nach seiner Entstehungssituation beurteilt werden muss."
    ], [F("The Battle of the Somme film image2.jpg", "Eine Einstellung aus The Battle of the Somme")], [
      src("Imperial War Museums: The Battle of the Somme", "https://film.iwmcollections.org.uk/record/1310/media_id/18914"),
      src("UNESCO Memory of the World", "https://www.unesco.org/en/memory-world/battle-somme")
    ], {summary:"Der Kriegsfilm von 1916 enthält Frontaufnahmen und eigens nachgestellte Szenen.",searchTerm:"Battle of the Somme 1916 film staged scenes Malins McDowell"}),

    card("Großartige Bilder und Design", "E. McKnight Kauffer · The North Downs", [
      "Das Plakat entstand 1915 für die Londoner U-Bahn. Kauffer zerlegte die Hügellandschaft südlich von London in große, scharf begrenzte Farbflächen. Die Staffelung der Flächen ersetzt die übliche atmosphärische Tiefe eines Landschaftsbildes.",
      "Die Eisenbahn erscheint weder als Zug noch als Gleis. Das Plakat verkauft einen erreichbaren Landschaftsraum und lässt die Verkehrstechnik außerhalb des Bildes. Seine kantige Formensprache entstand kurz nach Kauffers Begegnung mit Kubismus und Vortizismus."
    ], [F("Poster, The North Downs, London Underground, 1915 (CH 18447297-2).jpg", "E. McKnight Kauffer: The North Downs")], [
      src("The Metropolitan Museum of Art", "https://www.metmuseum.org/art/collection/search/833917"),
      src("Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Poster,_The_North_Downs,_London_Underground,_1915_(CH_18447297-2).jpg")
    ], {summary:"E. McKnight Kauffer · Plakat für die Londoner U-Bahn · 1915",searchTerm:"E McKnight Kauffer The North Downs poster 1915"}),

    card("Gute einfache Cartoons", "Caran d’Ache · Un dîner en famille · 14. Februar 1898", [
      "Im ersten Bild ordnet der Gastgeber an: „Vor allem! Reden wir nicht über die Dreyfus-Affäre!“ Im zweiten liegt das Mobiliar umgestürzt, die Gäste prügeln sich, und darunter steht nur: „Sie haben darüber geredet.“",
      "Der Cartoon erschien während der Dreyfus-Affäre in Le Figaro. Er zeigt keine politische Position im Streit, sondern dessen Wirkung auf eine bürgerliche Tischgesellschaft. Der Sprung zwischen den beiden Bildern erledigt die ganze Pointe."
    ], [F("Caran-d-ache-dreyfus-supper.jpg", "Caran d’Ache: Un dîner en famille")], [
      src("Wikimedia Commons: vollständiger Cartoon", "https://commons.wikimedia.org/wiki/File:Caran-d-ache-dreyfus-supper.jpg"),
      src("BnF: Caran d’Ache", "https://data.bnf.fr/en/11941315/caran_d_ache/")
    ], {summary:"„Surtout! ne parlons pas de l’affaire Dreyfus!“ — „Ils en ont parlé.“",searchTerm:"Caran d'Ache Un dîner en famille 1898 Dreyfus"}),

    card("Historische Anekdoten", "New York–Paris-Rennen · 1908", [
      "Am 12. Februar 1908 starteten sechs Automobile am verschneiten Times Square zu einem Rennen nach Paris. Die geplante Fahrt über das zugefrorene Beringmeer erwies sich als unmöglich; die Wagen wurden per Schiff von Alaska nach Wladiwostok gebracht. Danach führte die Strecke durch Sibirien und Europa.",
      "Als der amerikanische Thomas Flyer am 30. Juli Paris erreichte, wollte ein Polizist ihn wegen eines fehlenden Scheinwerfers anhalten. Die Mannschaft befestigte das Fahrrad eines Passanten am Wagen und erklärte dessen Lampe zum zweiten Licht. Der Thomas Flyer gewann nach 169 Tagen; Zeitgutschriften und Strafen setzten das deutsche Protos-Team auf den zweiten Platz."
    ], [F("1908 New York to Paris Race, grid.jpg", "Der Start des New-York–Paris-Rennens"),F("New York - Paris 1908, le 31 juillet l'arrivée de la Thomas Flyer à Paris.jpg", "Der Thomas Flyer in Paris")], [
      src("Smithsonian Magazine: The Greatest Auto Race on Earth", "https://www.smithsonianmag.com/history/the-greatest-auto-race-on-earth-116923756/"),
      src("Wikipedia: 1908 New York to Paris Race", "https://en.wikipedia.org/wiki/1908_New_York_to_Paris_Race")
    ], {summary:"Sechs Automobile starteten im Winter von New York zu einer Fahrt über drei Kontinente.",searchTerm:"1908 New York Paris automobile race Thomas Flyer bicycle lamp"}),

    card("Interessante Listen", "Die Zeitkapsel unter Kleopatras Nadel · London, 1878", [
      "Bei der Aufstellung des ägyptischen Obelisken am Victoria Embankment wurde 1878 eine Zeitkapsel unter seinem Sockel versenkt. Die Liste ihres Inhalts hält fest, was die Beteiligten für ein knappes Bild des viktorianischen London hielten.",
      "Enthalten sind: ein Satz britischer Münzen; eine Rupie; Ausgaben von zehn Tageszeitungen; eine Eisenbahnfahrkarte; ein Stadtplan; Fotografien von zwölf damals als schön geltenden Engländerinnen; Haarspangen und andere Toilettenartikel; eine Schachtel Zigarren; mehrere Tabakpfeifen; ein Babyfläschchen; Spielzeug; Werkzeuge; ein hydraulischer Wagenheber; Drahtseile; ein Modell des Obelisken; Bibeln in mehreren Sprachen; Bradshaws Eisenbahnfahrplan; Whitakers Almanack; ein Verzeichnis der Londoner Einwohner und eine kurze Geschichte des Transports des Obelisken."
    ], [F("Cleopatra's Needle, London, UK - Diliff.jpg", "Kleopatras Nadel am Victoria Embankment")], [
      src("Wikipedia: Cleopatra's Needle, London", "https://en.wikipedia.org/wiki/Cleopatra%27s_Needle,_London"),
      src("Historic England: Cleopatra's Needle", "https://historicengland.org.uk/listing/the-list/list-entry/1357345")
    ], {summary:"Eine Zeitkapsel von 1878 enthält den Stadtplan, Tageszeitungen und Gegenstände des Londoner Alltags.",searchTerm:"Cleopatra's Needle London time capsule contents 1878"}),

    card("Interessante Sprachen und Sprachmerkmale", "Cusco-Quechua: -mi, -si, -chá", [
      "Cusco-Quechua wird in den südlichen peruanischen Anden um Cusco gesprochen. Drei angehängte Partikeln zeigen, auf welcher Grundlage eine Aussage gemacht wird. Sie verändern weder die handelnde Person noch die Zeitform des Verbs.",
      "Pay-mi hamun. — Er oder sie kommt; der Sprecher legt sich auf die Aussage fest.\nPay-si hamun. — Er oder sie kommt, heißt es; die Information stammt von anderen.\nPay-chá hamun. — Er oder sie kommt vermutlich; der Sprecher folgert oder vermutet es."
    ], [C("Quechua people Cusco Peru", "Quechua-Sprecher im Raum Cusco"),C("Cusco Region Peru map", "Die Region Cusco in Peru")], [
      src("Martina Faller: Semantics and Pragmatics of Evidentials in Cuzco Quechua", "https://personalpages.manchester.ac.uk/staff/martina.t.faller/documents/Thesis.pdf"),
      src("Glottolog: Cusco Quechua", "https://glottolog.org/resource/languoid/id/cusc1236")
    ], {summary:"Drei kurze Partikeln unterscheiden Festlegung, Hörensagen und Vermutung.",languageInfo:[
      ["Ort","Südperu, besonders die Region Cusco"],
      ["-mi","Pay-mi hamun · pay-ASSERT kommen.3 · Er oder sie kommt; dafür stehe ich ein."],
      ["-si","Pay-si hamun · pay-REPORT kommen.3 · Er oder sie kommt, heißt es."],
      ["-chá","Pay-chá hamun · pay-CONJECT kommen.3 · Er oder sie kommt vermutlich."]
    ],searchTerm:"Cusco Quechua mi si cha evidential examples"}),

    card("InternetArchäologie", "Mechanical Music Digest", [
      "Mechanical Music Digest ist eine moderierte englischsprachige Mailingliste über selbstspielende Klaviere, Drehorgeln, Spieldosen und verwandte Mechanik. Sie begann am 17. April 1995 mit 51 Abonnenten.",
      "Die Website enthält ein öffentliches Textarchiv, das nach Jahr, Monat, Betreff und Autor geordnet ist. Beim Öffnen sieht man schlichte HTML-Seiten mit Reparaturfragen, Ersatzteilhinweisen und Diskussionen über historische Instrumente. Bilder liegen häufig als verlinkte Dateien bei. Das Archiv wird weiterhin ergänzt."
    ], [C("player piano pneumatic mechanism", "Die Mechanik eines selbstspielenden Klaviers")], [
      src("Mechanical Music Digest", "https://www.mmdigest.com/"),
      src("Mechanical Music Digest: 25 Jahre", "https://www.mmdigest.com/archives/Digests/202005/2020.05.15.01.html")
    ], {summary:"Eine seit 1995 geführte Mailingliste bewahrt Reparaturwissen über mechanische Musikinstrumente.",searchTerm:"Mechanical Music Digest player piano archive 1995"}),

    card("Künstler und drei Werke", "Ellen Thesleff", [
      "Ellen Thesleff gehörte um 1900 zur ersten Generation finnischer Künstlerinnen mit einer internationalen Ausbildung. Die drei frühen Arbeiten zeigen, wie stark sie Gesichter und Landschaften über Tonwerte statt über erzählerische Einzelheiten aufbaute. Später arbeitete sie mit kräftigerer Farbe und entwickelte eine eigene Form des Farbholzschnitts."
    ], [F("Echo Ellen Thesleff 1891.jpg", "Echo, 1891"),F("Thyra Elisabeth Ellen Thesleff 1892.jpg", "Thyra Elisabeth, 1892"),F("Omakuva Ellen Thesleff 1894-1895 Ateneum.webp", "Selbstbildnis, 1894–1895")], [
      src("Finnish National Gallery: Ellen Thesleff", "https://www.kansallisgalleria.fi/en/search?authors[]=Ellen%20Thesleff"),
      src("Ateneum: Modern Women", "https://ateneum.fi/en/touring-exhibitions-archive/modern-women-helene-schjerfbeck-elga-sesemann-sigrid-schauman-ellen-thesleff/")
    ], {summary:"Ellen Thesleff · 1869–1954",works:["Echo · 1891","Thyra Elisabeth · 1892","Selbstbildnis · 1894–1895"],searchTerm:"Ellen Thesleff Echo Thyra Elisabeth self portrait Ateneum"}),

    card("Literarische und filmische Tropen und Typenszenen", "Bildvergrößerung als Enthüllung", [
      "Julio Cortázars Erzählung Las babas del diablo von 1959 lässt einen Fotografen seine Aufnahme wiederholt betrachten, bis die festgehaltene Szene eine andere Geschichte freigibt. Michelangelo Antonioni machte daraus 1966 in Blow-Up eine Folge immer größerer Abzüge. Eine Gestalt und möglicherweise eine Leiche werden sichtbar; zugleich zerfällt das Bild im Filmkorn.",
      "Blade Runner verwandelte das Verfahren 1982 in eine technische Fantasie. Der Esper-Rechner gewinnt aus einem zweidimensionalen Foto seitliche Ansichten, die gar nicht aufgenommen wurden. Spätere Krimiserien übernahmen davon vor allem das Kommando „vergrößern“ und ließen fehlende Bildinformation als scharfe Einzelheit erscheinen. Aus dem zweifelhaften Beweisstück wurde ein allwissendes Bild."
    ], [C("photographic enlarger darkroom", "Ein Fotovergrößerer in der Dunkelkammer")], [
      src("Criterion: Blow-Up in the Details", "https://www.criterion.com/current/posts/4992-blow-up-in-the-details"),
      src("Wikipedia: Esper machine", "https://en.wikipedia.org/wiki/Blade_Runner")
    ], {summary:"Ein Foto wird so lange vergrößert, bis es einen verborgenen Vorgang zu zeigen scheint.",searchTerm:"photo enhancement trope Blow-Up Blade Runner Esper history"}),

    card("Märchen und Sagen in ethnografischen Quellen", "Okikurumi, Samayunguru und der Hai · Ainu", [
      "Die Erzählung stammt aus dem Saru-Gebiet in Hidaka, im Süden der japanischen Insel Hokkaidō. Basil Hall Chamberlain schrieb sie nach einer Wiedergabe seines Ainu-Gewährsmanns Ishanashte am 24. November 1886 aus dem Gedächtnis nieder. Okikurumi und Samayunguru erscheinen darin als benachbarte Kulturhelden mit sehr verschiedenem Urteil.",
      "Samayunguru findet einen gestrandeten Hai und nimmt das Fleisch an sich. Okikurumi tadelt ihn, weil der Hai als Meeresgabe nach rituellem Brauch behandelt werden muss. Die Handlung erklärt eine Vorschrift durch den Fehler einer bekannten Gestalt."
    ], [C("Ainu fishermen Hokkaido historical photograph", "Ainu-Fischer auf Hokkaidō"),C("Saru River Hokkaido", "Der Saru in Hidaka")], [
      src("Digitalisat · The Folk-Lore Journal, Band 6", "https://archive.org/details/folklorejournal06folkuoft/page/42/mode/2up"),
      src("Wikisource-Transkription", "https://en.wikisource.org/wiki/The_Folk-Lore_Journal/Volume_6/Aino_Folk-Tales")
    ], {summary:"Eine 1886 im Saru-Gebiet auf Hokkaidō aufgezeichnete Ainu-Erzählung.",original:{label:"Vollständiger Originaltext · Basil Hall Chamberlain, 1888",source:"https://archive.org/details/folklorejournal06folkuoft/page/42/mode/2up",remote:{wikiPage:"The_Folk-Lore_Journal/Volume_6/Aino_Folk-Tales",wikiLanguage:"en",start:"xxvii.—Okikurumi, Samayunguru, and the Shark.",end:"III.— TALES OF THE PANAUMBE AND PENAUMBE CYCLE.",flexibleMarkers:true,reflow:true,fetchLabel:"Wikisource-Transkription"}},searchTerm:"Okikurumi Samayunguru shark Ainu Chamberlain Saru"}),

    card("Philosophische Begriffe", "Supervenienz", [], [C("supervenience philosophy diagram", "Ein Schema der Supervenienz")], [
      src("Wikipedia: Supervenienz", "https://de.wikipedia.org/wiki/Supervenienz"),
      src("Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/entries/supervenience/")
    ], {summary:"B-Eigenschaften supervenieren auf A-Eigenschaften, wenn zwei Gegenstände mit denselben A-Eigenschaften stets dieselben B-Eigenschaften besitzen.",wiki:{page:"Supervenienz",language:"de"},searchTerm:"Supervenienz Philosophie Definition Beispiele"}),

    card("Rhetorische und poetische Verfahren", "„Quos ego—! Sed motos praestat componere fluctus.“", [
      "Neptun beginnt im ersten Buch der Aeneis eine Drohung gegen die Winde: „Euch will ich —!“ Dann bricht er ab und wendet sich dem aufgewühlten Meer zu. Die ausgesparte Strafe bleibt verständlich, weil Satzanfang und Lage sie bereits erwarten lassen.",
      "Die Figur heißt Aposiopesis. Quintilian beschreibt sie als abgebrochene Rede, bei der das Verschwiegene aus dem Vorausgehenden erkennbar wird. Bei Vergil zeigt der Abbruch zugleich Neptuns Rang: Er muss die Drohung nicht aussprechen und stellt zuerst die Ordnung des Meeres wieder her."
    ], [F("Neptune calming the tempest which Aeolus raised against Aeneas' fleet from Book I of the Aeneid MET DP273857.jpg", "Neptun beruhigt den Sturm gegen die Flotte des Aeneas")], [
      src("Perseus: Vergil, Aeneis 1", "https://www.perseus.tufts.edu/hopper/text?doc=Verg.%20A.%201.135"),
      src("Quintilian, Institutio Oratoria 9.2", "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Quintilian/Institutio_Oratoria/9B*.html")
    ], {summary:"Aposiopesis · Vergil, Aeneis 1,135",searchTerm:"Quos ego aposiopesis Quintilian Aeneid 1 135"}),

    card("Sagengestalten, Legenden und Märchen weltweit", "Amirani · Georgien", [
      "Amirani ist der Held einer georgischen Sagenfolge, die besonders ausführlich in Swanetien im Großen Kaukasus überliefert wurde. In vielen Fassungen ist er ein Sohn der Jagdgöttin Dali und wächst mit ungewöhnlicher Kraft auf. Er kämpft gegen Devis, riesenhafte Gegner, und befreit Menschen oder eine geraubte Frau aus ihrer Gewalt.",
      "Schließlich fordert Amirani die höchste göttliche Macht heraus. Zur Strafe wird er in einer Höhle an einen Felsen oder an einen Pfahl geschmiedet. Sein Hund Q’ursha leckt die Kette dünn, bis sie beinahe reißt; regelmäßig wird sie erneuert. Manche örtlichen Fassungen verlegen seine Gefangenschaft unter den Kasbek. Der Berg macht den gefesselten Helden zu einer Gestalt, deren Befreiung immer bevorsteht und nie eintritt."
    ], [C("Amirani monument Georgia", "Eine georgische Darstellung Amiranis"),F("Mount Kazbek, August 2019.jpg", "Der Kasbek im Großen Kaukasus")], [
      src("Georgian Encyclopedia: Amirani", "https://georgianencyclopedia.ge/en/form_eng/244"),
      src("Encyclopaedia Iranica: Amirani", "https://iranicaonline.org/articles/amirani")
    ], {summary:"Der georgische Held wird nach seinem Aufstand gegen Gott im Kaukasus angekettet.",wiki:{page:"Amirani",language:"en"},searchTerm:"Amirani Georgian mythology Q'ursha Kazbek legend"}),

    card("SchlechtesWritingSeziert", "Now You See Me · Dylan allein im Verhörraum", [
      "Die Schlusspointe erklärt FBI-Agent Dylan Rhodes zum Leiter des Plans, den er den ganzen Film über verfolgt hat. Problematisch sind dabei Szenen, in denen er ohne eingeweihten Beobachter überrascht oder wütend auf Hinweise reagiert. Diese Reaktionen täuschen nicht eine Figur, sondern nur das Publikum; nach der Enthüllung besitzen sie keinen Grund innerhalb der Handlung."
    ], [C("stage magician playing cards public domain", "Bühnenmagie mit Spielkarten")], [
      src("Drehbuch · Now You See Me", "https://www.scriptslug.com/script/now-you-see-me-2013"),
      src("Lionsgate: Now You See Me", "https://www.lionsgate.com/movies/now-you-see-me")
    ], {summary:"Der spätere Drahtzieher spielt sein Unwissen auch dann, wenn niemand in der Szene getäuscht werden muss.",works:[
      "Dylans private Reaktionen entfallen; allein bleibt sein Wissen offen, während er vor anderen glaubhaft ermittelt.",
      "Alma Dray führt die Untersuchung. Dylan behindert sie nur dort, wo konkrete Beweise seinen Plan gefährden.",
      "Dylan beginnt als ehrlicher Ermittler und entscheidet sich erst im Verlauf, den Plan der Horsemen zu übernehmen."
    ],searchTerm:"Now You See Me Dylan Rhodes reveal plot hole interrogation scene"}),

    card("Seltene Musikstile", "Ahellil · Gourara, Algerien", [
      "Ahellil wird in den Oasen des Gourara um Timimoun im Südwesten Algeriens gepflegt, besonders von Zenati-sprachigen Gemeinschaften. Bei nächtlichen Festen steht ein Vorsänger mit dem Flötenspieler im Inneren eines Kreises. Der Chor antwortet, klatscht einen regelmäßigen Puls und bewegt sich langsam seitwärts.",
      "Eine vollständige Aufführung gliedert sich tatsächlich in drei namentlich unterschiedene Abschnitte: lemserreh beginnt mit kurzen bekannten Gesängen, aougrout wird langsamer, tra dauert bis zum Morgengrauen und ist den erfahrensten Sängern vorbehalten. Im Video ist von Beginn an das Verhältnis zwischen Vorsänger, Flöte und Chor zu hören."
    ], [Y("rFrgG2V4tx4", "Ahellil aus dem Gourara")], [
      src("UNESCO: Ahellil of Gourara", "https://ich.unesco.org/en/RL/ahellil-of-gourara-00121"),
      src("YouTube: Ahellil", "https://www.youtube.com/watch?v=rFrgG2V4tx4")
    ], {summary:"Nächtlicher Wechselgesang aus den Oasen um Timimoun.",searchTerm:"Ahellil Gourara Timimoun Algeria UNESCO"}),

    card("Trends in Art", "Isabella Lozano · I am a jug", [
      "Isabella Lozano entwickelte die Arbeit 2026 im Masterstudiengang Print am Royal College of Art. Auf dem Bild nimmt ihr Körper die Haltung eines Saftkrugs an; Beschriftung und Warenästhetik machen aus der Figur ein Produkt. Die uneinheitlichen kulturellen Zeichen lassen keine eindeutige Herkunftsangabe zu.",
      "Lozano bezieht sich auf Migration und auf die Sprache des Exports. Entscheidend ist der Maßstabswechsel: Ein alltäglicher Behälter wird zur Körperpose, während die Person wie eine Verpackung gelesen werden soll. Die Arbeit gehört zur RCA-Abschlussausstellung 2026 und nicht zu einer nachträglich behaupteten Stilrichtung."
    ], [I("https://rca-media2.rca.ac.uk/images/Isabella_Lozano_MA_Print_I_am_a_jug_Mixed_Media.original.jpg", "https://www.rca.ac.uk/news-and-events/news/announcing-rca2026-school-of-arts-humanities-show/", "Isabella Lozano: I am a jug", "Royal College of Art")], [
      src("Royal College of Art: RCA2026 School of Arts & Humanities", "https://www.rca.ac.uk/news-and-events/news/announcing-rca2026-school-of-arts-humanities-show/")
    ], {summary:"Isabella Lozano · I am a jug · Mixed Media · RCA2026",searchTerm:"Isabella Lozano I am a jug RCA2026"}),

    card("UnsichtbareKonventionen", "Warum Interviewte knapp an der Kamera vorbeisehen", [
      "In vielen Dokumentarfilmen sitzt die fragende Person dicht neben der Kamera. Der Blick des Interviewten geht deshalb knapp am Objektiv vorbei. Im fertigen Bild bleibt ein Gespräch erkennbar, während der Zuschauer die Antwort beobachtet, ohne selbst direkt angesprochen zu werden.",
      "Ein Blick genau in die Linse verändert dieses Verhältnis: Die Antwort richtet sich nun an den Zuschauer. Errol Morris entwickelte dafür den Interrotron. Ein halbdurchlässiger Spiegel legt das Livebild des Interviewers über das Objektiv. Der Interviewte sieht weiterhin sein Gegenüber an und blickt dabei zugleich gerade in die Kamera."
    ], [C("documentary interview camera setup eyeline", "Kamera und Blickachse bei einem Interview")], [
      src("Errol Morris: The Interrotron", "https://www.errolmorris.com/content/eyecontact/interrotron.html"),
      src("Nieman Storyboard: Eye contact in documentary interviews", "https://niemanstoryboard.org/stories/errol-morris-interrotron-documentary-interviews/")
    ], {summary:"Die Position des Interviewers entscheidet, ob ein Blick als Gespräch oder als direkte Ansprache erscheint.",searchTerm:"documentary interview eyeline off camera Interrotron Errol Morris"}),

    card("Urban Legends", "Rudolph Fentz · der Zeitreisende am Times Square", [
      "Die Geschichte berichtet von einem Mann in Kleidung des 19. Jahrhunderts, der 1950 am Times Square vor ein Auto tritt und stirbt. In seinen Taschen sollen alte Münzen, Geschäftsbriefe und eine Adresse gelegen haben. Ein Ermittler findet angeblich heraus, dass Rudolph Fentz 1876 spurlos verschwunden war.",
      "Der Fall wurde lange als ungelöstes Ereignis oder Beleg für eine Zeitreise verbreitet. Der Stoff stammt jedoch aus Jack Finneys Kurzgeschichte I’m Scared von 1951. Ein Heft von Ralph M. Holland gab ihn 1953 ohne klare Kennzeichnung als wahre Begebenheit wieder; spätere Sammlungen übernahmen diese Fassung. Aus einer Erzählung wurde durch weggelassene Herkunft eine moderne Legende."
    ], [C("Times Square New York 1950 photograph", "Der Times Square um 1950")], [
      src("Snopes: The Strange Tale of Rudolph Fentz", "https://www.snopes.com/fact-check/time-travelers/"),
      src("Wikipedia: Rudolph Fentz", "https://en.wikipedia.org/wiki/Rudolph_Fentz")
    ], {summary:"Eine Zeitreisegeschichte wurde zur angeblich dokumentierten New Yorker Polizeiakte.",searchTerm:"Rudolph Fentz Jack Finney I'm Scared origin urban legend"}),

    card("Vergessene Komponisten", "Adolf Wiklund · Klavierkonzert Nr. 1 e-Moll op. 10", [
      "Adolf Wiklund schrieb sein erstes Klavierkonzert 1906 und 1907 für sich selbst als Solisten. Der erste Satz, Allegro energico, beginnt mit einem knappen Orchestergedanken, den das Klavier aufnimmt und in die weitere motivische Arbeit zieht. Solopart und Orchester wechseln nicht bloß zwischen Begleitung und Schaustück; beide führen das thematische Material fort.",
      "Wiklunds Harmonik gehört zur schwedischen Spätromantik, doch die wiederkehrenden Motive halten den ausgedehnten Satz eng zusammen. Das Konzert verdient Aufmerksamkeit, weil sein anspruchsvoller Klavierpart aus der Form heraus entwickelt ist und nicht nachträglich über sie gelegt wirkt. Im Video erklingt das ganze Werk ab 0:00."
    ], [Y("lbPvzVNGmtM", "Adolf Wiklund: Klavierkonzert Nr. 1 e-Moll op. 10")], [
      src("Swedish Musical Heritage: Adolf Wiklund", "https://www.swedishmusicalheritage.com/composers/wiklund-adolf/"),
      src("YouTube: Klavierkonzert Nr. 1", "https://www.youtube.com/watch?v=lbPvzVNGmtM")
    ], {summary:"Klavierkonzert Nr. 1 e-Moll op. 10 · Allegro energico",searchTerm:"Adolf Wiklund piano concerto 1 op 10 score history"}),

    card("VerloreneTechniken", "Flugzeuge vor dem Radar hören", [
      "An der englischen Küste entstanden nach dem Ersten Weltkrieg große Betonspiegel, die das Motorengeräusch anfliegender Flugzeuge an einem Brennpunkt sammelten. Ein Beobachter bewegte dort ein Hörrohr oder ein Mikrofon und bestimmte aus der lautesten Richtung die ungefähre Peilung.",
      "Die Spiegel konnten bei günstigem Wetter einige Minuten Vorwarnzeit liefern. Wind, Brandung und zunehmender Verkehr überdeckten jedoch schwache Motorengeräusche. Außerdem verriet die Richtung noch keine genaue Entfernung oder Flughöhe. Das britische Radarnetz ersetzte die akustische Ortung in den späten 1930er Jahren."
    ], [F("Large acoustic mirror -Denge -Kent -England-19July2009.jpg", "Der große akustische Spiegel bei Denge in Kent")], [
      src("RAF Museum: History of Radar", "https://www.rafmuseum.org.uk/research/online-exhibitions/history-of-radar/"),
      src("Historic England: Sound mirrors at Denge", "https://historicengland.org.uk/listing/the-list/list-entry/1005140")
    ], {summary:"Betonspiegel an der Küste bündelten das Motorengeräusch anfliegender Flugzeuge.",searchTerm:"Denge sound mirrors acoustic aircraft detection history"}),

    card("VisuelleIdeenDieIchKlauenWill", "Mary Ellen Bute · Abstronic", [
      "Mary Ellen Bute ließ 1952 die Leuchtspur eines Kathodenstrahl-Oszilloskops filmen. Die elektrische Kurve erscheint als bewegte Linie und als helle geometrische Figur. Bei der optischen Nachbearbeitung legte Bute diese Aufnahme über farbige Hintergründe.",
      "Die brauchbare Bildidee liegt im Wechsel des Werkzeugs: Ein Messgerät zeichnet das Grundmaterial, die Kamera isoliert es aus seinem technischen Zusammenhang, und Farbe kommt erst in einem zweiten Arbeitsgang hinzu. Abstronic nutzt dazu Musik von Aaron Copland und Don Gillis."
    ], [C("oscilloscope Lissajous figure photograph", "Eine Leuchtspur auf einem Oszilloskop")], [
      src("Center for Visual Music: Mary Ellen Bute", "https://www.centerforvisualmusic.org/ButePhotography.htm"),
      src("Center for Visual Music: Abstronic", "https://vimeo.com/1185349287")
    ], {summary:"Oszilloskopspur, optische Kopie und nachträgliche Farbe · 1952",searchTerm:"Mary Ellen Bute Abstronic oscilloscope 1952"}),

    card("Wichtige Akkorde und Akkordfolgen", "Barry Harris’ Sixth-Diminished-Folge", [
      "In C lautet die Tonleiter C–D–E–F–G–As–A–H–C. Harmonisiert wird sie durch den Wechsel zwischen Umkehrungen von C6, also C–E–G–A, und dem verminderten Septakkord D–F–As–H. Jeder Ton erhält dadurch einen Akkord, ohne dass eine gewöhnliche diatonische Stufenfolge entsteht.",
      "Barry Harris nutzte dieses Verfahren, um Bebop-Melodien mehrstimmig zu setzen und Akkordlagen schrittweise zu bewegen. Das Video beginnt mit der harmonisierten C-Tonleiter und zeigt anschließend die Anwendung in einem Standard. Es startet bei 0:00."
    ], [Y("AF67azWnMvw", "Barry Harris erklärt die Sixth-Diminished Scale")], [
      src("Open Studio: Barry Harris Sixth Diminished Scale", "https://www.openstudiojazz.com/the-barry-harris-sixth-diminished-scale/"),
      src("YouTube: Barry Harris Workshop", "https://www.youtube.com/watch?v=AF67azWnMvw")
    ], {summary:"C6 und D°7 wechseln sich durch eine achttönige Skala ab.",searchTerm:"Barry Harris sixth diminished scale C6 D diminished examples"}),

    card("Writing Tipps", "Konsonanten als Gegenrhythmus setzen", [
      "Lies den Absatz laut und markiere nur Konsonanten, die an betonten Stellen wiederkehren. Verfolge einen Laut bis zu seinem Verschwinden und späteren Wiedereinsetzen. Eine auffällige Häufung in benachbarten Wörtern wirkt leicht wie eine beabsichtigte Alliteration; größere Abstände tragen den Satz oft, ohne sich vorzudrängen.",
      "Robert Louis Stevenson untersucht an Miltons Areopagitica, wie wiederkehrende Konsonanten unter Satzbau und Sprechrhythmus ein zweites hörbares Muster bilden. Die Prüfung gehört ans Ende der Überarbeitung, wenn Wortwahl und Syntax bereits feststehen."
    ], [F("Robert Louis Stevenson by Sargent.jpg", "Robert Louis Stevenson, gemalt von John Singer Sargent")], [
      src("Project Gutenberg: Essays in the Art of Writing", "https://www.gutenberg.org/ebooks/492"),
      src("Internet Archive: Essays in the Art of Writing", "https://archive.org/details/essaysinartofwri00stev")
    ], {summary:"Wiederkehrende Konsonanten bilden unter der Syntax einen zweiten Rhythmus.",writingSource:{label:"Wortlaut · Robert Louis Stevenson, On Some Technical Elements of Style in Literature",source:"https://archive.org/details/essaysinartofwri00stev",remote:{url:"https://www.gutenberg.org/cache/epub/492/pg492.txt",start:"There is then another element of comeliness hitherto overlooked in this analysis:",end:"I stop from weariness, for more might yet be said.",flexibleMarkers:true,reflow:true,fetchLabel:"Project-Gutenberg-Transkription"}},searchTerm:"Robert Louis Stevenson technical elements style consonants prose rhythm"})
  );
})();

(() => {
  "use strict";

  window.KARTEN.push(
    {
      category:"Aphorismen",kind:"quote",
      title:"„Die Sonne und der Tod lassen sich nicht fest ansehen.“",
      byline:"François de La Rochefoucauld · Maxime 26",
      detail:[],
      media:[C("François de La Rochefoucauld portrait","François de La Rochefoucauld")],
      sources:[S("La Rochefoucauld: Maximes, Nr. 26 · Wikisource","https://fr.wikisource.org/wiki/Page:La_Rochefoucauld_-_Maximes_et_R%C3%A9flexions_morales,_M%C3%A9nard,_1817.djvu/43")]
    },
    {
      category:"Philosophische Begriffe",title:"Clinamen",
      summary:"Die kleinste unbestimmte Abweichung eines fallenden Atoms von seiner geraden Bahn.",
      detail:[],wiki:{page:"Clinamen",language:"de",count:2},
      media:[C("Lucretius De rerum natura manuscript","Handschrift von Lukrez’ De rerum natura")],
      sources:[S("Wikipedia: Clinamen","https://de.wikipedia.org/wiki/Clinamen"),S("Lukrez: De rerum natura, Buch II · Perseus","https://www.perseus.tufts.edu/hopper/text?doc=Lucr.%202.216")]
    },
    {
      category:"Künstler und drei Werke",title:"Fernand Khnopff",
      summary:"Memories · I Lock My Door Upon Myself · Des Caresses",
      detail:[
        "Memories (1889) reiht sieben Frauen auf einem Tennisplatz nebeneinander; jede Figur geht auf dieselbe Schwester des Malers zurück. Haltung, Blickrichtung und Abstand zerlegen eine Gruppenaufnahme in sieben voneinander getrennte Zustände.",
        "I Lock My Door Upon Myself (1891) stellt eine unbewegte Frau hinter Lilien, Mohn und einem abgetrennten Hypnoskopf vor einen verschlossenen Innenraum. Des Caresses (1896) setzt einen androgynen Ödipus an den Körper einer Sphinx mit Leopardenfell. Khnopff behandelt Nähe in allen drei Bildern als streng gebaute Distanz."
      ],
      works:["Memories (Lawn Tennis), 1889","I Lock My Door Upon Myself, 1891","Des Caresses, 1896"],
      media:[C("Fernand Khnopff Memories Lawn Tennis","Memories"),C("Fernand Khnopff I Lock My Door Upon Myself","I Lock My Door Upon Myself"),C("Fernand Khnopff The Caresses 1896","Des Caresses")],
      sources:[S("Petit Palais: Fernand Khnopff","https://www.petitpalais.paris.fr/en/node/1252"),S("Neue Pinakothek: I Lock My Door Upon Myself","https://www.sammlung.pinakothek.de/en/artwork/7yxYJQb4Ym/fernand-khnopff/i-lock-my-door-upon-myself")]
    },
    {
      category:"Erste Sätze großer Romane",kind:"quote",
      title:"Ships at a distance have every man's wish on board.",
      detail:[],wiki:{page:"Their Eyes Were Watching God",language:"en",count:1},
      media:[C("Zora Neale Hurston portrait 1938","Zora Neale Hurston")],
      sources:[S("Wikipedia: Their Eyes Were Watching God","https://en.wikipedia.org/wiki/Their_Eyes_Were_Watching_God"),S("Internet Archive: Their Eyes Were Watching God","https://archive.org/details/their-eyes-were-watching-god-zora-neale-hurston")]
    },
    {
      category:"Seltene Musikstile",title:"Iso-Polyphonie · Südalbanien",
      detail:[
        "Eine führende Stimme eröffnet den Text, eine zweite antwortet oder umspielt sie, während die Gruppe den Iso hält. Bei den Tosken liegt dieser Bordun als durchgehendes e unter den Solostimmen; versetztes Atmen hält ihn ohne hörbare Lücke. In labischen Formen trägt der Chor den Bordun rhythmisch und mit Textsilben.",
        "Ab 0:33 trennt das UNESCO-Video die beweglichen Oberstimmen deutlich vom tiefen Gruppenklang. Hochzeiten, Begräbnisse, Erntefeste und religiöse Feiern bilden die überlieferten Aufführungssituationen."
      ],
      media:[Y("G4V2cE-LmBU","UNESCO · Albanian Folk Iso-polyphony")],
      sources:[S("UNESCO: Albanian folk iso-polyphony","https://ich.unesco.org/en/RL/albanian-folk-iso-polyphony-00155"),S("YouTube: UNESCO-Aufnahme","https://www.youtube.com/watch?v=G4V2cE-LmBU")]
    },
    {
      category:"Vergessene Komponisten",title:"Morfydd Llwyn Owen · Nocturne Des-Dur",
      detail:[
        "Das Nocturne von 1913 beginnt mit einer einsamen Klarinette. Aus ihren tastenden Intervallen wächst eine breite Melodie; eine leichtere, bewegte Fassung unterbricht sie, bevor das Orchester den Hauptgedanken in einen harten Höhepunkt treibt und wieder beruhigt.",
        "Owen verteilt die melodische Linie durch Holzbläser, Harfe und geteilte Streicher, ohne den nächtlichen Grundklang zu verdicken. Sie starb 1918 mit 26 Jahren; viele ihrer rund 250 Kompositionen blieben im Archiv. Das Nocturne besitzt eine geschlossene Orchesterform und gehört regelmäßig neben britische und französische Partituren derselben Jahre."
      ],
      media:[Y("sfa81rpgUGE","Morfydd Llwyn Owen · Nocturne Des-Dur")],
      sources:[S("IMSLP: A Nocturne","https://imslp.org/wiki/A_Nocturne_%28Owen%2C_Morfydd_Llwyn%29"),S("YouTube: BBC National Orchestra of Wales","https://www.youtube.com/watch?v=sfa81rpgUGE"),S("Tŷ Cerdd: Morfydd Owen","https://www.tycerdd.org/morfydd-owen")]
    },
    {
      category:"Großartige Bilder und Design",title:"Margarete Heymann-Loebenstein · Scheibenhenkel-Teekanne",
      detail:[
        "Die Teekanne von 1929/30 besteht aus einer niedrigen, fast kugelförmigen Kanne, einer flachen Tülle und einem kreisrunden Henkel. Der Henkel wiederholt den Querschnitt des Gefäßes als leere Scheibe; schwarze Linien und farbige Ringe legen sich um den hellen Scherben.",
        "Heymann-Loebenstein gründete 1923 mit Gustav und Daniel Loebenstein die Haël-Werkstätten. Dort entstanden einfache Grundformen mit asymmetrischen Griffen, kräftigen Farben und präzisen Spritzdekoren. Form 76 verbindet eine gut greifbare Kanne mit einem Henkel, der als eigenes grafisches Zeichen lesbar bleibt."
      ],
      media:[F("Margarete heymann-löbenstein-marks per hael werkstätten, teiera, marwitz D 1930 ca.jpg","Scheibenhenkel-Teekanne, um 1930")],
      sources:[S("MoMA: Scheibenhenkel Teapot","https://www.moma.org/collection/works/400431"),S("RISD Museum: Teapot, ca. 1930","https://risdmuseum.org/art-design/collection/teapot-2008282"),S("Jüdisches Museum Berlin: Haël-Werkstätten","https://objekte.jmberlin.de/gobject/jmb-obj-109173/Teekanne%2Bmit%2BDeckel%2Baus%2Bder%2BProduktion%2Bder%2BHa%C3%ABl-Werkst%C3%A4tten")]
    },
    {
      category:"Märchen und Sagen in ethnografischen Quellen",title:"Die Frau bei den Papageitauchern · Tlingit",
      summary:"Nach einem Bootsunglück retten die Vögel eine Frau, die sich früher gewünscht hatte, unter ihnen zu sitzen.",
      detail:[
        "Beim Muschelsammeln schlägt eine Brandungswelle das Kanu mehrerer Frauen um. Nur eine überlebt. Papageitaucher nehmen sie am Kliff auf; ihr Häuptling lässt ihr Haar flechten, und sie erhält eine Vogelnase. Im Dorf beginnt bereits das Totenfest.",
        "Der Vater bringt Felle als Sitzplätze für die Vögel. Erst das weiße Haar eines Vorfahren lockt sie hervor: Jeder Vogel steckt sich ein Haar an den Kopf, und der Häuptling gibt die Frau frei. John R. Swanton zeichnete die Erzählung 1904 in Sitka oder Wrangell auf und veröffentlichte sie 1909 als Nummer 25 der Tlingit Myths and Texts."
      ],
      media:[C("Tufted puffin Alaska cliff","Papageitaucher an der Küste Alaskas"),C("Tlingit canoe historical photograph","Historisches Tlingit-Kanu")],
      sources:[S("Wikisource: Story of the Puffin","https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts/25"),S("Project Gutenberg: Tlingit Myths and Texts","https://www.gutenberg.org/ebooks/78871")],
      original:{label:"Vollständiger Originaltext · John R. Swanton, 1909",source:"https://en.wikisource.org/wiki/Tlingit_Myths_and_Texts/Story_of_the_Puffin",remote:{wikiPage:"Tlingit_Myths_and_Texts/Story_of_the_Puffin",wikiLanguage:"en",start:"25. STORY OF THE PUFFIN",fetchLabel:"Wikisource-Transkription"}}
    },
    {
      category:"Sagengestalten, Legenden und Märchen weltweit",title:"Huldra · Skandinavien",
      detail:[],wiki:{page:"Huldra",language:"de",count:3},
      media:[C("Theodor Kittelsen Huldra","Huldra in einer Illustration von Theodor Kittelsen"),C("Huldra Norwegian folklore tail","Huldra mit Kuhschwanz")],
      sources:[S("Wikipedia: Huldra","https://de.wikipedia.org/wiki/Huldra")]
    },
    {
      category:"Historische Anekdoten",title:"Shizō Kanakuri · Marathon in 54 Jahren",
      summary:"Ein abgebrochener olympischer Lauf erhielt 1967 ein förmliches Ende.",
      detail:[
        "Shizō Kanakuri startete 1912 als einer der ersten beiden japanischen Olympiateilnehmer beim Marathon in Stockholm. Nach etwa 30 Kilometern brach er bei großer Hitze zusammen, erholte sich bei einer Familie am Streckenrand und reiste ab, ohne seinen Ausstieg bei der Wettkampfleitung zu melden.",
        "Das schwedische Fernsehen lud ihn 1967 zurück. Der 76-Jährige setzte den Lauf am damaligen Abbruchort fort und überquerte im Stadion die Ziellinie. Die nachträglich verkündete Zeit lautete 54 Jahre, 8 Monate, 6 Tage, 5 Stunden, 32 Minuten und 20,3 Sekunden."
      ],
      media:[C("Shizo Kanakuri 1912 Olympics","Shizō Kanakuri"),C("Stockholm Olympic Stadium 1912 marathon","Olympiastadion Stockholm, 1912")],
      sources:[S("International Society of Olympic Historians: Kanakuri","https://library.olympics.com/digitalCollection/DigitalCollectionAttachmentDownloadHandler.ashx?documentId=3156826&parentDocumentId=848882&skipCopyright=true&skipWatermark=true"),S("Olympedia: Shizō Kanakuri","https://www.olympedia.org/athletes/72487")]
    },
    {
      category:"Literarische und filmische Tropen und Typenszenen",title:"Irisblende",
      summary:"Ein schwarzer Kreis schließt oder öffnet sich um den entscheidenden Teil des Bildes.",
      detail:[
        "Im Stummfilm ersetzte eine Blende vor dem Objektiv den späteren Schnitt oder die Abblende. Als iris in öffnete sie eine Szene aus einem Punkt; als iris out schloss sie den Raum auf ein Gesicht, einen Gegenstand oder den letzten Gag. Der verbleibende Kreis legte fest, was der Zuschauer im Augenblick des Verschwindens behalten sollte.",
        "Buster Keatons Cops endet mit einer Iris um Keatons Grabstein. The Lodger lässt sie um Ivor Novellos Gesicht schließen. Warner-Bros.-Cartoons übernahmen die Form als festes Schlusszeichen und ließen Figuren gelegentlich gegen den kleiner werdenden Kreis kämpfen. Aus einer Kameratechnik wurde eine sichtbare Zeichensetzung."
      ],
      media:[C("silent film iris shot","Irisblende im Stummfilm"),F("Ptp p66 img01.png","Irisblende einer Kamera, 1937")],
      sources:[S("Columbia Film Language Glossary: Iris","https://filmglossary.ccnmtl.columbia.edu/term/iris/"),S("Wikipedia: Iris shot","https://en.wikipedia.org/wiki/Iris_shot")]
    },
    {
      category:"Wichtige Akkorde und Akkordfolgen",title:"Line Cliché in Moll",
      summary:"Über einem gehaltenen Mollklang sinkt eine Stimme chromatisch: 1–7–♭7–6.",
      detail:[
        "In c-Moll lautet die Linie C–H–B–A. Der Grundklang bleibt hörbar, während die bewegte Stimme die Akkordbezeichnungen Cm–Cm/H–Cm/B–Cm/A erzeugt. Liegt die Linie im Bass, wechseln die Umkehrungen; in einer Mittelstimme bleibt der Bass als Orgelpunkt stehen.",
        "My Funny Valentine eröffnet mit genau dieser Folge. Ab 1:23 hört man zuerst das ruhende Mollfeld und darunter die vier Basstöne. Richard Rodgers führt die Linie anschließend bis As weiter, wo die nächste Phrase beginnt."
      ],
      media:[Y("9orOU6YQfOQ","My Funny Valentine · C–H–B–A"),C("line cliche minor music notation","Line Cliché in c-Moll")],
      sources:[S("My Funny Valentine · Harmonieanalyse","https://nielsdalgaard.com/jazz-standards/my-funny-valentine/"),S("Wikipedia: Line Cliché","https://de.wikipedia.org/wiki/Line_Clich%C3%A9"),S("YouTube: My Funny Valentine","https://www.youtube.com/watch?v=9orOU6YQfOQ")]
    },
    {
      category:"Falsche Modelle mit großer Erklärungskraft",title:"Kelvins Wirbelatom",
      summary:"Atome galten als stabile, verknotete Wirbelringe in einem allgegenwärtigen Äther.",
      detail:[
        "William Thomson schlug 1867 vor, jedes chemische Element als eigene Knotenform eines Wirbelfadens zu behandeln. Ein idealer Wirbel bleibt in einer reibungsfreien Flüssigkeit erhalten; Stabilität, feste Zahl der Elemente und unterschiedliche Atomarten erhielten damit eine gemeinsame mechanische Erklärung. Peter Guthrie Tait begann Knoten systematisch zu tabellieren.",
        "Das Modell lieferte weder die beobachteten Spektrallinien noch brauchbare quantitative Gesetze für chemische Bindungen. Michelsons und Morleys Interferenzversuch stützte den ruhenden Lichtäther nicht; Elektron, Kern und Quantenmechanik ersetzten die mechanischen Ätheratome. Die Knotentabellen überlebten als eigenständige Mathematik."
      ],
      media:[C("Kelvin vortex atom knot diagram Tait","Taits Knotentafel für die Wirbelatomtheorie"),C("vortex ring experiment 19th century","Wirbelringversuch")],
      sources:[S("The Vortex Atom: A Victorian Theory of Everything","https://arxiv.org/abs/1906.00453"),S("Wikipedia: Vortex theory of the atom","https://en.wikipedia.org/wiki/Vortex_theory_of_the_atom")]
    },
    {
      category:"Entzifferte Schriften",title:"𐱅𐰭𐰼𐰃 : 𐱅𐰏 : 𐱅𐰭𐰼𐰃𐰓𐰀",
      summary:"teŋri : teg : teŋride · die ersten drei Wörter der Südseite des Kül-Tigin-Steins.",
      detail:[
        "Vilhelm Thomsen trennte zuerst Vokal- von Konsonantenzeichen. Die chinesische Inschrift auf der Westseite nannte Kül Tigin und den türkischen Herrscher; wiederkehrende Gruppen im unbekannten Text ließen sich damit als kül tigin und türk lesen. Das häufige 𐱅𐰭𐰼𐰃 ergab teŋri, ‚Himmel‘. Am 15. Dezember 1893 stellte Thomsen die Entzifferung in Kopenhagen vor.",
        "Die Zeile läuft von rechts nach links und benutzt Doppelpunkte als Worttrenner. Transliteration des gezeigten Anfangs: teŋri teg teŋride. Vollständige Übersetzung des ersten Satzes: „Ich, der himmelgleiche und im Himmel geborene türkische Bilge Qaghan, bestieg zu dieser Zeit den Thron.“"
      ],
      media:[C("Kultegin monument Orkhon inscription close up","Südseite der Kül-Tigin-Inschrift"),C("Old Turkic alphabet Thomsen","Thomsens Lautwerte der alttürkischen Zeichen")],
      sources:[S("Vilhelm Thomsen: Inscriptions de l'Orkhon déchiffrées · Wikisource","https://fr.wikisource.org/wiki/Inscriptions_de_l%27Orkhon_d%C3%A9chiffr%C3%A9es/I._L%27alphabet"),S("Talât Tekin: A Grammar of Orkhon Turkic","https://altaica.ru/LIBRARY/Tekin%20Talat/Tekin_A%20Grammar%20of%20Orkhon%20Turkic%201968.pdf"),S("Vikisource: Kül-Tigin-Inschrift","https://tr.wikisource.org/wiki/Orhun_Abideleri_(K%C3%BCl_Tigin)")]
    },
    {
      category:"Rhetorische und poetische Verfahren",title:"“I will do such things— / What they are yet I know not.”",
      summary:"Anakoluth · William Shakespeare, King Lear, II,4",
      detail:[
        "Lear beginnt eine Drohung, bricht ihre Grammatik nach „such things“ ab und setzt mit einem vollständigen Fragesatz neu an. Der Anakoluth legt den Abstand zwischen seiner behaupteten Gewalt und seinem fehlenden Plan offen. Die Pause gehört zum Sinn: Wut liefert den Satzanfang, Ohnmacht verhindert den Abschluss.",
        "Vergleich: In Laurence Sternes Tristram Shandy zerreißen Gedankenstriche fortlaufend angefangene Konstruktionen; dort bildet der Abbruch das sprunghafte Erzählen. Bei Lear ereignet sich derselbe grammatische Bruch einmalig unter unmittelbarem Druck."
      ],
      media:[C("King Lear storm painting Benjamin West","King Lear im Sturm"),C("King Lear manuscript early edition page","King Lear in einer frühen Druckausgabe")],
      sources:[S("Folger Shakespeare Library: King Lear, 2.4","https://www.folger.edu/explore/shakespeares-works/king-lear/read/2/4/"),S("Library of Congress: Glossary of Rhetorical Terms","https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/19/45/27/13/2019452713/2019452713.pdf")]
    },
    {
      category:"Etymologien und Begriffsgeschichten",title:"Alkohol",
      summary:"Ein Wort für feines Antimonpulver wurde zum Namen des Weingeists und schließlich einer Stoffklasse.",
      detail:[
        "Arabisch al-kuḥl bezeichnete das fein geriebene Pulver, mit dem die Lider geschminkt wurden. Mittelalterliches Latein übernahm alcohol für besonders fein verteilte Stoffe. Paracelsus schrieb im 16. Jahrhundert alcohol vini für das durch Destillation gewonnene Feinste oder Wesentliche des Weins.",
        "Im 18. Jahrhundert verkürzte sich alcohol vini zu alcohol und bezeichnete Weingeist. Die Chemie weitete das Wort im 19. Jahrhundert auf eine Stoffklasse mit Hydroxygruppe aus; Ethanol ist seitdem nur ein Alkohol unter vielen. Englisches kohl behielt den älteren Sinn des Augenschminkpulvers."
      ],
      media:[C("ancient kohl vessel museum","Historisches Gefäß für Kohl"),C("alembic distillation historical engraving","Historischer Destillierapparat"),C("ethanol molecule ball and stick","Ethanolmolekül")],
      sources:[S("Online Etymology Dictionary: alcohol","https://www.etymonline.com/word/alcohol"),S("Encyclopaedia Britannica 1911: Alcohol · Wikisource","https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Alcohol")]
    },
    {
      category:"Urban Legends",title:"Das vergiftete Ballkleid",
      summary:"Ein gebrauchtes Kleid soll beim Tanz Formaldehyd freigesetzt und seine neue Trägerin getötet haben.",
      detail:[
        "Amerikanische Folklorezeitschriften zeichneten die Geschichte in den 1940er und 1950er Jahren auf. Eine junge Frau kauft ein günstiges Abendkleid, erkrankt während eines Tanzes und stirbt. Später heißt es, das Kleid habe zuvor an einer Toten gelegen und sei mit Einbalsamierungsflüssigkeit getränkt zurück in den Verkauf gelangt.",
        "Spätere Fassungen nennen wechselnde Kaufhäuser, eine Leihgabe oder den Diebstahl aus einem Bestattungsinstitut; ‚Einbalsamierungsflüssigkeit‘ ersetzt oft das frühere Formaldehyd. Ein belegter Todesfall fehlt. Die Erzählung bündelte Misstrauen gegen gebrauchte Kleidung, anonyme Warenwege und neue chemische Konservierungsmittel."
      ],
      media:[C("evening dress dance 1940 photograph","Abendkleid bei einem Tanz in den 1940er Jahren"),C("formaldehyde bottle historical","Historische Formaldehydflasche")],
      sources:[S("University of Detroit Mercy: The Poisoned Dress","https://libraries.udmercy.edu/archives/special-collections/cfa/index.php?field=keyword&term=DRESS"),S("Contemporary Legend: A Folklore Bibliography","https://dai.mun.ca/PDFs/cns/ContemporaryLegendAFolkloreBibliography.pdf"),S("Wikipedia: Poison dress","https://en.wikipedia.org/wiki/Poison_dress")]
    },
    {
      category:"Interessante Sprachen und Sprachmerkmale",title:"Kayardild: drei Kasus an einem Wort",
      summary:"Kasusendungen bezeichnen zugleich die Rolle im Satz, die Zeitlage und die Zugehörigkeit zu einem Nebensatz.",
      detail:[
        "Im Kayardild von Bentinck Island erhält jedes Wort einer Nominalgruppe dieselben syntaktischen Markierungen. mijil-nguni-naa-ntha zerfällt in mijil ‚Netz‘, -nguni Instrumental, -naa modaler Ablativ für Vergangenheit und -ntha obliquer Nebensatzkasus. Drei Kasusendungen stehen hinter demselben Stamm.",
        "Im Satz Ngada mungurru, maku-ntha … mijil-nguni-naa-ntha bedeutet die Form: ‚Ich weiß, dass die Frau den Fisch mit dem Netz des Bruders fing.‘ Fallstapelung verteilt die Struktur des eingebetteten Satzes über seine Wörter; Tempus erscheint dabei auch an Nomen."
      ],
      media:[C("Bentinck Island Australia map Kayardild","Bentinck Island, Heimat des Kayardild"),C("Kayardild people Mornington Island","Kayardild-Sprachgemeinschaft")],
      sources:[S("University of Essex: Kayardild case and agreement","https://repository.essex.ac.uk/11816/"),S("Evans/Nordlinger: Extreme morphological shift","https://www.researchgate.net/publication/283018203_Extreme_morphological_shift_verbal_case_in_Kayardild")]
    },
    {
      category:"Interessante Listen",title:"Abraham Lincolns Tascheninhalt · 14. April 1865",
      summary:"Alles, was Lincoln am Abend des Attentats im Ford’s Theatre bei sich trug.",
      detail:[
        "Nach Lincolns Tod übergab man die Gegenstände seinem Sohn Robert Todd Lincoln. Dessen Tochter Mary Lincoln Isham schenkte sie 1937 der Library of Congress. Die Zusammenstellung ist keine nachträgliche Auswahl persönlicher Andenken, sondern der erhaltene Inhalt seiner Manteltaschen.",
        "Zwischen den alltäglichen Dingen lag ein konföderierter Fünf-Dollar-Schein, vermutlich ein Andenken an Lincolns Besuch im eroberten Richmond. Die Zeitungsausschnitte berichteten unter anderem über Emanzipation in Missouri, Unruhe unter konföderierten Soldaten und zustimmende Urteile über seine Präsidentschaft."
      ],
      works:["zwei Brillen und zwei Etuis","ein Brillenputzer aus Sämischleder","ein Taschenmesser","ein goldener Uhrenanhänger ohne Uhr","ein Manschettenknopf mit dem Buchstaben L","ein besticktes Leinentaschentuch","eine braune, violett gefütterte Brieftasche","ein Bleistift","ein konföderierter Fünf-Dollar-Schein von 1864","acht Zeitungsausschnitte"],
      media:[C("Abraham Lincoln pocket contents Library of Congress","Lincolns Tascheninhalt in der Library of Congress"),C("Abraham Lincoln wallet Confederate five dollar bill","Brieftasche und konföderierter Fünf-Dollar-Schein")],
      sources:[S("Library of Congress: What Was in Abraham Lincoln’s Pockets?","https://blogs.loc.gov/loc/2017/04/what-was-in-abraham-lincolns-pockets-on-april-14-1865/"),S("Library of Congress: Contents of Lincoln's pockets","https://www.loc.gov/item/2014655007/")]
    },
    {
      category:"Gute einfache Cartoons",title:"Winsor McCay: Dream of the Rarebit Fiend · 7. Januar 1905",
      summary:"Ein Mann wird im Traum mit jedem Schritt größer; beim Erwachen liegt nur sein Fuß außerhalb des Betts.",
      detail:[
        "Die neun Bilder verändern nur eine Regel: Jeder Schritt vergrößert den Spaziergänger, bis seine Schuhe Straßen und Häuser überdecken. Das letzte Bild setzt die riesige Traumbewegung in einen kleinen körperlichen Anlass zurück. Der Mann schiebt den herausragenden Fuß unter die Decke und schwört dem Welsh Rarebit ab.",
        "McCay veröffentlichte die Serie unter dem Namen Silas in der New York Evening Telegram. Die ganze Seite ist gemeinfrei; McCay starb 1934."
      ],
      media:[F("Dream of the Rarebit Fiend 1905-01-07.jpg","Vollständiger Cartoon · New York Evening Telegram, 7. Januar 1905")],
      sources:[S("Wikimedia Commons: Dream of the Rarebit Fiend, 7 January 1905","https://commons.wikimedia.org/wiki/File:Dream_of_the_Rarebit_Fiend_1905-01-07.jpg"),S("Library of Congress: Winsor McCay","https://www.loc.gov/pictures/collection/acd/item/2016678678/")]
    },
    {
      category:"Grenzfälle",title:"Bathochordaeus stygius · Körper oder Haus",
      summary:"Ein vier Zentimeter langes Tier lebt in einer selbst ausgeschiedenen Filteranlage von bis zu einem Meter Durchmesser.",
      detail:[
        "Der Riesen-Appendikular scheidet Schleim aus und pumpt ihn zu einem inneren und einem äußeren Filterkörper auf. Das äußere Netz hält große Teilchen fern; feinere Partikel gelangen zum inneren Nahrungsfilter. Schwanzschläge treiben Wasser durch die Anlage und lösen gefangene Nahrung zum Mund.",
        "Das Tier baut durchschnittlich zwei solcher Häuser pro Tag und verlässt sie, sobald die Filter verstopfen. Das Haus ist weder Haut noch dauerhaftes Organ. Es entsteht aus Körpersekret, übernimmt Atmung und Nahrungssuche und wird anschließend als sinkendes Partikel Teil des Tiefsee-Nahrungsstroms."
      ],
      media:[F("Bathochordaeus charon compared to B. stygius.gif","Bathochordaeus charon und Bathochordaeus stygius im Größenvergleich")],
      sources:[S("Smithsonian Ocean: Mucus Home","https://ocean.si.edu/holding-tank/images-hide/mucus-home"),S("PLOS One: Mucous-mesh grazing in the deep pelagic ocean","https://pmc.ncbi.nlm.nih.gov/articles/PMC5966591/")]
    },
    {
      category:"UnsichtbareKonventionen",title:"Der Blick über den Schnitt",
      summary:"Ein Blick aus dem Bild wird durch den nächsten Schnitt einem Gegenstand oder einer Person zugeordnet.",
      detail:[
        "Die erste Einstellung zeigt eine Figur, die nach rechts oben blickt. Die nächste zeigt einen Gegenstand aus einer dazu passenden Richtung. Obwohl beide Aufnahmen getrennt entstanden, liest der Zuschauer sie als Blick und Gesehenes im selben Raum. Höhe, Winkel und Bildschirmrichtung müssen aufeinander reagieren.",
        "In The Third Man verbindet der Schnitt bei der Beerdigung Gesichter mit dem beobachteten Geschehen. Vertauscht man die zweite Einstellung oder spiegelt den Blick, erscheint der Gegenstand am falschen Ort. Der eyeline match trägt daher räumliche Information, ohne den gesamten Raum zu zeigen."
      ],
      media:[Y("y_1H6V7uyYc","Eyeline Match · Aufnahme und Schnitt")],
      sources:[S("Columbia Film Language Glossary: Eye-Line Match","https://filmglossary.ccnmtl.columbia.edu/term/eye-line-match/"),S("YouTube: The eyeline match","https://www.youtube.com/watch?v=y_1H6V7uyYc"),S("Wikipedia: Eyeline match","https://en.wikipedia.org/wiki/Eyeline_match")]
    },
    {
      category:"VerloreneTechniken",title:"Räder abklopfen",
      summary:"Bahnarbeiter erkannten Risse am Klang eines angeschlagenen Rades.",
      detail:[
        "Ein wheel tapper ging an haltenden Zügen entlang und schlug jedes Rad mit einem langstieligen Hammer an. Ein unbeschädigter Radreifen antwortete mit hellem, nachklingendem Ton; ein Riss dämpfte die Schwingung. Die Rückseite der Hand prüfte zugleich, ob ein Achslager heiß lief.",
        "Der Arbeiter musste Tonhöhe, Ausschwingen und Nebengeräusche im Bahnhof gegen viele bekannte Räder vergleichen. Heutige Ultraschallprüfungen, planmäßige Wartung und streckenseitige Heißläuferortung erledigen dieselben Aufgaben mit Messwerten."
      ],
      media:[F("Wheel tapper.jpg","Räderprüfer mit langstieligem Hammer")],
      sources:[S("Science Museum Group: Wheeltapper's hammer","https://collection.sciencemuseumgroup.org.uk/objects/co222818/wheeltappers-hammer"),S("Railway Work, Life & Death: From wheel-tappers to porters","https://www.railwayarchive.org.uk/from-wheel-tappers-to-porters")]
    },
    {
      category:"InternetArchäologie",title:"wwwwwwwww.jodi.org",
      summary:"Eine Netzkunstarbeit von 1995 behandelt Browserfehler, Quellcode und Navigation als Material.",
      detail:[
        "Joan Heemskerk und Dirk Paesmans stellten 1995 unter jodi.org eine Startseite ins Netz, deren grüne Zeichen wie eine Störung wirken. Im HTML-Quelltext ergibt dieselbe Zeichenmenge ein Diagramm. Links führen ohne Menübezeichnungen durch wechselnde Fenster, falsche Fehlermeldungen, rohe Dateipfade und Seiten, die sich gegen gewöhnliche Bedienung sperren.",
        "Die Arbeit ist weiterhin unter ihrer ursprünglichen Domain aufrufbar. Sie bewahrt keine alte Website als Dokument; ihre Unsicherheit entsteht jedes Mal neu im aktuellen Browser."
      ],
      media:[I("https://www.upstreamgallery.nl/images/artist/slider/large/46/0340311001635507493.jpg","https://www.upstreamgallery.nl/artists/46/jodi","JODI · digitale Installation","Upstream Gallery")],
      sources:[S("JODI","https://wwwwwwwww.jodi.org/"),S("Upstream Gallery: JODI","https://www.upstreamgallery.nl/artists/46/jodi"),S("Rhizome ArtBase: JODI","https://artbase.rhizome.org/wiki/Q949"),S("Electronic Arts Intermix: JODI","https://www.eai.org/artists/jodi/bibliography-links")]
    },
    {
      category:"SchlechtesWritingSeziert",title:"Solo: A Star Wars Story · der Nachname",
      summary:"Ein Beamter erfindet „Solo“, damit eine bekannte Figur ihren bekannten Namen vor laufender Kamera erhält.",
      detail:[
        "Bei der Musterung fragt ein imperialer Beamter Han nach seinem Familiennamen. Han antwortet, er habe keine Leute und sei allein. Der Beamte trägt daraufhin „Solo“ ein. Die Fluchtsequenz hält für eine Erklärung an, die weder Hans Ziel noch sein Verhältnis zum Imperium verändert. Ein alltäglicher Verwaltungsakt produziert dabei exakt den Namen, den das Publikum bereits als Markenzeichen kennt.",
        "Die Szene verkleinert Hans unbekannte Herkunft zu einem Wortspiel des ersten Beamten, dem er begegnet. Zugleich bleibt offen, warum Han den zugewiesenen Namen nach seiner Desertion freiwillig weiterführt."
      ],
      works:["Han nennt den Nachnamen ohne Erklärung; die Lücke bleibt Teil seiner unbekannten Herkunft.","Han wählt „Solo“ selbst als Decknamen und benutzt ihn, um Qi’ra bei einer späteren Suche zu schützen.","Der Beamte übernimmt einen bereits benutzten Alias aus Hans gefälschten Papieren; die Szene erzählt dann seine Erfahrung mit Betrug statt die Herkunft eines Namens."],
      media:[Y("YpmjseSy4HU","Solo: A Star Wars Story · Musterungsszene")],
      sources:[S("YouTube: How Han Got His Name","https://www.youtube.com/watch?v=YpmjseSy4HU"),S("StarWars.com: Solo: A Star Wars Story","https://www.starwars.com/films/solo")]
    },
    {
      category:"DasIstHierGanzInDerNähe",title:"Sammlung Prinzhorn",
      summary:"Heidelberg · 40.000 Werke von Menschen mit Psychiatrie-Erfahrung.",
      detail:[
        "Hans Prinzhorn erweiterte nach dem Ersten Weltkrieg eine Heidelberger Lehrsammlung um Zeichnungen, Hefte, Textilien, Skulpturen und Briefe aus psychiatrischen Anstalten. Sein Buch Bildnerei der Geisteskranken von 1922 wirkte auf Künstler der Moderne. In der NS-Zeit wurden Werke als pathologisches Vergleichsmaterial missbraucht; Harald Szeemann machte den Bestand 1963 wieder öffentlich bekannt.",
        "Heute umfasst die Sammlung etwa 40.000 Werke und wächst durch Gegenwartskunst von Psychiatrie-Erfahrenen weiter. Sie liegt rund 20 Kilometer von Mannheim entfernt. Adresse: Voßstraße 2, 69115 Heidelberg. Geöffnet Dienstag und Donnerstag bis Sonntag 11–17 Uhr, Mittwoch 11–20 Uhr; Montag geschlossen."
      ],
      media:[C("Sammlung Prinzhorn Heidelberg museum building","Museum Sammlung Prinzhorn"),C("August Natterer Prinzhorn collection","Werk von August Natterer aus der Sammlung")],
      sources:[S("Universität Heidelberg: Sammlung Prinzhorn","https://www.heicollections.uni-heidelberg.de/de/museen-sammlungen/sammlung-prinzhorn"),S("Sammlung Prinzhorn: Besuch","https://www.sammlung-prinzhorn.de/besucherinfo")]
    },
    {
      category:"VisuelleIdeenDieIchKlauenWill",title:"Xanti Schawinsky · Spectodrama",
      summary:"Körper, Papier, Licht und Klang werden als gleichrangige Bühnenelemente geprüft.",
      detail:[
        "Schawinsky entwickelte ab 1936 am Black Mountain College kurze Bühnenstudien. Darsteller trugen gerollte Papierkörper, geometrische Masken oder farbige Flächen und bewegten sich zwischen ähnlichen Formen im Raum. Lichtprojektion veränderte ihre Konturen; Musik und Geräusch gaben dem Bild eine zweite zeitliche Ordnung.",
        "Die brauchbare Idee liegt im Versuch: Eine Szene setzt jeweils eine einzige Beziehung unter Druck – Körper gegen Fläche, Farbe gegen Bewegung, Figur gegen Hintergrund. Kostüm und Bühnenbild bestehen aus demselben Material, sodass eine kleine Positionsänderung die Figur hervorhebt oder im Raum verschwinden lässt."
      ],
      media:[F("Xanti Schawinsky Räuberballett Die beiden Veroneser 1925.jpg","Räuberballett, 1925"),F("XantiSchawinsky.jpg","Xanti Schawinsky, um 1925")],
      sources:[S("Bauhaus Kooperation: Xanti Schawinsky","https://bauhauskooperation.de/en/wissen/das-bauhaus/koepfe/biografien/biografie-detail/person-1105"),S("Xanti Schawinsky Estate: Black Mountain College","https://www.schawinsky.ch/blank-2"),S("Kunsthalle Bielefeld: Play, Life, Illusion","https://kunsthalle-bielefeld.de/en/exhibitions/play-life-illusion-xanti-schawinsky/")]
    },
    {category:"Eigene GIFs",kind:"gif",title:"Moiréatmung",detail:[],media:[I("assets/gifs/moireatmung.gif","assets/gifs/moireatmung.gif","Moiréatmung","Eigene Animation")],sources:[]},
    {category:"Eigene GIFs",kind:"gif",title:"Kippkörper",detail:[],media:[I("assets/gifs/kippkoerper.gif","assets/gifs/kippkoerper.gif","Kippkörper","Eigene Animation")],sources:[]},
    {category:"Eigene GIFs",kind:"gif",title:"Farbfenster",detail:[],media:[I("assets/gifs/farbfenster.gif","assets/gifs/farbfenster.gif","Farbfenster","Eigene Animation")],sources:[]},
    {category:"Eigene GIFs",kind:"gif",title:"Faltendes Raster",detail:[],media:[I("assets/gifs/faltendes-raster.gif","assets/gifs/faltendes-raster.gif","Faltendes Raster","Eigene Animation")],sources:[]},
    {category:"Eigene GIFs",kind:"gif",title:"Pendelspur",detail:[],media:[I("assets/gifs/pendelspur.gif","assets/gifs/pendelspur.gif","Pendelspur","Eigene Animation")],sources:[]}
  );

})();

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
    card("Gute Gags", "Buster Keaton: das drehende Haus in One Week", [], [C("Buster Keaton One Week spinning house", "Das drehende Haus in One Week")], [
      src("Wikimedia Commons: One Week, vollständiger gemeinfreier Film", "https://commons.wikimedia.org/wiki/File:One_Week_(1920)_by_Eddie_Cline_and_Buster_Keaton.webm"),
      src("International Buster Keaton Society: One Week", "https://busterkeaton.org/the-films/one-week/")
    ]),

    card("Gute Gags", "Victor Borge: Phonetic Punctuation", [], [Y("TIf3IfHCoiE", "Victor Borge · Phonetic Punctuation")], [
      src("YouTube: Victor Borge – Phonetic Punctuation", "https://www.youtube.com/watch?v=TIf3IfHCoiE")
    ]),

    card("Gute Gags", "Les Luthiers: La tanda", [], [Y("-YtWYotwDHU", "Les Luthiers · La tanda")], [
      src("Les Luthiers: Werkverzeichnis La tanda", "https://lesluthiers.org/verobra.php?ID=73"),
      src("YouTube: offizieller Künstlerkanal", "https://www.youtube.com/watch?v=-YtWYotwDHU")
    ]),

    card("Gute Gags", "That Mitchell and Webb Look: The Numberwang Code", [], [Y("eP9YeDGAu7U", "The Numberwang Code · BBC")], [
      src("YouTube: BBC – The Numberwang Code", "https://www.youtube.com/watch?v=eP9YeDGAu7U")
    ]),

    card("Gute Gags", "Big Train: 43rd World Stare Out Championship Finals", [], [Y("DkI85Kt10e4", "43rd World Stare Out Championship Finals")], [
      src("YouTube: Big Train – 43rd World Stare Out Championship Finals", "https://www.youtube.com/watch?v=DkI85Kt10e4")
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
    ], [Y("OvdQYzRHlO0", "Star Trek Into Darkness · My Name is Khan")], [
      src("YouTube: lizenzierter Movieclips-Ausschnitt", "https://www.youtube.com/watch?v=OvdQYzRHlO0")
    ], {summary:"Eine Enthüllung verlangt von den Figuren ein Wissen, das nur das Publikum besitzt.",works:[
      "Kirk findet den Namen Khan vor der Begegnung in einer gesperrten Akte; die Szene enthüllt dann, dass Harrison zu dieser Akte gehört.",
      "Der Film behält den Namen Harrison und enthüllt stattdessen durch eine konkrete Tat, welche Fähigkeiten und Ziele der Mann verborgen hat.",
      "Spock Prime wird früher befragt; seine Warnung gibt dem später ausgesprochenen Namen eine Folge für Kirk und Spock."
    ]}),

    card("SchlechtesWritingSeziert", "The Matrix Reloaded · der Architekt", [
      "Der Architekt hält Neo in einem weißen Raum an und erklärt in einem langen Monolog die früheren Versionen der Matrix, die Rolle des Auserwählten und die zyklische Zerstörung Zions. Abstrakte Begriffe, verschachtelte Sätze und Monitorbilder liefern entscheidende Handlungstatsachen auf einmal. Neo handelt erst am Ende; während der Erklärung besitzt er kaum Mittel, eine Behauptung zu prüfen oder das Gespräch zu verändern."
    ], [Y("9WXQnDtcCWM", "The Matrix Reloaded · The Architect")], [
      src("YouTube: lizenzierter Movieclips-Ausschnitt", "https://www.youtube.com/watch?v=9WXQnDtcCWM")
    ], {summary:"Der Wendepunkt wird als Vortrag übermittelt, während die Hauptfigur stillsteht.",works:[
      "Neo durchläuft kurze Überreste der früheren Zyklen und setzt die Wahrheit selbst aus widersprüchlichen Bildern zusammen.",
      "Der Architekt beantwortet nur Fragen, für die Neo jeweils etwas riskieren oder preisgeben muss.",
      "Der Film verteilt die Information auf Orakel, Merowinger und Architekt; jede Quelle verfolgt dabei ein anderes Interesse."
    ]}),

    card("SchlechtesWritingSeziert", "Doctor Who · The Timeless Children", [
      "Der Master fesselt die Doctor in der Matrix und führt sie durch projizierte Archivbilder. Er erklärt Herkunft, Division, verlorene Leben und die Umformung der Time Lords. Die Doctor empfängt ihre eigene Biografie als Vortrag ihres Gegners. Eine große Veränderung der Seriengeschichte entsteht dadurch ohne eine gegenwärtige Entscheidung, Untersuchung oder verlässliche Gegenstimme."
    ], [Y("4KR4cLOdIeQ", "Doctor Who · The Timeless Children")], [
      src("YouTube: Doctor Who / BBC Studios", "https://www.youtube.com/watch?v=4KR4cLOdIeQ")
    ], {summary:"Eine Figur erfährt ihre neue Lebensgeschichte gefesselt aus der Präsentation ihres Gegners.",works:[
      "Die Doctor entdeckt über mehrere Folgen beschädigte Division-Akten und entscheidet selbst, welchen Zugang sie öffnet.",
      "Ruth, Tecteun und der Master geben einander widersprechende Fassungen; die Doctor prüft sie an konkreten Erinnerungen.",
      "Die Enthüllung zwingt die Doctor im selben Augenblick zu einer Wahl, deren Ausgang von ihrer Deutung der Vergangenheit abhängt."
    ]}),

    card("SchlechtesWritingSeziert", "Spectre · Blofeld als Pflegebruder", [
      "Franz Oberhauser erklärt Bond, er habe nach dem Tod seiner Eltern bei Oberhausers Vater gelebt. Aus Eifersucht tötete Franz den Vater, nahm den Namen Blofeld an und bezeichnet sich als Urheber von Bonds gesamtem Schmerz. Die Szene bindet mehrere frühere Gegner rückwirkend an ein Kindheitsmotiv, für das diese Filme keine Ursache oder Spur gelegt haben.",
      "Der persönliche Zusammenhang verkleinert zugleich SPECTRE: Aus einem eigenständigen Machtapparat wird die verlängerte Kränkung eines Pflegebruders. Blofelds Behauptung ersetzt den sichtbaren Nachweis, wie er Le Chiffre, Quantum, Silva und ihre verschiedenen Ziele tatsächlich gesteuert hätte."
    ], [Y("k6BOO2bhmOs", "Spectre · Ernst Stavro Blofeld")], [
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
    ], [Y("HYDbThcr2z4", "Skyfall · Bond und Sévérine auf der Chimera")], [
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

// Danach folgt je eine zusätzliche Karte für alle aktiven Kategorien.
(() => {
  "use strict";
  const src = (label, url) => S(label, url);
  const card = (category, title, detail, media, sources = [], extra = {}) => ({
    category, title, detail, media, sources, ...extra
  });
  const WHARTON = "https://raw.githubusercontent.com/GITenberg/The-writing-of-fiction_72446/master/72446-0.txt";
  const LUBBOCK = "https://raw.githubusercontent.com/GITenberg/The-Craft-of-Fiction_18961/master/18961.txt";

  window.KARTEN.push(
    // Trends in Art: fünf Karten der neuen Kategorie.
    card("Trends in Art", "AnneMarie Torresen · 1, 2, 2, 1, 1, 2 …", [
      "Torresen übersetzt die selbstbeschreibende Kolakoski-Folge in Draht. Mehrere Hände falten und verbinden die Zahlenfolge als räumliche Arbeit. Die Regel wird über Widerstand, Wiederholung und Zusammenarbeit erfahrbar.",
      "Die Arbeit gehört zum RISD-Abschlussjahrgang 2026. Sie behandelt einen Algorithmus als Handlungsanweisung und Materialrhythmus. Mathematik erscheint als gemeinsam gebauter Gegenstand."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/annemarie-torresen-digital-media-mfa-2026-2.png", "https://publications.risd.edu/grad-show-2026/digital-media", "1, 2, 2, 1, 1, 2 …", "RISD Grad Show 2026")], [
      src("RISD Grad Show 2026: Digital + Media", "https://publications.risd.edu/grad-show-2026/digital-media")
    ], {summary:"Eine Zahlenfolge wird mit Draht und vielen Händen gebaut."}),

    card("Trends in Art", "Hanyi Wang · Prion", [
      "Prion verbindet eine mechanische Installation, eine offene Umgebung in Unreal Engine 5 und zwei Live-Videokanäle. Eine weiche Schnittstelle mit fingerartigen Formen liegt zwischen Bildschirm, Holzkörper und Maschine. Bewegung am Objekt verändert die digitale Situation.",
      "Wang behandelt Interface und Spielfigur als Körperteile desselben Systems. Die Arbeit verschiebt das Computerspiel aus dem Monitor in einen Raum, in dem Bedienung, Beobachtung und mechanische Reaktion gleichzeitig sichtbar bleiben."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/hanyi-wang-digital-meda-mfa-2026-5.jpg", "https://publications.risd.edu/grad-show-2026/digital-media", "Prion, 2025", "RISD Grad Show 2026")], [
      src("RISD Grad Show 2026: Hanyi Wang", "https://publications.risd.edu/grad-show-2026/digital-media")
    ], {summary:"Mechanik, Livebild und offene Spielwelt teilen sich eine körperliche Schnittstelle."}),

    card("Trends in Art", "Dahlia Aggarwal · Wild Grass", [
      "Aggarwal konstruiert einen Jacquardstoff so, dass seine aufgerichteten und verfilzten Fäden wie ungleich gewachsenes Gras stehen. Das Gewebe liegt als Teppich im Raum, verhält sich optisch jedoch wie eine kleine Landschaft.",
      "Das Muster liefert keine aufgedruckte Grasdarstellung. Bindung, Florlänge und Nachbearbeitung erzeugen die räumliche Oberfläche direkt. Digitale Websteuerung und Handfilzen greifen in denselben Herstellungsprozess ein."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/dahlia-aggarwal-mfa-cr-2.jpg", "https://publications.risd.edu/grad-show-2026/textiles", "Wild Grass, 2025", "RISD Grad Show 2026")], [
      src("RISD Grad Show 2026: Textiles", "https://publications.risd.edu/grad-show-2026/textiles")
    ], {summary:"Ein Jacquardgewebe erhält die Wuchsform einer Grasfläche."}),

    card("Trends in Art", "Andrew Goulet · Noren Speakers and Stereo Cabinet", [
      "Zwei Lautsprecher und ein Stereoschrank stehen als zusammengehörige Möbelgruppe im Raum. Vor den Schallöffnungen hängen Bahnen aus akustisch durchlässigem Textil. Sperrholz, Aluminium, Delrin, Elektronik und Stoff bleiben als verschiedene Funktionsschichten ablesbar.",
      "Goulets Arbeit löst Audiotechnik aus der schwarzen Gerätebox. Position, textile Front und Proportion gehören zur akustischen Anlage ebenso wie Chassis und Verstärker. Das Hörgerät wird Teil der Einrichtung und bestimmt den Raum schon im ausgeschalteten Zustand."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/Andrew-Goulet-fd-1.jpg", "https://publications.risd.edu/grad-show-2026/furniture-design", "Noren Speakers and Stereo Cabinet", "RISD Grad Show 2026")], [
      src("RISD Grad Show 2026: Furniture Design", "https://publications.risd.edu/grad-show-2026/furniture-design")
    ], {summary:"Lautsprecher und Stereotechnik werden als vollständige Möbelgruppe entworfen."}),

    card("Trends in Art", "Xinyi Joanna Li · Swell", [
      "Swell ist eine große Armschiene aus violett und rosa schimmerndem PLA. Rechnerisch erzeugte Volumen wachsen zu einem Band zusammen; der 3D-Druck macht jede Rundung als geschichtete Spur sichtbar.",
      "Li bezeichnet die Reihe als Specific Randomness. Ein begrenztes Regelsystem erzeugt Varianten, anschließend entscheidet die Arbeit am Körper über Maßstab, Lage und tragbare Form. Zufall, Rechenregel und Anpassung bilden drei aufeinanderfolgende Entwurfsschritte."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/xinyi-li-jm-mfa-2026-5.JPG", "https://publications.risd.edu/grad-show-2026/xinyi-joanna-li", "Swell, 2026", "RISD Grad Show 2026")], [
      src("RISD Grad Show 2026: Jewelry + Metalsmithing", "https://publications.risd.edu/grad-show-2026/jewelry-metalsmithing"),
      src("RISD Grad Show 2026: Xinyi Joanna Li", "https://publications.risd.edu/grad-show-2026/xinyi-joanna-li")
    ], {summary:"Rechnerisch erzeugte Volumen werden als große, körperbezogene Form gedruckt."}),

    // Writing Tipps: fünf Karten der neuen Kategorie.
    card("Writing Tipps", "Proserhythmus auf drei Ebenen", [
      "Lies einen Absatz dreimal: zuerst nach Wortklang, dann nach Länge und Spannung der Satzteile, zuletzt nach dem Wechsel ganzer Sätze. Wiederholt sich auf einer Ebene dieselbe Bewegung, ändere dort das Maß. Zwei ähnlich lange Sätze hintereinander sind unauffällig; eine ganze Folge nimmt den Takt eines schlechten Blankverses an.",
      "Robert Louis Stevenson trennt den Klang einzelner Wörter, das Knüpfen und Lösen der Satzphrase und den größeren Rhythmus der Prosa. Sein entscheidender Prüfpunkt lautet: Prosa braucht Rhythmus und vermeidet ein hörbar durchlaufendes Metrum."
    ], [C("Robert Louis Stevenson portrait 1893", "Robert Louis Stevenson")], [
      src("Wikisource: On Some Technical Elements of Style in Literature", "https://en.wikisource.org/wiki/Essays_in_the_Art_of_Writing/On_Some_Technical_Elements_of_Style_in_Literature")
    ], {summary:"Wortklang, Satzphrase und Absatzbewegung werden getrennt geprüft.", writingSource:{label:"Wortlaut · Robert Louis Stevenson, On Some Technical Elements of Style in Literature",source:"https://archive.org/details/essaysinartofwri00stev",remote:{wikiPage:"Essays_in_the_Art_of_Writing/On_Some_Technical_Elements_of_Style_in_Literature",wikiLanguage:"en",start:"Music and literature, the two temporal arts",end:"The conjurer juggles with two oranges",flexibleMarkers:true,reflow:true,fetchLabel:"Wikisource-Transkription"}}}),

    card("Writing Tipps", "Den Winkel einer kurzen Erzählung bestimmen", [
      "Schreibe vor dem Entwurf drei mögliche Fassungen derselben Situation auf: Wer nimmt sie wahr, welcher Augenblick trägt sie, welche Tatsache bleibt bis zuletzt außerhalb des Blickfelds? Wähle danach eine Fassung und richte jedes Detail auf diesen Winkel aus.",
      "Edith Wharton beschreibt die kurze Erzählung als Form, deren Wirkung stark von Präsentation und Perspektive abhängt. Sobald der Text zwischen mehreren möglichen Brennpunkten tastet, verliert auch der Leser seine sichere Wahrnehmung der Situation."
    ], [C("Edith Wharton portrait 1905", "Edith Wharton")], [
      src("Project Gutenberg: The Writing of Fiction", "https://www.gutenberg.org/ebooks/72446")
    ], {summary:"Eine kurze Erzählung braucht vor dem ersten Absatz einen festgelegten Wahrnehmungswinkel.", writingSource:{label:"Wortlaut · Edith Wharton, The Writing of Fiction, Kapitel II",source:"https://archive.org/details/writingoffiction00whar",remote:{url:WHARTON,start:"The chief technical difference between the short story and the novel",end:"Nietzsche said that it took genius to",flexibleMarkers:true,reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    card("Writing Tipps", "Jede Figur erhält eine Aufgabe", [
      "Verfolge jede Nebenfigur bis zum Ende des Entwurfs. Benenne die Stelle, die ohne sie ärmer, unverständlicher oder weniger gespannt wäre. Fehlt eine solche Stelle, verteile ihre Information auf vorhandene Figuren oder streiche sie.",
      "Wharton verbindet dieselbe Prüfung mit Beschreibungen. Eine Landschaft gehört zur Handlung, sobald sie als Ereignis im Bewusstsein einer Figur erscheint. Wortwahl und Beobachtungsgenauigkeit bleiben innerhalb ihres Wahrnehmungsregisters."
    ], [F("Edith Wharton 03.jpg", "Edith Wharton")], [
      src("Project Gutenberg: The Writing of Fiction", "https://www.gutenberg.org/ebooks/72446")
    ], {summary:"Figuren und Schauplätze bleiben, wenn sie eine genau benennbare Arbeit im Entwurf leisten.", writingSource:{label:"Wortlaut · Edith Wharton, The Writing of Fiction, Kapitel III",source:"https://archive.org/details/writingoffiction00whar",remote:{url:WHARTON,start:"Neither novelist nor playwright should ever venture on creating a character",end:"The two central difficulties of the novel",flexibleMarkers:true,reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    card("Writing Tipps", "Perspektivwechsel als Formwechsel behandeln", [
      "Markiere nach dem Entwurf jeden Absatz mit der Instanz, die auswählt, benennt und urteilt. Wechselt der Text zwischen Erzähler und Figur, prüfe den Grund und die neue Reichweite. Ein einzelner Wechsel verändert das Zentrum des Romans; eine unbemerkte Folge erzeugt zwei konkurrierende Baupläne.",
      "Percy Lubbock untersucht diesen Fehler an Krieg und Frieden. Tolstoi erzählt historische Partien aus eigener Übersicht und die Familienhandlung überwiegend durch ausgewählte Figuren. Die Größe einzelner Teile verdeckt die formale Trennung; der Roman behält zwei konkurrierende Zentren."
    ], [C("Leo Tolstoy portrait 1908", "Lew Tolstoi, Lubbocks Beispiel für wechselnde Perspektiven")], [
      src("Project Gutenberg: The Craft of Fiction", "https://www.gutenberg.org/ebooks/18961")
    ], {summary:"Jeder Wechsel der wahrnehmenden Instanz verändert den Bauplan des Textes.", writingSource:{label:"Wortlaut · Percy Lubbock, The Craft of Fiction",source:"https://archive.org/details/craftoffiction00lubb",remote:{url:LUBBOCK,start:"The predominant point of view is simply his own",end:"We have a magnificent novel without it.",flexibleMarkers:true,reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    card("Writing Tipps", "Den Leser die Figur zusammensetzen lassen", [
      "Verteile die Figur auf wenige Details, die der Leser miteinander verbinden muss: eine Handlung unter Druck, ein sprachlicher Reflex, eine falsche Einschätzung, eine körperliche Gewohnheit. Wiederhole die fertige Charakteraussage anschließend nirgends.",
      "Lubbock beschreibt Lesen als formende Arbeit. Aus verstreuten Angaben baut der Leser einen Körper und ein Bewusstsein. Die Figur wirkt vollständig, weil dieser Aufbau ohne sichtbare Anstrengung geschieht und jedes neue Detail an die bereits entstandene Form anschließt."
    ], [C("Samuel Richardson portrait", "Samuel Richardson")], [
      src("Project Gutenberg: The Craft of Fiction", "https://www.gutenberg.org/ebooks/18961")
    ], {summary:"Wenige anschlussfähige Einzelheiten aktivieren die Vorstellung stärker als ein fertiges Urteil.", writingSource:{label:"Wortlaut · Percy Lubbock, The Craft of Fiction",source:"https://archive.org/details/craftoffiction00lubb",remote:{url:LUBBOCK,start:"As soon as he begins to hear of Clarissa",end:"A novel is a picture, a portrait",flexibleMarkers:true,reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    // Je eine weitere Karte für die 28 bisherigen Kategorien.
    {category:"Aphorismen",kind:"quote",title:"„Man muß etwas Neues machen, um etwas Neues zu sehen.“",byline:"Georg Christoph Lichtenberg · Sudelbücher",detail:[],media:[C("Georg Christoph Lichtenberg engraving portrait","Georg Christoph Lichtenberg")],sources:[src("Lichtenberg: Sudelbücher · Zeno.org","http://www.zeno.org/Literatur/M/Lichtenberg,+Georg+Christoph/Aphorismen/Sudelbücher")]},

    card("Philosophische Begriffe", "Haecceitas", [], [C("Duns Scotus portrait engraving", "Johannes Duns Scotus")], [src("Wikipedia: Haecceitas", "https://de.wikipedia.org/wiki/Haecceitas")], {summary:"Das individuelle Diessein, durch das dieses einzelne Wesen genau dieses Wesen ist.",wiki:{page:"Haecceitas",language:"de",count:3}}),

    card("Künstler und drei Werke", "Mikalojus Konstantinas Čiurlionis", [
      "Rex ordnet Stadt, Wasser, Berge und Himmel als konzentrische Herrschaftsräume. In der Sonate der Sterne erscheinen zwei Bilder wie Sätze einer kosmischen Musik. Das Märchen der Könige setzt zwei gekrönte Figuren vor eine leuchtende kleine Landschaft, die sie mit ihren Körpern schützen.",
      "Čiurlionis war Komponist und Maler. Seine Bildfolgen übernehmen Begriffe wie Sonate, Fuge und Präludium, ohne Musik abzubilden. Wiederkehrende Horizonte, Himmelskörper und kleine Architekturen erzeugen Entwicklung zwischen den Tafeln."
    ], [C("Mikalojus Konstantinas Ciurlionis Rex 1909", "Rex"),C("Ciurlionis Sonata of the Stars Allegro", "Sonate der Sterne: Allegro"),C("Ciurlionis Fairy Tale of Kings", "Das Märchen der Könige")], [src("National M. K. Čiurlionis Museum of Art", "https://ciurlionis.lt/activities/m-k-ciurlionis/")], {summary:"Rex · Sonate der Sterne · Das Märchen der Könige",works:["Rex, 1909","Sonate der Sterne, 1908","Das Märchen der Könige, 1909"]}),

    {category:"Erste Sätze großer Romane",kind:"quote",title:"The past is a foreign country: they do things differently there.",detail:[],wiki:{page:"The Go-Between",language:"en",count:1},media:[C("L. P. Hartley portrait", "L. P. Hartley")],sources:[src("Wikipedia: The Go-Between", "https://en.wikipedia.org/wiki/The_Go-Between"),src("Internet Archive: The Go-Between", "https://archive.org/search?query=title%3A%28The+Go-Between%29+AND+creator%3A%28Hartley%29")]},

    card("Seltene Musikstile", "Ojkanje · Dalmatinisches Hinterland", [
      "Zwei oder mehr Stimmen singen in engem Tonraum. Der führende Sänger hält die Phrase in einem kräftigen, im Hals erzeugten Zittern; eine zweite Stimme bleibt in reibender Nähe. Das Ende fällt häufig in einen langen gemeinsamen Atemzug.",
      "Der Text behandelt Liebe, Dorfereignisse oder Politik. Die Aufnahme der UNESCO zeigt verschiedene lokale Zweistimmigkeitsformen. Entscheidend sind das stark pulsierende Timbre und die Dauer einer Phrase, die vom Atem des Vorsängers begrenzt wird."
    ], [Y("fjm9QXUVYLA", "UNESCO · Ojkanje singing")], [src("UNESCO: Ojkanje singing", "https://ich.unesco.org/en/USL/ojkanje-singing-00320"),src("YouTube: UNESCO-Aufnahme", "https://www.youtube.com/watch?v=fjm9QXUVYLA")]),

    card("Vergessene Komponisten", "Alice Mary Smith · Sinfonie c-Moll", [
      "Die langsame Einleitung setzt eine knappe rhythmische Figur gegen dunkle Holzbläser. Im Allegro kehrt dieselbe Spannung in einer beweglichen, dicht gearbeiteten Sonatenform wieder. Das Allegretto führt eine singende Linie durch wechselnde Instrumentengruppen; das Finale bündelt Blech und Streicher in klaren Gegenbewegungen.",
      "Smith vollendete die Sinfonie 1863 oder 1864 und schrieb später eine zweite. Ihre Orchesterbehandlung verbindet kräftige motivische Arbeit mit transparenten Mittelstimmen. Das Werk erweitert das schmale Bild britischer Sinfonik vor Parry und Stanford um eine vollständig beherrschte Großform."
    ], [Y("dAHwGeDrs9c", "Alice Mary Smith · Sinfonie c-Moll"),C("Alice Mary Smith composer portrait", "Alice Mary Smith")], [src("YouTube: London Mozart Players, Howard Shelley", "https://www.youtube.com/watch?v=dAHwGeDrs9c"),src("Oxford Dictionary of National Biography: Alice Mary Smith", "https://www.oxforddnb.com/display/10.1093/ref:odnb/9780198614128.001.0001/odnb-9780198614128-e-25817")]),

    card("Großartige Bilder und Design", "Carlo Bugatti · Schneckenstuhl", [
      "Der Stuhl von etwa 1902 wickelt Sitz, Rücken und Armlehne in eine spiralförmige Silhouette. Pergament, ebonisiertes Holz, gehämmertes Kupfer, Zinnintarsien und Quasten bilden keine aufgesetzte Dekoration; jedes Material betont eine Krümmung oder Verbindung.",
      "Bugatti entwarf das Möbel als räumliche Grafik. Der große Kreis im Rücken hält die Figur zusammen, während asymmetrische Stützen und kleine Metallflächen die Last sichtbar verteilen. Der Stuhl wirkt zugleich wie Sitzgerät, Musikinstrument und Schriftzeichen."
    ], [C("Carlo Bugatti Cobra chair 1902", "Carlo Bugattis Schneckenstuhl"),C("Carlo Bugatti chair detail parchment copper", "Pergament, Kupfer und Intarsien")], [src("Brooklyn Museum: Cobra Chair", "https://www.brooklynmuseum.org/opencollection/objects/3886"),src("Musée d'Orsay: Carlo Bugatti furniture", "https://www.musee-orsay.fr/en/artworks/fauteuil-9097")]),

    card("Märchen und Sagen in ethnografischen Quellen", "Warum Buschkühe und Elefanten Feinde sind · Efik", [
      "Buschkuh und Elefant streiten über ihre Stärke. Der Häuptling setzt einen öffentlichen Kampf auf dem Marktplatz an. Beide beginnen bereits auf der Straße und sperren den Weg; ein leicht ablenkbarer Affe gelingt es erst nach vielen Umwegen, dem Häuptling davon zu berichten.",
      "Der Häuptling erschießt beide Tiere mit vergifteten Pfeilen. Seitdem kämpfen wilde Tiere im Busch. Elphinstone Dayrell veröffentlichte die Efik-Erzählung 1910 in Folk Stories from Southern Nigeria."
    ], [C("African forest buffalo illustration", "Afrikanische Buschkuh"),C("African forest elephant illustration", "Afrikanischer Waldelefant")], [src("Project Gutenberg: Folk Stories from Southern Nigeria", "https://www.gutenberg.org/ebooks/34655")], {original:{label:"Vollständiger Originaltext · Elphinstone Dayrell, 1910",source:"https://archive.org/details/folkstoriesfroms00dayr",remote:{url:"https://raw.githubusercontent.com/GITenberg/Folk-Stories-from-Southern-Nigeria-West-Africa_34655/master/34655-8.txt",encoding:"windows-1252",start:"_Why the Bush Cow and the Elephant are bad Friends_",end:"XXI\n\n_The Cock who caused a Fight between two Towns_",reflow:true,fetchLabel:"GITenberg-Transkription"}}}),

    card("Sagengestalten, Legenden und Märchen weltweit", "Mami Wata · West- und Zentralafrika", [], [C("Mami Wata chromolithograph", "Mami-Wata-Darstellung"),C("Mami Wata shrine Togo", "Mami-Wata-Schrein")], [src("Wikipedia: Mami Wata", "https://de.wikipedia.org/wiki/Mami_Wata")], {wiki:{page:"Mami_Wata",language:"de",count:4}}),

    card("Historische Anekdoten", "George Psalmanazars erfundenes Formosa · London, 1704", [
      "Ein junger Europäer trat 1703 in England als George Psalmanazar auf und behauptete, aus Formosa, dem heutigen Taiwan, zu stammen. Ein Jahr später veröffentlichte er eine ausführliche Beschreibung der Insel. Alphabet, Kalender, Religion und gesellschaftliche Bräuche hatte er erfunden. Gerade die Fülle überprüfbar wirkender Einzelheiten machte seine Erzählung glaubhaft.",
      "Psalmanazar wurde in London herumgereicht und unterrichtete sogar seine erfundene Sprache. Später nahm er die Behauptungen zurück. Seine auf eigenen Wunsch erst nach dem Tod erschienenen Memoiren von 1764 beschrieben den Betrug. Der Fall zeigt, wie europäische Erwartungen über ein kaum bekanntes Land als Ersatz für tatsächliche Prüfung dienten."
    ], [C("George Psalmanazar portrait", "George Psalmanazar"),C("Psalmanazar Formosan alphabet 1704", "Das erfundene formosanische Alphabet")], [src("Taiwan Ministry of Culture: Psalmanazars erfundene Geschichte Formosas", "https://www.moc.gov.tw/en/News_Content2.aspx?n=467&s=14598"),src("Oxford Text Archive: Memoirs of George Psalmanazar", "https://llds.ling-phil.ox.ac.uk/llds/xmlui/handle/20.500.14106/K057408.000")]),

    card("Literarische und filmische Tropen und Typenszenen", "Der verdeckte Schnitt hinter einem vorbeiziehenden Körper", [
      "Eine dunkle Jacke, eine Säule oder ein Fahrzeug füllt für wenige Bilder die ganze Leinwand. In diesem Moment wechselt die Aufnahme. Bewegung und Klang laufen über die Grenze weiter, deshalb liest das Auge den Wechsel als dieselbe Kamerafahrt.",
      "Alfred Hitchcock versteckte in Rope die Rollenwechsel der damaligen Filmkassetten häufig im Rücken einer Figur. Birdman und 1917 benutzen denselben Übergang digital und verteilen ihn auf Türen, Wände, Dunkelheit und schnelle Schwenks. Die Szene wirkt fortlaufend, obwohl Ort, Zeit oder Technik einen Schnitt verlangen."
    ], [C("Rope 1948 film James Stewart still", "Rope, 1948"),C("motion picture film editing splice", "Filmschnitt")], [src("BFI: How they shot Rope", "https://www.bfi.org.uk/features/rope-alfred-hitchcock-long-takes"),src("American Cinematographer: 1917 and the illusion of one shot", "https://theasc.com/articles/mission-impossible-1917")]),

    card("Wichtige Akkorde und Akkordfolgen", "Omnibus-Folge", [
      "Über zwei gehaltenen Tönen bewegen sich Bass und Oberstimme chromatisch in Gegenrichtung. In c-Moll führt etwa C im Bass abwärts über H und B, während Es aufwärts über E und F steigt. Die wechselnden Lagen lassen Dominantseptakkorde und übermäßige Sextakkorde ineinander umkippen.",
      "Die Folge erscheint in Beethovens 32 Variationen c-Moll WoO 80 und in Schuberts Musik als Mittel für lange Steigerungen. Gehört werden soll die entgegengesetzte Chromatik: Jeder Schritt verändert die harmonische Deutung, während zwei gemeinsame Töne den Zusammenhang sichern."
    ], [C("omnibus progression music notation", "Stimmführung der Omnibus-Folge"),C("Beethoven 32 Variations WoO 80 score", "Beethovens 32 Variationen")], [src("Open Music Theory: The Omnibus Progression", "https://viva.pressbooks.pub/openmusictheory/chapter/omnibus-progression/"),src("IMSLP: 32 Variations in C minor, WoO 80", "https://imslp.org/wiki/32_Variations_in_C_minor%2C_WoO_80_(Beethoven%2C_Ludwig_van)")]),

    card("Falsche Modelle mit großer Erklärungskraft", "Versunkene Landbrücken", [
      "Biogeografen des 19. und frühen 20. Jahrhunderts verbanden getrennte Kontinente durch ehemalige Landstreifen. Lemuria erklärte verwandte Lemuren in Madagaskar und Indien; weitere Brücken sollten ähnliche Fossilien, Pflanzen und Süßwassertiere auf beiden Seiten eines Ozeans ordnen.",
      "Das Modell passte zu einer festen Erdkruste und erlaubte Wanderung über trockenes Land. Ozeanbodenkarten, Paläomagnetismus und die Altersfolge der Gesteine zeigten später bewegliche Platten und junge Ozeanbecken. Kontinentaldrift erklärte dieselben Verteilungen mit einem messbaren Mechanismus."
    ], [C("Lemuria map land bridge", "Karte einer angenommenen Landbrücke"),C("continental drift fossil distribution map", "Fossilverteilungen auf verbundenen Kontinenten")], [src("UC Museum of Paleontology: Plate tectonics and biogeography", "https://ucmp.berkeley.edu/geology/tectonics.html"),src("Encyclopaedia Britannica: land bridge", "https://www.britannica.com/science/land-bridge-geology")]),

    card("Entzifferte Schriften", "Maharajasa tratarasa Menamdrasa", [
      "Indo-griechische Münzen trugen dieselbe Herrscherangabe in zwei Schriften. Auf der Vorderseite steht griechisch ΒΑΣΙΛΕΩΣ ΣΩΤΗΡΟΣ ΜΕΝΑΝΔΡΟΥ. Die Rückseite gibt in Kharosthi maharajasa tratarasa Menamdrasa. Wiederkehrende Königsnamen und Titel lieferten James Prinsep und anderen Forschern Lautwerte für die von rechts nach links geschriebene Schrift.",
      "Die Formen sind Genitive. Vollständige Übersetzung beider Legenden: „Des großen Königs, des Retters Menander.“ Die Münze bildet damit einen kurzen, verlässlichen Paralleltext, bei dem Name, Titel und grammatische Endungen getrennt verglichen werden."
    ], [C("Menander I Soter silver drachm Kharosthi", "Zweisprachige Drachme Menanders I"),C("Kharosthi script chart", "Kharosthi-Zeichen")], [src("British Museum: coin of Menander I", "https://www.britishmuseum.org/collection/term/BIOG112083"),src("Encyclopaedia Iranica: Kharosthi", "https://iranicaonline.org/articles/kharosthi-script")]),

    card("Rhetorische und poetische Verfahren", "“The love of wicked men converts to fear, / That fear to hate, and hate turns one or both …”", [
      "Anadiplose · William Shakespeare, Richard II, V,1. Das letzte tragende Wort eines Satzteils eröffnet den nächsten: love führt zu fear, fear zu hate. Die Wiederaufnahme verwandelt eine Behauptung in eine Kette, in der jede Folge bereits sprachlich aus ihrer Ursache hervorgeht.",
      "Die Reihe endet bei danger und death. Der Vers beschreibt damit keinen plötzlichen Umschlag. Jede Stufe wird aus dem vorigen Wort geboren und engt den möglichen Ausgang weiter ein."
    ], [C("Richard II Shakespeare engraving", "Richard II"),C("Richard II first quarto page", "Früher Druck von Richard II")], [src("Folger Shakespeare Library: Richard II 5.1", "https://www.folger.edu/explore/shakespeares-works/richard-ii/read/5/1/")], {summary:"Anadiplose · William Shakespeare, Richard II, V,1"}),

    card("Etymologien und Begriffsgeschichten", "Check, Schach und Scheck", [
      "Persisch šāh bezeichnet den König. Über Arabisch šāh gelangte das Wort mit dem Schachspiel in europäische Sprachen. Altfranzösisch eschec benannte die Bedrohung des Königs und außerdem Niederlage oder Hindernis; daraus entstand englisch check als Hemmung, Prüfung und Kontrolle.",
      "Im Zahlungsverkehr bezeichnete check eine Gegenkontrolle der Rechnung und später die schriftliche Zahlungsanweisung. Deutsch entlehnte Scheck aus diesem englischen Gebrauch, während Schach den älteren Spielnamen bewahrte. Eine Königsbedrohung führte so über Kontrolle und Gegenprüfung zum Bankformular."
    ], [C("Persian shah chess manuscript", "Schach in einer persischen Handschrift"),C("historic bank cheque", "Historischer Scheck")], [src("Oxford English Dictionary: check, n.1", "https://www.oed.com/dictionary/check_n1"),src("DWDS: Scheck", "https://www.dwds.de/wb/Scheck"),src("CNRTL: échec", "https://www.cnrtl.fr/etymologie/%C3%A9chec")]),

    card("Urban Legends", "Das verschwundene Hotelzimmer", [
      "Die Erzählung spielt meist während der Pariser Weltausstellung von 1889 oder 1900. Eine junge Frau holt Medizin für ihre kranke Mutter. Bei ihrer Rückkehr leugnen Hotelangestellte, die Mutter je gesehen zu haben; Zimmernummer und Einrichtung haben sich verändert. Spätere Fassungen erklären die Vertuschung mit Pest und der Angst vor einer Quarantäne.",
      "Die Geschichte erschien zu Beginn des 20. Jahrhunderts in Zeitungen und Sammlungen als angeblich wahrer Fall. Alexander Woollcott verbreitete 1929 eine Fassung in While Rome Burns; der Film So Long at the Fair von 1950 machte daraus einen geschlossenen Mysteryplot. Belegt ist die Zirkulation der Erzählung, kein entsprechendes Pariser Hotelereignis."
    ], [C("Paris Exposition 1900 hotel postcard", "Paris während der Weltausstellung 1900"),C("So Long at the Fair 1950 film poster", "So Long at the Fair, 1950")], [src("Snopes: The Vanishing Hotel Room", "https://www.snopes.com/fact-check/the-vanishing-hotel-room/"),src("British Film Institute: So Long at the Fair", "https://www2.bfi.org.uk/films-tv-people/4ce2b6b6b596a")]),

    card("Interessante Sprachen und Sprachmerkmale", "Koreanisch -te-: erinnerte Wahrnehmung", [
      "비가 오더라 · pi-ka o-te-ra · Regen-NOM kommen-ERINNERT-DECL. Der Sprecher berichtet eine früher selbst wahrgenommene Situation: „Ich sah, dass es regnete.“ Die Form -te- markiert den zurückblickenden Zugang zur Information. Vergangenheitszeit und Informationszugang bleiben getrennt.",
      "Bei willentlichen Handlungen der ersten Person entstehen besondere Beschränkungen, weil Handelnder und damaliger Beobachter zusammenfallen. In Erzählungen trennt -te- daher eine erinnerte Szene von einer nachträglichen Schlussfolgerung oder einem Bericht aus zweiter Hand."
    ], [C("Korean conversation Seoul", "Gespräch auf Koreanisch"),C("Hangul calligraphy rain", "Koreanische Schrift")], [src("National Institute of Korean Language: Korean grammar", "https://korean.go.kr/front_eng/roman/roman_01.do"),src("Sohn: The Korean Language · Cambridge", "https://www.cambridge.org/core/books/korean-language/DBF36E40F8033C25A0C04E7705CBE557")]),

    card("Interessante Listen", "Ötzis Ausrüstung", [
      "Kupferbeil; Feuersteindolch mit Scheide; unfertiger Eibenbogen; Köcher mit vierzehn Pfeilen, davon zwei schussbereit; Retuscheur aus Lindenholz und Geweih; Gürtel mit Tasche; Zunderschwamm und Pyrit; zwei Birkenrindengefäße; Rückentrage; Netz; Feuersteinwerkzeuge; Birkenporlinge an Lederriemen.",
      "Die geschlossene Fundgruppe stammt aus dem Moment seines Todes um 3250 v. Chr. Unfertige Pfeile stehen neben reparierbaren Werkzeugen, Glutbehälter neben Pilzen für Feuer und Medizin. Erst die Zusammenstellung zeigt Reisevorbereitung, Wartung und Transport als zusammenhängendes technisches System."
    ], [C("Otzi equipment reconstruction", "Rekonstruktion von Ötzis Ausrüstung"),C("Otzi copper axe", "Ötzis Kupferbeil"),C("Otzi quiver arrows", "Köcher und Pfeile")], [src("South Tyrol Museum of Archaeology: Equipment", "https://www.iceman.it/en/equipment/"),src("Nature: The Iceman's equipment", "https://www.nature.com/articles/35025005")], {summary:"Werkzeug, Waffen, Feuerzeug, Behälter und Reparaturmaterial einer einzelnen Alpenquerung."}),

    card("Gute einfache Cartoons", "George du Maurier · True Humility · 9. November 1895", [
      "Ein Bischof bemerkt beim Frühstück, das Ei seines jungen Geistlichen sei schlecht. Der Geistliche antwortet: „Oh no, my Lord, I assure you! Parts of it are excellent!“ Das Bild zeigt seinen angespannten Versuch, Höflichkeit gegen die eigene Wahrnehmung durchzuhalten.",
      "Du Maurier veröffentlichte den Cartoon in Punch. Pointe und Zeichnung brauchen nur zwei Sätze: Rangunterschied, verdorbenes Ei und die absurde Teilrettung eines unteilbaren Urteils."
    ], [F("True humility.png", "Vollständiger Cartoon · Punch, 9. November 1895")], [src("Wikimedia Commons: True Humility", "https://commons.wikimedia.org/wiki/File:True_humility.png"),src("Punch, 9 November 1895 · Internet Archive", "https://archive.org/details/punchvol108a109lemouoft")]),

    card("Grenzfälle", "Dictyostelium discoideum · Einzelzelle oder Körper", [
      "Bei reichlicher Nahrung leben die Amöben einzeln und teilen sich. Fehlen Bakterien, senden sie periodische cAMP-Signale aus, strömen zusammen und bilden einen wandernden Zellverband. Dieser besitzt Vorder- und Hinterende und reagiert als Ganzes auf Licht, Wärme und Feuchtigkeit.",
      "Am Ziel entsteht ein Fruchtkörper. Rund ein Fünftel der Zellen bildet den toten Stiel; die übrigen werden zu Sporen. Genetisch verschiedene Einzelzellen kooperieren, konkurrieren und spezialisieren sich vorübergehend. Der Lebenszyklus verteilt Individualität auf Zelle, Verband und Spore."
    ], [C("Dictyostelium discoideum life cycle", "Lebenszyklus von Dictyostelium"),C("Dictyostelium fruiting bodies microscope", "Fruchtkörper")], [src("DictyBase: Dictyostelium life cycle", "https://dictybase.org/Multimedia/lifecycle/index.html"),src("Nature Education: Social amoebae", "https://www.nature.com/scitable/topicpage/cooperation-and-conflict-in-the-social-amoeba-15769490/")]),

    card("UnsichtbareKonventionen", "Wo eine Untertitelzeile umbricht", [
      "Untertitel stehen meist in höchstens zwei Zeilen. Der Umbruch folgt einer syntaktischen Fuge: nach Satzzeichen, vor einer neuen Phrase oder zwischen Haupt- und Nebensatz. Artikel und Substantiv, Präposition und Ergänzung sowie Vorname und Nachname bleiben zusammen.",
      "Ein Umbruch nach „der“ zwingt das Auge, das erwartete Substantiv in der nächsten Zeile erneut zu suchen. Ein Umbruch nach einer abgeschlossenen Phrase nutzt dieselbe kurze Pause, die auch der gesprochene Satz anbietet. Erst eine falsche Trennung macht die stille Grammatik des Untertitels sichtbar."
    ], [C("film subtitles two lines example", "Zweizeiliger Untertitel"),C("subtitle editing workstation", "Untertitelbearbeitung")], [src("Netflix Timed Text Style Guide: line treatment", "https://partnerhelp.netflixstudios.com/hc/en-us/articles/215274938-English-Timed-Text-Style-Guide"),src("BBC Subtitle Guidelines", "https://bbc.github.io/subtitle-guidelines/")]),

    card("VerloreneTechniken", "Zündkerzenbilder lesen", [
      "Nach einer Fahrt wurde die Zündkerze herausgeschraubt und an Isolator, Elektroden und Ablagerungen gelesen. Hellbraune oder graue Flächen zeigten eine passende Verbrennung; trockener Ruß deutete auf ein fettes Gemisch oder schwache Zündung, ölige Beläge auf Öl im Brennraum, geschmolzene Elektroden auf starke Überhitzung.",
      "Vergaser, Zündzeitpunkt, Wärmewert der Kerze und Motorzustand hinterließen gemeinsam ein Farbbild. Die Diagnose verlangte eine Fahrt unter bekannter Last und den Vergleich mehrerer Zylinder. Einspritzsteuergeräte, Lambdasonden und Fehlerspeicher liefern heute getrennte Messwerte für viele derselben Ursachen."
    ], [C("spark plug reading chart", "Historische Zündkerzenbilder"),C("mechanic inspecting spark plug", "Prüfung einer Zündkerze")], [src("NGK: Spark plug troubleshooting", "https://ngksparkplugs.com/en/resources/read-spark-plug"),src("Champion: How to read spark plugs", "https://www.championautoparts.com/Technical/Tech-Tips/How-to-Read-Spark-Plugs.html")]),

    card("InternetArchäologie", "Zombo.com", [
      "Die Seite begrüßt Besucher seit 1999 mit einer kreisenden Scheibe und einer Stimme, die unbegrenzte Möglichkeiten verspricht. Die Ansage führt zu keiner Anwendung; ihr einziger Inhalt ist die endlose Vorbereitung auf das, was angeblich gleich möglich wird.",
      "Zombo.com parodierte Flash-Intros, Ladebildschirme und überzogene Versprechen der Dotcom-Zeit. Die heutige HTML5-Fassung bewahrt Timing, Stimme und minimale Grafik. Aus einer technischen Warteschleife wurde ein eigenständiges Stück Netzkomik."
    ], [C("Zombo com website screenshot", "Zombo.com"),C("Macromedia Flash Player logo", "Flash als ursprüngliche Laufzeit")], [src("Zombo.com", "https://zombo.com/"),src("Know Your Meme: Zombo.com", "https://knowyourmeme.com/memes/sites/zombo-com")]),

    card("SchlechtesWritingSeziert", "Wonder Woman 1984 · Steve im Körper eines Fremden", [
      "Diana wünscht Steve Trevor zurück. Er erwacht im Körper eines namenlosen Mannes; für Diana und das Publikum erscheint er als Steve. Beide benutzen den fremden Körper für Reisen, Kämpfe und Sex. Die Inszenierung behandelt den Besitzer als optischen Scherz und kehrt erst am Schluss kurz zu seinem Gesicht zurück.",
      "Der Fehler liegt im Regelbruch der eigenen Prämisse. Die Geschichte benennt ausdrücklich einen zweiten Menschen und schreibt ihm anschließend weder Bewusstsein noch Zustimmung noch Folgen zu. Dadurch beschädigt die romantische Handlung Dianas Urteilskraft, ohne diesen Konflikt erzählen zu wollen."
    ], [C("Wonder Woman 1984 Steve Trevor Diana still", "Diana und Steve in Wonder Woman 1984")], [src("Warner Bros.: Wonder Woman 1984", "https://www.warnerbros.com/movies/wonder-woman-1984"),src("Wonder Woman 1984 screenplay", "https://deadline.com/wp-content/uploads/2021/01/Wonder-Woman-1984-Screenplay.pdf")], {works:["Steve erhält für die Dauer des Wunsches einen eigenen neu gebildeten Körper; die Romanze behält ihre Handlung ohne fremden Besitzer.","Der fremde Mann bleibt bei Bewusstsein und teilt den Körper mit Steve; Zustimmung und Gefahr werden zum offenen Konflikt jeder Szene.","Diana erkennt den Preis sofort und beendet den Wunsch, bevor sie handelt; die Versuchung besteht dann in einer klaren Entscheidung statt in verdrängten Folgen."]}),

    card("DasIstHierGanzInDerNähe", "Museum AUTOVISION · Altlußheim", [
      "Das Museum liegt rund 25 Kilometer von Mannheim entfernt. Seine Wankel-Dauerausstellung versammelt mehr als achtzig Rotationskolbenmotoren, Prüfstände, Serienfahrzeuge und Prototypen. Dazu kommen frühe Fahrräder, NSU-Fahrzeuge, Elektro-, Hybrid- und Wasserstoffantriebe sowie über achtzig Funktionsmodelle in der Technologie-Arena.",
      "Adresse: Hauptstraße 154, 68804 Altlußheim. Geöffnet Donnerstag, Freitag und Sonntag 10–17 Uhr, Samstag 13–17 Uhr. Die Sammlung eignet sich besonders für den direkten Vergleich verschiedener Lösungen desselben Motorprinzips."
    ], [C("Museum Autovision Altlußheim", "Museum AUTOVISION"),C("NSU Ro 80 Wankel engine", "NSU Ro 80 und Wankelmotor")], [src("Museum AUTOVISION", "https://www.museum-autovision.de/"),src("Museum AUTOVISION: Öffnungszeiten", "https://www.museum-autovision.de/oeffnungszeiten.html"),src("Gemeinde Altlußheim: Stiftung Museum Autovision", "https://www.altlussheim.de/freizeit-erholung/sehenswertes-im-ort/stiftung-museum-autovision")], {summary:"Altlußheim · mehr als achtzig Wankelmotoren, Prüfstände und seltene Fahrzeuge."}),

    card("VisuelleIdeenDieIchKlauenWill", "Jewgeni Bauer · Vordergrund als zweite Bühne", [
      "Bauer stellte in seinen Filmen der 1910er Jahre Pflanzen, Vorhänge, Treppengeländer und Möbel dicht vor die Kamera. Figuren erscheinen zwischen diesen dunklen Formen, verschwinden kurz dahinter und betreten erst danach den helleren Handlungsraum.",
      "Die übertragbare Idee ist eine doppelte Raumtiefe: Ein unscharfer Vordergrund gibt der Kamera einen Standort und setzt bewegliche Rahmen ins Bild. Eine Figur verändert ihre Bedeutung schon dadurch, ob sie vor, hinter oder innerhalb dieses Rahmens steht."
    ], [C("Yevgeni Bauer After Death 1915 film still", "After Death, 1915"),C("Yevgeni Bauer The Dying Swan film still", "The Dying Swan, 1917")], [src("BFI: Yevgeni Bauer", "https://www.bfi.org.uk/features/yevgeni-bauer-russian-cinema-stylist"),src("Internet Archive: After Death, 1915", "https://archive.org/search?query=creator%3A%22Yevgeni+Bauer%22")]),

    {category:"Eigene GIFs",kind:"gif",title:"Membranlauf",detail:[],media:[I("assets/gifs/membranlauf.gif","assets/gifs/membranlauf.gif","Membranlauf","Eigene Animation")],sources:[]},

    // Schlussrunde: je eine sechste Karte für die beiden neuen Kategorien.
    card("Trends in Art", "Anne Kim · Sensation and Memory", [
      "Kim stellt schmale, durchscheinende Bahnen senkrecht in den Raum. Blau, Orange und Rot wandern als Lichtverläufe über ihre Flächen. Vorder- und Rückseite verändern sich mit Blickrichtung, Abstand und Umgebungslicht.",
      "Die Arbeit verbindet Textilwissen mit Lichtinstallation. Farbe sitzt teilweise im Material und entsteht teilweise durch Projektion und Überlagerung. Mit jedem Standort entsteht eine neue räumliche Mischung."
    ], [I("https://publications.risd.edu/sites/default/files/2026-05/anne-kim-tx-26-2.jpg", "https://publications.risd.edu/grad-show-2026/textiles", "Sensation and Memory, 2026", "RISD Grad Show 2026")], [src("RISD Grad Show 2026: Textiles", "https://publications.risd.edu/grad-show-2026/textiles")], {summary:"Transluzente Textilbahnen mischen Materialfarbe, Projektion und Umgebungslicht."}),

    card("Writing Tipps", "Den Höhepunkt zuerst kalibrieren", [
      "Schreibe die entscheidende Wendung oder den letzten starken Austausch als Probe vor den vorhergehenden Szenen. Lege darin Ton, größtes Gewicht und Rhythmus fest. Baue dann rückwärts und gib jeder früheren Wiederholung weniger Endgültigkeit, damit keine Vorstufe den vorgesehenen Höhepunkt verbraucht.",
      "Edgar Allan Poe beschreibt dieses Verfahren an der vorletzten Strophe von The Raven. Der vorab geschriebene Höhepunkt bestimmte Versmaß, Strophenlänge und die Steigerung der Fragen. Eine später entstandene stärkere Strophe hätte er bewusst abgeschwächt."
    ], [C("Edgar Allan Poe portrait 1849", "Edgar Allan Poe"),C("The Raven manuscript Poe", "The Raven")], [src("Wikisource: The Philosophy of Composition", "https://en.wikisource.org/wiki/The_Philosophy_of_Composition")], {summary:"Eine vorab geschriebene Schlüsselszene setzt die Obergrenze für alle früheren Steigerungen.",writingSource:{label:"Wortlaut · Edgar Allan Poe, The Philosophy of Composition",source:"https://archive.org/details/philosophyofcomp00poee",remote:{wikiPage:"The_Philosophy_of_Composition",wikiLanguage:"en",start:"Here then the poem may be said to have had its beginning",end:"And here I may as well say a few words of the versification",flexibleMarkers:true,reflow:true,fetchLabel:"Wikisource-Transkription"}}})
  );
})();

(() => {
  "use strict";
  const replaceLast = (matches, replacement) => {
    const target = [...window.KARTEN].reverse().find(matches);
    if (!target) return;
    for (const key of Object.keys(target)) if (key !== "category") delete target[key];
    Object.assign(target, replacement);
    return target;
  };
  const opening = replaceLast(card => card.title.startsWith("The past"), {});
  opening.kind = "quote";
  opening.detail = [];
  opening.title = "Mr Verloc, going out in the morning, left his shop nominally in charge of his brother-in-law.";
  opening.wiki = {page:"The Secret Agent", language:"en", count:1};
  opening.media = [C("Joseph Conrad portrait 1904", "Joseph Conrad")];
  opening.sources = [S("Wikipedia: The Secret Agent", "https://en.wikipedia.org/wiki/The_Secret_Agent"), S("Project Gutenberg: The Secret Agent", "https://www.gutenberg.org/ebooks/974")];
  const menehune = replaceLast(card => card.title.startsWith("Mami Wata"), {});
  menehune.title = "Menehune " + String.fromCharCode(183) + " Hawaii";
  menehune.detail = [];
  menehune.wiki = {page:"Menehune", language:"de", count:3};
  menehune.media = [C("Menehune Alekoko fishpond Hawaii", "Alekoko-Fischteich"), C("Menehune statue Hawaii", "Menehune-Darstellung")];
  menehune.sources = [S("Wikipedia: Menehune", "https://de.wikipedia.org/wiki/Menehune"), S("Hawaii State Parks: Alekoko Fishpond", "https://dlnr.hawaii.gov/dsp/parks/kauai/huleia-national-wildlife-refuge/")];
  const ladyBird = replaceLast(card => card.title === "Omnibus-Folge", {});
  ladyBird.title = "Lady-Bird-Turnaround";
  ladyBird.summary = "Vier Durseptakkorde teilen die Oktave in kleinen Terzen: Imaj7, bIIImaj7, bVImaj7, bIImaj7.";
  ladyBird.detail = [];
  ladyBird.detail.push("In C-Dur lautet die Folge Cmaj7, Esmaj7, Asmaj7, Desmaj7. Jeder Grundton fällt um eine große Terz; zusammen teilen die vier Stationen die Oktave symmetrisch. Gemeinsame Töne und Halbtonschritte in den Oberstimmen halten die entfernten Tonarten zusammen.");
  ladyBird.detail.push("Tadd Dameron verwendet die Folge im letzten Teil von Lady Bird. Miles Davis übernimmt ihre Logik in Half Nelson. Gehört werden soll der Rückweg zur Tonika: Desmaj7 liegt einen Halbton über Cmaj7 und schließt den symmetrischen Umlauf mit der kleinsten Bassbewegung.");
  ladyBird.media = [C("Tadd Dameron portrait piano", "Tadd Dameron"), C("Lady Bird Tadd Dameron lead sheet", "Lady-Bird-Turnaround")];
  ladyBird.sources = [S("Tadd Dameron: Lady Bird harmonic analysis", "https://jazzomat.hfm-weimar.de/dbformat/dboverview/solo_info.mhtml?solo_id=18862"), S("Jazz Library: Tadd Dameron Turnaround", "https://www.jazz-library.com/articles/tadd-dameron-turnaround/")];
  const blackboard = replaceLast(card => card.title === "Das verschwundene Hotelzimmer", {});
  blackboard.title = "Die Aufgabe an der Tafel";
  blackboard.summary = "Ein Student hielt zwei offene Forschungsprobleme für Hausaufgaben und löste sie.";
  blackboard.detail = [];
  blackboard.detail.push("George Dantzig kam 1939 zu spät in eine Statistikvorlesung. Zwei Aufgaben standen an der Tafel. Er hielt sie für die Hausaufgabe, löste beide in den folgenden Tagen und erfuhr erst später, dass es offene Probleme der Statistik gewesen waren.");
  blackboard.detail.push("Spätere Fassungen lassen einen namenlosen Studenten ein einziges unlösbares Problem in einer Nacht bewältigen; Lehrer und Universität wechseln. Dantzig selbst bestätigte den Kern. Zeitungsartikel, Predigten und der Film Good Will Hunting verwandelten den belegten Vorfall in eine Parabel über Erwartungen.");
  blackboard.media = [C("George Dantzig mathematician portrait", "George Dantzig"), C("statistics equations blackboard", "Statistische Aufgaben an einer Tafel")];
  blackboard.sources = [S("Stanford: George Dantzig interview", "https://web.stanford.edu/group/SOL/dantzig-sample/dantzigstory.htm"), S("Snopes: The Unsolvable Math Problem", "https://www.snopes.com/fact-check/the-unsolvable-math-problem/")];
  const marriage = replaceLast(card => card.title.includes("tzis Ausr"), {});
  marriage.title = "Darwins Heiratsliste "+ String.fromCharCode(183) + " 1838";
  marriage.summary = "Zwei Spalten ordnen Kinder, Gesellschaft, Zeitverlust, Geld und Freiheit.";
  marriage.detail = [];
  marriage.detail.push("Heiraten: Kinder; eine ständige Gefährtin und Freundin im Alter; Musik und weibliches Geplauder; ein Haus; jemand, der sich um das Haus kümmert. Folgen: weniger Geld für Bücher; schrecklicher Zeitverlust; Besuche bei Verwandten; Sorge und Verantwortung für Kinder; mögliche Streitigkeiten.");
  marriage.detail.push("Unverheiratet bleiben: Freiheit, hinzugehen wohin man will; Gespräche kluger Männer in Clubs; Arbeit, so viel man will. Folgen: fehlendes Spiel mit Kindern; Einsamkeit im Alter. Darwin schrieb am Ende: Marry, Marry, Marry. Q.E.D. Am 29. Januar 1839 heiratete er Emma Wedgwood.");
  marriage.media = [C("Charles Darwin marriage pros cons note", "Darwins Heiratsnotiz"), C("Emma Darwin portrait", "Emma Darwin")];
  marriage.sources = [S("Darwin Correspondence Project: To marry or not to marry", "https://www.darwinproject.ac.uk/commentary/life-sciences/darwin-marriage"), S("Cambridge Digital Library: Darwin's journal", "https://cudl.lib.cam.ac.uk/view/MS-DAR-00210-00002/50")];
})();

// Die alte Bezeichnung bleibt nur in den archivierten Rohdaten erhalten.
for (const card of window.KARTEN) {
  if (card.category === "Historische Koinzidenzen") card.category = "Historische Anekdoten";
}

(() => {
  "use strict";
  const src = (label, url) => S(label, url);
  const card = (category, title, detail, media, sources = [], extra = {}) => ({
    category, title, detail, media, sources, ...extra
  });
  const proverbSources = (term, alphabet) => [
    src("Wikiquote: Deutsche Sprichwörter", "https://de.wikiquote.org/wiki/Deutsche_Sprichw%C3%B6rter"),
    src(`Wikipedia: ${alphabet}`, alphabet === "Kyrillisches Alphabet" ? "https://de.wikipedia.org/wiki/Kyrillisches_Alphabet" : "https://de.wikipedia.org/wiki/Griechisches_Alphabet"),
    src(`Duden-Suche: ${term}`, `https://www.duden.de/suchen/dudenonline/${encodeURIComponent(term)}`)
  ];

  window.KARTEN.push(
    card("Englisch Vokabular", "faff", [], [
      F("Tangled leads.JPG", "Eine umständlich verkabelte Arbeitsstelle")
    ], [src("Cambridge Dictionary: faff", "https://dictionary.cambridge.org/dictionary/english/faff")], {
      summary:"lästiger Aufwand; unnötiges Herumtun",
      searchTerm:"faff British English meaning usage examples",
      vocabulary:{pronunciation:"/fæf/",register:"britisch, informell",meaning:"Als Substantiv bezeichnet faff eine Arbeit, die gemessen am Ergebnis zu viel Mühe macht. Faff about oder faff around heißt, Zeit mit Nebensachen zu verlieren.",examples:[
        {english:"Getting the printer onto the new Wi-Fi was a faff.",german:"Den Drucker ins neue WLAN zu bringen, war ein nerviges Gefummel."},
        {english:"Stop faffing about with the margins and send the invoice.",german:"Hör auf, an den Seitenrändern herumzubasteln, und schick die Rechnung ab."},
        {english:"The recipe is simple; cleaning the grinder is the faff.",german:"Das Rezept ist einfach. Lästig ist das Saubermachen der Mühle."}
      ]}
    }),

    card("Englisch Vokabular", "wonky", [], [
      F("BrokenChair.jpg", "Ein beschädigter, unsicher stehender Stuhl"),
      F("Carottes ayant poussé de façon bizarre 20101102.jpg", "Unregelmäßig gewachsene Karotten")
    ], [src("Cambridge Dictionary: wonky", "https://dictionary.cambridge.org/dictionary/english/wonky")], {
      summary:"schief oder unzuverlässig; in den USA auch sehr fachlich",
      searchTerm:"wonky adjective UK US meanings examples",
      vocabulary:{pronunciation:"UK /ˈwɒŋ.ki/, US /ˈwɑːŋ.ki/",register:"informell",meaning:"Im britischen Englisch beschreibt wonky eine sichtbare Schieflage oder eine unzuverlässige Funktion. Im amerikanischen Englisch bezeichnet es außerdem eine Darstellung, die tief in fachliche Einzelheiten geht.",examples:[
        {english:"The shelf looks wonky because the left bracket sits lower.",german:"Das Regal hängt schief, weil der linke Winkel tiefer sitzt."},
        {english:"After the update, the payment screen went wonky.",german:"Nach dem Update funktionierte die Bezahlseite nur noch unzuverlässig."},
        {english:"The interview gets wonky when they start discussing municipal bonds.",german:"Sobald es um Kommunalanleihen geht, wird das Interview sehr fachlich."}
      ]}
    }),

    card("Englisch Vokabular", "miffed", [], [
      F("Annoyed Face.jpg", "Ein deutlich verärgerter Gesichtsausdruck")
    ], [src("Cambridge Dictionary: miffed", "https://dictionary.cambridge.org/dictionary/english/miffed")], {
      summary:"verärgert oder gekränkt über das Verhalten eines anderen",
      searchTerm:"miffed meaning usage register examples",
      vocabulary:{pronunciation:"/mɪft/",register:"informell",meaning:"Miffed bezeichnet einen eher leichten persönlichen Ärger. Häufig fühlt sich jemand übergangen oder geringgeschätzt.",examples:[
        {english:"I was miffed that they changed the date without telling me.",german:"Ich war verärgert, weil sie das Datum änderten, ohne mir Bescheid zu geben."},
        {english:"He looked slightly miffed when his name was left off the list.",german:"Er wirkte etwas gekränkt, als sein Name auf der Liste fehlte."},
        {english:"The neighbours are miffed about the bins blocking the gate.",german:"Die Nachbarn sind ungehalten, weil die Mülltonnen das Tor versperren."}
      ]}
    }),

    card("Englisch Vokabular", "clobber", [], [
      F("BagGloves.JPG", "Handschuhe für das Training am Sandsack"),
      F("Ryszard Szurkowski equipment.jpg", "Sportkleidung und Ausrüstung")
    ], [src("Cambridge Dictionary: clobber", "https://dictionary.cambridge.org/dictionary/english/clobber")], {
      summary:"hart treffen oder schwer schädigen; britisch auch Kleidung und Ausrüstung",
      searchTerm:"clobber verb noun British English meanings",
      vocabulary:{pronunciation:"UK /ˈklɒb.ə/, US /ˈklɑː.bɚ/",register:"informell",meaning:"Als Verb heißt clobber, jemanden oder etwas hart zu treffen, deutlich zu besiegen oder finanziell schwer zu belasten. Das britische Substantiv clobber bezeichnet mitgeführte Sachen, besonders Kleidung oder Sportausrüstung.",examples:[
        {english:"A falling branch clobbered the shed roof.",german:"Ein herabfallender Ast traf das Schuppendach mit voller Wucht."},
        {english:"The extra fee will clobber anyone booking at short notice.",german:"Die Zusatzgebühr trifft alle hart, die kurzfristig buchen."},
        {english:"Leave your cycling clobber by the door.",german:"Lass deine Radsachen an der Tür liegen."}
      ]}
    }),

    card("Englisch Vokabular", "skint", [], [
      F("Empty tank empty wallet.jpg", "Ein leerer Geldbeutel")
    ], [src("Cambridge Dictionary: skint", "https://dictionary.cambridge.org/dictionary/english/skint")], {
      summary:"vorübergehend pleite oder knapp bei Kasse",
      searchTerm:"skint British English meaning examples",
      vocabulary:{pronunciation:"/skɪnt/",register:"britisch, informell; meist nach dem Verb",meaning:"Skint beschreibt einen vorübergehenden Geldmangel. Das Wort steht gewöhnlich nach be oder feel und klingt alltäglicher als penniless oder destitute.",examples:[
        {english:"I'm skint until Friday, so dinner has to be cheap.",german:"Bis Freitag bin ich pleite, deshalb muss das Abendessen billig sein."},
        {english:"The club was skint after replacing the roof.",german:"Nach der Erneuerung des Dachs hatte der Verein kein Geld mehr."},
        {english:"We weren't poor; we were simply skint at the end of every month.",german:"Wir waren nicht arm. Am Monatsende war das Geld nur regelmäßig aufgebraucht."}
      ]}
    }),

    card("Geo Atlas", "Wachankorridor", [
      "Der rund 300 Kilometer lange Landstreifen gehört zur afghanischen Provinz Badachschan. Tadschikistan liegt nördlich davon, Pakistan südlich; am östlichen Ende erreicht Afghanistan auf wenigen Kilometern die chinesische Grenze. Seine Form entstand durch Grenzabkommen des späten 19. Jahrhunderts. Als Puffer hielt der Korridor das russisch beherrschte Zentralasien vom damaligen Britisch-Indien getrennt.",
      "Die dauerhaft bewohnten Orte liegen vor allem am Wachandarja. Dort leben überwiegend Wakhi, deren Sprache zum ostiranischen Zweig gehört. Kirgisische Viehhalter nutzen die höheren Täler des Großen und Kleinen Pamir. Alte Karawanenwege führen bis zum Wakhjir-Pass auf fast 5.000 Metern Höhe."
    ], [
      F("Vakhan (Wakhan) Corridor.jpg", "Lage des Wachankorridors"),
      F("Wakhan, Badakhshan.jpg", "Eine Siedlung im Wachan")
    ], [
      src("Wikipedia: Wachankorridor", "https://de.wikipedia.org/wiki/Wachankorridor"),
      src("UNEP: Wakhan Conservation Report", "https://postconflict.unep.ch/publications/WCR.pdf")
    ], {summary:"Der afghanische Hochgebirgskorridor liegt zwischen Tadschikistan, Pakistan und China.",wiki:{page:"Wachankorridor",language:"de"},searchTerm:"Wachankorridor Geschichte Great Game Wakhi Kirgisen Karte"}),

    card("Geo Atlas", "Ferghanatal", [
      "Das Ferghanatal ist eine dicht besiedelte Senke zwischen dem Tian Shan und dem Alaigebirge. Der Syrdarja durchquert ein Bewässerungsgebiet, das heute auf Usbekistan, Kirgisistan und Tadschikistan verteilt ist. Die sowjetischen Verwaltungsgrenzen wurden 1991 zu Staatsgrenzen. Straßen, Wasserleitungen und Siedlungsräume liegen seither mehrfach auf verschiedenen Seiten der Grenze; hinzu kommen mehrere Exklaven.",
      "In der Antike lag hier das für seine Pferde bekannte Dayuan. Später gehörte das Tal zu den großen Siedlungsgebieten an den Wegen zwischen dem Tarimbecken und Transoxanien. Babur wurde 1483 in Andischan geboren und machte sich von hier aus auf den Weg, der schließlich zur Gründung des Mogulreichs in Indien führte."
    ], [
      F("Fergana Valley map-de.svg", "Das Ferghanatal und die heutigen Staatsgrenzen"),
      F("Ferghana Valley UZB.JPG", "Der usbekische Teil des Ferghanatals")
    ], [
      src("Wikipedia: Ferghanatal", "https://de.wikipedia.org/wiki/Ferghanatal"),
      src("Encyclopaedia Iranica: Ferghana", "https://www.iranicaonline.org/articles/ferghana")
    ], {summary:"Das Ferghanatal ist ein zentralasiatisches Bewässerungsgebiet, das heute zu drei Staaten gehört.",wiki:{page:"Ferghanatal",language:"de"},searchTerm:"Ferghanatal Grenzen Exklaven Geschichte Dayuan Babur Karte"}),

    card("Geo Atlas", "Musandam", [
      "Musandam ist ein omanisches Gouvernement auf einer Halbinsel an der Straße von Hormus. Das Staatsgebiet der Vereinigten Arabischen Emirate trennt Musandam vom übrigen Oman. Von der Küste aus ragen lange Meeresarme zwischen steile Kalkberge. Al-Chasab ist der Verwaltungssitz und der wichtigste Hafen.",
      "Die Lage am südlichen Ufer der Meerenge gibt Musandam seine politische Bedeutung. Durch die Straße von Hormus läuft ein großer Teil der weltweiten Öl- und Flüssiggasexporte. Im abgelegenen Dorf Kumzar an der Nordspitze wird Kumzari gesprochen, eine iranische Sprache, deren Wortschatz den jahrhundertelangen Seeverkehr am Golf erkennen lässt."
    ], [
      F("Strait of Hormuz and Musandam Peninsula (MODIS 2018-12-10).jpg", "Musandam an der Straße von Hormus"),
      F("Musandam from Sea.jpg", "Musandams Berge von der See aus")
    ], [
      src("Wikipedia: Musandam", "https://de.wikipedia.org/wiki/Musandam"),
      src("U.S. Energy Information Administration: Strait of Hormuz", "https://www.eia.gov/international/content/analysis/special_topics/World_Oil_Transit_Chokepoints/")
    ], {summary:"Die omanische Exklave liegt am südlichen Ufer der Straße von Hormus.",wiki:{page:"Musandam",language:"de"},searchTerm:"Musandam Oman Exklave Straße von Hormus Kumzari Karte"}),

    card("Geo Atlas", "Halbinsel Kola", [
      "Die Halbinsel Kola liegt im äußersten Nordwesten Russlands zwischen der Barentssee und dem Weißen Meer. Sie gehört zur Oblast Murmansk und zum traditionellen Siedlungsgebiet der Samen. Der Einfluss des Nordatlantikstroms hält die Küste bei Murmansk im Winter eisfrei. Deshalb wurden der Hafen und die Stützpunkte der russischen Nordflotte hier ausgebaut.",
      "Die sowjetische Industrialisierung stützte sich auf den Abbau zahlreicher Erze, vor allem auf Nickel und Apatit. Rund um einzelne Hüttenwerke entstanden stark belastete Böden, während große Teile des Inneren dünn besiedelte Tundra blieben. Bei Sapoljarny erreichte die Kola-Bohrung 1989 eine senkrechte Tiefe von 12.262 Metern; keine andere Bohrung drang tiefer in die Erdkruste ein."
    ], [
      F("Kola peninsula.png", "Lage der Halbinsel Kola"),
      F("Khibiny.jpg", "Die Chibinen im Inneren der Halbinsel")
    ], [
      src("Wikipedia: Halbinsel Kola", "https://de.wikipedia.org/wiki/Halbinsel_Kola"),
      src("Encyclopaedia Britannica: Kola Peninsula", "https://www.britannica.com/place/Kola-Peninsula")
    ], {summary:"Die russische Arktishalbinsel gehört zum Siedlungsgebiet der Samen. Dort liegen große Bergwerke und Stützpunkte der Nordflotte.",wiki:{page:"Halbinsel_Kola",language:"de"},searchTerm:"Halbinsel Kola Samen Murmansk Nordflotte Bergbau Karte"}),

    card("Geo Atlas", "Darién Gap", [
      "Der Darién Gap liegt im Grenzgebiet von Panama und Kolumbien. Hier endet die Panamericana in Yaviza; auf der südamerikanischen Seite setzt das Straßennetz bei Turbo wieder ein. Dazwischen liegt schwer zugänglicher Regenwald, der von Gebirgszügen und zahlreichen Flüssen durchzogen wird. Der Straßenbau blieb wegen der hohen Kosten und der absehbaren Folgen für Schutzgebiete und örtliche Gemeinschaften aus.",
      "Zum Gebiet gehören die Siedlungsräume der Emberá-Wounaan und der Guna sowie zwei große Nationalparks. Seit den 2010er Jahren wurde der Darién außerdem zu einer viel benutzten und lebensgefährlichen Migrationsroute nach Norden. Die fehlende Straße schützt einen ökologisch bedeutenden Raum. Zugleich bildet sie eine Lücke im kontinentalen Verkehrsnetz, durch die heute eine der wichtigsten amerikanischen Migrationsrouten führt."
    ], [
      F("Map of Darién Gap-en.svg", "Die Unterbrechung der Panamericana"),
      F("Bosque Tapón del Darién Triganá - Chocó.jpg", "Regenwald im kolumbianischen Darién")
    ], [
      src("Wikipedia: Darién Gap", "https://de.wikipedia.org/wiki/Dari%C3%A9n_Gap"),
      src("UNESCO: Darién National Park", "https://whc.unesco.org/en/list/159/")
    ], {summary:"Das straßenlose Grenzgebiet liegt zwischen Panama und Kolumbien.",wiki:{page:"Darién_Gap",language:"de"},searchTerm:"Darién Gap Panamericana Emberá Guna Migration Karte"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Morgenstund hat Gold im Mund.", [
      "Lautwert: /ˈmɔʁɡn̩ˌʃtʊnt hat ɡɔlt ɪm mʊnt/. Die Folge шт gibt das deutsche st am Anfang von Stund wieder. Am Wortende stehen т für das stimmlos gesprochene d in Gold und Mund."
    ], [F("Sunrise in germany.jpg", "Früher Morgen")], proverbSources("Morgenstund hat Gold im Mund", "Kyrillisches Alphabet"), {summary:"Моргенштунт хат Голт им Мунт.",searchTerm:"Morgenstund hat Gold im Mund Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Viele Köche verderben den Brei.", [
      "Lautwert: /ˈfiːlə ˈkœçə fɛɐ̯ˈdɛɐ̯bn̩ deːn bʁaɪ̯/. Das kyrillische ө steht hier für das deutsche ö. Für den ich-Laut in Köche steht die Folge хь; ай gibt den Diphthong in Brei wieder."
    ], [F("Cookers in the White House kitchen.jpg", "Mehrere Köche bei der Arbeit")], proverbSources("Viele Köche verderben den Brei", "Kyrillisches Alphabet"), {summary:"Филе Көхье фердербен ден Брай.",searchTerm:"Viele Köche verderben den Brei Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Wo gehobelt wird, fallen Späne.", [
      "Lautwert: /voː ɡəˈhoːbl̩t vɪʁt ˈfalən ˈʃpɛːnə/. Das deutsche w erscheint als в. Шп gibt das am Wortanfang gesprochene sp wieder, э den langen ä-Laut in Späne."
    ], [F("Germany Plane-with-wood-shavings-01.jpg", "Hobel und Holzspäne")], proverbSources("Wo gehobelt wird, fallen Späne", "Kyrillisches Alphabet"), {summary:"Во гехобельт вирт, фаллен Шпэне.",searchTerm:"Wo gehobelt wird fallen Späne Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Übung macht den Meister.", [
      "Lautwert: /ˈyːbʊŋ maxt deːn ˈmaɪ̯stɐ/. Das in mehreren kyrillisch geschriebenen Sprachen gebrauchte ү steht für den gerundeten Vokal ü. Х entspricht dem ach-Laut; ай dem deutschen ei."
    ], [F("Student Violin.jpg", "Eine Geigenübung")], proverbSources("Übung macht den Meister", "Kyrillisches Alphabet"), {summary:"Үбунг махт ден Майстер.",searchTerm:"Übung macht den Meister Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in kyrillischen Buchstaben", "Wer anderen eine Grube gräbt, fällt selbst hinein.", [
      "Lautwert: /veːɐ̯ ˈandəʁən ˈaɪnə ˈɡʁuːbə ɡʁɛːpt fɛlt zɛlpst hɪˈnaɪ̯n/. Э gibt den ä-Laut wieder. Das b in gräbt und selbst wird stimmlos gesprochen und erscheint deshalb als п."
    ], [F("Photograph of a group of young men digging a hole, Clarkesville, Habersham County, Georgia, 1950 - DPLA - 7e96e659223f35d83d95b94fb71422573300.jpeg", "Das Ausheben einer Grube, 1950")], proverbSources("Wer anderen eine Grube gräbt fällt selbst hinein", "Kyrillisches Alphabet"), {summary:"Вер андерен айне Грубе грэпт, фэльт зэльпст хинайн.",searchTerm:"Wer anderen eine Grube gräbt Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Wer rastet, der rostet.", [
      "Lautwert: /veːɐ̯ ˈʁastət deːɐ̯ ˈʁɔstət/. Das moderne griechische β hat den Lautwert /v/ und steht deshalb für das deutsche w. Für das deutsche d steht die Folge ντ."
    ], [F("Rusted bicycle (Unsplash).jpg", "Ein verrostetes Fahrrad")], proverbSources("Wer rastet der rostet", "Griechisches Alphabet"), {summary:"Βερ ράστετ, ντερ ρόστετ.",searchTerm:"Wer rastet der rostet Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Eile mit Weile.", [
      "Lautwert: /ˈaɪ̯lə mɪt ˈvaɪ̯lə/. Άϊ gibt das deutsche ei als Folge von a und i wieder; die Trema trennt die beiden griechischen Vokalzeichen. Β steht für den Laut /v/ des deutschen w."
    ], [F("Garden snail crossing the sidewalk (cropped).jpg", "Eine Schnecke auf einem Gehweg")], proverbSources("Eile mit Weile", "Griechisches Alphabet"), {summary:"Άϊλε μιτ Βάϊλε.",searchTerm:"Eile mit Weile Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Kleider machen Leute.", [
      "Lautwert: /ˈklaɪ̯dɐ ˈmaxn̩ ˈlɔɪ̯tə/. Ντ vertritt das deutsche d, χ den ach-Laut. Die getrennte Folge όϊ nähert den Diphthong eu in Leute an."
    ], [F("A tailor fitting a customer (Belgrade, 1937).jpg", "Anprobe bei einem Schneider, Belgrad 1937")], proverbSources("Kleider machen Leute", "Griechisches Alphabet"), {summary:"Κλάϊντερ μάχεν Λόϊτε.",searchTerm:"Kleider machen Leute Sprichwort Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Jeder Topf findet seinen Deckel.", [
      "Lautwert: /ˈjeːdɐ tɔpf ˈfɪndət ˈzaɪ̯nən ˈdɛkl̩/. Für das deutsche j steht Γι vor einem Vokal. Φ steht für f, ζ für das stimmhafte s am Anfang von seinen und ντ für d."
    ], [F("A lid for a pot.jpg", "Ein Topf mit passendem Deckel")], proverbSources("Jeder Topf findet seinen Deckel", "Griechisches Alphabet"), {summary:"Γιέντερ Τοπφ φίντετ ζάϊνεν Ντέκελ.",searchTerm:"Jeder Topf findet seinen Deckel Herkunft Bedeutung"}),

    card("Deutsche Sprichwörter in griechischen Buchstaben", "Ein Unglück kommt selten allein.", [
      "Lautwert: /aɪ̯n ˈʊnɡlʏk kɔmt ˈzɛltn̩ aˈlaɪ̯n/. Γκ steht für g. Das griechische υ hatte in älteren Sprachstufen einen gerundeten Lautwert und übernimmt hier das deutsche ü; das heutige Griechisch spricht es anders aus."
    ], [F("Broken umbrella (30312884283).jpg", "Ein zerbrochener Regenschirm")], proverbSources("Ein Unglück kommt selten allein", "Griechisches Alphabet"), {summary:"Άϊν Ούνγκλυκ κομτ ζέλτεν αλάϊν.",searchTerm:"Ein Unglück kommt selten allein Herkunft Bedeutung"})
  );
})();
