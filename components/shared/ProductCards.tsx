import Link from "next/link"
import { MAT_SUBTYPES } from "@/lib/constants"

export function ProductCards() {
  return (
    <div className="card-grid card-grid-3">
      {MAT_SUBTYPES.map((item) => (
        <article key={item.value} className="product-card">
          <div className="product-card-header"></div>
          <div className="product-card-body">
            <span className="product-group-label">{item.group}</span>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
            <div className="product-card-actions">
              <Link href="/configurator" className="text-link">Configureer →</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
