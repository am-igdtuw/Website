import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;


  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(304px, 1fr));
  grid-auto-rows: minmax(1fr, auto);
  align-items: flex-start;
  justify-items: center;
  grid-gap: 20px;
  padding: 0 20px;
  margin-top: 40px;
  z-index:10;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const ServicesCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  width: 304px;
  min-height: 490px;
  background: #0d0a03;
  border-radius: 24px;
  border: 0.5px solid #ffc640;
  padding: 30px;
  transition: all 0.2s ease-in-out;


  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 16px;
  margin-bottom: 20px;
  border: 0.5px solid #ffc640;
  box-shadow: 3px 3px 3px #ffc640;

`;

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  font-family: 'Exo 2', sans-serif;
  z-index:10;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    height: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    height: 1rem;
  }
`;

export const ServicesH2 = styled.h2`
  color: #fffdfa !important;
  //font-family: "Poppins", sans-serif;
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  border-bottom: none;
  text-decoration: none !important;


  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    height: 0.5rem;
    text-decoration: none important;

  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    height: 0.5rem;
  }

`;


export const ServicesLink = styled.a`
  text-decoration: none;
  color: inherit;
`;



export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
