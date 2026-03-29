import { HERO } from '../constants'

export const Hero = () => {
  const isPlaceholder = HERO.imageLabel.startsWith('[') && HERO.imageLabel.endsWith(']')

  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>{HERO.title}</h1>
        <p className="hero-subtitle">{HERO.subtitle}</p>
      </div>
      <div className={`hero-img-container ${isPlaceholder ? 'placeholder-img hero-placeholder' : ''}`}>
        {isPlaceholder ? (
          HERO.imageLabel
        ) : (
          <img src={HERO.imageLabel} alt={HERO.title} className="hero-img" />
        )}
      </div>
    </header>
  )
}
