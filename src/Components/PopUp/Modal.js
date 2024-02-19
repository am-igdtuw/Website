// import React from 'react';
// import Typed from 'typed.js';
// import './Modal.css';
// import PopUp from '../../images/PopUp.png';
// import { useEffect } from 'react';
// import { FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const OVERLAY = {
//   position: 'fixed',
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0 , 0 ,0 ,0.77)',
//   zIndex: 1000,
// };

// export default function Modal(props) {
  
//   useEffect(() => {
//     if (props.trigger) {
//       const snowfallContainer = document.querySelector('.snowfall');

//       for (let i = 0; i < 17; i++) {
//         const snowflake = document.createElement('div');
//         snowflake.className = 'snowflake';
//         snowflake.style.left = `${Math.random() * 100}%`;
//         snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
//         snowfallContainer.appendChild(snowflake);
//       }
//     }
//   }, [props.trigger]);

//   return props.trigger ? (
//     <>
//       <div style={OVERLAY} />
//       <div className="popup">
//         <div className="popup-inner">
//         <div className="social-icons">
//           <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram />
//           </a>
//           <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} />
//           </a>
//           <a href="https://www.linkedin.com/company/asset-merkle/mycompany/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin />
//             </a>
//             </div>
//           <button className="close-btn" onClick={() => props.setTrigger(false)}>
//             &times;
//           </button>
//           {props.children}
//           <div className="popup-content">
//           <img className="popup-img" src={PopUp} alt="Popup" />
//           <div className="popup-text">
//           <div className="popup-text1"> ASSETMERKLE Presents   </div>
//           <div className="popup-text3">FLEEK DEPLOY</div>
//           <div className="popup-text2">Explore the decentralized edge.</div>
//           <button
//               className="popup-button"
//               onClick={() => (window.location.href = 'https://twitter.com/AM_igdtuw/status/1750863066177433964')}
//             >
//               Find it here!
//             </button>
//           </div>
//           </div>
//           <a href="/event" className="find-more-events">FIND MORE EVENTS!</a>
//         </div>
//       </div>
//       <div className="snowfall"></div>
//     </>
//   ) : '';
// }
import React, { useEffect } from 'react';
import Typed from 'typed.js'; // Import typed.js library
import './Modal.css';
import PopUp from '../../images/PopUp.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OVERLAY = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0 , 0 ,0 ,0.77)',
  zIndex: 1000,
};

export default function Modal(props) {

  useEffect(() => {
    if (props.trigger) {
      const snowfallContainer = document.querySelector('.snowfall');

      for (let i = 0; i < 17; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`;
        snowfallContainer.appendChild(snowflake);
      }

      // Typed.js initialization
      const options = {
        strings: ['TWITTER SPACES', 'FLEEK DEPLOY'],
        typeSpeed: 100,
        startDelay: 2000, // Delay before typing starts (in milliseconds)
        showCursor: false, // Disable the cursor
        loop: true
      };
      const typed = new Typed('.typed-text', options);

      // Return a cleanup function
      return () => {
        typed.destroy();
      };
    }
  }, [props.trigger]);

  return props.trigger ? (
    <>
      <div style={OVERLAY} />
      <div className="popup">
        <div className="popup-inner">
          <div className="social-icons">
            <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} />
            </a>
            <a href="https://www.linkedin.com/company/asset-merkle/mycompany/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            &times;
          </button>
          {props.children}
          <div className="popup-content">
            <img className="popup-img" src={PopUp} alt="Popup" />
            <div className="popup-text">
              <div className="popup-text1"> ASSETMERKLE Presents   </div>
              <div className="popup-text3 typed-text">FLEEK DEPLOY</div>
              <div className="popup-text2 "> Explore the decentralized edge.</div> 
              <button
                className="popup-button"
                onClick={() => (window.location.href = 'https://twitter.com/AM_igdtuw/status/1750863066177433964')}
              >
                Find it here!
              </button>
            </div>
          </div>
          <a href="/event" className="find-more-events">FIND MORE EVENTS!</a>
        </div>
      </div>
      <div className="snowfall"></div>
    </>
  ) : '';
}
