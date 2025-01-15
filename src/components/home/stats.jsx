import React from "react";

const StatsSection = () => {
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h11M9 21V3M17 8h4M21 8h-4m4 0v4m0-4v4M3 21h11M9 21V3"
          />
        </svg>
      ),
      number: "50k",
      text: "Successful Transportation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 4h16v16H4V4zm5 8h2v2h2v-2h2m-6 0V8h4v4h-4zm8-2h2v4h-2z"
          />
        </svg>
      ),
      number: "256",
      text: "Land Freight Transportation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 13h6M2 7h6M6 21h4"
          />
        </svg>
      ),
      number: "25+",
      text: "Countries of Operation",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13h6M3 7h6M3 19h6M9 3v20M12 12h8"
          />
        </svg>
      ),
      number: "125",
      text: "Train Freight Transportation",
    },
  ];

  return (
    <section className="bg-darkblue py-16">
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
