import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { ProductCards } from "@/components/shared/ProductCards"
import { Button } from "@/components/shared/Button"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Hoofdcategorie"
        title="Logomatten op maat voor binnen en buiten"
        intro="Carpetz focust op gepersonaliseerde logomatten. Binnen kies je uit Impression, Colorstar, HD en Scrape. Buiten uit Superscrap of Optibrush."
      >
        <ProductCards />
        <div className="content-grid-2">
          <div className="info-card">
            <h3>Binnen logomatten</h3>
            <p>
              Voor recepties, retail, hospitality en kantoren waar logo en uitstraling centraal staan.
            </p>
          </div>
          <div className="info-card">
            <h3>Buiten logomatten</h3>
            <p>
              Voor buitenentrees waar vuilopvang en duurzaamheid even belangrijk zijn als merkbeleving.
            </p>
          </div>
        </div>
        <div className="inline-cta-row">
          <Button href="/configurator" variant="primary">Start configurator</Button>
          <Button href="/offerte" variant="secondary">Vraag offerte</Button>
        </div>
      </SimplePage>
    </SiteLayout>
  )
}
