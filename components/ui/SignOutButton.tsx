"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SignOutButtonProps = React.ComponentProps<typeof Button> & {
  redirectTo?: string;
};

export function SignOutButton({
  className = "",
  children = "Sign Out",
  ...props
}: SignOutButtonProps) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      // Always redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSignOut}
      className={`bg-red-600 hover:bg-red-700 text-white ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Signing out..." : children}
    </Button>
  );
}
