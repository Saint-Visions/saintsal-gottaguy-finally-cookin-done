import { builder, Builder } from '@builder.io/react';
import { customComponents } from '../../builder-registry';

// ✅ Correct for Next.js — use process.env
const BUILDER_API_KEY =
  process.env.NEXT_PUBLIC_BUILDER_API_KEY || '065997bd13e4442e888a06852fcd61ba';

export const initializeBuilder = () => {
  builder.init(BUILDER_API_KEY);

  // Register custom components safely
  customComponents.forEach((component) => {
    try {
      Builder.registerComponent(component.component, component);
      console.log(`✅ Registered: ${component.name}`);
    } catch (err) {
      console.error(`❌ Error registering ${component.name}:`, err);
    }
  });

  builder.canTrack = true; // Enable analytics
  builder.setUserAgent("SaintVisionAI/1.0");

  if (process.env.NODE_ENV === "development") {
    // builder.prerender = false; // Removed: Property does not exist on Builder
    // builder.cachebust = true; // Removed: Property is private and not accessible
  }

  return builder;
};

export { builder };
export default builder;
