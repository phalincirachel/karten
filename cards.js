const mappedMedia=(key)=>window.MEDIA_FILES?.[key];
const C=(query,caption)=>{const mapped=mappedMedia(query);return{type:"commons",query,file:typeof mapped==="string"?mapped:mapped?.file,remote:typeof mapped==="object"?mapped:undefined,caption}};
const F=(file,caption)=>{const mapped=mappedMedia(file);return{type:"commons",query:file,file,remote:typeof mapped==="object"?mapped:undefined,caption}};
const I=(src,href,caption,credit)=>({type:"image",src,href,caption,credit});
const Y=(id,caption,start)=>({type:"youtube",id,caption,...(Number.isFinite(start)?{start}: {})});
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
    category:"Philosophische Begriffe",title:"Kategorischer Imperativ",summary:"Eine Handlungsregel gilt moralisch, wenn jeder vernünftige Mensch nach ihr handeln könnte.",
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
    category:"Philosophische Begriffe",title:"Familienähnlichkeit",summary:"Mitglieder einer Gruppe können durch überlappende Ähnlichkeiten zusammengehören.",
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
    category:"Erste Sätze großer Romane",kind:"quote",title:"Все счастливые семьи похожи друг на друга, каждая несчастливая семья несчастлива по-своему.",
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
    category:"Erste Sätze großer Romane",kind:"quote",title:"Nous étions à l’Étude, quand le Proviseur entra, suivi d’un nouveau habillé en bourgeois et d’un garçon de classe qui portait un grand pupitre.",
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
      "Die Tradition gehört vor allem zu Orten in Barbagia und anderen Teilen Zentralsardiniens. Gesungen wird bei Festen, in Bars, auf Plätzen und auf der Bühne. Texte können aus überlieferter oder neuer sardischer Dichtung stammen. Regionale Stile unterscheiden Klang, Rhythmus und Stimmführung. Das Video zeigt Körperhaltung, Abstand und Blickkontakt; diese sichtbare Koordination gehört zur Musik."
    ],
    media:[Y("cWVCMvbGcPA","UNESCO · Canto a tenore")],
    sources:[S("UNESCO: Canto a tenore","https://ich.unesco.org/en/RL/canto-a-tenore-sardinian-pastoral-songs-00165")]
  },
  {
    category:"Seltene Musikstile",title:"Georgische Mehrstimmigkeit",
    detail:[
      "Georgische Vokalmusik umfasst regionale Formen mit Bordun, unabhängigen Melodielinien, engen Reibungen und improvisierten Oberstimmen. In Kachetien führen zwei Solisten verzierte Linien über einem langen Bass. Westgeorgische Stile bewegen mehrere Stimmen freier gegeneinander. Swanetische Gesänge verwenden eigene Skalen, Rhythmen und einen schweren chorischen Klang.",
      "Lieder begleiten Arbeit, Tischritual, Hochzeit, Begräbnis, Tanz und religiöse Feste. Viele werden ohne Instrumente gesungen. Die Stimmführung entsteht aus gemeinsamem Gedächtnis und körperlicher Abstimmung, weniger aus einer schriftlichen Partitur. Das Video der UNESCO zeigt mehrere Regionen und macht hörbar, wie breit der Sammelbegriff ist."
    ],
    media:[Y("rg8xrdbnH8E","UNESCO · Georgian Polyphonic Singing")],
    sources:[S("UNESCO: Georgian polyphonic singing","https://ich.unesco.org/en/RL/georgian-polyphonic-singing-00008")]
  },
  {
    category:"Seltene Musikstile",title:"Seto leelo · Estland",
    detail:[
      "Beim Seto leelo führt eine Vorsängerin, die sõnolinõ, eine Textzeile an. Der Chor übernimmt ihre letzten Silben und antwortet in dichter Mehrstimmigkeit. Eine starke obere Stimme hebt sich aus dem Ensemble; die übrigen Sängerinnen bilden Varianten um die Hauptmelodie.",
      "Ansehen gewinnt, wer im Augenblick passende Verse schaffen kann. Sprache, Gedächtnis und Reaktion bilden deshalb den Kern der Aufführung. Leelo begleitete früher Arbeit, Hochzeit, Klage und religiöse Feste. Heute tragen Chöre, Familientreffen und der Seto-Königreichstag die Praxis. Das Video dokumentiert den Wechsel zwischen Einzelstimme und Gruppe in Nahaufnahme."
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
      "Aka-Sängerinnen und -Sänger verschränken kurze Muster, Jodel, Ruf und Antwort zu einem beweglichen Kontrapunkt. Vier Grundfunktionen können von verschiedenen Personen übernommen und während der Aufführung variiert werden. Mehrere rhythmische Zyklen laufen gleichzeitig; daraus entsteht eine genaue Ordnung ohne Dirigent.",
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
      "Katajjaq ist Spiel, musikalischer Wettkampf und soziale Begegnung. Motive können Tiere, Wind, Werkzeuge oder reine Klanggesten aufgreifen. In verschiedenen Inuit-Gemeinschaften existieren verwandte Formen und eigene Bezeichnungen. Das Video zeigt die körperliche Nähe und den Humor der Aufführung, zwei Aspekte, die eine reine Tonaufnahme kaum vermittelt."
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
      "Die Musik entwickelt sich in Flächen und räumlichen Schichten. Ein Akkord kann lange stehen, während fernes Orchester, Solostimme oder Chor einen anderen Zeitmaßstab öffnen. Langgaard notierte Spiel im Inneren des Klaviers und überschrieb einen Abschnitt mit „Anti-Musik“. Die Partitur sucht weniger ein sinfonisches Ziel als einen Klangraum, in dem Nähe, Ferne und Stillstand selbst zum Material werden."
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
      "Eileen Gray entwarf den Transat Chair 1927 bis 1929 für das Haus E-1027 an der Côte d’Azur. Der Name kürzt transatlantique ab und verweist auf Liegestühle von Passagierschiffen. Ein lackierter Holzrahmen trägt den Sitz; verchromte Gelenke verbinden die Seitenteile; die gepolsterte Rückenlehne kann sich bewegen.",
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
