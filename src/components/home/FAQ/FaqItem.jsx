"use client";
import React, { use, useState } from 'react';

const FaqItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className={`w-full p-4 flex items-center justify-between text-left rounded-full transition-all duration-300 
          ${isActive ? 'bg-teal-600 text-white' : 'bg-white shadow-custom hover:bg-gray-100'}`}
      >
        <span className="font-medium">{question}</span>
        <span className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
          {isActive ? (
            <svg className="w-7 h-7 bg-lightOrange rounded-full p-1 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-7 h-7 bg-lightOrange rounded-full p-1 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600 px-4">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;