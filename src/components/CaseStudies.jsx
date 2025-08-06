// src/components/CaseStudies.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudies } from '../constants/index';



export default function CaseStudies() {
  return (
    <motion.section
      id="case-studies"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-50 scroll-mt-24 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm text-blue-600 font-medium">Case Studies</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Success Stories
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          See how we've helped businesses across industries achieve their digital transformation goals.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white dark:bg-gray-800 shadow-sm overflow-hidden"
          >
            <motion.img
              src={study.image}
              alt={study.title}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full px-3 py-1 mb-2">
                {study.tag}
              </span>
              <h3 className="font-semibold text-gray-800 dark:text-white text-lg">
                {study.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium text-gray-700 dark:text-gray-200">Client:</span> <span className="text-blue-600 dark:text-blue-400">{study.client}</span>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {study.description}
              </p>
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="text-sm font-medium text-blue-600 hover:underline flex items-center gap-1"
              >
                Read case study <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-1 text-blue-600 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-300 text-sm font-medium px-5 py-2 rounded-full"
        >
          View All Case Studies <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}