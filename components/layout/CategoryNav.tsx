import Link from "next/link"

const categoryLinks = [
  { href: "/logomatten-op-maat", label: "Logomatten op maat" },
  { href: "/producten", label: "Producten" },
  { href: "/configurator", label: "Configurator" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function CategoryNav() {
  return (
    <nav className="category-nav">
      <div className="container category-nav-inner">
        {categoryLinks.map((link) => (
          <Link key={link.href} href={link.href}>{link.label}</Link>
        ))}
      </div>
    </nav>
  )
}
