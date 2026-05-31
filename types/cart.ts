import type { ConfiguratorState } from "@/types/configurator"

export type CartItem = {
  id: string
  title: string
  previewDataUrl: string | null
  config: ConfiguratorState
  unitPriceExclVat: number
  unitPriceInclVat: number
  totalPriceExclVat: number
  totalPriceInclVat: number
}
