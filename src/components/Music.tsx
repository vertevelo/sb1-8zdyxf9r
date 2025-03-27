import React from 'react';

export default function Music() {
  return (
    <div className="bg-black/95 py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Latest Releases</h2>
        <div className="grid gap-8">
          {/* SoundCloud Player */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-white/90">Featured Track</h3>
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                scrolling="no"
                frameBorder="no"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
          
          {/* YouTube Player */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-white/90">Latest Video</h3>
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="Vaynex Music Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}