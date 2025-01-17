import React from 'react';

const HeroService = () => {
  return (
    <section className="bg-green3 text-white relative h-96 flex items-center">
      {/* Hero Content */}
      <div className="container mx-auto flex flex-col items-start justify-center px-4">
        <h1 className="sm:text-6xl text-3xl font-bold leading-tight mb-6">
        Our Services
        </h1>
        <button className="bg-orange px-6 py-3 rounded-md hover:bg-orange-600 transition flex items-center space-x-3 text-white text-lg font-medium">
  <span>Contact Adelaar Transport</span>
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
    </section>
  );
};

export default HeroService;
