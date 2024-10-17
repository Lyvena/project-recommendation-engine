import React from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PotLock</h1>
        <nav>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">About</Button>
        </nav>
      </div>
    </header>
  );
};