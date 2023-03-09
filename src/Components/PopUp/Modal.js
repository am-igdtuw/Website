import React from 'react'
import './Modal.css'

const OVERLAY = {
  position: 'fixed',
  left: 0,
  right:0,
  top:0,
  bottom:0,
  backgroundColor: 'rgba(0 , 0 ,0 ,0.8)',
  zIndex: 1000
}
export default function Modal(props) {
  return (props.trigger) ? (
    <>
    <div style={OVERLAY}/>
    <div className='popup'>
      <div className="popup-inner">
        <button className='close-btn' onClick={ () => props.setTrigger(false)}> &times; </button>
        {props.children }
      </div>
    </div>
    </>
  ) : "" ;
}
