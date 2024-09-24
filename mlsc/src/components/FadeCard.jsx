
import 'aos/dist/aos.css';

const VisionComponent = ({ heading, para, left }) => {
  

  return (
    <div
      data-aos={left ? "flip-left" : "flip-right"}
      className="bg-gradient-to-br from-gray-700 to-gray-950 p-6 md:p-8 rounded-xl 
                  shadow-lg md:shadow-xl flex-1 transition-transform duration-300 
                  transform hover:scale-105 hover:shadow-2xl 
                  hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-800"
      style={{
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)', // Increase the blur radius and spread for a stronger shadow
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <p className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-4">
        {heading}
      </p>

      <p className="text-base md:text-lg xl:text-xl leading-relaxed sm:font-semibold text-coolGray-400"
        style={{ textAlign: 'justify' }}>
        {para}
      </p>
    </div>
  );
};

export default VisionComponent;
