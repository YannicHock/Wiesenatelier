import './App.css'

function App() {
  return (
    <div className="container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Wiesenatelier</h1>
          <p className="hero-subtitle">lichtdurchflutetes Studio im Bliesgau &middot; ruhig &amp; stilvoll</p>
        </div>
        <div className="placeholder-img hero-placeholder">
          [Hero Bild: Lichtdurchflutetes Studio / Außenansicht]
        </div>
      </header>

      <nav className="anchor-nav">
        <a href="#beschreibung">Beschreibung</a>
        <a href="#ausstattung">Das erwartet dich</a>
        <a href="#zusatz">Zusatzangebote</a>
        <a href="#lage">Lage</a>
      </nav>

      <main>
        <section id="beschreibung" className="section">
          <div className="section-content">
            <h2>🌿 Beschreibung</h2>
            <p>
              Willkommen im <strong>Wiesenatelier</strong> &ndash; deinem naturnahen R&uuml;ckzugsort im idyllischen Dorf Auersmacher.
              Das lichtdurchflutete Studio verbindet nat&uuml;rliche Materialien mit moderner, reduzierter Gestaltung.
              Warmer Lehmputz, ausgew&auml;hlte Einrichtung und gro&szlig;z&uuml;gige Fenster schaffen eine besondere Atmosph&auml;re:
              ruhig, klar und erdend.
            </p>
            <p>
              Die Lage im Biosphärenreservat Bliesgau bietet dir eine einzigartige Natur- und Kulturlandschaft.
              Hier kannst du zur Ruhe kommen, durchatmen und die besondere Umgebung auf dich wirken lassen.
            </p>
            <p>
              Auersmacher wurde als einer der besonders schönen Orte in Deutschland ausgezeichnet und liegt zudem in
              unmittelbarer Nähe zu Saarbrücken, Saargemünd und der französischen Grenze – ideal für Ausflüge,
              kulinarische Entdeckungen und Naturerlebnisse.
            </p>
            <p>
              Direkt in der Umgebung verläuft der Jakobsweg, der zu ruhigen Spaziergängen einlädt.
              Entlang der Wege findest du zudem die charakteristischen silbernen Sterne im Asphalt –
              den sogenannten <em>Chemin des Étoiles</em>, ein besonderer und inspirierender Abschnitt durch die Landschaft.
            </p>
          </div>
          <div className="placeholder-gallery">
            <div className="placeholder-img">[Galerie Bild 1]</div>
            <div className="placeholder-img">[Galerie Bild 2]</div>
          </div>
        </section>

        <section id="ausstattung" className="section accent-bg reverse">
          <div className="section-content">
            <h2>🌿 Das erwartet dich</h2>
            <ul className="feature-list">
              <li>Lichtdurchflutetes Studio mit großzügigen Fenstern</li>
              <li>Ruhige Lage am Feldrand</li>
              <li>Hochwertige, natürliche Materialien (Lehmputz)</li>
              <li>Stilvolle, minimalistische Einrichtung</li>
              <li>Ideal zum Entspannen & Abschalten</li>
            </ul>
          </div>
          <div className="placeholder-img gallery-large">
            [Großes Bild: Studio Innenraum / Details]
          </div>
        </section>

        <section id="zusatz" className="section">
          <div className="section-content">
            <h2>🌿 Zusatzangebote <span className="small-note">(auf Anfrage)</span></h2>
            <p>
              Für alle, die ihren Aufenthalt noch bewusster gestalten möchten, bieten wir auf Wunsch verschiedene achtsame Erlebnisse an:
            </p>
            <div className="offer-grid">
              <div className="offer-item">
                <h3>Achtsamkeit</h3>
                <p>Entspannungseinheiten wie Indian Balance® & Yin Yoga</p>
              </div>
              <div className="offer-item">
                <h3>Aktivität</h3>
                <p>Morgendliche Sporteinheiten in der Natur für einen aktiven Start in den Tag</p>
              </div>
              <div className="offer-item">
                <h3>Natur</h3>
                <p>Geführte Wanderungen in der Umgebung</p>
              </div>
              <div className="offer-item">
                <h3>Region</h3>
                <p>Geführte Radtouren durch die Region und den Bliesgau</p>
              </div>
            </div>
          </div>
          <div className="placeholder-img gallery-large">
            [Stimmungsbild: Wellness / Achtsamkeit / Aktivität]
          </div>
        </section>

        <section id="lage" className="section lage-section reverse">
          <div className="section-content">
            <h2>🌍 Perfekte Lage für Entdeckungen</h2>
            <ul className="lage-list">
              <li>In der N&auml;he von Saarbr&uuml;cken (ca.&nbsp;15&nbsp;Minuten Fahrtzeit mit dem Auto, 30&nbsp;Min &Ouml;PNV)</li>
              <li>N&auml;he zu Saargem&uuml;nd&nbsp;/&nbsp;Frankreich (8&nbsp;Minuten Fahrt mit dem Auto, 10&nbsp;mit&nbsp;der&nbsp;Bahn)</li>
              <li>Zugang zu Rad- und Wanderwegen</li>
              <li>Direkt im Biosphärenreservat Bliesgau</li>
              <li>Region mit Natur, Kultur und Genuss</li>
            </ul>
          </div>
          <div className="placeholder-img map-placeholder">
            [Karte / Umgebungsbild]
          </div>
        </section>

        <section className="closing-section">
          <div className="closing-card">
            <h2>💛 Der besondere Ort</h2>
            <p>
              Ein Aufenthalt im Wiesenatelier verbindet stilvolles Wohnen mit der Ruhe der Natur und den
              Möglichkeiten einer vielseitigen Region – ein Ort, an dem du ankommst, durchatmest und neue Energie findest.
            </p>
            <div className="placeholder-img footer-placeholder">
              [Stimmungsbild: Sonnenuntergang / Bliesgau]
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Wiesenatelier Auersmacher</p>
      </footer>
    </div>
  )
}

export default App
