import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Reviews" title="Waarom klanten voor Carpetz kiezen" intro="Een premium, betrouwbare en professionele merkbeleving moet ook zichtbaar zijn in de klantverhalen.">

          <div className="content-grid-2">
            <div className="quote-card"><div className="stars">★★★★★</div><p>“Heldere configurator en snelle opvolging.”</p><strong>Retailproject</strong></div>
            <div className="quote-card"><div className="stars">★★★★★</div><p>“Goede flow tussen configurator en offerte.”</p><strong>B2B klant</strong></div>
          </div>

      </SimplePage>
    </SiteLayout>
  )
}
