import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 110vh;
    ${'' /* display: flex; */}
    flex-direction: column; 
    justify-content: center;
    @media screen and (max-width: 480px) {
        height: 165vh;
    }
        
    
`;
export const HomeContainer = styled.div`
    display: flex;
    height: 1200px;
    justify-content: center;
    ${'' /* margin-top: 30px; */}
    margin-bottom: 80px;
    padding-bottom: 30px;
    ${''/* background gradient */}
    @media screen and (max-width: 480px) {
        height: auto;
        margin-bottom: 0px;
        }
   
`;

export const Heading = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 50px 50px;
    padding-top: 20px;
    width: auto;
    color: white;
    height: 8rem;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-size: 54px;
    font-weight: 600;
    @media screen and (max-width: 480px) {
        padding-top:10px;
        padding: 0px 0px;
        margin-bottom: 80px;
    }
`;

export const ContainerSlider = styled.div`
    width : 65%;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const AvatarHeading = styled.p`
    font-size: 34px;
    color: white;
    font-weight: 500;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
`

export const AvatarComponent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: black;
   
`

export const AvatarTitle= styled.span`
    font-weight: 500;
    color: white;

`;

export const AvatarChar = styled.p`
    font-style: italic;
    ${'' /* margin-top: 10px; */}
`
export const AvatarContent = styled.p`
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-weight: 200;
    color: white;

`
