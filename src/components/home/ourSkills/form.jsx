"use client";
import React, { useState } from "react";

const QuoteForm = () => {
    const [distance, setDistance] = useState(500);
  
    const handleDistanceChange = (e) => {
      setDistance(e.target.value);
    };
  
    return (
      <div className="bg-orange p-8 rounded-lg text-white w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Request Quote Form</h2>
        
        <div className="space-y-6">
          <div>
            <p className="mb-4">Personal Information</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded text-gray-800 mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded text-gray-800"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded text-gray-800"
              />
            </div>
          </div>
  
          <div>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <label>Distance In (Kilometer)</label>
                <span>{distance}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={distance}
                onChange={handleDistanceChange}
                className="w-full h-2 rounded-full appearance-none bg-white"
              />
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Freight Type</label>
                <select className="w-full p-3 rounded text-gray-800">
                  <option>Select</option>
                  <option>Air Freight</option>
                  <option>Sea Freight</option>
                  <option>Land Freight</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Load</label>
                <select className="w-full p-3 rounded text-gray-800">
                  <option>Select</option>
                  <option>Light</option>
                  <option>Medium</option>
                  <option>Heavy</option>
                </select>
              </div>
            </div>
          </div>
  
          <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 rounded transition-colors flex items-center justify-center gap-2">
            Get A Quote
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </button>
  
          <div className="text-center">
            <p className="text-xl font-semibold mb-2 border-b-2 h-12">Or Give us a call + 098 765 4321</p>
            <p className="text-sm font-semibold">The Support Centre Is Available 24/7</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuoteForm;