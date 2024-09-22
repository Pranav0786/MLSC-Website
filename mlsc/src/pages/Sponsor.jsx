// import React from 'react'

// const Sponsor = () => {
//   return (
//     <div>
//       {/* left */}
//         <div>

//         </div>

//         {/* right */}

//         <div>

//         </div>
//     </div>
//   )
// }

// export default Sponsor



import React from 'react';

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
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Our Sponsors</h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sponsors.map((sponsor, index) => (
          <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer">
            <div className="transform hover:scale-105 transition duration-300 shadow-md bg-white p-6 rounded-lg">
              <img className="w-20 mx-auto mb-4" src={sponsor.img} alt={sponsor.name} />
              <h2 className="text-center text-lg font-semibold">{sponsor.name}</h2>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-16 bg-white p-8 rounded-lg shadow-md mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Sponsor Us?</h2>
        <ul className="space-y-4">
          {[
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur id eos praesentium reiciendis ab, sunt excepturi quisquam est optio dignissimos accusamus facilis? Odio sint architecto odit ratione, dicta minus!",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium obcaecati veritatis quaerat voluptates cupiditate blanditiis minus. Eos labore unde qui repudiandae vitae, amet magni veritatis laudantium quis veniam sapiente.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique sequi culpa fugiat dolores saepe magni molestiae voluptatem itaque! Eum enim dicta consequatur officia at culpa ex unde quam tempora soluta?"
          ].map((item, index) => (
            <li key={index} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 bg-white p-8 rounded-lg shadow-md mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Interested in sponsoring us?</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Leave a Message for us!"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorSection;
