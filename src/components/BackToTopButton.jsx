import React, { useState } from 'react'
import { useEffect } from 'react'

const BackToTopButton = () => {
const [isVisible, setIsVisible] = useState(false);

const toggleVisibility = () => {
    if (window.scrollY > 100) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
}, []);

  return (
    <div>
        isVisible && (
<button onClick={scrollToTop}
className='z-50 fixed bottom-6 right-6 bg-black text-white p-3 rounded shadow-lg transition-opacity duration-300 ease-in-out'
aria-label='Back to Top'>
     ↑
</button>
        )
    </div>
  );
};

export default BackToTopButton