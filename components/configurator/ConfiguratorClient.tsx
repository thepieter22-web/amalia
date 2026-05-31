"use client"

import { ChangeEvent, useMemo } from "react"
import { useRouter } from "next/navigation"
import { MAT_SUBTYPES, STANDARD_SIZES, COLOR_OPTIONS } from "@/lib/constants"
import { calculatePriceSummary } from "@/lib/pricing"
import { shouldForceQuote } from "@/lib/quote-rules"
import { useConfiguratorStore } from "@/store/configurator-store"
import { useCartStore } from "@/store/cart-store"
import { useQuoteStore } from "@/store/quote-store"
import type { CartItem } from "@/types/cart"
import { PreviewCanvas } from "@/components/configurator/PreviewCanvas"
import { PriceSummary } from "@/components/configurator/PriceSummary"
import { QuoteNotice } from "@/components/configurator/QuoteNotice"
import { Button } from "@/components/shared/Button"

export function ConfiguratorClient() {
  const router = useRouter()
  const config = useConfiguratorStore()
  const addItem = useCartStore((state) => state.addItem)
  const setQuoteDraft = useQuoteStore((state) => state.setDraft)

  const groupedSubtypes = useMemo(() => {
    const map = new Map<string, typeof MAT_SUBTYPES>()
    MAT_SUBTYPES.forEach((item) => {
      if (!map.has(item.group)) map.set(item.group, [])
      map.get(item.group)!.push(item)
    })
    return Array.from(map.entries())
  }, [])

  const priceSummary = calculatePriceSummary(config)
  const quoteMode = shouldForceQuote(config)

  function onLogoUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      config.setField("logoDataUrl", String(reader.result || ""))
      config.setField("logoName", file.name)
    }
    reader.readAsDataURL(file)
  }

  function buildCartItem(): CartItem {
    return {
      id: crypto.randomUUID(),
      title: `${config.subtype} logomat`,
      previewDataUrl: config.logoDataUrl,
      config: {
        subtype: config.subtype,
        area: config.area,
        placement: config.placement,
        orientation: config.orientation,
        rubberBorder: config.rubberBorder,
        shape: config.shape,
        useCustomSize: config.useCustomSize,
        widthCm: config.widthCm,
        heightCm: config.heightCm,
        diameterCm: config.diameterCm,
        colorHex: config.colorHex,
        logoDataUrl: config.logoDataUrl,
        logoName: config.logoName,
        customText: config.customText,
        quantity: config.quantity,
        wantsQuote: config.wantsQuote,
      },
      unitPriceExclVat: priceSummary.unitPriceExclVat,
      unitPriceInclVat: priceSummary.unitPriceInclVat,
      totalPriceExclVat: priceSummary.totalPriceExclVat,
      totalPriceInclVat: priceSummary.totalPriceInclVat,
    }
  }

  function addToCart() {
    const item = buildCartItem()
    addItem(item)
    router.push("/winkelmandje")
  }

  function requestQuote() {
    const item = buildCartItem()
    setQuoteDraft(item)
    router.push("/offerte")
  }

  return (
    <div className="configurator-grid">
      <div className="configurator-panel">
        <div className="configurator-section">
          <h3>Subtype</h3>
          {groupedSubtypes.map(([group, items]) => (
            <div key={group} className="configurator-group">
              <h4>{group}</h4>
              <div className="option-grid">
                {items.map((item) => (
                  <label key={item.value} className={`option-card ${config.subtype === item.value ? "option-card-active" : ""}`.trim()}>
                    <input
                      type="radio"
                      name="subtype"
                      value={item.value}
                      checked={config.subtype === item.value}
                      onChange={() => config.setField("subtype", item.value)}
                    />
                    <span>{item.label}</span>
                    <small>{item.description}</small>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="configurator-section two-col-form">
          <div>
            <label>Toepassing</label>
            <select value={config.area} onChange={(e) => config.setField("area", e.target.value as typeof config.area)}>
              <option value="binnen">Binnen</option>
              <option value="buiten">Buiten</option>
            </select>
          </div>
          <div>
            <label>Plaatsing</label>
            <select value={config.placement} onChange={(e) => config.setField("placement", e.target.value as typeof config.placement)}>
              <option value="op_vloer">Op de vloer</option>
              <option value="vloerkader">In vloerkader</option>
            </select>
          </div>
          <div>
            <label>Oriëntatie</label>
            <select value={config.orientation} onChange={(e) => config.setField("orientation", e.target.value as typeof config.orientation)}>
              <option value="liggend">Liggend</option>
              <option value="staand">Staand</option>
            </select>
          </div>
          <div>
            <label>Vorm</label>
            <select value={config.shape} onChange={(e) => config.setField("shape", e.target.value as typeof config.shape)}>
              <option value="rechthoek">Rechthoek</option>
              <option value="rond">Rond (offerte)</option>
            </select>
          </div>
        </div>

        <div className="configurator-section">
          <div className="switch-row">
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={config.rubberBorder}
                onChange={(e) => config.setField("rubberBorder", e.target.checked)}
              />
              <span>Rubberen rand</span>
            </label>
            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={config.useCustomSize}
                onChange={(e) => config.setField("useCustomSize", e.target.checked)}
              />
              <span>Eigen maat gebruiken</span>
            </label>
          </div>

          {config.shape === "rond" ? (
            <div className="two-col-form">
              <div>
                <label>Diameter (cm)</label>
                <input
                  type="number"
                  min={20}
                  value={config.diameterCm}
                  onChange={(e) => config.setField("diameterCm", Number(e.target.value || 0))}
                />
              </div>
            </div>
          ) : config.useCustomSize ? (
            <div className="two-col-form">
              <div>
                <label>Breedte (cm)</label>
                <input
                  type="number"
                  min={20}
                  value={config.widthCm}
                  onChange={(e) => config.setField("widthCm", Number(e.target.value || 0))}
                />
              </div>
              <div>
                <label>Hoogte (cm)</label>
                <input
                  type="number"
                  min={20}
                  value={config.heightCm}
                  onChange={(e) => config.setField("heightCm", Number(e.target.value || 0))}
                />
              </div>
            </div>
          ) : (
            <div className="size-preset-grid">
              {STANDARD_SIZES.map((size) => {
                const active = config.widthCm === size.widthCm && config.heightCm === size.heightCm
                return (
                  <button
                    key={size.label}
                    type="button"
                    className={`size-pill ${active ? "size-pill-active" : ""}`.trim()}
                    onClick={() => {
                      config.setField("widthCm", size.widthCm)
                      config.setField("heightCm", size.heightCm)
                    }}
                  >
                    {size.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="configurator-section two-col-form">
          <div>
            <label>Kleur mat</label>
            <div className="color-grid">
              {COLOR_OPTIONS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  className={`color-swatch ${config.colorHex === color.value ? "color-swatch-active" : ""}`.trim()}
                  style={{ backgroundColor: color.value }}
                  onClick={() => config.setField("colorHex", color.value)}
                  aria-label={color.label}
                  title={color.label}
                />
              ))}
            </div>
          </div>
          <div>
            <label>Logo upload (verplicht)</label>
            <input type="file" accept="image/*" onChange={onLogoUpload} />
            <small>{config.logoName ? `Gekozen bestand: ${config.logoName}` : "Nog geen bestand gekozen"}</small>
          </div>
          <div className="full-span">
            <label>Tekst toevoegen</label>
            <input
              type="text"
              placeholder="Bijvoorbeeld slogan of naam"
              value={config.customText}
              onChange={(e) => config.setField("customText", e.target.value)}
            />
          </div>
          <div>
            <label>Aantal</label>
            <input
              type="number"
              min={1}
              value={config.quantity}
              onChange={(e) => config.setField("quantity", Number(e.target.value || 1))}
            />
          </div>
          <div>
            <label>Offerte gewenst?</label>
            <label className="checkbox-row checkbox-inline">
              <input
                type="checkbox"
                checked={config.wantsQuote}
                onChange={(e) => config.setField("wantsQuote", e.target.checked)}
              />
              <span>Ik wil liever een offerte</span>
            </label>
          </div>
        </div>
      </div>

      <aside className="configurator-sidebar">
        <PreviewCanvas config={config} />
        <PriceSummary {...priceSummary} />
        <QuoteNotice visible={quoteMode} />
        <div className="configurator-actions">
          <Button variant="secondary" onClick={() => window.print()}>Render / export preview</Button>
          <Button variant="ghost" onClick={requestQuote}>Vraag offerte</Button>
          <Button variant="primary" onClick={addToCart} disabled={quoteMode || !config.logoDataUrl}>
            Voeg toe aan winkelmandje
          </Button>
          {(!config.logoDataUrl) ? <small className="micro-copy">Upload eerst een logo om toe te voegen aan het winkelmandje.</small> : null}
        </div>
      </aside>
    </div>
  )
}
