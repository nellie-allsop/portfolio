"use client"

import type { Metadata } from 'next'
import './globals.css'
import Footer from "@/components/Footer";
import { Comfortaa } from 'next/font/google';
import Header from "@/components/Header"
import {Providers} from "./providers";

const font = Comfortaa({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Nellie Allsop | Aspiring dev and EbE',
//   description: 'Created using next.js, typescript and tailwind',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={font.className}>
        <Providers>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        </Providers>
        </body>
    </html>
  )
}



