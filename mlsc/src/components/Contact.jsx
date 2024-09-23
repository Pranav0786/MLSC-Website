import ContactForm from './ContactForm';
import Headings from './Hedings'

const Contact = () => {
    return (
      <div
        name="contact"
        data-aos="fade-up"
        className="w-10/12 mx-auto h-full xl:mt-40 mt-40 mb-52 
                  text-coolGray-400 flex justify-center items-center"
      >
        <div className=" max-w-screen-lg w-full xl:w-3/4">
          
          {/* starting text */}
            <div className=" flex justify-center">
                <Headings heading={"DROP US A LINE"} /> 
            </div>

          {/* form */}
          <ContactForm 
          />
          
        </div>
      </div>
    );
  };
  
  export default Contact;
  