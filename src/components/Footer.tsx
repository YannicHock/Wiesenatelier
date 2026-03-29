interface FooterProps {
  onOpenImpressum: () => void
}

export const Footer = ({ onOpenImpressum }: FooterProps) => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Wiesenatelier Auersmacher</p>
      <nav className="footer-nav">
        <button className="footer-link" onClick={onOpenImpressum}>
          Impressum
        </button>
      </nav>
    </footer>
  )
}
