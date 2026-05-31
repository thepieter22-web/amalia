import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Bedankt" title="Uw bestelling is ontvangen" intro="In fase 1 wordt de bestelling lokaal bewaard als payment-ready architectuur, klaar voor latere providerintegratie.">

          <div className="card"><p>De checkout-flow is succesvol afgerond. Gebruik deze pagina later als orderbevestiging met backend- of betalingskoppeling.</p></div>

      </SimplePage>
    </SiteLayout>
  )
}
