import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infinity Gains LLP - Your Financial Partner",
  description:
    "Comprehensive financial services including insurance, mutual funds, loans, and professional training. Join our WhatsApp community for daily market updates."
}

export function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </Providers>
      </body>
    </html>
  )
}







