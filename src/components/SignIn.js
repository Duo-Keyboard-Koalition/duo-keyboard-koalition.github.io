import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButtons from './AuthButtons';
import { useAuth } from '../context/AuthContext';

function SignIn() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Check if user is already signed in
    if (user && !loading) {
      navigate('/');
    }
    
    // Add script for Google Sign-In
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [navigate, user, loading]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 border border-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
      
      <p className="text-gray-400 text-center mb-8">
        Sign in to access exclusive features and participate in our community.
      </p>
      
      <AuthButtons />
      
      <div className="mt-8 pt-6 border-t border-gray-800 text-center">
        <button 
          onClick={() => navigate('/')}
          className="text-gray-400 hover:text-white text-sm"
        >
          Return to home
        </button>
      </div>
    </div>
  );
}

export default SignIn;
