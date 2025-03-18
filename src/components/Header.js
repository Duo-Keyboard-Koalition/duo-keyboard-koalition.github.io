import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const { user } = useAuth();
  return (
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
              <Link 
                to="/signin" 
                className="text-white hover:text-primary"
              >
                Sign In
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;