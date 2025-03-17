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
              {/* Simple White G Icon */}
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="white" />
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
