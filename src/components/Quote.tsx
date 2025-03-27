import React from 'react';

export default function Quote() {
  return (
    <section className="py-20 bg-purple-900/20">
      <div className="container mx-auto px-4">
        <blockquote className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-bold text-white italic mb-4">
            "Music is my lifeline – a rescue when everything collapses, and the open door to my true self."
          </p>
        </blockquote>
      </div>
    </section>
  );
}