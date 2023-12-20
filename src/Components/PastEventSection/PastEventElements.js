import styled from "styled-components";
import {Link} from 'react-router-dom'

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

 
 
`;

export const ServicesWrapper = styled.div`
  width auto;
  height: 36rem; /* Adjusted from grid to column for the carousel */
  align-items: center; /* Adjusted from flex-start to center for the carousel */
  
  margin-top: 20px;
  // z-index: 10;



  @media screen and (max-width: 480px) {
     width: 73rem;
     height: auto;
 }
`;

export const ServicesCard = styled.div`
  height: 37rem;
  align-items: center;
  margin: 20px; /* Add a 10px gap around each card */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  min-width: 20px; /* Adjusted from width to min-width for responsiveness */
  background: #0d0a03;
  border-radius: 24px;
  border: 0.5px solid #ffc640;
  padding: 30px;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.02); /* Increase the size on hover */
    /* Add any additional styles you want on hover */
  }
  @media screen and (max-width: 480px) {
    width: auto;
    height: auto;
}
  
`;

export const ServicesIcon = styled.img`
  height: 25rem;
  border-radius: 16px;
  margin-bottom: 20px;
  border: 0.5px solid #ffc640;
  box-shadow: 3px 3px 3px #ffc640;
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-family: 'Exo 2', sans-serif;
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
    height: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.6rem;
    height: 1rem;
  }
`;

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ServicesH2 = styled.h2`
  color: #fffdfa !important;
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border-bottom: none;
  text-decoration: none !important;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    height: 0.5rem;
    text-decoration: none important;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    height: 0.5rem;
  }
`;

export const ServicesLink = styled.a`
  text-decoration: none;
  color: #ffc640;
  margin-top: auto;
  align-self: flex-end;

  @media screen and (max-width: 480px){
    text-decoration: none;
    margin-top: 60px;
    align-self: flex-end;

  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;


// import logo from 'src/logo.svg'

export const FooterContainer = styled.footer`
background: rgba(255, 255, 255, 0.15);
  z-index: 2;

`

export const FooterWrap = styled.div`
 padding: 48px 24px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 max-width: 1100px;
 margin: 0 auto;
 z-index: 12;
 
 @media screen and (max-width: 768px) {
    ${'' /* height: auto; */}
    display: flex;
    flex-direction: column;
    justify-content: center;
 }

`

export const FooterLinksContainer = styled.div`
 display: flex;
 justify-content: center;
 z-index: 2;

 @media screen and (max-width: 768px) {
    padding-top: 32px;
 }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 2;

  gap:20px;
//   @media screen and(max-width: 768px) {
//    flex-wrap: wrap;
//   }
`

export const FooterLinkItems = styled.div`
 display: flex;
 flex-direction: column;
 align-items: centre;
 margin: 62px;
 margin-left: 20px;
 text-align: centre;
 width: 160px;
 box-sizing: border-box;
 color: #ffffff;
 z-index: 2;

 @media screen and (max-width: 420px) {
    margin: 10px;
    padding: 5px;
    width: 100%;
 }
`
export const div = styled.div`
width: 200px;
  height: 100px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;

 @media screen and (max-width: 420px) {
    margin: 10px;
    padding: 5px;
    width: 100%;
 }
`
export const FooterLinkTitle = styled.h1`
 font-size: 18px;
 margin-bottom: 16px;
 z-index: 2;
 font-weight:600;
 color:#fff;
`
export const FooterLink = styled(Link)`
 color: #FFC640;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;
 z-index: 2;
 font-size: 14px;

 &:hover {
   color: #FFC640;
    transition: 0.3s ease-out;
    text-decoration: underline;
 }
`
export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 100%;
 z-index: 2;
`

export const SocialMediaWrap = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 max-width: 1100px;
 margin: 45px 40px 0 auto;
 z-index: 2;

 @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
 }
`

 export const SocialLogo = styled.a`
  color: #fff;
 justify-self: start;
  cursor: pointer;
  text-decoraton: none;
  font-size: 1.5rem;
  display: flex;
 align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  z-index: 2;
  
 `
export const WebsiteRights = styled.small`
 color: #fff;
 margin-bottom: 16px;
 z-index: 2;
`

export const SocialIcons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100px;
 z-index: 2;
`

export const SocialIconsLink = styled.a`
 color: #fff;
 z-index: 2;
 font-size: 24px;
 &:hover{
   color:#ffc640;
   transition: 0.3s ease-out;
 }
`

export const Gap = styled.div`
  margin: 24px 0; 
  z-index: 2;
`;

export const Description = styled.div`
  

  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  z-index: 1;

  // ${ServicesCard}:hover & {
  //   display: block;
  //   cursor:pointer;
  //   font-size: 20px;
  // }

  

`;
