import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the About section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    });

    // Heading animation
    tl.fromTo(headingRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
    );

    // Subheading animation
    tl.fromTo(subheadingRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 
      "-=0.4"
    );

    // Image animation
    tl.fromTo(imageRef.current, 
      { x: -50, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }, 
      "-=0.3"
    );

    // Stats animation - staggered
    tl.fromTo(statsRef.current.children, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "back.out(1.2)" }, 
      "-=0.5"
    );

    // Paragraph animation
    tl.fromTo(paragraphRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.3"
    );

    // Button animation
    tl.fromTo(buttonRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, 
      "-=0.3"
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      id='About' 
      className='container mx-auto flex flex-col
      items-center justify-center p-14 md:px-20 lg:px-32 w-full
      overflow-hidden'
    >
      <h1 
        ref={headingRef}
        className='sm:text-4xl text-2xl font-bold mb-2'
      >
        About <span className='underline underline-offset-4 decoration-1
        under font-light'>Our brand</span>
      </h1>
      <p 
        ref={subheadingRef}
        className='text-center text-gray-500 mb-8 max-w-80'
      >
        Passionate about properties, Dedicated to your vision
      </p>

      <div className='flex flex-col md:flex-row items-center
      md:items-start md:gap-20'>
        <img 
          ref={imageRef}
          className='w-full md:w-1/2 max-w-lg' 
          src={assets.brand_img} 
          alt="Our Brand" 
        />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div 
            ref={statsRef}
            className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28"
          >
            <div className="stat-item">
              <p className='text-3xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <p className='text-3xl font-medium text-gray-800'>12+</p>
              <p>Projects completed</p>
            </div>
            <div className="stat-item">
              <p className='text-3xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="stat-item">
              <p className='text-3xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p 
            ref={paragraphRef}
            className='my-10 max-w-lg'
          >
            Lorem ipsum, the image used for the water and the
            bicycle cannot bear the burden of the thief that stole
            the excellence.
          </p>
          <button 
            ref={buttonRef}
            className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
