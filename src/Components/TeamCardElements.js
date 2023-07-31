import styled, { css, keyframes } from "styled-components";


export const TeamCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 200px; 
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 300px; 
  }
`;

export const InfoText = styled.p`
  font-size: 13px;
  color: black;
`;

export const TechH2 = styled.h2`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: black;
  padding: 3px;
  margin-top: 15px
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  left: 2%;
  background-color: #ffc640;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 50px;

`;


export const TechCard = styled.div`
  background: black;
  border-radius: 10px 10px 0 0;
  border: 0.5px solid #ffc640;
  box-shadow: 0 1px 3px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 7px;
  padding-left: 0px;
  padding-top: 3px;
  padding-bottom: 0px;
  height: 170px;
  width: 190px;
  transition: all 0.2s ease-in-out;
  transform: ${({ showCube }) => (showCube ? 'rotateX(0deg) rotateY(0deg)' : 'none')};
  opacity: ${({ showCube }) => (showCube ? '0.2' : '1')};

  
  cursor: pointer;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 198, 64, 0.16) 0%,
    rgba(255, 198, 64, 0.1024) 100%
  );

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

`;

export const TechContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const TechIcon = styled.img`
  height: 140px;
  width: 137px;
  border-radius: 5%;
  margin-bottom: 0px;
`;


export const TechP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-size: 18px;
  justify-content: center;
  margin-top: 15px;

  a {
    color: white;
    font-size: 17px;
    transition: color 0.2s ease-in-out;
    height: 33px;
    width: 33px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-color: #ffc640;
    background-color: rgba(255, 198, 64, 0.2);
    transition: border-color 0.2s ease-in-out;
    margin-bottom: 9px; 

    display: flex;
    align-items: center;
    justify-content: center;

    &.linkiden:hover {
      color: #0077b5;
    }
    &.twitter:hover {
      color: #1da1f2;
    }
    &.insta:hover {
      color: #e4405f;
    }
  }
`;

export const CubeWrapper = styled.div`
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translateX(-50%, -50%);
  width: 80px;
  height: 50px;
  perspective: 800px;
  transition: transform 1s;
  display: ${({ show }) => (show ? 'block' : 'none')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  z-index: ${({ show }) => (show ? '1' : '-1')};
  pointer-events: none;

  ${({ show }) =>
    show &&
    css`
      transform: translateX(-50%) rotateX(0deg) rotateY(0deg);
      z-index: 1;
    `}

    @media screen and (min-width: 768px) {
        top: 50%;
        left: 60%;
      }


  .cube-container {
    width: 130px;
    height: 130px;
    position: absolute;
    top: -75px;
    left: 50%;
    transform: translateX(-50%) rotateX(30deg) rotateY(-45deg);
    transition: transform 2s;
    transform-origin: right;
    perspective: 800px;
    opacity: ${({ show }) => (show ? '1' : '0')};

    ${({ show }) =>
      show &&
      css`
        transform: translateX(-50%) rotateX(0deg) rotateY(0deg);
      `}
  }
  
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: ${({ show }) => (show ? 'spin 7s linear infinite' : 'none')};
  }
  
  .cube-side {
    width: 90%;
    height: 90%;
    position: absolute;
    border: 1px solid #ffc640;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: rgba(0, 0, 0, 0.8);
    transform-style: preserve-3d;
  }

  .cube-text-wrapper {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .cube-text {
    font-size: 17px;
    font-weight: bold;
    color: white;
  }
  .cube-text-des {
    font-size: 13px;
    color: white;
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
  
  @keyframes spin {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
  }

`;

