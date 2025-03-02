import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import QRCode from './components/QRCode';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Events from './components/Events';
import Wins from './components/Wins';
import AuthButtons from './components/GoogleAuth';

function App() {

  return (
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
          </Routes>
          
          <div className="mt-12 flex justify-center">
            <AuthButtons />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
