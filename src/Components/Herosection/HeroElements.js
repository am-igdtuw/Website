import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
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
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
   
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
   
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 46rem;
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
    font-family: 'sans-serif';
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
    font-family: 'Inter';
font-style: normal;
`
export const HeroP = styled.p`
width: 640px;
height: 56px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
   /* or 140% */

   text-align: center;

    background: linear-gradient(180deg, rgba(255, 198, 64, 0.6) 0%, rgba(242, 175, 19, 0.6) 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

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

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`