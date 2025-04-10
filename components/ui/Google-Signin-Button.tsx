"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface GoogleSignInButtonProps {
  signInWithGoogle: () => Promise<void>;
  disabled: boolean;
}

export function GoogleSignInButton({
  signInWithGoogle,
  disabled,
}: GoogleSignInButtonProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error("Failed to sign in with Google:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleSignIn}
      disabled={disabled || isLoading}
      className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-md"
    >
      <GoogleIcon />
      <span>{isLoading ? "Connecting..." : "Sign in with Google"}</span>
    </Button>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81Z"
      />
    </svg>
  );
}