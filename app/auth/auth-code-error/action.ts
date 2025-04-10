import { supabase } from '@/utils/authClient';

// here would turn that auth url

export const fetchUserDetails = async (accessToken: string) => {
  try {
    const { data, error } = await supabase.auth.getUser(accessToken);
    if (error) {
      console.error("Error fetching user details:", error.message);
      return null;
    }
    return data.user; // Return user details
  } catch (err) {
    console.error("Unexpected error:", err);
    return null;
  }
};