import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Decentralized Identity Solution',
    description: 'A blockchain-based identity management system for secure and private authentication.',
    tags: ['Blockchain', 'Identity', 'Privacy'],
    fundingGoal: 50000,
    currentFunding: 35000,
  },
  {
    id: 2,
    title: 'Community-Driven Microfinance Platform',
    description: 'Peer-to-peer lending platform to support small businesses and entrepreneurs in developing countries.',
    tags: ['Fintech', 'Social Impact', 'Microfinance'],
    fundingGoal: 75000,
    currentFunding: 60000,
  },
  // Add more sample projects here
];

export const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Funding: ${project.currentFunding} / ${project.fundingGoal}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};