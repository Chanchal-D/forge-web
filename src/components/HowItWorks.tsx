
import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Sales data analyzed',
      description: 'AI scans CRM, e-commerce, and POS data to identify trends and needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Production order triggered',
      description: 'Only the required SKUs are reordered, optimizing for demand and efficiency.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M7 7h.01"></path>
          <path d="M17 7h.01"></path>
          <path d="M7 17h.01"></path>
          <path d="M17 17h.01"></path>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Factory load balancing',
      description: 'The system matches orders to available micro-factories for optimal production.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Fast turnaround & delivery',
      description: 'Apparel is produced and shipped in under 10 days, beating industry standards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8"></path>
          <path d="m9 12 3-4 3 4"></path>
          <path d="M5 3a18.36 18.36 0 0 0 14 0"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-forge-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4 py-1 px-3 bg-forge-100 text-forge-800 rounded-md text-sm font-medium">
              Process
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How it works
            </h2>
            <p className="text-lg text-forge-700">
              A step-by-step visual representation of the Forge production cycle
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 100}>
              <div className="bg-white rounded-2xl shadow-sm p-8 relative h-full hover:shadow-md transition-all duration-300 group">
                <div className="absolute top-6 right-6 text-forge-200 group-hover:text-forge-300 transition-colors">
                  <div className="w-12 h-12">{step.icon}</div>
                </div>
                <div className="text-sm font-semibold text-forge-400 mb-3">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-forge-600">{step.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll>
          <div className="mt-16 text-center">
            <a 
              href="#features" 
              className="inline-flex items-center text-forge-800 hover:text-forge-950 font-medium"
            >
              See the features that power our platform
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default HowItWorks;
