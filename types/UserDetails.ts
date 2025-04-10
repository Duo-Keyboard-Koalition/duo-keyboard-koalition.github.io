// First, create a UserDetails interface
export interface UserDetails {
  id: string;
  email: string;
  app_metadata?: {
    provider: string;
    providers?: string[];
  };
  user_metadata?: {
    avatar_url?: string;
    custom_claims?: {
      global_name?: string;
    };
    email?: string;
    email_verified?: boolean;
    full_name?: string;
    name?: string;
    picture?: string;
    provider_id?: string;
  };
  role?: string;
  aud?: string;
  // Add other fields as needed
}