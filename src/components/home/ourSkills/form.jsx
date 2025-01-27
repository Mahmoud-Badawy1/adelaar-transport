"use client";
import React, { useState } from "react";

const QuoteForm = () => {
  const [distance, setDistance] = useState(500);

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  return (
    <div className="bg-orange p-4 sm:p-6 lg:p-8 rounded-lg text-white w-full max-w-[340px] sm:max-w-[400px] lg:max-w-md mx-auto">
      <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
        Offerteaanvraagformulier
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">
            Persoonlijke Informatie
          </p>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2.5 sm:p-3 rounded text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2.5 sm:p-3 rounded text-gray-800 text-sm sm:text-base"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2.5 sm:p-3 rounded text-gray-800 text-sm sm:text-base"
            />
          </div>
        </div>

        <div>
          <div className="mb-3 sm:mb-4">
            <div className="flex justify-between mb-2">
              <label className="text-sm sm:text-base">Afstand in (Kilometer)</label>
              <span className="text-sm sm:text-base">{distance}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={distance}
              onChange={handleDistanceChange}
              className="w-full h-2 rounded-full appearance-none bg-white cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block mb-2 text-sm sm:text-base">Type Vracht</label>
              <select className="w-full p-2.5 sm:p-3 rounded text-gray-800 text-sm sm:text-base">
                <option>Selecteer</option>
                <option>Luchtvracht</option>
                <option>Zeevracht</option>
                <option>Wegvracht</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm sm:text-base">Laden</label>
              <select className="w-full p-2.5 sm:p-3 rounded text-gray-800 text-sm sm:text-base">
                <option>Selecteer</option>
                <option>Licht</option>
                <option>Middelzwaar</option>
                <option>Zwaar</option>
              </select>
            </div>
          </div>
        </div>

        <button className="w-full bg-teal-700 hover:bg-teal-800 text-white py-2.5 sm:py-3 rounded transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
          Vraag een offerte aan
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="text-center pt-2 sm:pt-3">
          <p className="text-lg sm:text-xl font-semibold mb-2 border-b-2 pb-3 h-auto sm:h-12">
            Of bel ons op +31628964262
          </p>
          <p className="text-xs sm:text-sm font-semibold">
            Het Supportcentrum is 24/7 beschikbaar
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;