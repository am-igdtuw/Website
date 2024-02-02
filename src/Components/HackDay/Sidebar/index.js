import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sideBarCss.css';

const Sidebar = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div className="sidebar-container">
        <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon="fa-brands fa-x-twitter" className="social-icon" style={{ verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.linkedin.com/company/asset-merkle/mycompany/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;