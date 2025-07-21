'use client';

import React, { useEffect } from 'react';
import { builder, Builder } from '@builder.io/sdk-react';
import { customComponents } from '@/lib/builder-registry';

// ✅ Set your Builder.io API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '065997bd13e4442e888a06852fcd61ba');

export const BuilderInit = () => {
  useEffect(() => {
    for (const { name, component, options } of customComponents) {
      Builder.registerComponent(component, {
        name,
        ...options,
      });
    }
  }, []);

  return null;
};

