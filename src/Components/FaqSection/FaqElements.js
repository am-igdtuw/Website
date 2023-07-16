import styled from 'styled-components'


export const HeroContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1588px;
  position: relative;
  z-index: 1;
  align-items: center;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }


  @media screen and (max-width: 1024px) {
    ${'' /* font-size: 48px; */}
    padding: 50px 150px;
  }

  @media screen and (max-width: 768px) {
    ${'' /* font-size: 40px; */}
    padding: 50px 50px;
  }

  @media screen and (max-width: 480px) {
    ${'' /* font-size: 32px; */}
    padding: 50px 30px;
  }

`;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 2400px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  text-align: center;
  display: flex;
  padding: 50px 50px;
  width: 712px;
  font-family: 'Inter';
  ${'' /* color: #fffdfa; */}
  font-style: normal;
  font-size: 64px;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
    padding: 50px 150px;
    text-align: center;
    ${'' /* width: 50rem; */}
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    padding: 20px 2px;
    text-align: center;
    display: flex;
    width: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 20px 20px;
    text-align: center;
    display: flex;
    width: 3rem;
  }
`;

export const Accordian = styled.div`
    width: 800px;
    @media screen and (max-width: 768px){
        width: 430px;
    }

    @media screen and (max-width: 480px){
        width: 380px;
    }

`

export const Item = styled.div`
    margin-bottom:5px;
    padding: 10px 20px;
    
    
`
export const Title = styled.div`
  border-radius: 24px 24px 0px 0px;
  padding: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f2af13;
  color: black;
  transition: background 0.3s ease;

  h2 {
    margin: 0;
  }

  span {
    font-size: 24px;
  }

  &:hover {
    background: #e99d0b;
  }

  
`;

export const Content = styled.div`
  color: white;
  padding: 24px 56px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  height: ${({ selected }) => (selected ? 'auto' : '0')};
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);
`;
