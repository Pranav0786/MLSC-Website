import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Add your preferred icon

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavbarLinks = [
    { title: "Events", path: "/event" },
    { title: "Sponsors", path: "/sponsor" },
    { title: "Gallery", path: "/gallery" },
  ];

  const matchRoute = (route) => location.pathname === route;

  return (
    <div className="flex-grow lg:w-10/12 sm:w-full max-w-maxContent mx-auto xl:border
                   border-gray-500 rounded-xl p-4">
      <div className="flex items-center justify-between">
        {/* WCE MLSC text */}
        <div>
          <Link to="/">
          <p className="text-2xl lg:text-3xl text-white font-extrabold drop-shadow-lg 
                                  font-[Playfair Display] cursor-pointer">
                        WCE<span className="text-blue-300"> - MLSC</span>
          </p>

          </Link>
        </div>

        {/* Centered Navigation links for both mobile and desktop */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center font-sans xl:text-xl text-white">
            {NavbarLinks.map((link, index) => (
              <li key={index} className="list-none">
                <Link to={link.path}>
                  <p
                    className={`px-4 py-2 rounded-full transition-colors duration-300 
                    ${matchRoute(link.path)
                      ? "bg-gray-700 text-slate-400 shadow-md"
                      : "hover:bg-gray-700 hover:text-slate-400 shadow-sm"}
                    font-bold cursor-pointer`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <button 
          className="lg:hidden p-2  text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-auto w-full bg-gray-950 bg-opacity-90
                        flex flex-col items-center text-center p-4 text-white text-xl z-50"
        >
          <button 
            className="self-end text-white font-bold text-4xl mr-1 "
            onClick={() => setIsMenuOpen(false)}
          >
            &times; {/* Close icon */}
          </button>
          <div className="flex flex-col space-y-4">
            {NavbarLinks.map((link, index) => (
              <Link key={index} to={link.path} onClick={() => setIsMenuOpen(false)}>
                <p
                  className={`px-4 py-2 rounded-full transition-colors duration-300 
                    ${matchRoute(link.path)
                      ? "bg-gray-700 text-slate-400 shadow-md"
                      : "hover:bg-gray-700 hover:text-slate-400 shadow-sm"}
                    font-bold cursor-pointer`}
                >
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
