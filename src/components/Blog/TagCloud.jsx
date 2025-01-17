import React from 'react'

function TagCloud() {
  return (
    <div className='bg-white border rounded-lg mt-5 mb-10 max-w-md pb-10'>
    <div className='px-4'>
        <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Tagwolk</div>
        <hr className="w-9 border-2 border-orange mb-6" />
    </div>
    <div className='flex flex-wrap px-4 gap-1'>
        <div className='border bg-green4 text-white p-2'>ZAKEN</div>
        <div className='border text-lightGreen2 p-2'>FINANCIËN</div>
        <div className='border text-lightGreen2 p-2'>MARKETING</div>
        <div className='border text-lightGreen2 p-2'>CONSULTANCY</div>
        <div className='border text-lightGreen2 p-2'>PROCES</div>
        <div className='border text-lightGreen2 p-2'>BESPREKING</div>
        <div className='border text-lightGreen2 p-2'>CAMPAIGNE</div>
    </div>
</div>
  )
}

export default TagCloud