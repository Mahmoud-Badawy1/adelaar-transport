import React from "react";

const About = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center justify-center"
      style={{ backgroundImage: "url('/images/aboutBg.svg')" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative flex-1 flex justify-center">
          {/* Large Image */}
          <div className="w-[300px] h-[400px] bg-gray-200 rounded-lg shadow-lg relative border-4 border-white">
            {/* Small Image */}
            <div className="w-[180px] h-[220px] bg-gray-400 rounded-lg shadow-lg absolute right-[-30%] top-1/2 transform -translate-y-1/2 border-4 border-white">
              {/* Badge */}
              <div className="absolute -bottom-[103px] left-1/2 transform -translate-x-1/2 bg-orange text-white text-center px-4 py-2 shadow-lg h-[103px] w-[103px]">
                <span className="block text-lg font-bold">20</span>
                <span className="text-sm">Years of Experience</span>
              </div>
            </div>
            {/* Triangle */}
            <div
              className="absolute -bottom-[13px] left-[224px] transform -translate-x-1/2 w-[30px] h-[16px] bg-darkOrange  z-[-1]"
              style={{
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
            ></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 text-start w-[80%]">
          <div className="items-center space-x-2 bg-orange px-4 py-1 rounded-full inline-block">
            <span className="text-white uppercase font-bold text-sm">
              About Logisco
            </span>
          </div>
          <h2 className="text-4xl font-bold text-green3">
            We'll keep your items damage free
          </h2>
          <p className="text-gray-500">
            Logisco Air freight service delivers the knowledge & opportunity to
            optimize every mile on every lane. Get full-service Truckload
            division, providing more options to manage costs by combining
            technology intelligence.
          </p>
          {/* Shipping Options */}
          <div className="grid grid-cols-2 gap-4 bg-white rounded-lg shadow-lg p-4 border-l-8 border-orange">
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Intermodal Shipping</span>
            </div>
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Container Freight</span>
            </div>
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Freeze Product Shipping</span>
            </div>
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Intermodal Shipping</span>
            </div>
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Hot Shot Trucking</span>
            </div>
            <div className="text-green3 flex items-center space-x-2">
              <img
                src="/images/iconarrow.svg" // Path to your SVG in the public folder
                alt="Arrow Icon"
                className="w-4 h-4"
              />
              <span>Flatbed Shipping</span>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex items-center space-x-4 mt-6">
            <button className="bg-green3 px-6 py-3 rounded-md hover:bg-orange-600 transition flex items-center space-x-3 text-white text-lg font-medium">
              <span>Contact Us</span>
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange"
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
              <div className="w-12 h-12 bg-lightOrange rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 7.89a3 3 0 004.242 0L21 10m-9-7h0a4 4 0 100 8h0a4 4 0 100-8z"
                  />
                </svg>
              </div>

              {/* Text Column */}
              <div className="flex flex-col">
                <span className="text-green3 text-lg font-bold">
                  Have Questions?
                </span>
                <p className="text-gray-500">+01 546 378 333</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-28 px-4 md:px-10">
  <img src="/images/logistics.svg" alt="Logistics" className="h-10 mx-auto" />
  <img src="/images/freightex.svg" alt="Freightex" className="h-10 mx-auto" />
  <img src="/images/travelgood.svg" alt="Travelgood" className="h-10 mx-auto" />
  <img src="/images/trucking.svg" alt="Trucking" className="h-10 mx-auto" />
  <img src="/images/flyfaster.svg" alt="Flyfaster" className="h-10 mx-auto" />
</div>

    </section>
  );
};

export default About;
