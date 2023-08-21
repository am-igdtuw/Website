import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer,FooterWrap, FooterLinksContainer,FooterLinksWrapper,FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconsLink, SocialIcons, Gap } from './FooterElements';
import Logo from '../../images/2.png'
const Footer = () => {
  return (
    <FooterContainer>
       <FooterWrap>
         <FooterLinksContainer >
            <FooterLinksWrapper>
           
            <FooterLinkItems>
                
                <SocialIcons>
                  
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
                <Gap />
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                       <FooterLink to="/">Contact</FooterLink>
                       {/* <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink> */}
                       <FooterLink to="/">Collaborate</FooterLink>
                </FooterLinkItems>
                <Gap />
            </FooterLinksWrapper>
            <FooterLinksWrapper>
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
         </FooterLinksContainer>
         <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo href="/">
                   <img src={Logo} height={62}/>
                </SocialLogo>
                <WebsiteRights>Assetmantle © {new Date().getFullYear()}  . 
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


