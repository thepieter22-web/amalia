"use client"

import { useMemo, useState } from "react"
import { useQuoteStore } from "@/store/quote-store"
import { formatEuro } from "@/lib/formatter"

export function QuotePageClient() {
  const draft = useQuoteStore((state) => state.draft)
  const [submitted, setSubmitted] = useState(false)

  const reason = useMemo(() => {
    if (!draft) return "Nog geen configuratie geselecteerd"
    if (draft.config.shape === "rond") return "Ronde matten verlopen via offerte"
    if (draft.config.quantity > 10) return "Aantallen boven 10 verlopen via offerte"
    if (draft.config.wantsQuote) return "De klant koos expliciet voor offerte"
    return "Complexe aanvraag"
  }, [draft])

  if (!draft) {
    return (
      <div className="empty-state">
        <h2>Er staat nog geen offerteconfiguratie klaar</h2>
        <p>Ga eerst naar de configurator en kies daar voor offerte of activeer een quote-regel.</p>
        <a href="/configurator" className="btn btn-primary">Naar configurator</a>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="card">
        <h3>Uw offerteaanvraag is genoteerd</h3>
        <p>Gebruik deze pagina later als basis voor backend-koppeling of CRM-integratie.</p>
      </div>
    )
  }

  return (
    <div className="quote-layout">
      <div className="card">
        <h3>Configuratieoverzicht</h3>
        <ul className="config-list">
          <li>Subtype: {draft.config.subtype}</li>
          <li>Vorm: {draft.config.shape}</li>
          <li>Aantal: {draft.config.quantity}</li>
          <li>Trigger: {reason}</li>
          <li>Indicatieve totaalprijs incl. btw: {formatEuro(draft.totalPriceInclVat)}</li>
        </ul>

        <form
          className="quote-form"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <label>
            Naam
            <input required />
          </label>

          <label>
            Bedrijf
            <input />
          </label>

          <label>
            E-mail
            <input type="email" required />
          </label>

          <label>
            Telefoon
            <input required />
          </label>

          <label>
            Extra toelichting
            <textarea placeholder="Bijvoorbeeld vorm, grotere afname of andere wensen" />
          </label>

          <button type="submit" className="btn btn-primary">
            Verzend offerteaanvraag
          </button>
        </form>
      </div>
    </div>
  )
}
``
