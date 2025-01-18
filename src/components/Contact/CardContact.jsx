import React from 'react'
import Image from 'next/image'
function CardContact() {
  return (
<div className="flex flex-wrap justify-center mt-28">
<div className='w-64 bg-white rounded border m-5 ' >
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('images/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/images/IconCardCantact1.svg" alt="IconCardCantact1" className='w-20' /></div>
        </div>
        <div className='text-center pb-5'>
        <div className='font-bold'>
        Stuur ons een e-mail</div>
        <div className='font-sans text-text1'>Logisco.care@email.com</div>
        <div className='font-sans text-text1'>info.logisco@email.com</div>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5 '>
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('images/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/images/IconCardCantact2.svg" alt="IconCardCantact2" className='w-20' /></div>
        </div>
        <div className='text-center gap-2'>
        <div className='font-bold'>Bel ons op elk moment</div>
        <div className='font-sans text-text1'>(+987) 654 321 228 11</div>
        <div className='font-sans text-text1'>(+987) 654 321 228 14</div>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5'>
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('images/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/images/IconCardCantact3.svg" alt="IconCardCantact3" className='w-20' /></div>
        </div>
        <div className='text-center'>
        <div className='font-bold'>Bezoek ons kantoor</div>
        <div className='font-sans text-text1'>28 Straat, New York City </div>
        <div className='font-sans text-text1'>Verenigde Staten van Amerika</div>
        </div>
    </div>
</div>
  )
}

export default CardContact