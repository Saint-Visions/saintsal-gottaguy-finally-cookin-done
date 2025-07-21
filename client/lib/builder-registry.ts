<<<<<<< HEAD
// client/lib/builder-registry.ts

import dynamic from "next/dynamic";

export const customComponents = [
  {
    name: "SaintVisionHero",
    component: dynamic(() => import("@/components/SaintVisionHero")),
    options: { name: "SaintVisionHero" },
  },
  {
    name: "SaintVisionFeatureGrid",
    component: dynamic(() => import("@/components/SaintVisionFeatureGrid")),
    options: { name: "SaintVisionFeatureGrid" },
  },
  // You can add more components below using the same pattern
];

=======
// This file has been moved to the root builder-registry.ts for proper Builder.io integration
// This file can be safely deleted - keeping as reference for now
export const customComponents: any[] = [];
>>>>>>> cb54c0e5 (🚀 BUILD 556: FINAL VICTORY! Builder.io integration complete - 17 months of work READY! 🎉)
