import React from "react";
import Image from 'next/image'
const Footer = () => {
    return (
      <footer className="bg-baseGreen text-white">
    <div className="container mx-auto px-4 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-between">
          {/* Logo - Always centered on mobile, left-aligned on desktop */}
          <div className="flex items-center gap-2">
            <div><Image
            width={50}
            height={50}
              src="/logo.png" 
              alt="Adelaar Transport Logo" 
              className="w-10 h-auto sm:w-12" 
            /></div>
            <span className="text-xl sm:text-2xl font-bold">Adelaar Transport</span>
          </div>

          {/* Track Your Freight - Full width on mobile, auto width on desktop */}
          <div className="flex items-center gap-3 border-l-0 lg:border-l-2 border-orange lg:pl-4 w-full lg:w-auto">
            <div className="text-center lg:text-left w-full lg:w-auto">
              <h3 className="font-medium text-base sm:text-lg">Volg uw vracht</h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Volg uw goederen met Adelaar Transport vrachtvervoer
              </p>
            </div>
          </div>

          {/* Email Subscription - Full width on mobile, auto width on desktop */}
          <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
            <div className="relative flex-grow sm:flex-grow-0">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full sm:w-64 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-white border border-teal-700 
                         text-sm sm:text-base focus:outline-none focus:border-coral-500 transition-colors"
              />
            </div>
            <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-coral-500 rounded-lg hover:bg-coral-600 
                           transition-colors text-sm sm:text-base whitespace-nowrap">
              Abonneren
            </button>
          </div>
        </div>
      </div>
        {/* Top Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Get best rate card */}
            <div className="bg-coral-500 rounded-xl p-6 max-w-sm xl:w-[25%]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg">
                  <svg className="w-6 h-6 text-coral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">Krijg het beste tarief voor uw vrachttransport</h3>
              </div>
              <p className="text-white/80 text-sm mb-4">24/7 klantenondersteuning en deskundig advies. Tot 70% besparing op verzendkosten bij alle grote vervoerders</p>
              <button className="bg-white text-coral-500 text-center px-4 py-2 rounded-lg w-full flex items-center justify-between hover:bg-gray-100 transition-colors">
              Krijg het beste tarief
              <div className="flex items-center justify-center bg-lightGreen1 w-8 h-8 rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-green3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
              </button>
            </div>
  
            {/* Navigation Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
              {/* Industry Served */}
              <div>
                <h4 className="font-semibold mb-4">Bedrijven die we bedienen</h4>
                <ul className="space-y-2">
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Diepvriesvoedsel</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Automobiel</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Machines</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Export en Import</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Cargovracht</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Opslag</a></li>
                </ul>
              </div>
  
              {/* Company Info */}
              <div>
                <h4 className="font-semibold mb-4">Bedrijfsinformatie</h4>
                <ul className="space-y-2">
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Over Ons</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Our Expertise</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Laatste Nieuws</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Vervoerders</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Algemene Voorwaarden</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Gevalstudies</a></li>
                </ul>
              </div>
  
              {/* Our Services */}
              <div>
                <h4 className="font-semibold mb-4">Onze Diensten</h4>
                <ul className="space-y-2">
                <li className="group"><a href="#" className="text-white transition-colors group-hover:text-orange"><span className="text-lightGreen2 text-xl transition-colors group-hover:text-orange">&#8594;</span> Minder dan Vrachtwagenlading</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Spoorvrachtvervoer</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Hot Shot Vervoer</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Minder-dan-Vrachtwagenlading</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Intermodale Dienst</a></li>
                  <li className="group"><a href="#" className="text-white group-hover:text-orange transition-colors"><span className="text-lightGreen2 text-xl group-hover:text-orange">&#8594;</span> Containervracht</a></li>
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
              <Image width={56} height={56} src="/mail.svg" alt="" className="w-7 h-7 lg:w-14 lg:h-14"/>
                <div>
                  <p className="text-coral-500 text-sm">E-MAIL ONS</p>
                  <p className="text-white">Service@Adelaar Transportcare.Com</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3">
              <Image width={56} height={56} src="/contact.svg" alt="" className="w-7 h-7 lg:w-14 lg:h-14"/>
                <div>
                  <p className="text-coral-500 text-sm">STEUN 24/7</p>
                  <p className="text-white">+1 23334 5678 899</p>
                </div>
              </div>
  
              <div className="flex items-center gap-3">
              <Image width={56} height={56} src="/map.svg" alt="" className="w-7 h-7 lg:w-14 lg:h-14"/>
                <div>
                  <p className="text-coral-500 text-sm">Adelaar Transport HOOFDKWARTIER</p>
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
                © 2023 <span className="text-coral-500">Adelaar Transport</span> transport en Logistiek / Alle rechten voorbehouden
              </p>
              <div className="flex items-center gap-2 sm:gap-4 text-gray-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                <span>|</span>
                <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;