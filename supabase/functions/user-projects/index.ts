import { createClient } from 'jsr:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
}

interface Database {
  public: {
    Tables: {
      user_projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string
          tech_stack: string[] | null
          github_link: string | null
          live_link: string | null
          devpost_link: string | null
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          name: string
          description: string
          tech_stack?: string[] | null
          github_link?: string | null
          live_link?: string | null
          devpost_link?: string | null
          image_url?: string | null
        }
        Update: {
          name?: string
          description?: string
          tech_stack?: string[] | null
          github_link?: string | null
          live_link?: string | null
          devpost_link?: string | null
          image_url?: string | null
        }
      }
      project_contributors: {
        Row: {
          id: string
          project_id: string
          user_id: string
          role: 'owner' | 'contributor' | 'viewer'
          contribution_type: string[] | null
          joined_at: string
          is_active: boolean
        }
        Insert: {
          project_id: string
          user_id: string
          role?: 'owner' | 'contributor' | 'viewer'
          contribution_type?: string[] | null
          is_active?: boolean
        }
        Update: {
          role?: 'owner' | 'contributor' | 'viewer'
          contribution_type?: string[] | null
          is_active?: boolean
        }
      }
      user_profiles: {
        Row: {
          id: string
          username: string | null
          bio: string | null
          avatar_url: string | null
        }
      }
    }
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
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
    const pathParts = url.pathname.split('/')
    const projectId = pathParts[pathParts.length - 1]

    switch (req.method) {
      case 'GET': {
        if (projectId && projectId !== 'user-projects') {
          // Get specific project
          const { data: project, error } = await supabaseClient
            .from('user_projects')
            .select('*')
            .eq('id', projectId)
            .eq('user_id', user.id)
            .single()

          if (error) {
            throw error
          }

          return new Response(
            JSON.stringify({ project }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          )
        } else {
          try {
            console.log('=== FETCHING PROJECTS FOR USER ===')
            console.log('User ID:', user.id)
            console.log('User email:', user.email)
            
            // First, let's check what's in the user_projects table
            const { data: allProjects, error: allError } = await supabaseClient
              .from('user_projects')
              .select('*')
            
            console.log('=== ALL PROJECTS IN DATABASE ===')
            console.log('Total projects in database:', allProjects?.length || 0)
            console.log('All projects:', JSON.stringify(allProjects, null, 2))
            
            // Check projects for this specific user
            const { data: userProjects, error: userError } = await supabaseClient
              .from('user_projects')
              .select('*')
              .eq('user_id', user.id)
            
            console.log('=== USER PROJECTS ===')
            console.log('Projects for user:', userProjects?.length || 0)
            console.log('User projects:', JSON.stringify(userProjects, null, 2))
            
            // Check contributor records
            const { data: allContributors, error: contributorError } = await supabaseClient
              .from('project_contributors')
              .select('*')
            
            console.log('=== ALL CONTRIBUTOR RECORDS ===')
            console.log('Total contributor records:', allContributors?.length || 0)
            console.log('All contributors:', JSON.stringify(allContributors, null, 2))
            
            // Check contributor records for this user
            const { data: userContributors, error: userContributorError } = await supabaseClient
              .from('project_contributors')
              .select('*')
              .eq('user_id', user.id)
            
            console.log('=== USER CONTRIBUTOR RECORDS ===')
            console.log('Contributor records for user:', userContributors?.length || 0)
            console.log('User contributors:', JSON.stringify(userContributors, null, 2))
            
            // Now try to get projects with contributor info first
            console.log('=== ATTEMPTING COMPLEX QUERY ===')
            const { data: projects, error } = await supabaseClient
              .from('user_projects')
              .select(`
                *,
                project_contributors!inner(
                  role,
                  contribution_type,
                  joined_at,
                  is_active
                )
              `)
              .eq('project_contributors.user_id', user.id)
              .eq('project_contributors.is_active', true)
              .order('created_at', { ascending: false })

            if (error) {
              console.error('=== COMPLEX QUERY FAILED ===')
              console.error('Error details:', JSON.stringify(error, null, 2))
              console.log('=== FALLING BACK TO SIMPLE QUERY ===')
              
              // Fallback: Get projects directly by user_id
              const { data: fallbackProjects, error: fallbackError } = await supabaseClient
                .from('user_projects')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false })

              if (fallbackError) {
                console.error('=== FALLBACK QUERY ALSO FAILED ===')
                console.error('Fallback error details:', JSON.stringify(fallbackError, null, 2))
                throw fallbackError
              }

              console.log('=== FALLBACK QUERY SUCCESS ===')
              console.log('Fallback query returned:', fallbackProjects?.length || 0, 'projects')
              console.log('Fallback projects data:', JSON.stringify(fallbackProjects, null, 2))

              // Add default owner role for fallback
              const formattedFallback = (fallbackProjects || []).map(project => ({
                ...project,
                user_role: 'owner',
                contribution_type: ['creator'],
                joined_at: project.created_at
              }))

              console.log('=== RETURNING FALLBACK RESPONSE ===')
              console.log('Final fallback response:', JSON.stringify(formattedFallback, null, 2))
              
              return new Response(
                JSON.stringify({ projects: formattedFallback }),
                {
                  headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                }
              )
            }

            console.log('=== COMPLEX QUERY SUCCESS ===')
            console.log('Complex query returned:', projects?.length || 0, 'projects')
            console.log('Complex query data:', JSON.stringify(projects, null, 2))

            // Format the response to include contributor info
            const formattedProjects = (projects || []).map(project => ({
              ...project,
              user_role: project.project_contributors[0]?.role || 'contributor',
              contribution_type: project.project_contributors[0]?.contribution_type || [],
              joined_at: project.project_contributors[0]?.joined_at
            }))

            console.log('=== RETURNING COMPLEX QUERY RESPONSE ===')
            console.log('Final complex response:', JSON.stringify(formattedProjects, null, 2))

            return new Response(
              JSON.stringify({ projects: formattedProjects }),
              {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              }
            )
          } catch (error) {
            console.error('=== ALL QUERIES FAILED ===')
            console.error('Final error:', JSON.stringify(error, null, 2))
            
            // Final fallback: empty projects array
            return new Response(
              JSON.stringify({ projects: [] }),
              {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              }
            )
          }
        }
      }

      case 'POST': {
        const projectData = await req.json()
        
        // Create the project first
        const { data: project, error: projectError } = await supabaseClient
          .from('user_projects')
          .insert({
            user_id: user.id,
            ...projectData,
          })
          .select()
          .single()

        if (projectError) {
          throw projectError
        }

        // Add the user as the owner in project_contributors
        const { error: contributorError } = await supabaseClient
          .from('project_contributors')
          .insert({
            project_id: project.id,
            user_id: user.id,
            role: 'owner',
            contribution_type: ['creator'],
            is_active: true
          })

        if (contributorError) {
          // If adding contributor fails, clean up the project
          await supabaseClient
            .from('user_projects')
            .delete()
            .eq('id', project.id)
          
          throw contributorError
        }

        return new Response(
          JSON.stringify({ project }),
          {
            status: 201,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
      }

      case 'PUT': {
        if (!projectId || projectId === 'user-projects') {
          return new Response(
            JSON.stringify({ error: 'Project ID required for update' }),
            {
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          )
        }

        const updateData = await req.json()
        
        const { data: project, error } = await supabaseClient
          .from('user_projects')
          .update({
            ...updateData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', projectId)
          .eq('user_id', user.id)
          .select()
          .single()

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ project }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
      }

      case 'DELETE': {
        if (!projectId || projectId === 'user-projects') {
          return new Response(
            JSON.stringify({ error: 'Project ID required for deletion' }),
            {
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            }
          )
        }

        const { error } = await supabaseClient
          .from('user_projects')
          .delete()
          .eq('id', projectId)
          .eq('user_id', user.id)

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ success: true }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
      }

      default:
        return new Response(
          JSON.stringify({ error: 'Method not allowed' }),
          {
            status: 405,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
    }
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
