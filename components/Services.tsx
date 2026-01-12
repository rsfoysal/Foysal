import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-darker relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Premium BMW Services</h3>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-brand-surface p-8 rounded-lg border border-gray-800 hover:border-brand-accent transition-colors group">
            <div className="w-14 h-14 bg-brand-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
              <i className="fa-solid fa-oil-can text-2xl text-brand-accent group-hover:text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Regular Maintenance</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Comprehensive care using only manufacturer-approved parts. We strictly use 5W30 Synthetic Oil, premium filters, and OEM fluids to ensure longevity.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Full Synthetic Oil Changes</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Filter Replacements</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Fluid Top-ups</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-surface p-8 rounded-lg border border-gray-800 hover:border-brand-accent transition-colors group relative overflow-hidden">
             {/* Badge */}
             <div className="absolute top-4 right-4 bg-brand-accent text-white text-xs font-bold px-2 py-1 rounded">POPULAR</div>
            
            <div className="w-14 h-14 bg-brand-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
              <i className="fa-solid fa-laptop-code text-2xl text-brand-accent group-hover:text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Diagnostics & Coding</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Factory-level diagnostic tools to identify electronic faults accurately. We handle complex coding, module programming, and warning light troubleshooting.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Check Engine Lights</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Module Programming</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Electrical Systems</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-surface p-8 rounded-lg border border-gray-800 hover:border-brand-accent transition-colors group">
            <div className="w-14 h-14 bg-brand-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
              <i className="fa-solid fa-screwdriver-wrench text-2xl text-brand-accent group-hover:text-white"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Repairs & Performance</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              From brake systems to engine overhauls. Our licensed technicians handle major repairs with precision and care for your ultimate driving machine.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Brake Service</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Suspension & Steering</li>
              <li><i className="fa-solid fa-check text-brand-accent mr-2"></i>Engine Repair</li>
            </ul>
          </div>
        </div>

        {/* Pricing Table / Specials */}
        <div id="specials" className="max-w-4xl mx-auto bg-gradient-to-br from-brand-surface to-brand-black border border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <i className="fa-brands fa-bmw text-9xl"></i>
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-700 pb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Fall Service Specials</h3>
                <p className="text-gray-400">Includes comprehensive inspection & essential fluid top-ups.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-bold border border-green-500/20">
                  Limited Time Offer
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-black/50 p-6 rounded-lg border border-gray-700 hover:border-brand-accent transition-all text-center group">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">4-Cylinder Models</p>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">$260</div>
                <p className="text-xs text-gray-500">Parts & Labor Included</p>
              </div>

              <div className="bg-brand-black/50 p-6 rounded-lg border border-brand-accent/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] text-center transform scale-105">
                <p className="text-brand-accent text-sm uppercase tracking-wider mb-2 font-bold">6-Cylinder Models</p>
                <div className="text-4xl font-bold text-white mb-1">$275</div>
                <p className="text-xs text-gray-500">Most Popular</p>
              </div>

              <div className="bg-brand-black/50 p-6 rounded-lg border border-gray-700 hover:border-brand-accent transition-all text-center group">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">V8 / V12 Models</p>
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">$295</div>
                <p className="text-xs text-gray-500">Performance Care</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">* Taxes not included. Appointments required.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;