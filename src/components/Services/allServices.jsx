"use client";
import React, { useState } from "react";
import Card from "./../serviceCard";
import cardData from "./cardsData";

const ServicesSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleClickPage = (page) => {
    setCurrentPage(page);
  };

  const currentCards = cardData.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  // Calculate which page numbers to show
  const getVisiblePages = () => {
    const windowSize = 3; // Number of pages to show in the window
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + windowSize - 1, totalPages);

    // Adjust start if we're near the end
    if (end === totalPages) {
      start = Math.max(end - windowSize + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <section className="relative bg-transparent my-24">
      <div className="container mx-auto px-4">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {currentCards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              icon={card.icon}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              href={card.href}
            />
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Arrow */}
          {currentPage > 1 && (
            <button
              onClick={() => handleClickPage(currentPage - 1)}
              className="w-8 h-8 flex items-center justify-center text-orange-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path 
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Page Numbers */}
          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => handleClickPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                ${currentPage === page 
                  ? "bg-orange text-white" 
                  : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {page}
            </button>
          ))}
          
          {/* Ellipsis */}
          {currentPage < totalPages - 2 && (
            <span className="text-gray-600">...</span>
          )}
          
          {/* Next Arrow */}
          {currentPage < totalPages && (
            <button
              onClick={() => handleClickPage(currentPage + 1)}
              className="w-8 h-8 flex items-center justify-center text-orange-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg 
                className="w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path 
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;