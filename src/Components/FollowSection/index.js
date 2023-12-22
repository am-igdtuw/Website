import React from 'react';
//import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FollowContainer, FollowContent, FollowP } from './FollowElements'

const FollowSection = () => {
  return (
    <>
      <FollowContainer>
        <FollowContent>
          <FollowP>
            {/* FOLLOW US ON OUR SOCIALS TO STAY UPDATED ON WHAT’S HAPPENING IN WEB3-VERSE */}
          </FollowP>
        </FollowContent>
        {/* <SocialIcons>
            <SocialIconsLink href="https://www.instagram.com/assetmantle.igdtuw/" target="_blank"
              area-label="Instagram"
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
          </SocialIcons> */}
      </FollowContainer>
      
    </>
  )
}

export default FollowSection;