import React from "react";

function TestimonialCard({ icon, name, description, supname }) {
    return (
        <div className="flex flex-col items-center p-6   max-w-md mx-auto text-center">
            <div className="mb-4">{icon}</div>
            <div className="mb-2 text-gray-700">{description}</div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-500">{supname}</div>
        </div>
    );
}

export default TestimonialCard;
