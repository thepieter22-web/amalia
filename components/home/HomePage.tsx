import { Hero } from "@/components/home/Hero"
import { CategoryOverview } from "@/components/home/CategoryOverview"
import { WhyUs } from "@/components/home/WhyUs"
import { ReviewsSection } from "@/components/home/ReviewsSection"
import { SectorSection } from "@/components/home/SectorSection"
import { CtaBanner } from "@/components/home/CtaBanner"

export function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryOverview />
      <WhyUs />
      <ReviewsSection />
      <SectorSection />
      <CtaBanner />
    </main>
  )
}
