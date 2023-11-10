import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

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
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/public/fav.png" />
      </Head>
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
