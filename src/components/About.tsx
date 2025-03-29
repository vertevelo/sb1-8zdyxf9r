import React from 'react';

export default function About() {
  return (
    <section className="relative py-20 overflow-hidden bg-black/90">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Vaynex blends raw lyrical energy with hypnotic beats. With roots in underground rap 
            and a deep sense for digital soundscapes, he creates music that resonates with both 
            the soul and the subwoofer. His lyrics explore unconventional stories and reflections 
            on life and mental health.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-purple-500">
            <br>🔈 "Beats built to break silence."</br>
            <br> 🎙 "Turning struggles into sound"</br>
            <br>🧠 "Mental Health in every bar"</br>
          </p>
        </div>
      </div>
    </section>
  );
}
