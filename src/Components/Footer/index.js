import React from 'react'
import { FaLinkedin, FaInstagram} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLogo, FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconsLink, SocialIcons } from './FooterElements';
import Logo from '../../images/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer >
            <FooterLinksWrapper>
           
            <FooterLinkItems>
            <FooterLink style={{marginLeft: "-25px"}} to="assetmantleigdtuw@gmail.com">assetmantleigdtuw@gmail.com</FooterLink>
                <SocialIcons>
                  
                <SocialIconsLink href="https://www.instagram.com/assetmantle.igdtuw/" target="_blank"
                area-label="Instagram">
                  <FaInstagram />
                </SocialIconsLink>
                <SocialIconsLink href="https://twitter.com/AM_igdtuw" target="_blank"
                area-label="Twitter">
                 <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} />
                </SocialIconsLink>
                <SocialIconsLink href="https://www.linkedin.com/company/asset-mantle-igdtuw/" target="_blank"
                area-label="Linkedin">
                  <FaLinkedin />
                </SocialIconsLink>
                </SocialIcons> 
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Useful Links</FooterLinkTitle>
                       <FooterLink to="/">About</FooterLink>
                       <FooterLink to="/event">Events</FooterLink>
                       {/* <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Services</FooterLink> */}
                </FooterLinkItems>
                {/* <Gap /> */}
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/">Contact</FooterLink>
                       {/* <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink> */}
                       <FooterLink to="/">Collaborate</FooterLink>
                       <FooterLink to="/faq">FAQs</FooterLink>
                </FooterLinkItems>
                {/* <Gap /> */}
                {/* <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                       <FooterLink to="/">Submit Video</FooterLink>
                       <FooterLink to="/">Ambassdors</FooterLink>
                       <FooterLink to="/">Agency</FooterLink>
                       <FooterLink to="/">Influencer</FooterLink>
                </FooterLinkItems> */}
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                       <FooterLink to="https://www.instagram.com/assetmantle.igdtuw/">Instagram</FooterLink>
                       {/* <FooterLink to="/">Facebook</FooterLink>
                       <FooterLink to="/">Youtube</FooterLink> */}
                       <FooterLink to="https://twitter.com/AM_igdtuw">Twitter</FooterLink>
                       <FooterLink to="https://www.linkedin.com/company/asset-mantle-igdtuw/">LinkedIn</FooterLink>
                </FooterLinkItems>
                
            </FooterLinksWrapper>
            <FooterLinksWrapper>
           
            </FooterLinksWrapper>
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo >
                <Link to="/" onClick={handleLogoClick}>
                  <img src={Logo} height={44} alt="Logo" />
                </Link>
                   <FooterLogo>
                    AssetMerkle 
                    {/* <SubLogo>Student Chapter IGDTUW</SubLogo> */}
                  </FooterLogo>

                </SocialLogo>
                <WebsiteRights>Assetmerkle © {new Date().getFullYear()}  . 
                All rights reserved.</WebsiteRights>
                {/* <SocialIcons>
                <SocialIconsLink href="https://www.instagram.com/assetmantle.igdtuw/" target="_blank"
                area-label="Instagram">
                  <FaInstagram />
                </SocialIconsLink>
                <SocialIconsLink href="https://twitter.com/AM_igdtuw" target="_blank"
                area-label="Twitter">
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink href="https://www.linkedin.com/company/asset-mantle-igdtuw/" target="_blank"
                area-label="Linkedin">
                  <FaLinkedin />
                </SocialIconsLink>
                </SocialIcons>  */}
            </SocialMediaWrap>
         </SocialMedia>
       </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;
