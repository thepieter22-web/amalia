import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { ConfiguratorClient } from "@/components/configurator/ConfiguratorClient"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Primaire CTA"
        title="Stel uw Carpetz logomat samen"
        intro="Kies subtype, formaat, kleur, logo en aantal. Bij ronde matten of meer dan 10 stuks schakelt de flow automatisch naar offerte."
      >
        <ConfiguratorClient />
      </SimplePage>
    </SiteLayout>
  )
}
