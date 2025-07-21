import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SaintSal™ Empire',
  description: 'The Divine Platform. Built to Scale.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
