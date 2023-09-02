import styled from 'styled-components'

export const AboutContainer = styled.div`
   height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
z-index: 3;

@media screen and (max-width:768px){
    height:1100px;
}
@media screen and (max-width:480px){
    height:750px;
}
`


export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    z-index: 3;
    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    z-index: 3;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    z-index: 3;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    z-index: 3;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    z-index: 3;
    color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    z-index: 3;
    color: ${({darkText})=> (darkText ? '#010606' : '#fff')}; 
`


export const AboutWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: center;
  grid-gap: 30px;
  padding: 40px 24px;
  z-index: 3;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;



export const AboutCard=styled.div`
// background: #0D0A03; 
align-items:center;
display:flex;
flex-direction:column;
justify-content:flex-start;
border-radius:10px;
width: 320px;
height: 330px;
border:0.5px solid #FFC640;
z-index: 3;

padding:21px;
/* gap:50px; */
box-shadow: 0 1px 3px gray;
transition: all 0.2s ease-in-out;
background:black;
&:hover{
    transform:scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;

}

@media screen and (max-width:480px){
    height:300px;
}


`
export  const AboutIcon=styled.img`
height:160px;
width:170px;
margin-bottom:0px;
z-index: 3;
// border:0.5px solid #FFC640;
// box-shadow:3px 3px 3px #FFC640;

@media screen and (max-width:480px){
    height:150px;
}


`
export const AboutH1=styled.h1`
/* font-size:5rem;
color:black;
margin-bottom:64px; */
z-index: 3;
margin-bottom: 64px;
    font-size: 50px;
    line-height: 1.1;
    font-weight: 600;
    text-transform: uppercase;
    color: white;

@media screen and (max-width:480px){
    font-size:1.5rem;
}
`
export const AboutH2=styled.h2`
font-weight: 600;
font-size: 24px;
line-height: 32px;
z-index: 3;
color:white;
margin-bottom:3px;
@media screen and (max-width:480px){
    font-size:1.3rem;
    line-height: 30px;
}

`
export const AboutP=styled.p`
font-family:'Poppins', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
z-index: 3;
text-align:center;
color:white;
@media screen and (max-width:480px){
    font-size:0.9rem;
    ${'' /* line-height: 30px; */}
}


`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    z-index: 3;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
    z-index: 3;
`
export  const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    z-index: 3;
`