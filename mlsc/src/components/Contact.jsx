const Contact = () => {
    return (
      <div
        name="contact"
        className="w-10/12 mx-auto h-full xl:mt-52 mt- mb-52 text-white xl:border border-gray-600 flex justify-center items-center"
      >
        <div className=" p-10 max-w-screen-lg w-full sm:w-3/4 md:w-1/2">
          
          {/* starting text */}
            <div className="pb-8 flex justify-center">
                <p
                    className="text-3xl xl:text-4xl xl:font-bold mx-auto text-yellow-500 font-sans 
                            shadow-lg text-shadow-lg"
                    style={{ 
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)", // Soft shadow effect
                    fontFamily: "'Poppins', sans-serif" // Custom font family
                    }}
                >
                    Drop Us a Line
                 </p>  
            </div>

          {/* form */}
          <div className="flex items-center justify-center">
            <form action="" method="POST" className="flex flex-col w-full">
              <label htmlFor="Name" className="text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 mb-4"
              />
      
              <label htmlFor="Email" className="text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 mb-4"
              />
      
              <label htmlFor="message" className="text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="6"
                className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-blue-500 mb-6"
              />
      
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md mx-auto hover:scale-105 transition-transform duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  