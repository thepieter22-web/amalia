import { SECTORS } from "@/lib/product-catalog"
import { SectionTitle } from "@/components/shared/SectionTitle"

export function SectorSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionTitle
          eyebrow="Toepassingen"
          title="Voor kantoor, retail, horeca en meer"
          text="De Carpetz-website is opgebouwd voor sectorgerichte inspiratie en duidelijke productroutes per toepassing."
        />
        <div className="card-grid card-grid-3">
          {SECTORS.map((sector) => (
            <article key={sector} className="sector-tile">{sector}</article>
          ))}
        </div>
      </div>
    </section>
  )
}
