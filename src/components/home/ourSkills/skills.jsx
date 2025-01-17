const OurSkills = () => {
  const skills = [
    { name: "Intermodal Shipping", percentage: 56 },
    { name: "Warehousing", percentage: 98 },
    { name: "International Shipping", percentage: 87 },
  ];

  return (
    <div className="w-full px-4 lg:px-0 max-w-[320px] sm:max-w-[480px] lg:max-w-xl mx-auto">
      <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-orange text-white text-xs sm:text-sm rounded-full mb-4 sm:mb-6">
        ONZE VAARDIGHEDEN
      </div>
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-3 sm:mb-4">
        <span className="block lg:inline">Waarom we worden beschouwd als</span>{' '}
        <span className="block lg:inline">de besten in de branche</span>
      </h2>
      
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        De luchtvrachtdienst van Adelaar Transport biedt de kennis en kansen om elke kilometer te optimaliseren.
      </p>

      <div className="space-y-4 sm:space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1.5 sm:mb-2">
              <span className="text-sm sm:text-base font-medium">{skill.name}</span>
              <span className="text-sm sm:text-base">{skill.percentage}%</span>
            </div>
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-teal-600 rounded-full transition-all duration-1000"
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSkills;