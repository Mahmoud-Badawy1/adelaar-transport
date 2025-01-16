import React from 'react'

function Categories() {
    return (
        <div className='bg-white border rounded-lg mt-5 mb-10 max-w-md pb-10'>
            <div className='px-4'>
                <div className="text-3xl text-green1 mt-8 mb-2 font-medium">Categories</div>
                <hr className="w-9 border-2 border-orange mb-6" />
            </div>
            <div className='px-4'>
                <div className='flex justify-between border-b-2 border-dashed p-1 text-orange font-semibold'>
                    <div >Consultation</div>
                    <div>(10)</div>
                </div>
                <div className='flex justify-between border-b-2 border-dashed p-1 text-green1 font-semibold mt-2'>
                    <div >Business</div>
                    <div>(12)</div>
                </div>
                <div className='flex justify-between border-b-2 border-dashed p-1 text-green1 font-semibold mt-2'>
                    <div >Marketing</div>
                    <div>(18)</div>
                </div>
                <div className='flex justify-between border-b-2 border-dashed p-1 text-green1 font-semibold mt-2'>
                    <div >Finance</div>
                    <div>(15)</div>
                </div>
                <div className='flex justify-between  p-1 text-green1 font-semibold mt-2'>
                    <div >Campeign</div>
                    <div>(21)</div>
                </div>
            </div>

        </div>
    )
}

export default Categories