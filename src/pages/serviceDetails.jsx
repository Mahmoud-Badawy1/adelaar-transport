"use client";
import React from "react";
import Header from '../components/home/Header';
import HeroService from '../components/Services/heroService';

const ServiceDetails = () => {
  return (
    <section>
    <Header />
    <HeroService/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - Left Column */}
        <div className="lg:col-span-2">
          {/* Service Image */}
          <div className="w-full h-[400px] bg-gray-200 rounded-lg mb-6">
            {/* Replace with your actual image */}
            <img
              src="/api/placeholder/800/400"
              alt="Land Freight Transportation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Service Title */}
          <h1 className="text-2xl font-bold mb-4">Land Freight Transportation</h1>

          {/* Service Description */}
          <p className="text-gray-600 mb-8">
            Land transportation provides flexibility and cost-effective ways to move cargo. Our solutions extend to all corners of the world with high-quality standards. We offer vast logistics networks to get to the farthest parts of the world.
          </p>

          {/* Logistics Status Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Logistic Status</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">The point was successfully pickup up from source point</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-600">The package was dispatched to next station point.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">We have received your order and working on it.</span>
              </div>
            </div>
          </div>

          {/* Service Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Intermodal Shipping",
                description: "Leverage other means of transportation combined to provide you the best service at the most reasonable price."
              },
              {
                title: "Container Freight",
                description: "We offer container shipping services for all kinds of goods across multiple locations."
              },
              {
                title: "Project-perfect Shipping",
                description: "Perfect shipping solutions for your business shipping needs."
              },
              {
                title: "Intermodal Shipping",
                description: "Combined shipping solutions to provide you with the best possible service."
              },
              {
                title: "Rail Fleet Tracking",
                description: "Track your rail fleet in real-time with our advanced tracking systems."
              },
              {
                title: "Perfect Shipping",
                description: "Providing perfect shipping solutions for all your transportation needs."
              }
            ].map((option, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-2">{option.title}</h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          {/* Related Services List */}
          <div className="bg-transparent p-4 mb-6">
            <div className="space-y-4 ">
              {[
                "Land Freight Transportation",
                "Sea Freight Transportation",
                "Air Freight Transportation",
                "Warehousing Services"
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-orange rounded-lg -sm cursor-pointer bg-white">
                  <div className="flex items-center gap-3">
                    <img
                      src="/api/placeholder/24/24"
                      alt={service}
                      className="w-6 h-6"
                    />
                    <span>{service}</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">For More Transportation Services</h3>
            <div className="flex items-center gap-2 text-lg">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2"/>
              </svg>
              <span>+234 567 811</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServiceDetails;