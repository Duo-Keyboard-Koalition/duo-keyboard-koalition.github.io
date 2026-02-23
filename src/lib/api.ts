const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const apiClient = {
  async getPublicProjects(): Promise<{ projects: Array<Record<string, unknown>> }> {
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return { projects: [] };
    }
    const res = await fetch(`${SUPABASE_URL}/rest/v1/projects?select=*`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText || 'Failed to fetch projects');
    }
    const data = await res.json();
    return { projects: Array.isArray(data) ? data : [] };
  },
};
