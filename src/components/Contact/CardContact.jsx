import React from 'react'
import Image from 'next/image'
function CardContact() {
  return (
<div className="flex flex-wrap justify-center mt-28">
<div className='w-64 bg-white rounded border m-5 ' >
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/IconCardCantact1.svg" alt="IconCardCantact1" className='w-20' /></div>
        </div>
        <div className='text-center pb-5'>
        <div className='font-bold'>
        Stuur ons een e-mail</div>
        <a href='mailto:sales@adelaartransport.nl' className='font-sans text-text1 block'>sales@adelaartransport.nl</a>
        <a href='mailto:info@adelaartransport.nl' className='font-sans text-text1 block'>info@adelaartransport.nl</a>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5 '>
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/IconCardCantact2.svg" alt="IconCardCantact2" className='w-20' /></div>
        </div>
        <div className='text-center gap-2'>
        <div className='font-bold'>Bel ons op elk moment</div>
        <a  href='tel:+31628964262' className='font-sans text-text1 block'>+31628964262</a>
        <a href='tel:+31630013015' className='font-sans text-text1 block'>+31630013015</a>
        </div>
    </div>
    <div className='w-64  bg-white rounded border m-5'>
        <div className='bg-gray1 h-44 w-100/2 bg-cover bg-center' style={{backgroundImage: `url('/contact.jpg')`}}></div>
        <div style={{marginTop:"-2.2rem" ,marginLeft:"5rem"}}>
           <div> <Image width={80} height={80} src="/IconCardCantact3.svg" alt="IconCardCantact3" className='w-20' /></div>
        </div>
        <div className='text-center'>
        <div className='font-bold'>Bezoek ons kantoor</div>
        <div className='font-sans text-text1'>De hazelaar 17, 6903BA Zevenaar</div>
        <div className='font-sans text-text1'>Nederland</div>
        </div>
    </div>
</div>
  )
}

export default CardContact