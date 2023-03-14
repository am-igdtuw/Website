import styled from 'styled-components'

export const AboutContainer = styled.div`
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


export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};

    }
`;
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
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
    color: ${({darkText})=> (darkText ? '#010606' : '#fff')}; 
`
export const AboutWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 60px 40px;
gap: 36px;
border:0.5px solid #FFC640;

width: 800px;
height: 400px;
background: linear-gradient(180deg, rgba(255, 198, 64, 0.16) 0%, rgba(255, 198, 64, 0.1024) 100%);
border-radius: 24px;
/*
max-width:10000;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr ;
align-items:center;
grid-column-gap:100px;
padding: 40px 24px;*/
@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding:0 20px;
}


`
export const AboutCard=styled.div`
// background: #0D0A03; 
align-items:center;
display:flex;
flex-direction:column;
justify-content:flex-start;
width: 404px;
font-size: 32px;
height: 320px;
font-weight: 600;
font-family: 'Quicksand', sans-serif;
font-style: normal;

`
export  const AboutIcon=styled.img`
height:280px;
width:280px;
align: left;
margin-bottom:20px;
`
export const AboutH1=styled.h1`
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
export const AboutH2=styled.h2`
font-weight: 600;
font-size: 32px;
line-height: 32px;
color:#FFFDFA;
margin-bottom:10px;


`
export const AboutP=styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
gap: 36px;
text-align:left;
color:#FFFDFA;
`;
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // background: radial-gradient(50% 50% at 50% 50%, #FFC640 47.4%, #F2AF13 100%);
`

export const Heroimg = styled.img`
height:40px;
widht:40px;
margin-right: 10px;
outline: none;
border: none;
curson: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%
`
export  const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`