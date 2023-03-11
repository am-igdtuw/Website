import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/Logo.png'
import {Nav, NavbarContainer, NavLogo,NavImg,SubLogo,  NavMenu, Navitem, NavLinks, MobileIcon} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavImg>
              <img src={Logo} height={32}/>
            </NavImg>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <Navitem>
                    <NavLinks to="/UMatter">
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
