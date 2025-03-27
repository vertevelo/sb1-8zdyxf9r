import React from 'react';
import { Play, Headphones } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.midjourney.com/6d817fbb-f1c5-4e26-9c22-e0f1d000384d/0_0.png)',
          filter: 'brightness(0.4)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight animate-fade-in">
          VAYNEX
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 tracking-widest animate-slide-up">
          Beatmaker • Rapper • Creator
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all">
            <Headphones size={20} />
            Listen Now
          </button>
          <button className="flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full transition-all">
            <Play size={20} />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}