import React from 'react';
import Particles from './components/Particles.jsx'; 
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Body from './pages/Body.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div className="  bg-gradient-to-br h-full from-gray-900 via-gray-800 to-black">
      <Particles
        className="particles"
        quantity={400}
        color="#ffffff"
        staticity={50}
        ease={50}
        size={0.4}
        vx={0.1}
        vy={0.1}
      />

      < Body />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;