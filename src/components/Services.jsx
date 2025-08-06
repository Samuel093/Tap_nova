import React, { useState } from "react";
import { motion } from "framer-motion";
import { services } from "../constants";

const Services = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
        
  //     } catch (error) {
  //       console.error(error.message)
        
  //     }
  //   }
  // },[])
  
  return (
    <section id="services" className="py-20 px-6 scroll-mt-24 bg-white
     dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800
         dark:text-white">
          Our Services
        </h2>
        <p className="mt-6 font-thin text-2xl text-gray-900
         dark:text-gray-400 max-w-xl mr-5">
          Technology Solutions That Drive Growth.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2
       md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
               initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileTap={{ scale: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow p-6"
          >
            <img src={service.image} className="mb-4"/>
            <h3
              className="text-xl font-semibold text-gray-800
             dark:text-white mb-2"
            >
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>

            <div className="mt-5">
          <a href={`#${service.id}`} className="text-blue-600 font-medium hover:underline">
              Learn more →
            </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
