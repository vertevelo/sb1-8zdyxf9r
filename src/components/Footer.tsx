import React from 'react';
import { Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/@vaynix-061" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="https://on.soundcloud.com/MV3ujo8AhBNPdZrn7" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Music className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© 2025 Vaynex. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-500 transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}