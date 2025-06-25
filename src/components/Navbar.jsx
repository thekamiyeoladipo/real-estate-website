import React, { useState } from 'react'
import { assets }from '../assets/assets'
import { gsap } from "gsap";
import { useEffect } from 'react';


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if(showMobileMenu){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10 ">
      {/* desktop menu/Main navigation */}
      <div
        className="flex justify-between items-center container
      mx-auto px-6 py-4 md:px-20 lg:px-32 bg-transparent"
      >
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-4 py-2 rounded-md">
          Sign Up
        </button>
        <img onClick={() => setShowMobileMenu(true)} className="cursor-pointer md:hidden w-7 h-7" src={assets.menu_icon} alt="" />
      </div>
      {/*  mobile menu */}
      <div className={`
      ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}
      md:hidden top-0 left-0 bottom-0 
      overflow-hidden h-screen bg-white 
      transition-all duration-300`}>
        <div className='flex justify-end cursor-pointer p-6'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
       
        <ul className="flex flex-col items-center justify-center h-full">
          <a onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            Home
          </a>
          <a onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            Projects
          </a>
          <a onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar; 

