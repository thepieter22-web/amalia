import { VAT_RATE } from "@/lib/constants"

export function exclToIncl(valueExcl: number): number {
  return Number((valueExcl * (1 + VAT_RATE)).toFixed(2))
}

export function inclToVat(valueIncl: number): number {
  return Number((valueIncl - valueIncl / (1 + VAT_RATE)).toFixed(2))
}
