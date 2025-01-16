const OurSkills = () => {
    const skills = [
      { name: "Intermodal Shipping", percentage: 56 },
      { name: "Warehousing", percentage: 98 },
      { name: "International Shipping", percentage: 87 },
    ];
  
    return (
      <div className="max-w-xl">
        <div className="inline-block px-4 py-2 bg-orange text-white rounded-full mb-6 justify-center items-center">
          OUR SKILLS
        </div>
        
        <h2 className="text-4xl font-bold text-teal-900 mb-4">
          Why we are considered<br />
          the best in business
        </h2>
        
        <p className="text-gray-600 mb-8">
          Logisco Air freight service deliver the knowledge & opportunity to optimize every
        </p>
  
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.percentage}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-600 rounded-full"
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