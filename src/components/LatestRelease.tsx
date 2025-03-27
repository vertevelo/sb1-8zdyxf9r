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
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2062752352&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/vaynex-92421161" title="Vaynex" target="_blank" style="color: #cccccc; text-decoration: none;">Vaynex</a> · <a href="https://soundcloud.com/vaynex-92421161/thats-the-way-you-feel-about" title="Thats The Way You Feel About it" target="_blank" style="color: #cccccc; text-decoration: none;">Thats The Way You Feel About it</a></div>
            </div>
          </div>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Placeholder for YouTube embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OAUvlEeCwhE?si=uw9JXsPNk8i2rCyj&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              YouTube Video
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}