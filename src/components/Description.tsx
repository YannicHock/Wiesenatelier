import { GALLERY_IMAGES, DESCRIPTION } from '../constants'

interface DescriptionProps {
  onOpenGallery: (index?: number) => void
}

export const Description = ({ onOpenGallery }: DescriptionProps) => {
  return (
    <section id="beschreibung" className="section">
      <h2>{DESCRIPTION.title}</h2>
      <div className="section-content">
        {DESCRIPTION.paragraphs.map((p, i) => {
          // Einfache Ersetzung für **fett**
          const parts = p.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={i}>
              {parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return <strong key={j}>{part.slice(2, -2)}</strong>
                }
                return part
              })}
            </p>
          )
        })}
      </div>
      <div className="tile-gallery">
        {GALLERY_IMAGES.slice(0, 2).map((img, idx) => {
          const isPlaceholder = img.startsWith('[') && img.endsWith(']')
          return (
            <div
              key={idx}
              className={`tile-img-container ${isPlaceholder ? 'placeholder-img tile-img' : 'tile-img-real'}`}
              onClick={() => onOpenGallery(idx)}
            >
              {isPlaceholder ? img : <img src={img} alt={`Galerie Bild ${idx + 1}`} />}
            </div>
          )
        })}
        {GALLERY_IMAGES.length > 2 && (
          <div className="placeholder-img tile-img more-tile" onClick={() => onOpenGallery(2)}>
            <span>+{GALLERY_IMAGES.length - 2} weitere</span>
          </div>
        )}
      </div>
    </section>
  )
}
