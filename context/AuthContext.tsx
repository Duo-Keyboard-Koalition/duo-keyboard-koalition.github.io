"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { supabase } from "@/utils/authClient";
import { UserDetails } from "@/types/UserDetails";
import { signInWithDiscord, signInWithGoogle } from "@/app/(auth-pages)/sign-in/action";

// Types for AuthContext
interface AuthContextType {
  // State
  user: UserDetails | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  
  // Actions
  signInWithDiscord: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

// Create AuthContext
const AuthContext = createContext<AuthContextType | null>(null);

// Props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider Component
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Derived state
  const isAuthenticated = !!user;

  // Initialize auth state
  useEffect(() => {
    async function initializeAuth() {
      try {
        setLoading(true);
        setError(null);
        
        const { data: { session } } = await supabase.auth.getSession();
        
        if (session?.user) {
          setUser(session.user as UserDetails);
          console.log("User authenticated:", session.user.id);
        } else {
          setUser(null);
          console.log("No active session");
        }
      } catch (err) {
        console.error("Error initializing auth:", err);
        setError(err instanceof Error ? err.message : "Authentication error");
      } finally {
        setLoading(false);
      }
    }

    initializeAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event);
        
        if (session?.user) {
          setUser(session.user as UserDetails);
        } else {
          setUser(null);
        }
        
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Sign out
  const handleSignOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }
      
      setUser(null);
      setError(null);
    } catch (error) {
      console.error("Error signing out:", error);
      setError(error instanceof Error ? error.message : "Sign out error");
    } finally {
      setLoading(false);
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    try {
      setLoading(true);
      const { data: { user: currentUser }, error } = await supabase.auth.getUser();
      
      if (error) {
        throw error;
      }
      
      if (currentUser) {
        setUser(currentUser as UserDetails);
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      setError(error instanceof Error ? error.message : "Refresh error");
    } finally {
      setLoading(false);
    }
  };

  // Auth context value
  const value: AuthContextType = {
    user,
    loading,
    error,
    isAuthenticated,
    signInWithDiscord,
    signInWithGoogle,
    signOut: handleSignOut,
    refreshUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// useAuth Hook
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}