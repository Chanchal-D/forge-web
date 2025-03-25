
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-lg font-semibold tracking-tight">FORGE</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['How it works', 'Features', 'Clients', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-forge-900 hover:text-black transition-colors relative better-hover"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-forge-950 hover:bg-black text-white text-sm font-medium py-2 px-5 rounded-full transition-colors"
          >
            Book a demo
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forge-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col pt-20 px-6 md:hidden transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          {['How it works', 'Features', 'Clients', 'FAQ'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-medium text-forge-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-forge-950 hover:bg-black text-white text-base font-medium py-3 px-6 rounded-full mt-4 w-full text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
