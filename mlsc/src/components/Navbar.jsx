import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assests/mlscPhotos/logo1.png"; // Adjust path as needed

const Navbar = () => {
  const location = useLocation();

  const NavbarLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "#about" },
    { title: "Sponsor", path: "/sponsor" },
    { title: "Gallery", path: "/gallery" },
    { title: "Contact Us", path: "/contact" },
  ];

  const matchRoute = (route) => location.pathname === route;

  return (
    <div className='w-full max-w-screen-xl mx-auto p-4'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Link to="/">
          <p className='text-3xl text-white font-bold shadow-lg font-sans'>
            WCE 
            <span className='text-blue-700'> - MLSC</span>
          </p>
        </Link>


        {/* Centered Navigation links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex items-center gap-x-8 text-white">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <p
                    className={`px-4 py-2 rounded-full transition-colors duration-300 
                      ${matchRoute(link.path) 
                        ? "bg-gray-700 text-slate-400" 
                        : "hover:bg-gray-700 hover:text-slate-400"} 
                      font-bold`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button (optional) */}
        <button className="md:hidden text-white">
          <span className="sr-only">Open menu</span>
          {/* You can add an icon here */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
