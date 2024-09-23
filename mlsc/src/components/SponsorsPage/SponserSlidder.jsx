import React from 'react';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SponsorSlider = ({ sponsors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sponsors.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sponsors.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 ">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-full flex-shrink-0 p-6"
            >
              <div className="transform hover:scale-105 transition duration-300 shadow-lg bg-white rounded-lg">
                <img
                  className="w-32 mx-auto mb-4"
                  src={sponsor.img}
                  alt={sponsor.name}
                />
                <h2 className="text-center text-lg font-semibold text-gray-800">
                  {sponsor.name}
                </h2> 
              </div>
            </a>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none transition duration-300"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none transition duration-300"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default SponsorSlider;
