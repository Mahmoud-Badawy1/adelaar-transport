import React from 'react';

function SlideRigth() {
  const shippingData = [
    { type: 'Shipping by Road', percentage: 92 },
    { type: 'Poller Freight Shipping', percentage: 85 },
    { type: 'Intermodal Shipping', percentage: 75 },
  ];

  return (
    <>
      {/* Work Experience Section */}
      <div>
        <div className="text-3xl text-green1 mb-2 font-bold">Work Experience</div>
        <div className="text-text1 text-sm leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {[
            'Head Of Operation, Freight Corp',
            'Operation Team Lead, FedX',
            'Head Of Operation, DHL',
            'Operation Team Lead, DHL',
            'Head Of Operation, FedX',
            'Executive, FedX',
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <img src="/images/true.svg" alt="Icon" />
              <div className="ml-1 text-green1 text-base font-medium">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Qualification Section */}
      <div>
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Educational Qualification</div>
        <hr className="w-9 border-2 border-orange mb-6" />
        <div className="text-text1 text-sm leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {[
            { title: 'School Education', description: 'Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
            { title: 'College Education', description: 'Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
            { title: 'Graduation', description: 'Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
            { title: 'Post Graduation', description: 'Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.' },
          ].map((edu, index) => (
            <div key={index} className="flex items-start">
              <img src={`/images/number (${index}).svg`} alt="Number Icon" />
              <div className="ml-6">
                <div className="text-green1 text-lg font-medium">{edu.title}</div>
                <div className="text-text1 text-sm">{edu.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills Section */}
      <div>
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Professional Skills</div>
        <hr className="w-9 border-2 border-orange mb-6" />
        <div className="text-text1 text-sm leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </div>
        <div className="flex flex-col gap-4 mt-5 w-full md:w-3/4">
          {shippingData.map((item, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-2">
                <div className="text-base">{item.type}</div>
                <div className="font-bold">{item.percentage}%</div>
              </div>
              <div className="h-5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange rounded-full border-4"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div>
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Awards</div>
        <hr className="w-9 border-2 border-orange mb-6" />
        <div className="text-text1 text-sm leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 mb-5">
          {[
            'Employee of the month',
            'Best Transporter 2022',
            'Best Employee 2021',
          ].map((award, index) => (
            <div key={index} className="flex items-center">
              <img src="/images/true.svg" alt="Award Icon" />
              <div className="ml-1 text-green1 text-base font-medium">{award}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SlideRigth;
