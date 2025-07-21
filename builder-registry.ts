import { type RegisteredComponent } from "@builder.io/react";

// Component Imports
import { SaintVisionHero } from "@/components/builder/SaintVisionHero";
import { SaintVisionFeatureGrid } from "@/components/builder/SaintVisionFeatureGrid";
import { SaintVisionSecurityVault } from "@/components/builder/SaintVisionSecurityVault";
import { SaintVisionNavigation } from "@/components/builder/SaintVisionNavigation";
import { SaintVisionCTA } from "@/components/builder/SaintVisionCTA";

// Exporting custom components for Builder registration
export const customComponents: RegisteredComponent[] = [
  {
    component: SaintVisionHero,
    name: "SaintVisionHero",
    inputs: [
      { name: "title", type: "string", defaultValue: "SaintSal™" },
      { name: "subtitle", type: "string", defaultValue: "Cookin' Knowledge." },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "AI doesn't just answer. It adapts. It empowers. It becomes your enterprise companion.",
      },
      {
        name: "ctaText",
        type: "string",
        defaultValue: "Start Cookin' Knowledge",
      },
      { name: "ctaLink", type: "string", defaultValue: "/dashboard" },
      {
        name: "secondaryCtaText",
        type: "string",
        defaultValue: "Try CRM Tools",
      },
      {
        name: "secondaryCtaLink",
        type: "string",
        defaultValue: "/partnertech",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
      },
      {
        name: "logoImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
      },
      { name: "badgeText", type: "string", defaultValue: "Enterprise Ready" },
    ],
  },
  {
    component: SaintVisionFeatureGrid,
    name: "SaintVisionFeatureGrid",
    inputs: [
      { name: "title", type: "string", defaultValue: "Elite Technology" },
      { name: "subtitle", type: "string", defaultValue: "ENTERPRISE READY" },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "Dual AI systems handle your business operations while you focus on what matters - growing your empire.",
      },
    ],
  },
  {
    component: SaintVisionSecurityVault,
    name: "SaintVisionSecurityVault",
    inputs: [
      { name: "title", type: "string", defaultValue: "Vault & Security" },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Faith-Aligned Data Protection",
      },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "Bank-grade security meets faith-centered values. Your data protected with military-grade encryption and ethical business practices.",
      },
    ],
  },
  {
    component: SaintVisionNavigation,
    name: "SaintVisionNavigation",
    inputs: [
      {
        name: "brandName",
        type: "string",
        defaultValue: "SaintVisionAI™",
      },
      { name: "tagline", type: "string", defaultValue: "Cookin' Knowledge" },
      {
        name: "logoUrl",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
      },
    ],
  },
  {
    component: SaintVisionCTA,
    name: "SaintVisionCTA",
    inputs: [
      { name: "title", type: "string", defaultValue: "Elite AI Sanctuary" },
      { name: "subtitle", type: "string", defaultValue: "THE MOVEMENT" },
      {
        name: "description",
        type: "longText",
        defaultValue:
          "Built for those who refuse to compromise on excellence, privacy, or values. Join thousands who've discovered their GOTTA GUY®.",
      },
      {
        name: "primaryCtaText",
        type: "string",
        defaultValue: "Join The Movement",
      },
      { name: "primaryCtaLink", type: "string", defaultValue: "/dashboard" },
      {
        name: "secondaryCtaText",
        type: "string",
        defaultValue: "Discover Your Guy",
      },
      {
        name: "secondaryCtaLink",
        type: "string",
        defaultValue: "/why",
      },
    ],
  },
];
