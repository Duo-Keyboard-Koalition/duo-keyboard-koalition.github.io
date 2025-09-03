// API middleware for Supabase Edge Functions
import { supabase } from './supabase';

export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

class ApiClient {
  private baseUrl: string;
  private anonKey: string;

  constructor() {
    this.baseUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`;
    this.anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  }

  private async getAuthToken(): Promise<string | null> {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      return session?.access_token || null;
    } catch (error) {
      console.error('Failed to get auth token:', error);
      return null;
    }
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {},
    requireAuth: boolean = true
  ): Promise<ApiResponse<T>> {
    try {
      const headers: HeadersInit = {
        'apikey': this.anonKey,
        'Content-Type': 'application/json',
        ...options.headers,
      };

      // Add auth token if required and available
      if (requireAuth) {
        const token = await this.getAuthToken();
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        } else {
          return {
            success: false,
            error: 'Authentication required'
          };
        }
      }

      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error: any) {
      console.error(`API request failed for ${endpoint}:`, error);
      return {
        success: false,
        error: error.message || 'Request failed'
      };
    }
  }

  // Public endpoints (no auth required)
  private async publicRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/${endpoint}`, {
        ...options,
        headers: {
          'apikey': this.anonKey,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data
      };
    } catch (error: any) {
      console.error(`Public API request failed for ${endpoint}:`, error);
      return {
        success: false,
        error: error.message || 'Request failed'
      };
    }
  }

  // Events API
  async getEvents(options?: { date?: string; upcomingOnly?: boolean }): Promise<ApiResponse<{ events: any[] }>> {
    const params = new URLSearchParams();
    if (options?.date) params.append('date', options.date);
    if (options?.upcomingOnly) params.append('upcoming', 'true');
    
    const queryString = params.toString();
    return this.request(`events${queryString ? `?${queryString}` : ''}`, {}, false);
  }

  async getEvent(eventId: string): Promise<ApiResponse<{ event: any }>> {
    return this.request(`events/${eventId}`, {}, false);
  }

  async createEvent(event: any): Promise<ApiResponse<{ event: any }>> {
    return this.request('events', {
      method: 'POST',
      body: JSON.stringify(event),
    });
  }

  async updateEvent(eventId: string, event: any): Promise<ApiResponse<{ event: any }>> {
    return this.request(`events/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify(event),
    });
  }

  async deleteEvent(eventId: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`events/${eventId}`, {
      method: 'DELETE',
    });
  }

  // Projects API
  // Note: Public projects removed - only authenticated user projects available

  async getUserProjects(): Promise<ApiResponse<{ projects: any[] }>> {
    return this.request('user-projects');
  }

  async getProject(projectId: string): Promise<ApiResponse<{ project: any }>> {
    return this.request(`user-projects/${projectId}`);
  }

  async createProject(project: any): Promise<ApiResponse<{ project: any }>> {
    return this.request('user-projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });
  }

  async updateProject(projectId: string, project: any): Promise<ApiResponse<{ project: any }>> {
    return this.request(`user-projects/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });
  }

  async deleteProject(projectId: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`user-projects/${projectId}`, {
      method: 'DELETE',
    });
  }

  // User Profile API
  async getUserProfile(): Promise<ApiResponse<{ profile: any }>> {
    return this.request('user-profile');
  }

  async updateUserProfile(profile: any): Promise<ApiResponse<{ profile: any }>> {
    return this.request('user-profile', {
      method: 'PUT',
      body: JSON.stringify(profile),
    });
  }

  async createUserProfile(profile: any): Promise<ApiResponse<{ profile: any }>> {
    return this.request('user-profile', {
      method: 'POST',
      body: JSON.stringify(profile),
    });
  }

  // User Connections API
  async getUserConnections(status: string = 'accepted'): Promise<ApiResponse<{ connections: any[] }>> {
    return this.request(`user-connections?status=${status}`);
  }

  async createConnection(connectedUserId: string): Promise<ApiResponse<{ connection: any }>> {
    return this.request('user-connections', {
      method: 'POST',
      body: JSON.stringify({ connected_user_id: connectedUserId }),
    });
  }

  async updateConnection(connectionId: string, status: string): Promise<ApiResponse<{ connection: any }>> {
    return this.request(`user-connections/${connectionId}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  }

  async deleteConnection(connectionId: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`user-connections/${connectionId}`, {
      method: 'DELETE',
    });
  }

  // Event RSVPs API
  async getUserRSVPs(): Promise<ApiResponse<{ rsvps: any[] }>> {
    return this.request('event-rsvps');
  }

  async createRSVP(rsvp: any): Promise<ApiResponse<{ rsvp: any }>> {
    return this.request('event-rsvps', {
      method: 'POST',
      body: JSON.stringify(rsvp),
    });
  }

  async updateRSVP(rsvpId: string, updates: any): Promise<ApiResponse<{ rsvp: any }>> {
    return this.request(`event-rsvps/${rsvpId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async cancelRSVP(rsvpId: string): Promise<ApiResponse<{ success: boolean }>> {
    return this.request(`event-rsvps/${rsvpId}`, {
      method: 'DELETE',
    });
  }

  // Search Users API
  async searchUsers(query: string, limit: number = 20): Promise<ApiResponse<{ users: any[] }>> {
    return this.request(`search-users?q=${encodeURIComponent(query)}&limit=${limit}`);
  }
}

export const apiClient = new ApiClient();
