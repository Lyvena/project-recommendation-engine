import React from 'react';
import { ProjectList } from '../components/ProjectList';
import { RecommendationEngine } from '../components/RecommendationEngine';
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Project Recommendation Engine</h1>
        <RecommendationEngine />
        <ProjectList />
      </main>
    </div>
  );
};

export default Index;