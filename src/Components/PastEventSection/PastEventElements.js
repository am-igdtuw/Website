import styled from "styled-components"
export const ServicesContainer=styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background: black;

@media screen and (max-width:768px){
    height:1100px;
}
@media screen and (max-width:480px){
    height:1300 px;
}
`
export const ServicesWrapper=styled.div`
max-width:10000;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-column-gap:20px;

@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}


`
export const ServicesCard=styled.div`
/* background:black; */
align-items:center;
display:flex;
flex-direction:column;
justify-content:flex-start;
border-radius:10px;
width: 304px;
height: 428px;
background: #0D0A03;
border-radius: 24px;
border:0.5px solid #FFC640;

padding:30px;
/* gap:50px; */

transition: all 0.2s ease-in-out;

&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
}

`
export  const ServicesIcon=styled.img`
width: 256px;
height: 256px;
border-radius: 16px;
margin-bottom:20px;
// border:0.5px solid #FFC640;
// box-shadow:3px 3px 3px #FFC640;
`
export const ServicesH1=styled.h1`
/* font-size:5rem;
color:black;
margin-bottom:64px; */
margin-bottom: 64px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
    color: white;

@media screen and (max-width:480px){
    font-size:2rem;
}
`
export const ServicesH2=styled.h2`
width: 256px;
height: 64px;
color: #FFFDFA;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;


`
export const ServicesP=styled.p`
font-size:1rem;
text-align:center;
`;