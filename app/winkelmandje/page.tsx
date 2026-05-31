import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { CartClient } from "@/components/cart/CartClient"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Winkelmandje"
        title="Uw geselecteerde configuraties"
        intro="Controleer uw configuratie, aantallen en prijsinformatie excl. en incl. btw voordat u naar checkout gaat."
      >
        <CartClient />
      </SimplePage>
    </SiteLayout>
  )
}
