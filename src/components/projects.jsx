import React, { useState } from 'react'
import { assets, projectsData }from '../assets/assets'
import { useEffect } from 'react';

const Projects = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] = useState(1);

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

// Function to handle next project
const nextProject = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
}
const prevProject = () => {
  setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
}

  return (
    <div
      id="Projects"
      className="container mx-auto overflow-hidden pt-20
    py-4 px-6 md:px-8 lg:px-16 w-full"
    >
      <h1
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
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Crafting Spaces, Building legacies-Explore Our Portfoilio
      </p>
      {/* slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects Slider Container */}
      <div className='overflow-hidden'>
    <div className='flex gap-4 transition-transform duration-300 ease-in-out'
    style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
     {projectsData.map((project, index) => (
      <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 mb-8">
        <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
        <div className='absolute bottom-5 left-0 right-0 justify-center'>
          <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
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