import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Iqterab Harvey - Portfolio',
  description: 'Portfolio website of Iqterab Harvey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
