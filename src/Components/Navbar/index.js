import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the close icon as well
import Logo2 from '../../images/Logo3.png';
import {
  Nav,
  NavbarContainer,
  NavImg,
  NavMenu,
  Navitem,
  NavLinks,
  MobileIcon,
  NavLogo,
  SubLogo,
} from './NavbarElements';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavImg>
            <Link to="/" onClick={handleLogoClick}> 
              <img src={Logo2} height={44} alt="Logo" />
            </Link>
            <NavLogo>
              AssetMantle
              <SubLogo>Student Chapter IGDTUW</SubLogo>
            </NavLogo>
          </NavImg>

          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* Close icon when open */}
          </MobileIcon>
          <NavMenu isOpen={isOpen}>
            <Navitem>
              <NavLinks to="/" onClick={handleLogoClick}>ABOUT</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/event" onClick={handleLogoClick}>EVENTS</NavLinks>
            </Navitem>

            <Navitem className='custom'>
              <NavLinks to="/TeamPage" onClick={handleLogoClick}>TEAM</NavLinks>
            </Navitem>
            <Navitem className='custom'>
              <NavLinks to="/faq" onClick={handleLogoClick}>FAQS</NavLinks>
            </Navitem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

