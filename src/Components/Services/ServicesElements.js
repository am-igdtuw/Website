import styled from "styled-components"
export const ServicesContainer=styled.div`
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
background:black;


@media screen and (max-width:768px){
    height:1100px;
}
@media screen and (max-width:480px){
    height:1300 px;
}
`
export const ServicesWrapper=styled.div`
max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }

`
export const ServicesCard=styled.div`
// background:blue; 
align-items:center;
display:flex;
flex-direction:column;
justify-content:center;
border-radius:10px;
height:300px;
width:300px;
border:0.5px solid #FFC640;

padding:30px;
margin-bottom:20px;
/* gap:50px; */
box-shadow: 0 1px 3px gray;
transition: all 0.2s ease-in-out;
background:linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);
&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;

}

`
export  const ServicesIcon=styled.img`
height:120px;
width:130px;
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
font-size:1rem;
color:white;
margin-bottom:10px;
text-decoration:none;

b{
    color:white;
}


`
export const ServicesP=styled.p`
font-size:1rem;
text-align:center;
`;