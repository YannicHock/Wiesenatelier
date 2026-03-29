import { GALLERY_IMAGES } from '../constants'

interface GalleryModalProps {
  activeImageIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSelect: (index: number) => void
}

export const GalleryModal = ({
  activeImageIndex,
  onClose,
  onNext,
  onPrev,
  onSelect,
}: GalleryModalProps) => {
  const currentImg = GALLERY_IMAGES[activeImageIndex]
  const isPlaceholder = currentImg.startsWith('[') && currentImg.endsWith(']')

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-viewer">
          <button className="modal-nav prev" onClick={onPrev}>‹</button>
          <div className={`modal-img-container ${isPlaceholder ? 'placeholder-img modal-img' : 'modal-img-real'}`}>
            {isPlaceholder ? currentImg : <img src={currentImg} alt={`Bild ${activeImageIndex + 1}`} />}
          </div>
          <button className="modal-nav next" onClick={onNext}>›</button>
        </div>
        <div className="modal-info">
          Bild {activeImageIndex + 1} von {GALLERY_IMAGES.length}
        </div>
        <div className="modal-thumbnails">
          {GALLERY_IMAGES.map((img, idx) => {
            const isThumbPlaceholder = img.startsWith('[') && img.endsWith(']')
            return (
              <div
                key={idx}
                className={`thumb ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => onSelect(idx)}
              >
                <div className={`thumb-content ${isThumbPlaceholder ? 'placeholder-img thumb-placeholder' : 'thumb-real'}`}>
                  {isThumbPlaceholder ? (idx + 1) : <img src={img} alt={`Thumbnail ${idx + 1}`} />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
