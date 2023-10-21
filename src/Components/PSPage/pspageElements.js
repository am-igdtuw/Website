import styled from "styled-components";

export const TextWrapper= styled.div`
     margin-top: 20px;
    margin-bottom: 0px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 500;
    margin: 0px 0px 15px;
`;

export const InfoContainer = styled.div`
    position: relative;
    padding: 80px 0 50px;
    z-index: 999;
    ::before{
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 230px;
    background-color: #f7bd00;
    }
`;

export const InfoWrapper = styled.div`
    position: static;
    max-width: 1200px;
    padding: 0px 15px;
    margin: 0 auto;
 
`;


export const Heading = styled.h1`
    margin-top: 45px;
    font-size: 65px;
    font-weight: 600;
    color: #000;
    text-align: center;

    @media screen and (max-width: 480px) {
        margin-top: 25px;
        font-size: 22px;
    }

`;

export const Subtitle = styled.p`
    
    position: relative;
    margin-bottom: 50px;
`;




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

export const ServicesWrapper1 = styled.div`
    max-width: 1300px;
    /* height: 225px; */
    position:static;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 100px;
    padding: 0px 15px;
    @media screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const ServicesWrapper2 = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 549px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const ServicesCol = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    //width: 100%;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    
`;

export const ServicesRow = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    height: 150px;
    //width: 100%;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    
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

export const ServicesP = styled.p`
   display: flex;
    
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing:border-box;
`;
export const InfoRow=styled.p`
    position: relative;
    text-align: center;
    padding: 27px 27px 27px
`;
export const TopLine=styled.p`
 margin-bottom: 15px;
 color:black;
 font-size: 26px;
 font-weight: 700;
`;