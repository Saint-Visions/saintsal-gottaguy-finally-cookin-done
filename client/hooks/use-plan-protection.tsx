"use client";

import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";

// Hook to get user plan (default fallback = "free")
export function useUserPlan() {
  const [plan, setPlan] = useState<"free" | "pro" | "enterprise">("free");

  useEffect(() => {
    const fetchPlan = async () => {
      const { data: { user } } = await supabaseClient.auth.getUser();

      if (user) {
        // Replace this with real metadata lookup if needed
        const { data } = await supabaseClient
          .from("profiles")
          .select("plan")
          .eq("id", user.id)
          .single();

        if (data?.plan) setPlan(data.plan);
      }
    };

    fetchPlan();
  }, []);

  return { plan };
}

// Wrapper for protected routes
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { plan } = useUserPlan();

  if (plan !== "pro" && plan !== "enterprise") {
    return <div className="p-4 text-center text-red-500">🔒 You must upgrade to access this page.</div>;
  }

  return <>{children}</>;
}
