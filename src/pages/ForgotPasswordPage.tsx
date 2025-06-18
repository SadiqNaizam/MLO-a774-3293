import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormCard from '@/components/AuthFormCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Mail, TriangleAlert, CheckCircle2 } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log('ForgotPasswordPage loaded');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    // Simulate API call
    console.log('Submitting forgot password request for email:', email);
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example response
    if (email === 'test@example.com') {
      setMessage({ type: 'success', text: 'If an account exists for this email, a password reset link has been sent. Please check your inbox.' });
    } else if (email === "error@example.com") {
       setMessage({ type: 'error', text: 'Failed to send reset link. Please try again later.' });
    }
     else {
      // Generic success message to prevent email enumeration
      setMessage({ type: 'success', text: 'If an account exists for this email, a password reset link has been sent. Please check your inbox.' });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-6 sm:p-8">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No worries! Enter your email address below and we'll send you a link to reset your password."
          footerContent={
            <p className="text-sm text-muted-foreground">
              Remember your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Login here
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {message && (
              <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className={message.type === 'success' ? 'bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-700' : ''}>
                {message.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <TriangleAlert className="h-4 w-4" />}
                <AlertTitle>{message.type === 'success' ? 'Email Sent' : 'Error'}</AlertTitle>
                <AlertDescription>{message.text}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Password Reset Link'}
            </Button>
          </form>
        </AuthFormCard>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;