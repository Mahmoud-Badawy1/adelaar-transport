'use client';

import React, { useState } from 'react';
import TeamCard from './TeamCard';

function Team() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.svg')" }}
    >
      <div className="text-center mb-12">
        <div className="inline-block bg-orange rounded-full p-3">
          <span className="text-white text-sm uppercase font-bold">
            OUR CORE TEAM
          </span>
        </div>
        <h2 className="text-4xl font-bold text-green3 mt-4">
          Meet the key Team members
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Logisco Air freight service deliver the knowledge & opportunity to optimize every mile on every lane. Get full-service
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <TeamCard 
          id="1"
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
        <TeamCard 
          id="2"
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
        <TeamCard 
          id="3"
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
        <TeamCard 
          id="4"
          selectedCard={selectedCard}
          handleCardClick={handleCardClick}
        />
      </div>
    </section>
  );
}

export default Team;
