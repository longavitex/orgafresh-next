import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/style.scss'
import { CartProvider } from '@/context/CartContext'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrgaFresh',
  description: 'OrgaFresh - Organic Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={quicksand.className}>
          <div id="content">
            {children}
          </div>
        </body>
      </html>
    </CartProvider>
  )
}
