import React from 'react'
import { AboutContainer, AboutContent, AboutImg, Wrapper, AboutH1, AboutP, Aboutbutton } from './aboutstyle'
import { color } from '@mui/system'
import Img from '../../../images/app_dev.jpg'
function about() {
  return (
    <>
      <AboutContainer id="about">
        <Wrapper>
          <AboutContent>
            <AboutH1>ABOUT US</AboutH1>
            <AboutP>
              Lorem ips amum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque, quas nihil animi alias maxime blanditiis quam repellendus minima! Perspiciatis harum qui nesciunt, molestias sit accusantium repellat autem earum nihil.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates neque alias ducimus quidem officia optio itaque mollitia voluptatem vel perspiciatis praesentium eius molestiae, quisquam ipsum modi adipisci laudantium iure doloremque!
            </AboutP>
            <Aboutbutton href="/">DEVFOLIO</Aboutbutton>
          </AboutContent>
          <AboutImg src={Img} alt="about" />
        </Wrapper>
      </AboutContainer>
    </>
  )
}

export default about;
