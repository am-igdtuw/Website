import React from 'react'


import { TeamContainer, TeamH1, TeamH2,TeamWrapper1,TeamWrapper2,TeamWrapper3, TeamCard,TeamIcon, TeamP} from './Elements'
const Team = () => {
    
  return (
    <TeamContainer id="team">
        <TeamH1>The faces behind these teams</TeamH1>
       
        <TeamWrapper1>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688969490/Asset%20Mantle%20-%20Team%202023/Leads/WhatsApp_Image_2023-07-10_at_11.31.50_pfiaub.jpg"/>
                <TeamH2><b>Unnati Chhabra</b></TeamH2>
                <TeamP>Advisor</TeamP>
            </TeamCard>
        </TeamWrapper1>
        <TeamWrapper2>       
            
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Geetika%20Gupta.jpg" />
                <TeamH2><b>Geetika Gupta</b></TeamH2>
                <TeamP>President</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488861/Asset%20Mantle%20-%20Team%202023/Leads/Astha%20Bhaskar.jpg"/>
                <TeamH2><b>Astha Bhaskar</b></TeamH2>
                <TeamP>President</TeamP>
            </TeamCard>
        </TeamWrapper2>
        <TeamWrapper2>       
            
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488875/Asset%20Mantle%20-%20Team%202023/Leads/Kamya%20Varshney.png"/>
                <TeamH2><b>Kamya Varshney</b></TeamH2>
                <TeamP>Vice-President</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488846/Asset%20Mantle%20-%20Team%202023/Leads/Garima.jpg"/>
                <TeamH2><b>Garima</b></TeamH2>
                <TeamP>Vice-President</TeamP>
            </TeamCard>
        </TeamWrapper2>
        <TeamWrapper3>
        <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg"/>
                <TeamH2><b>Hiteshi Dattatrey</b></TeamH2>
                <TeamP>Event Management Lead</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488853/Asset%20Mantle%20-%20Team%202023/Leads/Srimayee%20Satapathy.jpg"/>
                <TeamH2><b>Srimayee Satapathy </b></TeamH2>
                <TeamP>Research & Content Lead</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg"/>
                <TeamH2><b>Harshita Deep</b></TeamH2>
                <TeamP>Technical Lead</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488845/Asset%20Mantle%20-%20Team%202023/Leads/Nikhila%20K%20S.jpg"/>
                <TeamH2><b>Nikhila K S</b></TeamH2>
                <TeamP>Outreach Lead</TeamP>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488854/Asset%20Mantle%20-%20Team%202023/Leads/Sanya%20Gupta.jpg"/>
                <TeamH2><b>Sanya Gupta </b></TeamH2>
                <TeamP>Graphics and Media Lead </TeamP>
            </TeamCard>
        </TeamWrapper3>
    </TeamContainer>
    
  )
}

export default Team