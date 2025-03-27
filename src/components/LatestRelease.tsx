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
            <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="SoundCloud Player"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2062752352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            className="rounded shadow-md"
          ></iframe>
            </div>
          </div>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Placeholder for YouTube embed */}
            <div className="w-full max-w-2xl mx-auto my-8">
            
            
  <iframe
    src="https://www.youtube.com/embed/OAUvlEeCwhE?si=6A94vP4nzrFYfI_m"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full aspect-video rounded-lg shadow-md"
  />
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}