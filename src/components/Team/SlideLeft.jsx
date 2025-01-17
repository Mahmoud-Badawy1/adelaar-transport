import React from 'react';

function SlideLeft() {
  return (
    <>
      {/* الحاوية الأساسية */}
      <div className="bg-gray1 h-72 w-full max-w-xs sm:h-96 sm:w-96 mb-5 rounded-lg mx-auto"></div>
      
      {/* النصوص الرئيسية */}
      <div className="text-center sm:text-left">
        <div className="text-2xl sm:text-3xl pb-2">Jackson Reyan Miller</div>
        <div className="text-sm text-text1">Head Of Operation, Adelaar Transport</div>
      </div>
      
      {/* تفاصيل الاتصال */}
      <div className="mt-10">
        {/* البريد الإلكتروني */}
        <div className="border-t-2 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Email Address</div>
          <div className="font-bold text-sm text-green1">jacksonmiller@email.com</div>
        </div>
        
        {/* رقم الهاتف */}
        <div className="border-t-2 mt-5 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Phone Number</div>
          <div className="font-bold text-sm text-green1">+123 456 78999</div>
        </div>
        
        {/* العنوان */}
        <div className="border-t-2 mt-5 pt-3 pb-2 w-full max-w-xs sm:w-96 mx-auto">
          <div className="text-lg sm:text-xl text-green4 pb-2">Address</div>
          <div className="font-bold text-sm text-green1">231, Utah Downtown Mall, USA</div>
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
            <img src="/images/2.svg" alt="2.svg" className="h-12 w-12" />
          </div>
          <div>
            <img src="/images/3.svg" alt="3.svg" className="h-12 w-12"  />
          </div>
          <div>
            <img src="/images/4.svg" alt="4.svg" className="h-12 w-12"  />
          </div>
          <div>
            <img src="/images/5.svg" alt="5.svg" className="h-12 w-12"  />
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideLeft;
