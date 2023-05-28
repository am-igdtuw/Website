import styled from "styled-components";
export const TechContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    @media screen and (max-width: 480px) {
        height: 1300 px;
    }
`;
export const TechWrapper = styled.div`
    max-width: 10000;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-column-gap: 40px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;
export const TechCard = styled.div`
    /* background:black; */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    height: 243px;
    width: 203px;
    border: 0.5px solid #ffc640;
    /* padding:10px; */
    /* gap:50px; */
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
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const TechH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;
export const TechP = styled.p`
    font-size: 1rem;
    text-align: center;
`;
