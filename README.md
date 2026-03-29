# Wiesenatelier Website

Diese Website ist für das Wiesenatelier in Auersmacher erstellt.

## 🛠 Inhalte anpassen (Texte & Bilder)

Um die Texte und Bilder auf dieser Seite zu ändern, finden sich alle Inhalte befinden sich an einer zentralen Stelle.

### So änderst du Inhalte:

1. Öffne die Datei `src/constants.ts` in einem Texteditor deiner Wahl.
2. Dort findest du verschiedene Abschnitte für die einzelnen Bereiche der Website (Hero, Beschreibung, Ausstattung, etc.).
3. **Texte ändern:** Ersetze einfach den Text zwischen den Anführungszeichen (z.B. `'Mein neuer Titel'`).
4. **Fettgedruckter Text:** In der Beschreibung kannst du Text **fett** machen, indem du ihn in doppelte Sternchen einschließt: `**dieser Text wird fett**`.
5. **Listen:** Bei Ausstattung oder Lage kannst du Einträge in den Listen (eckige Klammern `[]`) hinzufügen oder ändern. Achte darauf, dass jeder Eintrag in Anführungszeichen steht und durch ein Komma getrennt ist.
6. **Bilder:** Aktuell sind Bild-Platzhalter definiert (z.B. `[Hero Bild: ...]`). In den Platzhaltern findest du nun auch eine Empfehlung für die **ideale Auflösung** (z.B. `1920x1080px`). Sobald echte Bilder vorhanden sind, können hier die Dateipfade (z.B. `/images/mein-bild.jpg`) eingetragen werden. Die Bilder sollten im Ordner `public/` abgelegt werden.
7. **Impressum:** Vergiss nicht, deine Daten im Abschnitt `IMPRESSUM` am Ende der Datei einzutragen.

### Entwicklung & Vorschau

Wenn du die Änderungen lokal testen möchtest:

1. Installiere Node.js (falls noch nicht geschehen).
2. Führe `npm install` im Hauptverzeichnis aus.
3. Starte den Entwicklungsserver mit `npm run dev`.
4. Öffne die angezeigte URL (meist http://localhost:5173) in deinem Browser.

---

## Technische Details (für Entwickler)
