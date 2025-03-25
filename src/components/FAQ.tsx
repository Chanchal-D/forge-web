
import React, { useState } from 'react';
import RevealOnScroll from './ui/RevealOnScroll';
import { cn } from '@/lib/utils';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-forge-100">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <span className={cn(
          "ml-6 flex-shrink-0 transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      
      <div 
        className={cn(
          "transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-forge-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What's the minimum order quantity (MOQ)?",
      answer: "As low as 30-50 units per SKU, depending on complexity. Our platform is specifically designed to enable small-batch production that traditional factories would typically reject."
    },
    {
      question: "How fast can orders be fulfilled?",
      answer: "Under 10 days, compared to traditional 45-60 day cycles. Our network of micro-factories and optimized production pipeline allows for significantly faster turnaround times."
    },
    {
      question: "What types of apparel can be manufactured?",
      answer: "We currently support t-shirts, hoodies, dresses, pants, skirts, and basic outerwear. We're continuously expanding our capabilities to include more complex garments."
    },
    {
      question: "Do you handle the shipping logistics?",
      answer: "Yes, we take care of all logistics from production to delivery. Our platform provides real-time tracking at every stage of the process."
    },
    {
      question: "How does pricing compare to traditional manufacturing?",
      answer: "While per-unit costs may be marginally higher, the overall economics are far better when considering reduced waste, no deadstock, and the ability to respond to demand in real-time. Many clients see overall cost savings within the first few months."
    },
    {
      question: "Where are your factories located?",
      answer: "We have a distributed network of micro-factories across North America and Europe, with expansion plans for Asia in the near future. This regional approach allows for faster shipping and reduced carbon footprint."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4 py-1 px-3 bg-forge-100 text-forge-800 rounded-md text-sm font-medium">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-forge-700">
              Everything you need to know about our on-demand manufacturing platform
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll stagger>
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </RevealOnScroll>
          
          <RevealOnScroll>
            <div className="mt-12 text-center">
              <p className="text-forge-600 mb-4">Have more questions? We're here to help.</p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-forge-800 hover:text-forge-950 font-medium"
              >
                Contact our team
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
      </div>
    </section>
  );
};

export default FAQ;
