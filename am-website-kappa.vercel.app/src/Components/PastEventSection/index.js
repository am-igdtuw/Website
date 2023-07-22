import React from 'react'


import { ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper,ServicesCard,ServicesIcon} from './PastEventElements'
const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Past Events</ServicesH1>
      <ServicesWrapper>
        <a href="https://www.instagram.com/p/CnbUEn8Ss2s/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          <ServicesCard>
            <ServicesIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png" />
            <ServicesH2><b>Orientation and Treasure Hunt</b></ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://www.instagram.com/p/CoBxdCNynKB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
          <ServicesCard>
            <ServicesIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png" />
            <ServicesH2><b>Find Global Career opportunities on Web3 and Metaverse</b></ServicesH2>
          </ServicesCard>
        </a>
        <a href="https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <ServicesCard > 
                <ServicesIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png"/>
                <ServicesH2><b>Intro to Web3 and its Career Scope</b></ServicesH2>
            </ServicesCard>
        </a>
      </ServicesWrapper>
      <ServicesWrapper>
      <a href="https://www.instagram.com/p/CpP0N7mJqcn/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <ServicesCard> 
                <ServicesIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png"/>
                <ServicesH2><b>BFF Hackathon</b></ServicesH2>
                
            </ServicesCard>
        </a>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services