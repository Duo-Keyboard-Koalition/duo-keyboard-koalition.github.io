import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


function AuthButtons() {
  const { authError, user, signInWithGoogle, signInWithDiscord, signOut } = useAuth();

  return (
    <div className="flex flex-col space-y-6 items-center">
      {authError && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-md text-sm w-full max-w-[240px] text-center">
          {authError}
        </div>
      )}

      <div className="flex flex-col space-y-4 items-center w-full">
        {user ? (
          <div className="flex flex-col items-center space-y-2">
            <div className="text-white font-medium">
              Signed in as: {user.user_metadata?.full_name || user.email}
            </div>
            <button
              onClick={signOut}
              className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full max-w-[240px] text-sm font-medium transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            {/* Discord Sign-In Button */}
            <button
              onClick={signInWithDiscord}
              className="flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2 rounded-md w-full max-w-[240px] text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor" className="mr-2">
                {/* Discord Icon */}
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Sign in with Discord
            </button>

            <div className="relative w-full max-w-[240px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gray-900 px-2 text-xs text-gray-400">or</span>
              </div>
            </div>

            {/* Google Sign-In Button */}
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center bg-[#4285F4] hover:bg-[#3367D6] text-white px-4 py-2 rounded-md w-full max-w-[240px] text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                {/* Google Icon */}
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
}



function SignIn() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    // Check if user is already signed in
    if (user && !loading) {
      navigate('/');
    }
    
    // Add script for Google Sign-In if it doesn't exist
    if (!document.querySelector('script[src="https://accounts.google.com/gsi/client"]')) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
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
