import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
display: flex;
/* flex-direction: column; */
/* position: sticky; */
justify-content: center;
align-items: center;
/* padding: 60px 240px 40px; */
/* column-gap: 10px; */
position: absolute;
width: auto;
left: 0px;
height: 142px;
top: 0px;
position: relative;
/* width: 100%; */
height: 80px;
top: 0;
  z-index: 10;

background: #0D0A03;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
row-gap: 32px;

width:auto;
height: 34px;

flex: none;
order: 1;
flex-grow: 0;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.0rem;
  display: flex;
  flex-direction:column;
  align-items: center;
   margin-left: 28px;
  font-weight: bold;
  text-decoration: none;
`
export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    
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
 align-items: center;
padding: 0px 30px 0px 90px;
gap: 21px;
width: auto;
height: 34px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

  @media screen and  (max-width: 768px){
     display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    padding: 0;
    width: 100%;
    height: auto;

  }

`
export const SubLogo = styled.div`
  width: 172px;
  height: 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  color: #FFC640;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  background: linear-gradient(45deg, #000000, #1c1b19);
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Navitem = styled.li`
 
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 20px;
gap: 10px;
border:0.5px solid #FFC640;
width:110px;
height: 34px;

background: linear-gradient(45deg, #000000, #1c1b19);
border-radius: 22px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
&:hover {
  background: linear-gradient(45deg, #FFC640, #FFC640);
  border: 0.5px solid #000000;
  color: #000000;
}
`

export const NavImg = styled.div`
width: 440px;
height: 84px;

flex-direction: row;
align-items: start;
padding-left: 100px;
margin-bottom: 35px;
display: flex;
flex: none;
order: 0;
flex-grow: 0;
`
export const NavLinks = styled(LinkR)`
  width: 73px;
  height: 22px;
  padding: 2px;
  text-decoration: none;
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

  &:hover {
    color: #000000;
  }
`;