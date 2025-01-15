import React from 'react';

function Intro({ title }) {
  return (
    <section className="bg-green3 text-white relative h-64 md:h-96 flex items-center">
      <div className="absolute left-5 md:left-10 top-1/2 transform -translate-y-1/2 space-y-4 flex flex-col font-semibold px-5 md:px-20">
        <div className="text-3xl md:text-5xl">{title}</div>
        <div className="text-sm md:text-xl italic uppercase">
          home / pages / <span className="text-orange">{title}</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
