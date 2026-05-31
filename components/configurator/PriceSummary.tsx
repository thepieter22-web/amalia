import { formatEuro } from "@/lib/formatter"

export function PriceSummary({
  surfaceM2,
  unitPriceExclVat,
  unitPriceInclVat,
  totalPriceExclVat,
  totalPriceInclVat,
}: {
  surfaceM2: number
  unitPriceExclVat: number
  unitPriceInclVat: number
  totalPriceExclVat: number
  totalPriceInclVat: number
}) {
  return (
    <div className="price-summary">
      <div className="price-summary-row">
        <span>Oppervlakte</span>
        <strong>{surfaceM2.toFixed(2)} m²</strong>
      </div>
      <div className="price-summary-row">
        <span>Prijs per m² excl. btw</span>
        <strong>{formatEuro(40)}</strong>
      </div>
      <div className="price-summary-row">
        <span>Prijs per stuk excl. btw</span>
        <strong>{formatEuro(unitPriceExclVat)}</strong>
      </div>
      <div className="price-summary-row">
        <span>Prijs per stuk incl. btw</span>
        <strong>{formatEuro(unitPriceInclVat)}</strong>
      </div>
      <div className="price-summary-total">
        <div>
          <span>Totaal excl. btw</span>
          <strong>{formatEuro(totalPriceExclVat)}</strong>
        </div>
        <div>
          <span>Totaal incl. btw</span>
          <strong>{formatEuro(totalPriceInclVat)}</strong>
        </div>
      </div>
    </div>
  )
}
