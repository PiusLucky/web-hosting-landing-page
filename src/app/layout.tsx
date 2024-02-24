import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from "next/font/google"


export const metadata: Metadata = {
  title: 'Lemon Wares - Web hosting',
  description: 'A go-to webhosting platform for all your needs',
}


const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"] })


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
