const items = [
  "Premium logomatten op maat",
  "Hybride bestel- en offerteflow",
  "Duidelijke prijs per m²",
  "Payment-ready checkout",
]

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-bar-inner">
        {items.map((item) => (
          <span key={item}>✓ {item}</span>
        ))}
      </div>
    </div>
  )
}
