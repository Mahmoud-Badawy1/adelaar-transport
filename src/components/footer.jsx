import React from "react";
const Footer = () => {
    return (
      <footer className="bg-baseGreen text-white">
          {/* Upper Container */}
      <div className="container mx-auto px-4 py-8 border-b border-teal-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logisco Logo" className="w-12 h-auto" />
            <span className="text-2xl font-bold">Logisco</span>
          </div>

          {/* Track Your Freight */}
          <div className="flex items-center gap-3 border-l-2 border-orange pl-4">
            <div>
              <h3 className="font-medium">Track Your freight</h3>
              <p className="text-sm text-gray-300">Track your Goods with Logisco trucking</p>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="flex gap-2">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-64 px-4 py-2.5 rounded-lg bg-white border border-teal-700 focus:outline-none focus:border-coral-500 transition-colors"
              />
            </div>
            <button className="px-6 py-2.5 bg-coral-500 rounded-lg hover:bg-coral-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
        {/* Top Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Get best rate card */}
            <div className="bg-coral-500 rounded-xl p-6 max-w-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <svg className="w-6 h-6 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Get best rate for your freight transport</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">24/7 customer support and expert advice. Up to 70% savings on shipp costs with all major carriers</p>
              <button className="bg-white text-coral-500 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                Get the best rate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
  
            {/* Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              {/* Industry Served */}
              <div>
                <h4 className="font-semibold mb-4">Industry Served</h4>
                <ul className="space-y-2">
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Frozen Food</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Automobile</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Machineries</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Export Import</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Cargo Freight</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Warehousing</a></li>
                </ul>
              </div>
  
              {/* Company Info */}
              <div>
                <h4 className="font-semibold mb-4">Company Info</h4>
                <ul className="space-y-2">
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> About Us</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Our Expertise</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Latest News</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Transporters</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Terms & Condition</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Case Studies</a></li>
                </ul>
              </div>
  
              {/* Our Services */}
              <div>
                <h4 className="font-semibold mb-4">Our Services</h4>
                <ul className="space-y-2">
                <li className="group"><a href="#" className="text-white transition-colors group-hover:text-orange"><span className="text-lightGreen2 text-xl transition-colors group-hover:text-orange">&#8594;</span> Less Than Truckload</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Rail Freight Shipping</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Hot Shot Trucking</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Less-than-Truckload</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Intermodal service</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Container Freight</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Contact Info Bar */}
        <div className="border-t border-teal-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-coral-500/10">
                  <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-coral-500 text-sm">E-MAIL US</p>
                  <p className="text-white">Service@Logiscocare.Com</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-coral-500/10">
                  <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-coral-500 text-sm">SUPPORT 24/7</p>
                  <p className="text-white">+1 23334 5678 899</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-coral-500/10">
                  <svg className="w-5 h-5 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-coral-500 text-sm">LOGISCO HEADQUARTER</p>
                  <p className="text-white">116th Ave, WA 98058-5055,USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-teal-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2023 <span className="text-coral-500">Logisco</span> transportation & logistics / All rights reserved
              </p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Site map</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;