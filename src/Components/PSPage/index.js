import React from 'react'
import Icon1 from "../../images/mobileapp.png";
import Icon2 from "../../images/mobileapp.png";
import Icon3 from "../../images/mobileapp.png";
import { InfoContainer, InfoWrapper, InfoRow, TextWrapper, Heading, Subtitle,ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './pspageElements';
  
const ProbStatement = () => {
  return (
    <>
      <InfoContainer id="aboutSection">
        <InfoWrapper>
          <Subtitle>
                <Heading>Welcome to MasterDevChef</Heading>
                <TextWrapper>Embark on a journey to unravel diverse problem statements and flaunt your skills in the captivating arena of MasterDevChef!</TextWrapper>
          </Subtitle>
        <ServicesP>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Frontend Development</ServicesH1>
                  <ServicesH2>
                  Unlock the Frontend Frontier: Discover Challenges Awaiting Your Expertise in Web Development!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
              <ServicesIcon
              src={Icon2}>
                </ServicesIcon>

                <InfoRow>
                  <ServicesH1>Android Development</ServicesH1>
                  <ServicesH2>
                  Dive into App Development Adventures: Explore the Exciting World of Challenges!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon3}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Machine Learning</ServicesH1>
                  <ServicesH2>
                  Machine Learning Marvels: Unearth Challenges that Ignite Your Algorithmic Genius!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
          </ServicesP>


          <ServicesP>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Game Development</ServicesH1>
                  <ServicesH2>
                  Game Development Odyssey: Unleash Your Creativity in the World of Gaming Challenges!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
              <ServicesIcon
              src={Icon2}>
                </ServicesIcon>

                <InfoRow>
                  <ServicesH1>UI/UX</ServicesH1>
                  <ServicesH2>
                  UI/UX Design Delights: Craft User-Centric Experiences through Creative Challenges!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon3}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>AR/VR</ServicesH1>
                  <ServicesH2>
                  AR/VR Wonders Await: Dive into the Immersive World of Creative Challenges!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
          </ServicesP>

          <ServicesP>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>Integrating WEB3</ServicesH1>
                  <ServicesH2>
                  Web3 Integration Adventures: Harness the Power of Blockchain and Decentralized Magic!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
              <ServicesIcon
              src={Icon2}>
                </ServicesIcon>

                <InfoRow>
                  <ServicesH1>Integrating Backend in Frontend</ServicesH1>
                  <ServicesH2>
                  Seamless Backend-to-Frontend Fusion: Integrate Backend to Frontend!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
            <ServicesContainer>
              <ServicesCard>
                <ServicesIcon src={Icon3}>
                </ServicesIcon>
                <InfoRow>
                  <ServicesH1>DSA</ServicesH1>
                  <ServicesH2>
                  DSA Mastery Awaits: Conquer Complex Challenges and develop with the Art of Algorithms!
                  </ServicesH2>
                </InfoRow>
              </ServicesCard>
            </ServicesContainer>
          </ServicesP>

          
          </InfoWrapper> 


          
      </InfoContainer>
    </>
  )
}

export default ProbStatement;
