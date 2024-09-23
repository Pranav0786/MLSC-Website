import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Card from '../components/Card';
import Contact from '../components/Contact';
import UpComingEvents from '../components/UpComing/UpComingEvents';

const Body = () => {
  return (
    <div className='w-full h-full flex flex-col overflow-x-hidden
                  '>
      
      <div className='flex-grow lg:w-9/12 sm:w-full max-w-maxContent mx-auto'>
        <Home />
        {/* <UpComingEvents /> */}
        <About />
        <Card />
        <Contact />
      </div>
    </div>
  );
};

export default Body;
