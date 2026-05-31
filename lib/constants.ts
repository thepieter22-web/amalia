import type { ProductSubtype } from "@/types/configurator"

export const VAT_RATE = 0.21
export const PRICE_PER_M2 = 40

export const MAT_SUBTYPES: Array<{
  value: ProductSubtype
  label: string
  group: "Binnen logomatten" | "Buiten logomatten" | "Standaard matten"
  description: string
}> = [
  { value: "Impression", label: "Impression", group: "Binnen logomatten", description: "Binnenlogomat met premium uitstraling." },
  { value: "Colorstar", label: "Colorstar", group: "Binnen logomatten", description: "Sterke kleurweergave en nette afwerking voor binnen." },
  { value: "HD", label: "HD", group: "Binnen logomatten", description: "Extra scherpe logo-weergave voor representatieve zones." },
  { value: "Scrape", label: "Scrape", group: "Binnen logomatten", description: "Binnenmat met extra focus op vuilopvang." },
  { value: "Superscrap", label: "Superscrap", group: "Buiten logomatten", description: "Robuuste buitenoplossing voor intensief gebruik." },
  { value: "Optibrush", label: "Optibrush", group: "Buiten logomatten", description: "Schrapende buitenmat voor zware entrees." },
  { value: "Standaard Binnenmat", label: "Standaard Binnenmat", group: "Standaard matten", description: "Niet-gepersonaliseerde binnenmat met commerciële basisstijl." },
  { value: "Standaard Buitenmat", label: "Standaard Buitenmat", group: "Standaard matten", description: "Niet-gepersonaliseerde buitenmat als secundair aanbod." },
]

export const STANDARD_SIZES = [
  { label: "60 × 85 cm", widthCm: 60, heightCm: 85 },
  { label: "85 × 115 cm", widthCm: 85, heightCm: 115 },
  { label: "115 × 175 cm", widthCm: 115, heightCm: 175 },
  { label: "150 × 250 cm", widthCm: 150, heightCm: 250 },
]

export const COLOR_OPTIONS = [
  { label: "Warm blauw", value: "#1d5f94" },
  { label: "Diep marine", value: "#17324d" },
  { label: "Zacht grijsblauw", value: "#8ea3b6" },
  { label: "Antraciet", value: "#32373d" },
  { label: "Zand", value: "#b9a483" },
  { label: "Mosgroen", value: "#55785d" },
]
