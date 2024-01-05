import styled from 'styled-components'


export const HeroContainer = styled.div`
  //background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1250px;
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
    padding: 30px 20px;
    width: 100%;
    height: 1600px;
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
  @media screen and (max-width: 480px) {
    ${'' /* font-size: 32px; */}
    padding: 30px 20px;
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  text-align: center;
  display: flex;
  padding: 50px 50px;
  padding-top: 1px;
  width: 200px;
  //font-family: 'Poppins', sans-serif;
  font-family: 'Exo 2', sans-serif;
  
  ${'' /* font-family: 'Inter'; */}
  ${'' /* color: #fffdfa; */}
  font-style: normal;
  font-size: 54px;
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
    width: 2rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 200px;
    font-size: 32px;
    padding: 10px 10px;
    text-align: center;
    display: flex;
    width: 5rem;
    ${'' /* padding-left: 1rem; */}
  }
`;

export const Accordian = styled.div`
    width: 800px;
    @media screen and (max-width: 768px){
        width: auto !important;
    }

    @media screen and (max-width: 480px){
        margin-top: 0px;
        width: auto !important;
    }

`

export const Item = styled.div`
    margin-bottom:5px;
    padding: 10px 20px;
    
    @media screen and (max-width: 480px){
        padding: 10px 0px;
  }
    
`
export const Title = styled.div`
  border-radius: 24px 24px 0px 0px;
  padding: 20px;
  ${'' /* <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Edu+NSW+ACT+Foundation&display=swap" rel="stylesheet"> */}
  font-family: 'Poppins', sans-serif;
  ${'' /* font-family: 'Edu NSW ACT Foundation', cursive;   */}
  font-weight: 500;
  font-size: 4 rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #f2af13;
  color: black;
  transition: background 0.3s ease;

  h2 {
    margin: 0;
    font-size: 20px;

  }

  span {
    font-size: 20px;
  }

  &:hover {
    background: #e99d0b;
  }
  
`;

export const Content = styled.div`
  color: white;
  padding: 24px 56px;
  font-weight: 500;
  ${'' /* <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cardo&family=Edu+NSW+ACT+Foundation&display=swap" rel="stylesheet"> */}
  font-family: 'Poppins', sans-serif;
  ${'' /* font-family: 'Edu NSW ACT Foundation', cursive; */}
  height: ${({ selected }) => (selected ? 'auto' : '0')};
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(90deg, rgba(255, 198, 64, 0.5) 0%, rgba(169, 169, 169, 0.67) 100%);
`;
export const InputBox = styled.input`
  padding: 10px;
  margin: 10px 20px;
  width: 760px;
  height: 70px;
  border: 1px solid rgba(255, 198, 64, 0.5);
  border-radius: 20px;
  font-size: 16px;
  background-color: rgba(255, 198, 64, 0.5);
  ::placeholder {
    color: rgba(255, 198, 64, 0.5);
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  margin-left: 680px;
  background-color: #f2af13;
  color: white;
  border: 2px solid #f2af13;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

`;