import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo2 from '../../images/Logo3.png'
import {Nav, NavbarContainer,NavImg,  NavMenu, Navitem, NavLinks, MobileIcon, NavLogo, SubLogo} from './NavbarElements';
import  { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>
  {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavImg>
              <img src={Logo2} height={44}/>
              <NavLogo>
                AssetMantle          
                <SubLogo>Student Chapter IGDTUW </SubLogo>
              </NavLogo>                              
            </NavImg>
                                      
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu isOpen={isOpen}>
                <Navitem>
                    <NavLinks to="/">
                       ABOUT
                    </NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to="/event">EVENTS
                    </NavLinks>
                </Navitem>
               

                {/* <Navitem>
                    <NavLinks to="/blogs">BLOGS
                    </NavLinks>
                </Navitem> */}
                <Navitem>
                    <NavLinks to="/faq">FAQS
                    </NavLinks>
                </Navitem>
               


            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}
        </NavbarContainer>
      </Nav>
   
    </>
  )
}

export default Navbar
