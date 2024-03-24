import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from "next/font/google"


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio website',
}


const poppins = Poppins({subsets: ["latin"], weight: ["100", "200", "400", "500", "700"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={poppins.className} >{children}</body>
    </html>
  )
}
