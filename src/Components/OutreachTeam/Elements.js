import styled from "styled-components";
export const TechContainer = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
`;
export const TechWrapper = styled.div`
    background:black;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    // grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    // grid-column-gap: 40px;
    padding: 0 50px;
    // margin-bottom: 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const TechCard = styled.div`
    background:black; 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    border-radius: 10px;
    height: 250px;
    width: 250px;
    border: 0.5px solid #ffc640;
    /* padding:10px; */
    /* gap:50px; */
     margin-bottom: 10px;
    box-shadow: 0 1px 3px gray;
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
    height: 240px;
    width: 200px;
    margin-bottom: 10px;
`;
export const TechH1 = styled.h1`
    font-size: 2.5rem;
    color: #ffc640;
    color:white;
    margin: 64px;
    margin: 20px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const TechH2 = styled.h2`
    font-size: 1rem;
    text-align: center;
    // margin-bottom: 10px;
    color:white;
`;
export const TechP = styled.p`
    font-size: 1rem;
    text-align: center;
    color:white;
`;
