import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import LatestRelease from './components/LatestRelease';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <LatestRelease />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;