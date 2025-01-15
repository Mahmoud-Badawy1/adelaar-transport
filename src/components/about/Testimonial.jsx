import React from 'react'
import TestimonialSection from './TestimonialSection'

function Testimonial() {
  return (
    <>
    <section
    className="relative py-96 mt-14 bg-cover bg-center"
    style={{ backgroundImage: "url('/images/Testimonial.svg')" }}
  >
    <div className="text-center  " style={{marginTop:"-21rem"}}>
      <div className="inline-block bg-orange rounded-full p-3">
        <span className="text-white text-sm uppercase font-bold">
           TESTIMONIAL
        </span>
      </div>
      <h2 className="text-4xl font-bold text-green3 mt-4">
      What our clients say about us
      </h2>
    </div>
  </section>
  <div style={{marginTop:"-35rem"}}>
  <TestimonialSection />

  </div>

    </>
  )
}

export default Testimonial