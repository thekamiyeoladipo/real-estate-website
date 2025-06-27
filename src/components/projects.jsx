import React, { useState, useEffect, useRef } from 'react'
import { assets, projectsData } from '../assets/assets'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonsRef = useRef(null);
  const sliderRef = useRef(null);

  // Handle responsive behavior
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(projectsData.length);  
      } else {
        setCardsToShow(1); 
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Scroll animations
  useEffect(() => {
    // Create a timeline for the Projects section animations
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

    // Buttons animation
    tl.fromTo(buttonsRef.current.children, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, stagger: 0.1, duration: 0.5, ease: "back.out(1.7)" }, 
      "-=0.3"
    );

    // Initial cards animation
    tl.fromTo(sliderRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power2.out" }, 
      "-=0.4"
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  // Function to handle next project with GSAP animation
  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = (currentIndex + 1) % projectsData.length;

    // Animate the slider transition
    gsap.to(sliderRef.current, {
      x: `-${newIndex * (100 / cardsToShow)}%`,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }
    });
  };

  // Function to handle previous project with GSAP animation
  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const newIndex = currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;

    // Animate the slider transition
    gsap.to(sliderRef.current, {
      x: `-${newIndex * (100 / cardsToShow)}%`,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentIndex(newIndex);
        setIsAnimating(false);
      }
    });
  };

  // Function to handle card hover animation
  const handleCardHover = (index, isEnter) => {
    const card = sliderRef.current.children[index];
    const infoBox = card.querySelector('.info-box');

    if (isEnter) {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
      gsap.to(infoBox, { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", duration: 0.3 });
    } else {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
      gsap.to(infoBox, { y: 0, boxShadow: "0 4px 6px rgba(0,0,0,0.1)", duration: 0.3 });
    }
  };

  return (
    <div
      ref={sectionRef}
      id="Projects"
      className="container mx-auto overflow-hidden pt-20
      py-4 px-6 md:px-8 lg:px-16 w-full"
    >
      <h1
        ref={headingRef}
        className="text-2xl font-bold mb-2
        sm:text-4xl text-center"
      >
        Projects{" "}
        <span
          className="underline underline-offset-4
          decoration-1 under font-light"
        >
          Completed
        </span>
      </h1>
      <p
        ref={subheadingRef}
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Crafting Spaces, Building legacies-Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div ref={buttonsRef} className='flex justify-end items-center mb-8'>
        <button 
          onClick={prevProject} 
          className='p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors' 
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button 
          onClick={nextProject} 
          className='p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors' 
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects Slider Container */}
      <div className='overflow-hidden'>
        <div 
          ref={sliderRef}
          className='flex gap-4'
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="relative flex-shrink-0 w-full sm:w-1/4 mb-8 transition-all duration-300"
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-auto mb-14 rounded-sm' 
              />
              <div className='absolute bottom-5 left-0 right-0 flex justify-center'>
                <div className="info-box inline-block bg-white w-3/4 px-4 py-2 shadow-md transition-all duration-300">
                  <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                  <p>{project.price}<span className='p-x-1'> | </span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects
