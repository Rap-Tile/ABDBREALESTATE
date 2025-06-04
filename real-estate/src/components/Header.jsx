import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

SwiperCore.use([Autoplay]);

const images = [
  "/header_img9.webp",
  "/header_img8.webp",
  "/header_img.png"
];

const Header = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden' id="Header">
      {/* Navbar Layer */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10"></div>

      {/* Text and Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute z-20 top-0 left-0 w-full h-full text-white px-6 md:px-20 lg:px-32 flex flex-col items-center justify-center text-center"
      >
        <div>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] font-semibold max-w-3xl'>
            Invest in Land that fits your dreams
          </h2>

          <div className="space-x-6 mt-10">
            <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Header;
