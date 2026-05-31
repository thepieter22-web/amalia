import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Portfolio" title="Inspiratie voor Carpetz logomatten" intro="Gebruik portfolio als trust-building pagina met voorbeelden per sector en toepassing.">

          <div className="content-grid-2">
            <div className="info-card"><h3>Retail & showrooms</h3><p>Sterke merkbeleving via logomatten aan de ingang of bij ontvangstzones.</p></div>
            <div className="info-card"><h3>Kantoor & hospitality</h3><p>Representatieve ontvangst met combinatie van design en functionaliteit.</p></div>
          </div>

      </SimplePage>
    </SiteLayout>
  )
}
