"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { getStorage } from "@/store/storage"
import type { CartItem } from "@/types/cart"

type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set({ items: [...get().items, item] }),
      removeItem: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((item) => {
            if (item.id !== id) return item
            const safeQty = Math.max(1, quantity)
            const ratio = safeQty / item.config.quantity
            return {
              ...item,
              config: { ...item.config, quantity: safeQty },
              totalPriceExclVat: Number((item.totalPriceExclVat * ratio).toFixed(2)),
              totalPriceInclVat: Number((item.totalPriceInclVat * ratio).toFixed(2)),
            }
          }),
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "carpetz-cart",
      storage: createJSONStorage(getStorage),
    }
  )
)
