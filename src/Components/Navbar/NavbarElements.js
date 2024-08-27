import styled from "styled-components";
import { Link } from "react-router-dom";
//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.scroll > 0 ? "#FFFFFF40" : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 19;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    overflow: visible;
    padding-top: 20px;
    padding-left: 10px;
    position: sticky; // Change to 'relative' for mobile
    z-index: 100; // Set a higher z-index value
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 19;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    justify-content: start;
  }
`;

export const NavImg = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const NavLogo = styled.h1`
  height: auto;
  width: 150px;
  color: #fff;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 14px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  padding: 16px 50px 0px 90px;
  gap: 21px;

  flex: none;
  order: 1;
  flex-grow: 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 15px;
    margin-top: 44px;
    width: 100%;
    height: auto;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "35px" : "-80vh")};
    left: 0;
    transition: 0.3s ease-in-out;
    background-color: #0d0a03;
    z-index: 99; // Set a lower z-index value
  }
`;

export const NavLinks = styled(Link)`
  width: auto;
  height: 36px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #ffc640;
  ${"" /* flex: none; */}
  align-items: center;
  justify-content: center;
  order: 0;
  flex-grow: 0;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #000000;
  }
`;

export const Navitem = styled.div`
  height: 80px;
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  ${"" /* justify-content: center; */}
  padding: 0px 20px;
  gap: 10px;
  border: 0.5px solid #ffc640;
  width: 120px;
  height: 34px;

  background: linear-gradient(45deg, #000000, #1c1b19);
  border-radius: 22px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: linear-gradient(90deg, #ffc640, #ffc640);
    border: 0.5px solid #000000;
    ${NavLinks} {
      color: #000000;
    }
  }

  &.custom {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 480px) {
    margin: 5px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

// import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom'
// //import {Link as LinkS} from 'react-scroll'

// export const Nav = styled.nav`
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// display: flex;
// justify-content: center;
// align-items: center;
// //width: 100%;
// top: 0px;
// position: sticky;
// height: 80px;
// top: 0;
// z-index: 19;

// overflow-y: hidden;
//   overflow-x: auto;
//   &::-webkit-scrollbar {
//     display: none;
//   }
//   @media screen and (max-width: 768px){
//     transition: 0.8s all ease;
//     overflow: visible;
//     padding-top: 20px;
//     padding-left: 10px;
//     position: relative; // Change to 'relative' for mobile
//     z-index: 100; // Set a higher z-index value
//   }
//   @media screen and (max-width: 480px){
//     //width: auto;
//     //height: auto;
//   }
// `

// export const NavbarContainer = styled.div`
// display: flex;
// flex-direction: row;
// //align-items: flex-start;
// padding: 0px;
// //row-gap: 12px;

// //width: 20rem;
// //height: auto;

// flex: none;
// order: 1;
// flex-grow: 0;

// @media screen and (max-width: 480px){
//   //width: 25rem;
//   //height: auto;
// }
// `

// export const NavLogo = styled.div`
//   height: auto;
//   width: 150px;
//   color: #fff;
//   justify-self: flex-start;
//   font-size: 1.5rem;
//   display: flex;
//   flex-direction:column;
//   margin-left: 6px;
//   margin-top: 5px;
//   font-weight: bold;
//   text-decoration: none;
// `
// export const MobileIcon = styled.div`
//   display: none;
//   align-items: center;
//   margin-bottom: 65px;

//   @media screen and (max-width: 768px){
//     display: block;
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     ${'' /* width: auto; */}
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//     color: #fff;
//     padding-top: 10px;
//   }
// `
// export const NavMenu = styled.ul`
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 16px 50px 0px 90px;
// gap: 21px;
// width: auto;
// height: 45px;

// /* Inside auto layout */

// flex: none;
// order: 1;
// flex-grow: 0;

//   @media screen and  (max-width: 768px){
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 0;
//     gap: 15px;
//     margin-top: 44px;
//     width: 100%;
//     height: auto;
//     position: absolute;
//     top: ${({ isOpen }) => (isOpen ? '40px' : '-80vh')};
//     left: 0;
//     transition: 0.3s ease-in-out;
//     background-color: #0D0A03;
//     z-index: 99; // Set a lower z-index value
//   }

// `
// export const SubLogo = styled.span`
// font-size: 10px; /* Adjust the font size as per your preference */
// color: #fff;
// @media screen and  (max-width: 468px){
//   font-size: 8px;
// }

// // margin-top: 0px;
//   // width: auto;
//   // height: 14px;
//   // display: flex;
//   // justify-content: flex-start;
//   //  margin-top: 0px;
//   // font-weight: 100;
//   // font-size: 10px;
//   // color: #FFF;
//   // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

//   // background: linear-gradient(45deg, #000000, #1c1b19);
//   // border-radius: 1px;

//   // flex: none;
//   // order: 1;
//   // flex-grow: 0;
// `;

// export const Navitem = styled.li`

// box-sizing: border-box;

// /* Auto layout */

// display: flex;
// justify-content: center;
// flex-direction: row;
// align-items: center;
// ${'' /* justify-content: center; */}
// padding: 0px 20px;
// gap: 10px;
// border:0.5px solid #FFC640;
// width:120px;
// height: 34px;

// background: linear-gradient(45deg, #000000, #1c1b19);
// border-radius: 22px;

// /* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;
// &:hover {
//   background: linear-gradient(45deg, #FFC640, #FFC640);
//   border: 0.5px solid #000000;
//   color: #000000;
// }

// &.custom {
//   padding-left: 10px;
//   padding-right: 10px;
// }
// @media screen and (max-width: 480px){
//   margin: 5px;
//  }
// `

// export const NavImg = styled.div`
// width: 400px;
// height: 200x;
// display: flex;
// align-items: flex-start;
// flex-direction: row;
// margin: auto; /* Pushes the container to the left */
// ${'' /* margin-bottom: 20px; */}
// flex: none;
// order: 0;
// flex-grow: 0;
// @media screen and (max-width: 480px){
//  padding-left: 20px;
//  padding-bottom: 20px;
// }
// `;

// export const NavLinks = styled(LinkR)`

//   width: auto;
//   height: 36px;
//   padding: 8px;
//   padding-left: 10px;
//   padding-right: 10px;
//   text-decoration: none;
//   font-style: normal;
//   font-weight: 600;
//   font-size: 14px;
//   line-height: 22px;
//   color: #FFC640;
//   ${'' /* flex: none; */}
//   align-items: center;
//   justify-content: center;
//   order: 0;
//   flex-grow: 0;

//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }

//   &:hover {
//     color: #000000;
//   }
// `;
