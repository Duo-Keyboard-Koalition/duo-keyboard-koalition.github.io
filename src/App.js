import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import QRCode from './components/QRCode';
import Footer from './components/Footer';
import Home from './pages/Home';
import Goals from './pages/Goals';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Wins from './pages/Wins';
import Hero from './components/Hero';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white">
          <Header />
          <Hero />
          <main className="flex-grow container mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/wins" element={<Wins />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
