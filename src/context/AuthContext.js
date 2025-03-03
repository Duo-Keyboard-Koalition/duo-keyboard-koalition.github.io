import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../utils/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Fetch user profile from database
  const fetchUserProfile = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      if (data) {
        setUserProfile(data);
        return data;
      } else {
        // Create profile if it doesn't exist
        return createUserProfile(userId);
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      return null;
    }
  };

  // Create a new user profile
  const createUserProfile = async (userId) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      const user = userData?.user;
      
      if (!user) return null;

      const newProfile = {
        id: userId,
        email: user.email,
        full_name: user.user_metadata?.full_name || '',
        avatar_url: user.user_metadata?.avatar_url || '',
        provider: user.app_metadata?.provider || '',
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('profiles')
        .insert([newProfile])
        .select();

      if (error) {
        console.error('Error creating user profile:', error);
        return null;
      }

      setUserProfile(data[0]);
      return data[0];
    } catch (error) {
      console.error('Error in createUserProfile:', error);
      return null;
    }
  };

  useEffect(() => {
    // Check for active session on mount
    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          throw error;
        }
        
        setUser(session?.user || null);
        
        if (session?.user) {
          await fetchUserProfile(session.user.id);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error getting session:', error);
        setAuthError(error.message);
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user || null);
        
        if (event === 'SIGNED_IN' && session?.user) {
          await fetchUserProfile(session.user.id);
        } else if (event === 'SIGNED_OUT') {
          setUserProfile(null);
        }
        
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
      setAuthError(error.message);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setAuthError(null);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setAuthError(error.message);
    }
  };

  // Sign in with Discord
  const signInWithDiscord = async () => {
    try {
      setAuthError(null);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in with Discord:', error);
      setAuthError(error.message);
    }
  };

  const value = {
    user,
    userProfile,
    loading,
    authError,
    signOut,
    signInWithGoogle,
    signInWithDiscord,
    fetchUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
