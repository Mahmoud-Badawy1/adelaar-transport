"use client";

import React, { useRef } from "react";
import Card from "./serviceCard";

const ServicesSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const cardData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 3.75V20.25M3.75 12H20.25"
          />
        </svg>
      ),
      title: "Maritime Transportation",
      description:
        "Logisco Air freight service delivers the knowledge & opportunity to optimize...",
      buttonText: "Read More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 3.75V20.25M3.75 12H20.25"
          />
        </svg>
      ),
      title: "Land Freight Transportation",
      description:
        "Logisco Air freight service delivers the knowledge & opportunity to optimize...",
      buttonText: "Read More",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-orange"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 3.75V20.25M3.75 12H20.25"
          />
        </svg>
      ),
      title: "Intermodal Shipping",
      description:
        "Logisco Air freight service delivers the knowledge & opportunity to optimize...",
      buttonText: "Read More",
    },
    {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 3.75V20.25M3.75 12H20.25"
            />
          </svg>
        ),
        title: "Intermodal Shipping",
        description:
          "Logisco Air freight service delivers the knowledge & opportunity to optimize...",
        buttonText: "Read More",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-orange"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75L14.25 14.25M9.75 14.25L14.25 9.75M12 3.75V20.25M3.75 12H20.25"
            />
          </svg>
        ),
        title: "Intermodal Shipping",
        description:
          "Logisco Air freight service delivers the knowledge & opportunity to optimize...",
        buttonText: "Read More",
      },
  ];

  return (
    <section className="relative bg-transparent">
      <div className="container mx-auto px-4">

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden no-scrollbar pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="max-w-[31%] flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                href={card.href}
              />
            </div>
          ))}
        </div>
        
        {/* Arrows under cards */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={scrollLeft}
            className="bg-white text-green4 text-xl px-5 py-3 rounded-full shadow-md hover:bg-transparent hover:border-green4 hover:border-2"
          >
            &lt;
          </button>
          <button
            onClick={scrollRight}
            className="bg-white text-green4 text-xl px-5 py-3 rounded-full shadow-md hover:bg-transparent hover:border-green4 hover:border-2"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
