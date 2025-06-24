import React from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'

const Header = () => {

  return (
    <div className='min-h-screen w-full bg-center flex
    items-center mb-4 overflow-hidden bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${assets.header_img})`}}
    id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4
          px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-white text-5xl font-bold
            sm:text-6xl md:text-[82px] inline-block max-w-3xl
            pt-20'>
                Find Your Dream Home
            </h2>
          <div className='space-x-4 mt-16 '>
            <a href="#" className='border border-white
            px-8 py-3 rounded hover:bg-white hover:text-black
            transition-all duration-300'>Projects</a>
            <a href="#" className='border border-white
            px-8 py-3 rounded hover:bg-white hover:text-black
            transition-all duration-300'>Contact us</a>
          </div>
        </div>
    </div>
  ) 
}

export default Header
