import React, { createContext, useContext, useEffect, useState } from 'react';

// Simple auth user type (no Supabase dependencies)
export interface AuthUser {
  id: string;
  email: string;
  username?: string;
  full_name?: string;
  avatar_url?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, metadata?: { username?: string; first_name?: string; last_name?: string }) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<AuthUser>) => Promise<{ success: boolean; error?: string }>;
  loginWithDiscord: () => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('dkk_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem('dkk_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Placeholder - authentication handled by vercel.app
    console.log('Login attempted - redirect to web app');
    return { success: false, error: 'Please use the web app for authentication' };
  };

  const register = async (email: string, password: string, metadata?: any) => {
    // Placeholder - registration handled by vercel.app
    console.log('Register attempted - redirect to web app');
    return { success: false, error: 'Please use the web app for registration' };
  };

  const logout = async () => {
    localStorage.removeItem('dkk_user');
    setUser(null);
  };

  const updateProfile = async (updates: Partial<AuthUser>) => {
    if (user) {
      const updated = { ...user, ...updates };
      setUser(updated);
      localStorage.setItem('dkk_user', JSON.stringify(updated));
      return { success: true };
    }
    return { success: false, error: 'Not authenticated' };
  };

  const loginWithDiscord = async () => {
    // Placeholder - OAuth handled by vercel.app
    console.log('Discord login attempted - redirect to web app');
    return { success: false, error: 'Please use the web app for Discord authentication' };
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: user !== null,
    login,
    register,
    logout,
    updateProfile,
    loginWithDiscord
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
