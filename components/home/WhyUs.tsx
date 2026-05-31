import { SectionTitle } from "@/components/shared/SectionTitle"

const reasons = [
  "Premium uitstraling met moderne warmblauwe merkidentiteit",
  "Eén duidelijke flow van configurator naar winkelmandje of offerte",
  "Geschikt voor zowel B2B als B2C in België en de Benelux",
  "Transparante prijsweergave per m², excl. en incl. btw",
]

export function WhyUs() {
  return (
    <section className="section section-dark-blue">
      <div className="container split-layout">
        <div>
          <SectionTitle
            eyebrow="Waarom Carpetz"
            title="Een premium webshop met een configurator als commerciële motor"
            text="De site is gebouwd om vertrouwen te creëren, keuzes te vergemakkelijken en klanten gericht te leiden naar bestellen of offerte."
            light
          />
        </div>
        <div className="reason-list">
          {reasons.map((reason) => (
            <div key={reason} className="reason-item">✓ {reason}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
