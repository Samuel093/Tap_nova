
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}  
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white
       px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
    >
      <FaArrowUp/> 
    </button>
  );
};

export default ScrollToTopButton;
