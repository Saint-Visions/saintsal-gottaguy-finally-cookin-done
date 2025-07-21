import { createClient } from "@supabase/supabase-js";

// Use fallback NEXT_PUBLIC_ if VITE_ not available
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

/**
 * Factory to create Supabase Client instance.
 */
export function createSupabaseClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("⚠️ Supabase environment variables missing. Using mock client for dev.");
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

// 🔁 Shared instance for app-wide use
export const supabaseClient = createSupabaseClient();
