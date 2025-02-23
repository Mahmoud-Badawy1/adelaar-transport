import React from 'react';
import Image from 'next/image';
function Award() {
  return (
    <section className="flex justify-center items-center flex-col md:flex-row py-10" style={{marginTop:"-8rem",marginBottom:"4rem"}}>
      <div className="flex-1 text-center mb-10 md:mb-0">
        <div className='flex justify-center mb-4 '>
          <div className="text-9xl text-green3">20</div>
          <div className="text-7xl text-orange" style={{marginTop:"0rem"}}>+</div>
        </div>
        <div className="text-xl md:text-3xl font-normal text-text1">
        Prijzen van over de hele wereld
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full'
          src="/Award1.svg" 
          alt="Award 1"
          width={128}
          height={128}
           />
        </div>
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full' width={128} height={128} src="/Award2.svg" alt="Award 2" />
        </div>
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full' width={128} height={128}  src="/Award3.svg" alt="Award 3" />
        </div>
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full' width={128} height={128}  src="/Award4.svg" alt="Award 4" />
        </div>
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full' width={128} height={128}  src="/Award5.svg" alt="Award 5" />
        </div>
        <div className="bg-white border sm:w-40 p-5 rounded-lg">
          <Image className='w-full' width={128} height={128}  src="/Award6.svg" alt="Award 6" />
        </div>
      </div>
    </section>
  );
}

export default Award;
