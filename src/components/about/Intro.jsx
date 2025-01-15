import React from 'react'

function Intro({ title }) {
  return (
    <section className="bg-green3 text-white relative  h-96 flex items-center ">
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 space-y-4  flex flex-col font-semibold pl-60">
        <div className='text-5xl '>{title}</div>
        <div className='text-1xl italic uppercase'>home / pages / <span className='text-orange'>{title}</span></div>
      </div>
    </section>
  )
}

export default Intro