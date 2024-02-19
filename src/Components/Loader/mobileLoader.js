import React from 'react';
import './mobileLoader.css'; 
import logo from './AMlogo.png';

function MobileLoader() {
  return (
    <div className="mobile-loader-container">
      <img src={logo} alt="Logo" className="AmLogo"/>
      
      <input type="checkbox" id="checkbox" className="input-checkbox" />
      {/* <div className="bg"></div> */}
      <div className="dots-container">
      
        {[...Array(12)].map((_, index) => (
          <div className="dot" key={index}></div>
        ))}

        <div className="ring"></div>

      </div>
    </div>
  );
}

export default MobileLoader;
