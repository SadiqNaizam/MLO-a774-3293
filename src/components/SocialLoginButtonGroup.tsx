import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Facebook, Chrome } from 'lucide-react'; // Using Chrome as a proxy for Google icon

const SocialLoginButtonGroup: React.FC = () => {
  console.log('SocialLoginButtonGroup loaded');

  const handleSocialLogin = (provider: string) => {
    // Placeholder for actual social login logic
    console.log(`Attempting to sign in with ${provider}...`);
    // In a real application, this would trigger the OAuth flow for the respective provider.
    // For example: window.location.href = `/auth/${provider.toLowerCase()}`;
  };

  return (
    <div className="flex flex-col w-full space-y-3">
      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => handleSocialLogin('Google')}
      >
        <Chrome className="mr-2 h-4 w-4" />
        Sign in with Google
      </Button>
      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => handleSocialLogin('GitHub')}
      >
        <Github className="mr-2 h-4 w-4" />
        Sign in with GitHub
      </Button>
      <Button 
        variant="outline" 
        className="w-full" 
        onClick={() => handleSocialLogin('Facebook')}
      >
        <Facebook className="mr-2 h-4 w-4" />
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default SocialLoginButtonGroup;