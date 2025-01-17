import React from "react";
import OurSkills from "./skills";
import QuoteForm from "./form";

const SkillsSection = () => {
  return (
    <section className="relative w-full">
      {/* Container with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Grid container with responsive gap and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start relative">
          {/* Skills component wrapper */}
          <div className="w-full flex justify-center lg:justify-start">
            <OurSkills />
          </div>
          
          {/* Form component wrapper */}
          <div className="w-full mt-8 sm:mt-12 lg:-mt-24 flex justify-center lg:justify-start">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;