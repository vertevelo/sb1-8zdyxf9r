import React from 'react';

export default function LatestRelease() {
  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Releases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Placeholder for SoundCloud embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
            
            </div>
          </div>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Placeholder for YouTube embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
            
              YouTube Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}