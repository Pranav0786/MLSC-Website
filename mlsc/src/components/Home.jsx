import React from 'react';
import { TypeAnimation } from 'react-type-animation'; 
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import logo from '../assests/mlscPhotos/logo1.png';

const Home = () => {
  return (
    <div className='flex flex-col mx-auto lg:flex-row items-center justify-center lg:justify-between gap-6 w-full text-white py-6 lg:py-12'>
      
      {/* Left Section */}
      <div className='w-full lg:w-[55%] text-center lg:text-left'>
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-6'>
          <TypeAnimation
            sequence={[
              '',
              1000,
              'Microsoft',
              1000,
              'Microsoft Learn',
              1000,
              'Microsoft Learn Student',
              1000,
              'Microsoft Learn Student Club',
              1000,
            ]}
            speed={20}
            style={{ fontSize: '1.5em', marginBottom: '5px', lineHeight: '1.5', marginTop: '5px' }}
            repeat={Infinity}  
            omitDeletionAnimation={true}
          />
        </h1>
        <h2 className='text-xl sm:text-2xl lg:text-3xl mb-6'>Be a force for good !!!</h2>

        <div className='flex items-center justify-center lg:justify-start mt-8 space-x-6 text-2xl sm:text-3xl lg:text-4xl'>
          <div className='p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300'>
            <BiLogoMicrosoftTeams className='text-white' />
          </div>
          <div className='p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300'>
            <FaLinkedin className='text-white' />
          </div>
          <div className='p-2 rounded-full bg-gray-900 hover:bg-gray-800 transition-all duration-300'>
            <FaDiscord className='text-white' />
          </div>
          <div className='p-2 rounded-full bg-black hover:bg-gray-800 transition-all duration-300'>
            <FaGithubSquare className='text-white' />
          </div>
        </div>
      </div>

      {/* Image - Only visible on large screens */}
      <div className="hidden lg:w-[30%] lg:block relative transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-in-out">
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
