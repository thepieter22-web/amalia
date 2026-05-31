"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { getStorage } from "@/store/storage"
import type { ConfiguratorState } from "@/types/configurator"

type ConfiguratorFields = ConfiguratorState

type ConfiguratorStore = ConfiguratorFields & {
  setField: <K extends keyof ConfiguratorFields>(
    key: K,
    value: ConfiguratorFields[K]
  ) => void
  reset: () => void
}

export const defaultConfiguratorState: ConfiguratorFields = {
  subtype: "Impression",
  area: "binnen",
  placement: "op_vloer",
  orientation: "liggend",
  rubberBorder: true,
  shape: "rechthoek",
  useCustomSize: false,
  widthCm: 85,
  heightCm: 115,
  diameterCm: 100,
  colorHex: "#1d5f94",
  logoDataUrl: null,
  logoName: "",
  customText: "",
  quantity: 1,
  wantsQuote: false,
}

export const useConfiguratorStore = create<ConfiguratorStore>()(
  persist(
    (set) => ({
      ...defaultConfiguratorState,
      setField: (key, value) =>
        set((state) => ({
          ...state,
          [key]: value,
        })),
      reset: () => set(() => ({ ...defaultConfiguratorState })),
    }),
    {
      name: "carpetz-configurator",
      storage: createJSONStorage(getStorage),
      partialize: (state) => ({
        subtype: state.subtype,
        area: state.area,
        placement: state.placement,
        orientation: state.orientation,
        rubberBorder: state.rubberBorder,
        shape: state.shape,
        useCustomSize: state.useCustomSize,
        widthCm: state.widthCm,
        heightCm: state.heightCm,
        diameterCm: state.diameterCm,
        colorHex: state.colorHex,
        logoDataUrl: state.logoDataUrl,
        logoName: state.logoName,
        customText: state.customText,
        quantity: state.quantity,
        wantsQuote: state.wantsQuote,
      }),
    }
  )
)
