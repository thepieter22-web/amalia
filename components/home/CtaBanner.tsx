import { Button } from "@/components/shared/Button"

export function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner">
          <div>
            <span className="eyebrow eyebrow-light">Primair doel</span>
            <h2>Start vandaag nog met het samenstellen van uw Carpetz logomat.</h2>
            <p>
              Gebruik de configurator als vertrekpunt. Kies een subtype, upload uw logo en stuur de flow naar bestellen of offerte.
            </p>
          </div>
          <div className="cta-banner-actions">
            <Button href="/configurator" variant="primary">Start configurator</Button>
            <Button href="/producten" variant="outline">Bekijk producten</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
