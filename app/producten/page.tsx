import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { ProductCards } from "@/components/shared/ProductCards"
import { Button } from "@/components/shared/Button"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Producten"
        title="Alle Carpetz mattypes in één overzicht"
        intro="Van premium logomatten op maat tot standaardmatten: deze pagina geeft een duidelijke ingang naar je productstructuur en configurator."
      >
        <ProductCards />
        <div className="inline-cta-row">
          <Button href="/configurator" variant="primary">Start configurator</Button>
          <Button href="/offerte" variant="secondary">Vraag offerte</Button>
        </div>
      </SimplePage>
    </SiteLayout>
  )
}
