
import React from 'react'
import TsComponent from './TsComponent'

const Testimonial = () => {
  return (
    <section className="py-[75px]">
    <div className="max-container w-full mx-auto px-5">
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Whats Our patient say</h2>
        <p className="text__para text-center">
          world class health care for everyone.our health System offers
          unmatched ,expert health care.
        </p>
      </div>
      <TsComponent/>
    </div>
  </section>
  )
}

export default Testimonial