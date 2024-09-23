import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2024-10-01T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Update immediately on mount
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-center space-x-4 flex-wrap">
      {Object.entries(timeLeft).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 * index }}
          className="flex flex-col items-center"
        >
          <div className="text-4xl font-bold text-white bg-opacity-20 bg-white rounded-lg p-4 w-20 md:w-24">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase text-white mt-2">{key}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
