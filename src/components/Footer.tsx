import { SITE_INFO } from '../constants'

interface FooterProps {
  onOpenImpressum: () => void
}

export const Footer = ({ onOpenImpressum }: FooterProps) => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {SITE_INFO.copyright}</p>
      <nav className="footer-nav">
        <button className="footer-link" onClick={onOpenImpressum}>
          Impressum
        </button>
      </nav>
    </footer>
  )
}
