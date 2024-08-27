import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import bg from "../../../images/bg.svg";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 0 30px;
  height: 70vh;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
  top: 50px;

  @media screen and (max-width: 900px) {
    height: 40vh;
    top: 0; /* Changed to remove extra space for smaller screens */
    margin-left: 0; /* Adjusted for smaller screens */
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    background: #000;
  }
`;

export const Imgbg = styled.div`
  object-fit: cover;
  margin-right: 0px;
  top: -770.06px;
  position: absolute;
  left: 154.28px;
`;

export const HeroContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centered content */
  width: 100%;
  @media screen and (max-width: 900px) {
    margin-top: 50px;
    align-items: center; /* Centered content for smaller screens */
  }
`;

export const HeroH1 = styled.h1`
  text-align: center; /* Centered text */
  margin-bottom: 20px;
  font-family: "Exo 2", sans-serif;
  color: #fffdfa;
  font-style: normal;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: white;
  word-wrap: break-word;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center; /* Centered text for smaller screens */
    justify-content: center;
  }
`;

export const HeroD = styled.span`
  color: #ffc640;
  font-family: "Exo 2", sans-serif;
  font-style: normal;
`;

export const HeroP = styled.p`
  width: 100%;
  max-width: 640px;
  margin-top: 1.5rem;
  box-sizing: border-box;
  font-family: "Exo 2", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center; /* Centered text */
  background: linear-gradient(
    180deg,
    rgba(255, 198, 64, 0.6) 0%,
    rgba(242, 175, 19, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center; /* Centered buttons */
  justify-content: center; /* Centered buttons */
`;

export const Heroimg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const CubeWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 150px;
  perspective: 800px;
  transition: transform 1s;
  pointer-events: none;

  .cube {
    width: 120px;
    height: 120px;
    position: relative;
    transform-style: preserve-3d;
    animation: spin 9s linear infinite; /* Add this animation */
  }

  .cube-side {
    width: 110%;
    height: 110%;
    position: absolute;
    border: 2px solid #ffc640;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    transform-style: preserve-3d;
  }

  .cube-side.front {
    transform: translateZ(85px);
  }
  .cube-side.back {
    transform: rotateX(180deg) translateZ(85px);
  }
  .cube-side.right {
    transform: rotateY(-90deg) translateZ(85px);
  }
  .cube-side.left {
    transform: rotateY(90deg) translateZ(85px);
  }
  .cube-side.top {
    transform: rotateX(-90deg) translateZ(85px);
  }
  .cube-side.bottom {
    transform: rotateX(90deg) translateZ(85px);
  }

  @media screen and (max-width: 768px) {
    top: 85%;
  }

  @media screen and (max-width: 480px) {
    top: 85%;
  }

  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }
`;

export const SocialIcons = styled.div`
  padding: 3rem 0rem;
  ${"" /* margin-left: 10px; */}
  ${"" /* margin-bottom: 20px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    justify-content: center; /* Center icons */
    gap: 15px; /* Spacing between icons */
  }

  @media screen and (max-width: 480px) {
    padding: 2rem 0rem; /* Reduced padding for mobile */
    width: 100%;
    justify-content: center;
    gap: 10px; /* Adjusted gap for mobile */
  }
`;

export const SocialIconsLink = styled.a`
  color: #fff;

  ${"" /* z-index: 2; */}
  font-size: 36px;
  margin: 0 10px;
  &:hover {
    color: #ffc640;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin: 0 8px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px; /* Adjust icon size for smaller screens */
    margin: 0 6px; /* Adjusted margin for smaller screens */
  }
`;
