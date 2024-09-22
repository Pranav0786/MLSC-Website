import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Card from '../components/Card';
import Contact from '../components/Contact';
// import Contact from '../components/Contact';

const Body = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-x-hidden
                  bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      
      <div className='flex-grow lg:w-9/12 sm:w-full max-w-maxContent mx-auto'>
        <Home />
        <About />
        <Card />
        <Contact />
      </div>
    </div>
  );
};

export default Body;
