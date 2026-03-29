import { LOCATION } from '../constants'

export const Location = () => {
  const isPlaceholder = LOCATION.imageLabel.startsWith('[') && LOCATION.imageLabel.endsWith(']')

  return (
    <section id="lage" className="section lage-section">
      <h2>{LOCATION.title}</h2>
      <div className="section-content">
        <ul className="lage-list">
          {LOCATION.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`location-img-container ${isPlaceholder ? 'placeholder-img map-placeholder' : 'location-img-real'}`}>
        {isPlaceholder ? (
          LOCATION.imageLabel
        ) : (
          <img src={LOCATION.imageLabel} alt={LOCATION.title} />
        )}
      </div>
    </section>
  )
}
