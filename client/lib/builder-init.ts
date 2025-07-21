<<<<<<< HEAD
// client/lib/builder-init.ts

import { builder, Builder } from "@builder.io/sdk-react";
import { customComponents } from "./builder-registry";

// Init Builder once with API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

// Register components globally
customComponents.forEach(({ name, component, options }) => {
  Builder.registerComponent(component, { name, ...options });
});

=======
// This file is no longer needed with the new @builder.io/sdk-react
// The SDK handles initialization automatically when importing components
// Component registration is handled in the root builder-registry.ts

export const initializeBuilderComprehensive = () => {
  console.log("Builder.io components are auto-initialized with the new SDK");
  return true;
};
>>>>>>> cb54c0e5 (🚀 BUILD 556: FINAL VICTORY! Builder.io integration complete - 17 months of work READY! 🎉)
