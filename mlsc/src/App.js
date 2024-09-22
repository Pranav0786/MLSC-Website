import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import Body from './pages/Body.jsx';
import Events from "./pages/Events.jsx"
import Sponsor from './pages/Sponsor.jsx';
import Gallery from './pages/Gallery.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'
import TimeLine from './components/EventsPage/TimeLine.jsx';


function App() {
  return (
    <div className="bg-gradient-to-br h-full from-gray-900 via-gray-800 to-black">
        <Navbar />
        <Routes>
          <Route path='/' element={< Body />}/>
          <Route path="/event" element={<Events />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/time" element={<TimeLine />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;