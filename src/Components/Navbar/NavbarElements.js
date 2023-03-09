import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 60px 240px 40px;
gap: 10px;

position: relative;
width: 1440px;
height: 142px;

background: #0D0A03;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
// align-items: flex-end;
padding: 0px;
gap: 32px;

width: 501px;
height: 34px;

flex: none;
order: 1;
flex-grow: 0;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  // margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
display: flex;
flex-direction: row;
// align-items: flex-end;
padding: 0px;
gap: 22px;

width: 501px;
height: 34px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

  @media screen and  (max-width: 768px){
    display: none;
  }

`
export const SubLogo = styled.div`
width: 172px;
height: 17px;

// font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #FFFDFA;
flex: none;
order: 1;
flex-grow: 0;
`
export const Navitem = styled.li`
 
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 6px 24px;
gap: 7px;

width: 121px;
height: 34px;

background: #0D0A03;
border-radius: 22px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

export const NavImg = styled.div`
width: 42px;
height: 42px;

flex: none;
order: 0;
flex-grow: 0;
`
export const NavLinks = styled(LinkS)`
width: 73px;
height: 22px;

// font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 22px;
color: #FFC640;
flex: none;
order: 0;
flex-grow: 0;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and  (max-width: 768px){
    display: none;  
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`