import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
          alt="BMW M Series Dark" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-brand-accent text-xs font-bold uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            Since 1998
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            Dealer Quality Service. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-300">
              Honest Pricing.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Toronto's Premier Independent BMW Specialists. We deliver factory-level precision without the dealership premium.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] text-center flex items-center justify-center gap-2"
            >
              Book Service <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a 
              href="#services" 
              className="border border-gray-600 hover:border-white text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all text-center"
            >
              View Specials
            </a>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-800 mt-12">
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-calendar-check text-brand-accent text-2xl"></i>
              <div>
                <p className="text-2xl font-bold text-white">36+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-users-gear text-brand-accent text-2xl"></i>
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Licensed Techs</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fa-solid fa-star text-brand-accent text-2xl"></i>
              <div>
                <p className="text-2xl font-bold text-white">1,500+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;