import React from 'react';

function AboutSection() {
  return (
    <>
      <section className="bg-orange text-white relative flex flex-col md:flex-row justify-center items-center" style={{ height: "auto", minHeight: "300px",paddingBottom:"15rem" }}>

        <div className="flex-1 text-center mt-10 md:mt-20 px-5 md:px-20">
          <div className="bg-white text-orange w-32 rounded-lg mx-auto md:ml-20 mb-5 text-sm p-1">
            ABOUT LOGISCO
          </div>
          <div className="text-2xl md:text-4xl font-semibold">
            About Logisco, Our love for logistics operation
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-20 px-5 md:px-20">
          <div className="text-sm leading-6">
            Logisco Air freight service delivers the knowledge & opportunity to optimize every mile on every lane. Get full-service Truckload division provide more options to manage costs. We offer an array of services and tailored solutions for you.
          </div>
          <div className="text-sm mt-5 md:mt-10 leading-6">
            With years of expertise in the industry, we take responsibility for the performance of all our couriers and for ensuring the availability of equipment needed to control the flow of goods under our change.
          </div>
        </div>
      </section>

      <section className="relative h-96 md:h-96 flex justify-center">
        <div
          className="bg-gray2 relative h-96 md:h-96 flex justify-center"
          style={{
            width: "90%",
            maxWidth: "85rem",
            marginTop: "-10rem",
          }}
        ></div>
      </section>
    </>
  );
}

export default AboutSection;
