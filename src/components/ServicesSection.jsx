"use client";

import React, { useRef, useState, useEffect } from "react";
import Card from "./serviceCard";
import cardData from "./Services/cardsData";

const ServicesSection = () => {
  const scrollRef = useRef(null);
  const [showControls, setShowControls] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        const isScrollable = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
        setShowControls(isScrollable);
      }
    };

    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const newPosition = Math.max(scrollPosition - scrollRef.current.clientWidth, 0);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + scrollRef.current.clientWidth, maxScroll);
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="relative bg-transparent py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden no-scrollbar pb-4 snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-[48%] lg:w-[31%] flex-shrink-0 snap-start"
                style={{ scrollSnapAlign: "start" }}
              >
                <Card
                  image={card.image}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  href={card.href}
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {showControls && (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={scrollLeft}
                className="bg-white text-green4 w-12 h-12 rounded-full shadow-md hover:bg-transparent hover:border-green4 hover:border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={scrollPosition === 0}
                aria-label="Previous cards"
              >
                <svg 
                  className="w-6 h-6 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="bg-white text-green4 w-12 h-12 rounded-full shadow-md hover:bg-transparent hover:border-green4 hover:border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={scrollRef.current && scrollPosition >= scrollRef.current.scrollWidth - scrollRef.current.clientWidth}
                aria-label="Next cards"
              >
                <svg 
                  className="w-6 h-6 mx-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;