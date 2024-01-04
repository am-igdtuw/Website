import React from 'react';
import './Modal.css';
import PopUp from '../../images/PopUp.png';

const OVERLAY = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: 'rgba(0 , 0 ,0 ,0.7)',
  zIndex: 1000,
};

export default function Modal(props) {
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
    </>
  ) : '';
}
