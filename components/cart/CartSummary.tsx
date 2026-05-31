"use client"

import Link from "next/link"
import { useMemo } from "react"
import { useCartStore } from "@/store/cart-store"
import { formatEuro } from "@/lib/formatter"
import { inclToVat } from "@/lib/vat"

export function CartSummary() {
  const items = useCartStore((state) => state.items)

  const totals = useMemo(() => {
    const subtotalExclVat = items.reduce((sum, item) => sum + item.totalPriceExclVat, 0)
    const subtotalInclVat = items.reduce((sum, item) => sum + item.totalPriceInclVat, 0)
    const vatAmount = inclToVat(subtotalInclVat)
    return {
      subtotalExclVat,
      subtotalInclVat,
      vatAmount,
    }
  }, [items])

  return (
    <aside className="summary-card">
      <h3>Samenvatting</h3>
      <div className="summary-row"><span>Subtotaal excl. btw</span><strong>{formatEuro(totals.subtotalExclVat)}</strong></div>
      <div className="summary-row"><span>Btw</span><strong>{formatEuro(totals.vatAmount)}</strong></div>
      <div className="summary-row summary-total"><span>Totaal incl. btw</span><strong>{formatEuro(totals.subtotalInclVat)}</strong></div>
      <div className="summary-actions">
        <Link href="/checkout" className="btn btn-primary">Verder naar checkout</Link>
        <Link href="/configurator" className="btn btn-secondary">Verder configureren</Link>
      </div>
    </aside>
  )
}
