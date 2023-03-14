import React, {useState} from 'react'
import blackWhite from'../../images/BlackWhite.png'
import { AboutContainer, AboutWrapper,  AboutCard, AboutH1, AboutIcon, AboutH2, AboutP,HeroBtnWrapper, Heroimg } from './InfoElements'
import { Button } from '../ButtonElements'
import BFF from '../../images/BFF.jpg'
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
        <AboutIcon src={BFF}></AboutIcon>
         <AboutCard> 
          
          <AboutH2>Build For the Future (BFF) Hackathon</AboutH2>
          <AboutP>Our latest collaboration with DTU AUV brings to you a 24 hour offline hackathon in DTU premises! Mark your calender on 1st and 2nd April 2023 and join us
            with your team to build your solution to the problem statements and have it reviewed by seasoned mentors.
          </AboutP>
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