import { createClient } from "@supabase/supabase-js";

// Use NEXT_PUBLIC_ variables as fallback
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-default-url.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "your-default-anon-key";

// Runtime-safe Supabase client factory
export function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("⚠️ Missing Supabase env vars. Using mock client.");
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        signIn: () => Promise.resolve({ data: { user: null }, error: null }),
        signUp: () => Promise.resolve({ data: { user: null }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: null } }),
      },
      from: () => ({
        select: () => Promise.resolve({ data: [], error: null }),
        insert: () => Promise.resolve({ data: null, error: null }),
        update: () => Promise.resolve({ data: null, error: null }),
        delete: () => Promise.resolve({ data: null, error: null }),
        eq: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: null }),
          }),
        }),
      }),
    } as any;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

// ✅ Primary singleton instance
export const supabase = createSupabaseClient();
