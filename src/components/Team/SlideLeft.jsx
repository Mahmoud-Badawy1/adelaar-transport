import React from 'react';
import Image from 'next/image';
function SlideLeft() {
  return (
    <>
      {/* الحاوية الأساسية */}
      <div className="bg-gray1 h-72 w-full max-w-xs sm:h-96 sm:w-96 mb-5 rounded-lg mx-auto bg-cover bg-center" style={{backgroundImage: `url('/person.jpg')`}}></div>
      
      {/* النصوص الرئيسية */}
      <div className="text-center sm:text-left">
        <div className="text-2xl sm:text-3xl pb-2">Mohammad Ghannam</div>
        <div className="text-sm text-text1">CEO, Adelaar Transport</div>
      </div>
      
      {/* تفاصيل الاتصال */}
      <div className="mt-10">
        {/* البريد الإلكتروني */}
        <div className="border-t-2 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Email Address</div>
          <div className="font-bold text-sm text-green1">m-ghannam@adelaartransport.nl</div>
        </div>
        
        {/* رقم الهاتف */}
        <div className="border-t-2 mt-5 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Phone Number</div>
          <div className="font-bold text-sm text-green1">+31630013015</div>
        </div>
        
        {/* العنوان */}
        <div className="border-t-2 mt-5 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Address</div>
          <div className="font-bold text-sm text-green1">De hazelaar 17, 6903BA Zevenaar</div>
        </div>
        
        {/* الأيقونات */}
        <div className="border-t-2 mt-5 pt-3 pb-2 w-full max-w-xs sm:w-96 flex justify-center sm:justify-start items-center space-x-4 mx-auto">
          {/* أيقونة فيسبوك */}
          <div
            style={{
              border: '1px solid',
              borderRadius: '50%',
              padding: '0.3rem',
              width: '35px',
              height: '35px',
              textAlign: 'center',
              marginRight:"0.8rem"
            }}
            className="bg-orange text-white font-bold"
          >
            f
          </div>
          {/* باقي الأيقونات */}
          <div>
            <Image width={48} height={48} src="/2.svg" alt="2.svg" className="h-12 w-12" />
          </div>
          <div>
            <Image width={48} height={48} src="/3.svg" alt="3.svg" className="h-12 w-12"  />
          </div>
          <div>
            <Image width={48} height={48} src="/4.svg" alt="4.svg" className="h-12 w-12"  />
          </div>
          <div>
            <Image width={48} height={48} src="/5.svg" alt="5.svg" className="h-12 w-12"  />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideLeft;
