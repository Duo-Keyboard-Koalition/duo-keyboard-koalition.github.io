import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface UserProfile {
  id: string
  username?: string
  bio?: string
  skills?: string[]
  github_url?: string
  linkedin_url?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface UserProject {
  id: string
  user_id: string
  name: string
  description: string
  tech_stack?: string[]
  github_link?: string
  live_link?: string
  devpost_link?: string
  image_url?: string
  created_at: string
  updated_at: string
}

export interface UserConnection {
  id: string
  user_id: string
  connected_user_id: string
  status: 'pending' | 'accepted' | 'blocked'
  created_at: string
}

export interface EventRSVP {
  id: string
  user_id: string
  event_name: string
  event_date: string
  event_time?: string
  event_location?: string
  event_description?: string
  rsvp_date: string
  status: 'confirmed' | 'cancelled'
}

// Note: Direct database operations have been moved to API middleware (api.ts)
// This file now only exports the Supabase client and TypeScript interfaces