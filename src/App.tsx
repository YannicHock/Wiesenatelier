import { useState, useEffect } from 'react'
import './App.css'

const OFFERS = [
  {
    title: 'Achtsamkeit',
    description: 'Entspannungseinheiten wie Indian Balance® & Yin Yoga',
    imageLabel: '[Stimmungsbild: Yoga / Wellness]'
  },
  {
    title: 'Aktivität',
    description: 'Morgendliche Sporteinheiten in der Natur für einen aktiven Start in den Tag',
    imageLabel: '[Stimmungsbild: Sport / Natur]'
  },
  {
    title: 'Natur',
    description: 'Geführte Wanderungen in der Umgebung',
    imageLabel: '[Stimmungsbild: Wanderung / Aussicht]'
  },
  {
    title: 'Region',
    description: 'Geführte Radtouren durch die Region und den Bliesgau',
    imageLabel: '[Stimmungsbild: Radfahren / Bliesgau]'
  }
]

const GALLERY_IMAGES = [
  '[Galerie Bild 1: Studio Außenansicht]',
  '[Galerie Bild 2: Lehmputz Detail]',
  '[Galerie Bild 3: Fensterfront]',
  '[Galerie Bild 4: Minimalistische Einrichtung]',
  '[Galerie Bild 5: Blick ins Grüne]',
  '[Galerie Bild 6: Gemütliche Ecke]',
  '[Galerie Bild 7: Bad Details]',
  '[Galerie Bild 8: Sonnenlicht im Raum]',
  '[Galerie Bild 9: Lokale Flora]',
  '[Galerie Bild 10: Abendstimmung]'
]

function App() {
  const [currentOffer, setCurrentOffer] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const nextOffer = () => setCurrentOffer((prev) => (prev + 1) % OFFERS.length)
  const prevOffer = () => setCurrentOffer((prev) => (prev - 1 + OFFERS.length) % OFFERS.length)

  const openGallery = (index = 0) => {
    setActiveImageIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)

  useEffect(() => {
    const interval = setInterval(() => {
      nextOffer()
    }, 5000) // Alle 5 Sekunden wechseln

    return () => clearInterval(interval)
  }, [currentOffer]) // Abhängigkeit von currentOffer stellt sicher, dass das Intervall nach jedem manuellen Wechsel zurückgesetzt wird

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
          <h2>🌿 Beschreibung</h2>
          <div className="section-content">
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
              unmittelbarer Nähe zu Saarbrücken, Saargemünd und der französischen Grenze.
            </p>
          </div>
          <div className="tile-gallery">
            {GALLERY_IMAGES.slice(0, 2).map((img, idx) => (
              <div key={idx} className="placeholder-img tile-img" onClick={() => openGallery(idx)}>
                {img}
              </div>
            ))}
            {GALLERY_IMAGES.length > 2 && (
              <div className="placeholder-img tile-img more-tile" onClick={() => openGallery(2)}>
                <span>+{GALLERY_IMAGES.length - 2} weitere</span>
              </div>
            )}
          </div>
        </section>

        <section id="ausstattung" className="section reverse">
          <h2>🌿 Das erwartet dich</h2>
          <div className="section-content">
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

        <section id="zusatz" className="section accent-bg">
          <h2>🌿 Zusatzangebote <span className="small-note">(auf Anfrage)</span></h2>
          <div className="carousel-wrapper">
            <p className="carousel-intro">
              Für alle, die ihren Aufenthalt noch bewusster gestalten möchten, bieten wir auf Wunsch verschiedene achtsame Erlebnisse an:
            </p>
            <div className="carousel-container">
              <div className="carousel-inner" style={{ transform: `translateX(-${currentOffer * 100}%)` }}>
                {OFFERS.map((offer, index) => (
                  <div key={index} className="carousel-item">
                    <div className="placeholder-img carousel-img">
                      {offer.imageLabel}
                    </div>
                    <div className="carousel-overlay">
                      <h3>{offer.title}</h3>
                      <p>{offer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-control prev" onClick={prevOffer} aria-label="Vorheriges Angebot">
                ‹
              </button>
              <button className="carousel-control next" onClick={nextOffer} aria-label="Nächstes Angebot">
                ›
              </button>

              <div className="carousel-dots">
                {OFFERS.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentOffer ? 'active' : ''}`}
                    onClick={() => setCurrentOffer(index)}
                    aria-label={`Gehe zu Angebot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="lage" className="section lage-section">
          <h2>🌍 Perfekte Lage für Entdeckungen</h2>
          <div className="section-content">
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

      {isGalleryOpen && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeGallery}>&times;</button>
            <div className="modal-viewer">
              <button className="modal-nav prev" onClick={prevImage}>‹</button>
              <div className="placeholder-img modal-img">
                {GALLERY_IMAGES[activeImageIndex]}
              </div>
              <button className="modal-nav next" onClick={nextImage}>›</button>
            </div>
            <div className="modal-info">
              Bild {activeImageIndex + 1} von {GALLERY_IMAGES.length}
            </div>
            <div className="modal-thumbnails">
              {GALLERY_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`thumb ${idx === activeImageIndex ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <div className="placeholder-img thumb-placeholder">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
