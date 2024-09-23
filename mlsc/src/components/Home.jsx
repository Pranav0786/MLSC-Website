import React from 'react';
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { useState, useEffect } from 'react';
import logo from '../assests/mlscPhotos/logo1.png';

import TextMotion from './TextMotion';

const Home = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
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

  // Define the phrase with conditional line breaks for mobile
  

  
  return (

    <div className='flex flex-col mx-auto lg:flex-row items-center justify-center 
                lg:justify-between gap-6 w-full py-6 lg:py-12
                mt-28 mb-12 '>

      {/* Left Section */}
      <div className='w-full lg:w-[70%] text-center lg:text-left'>
        <p className='font-bold mb-6'>
          {
            isMobile && 
            <TextMotion phrase={"Microsoft Learn  "} />
          }
          {
            isMobile && 
            <div className='h-2'></div>
          }
          {
            isMobile && 
            <TextMotion phrase={"Students' Club "} isDelay={true} />
          }
          {
            !isMobile && 
            <TextMotion phrase={" Microsoft Learn Students' Club "} />
          }

        </p>


        <h2 className='text-2xl lg:text-3xl mb-6 text-yellow-500'>Be a force for good !!!</h2>

        <div className='flex items-center justify-center lg:justify-start mt-8 space-x-6 text-2xl sm:text-3xl lg:text-4xl'>
          <a 
            href="https://teams.microsoft.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300'
          >
            <BiLogoMicrosoftTeams className='text-white' />
          </a>
          <a 
            href="https://www.linkedin.com/company/wce-mlsc/" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300'
          >
            <FaLinkedin className='text-white' />
          </a>
          <a 
            href="https://discord.gg/pYFknUjw" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300'
          >
            <FaDiscord className='text-white' />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className='p-2 rounded-full bg-black hover:bg-gray-800 transition-all duration-300'
          >
            <FaGithubSquare className='text-white' />
          </a>
        </div>           
      </div>

      {/* Image - Only visible on large screens */}
      <div 
      data-aos= "zoom-in-down"
      className="w-3/4 lg:w-[30%] lg:block relative transform hover:scale-105 transition-all duration-300 ease-in-out">
        <img
          alt="mlsc"
          src={logo}
          className="w-full"
        />
      </div>

    </div>
  );
}

export default Home;
