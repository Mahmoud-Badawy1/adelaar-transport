"use client";

import React from "react";
import Link from "next/link";

const Card = ({ icon, title, description, buttonText, href }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-start transition-transform duration-300 hover:transform hover:-translate-y-1">
      {/* Gray Background Section */}
      <div className="bg-gray-200 h-40 sm:h-44 md:h-48 lg:h-52 relative">
        {/* Circular Icon */}
        <div className="absolute bottom-0 right-2/3 transform -translate-x-1/2 translate-y-1/2 bg-white border-4 border-lightOrange w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
            {icon}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 pt-10 sm:pt-12 md:pt-14">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-green3 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-3 line-clamp-3">
          {description}
        </p>
        
        {href && (
          <Link
            href={href}
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-orange font-semibold bg-lightOrange rounded-md hover:bg-orange hover:text-white transition-all duration-300 mt-3 sm:mt-4 focus:ring-2 focus:ring-orange focus:ring-opacity-50 focus:outline-none"
          >
            <span className="flex items-center gap-2">
              {buttonText}
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;