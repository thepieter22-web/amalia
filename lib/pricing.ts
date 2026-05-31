import { PRICE_PER_M2 } from "@/lib/constants"
import { exclToIncl } from "@/lib/vat"
import type { ConfiguratorState } from "@/types/configurator"

export function getSurfaceM2(config: ConfiguratorState): number {
  if (config.shape === "rond") {
    const radiusM = config.diameterCm / 100 / 2
    return Number((Math.PI * radiusM * radiusM).toFixed(4))
  }

  const widthM = config.widthCm / 100
  const heightM = config.heightCm / 100
  return Number((widthM * heightM).toFixed(4))
}

export function calculateUnitPriceExclVat(config: ConfiguratorState): number {
  const surface = getSurfaceM2(config)
  return Number((surface * PRICE_PER_M2).toFixed(2))
}

export function calculatePriceSummary(config: ConfiguratorState) {
  const unitPriceExclVat = calculateUnitPriceExclVat(config)
  const unitPriceInclVat = exclToIncl(unitPriceExclVat)
  const totalPriceExclVat = Number((unitPriceExclVat * config.quantity).toFixed(2))
  const totalPriceInclVat = Number((unitPriceInclVat * config.quantity).toFixed(2))

  return {
    surfaceM2: getSurfaceM2(config),
    unitPriceExclVat,
    unitPriceInclVat,
    totalPriceExclVat,
    totalPriceInclVat,
  }
}
