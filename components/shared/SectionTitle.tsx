export function SectionTitle({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text: string
  light?: boolean
}) {
  return (
    <div className={`section-title ${light ? "section-title-light" : ""}`.trim()}>
      <span className={`eyebrow ${light ? "eyebrow-light" : ""}`.trim()}>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
