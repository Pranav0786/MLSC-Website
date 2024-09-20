import React from 'react';

const About = () => {
  return (
    <div id='about' className="mb-20 mt-10 px-4 md:px-10">
      {/* About Section */}
      <section className="flex flex-col mb-10 md:flex-row items-center md:justify-between md:space-x-8 space-y-8 md:space-y-0">
        {/* Left Box */}
        <div className="text-white flex flex-col space-y-4 md:w-1/2">
          <p className="text-3xl md:text-4xl font-bold text-pink-500">
            About the Club
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            The WCE Microsoft Learn Students' Club (MLSC) is an institutional 
            technical club established on 30-07-2024. Our primary aim is to empower 
            students by enhancing their technical skills using Microsoft's vast resources.
            We are a community focused on driving technical knowledge, career growth, and entrepreneurial thinking through impactful projects.
          </p>
        </div>

        {/* Right Box - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img 
            className="w-full max-w-[1200px] h-72 rounded-lg shadow-xl border-2 border-gray-600 object-cover"
            src="https://res.cloudinary.com/do7rdio94/image/upload/fl_preserve_transparency/v1726766606/MLSC%20Images/MLSC-about_msc9aj.jpg?_s=public-apps" 
            alt="MLSC Club"
          />
        </div>




      </section>

      {/* Vision and Mission Section */}
      <section className="flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0 md:space-x-8">
        {/* Vision - Left Box */}
        <div className="bg-transparent border border-blue-500 p-6 md:p-8 rounded-lg shadow-lg flex-1 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Our Vision
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            To create a thriving community that fosters innovation, collaboration, and 
            technical excellence, empowering students to become future leaders in the global 
            tech ecosystem.
          </p>
        </div>

        {/* Mission - Right Box */}
        <div className="bg-transparent border border-green-500 p-6 md:p-8 rounded-lg shadow-lg flex-1 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
          <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
            Our Mission
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            To build a collaborative community where students gain technical knowledge, 
            enhance their career prospects, and embrace entrepreneurial thinking. 
            We aim to achieve this by organizing impactful workshops, collaborative projects, 
            hackathons, and providing pathways to Microsoft certifications, leveraging Microsoft’s 
            tools and expert resources.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
