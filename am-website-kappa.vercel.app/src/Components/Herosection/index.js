import React, {useState} from 'react'
import { HeroContainer, HeroBg, Imgbg, HeroD, HeroContent,Heroimg, HeroBtnWrapper,HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'
import { FaWhatsapp } from 'react-icons/fa';
import bg from '../../images/bg.svg'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const joinGroup = () => {
        const watsGroupLink = 'https://chat.whatsapp.com/Cp0ppTJBmOS4vgDze8XMPq';
        window.open(watsGroupLink, '_blank')
    }

  return (
    <HeroContainer>
        <HeroBg>
           <Imgbg src={bg} type='image/svg'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Your Gateway to the</HeroH1>
            <HeroH1><HeroD>Web3</HeroD> World</HeroH1>
            <HeroP>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </HeroP>
            <HeroBtnWrapper>
                <Button  to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' onClick={joinGroup}>
                <Heroimg as={FaWhatsapp} />
               JOIN COMMUNITY 
                </Button>
            </HeroBtnWrapper>         
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection