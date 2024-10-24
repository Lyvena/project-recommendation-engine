import React from 'react';
import { Button } from "@/components/ui/button";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Rocket, Lightbulb, Settings, Info } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-bounce">
              <Rocket className="h-16 w-16 mx-auto text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Welcome to PotLock</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover and support innovative projects that align with your interests and values.
              Our AI-powered recommendation engine helps you find the perfect projects to engage with.
            </p>
            <div className="space-x-4 mb-16">
              <Button asChild size="lg">
                <Link to="/auth">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">Browse Projects</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Lightbulb className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-gray-600">
                  Our AI analyzes your interests and preferences to suggest the most relevant projects.
                </p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Settings className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Customizable Experience</h3>
                <p className="text-gray-600">
                  Configure AI settings and personalize your project discovery journey.
                </p>
              </div>
              <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
                <Info className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Detailed Insights</h3>
                <p className="text-gray-600">
                  Get comprehensive analysis and insights about each project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;