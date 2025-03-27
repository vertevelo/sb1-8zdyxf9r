import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Music />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;