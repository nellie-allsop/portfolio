import type { Metadata } from 'next'
import './globals.css'
import Footer from "@/components/Footer";
import { Comfortaa } from 'next/font/google';

const font = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nellie Allsop | Aspiring dev and EbE',
  description: 'Created using next.js, typescript and tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
        </body>
    </html>
  )
}
