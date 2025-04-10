"use client";

import React from "react";
import { DiscordSignInButton } from "@/components/ui/Discord-Signin-Button";
import { GoogleSignInButton } from "@/components/ui/Google-Signin-Button";
import { signInWithDiscord, signInWithGoogle } from "@/app/(auth-pages)/sign-in/action";

// SignInBox Component
function SignInBox(): JSX.Element {
  return (
    <div className="max-w-md w-full mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      <p className="text-gray-400 text-center mb-8">
        Sign in to access exclusive features and participate in our community.
      </p>
      <div className="flex flex-col space-y-6 items-center">
        {/* Discord Sign-In Button */}
        <DiscordSignInButton
          signInWithDiscord={signInWithDiscord}
          disabled={false}
        />
        
        {/* Google Sign-In Button */}
        <GoogleSignInButton
          signInWithGoogle={signInWithGoogle}
          disabled={false}
        />
        
        <div className="w-full text-center text-sm text-gray-500">
          By signing in, you agree to our 
          <a href="https://github.com/Duo-Keyboard-Koalition/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Terms of Service
          </a> 
          and 
          <a href="https://github.com/Duo-Keyboard-Koalition/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>.
        </div>
      </div>
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