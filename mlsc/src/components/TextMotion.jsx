import React from 'react';
import { motion } from 'framer-motion';
import SlightFlip from './SlightFlip';

const TextMotion = ({ phrase, isDelay }) => {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ...(isDelay ? { delay: 1.5 } : {}), // Apply delay conditionally
        }} // Fade in duration
      >
        <SlightFlip
          word={phrase}
          duration={0.5}
          delayMultiple={0.08}
          className="text-3xl text-blue-300 text-wrap font-extrabold xl:-mr-20  xl:text-5xl 
                    xl:mb-2"
          style={{
            letterSpacing: '-0.05em', // Reduce letter spacing
            wordSpacing: '0.5em', // Adjust word spacing as needed
            textAlign: 'center' // Center-align text
          }}
        />
      </motion.div>
    </div>
  );
};

export default TextMotion;
