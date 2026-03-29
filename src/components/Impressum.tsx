interface ImpressumProps {
  onClose: () => void
}

export const Impressum = ({ onClose }: ImpressumProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content impressum-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="impressum-content">
          <h2>Impressum</h2>
          
          <section>
            <h3>Angaben gemäß § 5 TMG</h3>
            <p>
              [Vorname Nachname]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h3>Kontakt</h3>
            <p>
              Telefon: [Telefonnummer]<br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h3>Redaktionell verantwortlich</h3>
            <p>
              [Vorname Nachname]<br />
              [Straße Hausnummer]<br />
              [PLZ Ort]
            </p>
          </section>

          <section>
            <h3>EU-Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer"> https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h3>Verbraucherstreitbeilegung/ Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
