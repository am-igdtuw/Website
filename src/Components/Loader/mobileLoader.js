import React from 'react';
import './mobileLoader.css'; 
import logo from './AMlogo.png';

function MobileLoader() {
  return (
    <>
    <div className="mobileloader-container">
      <div className="mobileloader"></div>
    </div>
      {/* <img src={logo} alt="Logo" className="AmLogo" />

      <input type="checkbox" id="checkbox" />
      {/* <div className="bg"></div> */}
      {/* <div className="dots">

        {[...Array(12)].map((_, index) => (
          <div className="dot" key={index}></div>
        ))}

        <div className="ring"></div>

      </div> */} 

    </>
  );
}

export default MobileLoader;
