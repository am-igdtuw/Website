import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import logo from 'src/logo.svg'

export const FooterContainer = styled.footer`
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
 z-index: 2;
 
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
 margin: 16px;
 margin-left: 20px;
 text-align: centre;
 width: 260px;
 box-sizing: border-box;
 color: #fff;
 z-index: 2;

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
`
export const FooterLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 margin-bottom: 0.5rem;
 font-size: 14px;
 z-index: 2;
 font-size: 16px;

 &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
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
 margin: 40px auto 0 auto;
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
`

export const Gap = styled.div`
  margin: 24px 0; 
  z-index: 2;
`;