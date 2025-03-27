import React from 'react';

export default function FeaturedTrack() {
  return (
    <section className="bg-neutral-900 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🎵 Featured Track
        </h2>

        <div className="mb-4">
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

        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
            fontWeight: 100,
          }}
        >
          <a
            href="https://soundcloud.com/vaynex-92421161"
            title="Vaynex"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Vaynex
          </a>{' '}
          ·{' '}
          <a
            href="https://soundcloud.com/vaynex-92421161/thats-the-way-you-feel-about"
            title="Thats The Way You Feel About it"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Thats The Way You Feel About it
          </a>
        </div>
      </div>
    </section>
  );
}
