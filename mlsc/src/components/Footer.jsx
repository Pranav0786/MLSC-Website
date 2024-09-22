import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 rounded-t-xl shadow-slate-400">
      <div className="max-w-6xl mx-auto px-4 xl:py-8 py-3">

        {/* Flex container with flex-col on mobile and row on larger screens */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          {/* Left section with title and description */}
          <div className="mb-2 md:mb-0"> {/* Reduced margin-bottom on mobile */}
            <h2 className="text-2xl font-bold font-sans ">WCE -
                 <span className="text-blue-400"> MLSC</span></h2>
            <p className="mt-1 md:mt-2 text-yellow-500"> {/* Reduced margin-top on mobile */}
              Creating innovative solutions for a better tomorrow.
            </p>
          </div>

          {/* Social Icons section */}
          <div className="flex space-x-4 justify-center mt-3 md:mt-0"> {/* Reduced space between icons on mobile */}
            <Link to="#" className="hover:text-white transition-colors group">
              <FaDiscord className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors group">
              <FaLinkedin className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link to="#" className="hover:text-white transition-colors group">
              <FaGithub className="w-6 h-6 transition-transform group-hover:scale-110 group-hover:-translate-y-1" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>

        {/* Divider and copyright section */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-4 md:pt-8 text-sm text-center"> {/* Adjusted margins and padding */}
          <p>&copy; {new Date().getFullYear()} MLSC. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
