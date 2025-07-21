// client/lib/builder-init.ts

import { builder, Builder } from "@builder.io/sdk-react";
import { customComponents } from "./builder-registry";

// Init Builder once with API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "");

// Register components globally
customComponents.forEach(({ name, component, options }) => {
  Builder.registerComponent(component, { name, ...options });
});

