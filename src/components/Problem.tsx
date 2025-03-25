
import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-20">
            The problem & solution
          </h2>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-12 lg:gap-24">
          {/* The Problem */}
          <div className="relative">
            <RevealOnScroll>
              <div className="inline-block mb-5 py-1 px-3 bg-red-50 text-red-600 rounded-md text-sm font-medium">
                The problem
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Current manufacturing forces fashion brands to predict demand months in advance
              </h3>
              
              <div className="space-y-6 text-forge-700">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">Overproduction & dead stock</h4>
                    <p>Approximately 15% of production goes unsold, leading to waste and financial loss.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">Stockouts & missed trends</h4>
                    <p>Long lead times mean brands can't quickly capitalize on sudden market trends.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">Rigid MOQs</h4>
                    <p>Traditional factories force brands to commit to large minimum order quantities.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Forge's Solution */}
          <div className="relative">
            <RevealOnScroll delay={200}>
              <div className="inline-block mb-5 py-1 px-3 bg-green-50 text-green-600 rounded-md text-sm font-medium">
                Forge's solution
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
                A technology-driven platform for responsive, on-demand production
              </h3>
              
              <div className="space-y-6 text-forge-700">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">Micro-factories, not mega-factories</h4>
                    <p>A network of local vendors fulfilling small-batch orders in less than 10 days.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">AI-powered inventory optimization</h4>
                    <p>Uses real-time sales data to determine optimal reorder quantities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forge-900 mb-1">Dynamic order routing</h4>
                    <p>Large orders are split across multiple factories for faster turnaround & efficiency.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
