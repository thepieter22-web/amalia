import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"
import { QuotePageClient } from "@/components/QuotePageClient"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage
        eyebrow="Offerte"
        title="Vraag een offerte aan voor uw configuratie"
        intro="Wanneer direct bestellen niet van toepassing is, bewaart Carpetz uw configuratie en leidt de flow u naar een offerteformulier."
      >
        <QuotePageClient />
      </SimplePage>
    </SiteLayout>
  )
}
