import React from 'react';
import './Modal.css';
import PopUp from '../../images/PopUp.png';
import { useEffect } from 'react';

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
        snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Vary animation speed
        snowfallContainer.appendChild(snowflake);
      }
    }
  }, [props.trigger]); 

  return props.trigger ? (
    <>
      <div style={OVERLAY} />
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            &times;
          </button>
          {props.children}
          <img className="popup-img" src={PopUp} alt="Popup" />
          <a href="/event"> FIND MORE EVENTS! </a>
        </div>
      </div>
      <div className="snowfall"></div>
    </>
  ) : '';
}
