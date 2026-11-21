# Kartei

[Musikfeed öffnen](https://phalincirachel.github.io/karten/) · [Originaldemo](akkord-mystery-demo.html) · [Originalpaket](akkord-mystery-kartei.zip)

**Akkord-Mystery** spielt eine vierstimmige Folge mit zwei verdeckten Akkorden. **Volksmusikstile der Welt** zeigt pro Karte einen Film aus dem UNESCO-Verzeichnis. Die älteren Kartendaten liegen in `archiv/`.

Der Videokatalog verwendet die musikalischen Hauptschlagwörter des Registers und eindeutige Musikbegriffe im englischen Titel. Aus jedem passenden Eintrag übernimmt der Import sämtliche unterschiedlichen Video-IDs und prüft die Einbettung mit YouTube oEmbed. Einträge ohne ID werden beim Import gemeldet. [UNESCO DataHub](https://data.unesco.org/explore/dataset/ich001/table/)

`python scripts/import-unesco.py` aktualisiert den Katalog. Nach Änderungen an den ausgelieferten Dateien den Versionsparameter in `index.html` erhöhen. `node scripts/verify-cards.cjs` prüft beide Kategorien und die Aufgabenfolge offline.

Das Reddit-Userscript 8.0.0 lädt vier feste Dateinamen. `media-map.js` enthält die Videodaten, `cards.js` stellt die Karten zusammen, `cards-editorial.js` enthält den Quizspieler und `finnegans-exegese.js` setzt die Musikkarten in die vom Userscript angelegten Einschübe. Bei einer bestehenden Installation können die vier Abhängigkeiten noch im Cache des Userscript-Managers liegen.
