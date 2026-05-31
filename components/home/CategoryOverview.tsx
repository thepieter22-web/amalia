import Link from "next/link"
import { MAT_SUBTYPES } from "@/lib/constants"
import { SectionTitle } from "@/components/shared/SectionTitle"

const highlightedGroups = [
  {
    title: "Binnen logomatten",
    text: "Impression, Colorstar, HD en Scrape voor representatieve binnenzones.",
    href: "/logomatten-op-maat",
  },
  {
    title: "Buiten logomatten",
    text: "Superscrap en Optibrush voor robuuste buitenentrees.",
    href: "/logomatten-op-maat",
  },
  {
    title: "Gewone matten",
    text: "Ook niet-gepersonaliseerde matten krijgen een plaats op de website, met minder focus.",
    href: "/producten",
  },
]

export function CategoryOverview() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionTitle
          eyebrow="Categorieën"
          title="De juiste mat voor elke toepassing"
          text="Carpetz focust op gepersonaliseerde logomatten, maar neemt ook standaardmatten op als aanvullend aanbod."
        />
        <div className="card-grid card-grid-3">
          {highlightedGroups.map((group) => (
            <article key={group.title} className="info-card">
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <Link href={group.href} className="text-link">Ontdek meer →</Link>
            </article>
          ))}
        </div>
        <div className="micro-copy">Subtypes in configurator: {MAT_SUBTYPES.map((item) => item.label).join(", ")}</div>
      </div>
    </section>
  )
}
