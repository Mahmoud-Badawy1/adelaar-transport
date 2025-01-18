import React from "react";

function TestimonialCard({ icon, name, description, supname }) {
    return (
        <div className="flex flex-col items-center p-6   max-w-md mx-auto text-center">
            <div
                className="mb-4 rounded-full border-4 border-lightGreen2"
                style={{
                    width: "112px",
                    height: "112px",
                    backgroundImage: `url(${icon})`, // Use the `icon` prop as the URL
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className="mb-2 text-gray-700">{description}</div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-sm text-gray-500">{supname}</div>
        </div>
    );
}

export default TestimonialCard;
