import React from "react";

const StatsSection = () => {
  const stats = [
    {
      icon: (
        <img src="/images/plane2.svg" alt="" />
      ),
      number: "50k",
      text: "Succesvol Vervoer",
    },
    {
      icon: (
        <img src="/images/truckoutline.svg" alt="" />
      ),
      number: "256",
      text: "Wegvrachtvervoer",
    },
    {
      icon: (
        <img src="/images/trade.svg" alt="" />
      ),
      number: "25+",
      text: "Landen van Operatie",
    },
    {
      icon: (
        <img src="/images/train1.svg" alt="" />
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
            <div className="flex-shrink-0">{stat.icon}</div>
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
