import React, { useEffect, useRef } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the Testimonials section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
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

    // Cards animation - staggered from bottom
    tl.fromTo(cardsContainerRef.current.children, 
      { y: 50, opacity: 0, scale: 0.95 }, 
      { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        stagger: 0.15, 
        duration: 0.7, 
        ease: "back.out(1.2)" 
      }, 
      "-=0.3"
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  // Function to handle card hover animation
  const handleCardHover = (index, isEnter) => {
    const card = cardsContainerRef.current.children[index];

    if (isEnter) {
      gsap.to(card, { 
        y: -10, 
        scale: 1.03, 
        boxShadow: "0 20px 25px rgba(0,0,0,0.1)", 
        duration: 0.3, 
        ease: "power2.out" 
      });
    } else {
      gsap.to(card, { 
        y: 0, 
        scale: 1, 
        boxShadow: "0 10px 15px rgba(0,0,0,0.1)", 
        duration: 0.3, 
        ease: "power2.out" 
      });
    }
  };

  // Function to animate stars when card is hovered
  const animateStars = (index, isEnter) => {
    const card = cardsContainerRef.current.children[index];
    const stars = card.querySelector('.stars-container').children;

    if (isEnter) {
      gsap.to(stars, {
        scale: 1.2,
        stagger: 0.05,
        duration: 0.3,
        ease: "back.out(2)",
        yoyo: true,
        repeat: 1
      });
    }
  };

  return (
    <div 
      ref={sectionRef}
      id='Testimonials'
      className="container mx-auto overflow-hidden pt-20
      py-4 px-6 md:px-8 lg:px-16 w-full"
    >
      <h1
        ref={headingRef}
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
        ref={subheadingRef}
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Real Stories from Those Who Found Home With Us
      </p>

      <div 
        ref={cardsContainerRef}
        className='flex flex-wrap justify-center gap-8'
      >
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="max-w-[340px] border shadow-lg
            text-center rounded px-8 py-12 transition-all duration-300"
            onMouseEnter={() => {
              handleCardHover(index, true);
              animateStars(index, true);
            }}
            onMouseLeave={() => handleCardHover(index, false)}
          >
            <img 
              className='w-20 h-20 rounded-full mx-auto mb-4 hover:scale-105 transition-transform duration-300' 
              src={testimonial.image} 
              alt={testimonial.alt} 
            />
            <h2 className='font-medium text-lg text-gray-700 mb-2'>{testimonial.name}</h2>
            <p className='text-gray-600 mb-4 text-sm'>{testimonial.title}</p>
            <div className='stars-container flex justify-center mb-4 gap-1 text-red-500'>
              {Array.from({ length: testimonial.rating }, (item, starIndex) => 
                <img 
                  key={starIndex} 
                  src={assets.star_icon} 
                  alt="Star" 
                  className='inline-block w-5 h-5' 
                />
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
