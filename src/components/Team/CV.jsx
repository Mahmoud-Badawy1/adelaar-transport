import React from 'react';
import SlideLeft from './SlideLeft';
import SlideRigth from './SlideRigth';

function CV() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-16 lg:mt-32 px-4">
      <div className="mb-8 lg:mb-0 lg:ml-48 lg:mr-10 w-full lg:w-auto">
        <SlideLeft />
      </div>
      
      <div className="flex-1 w-full lg:w-auto">
        <SlideRigth />
      </div>
    </div>
  );
}

export default CV;
