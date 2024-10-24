import React from 'react';
import { ProjectList } from '../components/ProjectList';
import { RecommendationEngine } from '../components/RecommendationEngine';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Project Dashboard</h1>
        <RecommendationEngine />
        <ProjectList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;