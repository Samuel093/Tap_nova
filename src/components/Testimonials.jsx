import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '../constants/index';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 scroll-mt-24 bg-gray-50 dark:bg-gray-950 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Real feedback from real clients who trust TapNova.
        </p>
      </motion.div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full max-w-3xl px-2 sm:px-0 mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="w-full px-1 sm:px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 max-w-full break-words"
              >
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 italic">
                  "{testimonial.feedback}"
                </p>
                <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt="testimonial"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>
                    <strong className="block">{testimonial.name}</strong>
                    <span className="text-xs block">{testimonial.role}</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
