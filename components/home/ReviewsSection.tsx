import { TESTIMONIALS } from "@/lib/product-catalog"
import { SectionTitle } from "@/components/shared/SectionTitle"

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Reviews"
          title="Wat klanten waarderen"
          text="Sterke eerste indruk, duidelijke prijsopbouw en een vlotte keuze-ervaring via de configurator."
        />
        <div className="card-grid card-grid-3">
          {TESTIMONIALS.map((review) => (
            <article key={review.author} className="quote-card">
              <div className="stars">★★★★★</div>
              <p>{review.quote}</p>
              <strong>{review.author}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
