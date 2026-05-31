import Link from "next/link"

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/reviews", label: "Reviews" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
]

export function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="topbar-help">Hulp nodig? Bel 0488253932</div>
      </div>
    </div>
  )
}
