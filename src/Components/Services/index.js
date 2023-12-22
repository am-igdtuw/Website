import React from 'react';
import TechTeam from '../../images/Integrations.png'
import EventTeam from '../../images/Mantle_Products.png'
import MediaTeam from '../../images/Mantle_Creatives.png'
import ResearchTeam from '../../images/Grants.png'
import OutreachTeam from '../../images/Community_Initiatives.png'
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'


const Services = () => {
    
    const handleTeamCardClick = (teamName) => {
        const encodedTeamName = encodeURIComponent(teamName);
        window.location.href = `/TeamPage?team=${encodedTeamName}`;
      };

    
    return (
        <ServicesContainer id="services">
          <ServicesH1>Our Team</ServicesH1>
          <ServicesWrapper>

          <ServicesCard onClick={() => handleTeamCardClick('emTeam')}>
            <ServicesIcon src={EventTeam} />
            <ServicesH2><b>EVENT MANAGEMENT TEAM</b></ServicesH2>
          </ServicesCard>

              <ServicesCard onClick={() => handleTeamCardClick('mediaTeam')}>
                <ServicesIcon src={MediaTeam} />
                <ServicesH2><b>GRAPHICS & MEDIA TEAM</b></ServicesH2>
              </ServicesCard>
    
              <ServicesCard onClick={() => handleTeamCardClick('outreachTeam')}>
                <ServicesIcon src={OutreachTeam} />
                <ServicesH2><b>OUTREACH TEAM</b></ServicesH2>
              </ServicesCard>

              <ServicesCard onClick={() => handleTeamCardClick('contentTeam')}>
                <ServicesIcon src={ResearchTeam} />
                <ServicesH2><b>RESEARCH & CONTENT TEAM</b></ServicesH2>
              </ServicesCard>

             <ServicesCard onClick={() => handleTeamCardClick('techTeam')}>
          <ServicesIcon src={TechTeam} />
          <ServicesH2><b>TECH TEAM</b></ServicesH2>
            </ServicesCard>

          </ServicesWrapper>
        </ServicesContainer>
      );
}

export default Services