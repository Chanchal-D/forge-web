
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Clients from '@/components/Clients';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll progress indicator
  useEffect(() => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;
      
      const progressIndicator = progressBar.querySelector('::after') as HTMLElement;
      if (progressIndicator) {
        progressIndicator.style.width = `${scrollPercentage}%`;
      } else {
        progressBar.style.setProperty('--progress', `${scrollPercentage}%`);
        progressBar.setAttribute('style', `--progress: ${scrollPercentage}%`);
        progressBar.style.background = `linear-gradient(to right, #000 ${scrollPercentage}%, rgba(0,0,0,0.1) 0%)`;
      }
    };
    
    window.addEventListener('scroll', updateProgressBar);
    
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      if (document.body.contains(progressBar)) {
        document.body.removeChild(progressBar);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Clients />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
