import React from 'react'
import { Link } from 'react-router-dom';
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
            <NavLogo  to='/'>AssetMantle
              <SubLogo>Student Chapter IGDTUW</SubLogo>
            </NavLogo>
            {/* <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon> */}
            <NavMenu>
                <Navitem>
                    <NavLinks >
                      ABOUT US
                    </NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks>
                      <Link to="/event">EVENTS</Link>
                    </NavLinks>

                </Navitem>

                <Navitem>
                    <NavLinks>
                      <Link to="/blogs">BLOGS</Link>
                    </NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks >
                    <Link to="/faq">FAQs</Link>
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
