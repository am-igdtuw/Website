import styled, { css } from "styled-components";
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

export const TechCard = styled.div`
  background: black;
  border-radius: 10px;
  border: 0.5px solid #ffc640;
  box-shadow: 0 1px 3px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  height: 240px;
  width: 180px;
  transition: all 0.2s ease-in-out;
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

export const TechIcon = styled.img`
height: 130px;
width: 120px;
border-radius: 5%;
margin-bottom: 7px;
`;

export const TechH2 = styled.h2`
  font-size: 18px;
  text-align: center;
  color: white;
`;

export const TechP = styled.p`
  font-size: 1rem;
  text-align: center;
  display: flex;
  gap: 10px;
  font-size: 18px;
  justify-content: center;

  a {
    color: white;
    font-size: 20px;
    transition: color 0.2s ease-in-out;

    height: 36px;
    width: 36px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-color: #ffc640;
    background-color: rgba(255, 198, 64, 0.2);
    transition: border-color 0.2s ease-in-out;

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