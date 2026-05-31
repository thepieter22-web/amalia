import { ReactNode } from "react"
import { Topbar } from "@/components/layout/Topbar"
import { Header } from "@/components/layout/Header"
import { CategoryNav } from "@/components/layout/CategoryNav"
import { TrustBar } from "@/components/layout/TrustBar"
import { Footer } from "@/components/layout/Footer"

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Topbar />
      <Header />
      <CategoryNav />
      <TrustBar />
      {children}
      <Footer />
    </>
  )
}
