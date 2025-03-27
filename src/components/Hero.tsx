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
        <img src="./images/logo.png" alt="Vaynex Logo" className="mx-auto mb-8 w-48 h-auto" />
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
          Vaynex
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
          Beatmaker • Rapper • Creator
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2 transition-all transform hover:scale-105">
            <Headphones className="w-5 h-5" />
            Listen Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full flex items-center gap-2 transition-all transform hover:scale-105 hover:bg-white/10">
            <Play className="w-5 h-5" />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}