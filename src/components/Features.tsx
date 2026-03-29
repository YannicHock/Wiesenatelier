import { FEATURES } from '../constants'

export const Features = () => {
  const isPlaceholder = FEATURES.imageLabel.startsWith('[') && FEATURES.imageLabel.endsWith(']')

  return (
    <section id="ausstattung" className="section reverse">
      <h2>{FEATURES.title}</h2>
      <div className="section-content">
        <ul className="feature-list">
          {FEATURES.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`features-img-container ${isPlaceholder ? 'placeholder-img gallery-large' : 'features-img-real'}`}>
        {isPlaceholder ? (
          FEATURES.imageLabel
        ) : (
          <img src={FEATURES.imageLabel} alt={FEATURES.title} />
        )}
      </div>
    </section>
  )
}
