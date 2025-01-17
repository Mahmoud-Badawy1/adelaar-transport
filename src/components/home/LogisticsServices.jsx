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
        Onze Diensten
        </span></div>
        <h2 className="text-4xl font-bold text-green3 mt-4">
        Breed scala aan logistieke diensten
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
        De luchtvrachtdienst van Logisco biedt de kennis en kansen om elke kilometer op elke route te optimaliseren. Kies voor volledige service.
        </p>
      </div>

      {/* Services Cards */}
      <ServicesSection />
    </section>
  );
};

export default LogisticsServices;
