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

