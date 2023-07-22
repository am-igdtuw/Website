import React from 'react'
// import {Button} from '../ButtonElements'
import Collaborate from'../../images/Collaborate.png'
import Educate from'../../images/Educate.png'
import { AboutContainer, AboutWrapper,  AboutCard, AboutH1, AboutIcon, AboutH2, AboutP } from './InfoElements'

const About = () => {
  return (
    <>
      <AboutContainer>
        {/* <AboutH1>What We Do</AboutH1> */}
        <AboutWrapper>
         <AboutCard>
          <AboutIcon src={Collaborate}></AboutIcon>
          <AboutH2>COLLABORATE</AboutH2>
          <AboutP>Unlock the full potential of blockchain and web3 technology by building projects through collaboration and knowledge-sharing with peers in our society.</AboutP>
          </AboutCard> 
          <AboutCard>
          <AboutIcon src={Educate}></AboutIcon>
          <AboutH2>EDUCATE</AboutH2>
          <AboutP>Discover the latest trends and knowledge in blockchain and web3 through the events and workshops we organize</AboutP>
          </AboutCard>  
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About