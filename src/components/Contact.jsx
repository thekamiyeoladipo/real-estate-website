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
    </div>
  );
}

export default Contact