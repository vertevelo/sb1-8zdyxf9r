import React from 'react';
import { Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            <Music size={24} />
          </a>
        </div>
        <div className="text-center text-white/60">
          <p className="mb-4">© 2025 Vaynex. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}