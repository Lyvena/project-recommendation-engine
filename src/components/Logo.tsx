import React from 'react';
import { Rocket } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Rocket className="h-6 w-6 text-primary" />
      <span className="text-2xl font-bold text-primary">PotLock</span>
    </div>
  );
};