export type ProductSubtype =
  | "Impression"
  | "Colorstar"
  | "HD"
  | "Scrape"
  | "Superscrap"
  | "Optibrush"
  | "Standaard Binnenmat"
  | "Standaard Buitenmat"

export type ProductArea = "binnen" | "buiten"
export type Placement = "op_vloer" | "vloerkader"
export type Orientation = "liggend" | "staand"
export type Shape = "rechthoek" | "rond"

export type ConfiguratorState = {
  subtype: ProductSubtype
  area: ProductArea
  placement: Placement
  orientation: Orientation
  rubberBorder: boolean
  shape: Shape
  useCustomSize: boolean
  widthCm: number
  heightCm: number
  diameterCm: number
  colorHex: string
  logoDataUrl: string | null
  logoName: string
  customText: string
  quantity: number
  wantsQuote: boolean
}
