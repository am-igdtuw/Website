import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  Heroimg,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
} from "./HeroElements";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { Button } from "../../ButtonElements";
import { FaWhatsapp } from "react-icons/fa";
//import bg from '../../images/bg.svg'
//import DynamicBackground from './DynamicBg';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SocialIconsLink, SocialIcons } from "./HeroElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const joinGroup = () => {
    const watsGroupLink = "https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H";
    window.open(watsGroupLink, "_blank");
  };
  const customH1Styles = {
    background: "-webkit-linear-gradient( 120deg, #D9D9D9 10%, #F8B228 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    fontSize: "3.7rem",
    fontWeight: "600",
    fontFamily: "Exo 2, sans-serif",
    color: "transparent",
    margin: "0 !important",
    animation: "gradientAnimation 6s ease-in-out infinite",
    "@keyframes gradientAnimation": {
      "0%": {
        backgroundPosition: "0 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0 50%",
      },
    },
    "@media screen and (max-width: 480px)": {
      fontSize: "2.1rem",
      fontWeight: "800",
    },
  };

  // const RightSubSectionJSX = (
  //     // Hero Image
  //     <img
  //         src="/image/logo/5bg.png"
  //         alt="hero_image"
  //         style={{
  //             width: "100%",
  //             height: "70vh",
  //             objectFit: "contain",
  //             paddingleft: "25%",
  //             marginTop: "0",
  //             alignItems: "center",
  //         }}
  //     />
  // );

  function isPhone() {
    return window.innerWidth <= 768;
  }

  const imageStyle = {
    width: "100%",
    height: isPhone() ? "50vh" : "70vh",
    objectFit: "contain",
    marginTop: "0",
    alignItems: "center",
  };

  const RightSubSectionJSX = (
    <img src="/image/logo/5bg.png" alt="hero_image" style={imageStyle} />
  );

  return (
    <>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container alignItems="center" justifyContent="space-around">
          <Grid
            item
            xs={10}
            md={6}
            py={6}
            sx={{ backgroundColor: "transparent" }}
          >
            <HeroContainer>
              <HeroContent>
                <HeroH1>Empowering Students to Shape a Trustworthy </HeroH1>{" "}
                {/* <HeroH1><HeroD>Web3</HeroD> World</HeroH1> */}
                <Typography
                  variant="h3"
                  color="#ffffe6"
                  // align={}
                  sx={customH1Styles}
                >
                  World with Web3
                </Typography>
                <HeroBtnWrapper>
                  <Button
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    onClick={joinGroup}
                    style={{
                      fontFamily: "Exo 2, sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    <Heroimg as={FaWhatsapp} />
                    JOIN COMMUNITY
                  </Button>
                </HeroBtnWrapper>
                <SocialIcons>
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
              </HeroContent>
            </HeroContainer>
          </Grid>
          <Grid item xs={10} md={5}>
            {RightSubSectionJSX}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeroSection;
