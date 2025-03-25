
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forge-50 to-white -z-10"></div>
      
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Pill badge */}
          <div 
            className={cn(
              "inline-block mb-6 py-1.5 px-4 bg-forge-100 rounded-full text-forge-800 text-xs font-medium opacity-0",
              isLoaded && "animate-fade-in"
            )}
          >
            AI-powered fashion manufacturing
          </div>
          
          {/* Headline */}
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight md:leading-tight lg:leading-tight mb-6 tracking-tight opacity-0",
              isLoaded && "animate-fade-in animation-delay-100"
            )}
          >
            <span className="block">On-demand, data-driven</span>
            <span className="block">manufacturing for fashion brands</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className={cn(
              "text-xl md:text-2xl text-forge-700 mb-10 max-w-3xl opacity-0",
              isLoaded && "animate-fade-in animation-delay-200"
            )}
          >
            Small-batch, just-in-time production powered by AI—cutting dead stock and long lead times.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 opacity-0",
              isLoaded && "animate-fade-in animation-delay-300"
            )}
          >
            <a 
              href="#contact" 
              className="bg-forge-950 hover:bg-black text-white font-medium py-4 px-8 rounded-full transition-colors text-center"
            >
              Book a demo
            </a>
            <a 
              href="#how-it-works" 
              className="bg-white border border-forge-200 hover:border-forge-300 text-forge-900 font-medium py-4 px-8 rounded-full transition-colors text-center"
            >
              Learn how it works
            </a>
          </div>
          
          {/* Arrow down */}
          <div 
            className={cn(
              "hidden md:flex justify-center mt-24 opacity-0",
              isLoaded && "animate-fade-in animation-delay-500"
            )}
          >
            <a 
              href="#problem" 
              className="text-forge-400 hover:text-forge-600 transition-colors micro-bounce inline-block"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
