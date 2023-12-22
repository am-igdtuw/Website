import React from 'react'
// import {Button} from '../ButtonElements'
import Collaborate from'../../images/Community_Initiatives.png'
import Educate from'../../images/MantleExplorer.png'
import { AboutContainer, AboutWrapper,  AboutCard, AboutIcon, AboutH2, AboutP } from './InfoElements'

const About = () => {
  return (
    <>
      <AboutContainer>
        {/* <AboutH1>What We Do</AboutH1> */}
        <AboutWrapper>
          {/* <Linked to='/collaboratePage'> */}
         <AboutCard>
          <AboutIcon src={Collaborate}></AboutIcon>
          <AboutH2>COLLABORATE</AboutH2>
          <AboutP>Unlock the power of collaboration and knowledge-sharing in blockchain and web3 technology with our vibrant community.</AboutP>
          </AboutCard> 
          {/* </Linked> */}
          {/* <Linked to='/sponsorPage'> */}
          <AboutCard>
          <AboutIcon src={Educate}></AboutIcon>
          <AboutH2>SPONSOR</AboutH2>
          <AboutP>Boost your brand and empower innovation in blockchain and web3 technology as a valued community sponsor.</AboutP>
          </AboutCard> 
          {/* </Linked>  */}
        </AboutWrapper>

      </AboutContainer>
    </>
  )
}

export default About