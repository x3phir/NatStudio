import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Chewy } from 'next/font/google'
import './globals.css'

const candice = localFont({
  src: '../public/fonts/Candice.woff',
  variable: '--font-candice',
  weight: '400',
  style: 'normal',
  display: 'swap',
})

const chewy = Chewy({
  variable: '--font-chewy',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NatStudio - Digital Art & Illustrations',
  description: 'Custom digital illustrations, character commissions, and creative assets by NatStudio',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdf2f8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${candice.variable} ${chewy.variable}`}>
      <body className="bg-background font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
