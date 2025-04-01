import React from 'react';

export default function LatestRelease() {
  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center animate__animated animate__fadeInUp">
          Latest Releases
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* SoundCloud Embed */}
          <div className="bg-gray-900 rounded-lg overflow-hidden p-4 animate__animated animate__fadeInLeft">
            <h3 className="text-xl font-semibold text-white mb-4">
              🎧 Latest Drop on SoundCloud: <span className="text-purple-400">"You Are Not Alone"</span>
            </h3>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              title="SoundCloud Player – You are not alone"
              src="https%3A//api.soundcloud.com/tracks/2068378148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="w-full rounded-md shadow-md"
            ></iframe>
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
                marginTop: '0.5rem',
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
                href="https://soundcloud.com/vaynex-92421161/step-by-step"
                title="Step by Step"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#cccccc', textDecoration: 'none' }}
              >
                Step by Step
              </a>
            </div>
          </div>

          {/* YouTube Embed */}
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden animate__animated animate__fadeInRight">
            <h3 className="text-xl font-semibold text-white mb-4 px-4 pt-4">
              🎬 Official Music Video: <span className="text-purple-400">"Thats the Way"</span>
            </h3>
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
