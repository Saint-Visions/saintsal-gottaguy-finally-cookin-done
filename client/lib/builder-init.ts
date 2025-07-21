import { builder, Builder } from "@builder.io/react";
import { customComponents } from "../../builder-registry";

let isInitialized = false;

// Initialize Builder.io with comprehensive settings
export const initializeBuilderComprehensive = () => {
  if (isInitialized) {
    console.log("Builder.io already initialized, skipping...");
    return builder;
  }

  const BUILDER_API_KEY =
    process.env.NEXT_PUBLIC_BUILDER_API_KEY || "065997bd13e4442e888a06852fcd61ba";

  try {
    // Initialize Builder
    builder.init(BUILDER_API_KEY);

    // Wait a tick to ensure builder is ready
    setTimeout(() => {
      // Register all custom components
      customComponents.forEach((component) => {
        try {
          Builder.registerComponent(component.component, component);
          console.log(`Registered component: ${component.name}`);
        } catch (error) {
          console.error(`Failed to register component ${component.name}:`, error);
        }
      });
    }, 0);

    // Enable analytics and tracking
    builder.canTrack = true;

    // Optional: Configure Builder environment (you can create a new ENV var for this if needed)
    if (process.env.NEXT_PUBLIC_BUILDER_ENVIRONMENT) {
      builder.env = process.env.NEXT_PUBLIC_BUILDER_ENVIRONMENT;
    }

    // Set User Agent (branding)
    builder.setUserAgent("SaintVisionAI/1.0");

<<<<<<< HEAD
    // Enable preview mode for development only
    // If you need to bust the cache, use Builder's public API or configuration options.
    // Currently, there is no public 'cachebust' property. You may consider appending a cache-busting query param to your requests if needed.
    // if (process.env.NODE_ENV === "development") {
    //   builder.cachebust = true;
    // }
=======
    // Enable preview mode for development and force cache clear
    if (import.meta.env.DEV) {
      builder.prerender = false;
      builder.cachebust = true;
    }
>>>>>>> 641b93bc (🚀 BUILD 55: Final polish — core routes, footer, legal pages, Builder + Vercel ready)

    // CRITICAL: Clear any cached homepage content that might interfere
    builder.cachebust = true;

    // Ensure Builder doesn't interfere with root path routing
    builder.set('canTrack', false);

    // Clear any existing Builder.io cache for the homepage
    if (typeof window !== 'undefined') {
      // Clear Builder.io specific localStorage
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('builder.') || key.startsWith('builderio')) {
          localStorage.removeItem(key);
        }
      });
    }

    isInitialized = true;
    console.log("Builder.io initialized for SaintVisionAI with API key:", BUILDER_API_KEY);

    return builder;
  } catch (error) {
    console.error("Failed to initialize Builder.io:", error);
    return builder;
  }
};

export { builder };
