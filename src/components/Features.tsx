
import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const Features: React.FC = () => {
  const features = [
    {
      title: 'AI-driven demand forecasting',
      description: 'Reduce overproduction by making data-backed inventory decisions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20v-6M6 20V10M18 20V4"></path>
        </svg>
      )
    },
    {
      title: 'Flexible MOQs',
      description: 'Order as little as 30-50 units per SKU, depending on complexity.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
          <path d="M16.5 9.4 7.55 4.24"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
          <circle cx="18.5" cy="15.5" r="2.5"></circle>
          <path d="M20.27 17.27 22 19"></path>
        </svg>
      )
    },
    {
      title: 'Multi-factory load balancing',
      description: 'Orders are intelligently split to reduce bottlenecks and optimize production.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18"></path>
          <rect width="6" height="6" x="15" y="15"></rect>
          <rect width="6" height="6" x="3" y="15"></rect>
          <rect width="6" height="6" x="15" y="3"></rect>
          <rect width="6" height="6" x="3" y="3"></rect>
        </svg>
      )
    },
    {
      title: 'Real-time tracking',
      description: 'Full visibility over production & delivery timelines from start to finish.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: 'Faster restocks',
      description: 'No more waiting 60+ days for bulk manufacturing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 5 4-4 4 4"></path>
          <path d="M12 1v10"></path>
          <path d="M6 9H1v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9h-5"></path>
        </svg>
      )
    },
    {
      title: 'Lower risk',
      description: 'Produce only what sells, cutting unsold inventory.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: 'Cost-effective',
      description: 'Optimized production eliminates inefficiencies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4 py-1 px-3 bg-forge-100 text-forge-800 rounded-md text-sm font-medium">
              Features & benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Powered by innovation
            </h2>
            <p className="text-lg text-forge-700">
              Our platform combines cutting-edge technology with an optimized manufacturing network
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Features */}
        <div className="mb-24">
          <RevealOnScroll>
            <h3 className="text-xl font-semibold mb-8 text-center">Key features</h3>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="bg-forge-50 rounded-xl p-8 h-full hover:bg-forge-100 transition-colors border border-transparent hover:border-forge-200">
                  <div className="text-forge-800 mb-4 w-12 h-12">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-forge-600">{feature.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <RevealOnScroll>
          <div className="relative">
            <div className="absolute inset-0 bg-forge-950 rounded-3xl transform -skew-y-1 opacity-5 -z-10"></div>
            <div className="rounded-3xl bg-gradient-to-br from-forge-100 to-forge-50 border border-forge-200 p-8 md:p-12">
              <h3 className="text-xl font-semibold mb-8 text-center">Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white text-forge-800 shadow-sm">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                      <p className="text-forge-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Features;
