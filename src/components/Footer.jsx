import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const descriptionRef = useRef(null);
  const companyTitleRef = useRef(null);
  const linksRef = useRef(null);
  const newsletterTitleRef = useRef(null);
  const newsletterDescRef = useRef(null);
  const formRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the Footer section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Logo animation
    tl.fromTo(logoRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Description animation
    tl.fromTo(descriptionRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    );

    // Company title animation
    tl.fromTo(companyTitleRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    );

    // Links animation - staggered
    tl.fromTo(linksRef.current.children, 
      { x: -20, opacity: 0 }, 
      { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }, 
      "-=0.4"
    );

    // Newsletter title animation
    tl.fromTo(newsletterTitleRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    );

    // Newsletter description animation
    tl.fromTo(newsletterDescRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    );

    // Form animation
    tl.fromTo(formRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    );

    // Copyright animation
    tl.fromTo(copyrightRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.2"
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  // Function to handle link hover animation
  const handleLinkHover = (e, isEnter) => {
    if (isEnter) {
      gsap.to(e.target, {
        color: "#ffffff",
        x: 5,
        duration: 0.3,
        ease: "power1.out"
      });
    } else {
      gsap.to(e.target, {
        color: "#9ca3af", // gray-400
        x: 0,
        duration: 0.3,
        ease: "power1.out"
      });
    }
  };

  // Function to handle input focus animation
  const handleInputFocus = (e, isFocused) => {
    if (isFocused) {
      gsap.to(e.target, {
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
        duration: 0.3
      });
    } else {
      gsap.to(e.target, {
        boxShadow: "none",
        duration: 0.3
      });
    }
  };

  // Function to handle button hover animation
  const handleButtonHover = (e, isHover) => {
    if (isHover) {
      gsap.to(e.target, {
        backgroundColor: "#1d4ed8", // blue-800
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
      });
    } else {
      gsap.to(e.target, {
        backgroundColor: "#2563eb", // blue-700
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      id='Footer'
      className='p-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
      overflow-hidden'
    >
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-center'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <div ref={logoRef}>
            <img src={assets.logo_dark} alt="Logo" className="transform hover:scale-105 transition-transform duration-300" />
          </div>
          <p 
            ref={descriptionRef}
            className='text-gray-400 mt-4'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h2 
            ref={companyTitleRef}
            className='text-white text-lg font-semibold mb-4'
          >
            Company
          </h2>
          <ul 
            ref={linksRef}
            className='text-gray-400'
          >
            <li className='mb-2'>
              <a 
                href="#Header" 
                className="hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Home
              </a>
            </li>
            <li className='mb-2'>
              <a 
                href="#About" 
                className="hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                About
              </a>
            </li>
            <li className='mb-2'>
              <a 
                href="#Projects" 
                className="hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Projects
              </a>
            </li>
            <li className='mb-2'>
              <a 
                href="#Testimonials" 
                className="hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Testimonials
              </a>
            </li>
            <li className='mb-2'>
              <a 
                href="#Contact" 
                className="hover:text-white transition-colors duration-300"
                onMouseEnter={(e) => handleLinkHover(e, true)}
                onMouseLeave={(e) => handleLinkHover(e, false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className='w-full md:w-1/3'>
          <h3 
            ref={newsletterTitleRef}
            className='text-white text-lg font-bold mb-4'
          >
            Subscribe to Our Newsletter
          </h3>
          <p 
            ref={newsletterDescRef}
            className='text-gray-400 mb-4 max-w-80'
          >
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div>
            <form 
              ref={formRef}
              className='flex flex-col md:flex-row gap-4'
            >
              <input
                type="email"
                placeholder='Enter your email'
                className='p-2 rounded bg-gray-800 text-gray-200 focus:outline-none transition-all duration-300'
                onFocus={(e) => handleInputFocus(e, true)}
                onBlur={(e) => handleInputFocus(e, false)}
              />
              <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300'
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='mt-10 border-t border-gray-800 pt-6 text-center'>
        <p 
          ref={copyrightRef}
          className='text-gray-500 text-sm mt-8'
        >
          &copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer
