import React from 'react';

function Award() {
  return (
    <section className="flex justify-center items-center flex-col md:flex-row py-10" style={{marginTop:"-8rem",marginBottom:"4rem"}}>
      <div className="flex-1 text-center mb-10 md:mb-0">
        <div className='flex justify-center mb-4 '>
          <div className="text-9xl text-green3">20</div>
          <div className="text-7xl text-orange" style={{marginTop:"0rem"}}>+</div>
        </div>
        <div className="text-xl md:text-3xl font-normal text-text1">
          Awards from all over the world
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award1.svg" alt="Award 1" />
        </div>
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award2.svg" alt="Award 2" />
        </div>
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award3.svg" alt="Award 3" />
        </div>
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award4.svg" alt="Award 4" />
        </div>
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award5.svg" alt="Award 5" />
        </div>
        <div className="bg-white border w-32 sm:w-40 p-5 rounded-lg">
          <img src="/images/Award6.svg" alt="Award 6" />
        </div>
      </div>
    </section>
  );
}

export default Award;
