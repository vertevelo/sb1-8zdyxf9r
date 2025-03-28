import React from 'react';

export default function Contact() {
  return (
    <section
      className="py-20 bg-black/90 relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(./images/about-bg.png)',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get in Touch
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="max-w-lg mx-auto"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
