import React from 'react';
import FadeCard from "./FadeCard"
import Headings from './Hedings'

const About = () => {
  return ( 
    <div id='about' 
    data-aos="fade-up"
    className="mb-20 mt-10 xl:mt-40 px-4 mx-auto flex flex-col md:px-10 ">

      {/* About Section */}
      <Headings heading={"ABOUT US"} />
      <div className='xl:min-h-5'></div>
      <section className="flex flex-col mb-10 items-center gap-10 
                           md:space-y-0 ">
        {/* Para Box */}
        <div>
            <p className="text-base md:text-lg xl:text-xl leading-relaxed sm:font-semibold
                text-coolGray-400"
              style={{ textAlign: 'justify' }} // Justify text
              data-aos="fade-up"
            >
              <span className="text-blue-300 font-semibold">
              The WCE Microsoft Learn Students' Club (MLSC)
              </span>, established on July 30, 2024, is dedicated to empowering students by 
              equipping them with cutting-edge technical skills through the vast resources of 
              Microsoft. Our mission is to foster innovation, accelerate career growth, and inspire 
              entrepreneurial thinking. By leading impactful projects and building a forward-thinking
              community, we aim to shape the future of technology and its leaders.
            </p>
        </div>

        {/* Second Box - Image */}
        {/* <div 
        className="md:w-5/6  flex justify-center">
          <img 
            data-aos="fade-up"
            className="w-full max-w-[1200px] xl:h-96 h-72 xl:rounded-3xl rounded-xl shadow-xl 
            border-2 border-gray-600 object-cover"
            src="https://res.cloudinary.com/do7rdio94/image/upload/fl_preserve_transparency/v1726766606/MLSC%20Images/MLSC-about_msc9aj.jpg?_s=public-apps" 
            alt="MLSC Club"
          />
        </div> */}


      </section>

      <div className='xl:min-h-14'></div>

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
