import React from 'react';

export default function LatestRelease() {
  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Latest Releases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* SoundCloud Embed */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="SoundCloud Player"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2062752352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* YouTube Embed */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/OAUvlEeCwhE?si=6A94vP4nzrFYfI_m"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
