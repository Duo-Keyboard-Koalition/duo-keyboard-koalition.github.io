import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignInBox from './SignIn';

function Header() {
  const { user } = useAuth();
  // make the show signin box state
  const [showSignIn, setShowSignIn] = React.useState(false);
  
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-[#161111]/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto">
          <nav className="flex justify-end py-4 px-6">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-white hover:text-primary">Home</Link>
              <Link to="/goals" className="text-white hover:text-primary">Goals</Link>
              <Link to="/projects" className="text-white hover:text-primary">Projects</Link>
              <Link to="/events" className="text-white hover:text-primary">Events</Link>
              <Link to="/wins" className="text-white hover:text-primary">Wins</Link>
              {user ? (
                <div className="flex items-center gap-4">
                  <Link 
                    to="/profile" 
                    className="text-white hover:text-primary"
                  >
                    Profile
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => setShowSignIn(true)}
                  className="text-white hover:text-primary"
                >
                  Sign In
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative">
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={() => setShowSignIn(false)}
            >
              ✕
            </button>
            <SignInBox onClose={() => setShowSignIn(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;