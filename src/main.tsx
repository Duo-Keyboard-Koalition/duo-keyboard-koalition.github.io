import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import QR from './pages/QR'
import './index.css'

function App() {
  const DISCORD_INVITE_LINK = 'https://discord.gg/BWyeYP29hp'
  const handleDiscordJoin = () => window.open(DISCORD_INVITE_LINK, '_blank')

  // Public layout (with header and footer)
  const PublicLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50 w-full">
        <nav className="w-full px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <a href="/" className="flex items-center">
              <img
                src="/images/logo_ngb.png"
                alt="DKK Logo"
                className="w-10 h-10 mr-3 flex-shrink-0"
              />
              <span className="text-xl font-bold text-white">
                <span className="text-primary">DUO KEYBOARD </span>
                <span className="text-white">KOALITION</span>
              </span>
            </a>

            <div className="flex items-center gap-6 ml-auto">
              <a href="/about" className="text-white hover:text-primary transition-colors">About</a>
              <a href="/qr" className="text-white hover:text-primary transition-colors">QR</a>
              <a
                href="https://duo-keyboard-koalition.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/20 transition-colors text-sm font-medium"
              >
                Web App
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo_ngb.png"
              alt="DKK Logo"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Duo Keyboard Koalition. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={DISCORD_INVITE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5865F2] text-sm"
              onClick={(e) => { e.preventDefault(); handleDiscordJoin() }}
            >
              Discord
            </a>
            <a
              href="https://github.com/orgs/Duo-Keyboard-Koalition/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/duo-keyboard-koalition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B5] text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/qr" element={<PublicLayout><QR /></PublicLayout>} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
