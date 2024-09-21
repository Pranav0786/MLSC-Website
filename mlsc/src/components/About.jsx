import React from 'react';
import FadeCard from "./FadeCard"
import Headings from './Hedings'

const About = () => {
  return ( 
    <div id='about' 
    data-aos="fade-up"
    className="mb-20 mt-10 px-4 mx-auto flex flex-col md:px-10 ">

      <Headings heading={"About Us"} />
      {/* About Section */}
      <section className="flex flex-col mb-10 md:flex-row items-center  
                        md:justify-between md:space-x-8 space-y-8 md:space-y-0 ">
        {/* Left Box */}
        <div 
        className="  flex flex-col space-y-4 md:w-1/2">
        
        <p className="text-base md:text-lg xl:text-xl leading-relaxed sm:font-semibold
             xl:-translate-y-8 text-coolGray-400"
          style={{ textAlign: 'justify' }} // Justify text
        >
          <span className="text-blue-300 font-semibold">
            The WCE Microsoft Learn Students' Club (MLSC)
          </span>, established on 30-07-2024, empowers students by advancing technical skills 
          through Microsoft's resources. We drive innovation, career growth, and entrepreneurial 
          thinking with impactful projects and a community focused on shaping the future.
        </p>

        </div>

        {/* Right Box - Image */}
        <div 
        className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img 
            className="w-full max-w-[1200px] h-72 rounded-lg shadow-xl border-2 border-gray-600 object-cover"
            src="https://res.cloudinary.com/do7rdio94/image/upload/fl_preserve_transparency/v1726766606/MLSC%20Images/MLSC-about_msc9aj.jpg?_s=public-apps" 
            alt="MLSC Club"
          />
        </div>


      </section>

      <div className='xl:min-h-20'></div>

      {/* Vision and Mission Section */}
      <section className="flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0 
                md:space-x-8">

        {/* Vision - Left Box */}
        <FadeCard 
          heading={"Our Vision"} 
          para={"To create a thriving community that fosters innovation, collaboration, and technical excellence, empowering students to become future leaders in the global tech ecosystem."}
          left={true}
        />

        <FadeCard
        heading={"Our Mission"}
        para={"To build a collaborative community where students gain technical knowledge, enhance their career prospects, and embrace entrepreneurial thinking. We aim to achieve this by organizing impactful workshops, collaborative projects, hackathons, and providing pathways to Microsoft certifications, leveraging Microsoft’s tools and expert resources."}
        />
        
      </section>


    </div>
  );
};

export default About;
