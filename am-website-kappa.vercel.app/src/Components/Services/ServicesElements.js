import styled from "styled-components"
export const ServicesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 80px 0;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  text-decoration: none;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  width: 220px;
  height: 220px;
  border-radius: 24px;
  border: 1px solid #ffc640;
  padding: 40px 24px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px gray;
  transition: transform 0.3s ease-in-out;
  background: linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ServicesIcon = styled.img`
  height: 120px;
  width: 130px;
  margin-bottom: 20px;
`;

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 50px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;
  text-decoration: none;
  text-align: center;

  b {
    color: white;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
