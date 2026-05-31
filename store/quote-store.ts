"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { getStorage } from "@/store/storage"
import type { CartItem } from "@/types/cart"

type QuoteStore = {
  draft: CartItem | null
  setDraft: (draft: CartItem) => void
  clearDraft: () => void
}

export const useQuoteStore = create<QuoteStore>()(
  persist(
    (set) => ({
      draft: null,
      setDraft: (draft) => set({ draft }),
      clearDraft: () => set({ draft: null }),
    }),
    {
      name: "carpetz-quote-draft",
      storage: createJSONStorage(getStorage),
    }
  )
)
