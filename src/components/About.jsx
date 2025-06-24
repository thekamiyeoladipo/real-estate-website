import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='About' className='container mx-auto flex flex-col
     items-center justify-center p-14 md:px-20 lg:px-32 w-full
     overflow-hidden'>
        <h1 className='sm:text-4xl text-2xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1
            under font-light'>Our brand</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80'>
            Passionate about properties, Dedicated to your vision
        </p>

        <div className='flex flex-col md:flex-row items-center
        md:items-start md:gap-20'>
            <img className='w-full md:w-1/2 max-w-lg:' src={assets.brand_img} alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    <div>
                        <p>10+</p>
                        <p>Years of Excellence</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default About