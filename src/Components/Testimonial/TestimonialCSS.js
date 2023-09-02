import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 740px;
    ${'' /* display: flex; */}
    background: rgba(255, 255, 255, 0.15);
`;
export const HomeContainer = styled.div`
    display: flex;
    height: 740px;
    justify-content: center;
    ${'' /* margin-top: 30px; */}
    margin-bottom: 80px;
    padding-bottom: 30px;
    background: rgba(255, 255, 255, 0.15);
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
`;

export const ContainerSlider = styled.div`
    width : 65%;
    height: 400px;
    margin-top: 100px;
    margin-bottom: 100px;
`;

export const AvatarHeading = styled.p`
    font-size: 44px;
    color: white;
    font-weight: 600;
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
