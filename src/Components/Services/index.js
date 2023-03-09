import React from 'react'
// import Icon1 from '../../images/image1.png'
// import Icon2 from '../../images/image2.png'
// import Icon3 from '../../images/image3.png'
import TechTeam from '../../images/TechTeam.png'
import EventTeam from '../../images/EventTeam.png'
import MediaTeam from '../../images/MediaTeam.png'
import ResearchTeam from '../../images/ResearchTeam.png'

import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon} from './ServicesElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Team</ServicesH1>
       
        <ServicesWrapper>
            <ServicesCard> 
                <ServicesIcon src={TechTeam}/>
                <ServicesH2><b>TECH TEAM</b></ServicesH2>
                
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={EventTeam}/>
                <ServicesH2><b>EVENT MANAGEMENT TEAM</b></ServicesH2>
                
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={MediaTeam}/>
                <ServicesH2><b>MEDIA TEAM</b></ServicesH2>
                
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={ResearchTeam}/>
                <ServicesH2><b>RESEARCH AND CONTENT TEAM</b></ServicesH2>
                
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services