import Workspace from '@/pages/Workspace'

export async function generateStaticParams() {
  // Return empty array for static export - no dynamic workspace routes for now
  return []
}

export default function WorkspacePage() {
  return <Workspace />
}
