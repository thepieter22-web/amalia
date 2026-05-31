"use client"

import { useMemo } from "react"
import { useCartStore } from "@/store/cart-store"
import { formatEuro } from "@/lib/formatter"
import { inclToVat } from "@/lib/vat"

export function OrderSummary() {
  const items = useCartStore((state) => state.items)

  const totals = useMemo(() => {
    const subtotalExclVat = items.reduce((sum, item) => sum + item.totalPriceExclVat, 0)
    const subtotalInclVat = items.reduce((sum, item) => sum + item.totalPriceInclVat, 0)
    return {
      subtotalExclVat,
      subtotalInclVat,
      vatAmount: inclToVat(subtotalInclVat),
    }
  }, [items])

  return (
    <aside className="summary-card">
      <h3>Orderoverzicht</h3>
      {items.map((item) => (
        <div key={item.id} className="summary-line-item">
          <div>
            <strong>{item.title}</strong>
            <span>{item.config.quantity} stuk(s)</span>
          </div>
          <strong>{formatEuro(item.totalPriceInclVat)}</strong>
        </div>
      ))}
      <div className="summary-row"><span>Excl. btw</span><strong>{formatEuro(totals.subtotalExclVat)}</strong></div>
      <div className="summary-row"><span>Btw</span><strong>{formatEuro(totals.vatAmount)}</strong></div>
      <div className="summary-row summary-total"><span>Incl. btw</span><strong>{formatEuro(totals.subtotalInclVat)}</strong></div>
      <small className="micro-copy">Payment-ready architectuur: Bancontact, iDEAL en kaart kunnen later eenvoudig gekoppeld worden.</small>
    </aside>
  )
}
