import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLogo,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconsLink,
  SocialIcons,
  InputBox1,
  FaqInsidBox,
  SubmitButton
} from "./FooterElements";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { margin } from "@mui/system";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  window.addEventListener("load", () => {
    const emailSection = document.getElementById("emailSection");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/faq?email=${encodeURIComponent(
      email
    )}#emailSection`;
  };
  const handleTopToPage = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLink
                style={{ marginLeft: "-25px" }}
                to="assetmantleigdtuw@gmail.com"
              >
                assetmerkle@gmail.com
              </FooterLink>
              <FaqInsidBox>
                <InputBox1
                  type="email"
                  placeholder="Your Email..."
                  value={email}
                  onChange={handleEmailChange}
                />
                <SubmitButton type="submit" onClick={handleFormSubmit}>
                  <FaPaperPlane />
                </SubmitButton>
              </FaqInsidBox>

              <SocialIcons
                style={{ marginLeft: "-25px" }}
                to="assetmantleigdtuw@gmail.com"
              >
                <SocialIconsLink
                  href="https://www.instagram.com/assetmerkle.igdtuw/"
                  target="_blank"
                  area-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://twitter.com/AM_igdtuw"
                  target="_blank"
                  area-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon="fa-brands fa-x-twitter"
                    style={{ verticalAlign: "middle" }}
                  />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://www.linkedin.com/company/asset-merkle/mycompany/"
                  target="_blank"
                  area-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconsLink>
              </SocialIcons>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Useful Links</FooterLinkTitle>
              <FooterLink to="/" onClick={handleTopToPage}>About</FooterLink>
              <FooterLink to="/event" onClick={handleTopToPage}>Events</FooterLink>
              {/* <FooterLink to="/signin">Careers</FooterLink>
                       <FooterLink to="/signin">Investors</FooterLink>
                       <FooterLink to="/signin">Terms of Services</FooterLink> */}
            </FooterLinkItems>
            {/* <Gap /> */}
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              {/* <FooterLink to="/">Contact</FooterLink> */}
              {/* <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink> */}
              <FooterLink to="/sponsorPage" onClick={handleTopToPage}>Sponsor</FooterLink>
              <FooterLink to="/collaboratePage" onClick={handleTopToPage}>Collaborate</FooterLink>
              <FooterLink to="/faq" onClick={handleTopToPage}>FAQs</FooterLink>
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
              <FooterLink to="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank">
                Instagram
              </FooterLink>
              {/* <FooterLink to="/">Facebook</FooterLink>
                       <FooterLink to="/">Youtube</FooterLink> */}
              <FooterLink to="https://twitter.com/AM_igdtuw" target="_blank">
                Twitter
              </FooterLink>
              <FooterLink to="https://www.linkedin.com/company/asset-merkle/mycompany/" target="_blank">
                LinkedIn
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>
              <Link to="/" onClick={handleLogoClick}>
                <img src={Logo} height={44} alt="Logo" />
              </Link>
              <FooterLogo>
                AssetMerkle
                {/* <SubLogo>Student Chapter IGDTUW</SubLogo> */}
              </FooterLogo>
            </SocialLogo>
            <WebsiteRights>
              Assetmerkle © {new Date().getFullYear()} . All rights reserved.
            </WebsiteRights>
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
  );
};

export default Footer;