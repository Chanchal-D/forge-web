
import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const Clients: React.FC = () => {
  const clients = [
    {
      category: 'D2C & fast fashion brands',
      description: 'Rapid trend adaptation with just-in-time manufacturing.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7"></path>
          <path d="m19 19-7-7 7-7"></path>
        </svg>
      )
    },
    {
      category: 'Retailers & boutiques',
      description: 'Flexible restocking that responds to real-time demand.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9"></path>
          <path d="M12 3v6"></path>
        </svg>
      )
    },
    {
      category: 'Emerging labels',
      description: 'Low MOQs without compromising on speed or quality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      text: "Forge has completely transformed our inventory management. We've reduced overstock by 40% while maintaining 99% product availability.",
      author: "Sarah J.",
      company: "Fashion Forward Co.",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      text: "The ability to order small batches has completely changed our approach to seasonal collections. We can now test new designs without the financial risk.",
      author: "Michael T.",
      company: "Urban Thread Apparel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section id="clients" className="py-20 md:py-32 bg-forge-50">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block mb-4 py-1 px-3 bg-forge-100 text-forge-800 rounded-md text-sm font-medium">
              Who we work with
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Solutions for all fashion brands
            </h2>
            <p className="text-lg text-forge-700">
              From established labels to emerging designers, our platform scales to meet your needs
            </p>
          </div>
        </RevealOnScroll>
        
        {/* Client categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {clients.map((client, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all h-full border border-forge-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-forge-100 text-forge-800 mb-6">
                  {client.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{client.category}</h3>
                <p className="text-forge-600">{client.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* Testimonials */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold">What our clients say</h3>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={index * 150}>
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-forge-100 relative">
                <div className="absolute -top-3 -left-3 text-forge-200 w-10 h-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M11.9917 17.7194C11.9917 17.8894 11.9157 18.0486 11.7805 18.1614C11.6453 18.2743 11.464 18.3333 11.2756 18.3333H7.04556C6.85725 18.3333 6.67587 18.2743 6.54068 18.1614C6.40548 18.0486 6.3295 17.8894 6.3295 17.7194V13.8889C6.3295 12.8578 6.7742 11.8693 7.56618 11.1525C8.35815 10.4358 9.45201 10 10.598 10V8.88889C10.598 8.6529 10.7217 8.42669 10.9419 8.26035C11.162 8.09401 11.461 8 11.7734 8C12.0858 8 12.3848 8.09401 12.605 8.26035C12.8251 8.42669 12.9488 8.6529 12.9488 8.88889V13.8889C12.9488 14.1249 12.8251 14.3511 12.605 14.5174C12.3848 14.6838 12.0858 14.7778 11.7734 14.7778H9.42332C9.42332 15.0138 9.54702 15.24 9.76717 15.4064C9.98733 15.5727 10.2863 15.6667 10.5988 15.6667H11.2756C11.464 15.6667 11.6453 15.7257 11.7805 15.8386C11.9157 15.9514 11.9917 16.1106 11.9917 16.2806V17.7194ZM19.1316 17.7194C19.1316 17.8894 19.0556 18.0486 18.9204 18.1614C18.7852 18.2743 18.6039 18.3333 18.4155 18.3333H14.1855C13.9972 18.3333 13.8158 18.2743 13.6806 18.1614C13.5454 18.0486 13.4694 17.8894 13.4694 17.7194V13.8889C13.4694 12.8578 13.9141 11.8693 14.7061 11.1525C15.498 10.4358 16.5919 10 17.7379 10V8.88889C17.7379 8.6529 17.8616 8.42669 18.0818 8.26035C18.3019 8.09401 18.6009 8 18.9133 8C19.2257 8 19.5247 8.09401 19.7449 8.26035C19.9651 8.42669 20.0887 8.6529 20.0887 8.88889V13.8889C20.0887 14.1249 19.9651 14.3511 19.7449 14.5174C19.5247 14.6838 19.2257 14.7778 18.9133 14.7778H16.5633C16.5633 15.0138 16.687 15.24 16.9071 15.4064C17.1273 15.5727 17.4262 15.6667 17.7387 15.6667H18.4155C18.6039 15.6667 18.7852 15.7257 18.9204 15.8386C19.0556 15.9514 19.1316 16.1106 19.1316 16.2806V17.7194Z"/>
                  </svg>
                </div>
                <blockquote className="text-lg text-forge-700 mb-6 pt-5">
                  {testimonial.text}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-forge-600 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* Logos */}
        <RevealOnScroll>
          <div className="mt-24 text-center">
            <div className="mb-8 text-sm text-forge-500 font-medium uppercase tracking-wider">
              Early adopters & pilot partners
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 w-auto flex items-center">
                  <div className="bg-forge-400 h-3 w-24 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Clients;
