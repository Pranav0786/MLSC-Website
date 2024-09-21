import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-coolGray-800  text-gray-300 rounded-xl shadow-slate-400 ">
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-500">MLSC</h2>
            <p className="mt-2">Creating innovative solutions for a better tomorrow.</p>
          </div>
          <div className="flex space-x-6">
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MLSC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;