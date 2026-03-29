import { useState } from 'react'

export const Closing = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Platzhalter für spätere Funktion
    console.log('Formular gesendet:', formData)
    
    // Simuliere Verzögerung
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Zurücksetzen nach 5 Sekunden
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
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

        <div className="contact-form-container">
          <h3>Schreib uns eine Nachricht</h3>
          {submitted ? (
            <div className="form-success">
              Vielen Dank! Deine Nachricht wurde (simuliert) gesendet.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Dein Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Deine E-Mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Deine Nachricht"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
