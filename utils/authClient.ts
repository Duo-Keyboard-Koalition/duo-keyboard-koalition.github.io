import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://slqccoshyaaanseafwdv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNscWNjb3NoeWFhYW5zZWFmd2R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc4NTgsImV4cCI6MjA1MTcyMzg1OH0.YWjn2O6KivPMJGM5aSOOjaemWZ-ZI1mHaI4YYKZoJZg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
