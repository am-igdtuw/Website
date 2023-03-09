import React from 'react'
import t1 from '../../images/t1.png'
import t2 from '../../images/t2.png'
import t3 from '../../images/t3.png'
import t4 from '../../images/t4.png'


import { TeamContainer, TeamH1, TeamH2,TeamWrapper,TeamCard,TeamIcon, TeamP} from './Elements'
const Team = () => {
  return (
    <TeamContainer id="team">
        <TeamH1>The faces behind these teams</TeamH1>
       
        <TeamWrapper>
            <TeamCard> 
                <TeamIcon src={t1}/>
                <TeamH2><b>Name</b></TeamH2>
                <TeamP>Designation</TeamP>
                
            </TeamCard>
            <TeamCard> 
                <TeamIcon src={t2}/>
                <TeamH2><b>EVENT MANAGEMENT TEAM</b></TeamH2>
                <TeamP>Designation</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src={t3}/>
                <TeamH2><b>MEDIA TEAM</b></TeamH2>
                <TeamP>Designation</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src={t4}/>
                <TeamH2><b>RESEARCH AND CONTENT TEAM</b></TeamH2>
                <TeamP>Designation</TeamP>
            </TeamCard>
        </TeamWrapper>
    </TeamContainer>
    
  )
}

export default Team