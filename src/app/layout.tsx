import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import '@/styles/style.scss'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OrgaFresh',
  description: 'OrgaFresh - Organic Template',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/fav.png',
        href: '/images/fav.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  )
}
