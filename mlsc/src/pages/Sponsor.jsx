import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import Headings from "../components/Hedings"
import SponserSlidder from '../components/SponsorsPage/SponserSlidder';
import SponsorForm from '../components/SponsorsPage/SponserForm';

const SponsorSection = () => {
  const sponsors = [
    {
      name: 'Walchand',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53_SusLSzlfowqJ_aiIF_UYJyPUyT7zVNDg&s',
      url: 'https://www.walchandsangli.ac.in/'
    },
    {
      name: 'Chai Sutta Bar',
      img: 'https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://www.chaisuttabarindia.com/'
    }
  ];

  

  return (
    <div className="w-full h-full flex flex-col mt-32 overflow-x-hidden">

        <div className='flex-grow sm:w-full max-w-6xl mx-auto p-4'
        >

          {/* heading */}
          {/* <div className="text-center mb-10">
            <Headings heading={"OUR SPONSORS"} />
          </div>
          
          <div className=""
          >
            <SponserSlidder sponsors={sponsors} />
          </div> */}


          <div 
          className=" p-8 flex flex-col justify-center xl:border-0 border border-gray-700 rounded-lg mx-auto">
            <Headings heading={"WHY SPONSOR US?"} />
            <div 
            className="space-y-4 text-justify xl:text-lg text-coolGray-400 xl:text-white font-semibold ">
              <p 
              data-aos="fade-up"
              className="">
                <span className='text-blue-400 '>High-Impact Events:</span> {" "}
                MLSC hosts various workshops, hackathons, and technical events aimed at empowering students to build industry-relevant skills. Events like Techumen and Hackathons draw hundreds of attendees, offering sponsors an excellent platform for brand visibility and engagement with the tech-savvy youth.
              </p>
              <p 
              data-aos="fade-up"
              className="">
                <span className='text-blue-400'>Diverse Audience Reach:</span> {" "}
                 As a sponsor, your brand will be showcased across our events, social media platforms, and web presence. MLSC engages students across multiple disciplines, ensuring your brand reaches a wide and diverse audience.
              </p>
              
              <p 
              data-aos="fade-up"
              className="">
                <span className='text-blue-400'>Support for Innovation:</span> {" "}
                 By backing MLSC, you are contributing to the next generation of innovators and leaders who are passionate about technology and its transformative potential. Your support allows us to provide students with the resources and opportunities to bring their ideas to life.
              </p>
            </div>
          </div>

          <SponsorForm />

          <div className='min-h-16'></div>


        </div>

      
      
    </div>
  );
};

export default SponsorSection;
