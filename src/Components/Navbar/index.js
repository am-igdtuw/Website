import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo2 from '../../images/Logo2.png'
import {Nav, NavbarContainer, NavLogo,NavImg,SubLogo,  NavMenu, Navitem, NavLinks,NavBtn, MobileIcon,NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavImg>
              <img src={Logo2}/>
            </NavImg>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavLogo  to='/'>AssetMantle&nbsp;
              <SubLogo>Student Chapter IGDTUW</SubLogo>
            </NavLogo>
            {/* <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon> */}
            <NavMenu>
                <Navitem>
                    <NavLinks to='home'>ABOUT US</NavLinks>
                </Navitem>
                <NavBtn>
                    <NavBtnLink to='/event'>EVENTS</NavBtnLink>
                    {/* <NavLinks to='/event'>Event</NavLinks> */}
                </NavBtn>
                <Navitem>
                    <NavLinks to='services'>BLOGS</NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to='signup'>FAQs</NavLinks>
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
