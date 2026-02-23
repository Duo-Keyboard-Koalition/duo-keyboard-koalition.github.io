import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import LoginButton from './LoginButton';
import UserProfile from './UserProfile';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

function Header(): JSX.Element {
  const { isAuthenticated } = useAuth();

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50 w-full">
      <nav className="w-full px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo_ngb.png"
              alt="DKK Logo"
              className="w-10 h-10 mr-3 flex-shrink-0"
            />
            <span className="text-xl font-bold text-white">
              <span className="text-primary">DUO KEYBOARD </span>
              <span className="text-white">KOALITION</span>
            </span>
          </Link>

          <div className="flex items-center gap-6 ml-auto">
            <Link to="/about" className="text-white hover:text-primary transition-colors">About</Link>
            <Link to="/projects" className="text-white hover:text-primary transition-colors">Projects</Link>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary/20"
              onClick={() => window.open('https://duo-keyboard-koalition.vercel.app', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Web App
            </Button>
            {!isAuthenticated ? <LoginButton /> : <UserProfile />}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
