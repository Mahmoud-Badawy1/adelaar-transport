"use client";

import { useState } from 'react';
import { faqData } from './faqData';
import FaqItem from './FaqItem';

const FaqSection = () => {
  const [activeId, setActiveId] = useState(1);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative py-8 md:py-12 lg:py-16 bg-white min-h-[calc(100vh-4rem)] lg:h-[51.875rem] flex items-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bg-faq.svg')" }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-flex px-4 py-2 text-xs md:text-sm font-medium bg-orange text-white rounded-full items-center">
              VAARDIG VRAAGGESTELLEN VRAGEN
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-green1 leading-tight">
              <span className="block">Heeft u</span>
              <span className="block">een vraag?</span>
              <span className="block">Vind het antwoord hier.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-prose">
              Enkele veelgestelde vragen over de vrachtservices van Adelaar Transport.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 mt-8 lg:mt-0">
            {faqData.map((item) => (
              <FaqItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isActive={activeId === item.id}
                onClick={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;