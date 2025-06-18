import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {CustomSessionProvider} from "@/components/session-provider"
// import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// console.log("WHAT AM I IMPORTING?", CustomSessionProvider);
// console.log("TYPE OF IMPORTED", typeof CustomSessionProvider);

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Infinity Gains LLP - Your Financial Partner",
  description:
    "Comprehensive financial services including insurance, mutual funds, loans, and professional training. Join our WhatsApp community for daily market updates."
}


export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
         <CustomSessionProvider session={session}> 
          <Navbar />
          <main>{children}</main>
          <Footer />
         </CustomSessionProvider>  
      </body>
    </html>
  )
}
