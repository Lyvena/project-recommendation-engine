import React from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/settings">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/auth">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};