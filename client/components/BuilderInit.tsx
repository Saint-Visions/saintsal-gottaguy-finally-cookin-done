"use client";

import React, { useEffect } from "react";
import { builder, Builder } from "@builder.io/sdk-react";
import { customComponents } from "@/client/lib/builder-registry";

// ✅ Initialize Builder with your public API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || "065997bd13e4442e888a06852fcd61ba");

// ✅ This will run only on the client
export default function BuilderInit() {
  useEffect(() => {
    // Register all custom Builder components
    customComponents.forEach((component) => {
      Builder.registerComponent(component.component, {
        name: component.name,
        ...component.options,
      });
    });
  }, []);

  return null;
}

