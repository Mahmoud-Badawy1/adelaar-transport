import React from "react";
import Image from "next/image";
const StatsSection = () => {
  const stats = [
    {
      icon: (
        "/images/plane2.svg"
      ),
      number: "50k",
      text: "Succesvol Vervoer",
    },
    {
      icon: (
        "/images/truckoutline.svg"
      ),
      number: "256",
      text: "Wegvrachtvervoer",
    },
    {
      icon: (
        "/images/trade.svg"
      ),
      number: "25+",
      text: "Landen van Operatie",
    },
    {
      icon: (
        "/images/train1.svg"
      ),
      number: "125",
      text: "Treinvrachtvervoer",
    },
  ];

  return (
    <section className="bg-darkblue py-16 mt-40">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center bg-darkblue2 text-white p-6 rounded-xl border-2 border-dashed border-green4"
          >
            <div className="flex-shrink-0">
              <Image width={60} height={60} src={stat.icon} /></div>
            <div className="ml-4">
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="text-lg">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
