import React from 'react'
import BlackWhite from '../../images/BlackWhite.png'

import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon} from './PastEventElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Past Events</ServicesH1>
       
        <ServicesWrapper>
            <ServicesCard> 
                <ServicesIcon src={BlackWhite}/>
                <ServicesH2><b>Heading/Name of the Event</b></ServicesH2>
                
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={BlackWhite}/>
                <ServicesH2><b>Heading/Name of the Event</b></ServicesH2>
                
            </ServicesCard>
            <ServicesCard> 
                <ServicesIcon src={BlackWhite}/>
                <ServicesH2><b>Heading/Name of the Event</b></ServicesH2>
                
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services