'use client'

import Console from '@/pages/Console'

export async function generateStaticParams() {
  // Return empty array for static export - no dynamic agent routes for now
  return []
}

export default function ConsoleAgentPage() {
  return <Console />
}
