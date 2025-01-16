"use client";
import { useState } from 'react';
import { faqData } from './faqData';
import FaqItem from './FaqItem';

const FaqSection = () => {
  const [activeId, setActiveId] = useState(1); // First item active by default

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white lg:h-[51.875rem] h-fit flex items-center" style={{ backgroundImage: "url('/images/bg-faq.svg')" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-16">
          {/* Left Column */}
          <div>
            <div className="inline-block px-4 py-2 text-sm font-medium bg-orange text-white rounded-full mb-6 justify-center items-center">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-6xl font-semibold text-green1 mb-4">
              Do you have<br />
              any question?<br />
              Find answer here
            </h2>
            <p className="text-gray-600">
              Some frequently asked questions about logisco's cargo services
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
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