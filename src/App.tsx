import { useState } from 'react'
import './App.css'
import { GALLERY_IMAGES } from './constants'
import { Hero } from './components/Hero'
import { FloralBackground } from './components/FloralBackground'
import { Navbar } from './components/Navbar'
import { Description } from './components/Description'
import { Features } from './components/Features'
import { Offers } from './components/Offers'
import { Location } from './components/Location'
import { Closing } from './components/Closing'
import { Footer } from './components/Footer'
import { GalleryModal } from './components/GalleryModal'
import { Impressum } from './components/Impressum'

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isImpressumOpen, setIsImpressumOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const openGallery = (index = 0) => {
    setActiveImageIndex(index)
    setIsGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    document.body.style.overflow = 'unset'
  }

  const openImpressum = () => {
    setIsImpressumOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeImpressum = () => {
    setIsImpressumOpen(false)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)

  return (
    <div className="container">
      <FloralBackground />
      <Hero />
      <Navbar />

      <main>
        <Description onOpenGallery={openGallery} />
        <Features />
        <Offers />
        <Location />
        <Closing />
      </main>

      <Footer onOpenImpressum={openImpressum} />

      {isImpressumOpen && <Impressum onClose={closeImpressum} />}

      {isGalleryOpen && (
        <GalleryModal
          activeImageIndex={activeImageIndex}
          onClose={closeGallery}
          onNext={nextImage}
          onPrev={prevImage}
          onSelect={setActiveImageIndex}
        />
      )}
    </div>
  )
}

export default App
