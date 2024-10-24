import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-lg">
              <Mail className="h-6 w-6" />
              <a href="mailto:info@lyvena.xyz" className="text-primary hover:underline">
                info@lyvena.xyz
              </a>
            </div>
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have questions about our platform,
              need support with your projects, or want to explore collaboration opportunities,
              please don't hesitate to reach out.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;