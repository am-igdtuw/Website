import styled from "styled-components";


export const ServicesContainer = styled.div`
    @media screen and (min-width: 750px){
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }
    
    position: relative;
    box-sizing:border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;


export const ServicesCard = styled.div`
    position: relative;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 11px 49px 0px rgba(0, 0, 0, 0.15);
    margin-bottom: 30px;

`;

export const ServicesIcon = styled.img`
    position: relative;
    border: 10px solid #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    transition: transform 0.2s ease; /* Add a smooth transition effect */
  &:hover {
    transform: rotate(13deg);
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.25em;
`;

export const ServicesH2 = styled.h2`
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    margin: 0px 0px 15px;
`;

export const InfoRow=styled.div`
    position: relative;
    text-align: center;
    padding: 27px 27px 27px
`;