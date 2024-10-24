import React from 'react';
import { Button } from "@/components/ui/button";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Welcome to PotLock</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover and support innovative projects that align with your interests and values.
              Our AI-powered recommendation engine helps you find the perfect projects to engage with.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;