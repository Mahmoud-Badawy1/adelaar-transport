import React from 'react';

const CaseStudyCard = ({ category, title, image, link }) => {
    return (
      <div className="min-w-[300px] h-[400px] rounded-2xl overflow-hidden relative group transition-all duration-300">
        {/* Background layers */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Default gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#bbbbbb3b] to-[#076177]/70 group-hover:opacity-0 transition-all duration-300" />
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f4f4] via-[#FF6B2C] to-[#FF6B2C] opacity-0 group-hover:opacity-100 transition-all duration-300" />
  
        {/* Content */}
        <div className="absolute bottom-0 p-6 w-full">
          <span className="inline-block px-4 py-1.5 bg-orange hover:bg-white hover:text-green4 backdrop-blur-sm rounded-full text-white text-sm mb-3">
            {category}
          </span>
          <h3 className="text-white text-xl font-semibold leading-tight">{title}</h3>
        </div>
        
        {/* Arrow icon */}
        {link && (
          <a
            href={link}
            className="absolute top-4 right-4 p-2 bg-orange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white transform rotate-0 group-hover:-rotate-45 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>
    );
  };
  
  export default CaseStudyCard;