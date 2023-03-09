import React, {useState} from 'react'
import blackWhite from'../../images/BlackWhite.png'
import { AboutContainer, AboutWrapper,  AboutCard, AboutH1, AboutIcon, AboutH2, AboutP,HeroBtnWrapper, Heroimg } from './InfoElements'
import { Button } from '../ButtonElements'
const About = () => {
  const[hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
      <AboutContainer>
        <AboutH1>Upcoming Events</AboutH1>
        <AboutWrapper>
        <AboutIcon src={blackWhite}></AboutIcon>
         <AboutCard> 
          <AboutH2>Heading/Name of the Event</AboutH2>
          <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</AboutP>
          <HeroBtnWrapper>   
                <Button  to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                <Heroimg src={''}/> 
               REGISTER
                </Button>
            </HeroBtnWrapper>
          </AboutCard> 
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About