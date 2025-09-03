import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
}

interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string
          username: string | null
          bio: string | null
          skills: string[] | null
          github_url: string | null
          linkedin_url: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'GET') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  try {
    const supabaseClient = createClient<Database>(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    // Get the authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    const url = new URL(req.url)
    const query = url.searchParams.get('q') || ''
    const limit = parseInt(url.searchParams.get('limit') || '20')

    if (!query.trim()) {
      return new Response(
        JSON.stringify({ users: [] }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Search users by username, bio, or skills
    let searchQuery = supabaseClient
      .from('user_profiles')
      .select('*')
      .neq('id', user.id) // Exclude current user
      .limit(limit)

    // Search in username and bio
    searchQuery = searchQuery.or(`username.ilike.%${query}%,bio.ilike.%${query}%`)

    const { data: users, error } = await searchQuery

    if (error) {
      throw error
    }

    // Additional filtering for skills (since we can't easily search arrays with ilike)
    const filteredUsers = (users || []).filter(user => {
      const matchesSkills = user.skills?.some(skill => 
        skill.toLowerCase().includes(query.toLowerCase())
      )
      return matchesSkills || 
             user.username?.toLowerCase().includes(query.toLowerCase()) ||
             user.bio?.toLowerCase().includes(query.toLowerCase())
    })

    return new Response(
      JSON.stringify({ users: filteredUsers }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
