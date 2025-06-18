import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react'; // Using Rocket as a placeholder logo

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors">
          <Rocket className="h-6 w-6 text-primary" />
          <span>AuthApp</span> {/* Placeholder App Name */}
        </Link>
        {/* Minimalistic header: No other navigation elements as per description for auth pages */}
      </div>
    </header>
  );
};

export default Header;