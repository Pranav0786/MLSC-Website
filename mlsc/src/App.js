import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';

import Body from './pages/Body.jsx';
import Events from './pages/Events.jsx';
import Sponsor from './pages/Sponsor.jsx';
import Gallery from './pages/Gallery.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import 'aos/dist/aos.css';
import AOS from 'aos';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black 
                    h-full w-full overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path="/event" element={<Events />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
