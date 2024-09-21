import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { data } from "../Data/MainBoard";
import Headings from './Hedings'


const post = [
  "Core", "Technical Lead",
  "Event Coordinator", "Social Lead",
  "Design Lead", "AI ML Lead", "Blog Writer",
  "Editor", "Advisory Member"
];

const Card = () => {
  const [selectedBoard, setSelectedBoard] = useState("Core");
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter data based on selected board
  const filteredData = data.filter((item) => item.position === selectedBoard);

  // Handle auto-cycling for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Check if the screen width is less than 640px (mobile view)
    };

    // Initially check screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cycle through posts automatically for mobile view
  useEffect(() => {
    if (isMobile) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % post.length;
          setSelectedBoard(post[nextIndex]);
          return nextIndex;
        });
      }, 3000); // Change every 3 seconds

      return () => clearInterval(intervalId); // Clean up the interval on unmount
    }
  }, [isMobile]);

  return (
    <div
    data-aos="fade-up"
    className="p-4 xl:mt-40 mx-auto flex flex-col">

      {/* heading */}
      <Headings heading={"Meet Our Team"} />

      {/* Buttons for selecting board */}
      <div 
      className="flex flex-col sm:flex-row mb-4 py-1 justify-center">
        <div 
        className={`border border-gray-500 rounded-full py-1 px-1 flex 
                    flex-wrap gap-2 justify-center items-center
                    ${isMobile ? "inline-block min-w-60 mx-auto" : ""}
                    `}
                    
        > {/* Centering on mobile */}
          {post.map((role, index) => (
            <button
              key={role}
              onClick={() => setSelectedBoard(role)}
              className={`${
                isMobile
                  ? "px-2 py-1 text-lg inline-block max-w-max " // Ensure button fits content on mobile view
                  : "px-4 py-2 text-xl"
              } rounded-full bg-transparent text-gray-400 font-semibold border-0 
                transition duration-500 ease-in-out 
                ${selectedBoard === role ? "xl:bg-coolGray-900 " : ""} 
                hover:bg-gray-950 hover:shadow-lg
                max-w-max
                ${isMobile && currentIndex !== index ? "hidden" : ""}`} // Hide all buttons except the current one in mobile view
            >
              {role}
            </button>
          ))}
        </div>
      </div>




      {/* Cards display */}
      <div 
      data-aos="fade-up"
      className="xl:mt-20  flex flex-wrap justify-center gap-10 my-12  xl:min-h-0">
        {filteredData.map((item) => (
          <motion.div
            key={item.name}
            className={`card bg-transparent p-6 shadow-2xl border-2 
              border-gray-500 hover:shadow-coolGray-400 rounded-2xl 
              text-center ${isMobile ? "h-[300px] w-[260px]" : "h-[400px] w-[340px]"}`} // Smaller card for mobile
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={item.image}
              alt={item.name}
              className={`mx-auto rounded-2xl ${
                isMobile ? "w-40 h-40" : "w-56 h-56"
              } mb-4 border-2 border-gray-600 shadow-sm`} // Smaller image for mobile
            />
            <h3 className="text-xl font-semibold xl:pt-8 text-gray-400">{item.name}</h3>
            <p className="text-gray-400 pt-3 ">{item.position}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;
