import React, { ReactNode } from 'react';
import { NavBar } from '../NavBar'; 
import { Footer } from '../Footer'; 
// import { LasgStrip } from '../LasgStrip'; // Assuming this goes at the very top
import './style.css';

interface LayoutProps {
  children: ReactNode;
  /** Optional: Toggle to turn off margins for specific pages (like full-screen maps) */
  fullWidth?: boolean; 
}

export const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <div className="app-layout">
      {/* Global Elements typically go outside the main content flow */}
      <NavBar />

      {/* The Main Content Area */}

      {/* We use semantic HTML <main> for accessibility */}
      <main className={fullWidth ? 'main-content full' : 'main-content constrained'}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
