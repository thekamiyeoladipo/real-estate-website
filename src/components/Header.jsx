import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import Navbar from './Navbar'
import { gsap } from 'gsap'

const Header = () => {
  const headerRef = useRef(null)
  const headingRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    // Create a timeline for header animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Background image zoom effect
    tl.fromTo(headerRef.current, 
      { scale: 1.1, opacity: 0.8 }, 
      { scale: 1, opacity: 1, duration: 1.5 }
    )

    // Heading animation
    tl.fromTo(headingRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      "-=1"
    )

    // Buttons animation
    tl.fromTo(buttonsRef.current.children, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 }, 
      "-=0.6"
    )
  }, [])

  return (
    <div 
      ref={headerRef}
      className='min-h-screen w-full bg-center flex
      items-center mb-4 overflow-hidden bg-cover bg-no-repeat'
      style={{backgroundImage: `url(${assets.header_img})`}}
      id='Header'>
        <Navbar />
        <div className='container text-center mx-auto py-4
          px-6 md:px-20 lg:px-32 text-white'>
            <h2 
              ref={headingRef}
              className='text-white text-5xl font-bold
              sm:text-6xl md:text-[82px] inline-block max-w-3xl
              pt-20'>
                Find Your Dream Home
            </h2>
          <div 
            ref={buttonsRef}
            className='space-x-4 mt-16'>
            <a href="#Projects" className='border border-white
            px-8 py-3 rounded hover:bg-white hover:text-black
            transition-all duration-300'>Projects</a>
            <a href="#Contact" className='border border-white
            px-8 py-3 rounded hover:bg-white hover:text-black
            transition-all duration-300'>Contact us</a>
          </div>
        </div>
    </div>
  ) 
}

export default Header
