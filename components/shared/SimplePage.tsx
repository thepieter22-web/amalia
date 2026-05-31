import { ReactNode } from "react"

export function SimplePage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
}) {
  return (
    <main className="simple-page">
      <div className="container simple-page-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p className="simple-lead">{intro}</p>
        <div className="simple-page-body">{children}</div>
      </div>
    </main>
  )
}
