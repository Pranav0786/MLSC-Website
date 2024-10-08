
import React from 'react'

const Hedings = ({heading}) => {
  return (
    <div className='mx-auto xl:mb-10 mb-5'>
        <p
        data-aos="fade-up"
          className="text-3xl xl:text-5xl font-extrabold mx-auto text-yellow-500 uppercase
                  text-wrap text-center
                    "
          style={{ 
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Soft shadow effect
            fontFamily: "'Poppins', sans-serif " // Custom font family
          }}
        >
        {heading}
      </p>
    </div>
  )
}

export default Hedings
