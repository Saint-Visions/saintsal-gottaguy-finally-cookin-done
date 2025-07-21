import dynamic from 'next/dynamic'

const Workspace = dynamic(() => import('@/pages/Workspace'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">Loading...</div>
})

export async function generateStaticParams() {
  // Return empty array for static export - no dynamic workspace routes for now
  return []
}

export default function WorkspacePage() {
  return <Workspace />
}
