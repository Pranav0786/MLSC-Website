import React from 'react';

const EventBtn = ({ text, link }) => {
  const handleClick = () => {
    if (link && link.length > 0) {
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-transparent text-gray-200 hover:text-white rounded-md transition duration-300 
      transform hover:scale-105 shadow-lg border-r-2 border-b-2 font-bold hover:border-none "
    >
      {text}
    </button>
  );
};

export default EventBtn;
