import React from 'react';
import { Copyright } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center text-sm text-gray-600">
          <Copyright className="h-4 w-4 mr-1" />
          <span>2024</span>
          <span className="mx-1">|</span>
          <a
            href="https://lyvena.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Lyvena.
          </a>
        </div>
      </div>
    </footer>
  );
};