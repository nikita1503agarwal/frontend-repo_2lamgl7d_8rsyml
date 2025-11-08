import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="container mx-auto px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} AMMN Insurance Brokerage. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
