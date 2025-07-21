'use client'

import { useEffect } from 'react'
import { initializeBuilderComprehensive } from '@/lib/builder-init'

export function BuilderInit() {
  useEffect(() => {
    // Initialize Builder.io on client side
    initializeBuilderComprehensive()
  }, [])

  return null // This component doesn't render anything
}
