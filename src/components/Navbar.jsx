import React, { useState, useRef, useEffect } from 'react'
import { assets } from '../assets/assets'
import { gsap } from "gsap";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);
  const signUpRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileMenuItemsRef = useRef(null);

  // Initial animation for navbar elements
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // Logo animation
    tl.fromTo(logoRef.current, 
      { y: -20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6 }
    );

    // Nav items animation
    if (navItemsRef.current && navItemsRef.current.children.length) {
      tl.fromTo(navItemsRef.current.children, 
        { y: -20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, 
        "-=0.3"
      );
    }

    // Sign up button animation
    if (signUpRef.current) {
      tl.fromTo(signUpRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.5 }, 
        "-=0.3"
      );
    }
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';

      // Animate mobile menu opening
      gsap.to(mobileMenuRef.current, {
        width: '100%',
        height: '100vh',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate mobile menu items
      gsap.fromTo(mobileMenuItemsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'auto';

      // Only animate if the ref exists (not on initial render)
      if (mobileMenuRef.current) {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            gsap.set(mobileMenuRef.current, { width: 0, height: 0 });
          }
        });
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* desktop menu/Main navigation */}
      <div
        className="flex justify-between items-center container
      mx-auto px-6 py-4 md:px-20 lg:px-32 bg-transparent"
      >
        <img ref={logoRef} src={assets.logo} alt="Logo" />
        <ul ref={navItemsRef} className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button ref={signUpRef} className="hidden md:block bg-white px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
          Sign Up
        </button>
        <img 
          onClick={() => setShowMobileMenu(true)} 
          className="cursor-pointer md:hidden w-7 h-7" 
          src={assets.menu_icon} 
          alt="Menu" 
        />
      </div>

      {/* mobile menu */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden fixed top-0 left-0 bottom-0 
        overflow-hidden h-0 w-0 opacity-0 bg-white"
      >
        <div className='flex justify-end cursor-pointer p-6'>
          <img 
            onClick={() => setShowMobileMenu(false)} 
            src={assets.cross_icon} 
            className='w-6' 
            alt="Close" 
          />
        </div>

        <ul 
          ref={mobileMenuItemsRef}
          className="flex flex-col items-center justify-center h-full"
        >
          <a 
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block
            cursor-pointer hover:text-gray-400"
          >
            Home
          </a>
          <a 
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block
            cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a 
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block
            cursor-pointer hover:text-gray-400"
          >
            Projects
          </a>
          <a 
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block
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
