import type { CartItem } from "@/types/cart"

export type CheckoutFormData = {
  fullName: string
  company: string
  email: string
  phone: string
  isBusinessCustomer: boolean
  vatNumber: string
  deliveryAddress: string
  invoiceAddress: string
  notes: string
}

export type OrderDraft = {
  createdAt: string
  items: CartItem[]
  totals: {
    subtotalExclVat: number
    subtotalInclVat: number
    vatAmount: number
  }
  customer: CheckoutFormData
}
