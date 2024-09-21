import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Body from './pages/Body.jsx';
import Events from "./pages/Events.jsx"
import Sponsor from './pages/Sponsor.jsx';
import Gallery from './components/Gallery.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="bg-gradient-to-br h-full from-gray-900  via-gray-800 to-black">
        <Navbar />
        <Routes>
          <Route path='/' element={< Body />}/>
          <Route path="/event" element={<Events />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;