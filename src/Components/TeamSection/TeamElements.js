// import React from "react";
import styled from "styled-components";

export const TeamContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 3;

    @media screen and (max-width: 768px) {
        height: auto;
        justify-content: center;
    align-items: left;
    }

    @media screen and (max-width: 480px) {
        height: auto;
        width: 80%;

        }
`

export const TeamHead = styled.h1`
    text-align: center;
    padding: 40px 50px 50px;
    color: white;
    font-family: 'Exo 2', sans-serif;
    font-size: 47px;
    font-weight: 600;

    @media screen and (max-width: 1024px) {
        font-size: 48px;
        padding: 50px 150px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
        padding: 20px 2px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
        padding: 10px 10px;
        margin-left:-80px;
    }
`

export const TeamMembersCard = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    margin: 18px;
    color: #F2AF13;
    transition: transform 0.3s ease;
    width: 15rem;
    text-align: center;
    font-family: 'Exo 2', sans-serif;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        height: auto;
        
    }
`

export const TeamWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 5rem;
    padding: 2rem;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    color: white;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        align-items: left;
        margin-left: 60px;
        width: 90%;
    }

`

// export const TeamListWrapper3 = styled.div`
//     display: flex;
//     fex-wrap: wrap;
//     gap: 1rem;
//     width: 60rem;
//     justify-content: center;
//     align-items: center;
//     margin: 0 auto;

//     @media screen and (max-width: 1024px) {
//         grid-template-columns: repeat(2, minmax(320px, 1fr));
//         width: 100%;
//     }

//     @media screen and (max-width: 480px) {
//         grid-template-columns: repeat(1, minmax(320px, 1fr));
//         width: 100%;
//     }
// `

export const TechP = styled.p`
    font-size: 20px;
    text-align: center;
    color: white;
    display: flex;
    gap: 10px;
    justify-content: center;
    text-align: center;

    a {
        color: white;
        font-size: 20px;
        transition: color 0.2s ease-in-out;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-color: #ffc640;
        background-color: rgba(255, 198, 64, 0.2);
        transition: border-color 0.2s ease-in-out;

        &.linkiden:hover {
            color: #0077B5;
        }

        &.twitter:hover {
            color: #1DA1F2;
        }

        &.insta:hover {
            color: #E4405F;
        }
    }
`;

export const TeamListWrapper2 = styled.div`
    display: flex;
    flex-wrap:wrap;
    grid-template-columns: repeat(2, minmax(320px, 1fr));
    gap: 1.5rem;
    width: 60rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(320px, 1fr));
        width: 100%;
    }
    
`

export const TeamListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: repeat(4, minmax(320px, 1fr));
    gap: 1rem;
    width: 80rem;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    // @media screen and (max-width: 480px) {
    //     grid-template-columns: repeat(1, minmax(320px, 1fr));
    //     width: 100%;
        @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, minmax(320px, 1fr));
            width: 100%;
        }
    
        @media screen and (max-width: 480px) {
            grid-template-columns: repeat(1, minmax(320px, 1fr));
            width: 100%;
        }
    
    // }
`

export const TeamName = styled.h2`
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-size: 2.3rem;
    font-weight: 100;
    margin-bottom: 0.5rem;
`

export const MemberImg = styled.img`
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    border: 2px solid transparent;
    margin: 17px auto 0;
    overflow: hidden;
    @media screen and (max-width: 480px) {
        align-items: left;
        width: 100%;
        height: 100%;
    }
`

export const Memberh2 = styled.h2`
    font-size: 1.3rem;
    margin-top: 11px;
`

export const Memberp = styled.p`
    font-size: 1rem;
    color: white;
`
