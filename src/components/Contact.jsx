import React from 'react'

const Contact = () => {
  return (
    <div
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full 
    overflow-hidden"
    >
      <h1
        className="text-2xl font-bold mb-2
        sm:text-4xl text-center"
      >
        Get in Touch
        <span
          className="underline underline-offset-4
          decoration-1 under font-light"
        >
          {" "}
          With Us
        </span>
      </h1>
      <p
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Ready to Make a Move? Let's Connect and Find Your Dream Property Together!
      </p>

      <form action="" className='max-w-2xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left mb-8 md:pl-4'>
                Your Name
                <input 
                className='w-full border border-gray-300
                py-3 px-4 mt-2' 
                type="text"
                 placeholder='Your name' name="Name" id="" 
                 required
                 stytle={{outline: 'none', border: 'none'}} 
                 />
                 
            </div>

             <div className='w-full md:w-1/2 text-left mb-8 md:pl-4'>
                Your Email
                <input 
                className='w-full border border-gray-300
                py-3 px-4 mt-2' 
                type="text"
                 placeholder='Your email' name="Email" id="" 
                 required
                 stytle={{outline: 'none', border: 'none'}} 
                 />
                 
            </div>
            
        </div>

        <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300
            py-3 px-4 mt-2 h-48 resize-none'
            name='Message' placeholder='Message' required></textarea>
        </div>

        <button className='rounded-md bg-blue-600 text-white py-2 px-12 mb-10'>
            Send Mesage
        </button>
      </form>
    </div>
  );
}

export default Contact