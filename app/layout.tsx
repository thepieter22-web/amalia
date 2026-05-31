import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Carpetz | Premium logomatten op maat",
  description:
    "Configurator-first e-commerce website voor premium logomatten op maat, gericht op België en Benelux.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
