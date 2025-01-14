"use client";

import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("expertEmployees");

  const data = {
    expertEmployees: {
      title: "Expert Employees",
      description:
        "Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed theya are feugiat elit Curabitur posuere tristique.",
      features: [
        "30 Experienced Loaders",
        "45 Trained Warehouse Expert",
        "120 Expert Truck Drivers",
        "345 Delivery Personnel",
      ],
    },
    modernTechnology: {
      title: "Modern Technology",
      description:
        "Experience the most advanced logistics technologies that enhance efficiency and productivity.",
      features: [
        "AI-Powered Tracking",
        "Smart Warehousing",
        "Efficient Route Mapping",
      ],
    },
    globalOperation: {
      title: "Global Operation",
      description:
        "With our extensive global network, we ensure seamless operations across multiple countries.",
      features: ["20+ International Offices", "Global Shipping Partners"],
    },
    warehouseFacility: {
      title: "Warehouse Facility",
      description:
        "Our warehouses are equipped with modern amenities for safe and efficient storage.",
      features: ["Climate-Controlled Storage", "24/7 Security Surveillance"],
    },
    priorityTransportation: {
      title: "Priority Transportation",
      description:
        "Providing high-priority transportation to ensure timely and secure deliveries.",
      features: ["Dedicated Fleet", "Fast Delivery Routes"],
    },
  };

  const currentTab = data[activeTab];

  return (
    <section className="relative min-h-[600px]">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-green3 overflow-hidden">
        <div className="relative w-1/2 h-1/2">
          <div className="absolute inset-0 grid grid-cols-4 gap-6 p-6 opacity-80">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
          {/* Curved line decoration */}
          <div className="absolute top-8 left-8">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M0 0C33.1371 0 60 26.8629 60 60" stroke="#FF7757" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative flex mx-auto">
        {/* Left Side */}
        <div className="w-[40%] pt-16 pr-0 pl-36">
          <div className="mb-12 pl-8">
            <span className="inline-block px-4 py-1 text-xs uppercase tracking-wider text-white bg-green3 rounded mb-3">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-white">Why Choose Us</h2>
          </div>
          
          <div className="space-y-1">
            {Object.keys(data).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left pl-8 pr-4 py-4 transition-all duration-300 rounded-l-full ${
                  activeTab === key
                    ? "bg-orange text-white font-medium"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                {data[key].title}
              </button>
            ))}
          </div>
        </div>

      {/* Right Side - Positioned absolutely */}
      <div className="absolute top-[39%] right-[24%] w-[39.5%] bg-orange p-12 ">
          <h3 className="text-3xl font-bold text-white mb-6">{currentTab.title}</h3>
          <p className="text-white/90 mb-10">{currentTab.description}</p>
          
          <div className="flex justify-between items-start gap-8">
            <ul className="space-y-6 flex-1">
              {currentTab.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white text-lg">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-4">
                    <span className="text-orange">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex-shrink-0" />
          </div>

          {/* Triangle Decoration */}
          <div className="absolute -z-10 bottom-0 border-l-[40px] border-l-darkOrange border-b-[40px] border-b-darkOrange" style={{
                clipPath: "polygon(0 0, 100% 0, 0 100%)",
                right: "-6.4%",
                width: "40px",
    height: "50px",
              }}></div>
        </div>
      </div>

      {/* Gray Background */}
      <div className="absolute top-0 right-0 w-[70%] h-full bg-gray-200 -z-10" />
    </section>
  );
};


export default WhyChooseUs;