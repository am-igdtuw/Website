import styled, { css, keyframes } from "styled-components";
// export const TechContainer = styled.div`
//     height: 100%;
//     width: 100%;
//     margin-top: 0px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background: black;
// `;
// export const TechWrapper = styled.div`
//     background:black;
//     max-width: 100%;
//     height: 100%;
//     margin: 0 auto;
//     display: flex;
//     // grid-template-columns: 2fr 1fr 1fr;
//     flex-wrap: wrap;
//     align-items: center;
//     justify-content: center;
//     // grid-column-gap: 40px;
//     padding: 0 50px;
//     margin-bottom: 50px;

//     // @media screen and (max-width: 1000px) {
//     //     grid-template-columns: 1fr 1fr;
//     // }
//     // @media screen and (max-width: 768px) {
//     //     grid-template-columns: 1fr;
//     //     padding: 0 20px;
//     // }
// `;
// export const TechCard = styled.div`
//     background:black; 
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-left: 20px;
//     border-radius: 10px;
//     height: 270px;
//     width: 250px;
//     border: 0.5px solid #ffc640;
//     /* padding:10px; */
//     /* gap:50px; */
//     margin-bottom: 10px;
//     box-shadow: 0 1px 3px gray;
//     transition: all 0.2s ease-in-out;
//     background: linear-gradient(
//         180deg,
//         rgba(255, 198, 64, 0.16) 0%,
//         rgba(255, 198, 64, 0.1024) 100%
//     );
//     ${props =>
//         css`
//           @media screen and (max-width: 768px) {
//             margin: 40px;
//           }
//         `}
//     &:hover {
//         transform: scale(1.02);
//         transition: all 0.2s ease-in-out;
//         cursor: pointer;
//     }
// `;
// export const TechIcon = styled.img`
//     height: 240px;
//     width: 200px;
//     margin-bottom: 10px;
// `;
// export const TechH1 = styled.h1`
//     font-size: 2.5rem;
//     content-fit: 100%;
//     color: #ffc640;
//     color:white;
//     margin: 50px;
//     @media screen and (max-width: 480px) {
//         font-size: 2rem;
//     }
// `;
// export const TechH2 = styled.h2`
//     font-size: 1rem;
//     text-align: center;
//     // margin-bottom: 10px;
//     color:white;
// `;
// export const TechP = styled.p`
//     font-size: 1rem;
//     text-align: center;
//     color:white;
//     display: flex;
//     gap: 10px;
//     font-size: 20px;

//     a {
//         color: white;
//         font-size: 20px;
//         transition: color 0.2s ease-in-out;

//         height: 40px;
//         width: 40px;
//         border-radius: 50%;
//         border: 2px solid transparent;
//         border-color:#ffc640;
//         background-color:  rgba(255, 198, 64, 0.2);
//         transition: border-color 0.2s ease-in-out;
    
//         &.linkiden:hover {
//           color: #0077B5; 
//         }
//         &.twitter:hover {
//             color: #1DA1F2;
//         }
//         &.insta:hover {
//             color:#E4405F;
//         }

//     }
// `;

export const OuterBorder = styled.div`
  border: 3px solid #ffc640;  
  padding: 5px;
  background: black;
`;

export const InnerBorder = styled.div`
  border: 2px solid #ffc640;
  padding: 8px;
`;


export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  padding-left: 20px; 
`;

export const VerticalText = styled.h1`
  font-size: 2.5rem;
  padding: 5px;
  color: #ffc640;
  writing-mode: vertical-lr;
  text-orientation: sideways; 
  transform: rotate(180deg);
  width: 5%;
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
`;

export const TechContainer = styled.div`
  background: black;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  //opacity: ${({ showCube }) => (showCube ? '1' : '0')};
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


export const TechWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;

  ${TechCard}:nth-child(2) {
    margin-bottom: 20px;
  }
  ${TechCard}:nth-child(3),
  ${TechCard}:nth-child(4) {
    margin-bottom: 40px;
  }

  ${props =>
    props.mobile &&
    css`
      ${TechCard} {
        width: 150px;
      }
    `}
`;

export const CubeWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 320%;
  width: 130px;
  height: 130px;
  perspective: 800px;
  transition: transform 1s;
  display: ${({ show }) => (show ? 'block' : 'none')};

  ${({ show }) =>
    show
      ? css`
          transform: translateX(-50%) rotateX(0deg) rotateY(0deg);
          z-index: 1;
          pointer-events: none;
        `
      : css`
          transform: translateX(100%) rotateX(30deg) rotateY(-45deg);
          z-index: -1;
          pointer-events: none;
        `}


  .cube-container {
    width: 130px;
    height: 130px;
    position: absolute;
    top: 0;
    right: 160%;
    transform: translateX(${({ show }) => (show ? '10%' : '100%')}) rotateX(30deg) rotateY(-45deg);
    transition: transform 2s;
    transform-origin: right;
    perspective: 800px;
    ${({ show }) => show && 'transform: translateX(-50%) rotateX(0deg) rotateY(0deg);'}
  }
  
  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: ${({ show }) => (show ? 'spin 7s linear infinite' : 'none')};
  }
  
  .cube-side {
    width: 100%;
    height: 100%;
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
    left: -210%;
    width: 130%;
    height: 130%;
    justify-content: center;
    align-items: center;
  }

  .cube-text {
    font-size: 17px;
    font-weight: semi-bold;
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

