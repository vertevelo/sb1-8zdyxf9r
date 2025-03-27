import React from 'react';

export default function Quote() {
  return (
    <div className="bg-black py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"
        style={{
          maskImage: 'radial-gradient(circle at center, black, transparent)'
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <blockquote className="text-2xl md:text-4xl font-bold text-white italic leading-relaxed">
          "Music is my lifeline – a rescue when everything collapses, and the open door to my true self."
        </blockquote>
      </div>
    </div>
  );
}