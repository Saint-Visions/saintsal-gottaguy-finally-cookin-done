import '../styles/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'SaintVisionAI™ - Cookin\' Knowledge',
  description: 'AI doesn\'t just answer. It adapts. It empowers. It becomes your enterprise companion.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
