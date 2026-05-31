import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { CheckoutForm } from "@/components/checkout/CheckoutForm"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Checkout"
        title="Betaalklare checkout voor Carpetz"
        intro="Deze fase is payment-ready: alle checkoutvelden staan klaar en kunnen later gekoppeld worden aan Bancontact, iDEAL of kaartbetalingen."
      >
        <CheckoutForm />
      </SimplePage>
    </SiteLayout>
  )
}
