import React from 'react'
import {assets, testimonialsData} from '../assets/assets'

const Testimonials = () => {
  return (
    <div id='Testimonials'
    className="container mx-auto overflow-hidden pt-20
    py-4 px-6 md:px-8 lg:px-16 w-full">
     <h1
        className="text-2xl font-bold mb-2
        sm:text-4xl text-center"
      >
        Customer <span
          className="underline underline-offset-4
          decoration-1 under font-light"
        > Testimonials
        </span>
      </h1>
      <p
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Real Stories from Those Who Found Home With Us
      </p>

      <div className='flex flex-wrap justify-center gap-8'>
     {testimonialsData.map((testimonial, index) => (
      <div key={index} className="max-w-[340px] border shadow-lg
      text-center rounded px-8 py-12">
        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
        <h2 className='font-medium text-lg text-gray-700 mb-2'>{testimonial.name}</h2>
        <p className='text-gray-600 mb-4 text-sm'>{testimonial.title}</p>
        <div className='flex justify-center mb-4 gap-1 text-red-500'>
          {Array.from({ length: testimonial.rating }, (item, index) => 
            <img key={index} src={assets.star_icon} alt="Star" className='inline-block w-5 h-5' />
          )}
        </div>
        <p className='text-gray-600'>{testimonial.text}</p>
      </div>
     ))}
      </div>

    </div>
  )
}

export default Testimonials