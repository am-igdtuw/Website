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
                <TeamH2><b>Unnati</b></TeamH2>
                <TeamP>President</TeamP>
                
            </TeamCard>
            <TeamCard> 
                <TeamIcon src={t2}/>
                <TeamH2><b>Geetika Gupta</b></TeamH2>
                <TeamP>Vice-president</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src={t3}/>
                <TeamH2><b>Astha Bhaskar</b></TeamH2>
                <TeamP>Vice-president</TeamP>
            </TeamCard>
        </TeamWrapper>
    </TeamContainer>
    
  )
}

export default Team