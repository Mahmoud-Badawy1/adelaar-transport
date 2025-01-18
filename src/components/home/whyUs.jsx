"use client";

import React, { useState } from "react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState("expertEmployees");

  const data = {
    expertEmployees: {
      title: "Deskundige Werknemers",
      description:
        "Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat neque eu purus rhoncus, vel tincidunt odio ultrices. Sed theya are feugiat elit Curabitur posuere tristique.",
      features: [
        "30 Ervaren Laden & Lossen Specialisten",
        "45 Getrainde Magazijnexperts",
        "120 Deskundige Vrachtwagenchauffeurs",
        "345 Bezorgpersoneel",
      ],
    },
    modernTechnology: {
      title: "Moderne Technologie",
      description:
        "Ervaar de meest geavanceerde logistieke technologieën die efficiëntie en productiviteit verbeteren.",
      features: [
        "AI-gestuurde Tracking",
        "Slimme Magazijnen",
        "Efficiënte Routemapping",
      ],
    },
    globalOperation: {
      title: "Wereldwijde Operatie",
      description:
        "Met ons uitgebreide wereldwijde netwerk zorgen we voor naadloze operaties in meerdere landen.",
      features: ["20+ Internationale Kantoren", "Wereldwijde Transportpartners"],
    },
    warehouseFacility: {
      title: "Magazijnfaciliteit",
      description:
        "Onze magazijnen zijn uitgerust met moderne voorzieningen voor veilige en efficiënte opslag.",
      features: ["Klimaatgecontroleerde Opslag", "24/7 Beveiligingsbewaking"],
    },
    priorityTransportation: {
      title: "Prioriteitstransport",
      description:
        "Wij bieden transport met hoge prioriteit om tijdige en veilige leveringen te garanderen.",
      features: ["Toegewijde Vloot", "Snelle Leveringsroutes"],
    },
  };

  const currentTab = data[activeTab];

  return (
    <section className="relative min-h-[600px] lg:min-h-[800px] z-10">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full lg:w-[40%] h-full bg-green3 overflow-hidden">
        <div className="relative w-1/2 h-1/2">
          <div className="absolute inset-0 grid grid-cols-4 gap-4 lg:gap-6 p-4 lg:p-6 opacity-80">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
          {/* Curved line decoration */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8">
            <svg width="40" height="40" className="lg:w-[60px] lg:h-[60px]" viewBox="0 0 60 60" fill="none">
              <path d="M0 0C33.1371 0 60 26.8629 60 60" stroke="#FF7757" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row mx-auto">
        {/* Left Side */}
        <div className="w-full lg:w-[40%] pt-8 lg:pt-16 px-4 lg:pr-0 lg:pl-36 lg:translate-y-1/4">
          <div className="mb-8 lg:mb-12 pl-4 lg:pl-8">
            <span className="inline-block px-4 py-1 text-xs uppercase tracking-wider text-white bg-green3 rounded mb-3">
              Waarom voor ons kiezen
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Waarom voor ons kiezen</h2>
          </div>
          
          <div className="space-y-1">
            {Object.keys(data).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full text-left pl-4 lg:pl-8 pr-4 py-3 lg:py-4 transition-all duration-300 rounded-full lg:rounded-l-full lg:rounded-none  ${
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

        {/* Right Side */}
        <div className="w-full lg:w-[39.5%] bg-orange p-6 lg:p-10 mt-8 lg:mt-0 lg:translate-y-[62.5%] relative">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">{currentTab.title}</h3>
          <p className="text-white/90 mb-6 lg:mb-10">{currentTab.description}</p>
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-8 z-20">
            <ul className="space-y-4 lg:space-y-6 flex-1">
              {currentTab.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white text-base lg:text-lg">
                  <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-white flex items-center justify-center mr-3 lg:mr-4">
                    <span className="text-orange">✓</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="w-full h-48 lg:w-48 lg:h-48 bg-gray-200 rounded-xl flex-shrink-0 bg-cover" style={{ backgroundImage: "url('/images/emp.jpg')" }} />
          </div>

          {/* Triangle Decoration */}
          <div className="hidden xl:flex absolute bottom-0 border-l-[40px] border-l-darkOrange border-b-[40px] border-b-darkOrange" style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            right: "-6.7%",
            width: "40px",
            height: "48px",
          }}></div>
        </div>
      </div>

      {/* Gray Background */}
      <div className="absolute top-0 right-0 w-full lg:w-[70%] h-full lg:h-[93.8%] bg-gray-200 -z-10 bg-cover" style={{ backgroundImage: "url('/images/cont.jpg')" }}/>
    </section>
  );
};

export default WhyChooseUs;