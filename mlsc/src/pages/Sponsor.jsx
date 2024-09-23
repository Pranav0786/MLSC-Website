import React from 'react';
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
    <div className="w-full h-full flex flex-col mt-40 overflow-x-hidden">

        <div className='flex-grow sm:w-full max-w-6xl mx-auto p-4'>

          {/* heading */}
          <div className="text-center mb-10">
            <Headings heading={"OUR SPONSORS"} />
          </div>
          
          <div className=""
          >
            <SponserSlidder sponsors={sponsors} />
          </div>


          <div className="mt-16 p-8 flex flex-col justify-center xl:border-0 border border-gray-700 rounded-lg mx-auto">
            <Headings heading={"WHY SPONSOR US?"} />
            <div className="space-y-4 text-justify text-coolGray-400 ">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur id eos praesentium reiciendis ab, sunt excepturi quisquam est optio dignissimos accusamus facilis? Odio sint architecto odit ratione, dicta minus!
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium obcaecati veritatis quaerat voluptates cupiditate blanditiis minus. Eos labore unde qui repudiandae vitae, amet magni veritatis laudantium quis veniam sapiente.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sequi culpa fugiat dolores saepe magni molestiae voluptatem itaque! Eum enim dicta consequatur officia at culpa ex unde quam tempora soluta?
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
