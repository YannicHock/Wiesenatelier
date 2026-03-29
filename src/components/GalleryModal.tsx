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
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-viewer">
          <button className="modal-nav prev" onClick={onPrev}>‹</button>
          <div className="placeholder-img modal-img">
            {GALLERY_IMAGES[activeImageIndex]}
          </div>
          <button className="modal-nav next" onClick={onNext}>›</button>
        </div>
        <div className="modal-info">
          Bild {activeImageIndex + 1} von {GALLERY_IMAGES.length}
        </div>
        <div className="modal-thumbnails">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`thumb ${idx === activeImageIndex ? 'active' : ''}`}
              onClick={() => onSelect(idx)}
            >
              <div className="placeholder-img thumb-placeholder">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
