import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import QRCode from './components/QRCode';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Wins from './pages/Wins';

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-black text-white">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
              <Route path="/wins" element={<Wins />} />
              <Route path="/signin" element={<SignIn />} />
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
