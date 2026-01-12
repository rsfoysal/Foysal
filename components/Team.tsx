import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -right-20 top-20 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2">The Experts</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Meet The Team</h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Member 1 */}
          <div className="group relative overflow-hidden rounded-lg bg-brand-surface border border-gray-800 hover:border-brand-accent transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=80&w=2070&auto=format&fit=crop" 
                alt="Don Katsumi" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="p-8 relative">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 mr-8 bg-brand-accent text-white w-12 h-12 flex items-center justify-center rounded-sm shadow-lg">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">Don Katsumi</h4>
              <p className="text-brand-accent font-medium text-sm uppercase tracking-wider mb-4">Owner & Service Manager</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                With decades of experience managing high-volume service centers, Don ensures every vehicle receives dealer-quality attention with the personal care of an independent shop.
              </p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="group relative overflow-hidden rounded-lg bg-brand-surface border border-gray-800 hover:border-brand-accent transition-all duration-300">
            <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1623126742289-4b6279f7535b?q=80&w=2070&auto=format&fit=crop" 
                alt="Rick Tan" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
            </div>
            <div className="p-8 relative">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 mr-8 bg-brand-accent text-white w-12 h-12 flex items-center justify-center rounded-sm shadow-lg">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <h4 className="text-2xl font-bold text-white mb-1">Rick Tan</h4>
              <p className="text-brand-accent font-medium text-sm uppercase tracking-wider mb-4">Master Technician</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                A legend in the bay, Rick has been mastering automotive mechanics since 1967. His diagnostic intuition and mechanical precision are unmatched in Toronto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;