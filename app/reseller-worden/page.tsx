import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Reseller" title="Werk samen met Carpetz" intro="Een aparte route voor partners, dealers en B2B-samenwerkingen hoort bij een schaalbare Carpetz-site.">

          <div className="card"><p>Gebruik deze pagina als basis voor een partner- en resellerflow met latere CRM-uitbreiding.</p></div>

      </SimplePage>
    </SiteLayout>
  )
}
