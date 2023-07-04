import React from 'react'
import TechTeam from '../../images/TechTeam.png'
import EventTeam from '../../images/EventTeam.png'
import MediaTeam from '../../images/MediaTeam.png'
import ResearchTeam from '../../images/ResearchTeam.png'
import { Link } from 'react-router-dom';

import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Team</ServicesH1>
            <ServicesWrapper>
                <Link to="/techTeam">
                    <ServicesCard>
                        <ServicesIcon src={TechTeam} />
                        <ServicesH2><b>TECH TEAM</b></ServicesH2>
                    </ServicesCard>
                </Link>
                <Link to="/eventTeam">
                    <ServicesCard>
                        <ServicesIcon src={EventTeam} />
                        <ServicesH2><b>EVENT MANAGEMENT TEAM</b></ServicesH2>
                    </ServicesCard>
                </Link>
                <Link to="/mediaTeam">
                    <ServicesCard>
                        <ServicesIcon src={MediaTeam} />
                        <ServicesH2><b>MEDIA TEAM</b></ServicesH2>
                    </ServicesCard>
                </Link>

                <Link to="/researchTeam">
                    <ServicesCard>
                        <ServicesIcon src={ResearchTeam} />
                        <ServicesH2><b>RESEARCH & CONTENT TEAM</b></ServicesH2>
                    </ServicesCard>
                </Link>

                <Link to="/outreachTeam">
                    <ServicesCard>
                        <ServicesIcon src={MediaTeam} />
                        <ServicesH2><b>OUTREACH TEAM</b></ServicesH2>
                    </ServicesCard>
                </Link>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services