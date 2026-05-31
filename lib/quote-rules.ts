import type { ConfiguratorState } from "@/types/configurator"

export function shouldForceQuote(config: ConfiguratorState): boolean {
  return config.shape === "rond" || config.quantity > 10 || config.wantsQuote
}
