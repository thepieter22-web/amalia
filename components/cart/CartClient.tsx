"use client"

import { useCartStore } from "@/store/cart-store"
import { CartItemCard } from "@/components/cart/CartItemCard"
import { CartSummary } from "@/components/cart/CartSummary"

export function CartClient() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h2>Uw winkelmandje is nog leeg</h2>
        <p>Start in de configurator en voeg een logomat toe om verder te gaan.</p>
        <a href="/configurator" className="btn btn-primary">Start configurator</a>
      </div>
    )
  }

  return (
    <div className="cart-layout">
      <div className="cart-items">
        {items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  )
}
