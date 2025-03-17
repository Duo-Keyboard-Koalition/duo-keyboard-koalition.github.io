import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PjQ7yXSb2U4BqTmLgAhrHSc15WVDmA.png"
              alt="DKK Logo"
              className="w-8 h-8 mr-2"
            />
            <span className="text-gray-400 text-sm">© 2024 Duo Keyboard Koalition</span>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Duo-Keyboard-Koalition/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm">GitHub</a>
            <a href="https://www.linkedin.com/company/pygmalion-koalition/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary text-sm">linkedin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
