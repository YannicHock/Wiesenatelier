import { GALLERY_IMAGES } from '../constants'

interface DescriptionProps {
  onOpenGallery: (index?: number) => void
}

export const Description = ({ onOpenGallery }: DescriptionProps) => {
  return (
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
          <div key={idx} className="placeholder-img tile-img" onClick={() => onOpenGallery(idx)}>
            {img}
          </div>
        ))}
        {GALLERY_IMAGES.length > 2 && (
          <div className="placeholder-img tile-img more-tile" onClick={() => onOpenGallery(2)}>
            <span>+{GALLERY_IMAGES.length - 2} weitere</span>
          </div>
        )}
      </div>
    </section>
  )
}
