import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabase';

function Profile() {
  const { user, userProfile, loading, signOut } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    website: '',
    bio: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [linkedAccounts, setLinkedAccounts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/signin');
    }

    if (userProfile) {
      setFormData({
        full_name: userProfile.full_name || '',
        username: userProfile.username || '',
        website: userProfile.website || '',
        bio: userProfile.bio || ''
      });
    }

    // Fetch linked accounts
    const fetchLinkedAccounts = async () => {
      if (user) {
        const { data, error } = await supabase.auth.admin.listIdentities({
          userId: user.id
        });
        
        if (!error && data) {
          setLinkedAccounts(data);
        }
      }
    };

    fetchLinkedAccounts();
  }, [user, userProfile, loading, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          username: formData.username,
          website: formData.website,
          bio: formData.bio,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) throw error;
      setIsEditing(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  const linkDiscord = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: `${window.location.origin}/profile`,
          scopes: 'identify email'
        }
      });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    }
  };

  const linkGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/profile`,
          scopes: 'email profile'
        }
      });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return (
      <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm mb-4">
          {error}
        </div>
      )}
      
      <div className="flex items-start mb-8">
        <div className="mr-6">
          <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden">
            {userProfile?.avatar_url ? (
              <img 
                src={userProfile.avatar_url} 
                alt={userProfile.full_name || 'User'} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-3xl text-gray-400">
                {userProfile?.full_name?.charAt(0) || user?.email?.charAt(0) || '?'}
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">
            {userProfile?.full_name || 'User'}
          </h3>
          <p className="text-gray-400 mb-2">{user?.email}</p>
          <p className="text-gray-500 text-sm">
            Joined: {new Date(user?.created_at).toLocaleDateString()}
          </p>
        </div>
        
        <div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </div>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Full Name</p>
                <p className="text-white">{userProfile?.full_name || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Username</p>
                <p className="text-white">{userProfile?.username || 'Not set'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Website</p>
                <p className="text-white">
                  {userProfile?.website ? (
                    <a 
                      href={userProfile.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {userProfile.website}
                    </a>
                  ) : (
                    'Not set'
                  )}
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Bio</h3>
            <p className="text-gray-300 whitespace-pre-wrap">
              {userProfile?.bio || 'No bio provided yet.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Linked Accounts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-3">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span>Google</span>
                </div>
                {linkedAccounts.some(acc => acc.provider === 'google') ? (
                  <span className="text-green-500 text-sm">Connected</span>
                ) : (
                  <button 
                    onClick={linkGoogle}
                    className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    Connect
                  </button>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="#5865F2" className="mr-3">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                  </svg>
                  <span>Discord</span>
                </div>
                {linkedAccounts.some(acc => acc.provider === 'discord') ? (
                  <span className="text-green-500 text-sm">Connected</span>
                ) : (
                  <button 
                    onClick={linkDiscord}
                    className="text-sm bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    Connect
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-white text-sm"
        >
          Return to home
        </button>
        
        <button 
          onClick={signOut}
          className="text-red-500 hover:text-red-400 text-sm"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
