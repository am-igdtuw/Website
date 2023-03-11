import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroD, HeroContent,Heroimg, HeroBtnWrapper,HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'
import { AboutH1 } from '../InfoSection/InfoElements'
import discordLogo from '../../images/discordLogo.png'
import bg from '../../images/bg.svg'

const HeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            
        </HeroBg>
        <HeroContent>
            <HeroH1>Your Gateway to the</HeroH1>
            <HeroH1><HeroD>Web3</HeroD> World</HeroH1>
            <HeroP>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </HeroP>
            <HeroBtnWrapper>
                <Button  to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                <Heroimg src={discordLogo}/> 
               JOIN COMMUNITY 
                </Button>
            </HeroBtnWrapper>
            <AboutH1>Your Gateway to the</AboutH1>            
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection