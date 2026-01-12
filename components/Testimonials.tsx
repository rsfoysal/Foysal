import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-darker relative border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <i className="fa-solid fa-quote-left text-6xl text-brand-surface absolute -top-10 -left-10 md:-left-20"></i>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1 text-brand-accent">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed italic mb-8">
              "I would encourage any BMW owner to trust AutoTrend. They are reliable, dependable, and trustworthy."
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-brand-accent mb-4"></div>
              <cite className="not-italic font-bold text-white text-lg tracking-wide">
                Ed Ryder & Mike Piela
              </cite>
              <span className="text-gray-500 text-sm mt-1">Loyal Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;