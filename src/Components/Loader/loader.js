import React from 'react';
import './loader.css'; 
import logo from './AMlogo.png';

const Loader = () => {
  return (
      <div className='loader-container'>
        <div className="container">
          <div className="divider" aria-hidden="true"></div>
          <p className="loading-text" aria-label="Loading">
            <span className="letter" aria-hidden="true">
              <img src={logo} alt="Logo" className='logolo' />
            </span>
            <span className="letter" aria-hidden="true">s</span>
            <span className="letter" aria-hidden="true">s</span>
            <span className="letter" aria-hidden="true">e</span>
            <span className="letter" aria-hidden="true">t</span>
            <span className="letter" aria-hidden="true">m</span>
            <span className="letter" aria-hidden="true">e</span>
            <span className="letter" aria-hidden="true">r</span>
            <span className="letter" aria-hidden="true">k</span>
            <span className="letter" aria-hidden="true">l</span>
            <span className="letter" aria-hidden="true">e</span>
          </p>
      </div>
    </div>
  );
};

export default Loader;
