import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/shared/Button"

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner site-header-inner-simple">
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="Carpetz logo" width={92} height={92} priority />
          <div className="brand-copy">
            <strong>Carpetz</strong>
            <span>Logomatten op maat</span>
          </div>
        </Link>

        <div className="header-cta-row">
          <Button href="/configurator" variant="primary">
            Start configurator
          </Button>
        </div>
      </div>
    </header>
  )
}
