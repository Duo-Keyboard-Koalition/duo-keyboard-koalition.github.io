import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './components/AuthProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Platforms from './pages/Platforms'
import './index.css'

function App() {
  const handleDiscordJoin = () => {
    window.open('https://discord.gg/6GaWZAawUc', '_blank')
  }

  // Public layout (with header and footer)
  const PublicLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer handleDiscordJoin={handleDiscordJoin} />
    </div>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/projects" element={<PublicLayout><Projects /></PublicLayout>} />
        <Route path="/platforms" element={<PublicLayout><Platforms /></PublicLayout>} />
      </Routes>
    </Router>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
