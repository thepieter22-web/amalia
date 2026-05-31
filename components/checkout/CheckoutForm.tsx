"use client"

import { FormEvent, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cart-store"
import type { CheckoutFormData, OrderDraft } from "@/types/order"
import { inclToVat } from "@/lib/vat"
import { OrderSummary } from "@/components/checkout/OrderSummary"

const initialForm: CheckoutFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  isBusinessCustomer: true,
  vatNumber: "",
  deliveryAddress: "",
  invoiceAddress: "",
  notes: "",
}

export function CheckoutForm() {
  const router = useRouter()
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)
  const [form, setForm] = useState<CheckoutFormData>(initialForm)
  const [error, setError] = useState("")

  const totals = useMemo(() => {
    const subtotalExclVat = items.reduce((sum, item) => sum + item.totalPriceExclVat, 0)
    const subtotalInclVat = items.reduce((sum, item) => sum + item.totalPriceInclVat, 0)
    return {
      subtotalExclVat,
      subtotalInclVat,
      vatAmount: inclToVat(subtotalInclVat),
    }
  }, [items])

  function updateField<K extends keyof CheckoutFormData>(key: K, value: CheckoutFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!form.fullName || !form.email || !form.phone || !form.deliveryAddress || !form.invoiceAddress) {
      setError("Vul alle verplichte velden in.")
      return
    }
    if (form.isBusinessCustomer && !form.vatNumber) {
      setError("Btw-nummer is verplicht voor zakelijke klanten.")
      return
    }

    const orderDraft: OrderDraft = {
      createdAt: new Date().toISOString(),
      items,
      totals,
      customer: form,
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("carpetz-last-order", JSON.stringify(orderDraft))
    }

    clearCart()
    router.push("/bedankt")
  }

  if (items.length === 0) {
    return (
      <div className="empty-state">
        <h2>Uw winkelmandje is leeg</h2>
        <p>Ga eerst naar de configurator om een product toe te voegen.</p>
        <a href="/configurator" className="btn btn-primary">Start configurator</a>
      </div>
    )
  }

  return (
    <div className="checkout-layout">
      <form className="checkout-form card" onSubmit={onSubmit}>
        <h2>Checkout</h2>
        <p className="simple-lead">Deze checkout is payment-ready. Integratie met Bancontact, iDEAL of kaart kan later toegevoegd worden.</p>

        <div className="form-grid">
          <label>
            Naam *
            <input value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} />
          </label>
          <label>
            Bedrijf
            <input value={form.company} onChange={(e) => updateField("company", e.target.value)} />
          </label>
          <label>
            E-mail *
            <input type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
          </label>
          <label>
            Telefoon *
            <input value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
          </label>
          <label className="full-span checkbox-row checkbox-inline">
            <input
              type="checkbox"
              checked={form.isBusinessCustomer}
              onChange={(e) => updateField("isBusinessCustomer", e.target.checked)}
            />
            <span>Ik koop als zakelijke klant</span>
          </label>
          <label>
            Btw-nummer {form.isBusinessCustomer ? "*" : ""}
            <input value={form.vatNumber} onChange={(e) => updateField("vatNumber", e.target.value)} />
          </label>
          <label className="full-span">
            Leveradres *
            <textarea value={form.deliveryAddress} onChange={(e) => updateField("deliveryAddress", e.target.value)} />
          </label>
          <label className="full-span">
            Factuuradres *
            <textarea value={form.invoiceAddress} onChange={(e) => updateField("invoiceAddress", e.target.value)} />
          </label>
          <label className="full-span">
            Opmerkingen
            <textarea value={form.notes} onChange={(e) => updateField("notes", e.target.value)} />
          </label>
        </div>

        {error ? <div className="form-error">{error}</div> : null}

        <div className="checkout-actions">
          <button type="submit" className="btn btn-primary">Plaats bestelling (payment-ready)</button>
        </div>
      </form>

      <OrderSummary />
    </div>
  )
}
