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
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2062752352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vaynex-92421161" title="Vaynex" target="_blank" style="color: #cccccc; text-decoration: none;">Vaynex</a> · <a href="https://soundcloud.com/vaynex-92421161/thats-the-way-you-feel-about" title="Thats The Way You Feel About it" target="_blank" style="color: #cccccc; text-decoration: none;">Thats The Way You Feel About it</a></div>
            </div>
          </div>
          
          {/* YouTube Player */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-white/90">Latest Video</h3>
            <div className="aspect-video bg-black/50 rounded-lg overflow-hidden">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OAUvlEeCwhE?si=AEeDLIRYmYsu5qqd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}