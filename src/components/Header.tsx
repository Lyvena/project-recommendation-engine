import React from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <nav className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/auth">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};