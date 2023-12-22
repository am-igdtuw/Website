import React from 'react'
import TechTeam from '../../images/Integrations.png'
import EventTeam from '../../images/Mantle_Products.png'
import MediaTeam from '../../images/Mantle_Creatives.png'
import ResearchTeam from '../../images/Grants.png'
import OutreachTeam from '../../images/Community_Initiatives.png'
//import FounderImage from '../../images/Founder.png';



export const SidebarData=[
    // {
    //     title:"Founder",
    //     icon:< img src={FounderImage}/>,
    //     link:"#founderSection"
    // },
    // {
    //     title:"President",
    //     icon:< img src={EventTeam}/>,
    //     link:"#President"
    // },
    // {
    //     title:"Vice President",
    //     icon:< img src={EventTeam}/>,
    //     link:"#Vice President"
    // },
    {
        title:"EM Team",
        icon:< img src={EventTeam} alt='em_team'/>,
        link:"#emTeamSection"
    },
    {
        title:"Graphics & Media Team",
        icon:<img src={MediaTeam} alt='media_team'/>,
        link:"#mediaTeamSection"
    },
    {
        title:"Research Team",
        icon:<img src={ResearchTeam} alt='content_team' />,
        link:"#contentTeamSection"
    },
    {
        title:"Outreach Team",
        icon:<img src={OutreachTeam} alt='outreach_team'/>,
        link:"#outreachTeamSection"
    },
    {
        title:"Technical Team",
        icon:<img src={TechTeam} alt='tech_team' />,
        link:"#techTeamSection"
    }
] 