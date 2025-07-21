"use client";

import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { builder, Builder } from "@builder.io/react";

import BuilderContent from "@components/BuilderContent";
import { Footer } from "@components/Footer";
import { customComponents } from "@lib/builder-registry";

// ✅ Initialize Builder.io
builder.init(
  process.env.NEXT_PUBLIC_BUILDER_API_KEY || "065997bd13e4442e888a06652fcd61ba"
);

// ✅ Register components once on mount
customComponents.forEach((component) => {
  Builder.registerComponent(component.component, component);
});

export default function BuilderPage() {
  const { "*": slug } = useParams();
  const location = useLocation();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    builder
      .get("page", {
        url: location.pathname,
        prerender: false,
      })
      .promise()
      .then((res) => {
        setContent(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching Builder.io content:", err);
        setLoading(false);
      });
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse mb-4">
            <div className="w-16 h-16 bg-gold-500/20 rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-gold-300">Loading content...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4 text-gold-300">404</h1>
          <p className="text-white/80 mb-6">
            Page not found. Make sure it's published in Builder.io.
          </p>
          <a
            href="/"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-900 text-white">
      <BuilderContent model="page" content={content} />
      <Footer />
    </div>
  );
}
