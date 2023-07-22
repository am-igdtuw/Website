import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'
import bg from '../../images/bg.svg'

export const HeroContainer = styled.div`
width: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;



    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    height:1500px;
    position: absolute;
    top: 0;
    right: 0 ;
    bottom: 0;
    left: 0;
    height: 100%;
    overflow: hidden;
    background-image: url(${bg});
   
`

export const Imgbg = styled.div`
    object-fit: cover;
    margin-right: 0px;
    top: -770.06px;
    position: absolute;

    left: 154.28px;
    //background-image: url(${bg});
    
   
`

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    /* color: #fff;
    font-size: 32rem;
    text-align: center; */
    
    margin-bottom: 30px;
    font-family: 'Poppins', sans-serif;
    color: #FFFDFA;
    font-style: normal;
    font-size: 64px;
    line-height: 0.5;
    font-weight: 600;
    color: white;
    

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const HeroD = styled.span`
    color: #FFC640;
    font-family: 'Poppins', sans-serif;
font-style: normal;
`
export const HeroP = styled.p`
  width: 100%;
  max-width: 640px;
  padding: 0 20px;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(255, 198, 64, 0.6) 0%,
    rgba(242, 175, 19, 0.6) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 22px;
  }
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
@media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`