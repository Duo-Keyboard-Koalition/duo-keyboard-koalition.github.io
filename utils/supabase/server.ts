import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const createClient = async () => {
  const cookieStore = await cookies();
  const supabaseUrl = 'https://slqccoshyaaanseafwdv.supabase.co'
  const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscWNjb3NoeWFhYW5zZWFmd2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc4NTgsImV4cCI6MjA1MTcyMzg1OH0.YWjn2O6KivPMJGM5aSOOjaemWZ-ZI1mHaI4YYKZoJZg'
  
  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
