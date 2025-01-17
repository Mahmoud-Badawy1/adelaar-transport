"use client";

import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
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
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Logisco te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Logisco zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
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
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Logisco te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Logisco zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
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
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Logisco te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Logisco zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
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
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Logisco te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Logisco zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
        },
    ];

    return (
        <section className="relative bg-transparent py-20">
            <div className="container mx-auto px-4">
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
                >
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="min-w-full snap-start flex justify-center items-center"
                        >
                            <TestimonialCard
                                icon={card.icon}
                                name={card.name}
                                description={card.description}
                                supname={card.supname}
                            />
                        </div>
                    ))}
                </div>

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

export default TestimonialSection;
