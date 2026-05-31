import type { ConfiguratorState } from "@/types/configurator"

export function PreviewCanvas({ config }: { config: ConfiguratorState }) {
  const matStyle = {
    backgroundColor: config.colorHex,
  }

  const logoContent = config.logoDataUrl ? (
    <img src={config.logoDataUrl} alt={config.logoName || "Logo preview"} className="preview-logo-image" />
  ) : (
    <div className="preview-logo-placeholder">Upload uw logo</div>
  )

  return (
    <div className="preview-panel">
      <div className={`preview-mat ${config.shape === "rond" ? "preview-mat-round" : ""}`} style={matStyle}>
        <div className={`preview-border ${config.rubberBorder ? "preview-border-visible" : ""}`} />
        <div className={`preview-orientation preview-orientation-${config.orientation}`}>
          {logoContent}
          {config.customText ? <div className="preview-text">{config.customText}</div> : null}
        </div>
      </div>
      <div className="preview-caption">
        <span>
          {config.shape === "rond"
            ? `Rond · diameter ${config.diameterCm} cm`
            : `${config.widthCm} × ${config.heightCm} cm · ${config.orientation}`}
        </span>
        <span>{config.rubberBorder ? "Met rubberen rand" : "Zonder rubberen rand"}</span>
      </div>
    </div>
  )
}
