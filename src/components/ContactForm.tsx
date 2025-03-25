
import React, { useState } from 'react';
import RevealOnScroll from './ui/RevealOnScroll';
import { cn } from '@/lib/utils';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    brandName: '',
    email: '',
    orderVolume: '',
    interest: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!formState.brandName || !formState.email || !formState.orderVolume || !formState.interest) {
      setError('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          brandName: '',
          email: '',
          orderVolume: '',
          interest: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 md:py-32 bg-forge-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 py-1 px-3 bg-white/10 text-white/90 rounded-md text-sm font-medium">
              Get started
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Join our pilot program
            </h2>
            <p className="text-lg text-white/80">
              Be among the first to experience on-demand, data-driven manufacturing
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-xl mx-auto">
          <RevealOnScroll>
            {isSubmitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Thank you!</h3>
                <p className="text-white/80">
                  We've received your information and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-panel-dark rounded-2xl p-8 md:p-10">
                {error && (
                  <div className="mb-6 py-3 px-4 rounded-md bg-red-500/20 text-red-200 text-sm">
                    {error}
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="brandName" className="block text-white/90 mb-2 text-sm font-medium">
                      Brand name
                    </label>
                    <input
                      type="text"
                      id="brandName"
                      name="brandName"
                      value={formState.brandName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="Your fashion brand"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/90 mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="you@yourbrand.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="orderVolume" className="block text-white/90 mb-2 text-sm font-medium">
                      Monthly order volume
                    </label>
                    <select
                      id="orderVolume"
                      name="orderVolume"
                      value={formState.orderVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    >
                      <option value="" disabled className="text-forge-800">Select order volume</option>
                      <option value="less-than-500" className="text-forge-800">Less than 500 units</option>
                      <option value="500-2000" className="text-forge-800">500 - 2,000 units</option>
                      <option value="2000-10000" className="text-forge-800">2,000 - 10,000 units</option>
                      <option value="more-than-10000" className="text-forge-800">More than 10,000 units</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="interest" className="block text-white/90 mb-2 text-sm font-medium">
                      Primary interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    >
                      <option value="" disabled className="text-forge-800">Select your interest</option>
                      <option value="small-batch" className="text-forge-800">Small-batch production</option>
                      <option value="inventory" className="text-forge-800">Inventory optimization</option>
                      <option value="vendor" className="text-forge-800">Vendor matching</option>
                      <option value="all" className="text-forge-800">All of the above</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full py-4 px-6 rounded-md text-center font-medium transition-all",
                      isSubmitting 
                        ? "bg-white/30 cursor-not-allowed" 
                        : "bg-white text-forge-950 hover:bg-white/90"
                    )}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <span className="loader border-forge-950 border-b-transparent"></span>
                        <span className="ml-2">Submitting...</span>
                      </span>
                    ) : (
                      "Join our pilot program"
                    )}
                  </button>
                </div>
              </form>
            )}
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="mt-8 text-center text-white/60 text-sm">
              By submitting this form, you agree to our <a href="#" className="underline hover:text-white">Privacy policy</a> and <a href="#" className="underline hover:text-white">Terms of service</a>.
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
