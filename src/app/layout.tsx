import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/style.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalWishlist from '@/components/Modal/ModalWishlist'
import ModalQuickview from '@/components/Modal/ModalQuickview'

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
    <GlobalProvider>
      <html lang="en">
        <body className={quicksand.className}>
          <div id="content">
            {children}
          </div>
          <ModalCart />
          <ModalWishlist />
          <ModalQuickview />
        </body>
      </html>
    </GlobalProvider>
  )
}
