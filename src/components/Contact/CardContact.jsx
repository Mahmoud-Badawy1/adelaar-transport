import React from 'react'

function CardContact() {
  return (
<div className="flex flex-wrap justify-center mt-28">
<div className='w-64 bg-white rounded border m-5 ' >
        <div className='bg-gray1 h-44 w-100/2'></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <img src="/images/IconCardCantact1.svg" alt="IconCardCantact1" className='w-20' /></div>
        </div>
        <div className='text-center p-2'>
        <div className='font-bold'>Send Us Mail</div>
        <div className='font-sans text-text1'>Logisco.care@email.com</div>
        <div className='font-sans text-text1'>info.logisco@email.com</div>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5 '>
        <div className='bg-gray1 h-44 w-100/2'></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <img src="/images/IconCardCantact2.svg" alt="IconCardCantact2" className='w-20' /></div>
        </div>
        <div className='text-center'>
        <div className='font-bold'>Call Us Anytime</div>
        <div className='font-sans text-text1'>(+987) 654 321 228 11</div>
        <div className='font-sans text-text1'>(+987) 654 321 228 14</div>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5'>
        <div className='bg-gray1 h-44 w-100/2'></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <img src="/images/IconCardCantact3.svg" alt="IconCardCantact3" className='w-20' /></div>
        </div>
        <div className='text-center'>
        <div className='font-bold'>Visit Our Office</div>
        <div className='font-sans text-text1'>28 Street, New York City </div>
        <div className='font-sans text-text1'>Untes States of America</div>
        </div>
    </div>
</div>
  )
}

export default CardContact