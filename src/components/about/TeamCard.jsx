'use client';

import Link from 'next/link';
import React, { useState } from 'react';

function TeamCard({ id, selectedCard, handleCardClick }) {
    const isSelected = selectedCard === id;

    return (
        <div
            className={`bg-gray1 h-80 w-full sm:w-60 md:w-72 flex  hover:scale-110  justify-center items-end m-2 rounded-md bg-cover bg-center bg-no-repeat relative transition-all duration-300 ease-in-out`}
            style={{ backgroundImage: `url('/images/person.jpg')` }}
            onClick={() => handleCardClick(id)}
        >
            <div className={`w-52 h-auto bg-white rounded-md text-center pt-3 mb-3 hover:scale-105 hover:bg-green4 hover:h-28 hover:text-white `}>
                <div className="text-1xl font-bold">Loraine Lee</div>
                <div className="text-sm text-gray2">Transportatiespecialist</div>
                <Link href="/team">
  <div className="relative cursor-pointer" style={{ marginTop: "-6rem", marginLeft: "-1rem" }}>
    <img src="/images/icon plus.svg" alt="icon plus.svg" />
  </div>
</Link>
                <div className="flex  space-x-4 justify-center m-2  " >
                    <Link
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 hover:text-orange transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.675 0h-21.35c-.734 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.125v-3.622h3.125v-2.671c0-3.1 1.892-4.787 4.655-4.787 1.321 0 2.463.098 2.794.142v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.622h-3.124v9.293h6.124c.733 0 1.324-.591 1.324-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 hover:text-orange transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 hover:text-orange transition"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 19h-3v-11.25h3v11.25zm-1.5-12.5c-1.035 0-1.75-.725-1.75-1.633 0-.925.73-1.633 1.804-1.633s1.746.708 1.75 1.633c0 .908-.715 1.633-1.804 1.633zm13.25 12.5h-3v-5.652c0-1.348-.455-2.268-1.584-2.268-.865 0-1.383.584-1.611 1.144-.084.202-.106.484-.106.768v5.995h-3v-11.25h3v1.538c.4-.619 1.11-1.496 2.706-1.496 1.975 0 3.495 1.292 3.495 4.067v7.141z" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default TeamCard;
