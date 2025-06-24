import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import gsap from 'gsap'

const Header = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Get all the span elements inside the heading
    const chars = headingRef.current.querySelectorAll('span');

    // Apply the stagger animation
    gsap.fromTo(chars, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.05, 
        duration: 0.8,
        ease: "power4.out"
      }
    );
  }, []);

  return (
    <div className='min-h-screen w-full bg-center flex
    items-center mb-4 overflow-hidden bg-cover bg-no-repeat'
    style={{backgroundImage: `url(${assets.header_img})`}}
    id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4
          px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-white text-6xl font-bold
            sm:text-6xl md:text-[82px] inline-block max-w-5xl
            pt-20' ref={headingRef}>
                {"Find Your Dream Home".split("").map((char, index) => (
                  <span key={index} style={{display: 'inline-block'}}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
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
