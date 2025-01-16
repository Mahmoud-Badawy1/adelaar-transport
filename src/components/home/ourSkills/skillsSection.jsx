import React from "react";
import OurSkills from "./skills";
import QuoteForm from "./form";
const SkillsSection = () => {
  return (
    <section className="relative container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start relative">
        <OurSkills />
        <div className="lg:-mt-24"> {/* Moves form up by 88px on large screens */}
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;