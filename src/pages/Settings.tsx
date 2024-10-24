import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = () => {
    localStorage.setItem('openai_api_key', apiKey);
    toast({
      title: "API Key Saved",
      description: "Your OpenAI API key has been saved successfully.",
    });
  };

  React.useEffect(() => {
    const savedKey = localStorage.getItem('openai_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-2">
              <SettingsIcon className="h-6 w-6" />
              <CardTitle className="text-3xl">Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">OpenAI API Configuration</h3>
              <p className="text-sm text-gray-600">
                Enter your OpenAI API key to enable AI features in the application.
                You can get your API key from the OpenAI dashboard.
              </p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter your OpenAI API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <Button onClick={handleSaveApiKey}>Save Key</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;