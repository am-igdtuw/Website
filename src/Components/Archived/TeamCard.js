import React, { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  TeamCardWrapper,
  CubeWrapper,
  TechContent,
  AdditionalInfo,
  InfoText,
  TechCard,
  TechIcon,
  TechH2,
  TechP,
} from "./TeamCardElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TeamCard = ({
  imageUrl,
  linkedinUrl,
  twitterUrl,
  instagramUrl,
  name,
  position,
  cubetextTitle,
  cubetextDesc,
}) => {
  const [showCube, setShowCube] = useState(false);

  const handleCardClick = () => {
    setShowCube(!showCube);
  };

  return (
    <>
      <TeamCardWrapper>
        <TechCard onClick={handleCardClick} showCube={showCube}>
          <TechContent>
            <TechIcon src={imageUrl} />
            <TechP>
              <a
                className="linkiden"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="twitter"
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon="fa-brands fa-x-twitter"
                  style={{ verticalAlign: "middle" }}
                />
              </a>
              <a
                className="insta"
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </TechP>
          </TechContent>
          <AdditionalInfo>
            <TechH2>{name}</TechH2>
            <InfoText>{position}</InfoText>
          </AdditionalInfo>
        </TechCard>
        <CubeWrapper show={showCube}>
          <div className="cube-container">
            <div className="cube">
              <div className="cube-side front"></div>
              <div className="cube-side back"></div>
              <div className="cube-side right"></div>
              <div className="cube-side left"></div>
              <div className="cube-side top"></div>
              <div className="cube-side bottom"></div>
            </div>
          </div>
          <div className="cube-text-wrapper">
            <div className="cube-text">{cubetextTitle}</div>
            <p className="cube-text-des">{cubetextDesc}</p>
          </div>
        </CubeWrapper>
      </TeamCardWrapper>
    </>
  );
};

export default TeamCard;
