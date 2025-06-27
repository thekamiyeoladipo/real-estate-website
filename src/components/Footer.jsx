import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div
    id='Footer'
    className='p-10  px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-center'>

        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src={assets.logo_dark} alt="" />
          <p className='text-gray-400 mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0' >
            <h2 className='text-white text-lg font-semibold mb-4'>Company</h2>
            <ul className='text-gray-400'>
                <li className='mb-2'><a href="#Header">Home</a></li>
                <li className='mb-2'><a href="#About">About</a></li>
                <li className='mb-2'><a href="#Projects">Projects</a></li>
                <li className='mb-2'><a href="#Testimonials">Testimonials</a></li>
                <li className='mb-2'><a href="#Contact">Contact Us</a></li>
            </ul>
        </div>

        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4'>Subscribe to Our Newsletter</h3>
        <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div>
            <form className='flex flex-col md:flex-row gap-4'>
                <input
                type="email"
                placeholder='Enter your email'
                className='p-2 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
                >
                Subscribe
                </button>
            </form>
        </div>

        </div>
        
      </div>
      <div className='mt-10 border-t border-gray-800 pt-6 text-center'>
            <p className='text-gray-500 text-sm mt-8'>
                &copy; {new Date().getFullYear()} Real Estate Company. All rights reserved.
            </p>
           
        </div>
    </div>
  );
}

export default Footer