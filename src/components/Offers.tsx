import { useState, useEffect } from 'react'
import { OFFERS } from '../constants'

export const Offers = () => {
  const [currentOffer, setCurrentOffer] = useState(0)

  const nextOffer = () => setCurrentOffer((prev) => (prev + 1) % OFFERS.length)
  const prevOffer = () => setCurrentOffer((prev) => (prev - 1 + OFFERS.length) % OFFERS.length)

  useEffect(() => {
    const interval = setInterval(() => {
      nextOffer()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentOffer])

  return (
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
  )
}
