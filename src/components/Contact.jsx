import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the Contact section animations
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

    // Form fields animation - staggered
    tl.fromTo([nameInputRef.current, emailInputRef.current], 
      { x: -30, opacity: 0 }, 
      { x: 0, opacity: 1, stagger: 0.2, duration: 0.6, ease: "power2.out" }, 
      "-=0.2"
    );

    // Message textarea animation
    tl.fromTo(messageRef.current, 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 
      "-=0.3"
    );

    // Button animation
    tl.fromTo(buttonRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, 
      "-=0.2"
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  // Function to handle input focus animation
  const handleInputFocus = (inputRef, isFocused) => {
    if (isFocused) {
      gsap.to(inputRef, {
        borderColor: "#3b82f6", // blue-500
        boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.3)",
        duration: 0.3
      });
    } else {
      gsap.to(inputRef, {
        borderColor: "#d1d5db", // gray-300
        boxShadow: "none",
        duration: 0.3
      });
    }
  };

  // Function to animate button on hover
  const handleButtonHover = (isHover) => {
    if (isHover) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        backgroundColor: "#2563eb", // blue-700
        duration: 0.3,
        ease: "power1.out"
      });
    } else {
      gsap.to(buttonRef.current, {
        scale: 1,
        backgroundColor: "#3b82f6", // blue-600
        duration: 0.3,
        ease: "power1.out"
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full 
      overflow-hidden"
    >
      <h1
        ref={headingRef}
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
        ref={subheadingRef}
        className="text-center text-gray-500
        mb-8 max-w-80 mx-auto"
      >
        Ready to Make a Move? Let's Connect and Find Your Dream Property Together!
      </p>

      <form 
        ref={formRef}
        className='max-w-2xl mx-auto text-gray-600 pt-8'
      >
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left mb-8 md:pl-4'>
            Your Name
            <input 
              ref={nameInputRef}
              className='w-full border border-gray-300
              py-3 px-4 mt-2 rounded-sm transition-all duration-300' 
              type="text"
              placeholder='Your name' 
              name="Name" 
              required
              onFocus={() => handleInputFocus(nameInputRef.current, true)}
              onBlur={() => handleInputFocus(nameInputRef.current, false)}
            />
          </div>

          <div className='w-full md:w-1/2 text-left mb-8 md:pl-4'>
            Your Email
            <input 
              ref={emailInputRef}
              className='w-full border border-gray-300
              py-3 px-4 mt-2 rounded-sm transition-all duration-300' 
              type="email"
              placeholder='Your email' 
              name="Email" 
              required
              onFocus={() => handleInputFocus(emailInputRef.current, true)}
              onBlur={() => handleInputFocus(emailInputRef.current, false)}
            />
          </div>
        </div>

        <div className='my-6 text-left'>
          Message
          <textarea 
            ref={messageRef}
            className='w-full border border-gray-300
            py-3 px-4 mt-2 h-48 resize-none rounded-sm transition-all duration-300'
            name='Message' 
            placeholder='Message' 
            required
            onFocus={() => handleInputFocus(messageRef.current, true)}
            onBlur={() => handleInputFocus(messageRef.current, false)}
          ></textarea>
        </div>

        <button 
          ref={buttonRef}
          className='rounded-md bg-blue-600 text-white py-2 px-12 mb-10 transition-all duration-300'
          onMouseEnter={() => handleButtonHover(true)}
          onMouseLeave={() => handleButtonHover(false)}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact
