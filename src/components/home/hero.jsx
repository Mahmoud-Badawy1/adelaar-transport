"use client"; 
import React from 'react';

const Hero = () => {
  const handleNavigation = () => {
    window.location.href = '/contact';
  };
  return (
    <section className="bg-green3 text-white relative h-screen flex items-center w-full">
      <div className='flex-row flex items-center gap-3 w-full '>
      {/* Left Decorative Element */}
      <div className=" left-10 mx-auto top-1/2 transform -translate-y-1/2 space-y-4 items-center justify-center sm:flex flex-col hidden">
        {/* Orange Circle with Dot */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute w-10 h-10 border-2 border-orange rounded-full"></div>
          <div className="w-2 h-2 bg-orange rounded-full"></div>
        </div>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
        <span className="block w-2 h-2 bg-white rounded-full"></span>
      </div>

      {/* Hero Content */}
      <div className="container  flex flex-col items-start justify-center px-4">
        <p className="text-gray-300 text-sm uppercase mb-4">
        Adelaar Transport Transportbedrijf NV
        </p>
        <h1 className="sm:text-6xl text-4xl font-bold leading-tight mb-6">
        Moderne logistiek <br /> Transport
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl">
        Breng uw bedrijf naar het volgende niveau met de nieuwe bedrijfsmanagementtools van Adelaar Transport. Adelaar Transport zal een nieuwe horizon voor ons openen.
        </p>
        <button  onClick={handleNavigation} className="bg-orange px-6 py-3 rounded-md hover:bg-orange-600 transition flex items-center space-x-3 text-white text-lg font-medium">
  <span>Neem contact op met Adelaar Transport</span>
  <div className="flex items-center justify-center bg-white w-8 h-8 rounded-md">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-orange"
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
      </div>
    </section>
  );
};

export default Hero;
