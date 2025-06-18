import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer component loaded');

  return (
    <footer className="bg-background border-t border-border/40 mt-auto">
      <div className="container mx-auto py-6 px-4 md:px-6 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Your Application. All rights reserved.</p>
          <nav className="flex gap-x-4 gap-y-2 flex-wrap justify-center md:justify-end">
            <Link
              to="/terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;