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

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 2400px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    
    text-align: center; 
     display:flex;
    
    padding: 50px;
    

    width: 712px;
     /* height: 5px; */
    
    font-family: 'Inter';
    color: #FFFDFA;
    font-style: normal;
    font-size: 64px;
  
    font-weight: 600;
    color: white;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Accordian = styled.div`
    width: 800px;

`

export const Item = styled.div`
    margin-bottom:5px;
    padding: 10px 20px;
    
`
export const Title = styled.div`
border-radius: 24px 24px 0px 0px;
padding: 47px 16px;
height: 75px;
display: flex;
margin-top: 10px;
background: #F2AF13;
color: black;
justify-content: space-between;
align-items: center;
cursor: pointer;
`

export const Content = styled.div`
  color: white;
  padding: 24px 56px;
  height: ${({ selected }) => (selected ? 'auto' : '0')};
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  border-radius: 0px 0px 24px 24px;
  background: linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);
`;
