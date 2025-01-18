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
                    <img src="/images/person.jpg" alt="" />
            ),
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Adelaar Transport te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Adelaar Transport zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
        },
        {
            icon: (
                <img src="/images/person.jpg" alt="" />
            ),
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Adelaar Transport te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Adelaar Transport zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
        },
        {
            icon: (
                <img src="/images/person.jpg" alt="" />
            ),
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Adelaar Transport te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Adelaar Transport zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
        },
        {
            icon: (
                <img src="/images/person.jpg" alt="" />
            ),
            name: "William Gibson",
            supname: "CEO, Traders Corp.",
            description:
                "Ik heb meer dan 50% bespaard door Adelaar Transport te gebruiken voor mijn bedrijf. Het klantenserviceteam was zeer behulpzaam. Ik zal Adelaar Transport zeker gebruiken voor al mijn toekomstige zendingen. Bedankt! "
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
