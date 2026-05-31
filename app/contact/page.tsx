import { SiteLayout } from "@/components/layout/SiteLayout"
import { SimplePage } from "@/components/shared/SimplePage"

export default function Page() {
  return (
    <SiteLayout>
      <SimplePage eyebrow="Contact" title="Neem contact op met Carpetz" intro="Gebruik deze pagina voor vragen, offerteverzoeken of direct contact.">

          <div className="card">
            <p><strong>Telefoon:</strong> 0488253932</p>
            <p><strong>E-mail:</strong> info@carpetz.be</p>
            <p><strong>Adres:</strong> Berkenlaand 1D, 9840 De Pinte</p>
          </div>

      </SimplePage>
    </SiteLayout>
  )
}
