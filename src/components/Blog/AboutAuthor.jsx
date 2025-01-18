import React from 'react';
import Image from 'next/image';
function AboutAuthor() {
  return (
    <div className="bg-white border rounded-lg mt-5 mb-10 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto">
      {/* Header Section */}
      <div className="px-4">
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Over de Auteur</div>
        <hr className="w-9 border-2 border-orange mb-6" />
      </div>

      {/* Author Image */}
      <div className="flex justify-center">
        <div className="bg-gray2 h-40 w-40 sm:h-60 sm:w-60 lg:h-72 lg:w-72 rounded-lg"></div>
      </div>

      {/* Author Description */}
      <div className="mt-5 mb-5 text-text1 text-sm px-4 sm:px-8 text-center sm:text-left">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventa est.
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 px-4 sm:px-8 pb-5">
        {/* Facebook */}
        <div
          style={{
            borderRadius: '50%',
            width: '2.4rem',
            height: '2.4rem',
            textAlign: 'center',
          }}
          className="bg-orange text-white font-bold flex justify-center items-center mr-3"
        >
          f
        </div>

        <div>
          <Image width={56} height={48} src="/images/2.svg" alt="icon" className="h-12 w-14" />
        </div>
        <div>
          <Image width={56} height={48} src="/images/3.svg" alt="icon" className="h-12 w-14" />
        </div>
        <div>
          <Image width={56} height={48} src="/images/4.svg" alt="icon" className="h-12 w-14" />
        </div>
        <div>
          <Image width={56} height={48} src="/images/5.svg" alt="icon" className="h-12 w-14" />
        </div>
      </div>
    </div>
  );
}

export default AboutAuthor;
