"use client"

import { useCartStore } from "@/store/cart-store"
import type { CartItem } from "@/types/cart"
import { formatEuro } from "@/lib/formatter"

export function CartItemCard({ item }: { item: CartItem }) {
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  return (
    <article className="cart-item-card">
      <div className="cart-item-preview">
        {item.previewDataUrl ? (
          <img src={item.previewDataUrl} alt={item.config.logoName || item.title} />
        ) : (
          <div className="cart-placeholder">Geen logo preview</div>
        )}
      </div>
      <div className="cart-item-body">
        <h3>{item.title}</h3>
        <ul className="config-list">
          <li>Subtype: {item.config.subtype}</li>
          <li>Toepassing: {item.config.area}</li>
          <li>Plaatsing: {item.config.placement}</li>
          <li>Vorm: {item.config.shape}</li>
          <li>
            Formaat: {item.config.shape === "rond"
              ? `Ø ${item.config.diameterCm} cm`
              : `${item.config.widthCm} × ${item.config.heightCm} cm`}
          </li>
          <li>Rand: {item.config.rubberBorder ? "Ja" : "Nee"}</li>
          <li>Tekst: {item.config.customText || "Geen extra tekst"}</li>
        </ul>
      </div>
      <div className="cart-item-side">
        <label>
          Aantal
          <input
            type="number"
            min={1}
            value={item.config.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value || 1))}
          />
        </label>
        <div className="cart-prices">
          <div>
            <span>Per stuk excl.</span>
            <strong>{formatEuro(item.unitPriceExclVat)}</strong>
          </div>
          <div>
            <span>Per stuk incl.</span>
            <strong>{formatEuro(item.unitPriceInclVat)}</strong>
          </div>
          <div>
            <span>Totaal incl.</span>
            <strong>{formatEuro(item.totalPriceInclVat)}</strong>
          </div>
        </div>
        <button type="button" className="remove-link" onClick={() => removeItem(item.id)}>
          Verwijderen
        </button>
      </div>
    </article>
  )
}
