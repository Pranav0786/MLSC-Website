import React from 'react';
import Headings from '../Hedings';
import UpcomingBtn from './UpcomingBtn';
import UpcomingTimer from './UpcomingTimer';

const UpComingEvents = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <Headings heading={"Upcoming Events"} />
      </div>

      {/* Poster */}
      <div className="flex justify-center items-center mb-6">
        <img 
          src='https://res.cloudinary.com/do7rdio94/image/upload/fl_preserve_transparency/v1727121208/MLSC%20Images/azure_swlp3u.jpg?_s=public-apps' 
          alt='Event Poster' 
          className="w-80 h-60 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Timer + Register Button */}
      <div className="  items-center space-x-4">
        <UpcomingTimer />
        <UpcomingBtn text={"Register Now"} link={""} />
      </div>
    </div>
  );
};

export default UpComingEvents;
