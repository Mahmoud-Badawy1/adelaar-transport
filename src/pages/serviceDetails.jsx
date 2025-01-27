"use client";
import React from "react";
import Header from '../components/home/header';
import HeroService from '../components/Services/heroService';
import OneService from '../components/Services/oneService';
import Footer from '../components/footer';
import Image from 'next/image';
const ServiceDetails = () => {
  return (
    <section>
    <Header />
    <HeroService/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2">
       <OneService />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          {/* Related Services List */}
          <div className="bg-transparent p-4 mb-6">
          <div className="space-y-4">
  {[
    { service: "Wegvrachtvervoer", imgSrc: "/Delivery-Truck.svg" },
    { service: "Sea Freight Transportation", imgSrc: "/Ship-1.svg" },
    { service: "Air Freight Transportation", imgSrc: "/plane.svg" },
    { service: "Spoorvrachtvervoer", imgSrc: "/Train.svg" },
    { service: "LTL Vrachtvervoer", imgSrc: "/Pickup-Truck.svg" },
    { service: "Warehousing Services", imgSrc: "/Cart1.svg" },
  ].map(({ service, imgSrc }, index) => (
    <div
      key={index}
      className="flex items-center justify-between p-2 hover:bg-orange rounded-lg cursor-pointer bg-white shadow-custom py-3 px-4"  
    >
      <div className="flex items-center gap-3">
        <Image width={24} height={24} src={imgSrc} alt={service} className="w-6 h-6" />
        <span>{service}</span>
      </div>
      <svg
        className="w-4 h-4 text-gray-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9 18l6-6-6-6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  ))}
</div>
          </div>

          {/* Contact Box */}
          <div className="relative w-full h-[39.856875rem] aspect-[4/5] rounded-lg overflow-hidden">
      {/* Background with curve */}
      <div className="absolute inset-0">
        {/* Gray background */}
        <div className="absolute inset-0 bg-gray-300"></div>
        
        {/* Curved overlay */}
        <Image
        width={420}
        height={637}
    src="/Union.svg"
    alt="Decorative curve"
    className="absolute bottom-0 left-0 w-full"
  />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-1/2 w-full px-11 p-6 text-white -translate-x-1/2">
        <h2 className="text-xl font-semibold mb-6 text-center">
        Krijg de beste transport
          <br />
          Diensten
        </h2>

        <div className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-lg text-center border-r-4 border-orange">
          <div className="bg-orange p-2 rounded-full" style={{ marginLeft: "-2rem" }}>
            <svg 
              className="w-6 h-6 text-white" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <p className="text-orange text-sm">Hulp nodig? Bel ons nu</p>
            <p className="text-teal-600 text-xl font-bold">+31628964262</p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </section>
  );
};

export default ServiceDetails;