import React, { useState } from 'react'
import { assets, projectsData }from '../assets/assets'

const Projects = () => {
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
      <div className='flex justify-end items-centermb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Projects Slider Container */}
      <div className='overflow-hidden'>
    <div className='flex gap-4 transition-transform duration-300 ease-in-out'>
     {projectsData.map((project, index) => (
      <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4 mb-8">
        <img src={project.image} alt={project.title} />
      </div>
     ))}
    </div>
      </div>

    </div>
  );
}

export default Projects