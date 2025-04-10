
// sign in with discord
// Path: app/%28auth-pages%29/sign-in/action.ts
import { supabase } from "@/utils/authClient";

export async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: "identify email guilds",
      queryParams: {
        prompt: "consent",
      },
    },
  });
  console.log("data", data);
  if (error) {
    console.error("Error during Discord sign-in:", error.message);
    throw new Error(error.message);
  }

  console.log("Redirecting to Discord for authentication...");
  // return data;
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      scopes: "email profile",
      queryParams: {
        access_type: "offline", // This allows getting a refresh token
        prompt: "consent",
      },
    },
  });
  
  console.log("Google auth data:", data);
  
  if (error) {
    console.error("Error during Google sign-in:", error.message);
    throw new Error(error.message);
  }

  console.log("Redirecting to Google for authentication...");
  // return data;
}