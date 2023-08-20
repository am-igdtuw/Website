import React from "react";
import styled from "styled-components";

export const TeamContainer = styled.div`
    height: 100%;
    width: 100%;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    z-index: 3;

    @media screen and (max-width:768px){
        height:auto;
    }
    @media screen and (max-width:480px){
        height:auto;
    }
`
export const TeamHead = styled.h1`
    text-align: center;
    justify-content: center;
    display: flex;
    padding: 50px 50px;
    padding-top: 40px;
    width: 80rem;
    color: white;
    height: 8rem;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-size: 54px;
    font-weight: 600;

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
    justify-content: center;
    display: flex;
    width: auto;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    padding: 10px 10px;
    text-align: center;
    justify-content: center;
    display: flex;
    width: 15rem;
    ${'' /* padding-left: 1rem; */}
  }

`

export const TeamMembersCard = styled.div`
    height: 23rem;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px;
    color: #F2AF13;
    ${'' /* background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)); */}
    transition: transform 0.3s ease;
    width: 17rem;
    text-align: center;
    font-family: 'Exo 2', sans-serif;
`
export const TeamWrapper = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    margin: 5rem 5rem 5rem 5rem;
    padding: 2rem 2rem 2rem 2rem;
    justify-content: center;
    align: center;
    border: 30rem;
    border-radius: 3rem;
    color: white;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);

    @media screen and (max-width: 1024px){
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }
    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }
    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        width: 17rem;
        height: auto;
    }

`
export const TeamListWrapper3 = styled.div`
    display: flex;
    gap: 1rem;
    width: 60rem;
    justify-items: center; 
    align-items: center; 
    justify-content: center; 
    margin: 0 auto;

    @media screen and (max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 10px;
        ${'' /* grid-template-columns: repeat(1, minmax(320px, 1fr));  */}
    }
    @media screen and (max-width: 768px){
        
    }
    @media screen and (max-width: 1024px){
        
    }


`

export const TechP = styled.p`
    font-size: 1rem;
    text-align: center;
    color:white;
    display: flex;
    gap: 10px;
    font-size: 20px;
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
        border-color:#ffc640;
        background-color:  rgba(255, 198, 64, 0.2);
        transition: border-color 0.2s ease-in-out;
    
        &.linkiden:hover {
          color: #0077B5; 
        }
        &.twitter:hover {
            color: #1DA1F2;
        }
        &.insta:hover {
            color:#E4405F;
        }

    }
`;

export const TeamListWrapper2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(320px, 1fr)); 
    gap: 1rem;
    width: 60rem;
    justify-items: center; 
    align-items: center; 
    justify-content: center; 
    margin: 0 auto;
`

export const TeamListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(320px, 1fr)); 
    gap: 1rem;
    width: 60rem;
    justify-items: center; 
    align-items: center; 
    justify-content: center; 
    margin: 0 auto;
`

export const TeamName = styled.h2`
    text-align: center;
    font-family: 'Exo 2', sans-serif;
    font-style: normal;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    
`
export const MemberImg = styled.img`
  width: 15rem; /* Adjust the size as needed */
  height:15rem; /* Adjust the size as needed */
  border-radius: 50%; /* Creates a circular shape */
  border: 2px solid transparent;
  margin: 20px auto 0;
  overflow: hidden;
  line-height: 2rem;
  
`
export const Memberh2 = styled.h2`
    font-size: 1.3rem;
    margin-top: 11px;

`

export const Memberp = styled.p`
    font-size: 1rem;
    color: white;
`
