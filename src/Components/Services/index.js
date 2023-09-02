import React from 'react'
import TechTeam from '../../images/Integrations.png'
import EventTeam from '../../images/Mantle_Products.png'
import MediaTeam from '../../images/Mantle_Creatives.png'
import ResearchTeam from '../../images/Grants.png'
import OutreachTeam from '../../images/Community_Initiatives.png'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
const Services = () => {

    const scrollToTop = (x,y) => {
        window.scrollTo(x, y);
    };

    const navigate = useNavigate();

    const techTeam = () => {
       scrollToTop(0,500);
       navigate('/TeamPage');
    }
 
    const eventTeam = () => {
        scrollToTop(0,10000);
        navigate('/TeamPage');
    }

    const mediaTeam = () => {
        scrollToTop();
        navigate('/TeamPage');
    }
    
    const researchTeam = () => {
        scrollToTop();
        navigate('/TeamPage');
    }

    const outreachTeam = () => {
        scrollToTop();
        navigate('/TeamPage');
    }
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Team</ServicesH1>
            <ServicesWrapper>
                    <ServicesCard onClick={eventTeam}>
                        <ServicesIcon src={EventTeam} />
                        <ServicesH2><b>EVENT MANAGEMENT TEAM</b></ServicesH2>
                    </ServicesCard>

                    <ServicesCard onClick={mediaTeam}>
                        <ServicesIcon src={MediaTeam} />
                        <ServicesH2><b>GRAPHICS & MEDIA TEAM</b></ServicesH2>
                    </ServicesCard>

                    <ServicesCard onClick={outreachTeam}>
                        <ServicesIcon src={OutreachTeam} />
                        <ServicesH2><b>OUTREACH TEAM</b></ServicesH2>
                    </ServicesCard>

                    <ServicesCard onClick={researchTeam}>
                        <ServicesIcon src={ResearchTeam} />
                        <ServicesH2><b>RESEARCH & CONTENT TEAM</b></ServicesH2>
                    </ServicesCard>

                    <ServicesCard onClick={techTeam}>
                        <ServicesIcon src={TechTeam} />
                        <ServicesH2><b>TECH TEAM</b></ServicesH2>
                    </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services