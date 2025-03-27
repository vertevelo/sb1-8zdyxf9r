import React from 'react';

export default function About() {
  return (
    <div className="relative py-24 bg-black">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.midjourney.com/decb0f72-f6df-4f30-af19-a168a8f00334/0_2.png)'
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About</h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Vaynex blends raw lyrical energy with hypnotic beats. With roots in underground rap and a deep sense for digital soundscapes, he creates music that resonates with both the soul and the subwoofer. His lyrics explore unconventional stories and reflections on life and mental health.
        </p>
        <p className="text-2xl font-bold text-white/80">
          "Beats built to break silence."
        </p>
      </div>
    </div>
  );
}