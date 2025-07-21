import dynamic from 'next/dynamic'

const Console = dynamic(() => import('@/pages/Console'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">Loading...</div>
})

export async function generateStaticParams() {
  // Return empty array for static export - no dynamic agent routes for now
  return []
}

export default function ConsoleAgentPage() {
  return <Console />
}
