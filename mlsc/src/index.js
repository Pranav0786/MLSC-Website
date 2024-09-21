import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import Particles from './components/Particles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        {/* <Particles
        className="particles"
        quantity={400}
        color="#ffffff"
        staticity={50}
        ease={50}
        size={0.4}
        vx={0.1}
        vy={0.1}
      /> */}
        <App />
      </BrowserRouter>
  </React.StrictMode>
    
);

