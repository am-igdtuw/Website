import React, {useState} from 'react'
import { HeroContainer, HeroContent,HeroD, HeroBtnWrapper,HeroH1, HeroP, Heroimg } from './EventElement'
import {Button} from '../ButtonElements'
import CollaborateLogo from '../../images/CollaborateLogo.png';
import DynamicBackground from '../Herosection/DynamicBg.js';


const EventHeroSection = () => {
    const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <DynamicBackground  />
        <HeroContent>
            <HeroH1>We host robust <HeroD>events</HeroD></HeroH1>
            <HeroH1>that helps leverage the</HeroH1>
            <HeroH1>web3 infrastructure.</HeroH1>
            <HeroP>
                WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                  <Heroimg src={CollaborateLogo}/>
               Collaborate with us
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default EventHeroSection;