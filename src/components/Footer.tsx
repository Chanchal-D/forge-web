
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-forge-100 py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl font-semibold tracking-tight">FORGE</span>
            </a>
            <p className="text-forge-600 mb-6 max-w-md">
              Forge is redefining fashion manufacturing—helping brands produce what sells, when it sells.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'linkedin', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-forge-50 flex items-center justify-center text-forge-600 hover:bg-forge-100 hover:text-forge-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {platform === 'twitter' && (
                      <>
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </>
                    )}
                    {platform === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                    {platform === 'instagram' && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forge-800 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Home', 'How it works', 'Features', 'Clients', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item === 'Home' ? '' : item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-forge-600 hover:text-forge-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forge-800 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {['Privacy policy', 'Terms of service', 'Cookies', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-forge-600 hover:text-forge-900 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forge-100 pt-8 flex flex-col md:flex-row justify-between items-center text-forge-500 text-sm">
          <div>
            &copy; {currentYear} Forge manufacturing. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Made with precision and care.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
