import React from 'react';
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { MdOutlineWhatsapp } from "react-icons/md";
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({ duration: 1000 });

    // Function to check the screen size and update isMobile
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener on mount
    window.addEventListener('resize', handleResize);
    // Check initial size
    handleResize();
    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='flex flex-col mx-auto lg:flex-row items-center justify-center 
                lg:justify-between gap-6 w-full py-6 lg:py-12
                mt-40 mb-12 '>

      {/* Left Section */}
      <div className='w-full lg:w-[70%] text-center flex flex-col xl:pl-5 lg:text-left'>
        {/* Typewriter effect for the heading */}
        <h1
          className='text-white mb-6 md:text-6xl font-sans text-3xl font-bold '
          data-aos="fade-up"
        >
          <Typewriter
            words={["Microsoft Learn Students' Club"]}
            loop={1}
            cursor
            cursorStyle=''
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <h2 
          data-aos="fade-up"
          className='text-2xl lg:text-3xl mb-6 text-yellow-500'>BE A FORCE FOR GOOD 
        </h2>

        <div 
          data-aos="fade-up"
          className='flex items-center justify-center lg:justify-start mt-5 space-x-6 text-2xl sm:text-3xl lg:text-4xl'>
          
          <a 
            href="https://www.linkedin.com/company/wce-mlsc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-800 hover:translate-x-1 transition-all duration-300'
          >
            <FaLinkedin className='text-white' />
          </a>
          <a 
            href="https://discord.gg/pYFknUjw" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-800 hover:translate-x-1 transition-all duration-300'
          >
            <FaDiscord className='text-white' />
          </a>
          <a 
            href="https://www.youtube.com/@WCEMLSC" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-800 hover:translate-x-1 transition-all duration-300'
          >
            <FaYoutube className='text-white' />
          </a>
          <a 
            href="https://chat.whatsapp.com/FYOmgQpITOsCPtd84Eme0x" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-800 hover:translate-x-1 transition-all duration-300'
          >
            <MdOutlineWhatsapp className='text-white' />
          </a>
        </div>           
      </div>
          
      <div className='h-2 xl:h-0'></div>

      
      <div 
        data-aos="fade-up"
        className="w-4/5 lg:w-[550px] lg:block relative transform ">
        <img
          alt="mlsc"
          src={"https://res.cloudinary.com/do7rdio94/image/upload/fl_preserve_transparency/v1727198864/MLSC%20Images/Screenshot_from_2024-09-24_22-54-25-removebg-preview_1_i7ncdi.jpg?_s=public-apps"}
          className="w-full hover:z-10 hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

    </div>
  );
}

export default Home;
