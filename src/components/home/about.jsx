import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <section
      className="relative py-12 lg:py-20 bg-cover bg-center justify-center"
      style={{ backgroundImage: "url('/images/aboutBg.svg')" }}
    >
      <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center lg:order-1 mt-8 lg:mt-0">
          {/* Large Image */}
          <div
  className="w-[250px] sm:w-[300px] h-[350px] sm:h-[400px] bg-gray-200 rounded-lg shadow-lg relative border-4 border-white bg-cover"
  style={{ backgroundImage: "url('/images/aboutImg.jpg')" }}
>            {/* Small Image */}
            <div className="w-[150px] sm:w-[180px] h-[190px] sm:h-[220px] bg-gray-400 rounded-lg shadow-lg absolute 
                          right-[0%] sm:right-[-30%] top-1/2 transform -translate-y-1/2 border-4 border-white bg-cover" style={{ backgroundImage: "url('/images/small.jpg')" }}>
              {/* Badge */}
              <div className="absolute -bottom-[90px] sm:-bottom-[103px] left-1/2 transform -translate-x-1/2 
                            bg-orange text-white text-center px-4 py-2 shadow-lg 
                            h-[90px] sm:h-[103px] w-[90px] sm:w-[103px]">
                <span className="block text-base lg:text-lg font-bold">20</span>
                <span className="text-xs sm:text-sm">Jarenlange Ervaring</span>
              </div>
            </div>
            {/* Triangle */}
            <div
              className="hidden sm:flex absolute -bottom-[13px] left-[224px] transform -translate-x-1/2 w-[30px] h-[16px] bg-darkOrange z-[-1]"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
            ></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 text-start w-full sm:w-[80%] order-1 lg:order-2">
          <div className="items-center space-x-2 bg-orange px-4 py-1 rounded-full inline-block">
            <span className="text-white uppercase font-bold text-sm">
              Over Adelaar Transport
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-green3">
            We houden uw goederen schadevrij
          </h2>
          <p className="text-gray-500 text-sm lg:text-base">
            De luchtvrachtdienst van Adelaar Transport biedt de kennis en kansen om elke kilometer op elke route te optimaliseren. 
            Kies voor volledige service. Onze vrachtwagenladingdivisie biedt meer opties om kosten te beheren door 
            technologie en intelligentie te combineren.
          </p>

          {/* Shipping Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 bg-white rounded-lg shadow-lg p-4 border-l-8 border-orange">
            {[
              "Intermodaal transport",
              "Containervracht",
              "Vriesproductvervoer",
              "Intermodaal transport",
              "Hot Shot vrachtvervoer",
              "Vlakbedvervoer"
            ].map((item, index) => (
              <div key={index} className="text-green3 flex items-center space-x-2">
                <Image
                  width={16}
                  height={16}
                  src="/images/iconarrow.svg"
                  alt="Arrow Icon"
                  className="w-3 lg:w-4 h-3 lg:h-4"
                />
                <span className="text-sm lg:text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="bg-green3 px-4 lg:px-6 py-2 lg:py-3 rounded-md hover:bg-orange-600 transition 
                             flex items-center space-x-3 text-white text-base lg:text-sm font-medium sm:w-auto">
              <span>Neem contact met ons op</span>
              <div className="flex items-center justify-center bg-white w-6 lg:w-8 h-6 lg:h-8 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 lg:h-5 w-4 lg:w-5 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </button>

            <div className="flex items-center space-x-4">
              {/* Icon Container */}
              <div className="w-10 lg:w-12 h-10 lg:h-12 bg-lightOrange rounded-full flex items-center justify-center">
                <svg className="h-5 lg:h-6 w-5 lg:w-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
              </div>

              {/* Text Column */}
              <div className="flex flex-col">
                <span className="text-green3 text-base lg:text-lg font-bold">
                  Heeft u vragen?
                </span>
                <p className="text-gray-500 text-sm lg:text-base">+01 546 378 333</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Logos Section */}
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-28 px-4 md:px-10">
  <Image width={140} height={40} src="/images/logistics.svg" alt="Logistics" className="h-10 mx-auto" />
  <Image width={140} height={40} src="/images/freightex.svg" alt="Freightex" className="h-10 mx-auto" />
  <Image width={140} height={40} src="/images/travelgood.svg" alt="Travelgood" className="h-10 mx-auto" />
  <Image width={140} height={40} src="/images/trucking.svg" alt="Trucking" className="h-10 mx-auto" />
  <Image width={140} height={40} src="/images/flyfaster.svg" alt="Flyfaster" className="h-10 mx-auto" />
</div>
    </section>
  );
};

export default About;