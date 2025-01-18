import React from 'react';

function AboutSection() {
  return (
    <>
      <section className="bg-orange text-white relative flex flex-col md:flex-row justify-center items-center" style={{ height: "auto", minHeight: "300px",paddingBottom:"15rem" }}>

        <div className="flex-1 text-center mt-10 md:mt-20 px-5 md:px-20">
          <div className="bg-white text-orange w-32 rounded-lg mx-auto md:ml-20 mb-5 text-sm p-1">
          OVER Adelaar Transport
          </div>
          <div className="text-2xl md:text-4xl font-semibold">
          Over Adelaar Transport: Onze passie voor logistieke operaties
          </div>
        </div>

        <div className="flex-1 mt-10 md:mt-20 px-5 md:px-20">
          <div className="text-sm leading-6">
          De luchtvrachtdienst van Adelaar Transport biedt de kennis en kansen om elke kilometer op elke route te optimaliseren. Onze volledige service vrachtwagenladingdivisie biedt meer opties om kosten te beheren. We bieden een breed scala aan diensten en op maat gemaakte oplossingen voor u.
          </div>
          <div className="text-sm mt-5 md:mt-10 leading-6">
          Met jarenlange expertise in de branche nemen we de verantwoordelijkheid voor de prestaties van al onze koeriers en zorgen we voor de beschikbaarheid van de benodigde apparatuur om de goederenstroom onder onze controle te beheersen.
          </div>
        </div>
      </section>

      <section className="relative h-96 md:h-96 flex justify-center">
        <div
          className="bg-gray2 relative h-96 md:h-96 flex justify-center bg-cover bg-center bg-no-repeat"
          style={{
            width: "90%",
            maxWidth: "85rem",
            marginTop: "-10rem",
            backgroundImage: `url('/about.jpg')`,
          }}
        ></div>
      </section>
    </>
  );
}

export default AboutSection;
