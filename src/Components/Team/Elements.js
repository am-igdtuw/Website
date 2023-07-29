import styled from "styled-components";

export const TeamContainer = styled.div`
height:1400px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background:black;
z-index: 3;

@media screen and (max-width:768px){
    height:auto;
}
@media screen and (max-width:480px){
    height:auto;
}
`
export const TeamWrapper1=styled.div`
max-width:10000;
line-height:5px;
height: 350px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr;
align-items:center;
grid-column-gap:40px;
padding:0 50px;
z-index: 3;
@media screen and (max-width:768px){
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width:480px){
  margin-bottom: 30px;
    grid-template-columns: 1fr;
    padding:0 20px;
}


`
export const TeamWrapper2=styled.div`
max-width:10000;
line-height:5px;
height: 350px;
margin-top: 30px;
display: grid;
grid-template-columns: 1fr 1fr;
align-items:center;
grid-column-gap:40px;
padding:0 50px;
position: relative;
z-index: 3;
@media screen and (max-width:768px){
    grid-template-columns: 1fr 1fr ;
    grid-gap: 3rem;
    grid-column:2rem;
    grid-row: 2rem;
}
@media screen and (max-width:480px){
    height: 700px;
    grid-template-columns: 1fr;
    padding:0 20px;
    grid-column:2rem;
    grid-gap: 3rem;
    grid-row: 2rem; 
}


`
export const TeamWrapper3=styled.div`
max-width:10000;
line-height:5px;
height: 380px;
margin-top: 30px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items:center;
grid-column-gap:40px;
padding:0 50px;
z-index: 3;
@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr ;
    grid-gap: 3.5rem;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
    grid-gap: 3.2rem;
    grid-column:2rem;
    ${'' /* height: 30rem; */}
}
@media screen and (max-width:480px){
    grid-template-columns: 1fr;
    padding:0 20px;
    grid-gap: 3rem;
}


`
export const TeamCard=styled.div`
/* background:black; */
align-items:center;
display:flex;
flex-direction:column;
justify-content:flex-start;
border-radius:10px;
height:265px;
width:203px;
border:0.5px solid #FFC640;
z-index: 3;

/* padding:10px; */
/* gap:50px; */
box-shadow: 0 1px 3px gray;
transition: all 0.2s ease-in-out;
background:linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    .social-icons {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width:768px){
    display: flex;
  }
   
  @media screen and (max-width:480px){
    display: flex;
  }


`
export  const TeamIcon=styled.img`
height:240px;
width:200px;
margin-bottom:20px;
border-radius:10px;
border:0.5px solid #FFC640;
box-shadow:3px 3px 3px #FFC640;
z-index: 3;
`
export const TeamH1=styled.h1`
/* font-size:5rem;
color:black;
margin-bottom:64px; */
    margin-bottom: 64px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
    z-index: 3;
    @media screen and (max-width:768px){
        font-size:2rem;
        text-align: center;
    }


    @media screen and (max-width:480px){
        font-size:1.8rem;
        text-align: center;
    }
`
export const TeamH2=styled.h2`
font-size:1rem;
color:white;
margin-bottom:10px;
text-align:center;
z-index: 3;

`
export const TeamP=styled.p`
font-size:1rem;
text-align:center;
color:#FFC640;
z-index: 3;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  text-align: center;
  color: white;
  transition: opacity 0.3s ease-in-out;
  opacity: 0;
  z-index: 3;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
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
      color: #0077b5;
    }
    &.twitter:hover {
      color: #1da1f2;
    }
    &.insta:hover {
      color: #e4405f;
    }
  }

`;