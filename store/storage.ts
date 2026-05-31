import { StateStorage } from "zustand/middleware"

const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
}

export function getStorage(): StateStorage {
  if (typeof window === "undefined") return noopStorage
  return window.localStorage
}
