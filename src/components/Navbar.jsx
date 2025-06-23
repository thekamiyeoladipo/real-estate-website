import React from 'react'
import { assets }from '../assets/assets'
import { gsap } from "gsap";


const Navbar = () => {
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
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-4 py-2 rounded-md">
          Sign Up
        </button>
        <img className="md:hidden w-7 h-7" src={assets.menu_icon} alt="" />
      </div>
      {/*  mobile menu */}
      <div className="
      md:hidden fixed top-0 left-0 bottom-0 
      overflow-hidden  w-full h-screen bg-white 
      transition-all duration-300">
        <div>
          <img src={assets.cross_icon} alt="" />
        </div>
       
        <ul className="flex flex-col items-center justify-center h-full">
          <a
            href="#Header"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#About"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#Projects"
            className="
          px-4 py-2 rounded-full inline-block
          cursor-pointer hover:text-gray-400"
          >
            Projects
          </a>
          <a
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

