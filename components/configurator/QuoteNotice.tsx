export function QuoteNotice({ visible }: { visible: boolean }) {
  if (!visible) return null

  return (
    <div className="quote-notice">
      <strong>Offerteflow geactiveerd</strong>
      <p>
        Bij ronde matten, aantallen boven 10 of op expliciet verzoek schakelt Carpetz over naar offerte.
        Rechtstreeks bestellen wordt dan tijdelijk uitgeschakeld.
      </p>
    </div>
  )
}
