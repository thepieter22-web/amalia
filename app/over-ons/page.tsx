import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Over ons" title="Carpetz bouwt rond logomatten op maat" intro="De website focust op logomatten als hoofdcategorie, met ruimte voor gewone matten als aanvullend aanbod.">

          <div className="card"><p>Carpetz positioneert zich als een premium, moderne en betrouwbare partner voor logomatten op maat in België en de Benelux.</p></div>

      </SimplePage>
    </SiteLayout>
  )
}
