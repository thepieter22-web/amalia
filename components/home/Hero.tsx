import { Button } from "@/components/shared/Button"

export function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Premium logomatten op maat</span>
          <h1>Maak indruk vanaf de eerste stap met een logomat op maat van Carpetz.</h1>
          <p>
            Stel uw mat samen in onze configurator, zie meteen een live preview en kies tussen
            online bestellen of een offerte aanvragen voor complexere projecten.
          </p>
          <div className="hero-actions">
            <Button href="/configurator" variant="primary">Start configurator</Button>
            <Button href="/producten" variant="secondary">Bekijk producten</Button>
          </div>
          <ul className="hero-bullets">
            <li>Logomatten, binnenmatten en buitenmatten</li>
            <li>Prijsweergave excl. en incl. btw</li>
            <li>Offerteflow voor rond en grotere aantallen</li>
          </ul>
        </div>

        <div className="hero-visual-card">
          <div className="hero-mat-preview">
            <div className="hero-mat-arc arc-one"></div>
            <div className="hero-mat-arc arc-two"></div>
            <div className="hero-mat-arc arc-three"></div>
            <span className="hero-mat-logo">C</span>
          </div>
          <div className="hero-proof-row">
            <div>
              <strong>Configurator-first</strong>
              <span>Snel van idee naar preview</span>
            </div>
            <div>
              <strong>Hybride flow</strong>
              <span>Bestellen of offerte aanvragen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
