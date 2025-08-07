import React from 'react'
import InfiniteLogoCarousel from "./InfiniteLogoCarousel";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-14 md:px-8 md:py-22 lg:py-26 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl md:max-w-2xl lg:max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-10 mb-6 text-gray-800 dark:text-white leading-tight md:leading-snug break-words">
            Empowering Brands With Innovative Solutions
          </h1>
          <p className="'max-w-130px mt-6 text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8">
            TapNova helps businesses grow with technology, creativity, and strategic excellence.
          </p>
          <a
            href="#services"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
          >
            Explore Services
          </a>

          
        </motion.div>

          {/* Infinite Logo Carousel */}
        <div className="w-full overflow-x-hidden mt-10 ">
          <InfiniteLogoCarousel />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
