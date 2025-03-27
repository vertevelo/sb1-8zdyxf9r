import React from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all"
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}