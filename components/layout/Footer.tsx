import Link from "next/link"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Carpetz</h3>
          <p>
            Premium logomatten op maat voor bedrijven in België en de bredere Benelux.
          </p>
        </div>
        <div>
          <h4>Producten</h4>
          <ul>
            <li><Link href="/logomatten-op-maat">Logomatten op maat</Link></li>
            <li><Link href="/producten">Binnenmatten</Link></li>
            <li><Link href="/producten">Buitenmatten</Link></li>
            <li><Link href="/configurator">Configurator</Link></li>
          </ul>
        </div>
        <div>
          <h4>Bedrijf</h4>
          <ul>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/over-ons">Over ons</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:0488253932">0488253932</a></li>
            <li><a href="mailto:info@carpetz.be">info@carpetz.be</a></li>
            <li>Berkenlaand 1D, 9840 De Pinte</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} Carpetz — alle rechten voorbehouden.</span>
          <div className="footer-bottom-links">
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
