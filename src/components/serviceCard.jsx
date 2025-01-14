import React from 'react';

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-start">
      {/* Gray Background Section */}
      <div className="bg-gray-200 h-52 relative">
        {/* Circular Icon */}
        <div className="absolute bottom-0 right-2/3 transform -translate-x-1/2 translate-y-1/2 bg-white border-4 border-lightOrange w-16 h-16 rounded-full flex items-center justify-center shadow-md">
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 pt-14">
        <h3 className="text-xl font-semibold text-green3">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <button className="bg-lightOrange text-orange font-semibold px-4 py-2 mt-4 rounded-md hover:bg-orange-600 transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
