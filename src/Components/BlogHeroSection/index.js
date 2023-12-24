import React, { useState } from 'react';
import { HeroContainer, HeroD, HeroContent, HeroBtnWrapper, HeroH1, HeroP, Heroimg } from './BlogElement';
import { Button } from '../ButtonElements';
import subscribeLogo from '../../images/subscribeLogo.png';


const BlogHeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1>Your <HeroD>one-stop</HeroD></HeroH1>
                <HeroH1><HeroD>destination</HeroD> for info on</HeroH1>
                <HeroH1>everything web3</HeroH1>
                <HeroP>
                    WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT BLOCKCHAIN AND WEB3 TECHNOLOGY
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        <Heroimg src={subscribeLogo} />
                        SUBSCRIBE NOW
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default BlogHeroSection;