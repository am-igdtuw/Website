import styled from 'styled-components'

export const AboutContainer = styled.div`
background-color: #f7bd00;
position: relative;
height: 100%;
    padding: 80px 0 50px;

   
`

export const AboutContent = styled.div`
    margin: 2rem 10rem;
    display: inline-block;
    width: 55%
`

export const AboutH1 = styled.h1`
text-align: center;
margin-left: 140px;
width: 100%;
padding:  0 0px;
font-size: 50px;
font-weight: 600;

    
`

export const AboutP = styled.p`
  
`;


export const Wrapper = styled.div`
display: flex;
   

`

export const AboutImg = styled.img`
position: absolute;
right: 0;
margin-right: 10rem;
margin-top:110px;
width: 20%;


`
export const Aboutbutton = styled.div`
height: 45px;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
border:0.5px solid #FFC640;
width:129px;
background: linear-gradient(45deg, #000000, #1c1b19);
border-radius: 25px;
  padding: 3px 3px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  color: #FFC640;
  align-items: center;
  justify-content: center;


&:hover {
  background: linear-gradient(45deg, #FFC640, #FFC640);
  border: 0.5px solid #000000;
  color: #000000;
}
  


`
