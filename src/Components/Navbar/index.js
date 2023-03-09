import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo2 from '../../images/Logo2.png'
import {Nav, NavbarContainer, NavLogo,NavImg,SubLogo,  NavMenu, Navitem, NavLinks, MobileIcon} from './NavbarElements';

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
            <NavMenu>
                <Navitem>
                    <NavLinks >
                      ABOUT
                    </NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to="/event">EVENTS
                    </NavLinks>

                </Navitem>

                <Navitem>
                    <NavLinks to="/blogs">BLOGS
                    </NavLinks>
                </Navitem>
                <Navitem>
                    <NavLinks to="/faq">FAQs
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
