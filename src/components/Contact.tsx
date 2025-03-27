import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto" name="contact" netlify>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}