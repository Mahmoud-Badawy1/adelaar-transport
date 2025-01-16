"use client";
import { useRef } from 'react';
import { caseStudies } from './data';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesSection = () => {
  const scrollContainerRef = useRef(null);
  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const scrollAmount = 320; // Approximately one card width + gap
    const targetScroll = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };


  return (
    <section className="relative bg-transparent py-16 from-[#EFFFFF] to-[#E4EEF3]">
      {/* Right Side Green Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green3"></div>

      {/* Left Section (Content) */}
      <div className="relative py-16 px-4 lg:px-16 z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-white text-sm font-medium bg-orange px-4 py-1.5 rounded-full mb-3 inline-block">
                OUR CASE STUDIES
              </span>
              <h2 className="text-3xl font-bold text-teal-900">
                Best Cases by Logisco
              </h2>
            </div>

            <div className="flex gap-2 z-20 relative">
              <button
                onClick={() => scroll("left")}
                className="p-3 rounded-full border text-teal-200 hover:text-white border-teal-200 hover:bg-orange transition-colors"
              >
                <svg
                  className="w-6 h-6  "
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
                onClick={() => scroll("right")}
                className="p-3 rounded-full border border-teal-200 bg-transparent text-teal-200 hover:text-white hover:bg-orange transition-colors"
              >
                <svg
                  className="w-6 h-6"
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
          </div>

          {/* Cards Section */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="snap-start rounded-lg p-4"
              >
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
