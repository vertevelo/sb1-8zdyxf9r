import React from 'react';
import { Play, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(./images/hero-bg.png)',
          filter: 'brightness(0.6)'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <img src="./images/logo.png" alt="Vaynex Logo" className="mx-auto mb-8 max-w-xs h-auto" />
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          Vaynex
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Beatmaker • Rapper • Creator •
        </p>

      </div>
    </section>
  );
}