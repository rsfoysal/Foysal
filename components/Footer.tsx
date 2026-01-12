import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-gray-800 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand & Info */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-accent rounded-sm flex items-center justify-center">
                <i className="fa-solid fa-gears text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                AUTO<span className="text-brand-accent">TREND</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Toronto's trusted independent BMW specialists since 1998. Professional service, honest pricing, and dealership quality without the dealership costs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-accent transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-accent transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-brand-accent transition-colors">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-brand-accent pl-3">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-brand-accent mt-1"></i>
                <span className="text-gray-400">
                  1203 Broadview Ave.<br />
                  Toronto, Ontario M4K 2T1
                </span>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-brand-accent"></i>
                <a href="tel:4166962277" className="text-gray-400 hover:text-white transition-colors">
                  (416) 696-2277
                </a>
              </li>
              <li className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-brand-accent"></i>
                <a href="mailto:autotrendtoronto@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  autotrendtoronto@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-brand-accent pl-3">Business Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8:00am - 5:30pm</span>
              </li>
              <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-red-400">Closed</span>
              </li>
              <li className="flex justify-between text-gray-400 border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map / Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} AutoTrend. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;