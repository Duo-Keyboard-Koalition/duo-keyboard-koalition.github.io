"use client";

import React from "react";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
// load the environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);
// SignInBox Component
function SignInBox() {
  return (
    <div className="max-w-md w-full mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <p className="text-gray-400 text-center mb-8">
        Sign in to access exclusive features and participate in our community.
      </p>
      <Auth
  supabaseClient={supabase}
  appearance={{ theme: ThemeSupa }}
  providers={["google", "discord"]}
  redirectTo={typeof window !== 'undefined' ? window.location.origin : ''}
/>
    </div>
  );
}

// Wrap SignInBox with a centered container
export default function SignInPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <SignInBox />
      </div>
    </div>
  );
}
