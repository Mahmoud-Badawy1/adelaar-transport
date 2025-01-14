import React from "react";
import ServicesSection from "../ServicesSection";

const LogisticsServices = () => {
  return (
    <section
    className="relative py-16 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/bg.svg')" }}
  >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-orange rounded-full p-3">
        <span className="text-white text-sm uppercase font-bold">
          Our Services
        </span></div>
        <h2 className="text-4xl font-bold text-green3 mt-4">
          Wide Variety of Logistics Services
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Logisco Air freight service delivers the knowledge & opportunity to
          optimize every mile on every lane. Get full-service.
        </p>
      </div>

      {/* Services Cards */}
      <ServicesSection />
    </section>
  );
};

export default LogisticsServices;
