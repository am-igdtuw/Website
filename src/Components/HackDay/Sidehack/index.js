import React, { useState } from 'react';
import './Sidehack.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="toggle-icon">{isOpen ? '->' : '<-'}</span>
      </button>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <br />
        <caption>Let's Hack Together!</caption>
        <hr />
        <h3>Hosted by</h3>
        <p>AssetMerkle IGDTUW</p>
        <h3>Hackathon Mode</h3>
        <p>HYBRID</p>
        <h3>Venue</h3>
        <p>TBD: DELHI NCR</p>
      </aside>
    </>
  );
};

export default Sidebar;