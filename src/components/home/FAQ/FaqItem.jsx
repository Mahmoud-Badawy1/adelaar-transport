"use client";

import React from 'react';

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="mb-4 md:mb-6">
      <button
        onClick={onClick}
        className={`w-full p-3 md:p-4 flex items-center justify-between text-left rounded-full transition-all duration-300 gap-4
          ${isActive 
            ? 'bg-teal-600 text-white hover:bg-teal-700' 
            : 'bg-white shadow-custom hover:bg-gray-100'
          }`}
        aria-expanded={isActive}
      >
        <span className="font-medium text-sm md:text-base lg:text-sm pr-2">{question}</span>
        <span 
          className={`flex-shrink-0 transform transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}
        >
          {isActive ? (
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 bg-lightOrange rounded-full p-1 text-orange" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 15l7-7 7 7" 
              />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6 md:w-7 md:h-7 bg-lightOrange rounded-full p-1 text-orange" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out
          ${isActive ? 'max-h-[500px] mt-3 md:mt-4' : 'max-h-0'}`}
        role="region"
        aria-hidden={!isActive}
      >
        <p className="text-gray-600 px-4 text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;