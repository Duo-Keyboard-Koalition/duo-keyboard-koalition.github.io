import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButtons from './AuthButtons';

function SignIn() {
  const navigate = useNavigate();

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
