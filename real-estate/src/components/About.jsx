import React from 'react';
import brandImg from '../assets/brand_img.png';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto pt-10 px-4 sm:px-6 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-6 text-center'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </h1>

      <p className='text-gray-500 max-w-xs sm:max-w-sm text-center mx-auto mb-8'>
        Passionate About Properties, Dedicated to your Vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
        <img
          src={brandImg}
          alt="Our brand's visual identity"
          aria-label="About our brand image"
          className='w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto'
        />

        <div className="flex flex-col items-center md:items-start text-gray-600 w-full md:w-1/2">
          <div className='grid grid-cols-2 gap-6 w-full'>
            <div>
              <p className='text-3xl font-semibold text-gray-800'>10+</p>
              <p className='text-sm'>Years of Excellence</p>
            </div>
            <div>
              <p className='text-3xl font-semibold text-gray-800'>12+</p>
              <p className='text-sm'>Projects Completed</p>
            </div>
            <div>
              <p className='text-3xl font-semibold text-gray-800'>20+</p>
              <p className='text-sm'>Min Sq. Yd. Delivered</p>
            </div>
            <div>
              <p className='text-3xl font-semibold text-gray-800'>25+</p>
              <p className='text-sm'>Ongoing Projects</p>
            </div>
          </div>

          <p className='mt-8 mb-6 text-center md:text-left max-w-md'>
            At ABDB REAL TECH, we believe in building more than just structures—we build trust, deliver excellence, and shape dreams into reality with each project.
          </p>

          <button className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300'>
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
