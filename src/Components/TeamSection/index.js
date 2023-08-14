import React from 'react'
import TeamMemberCard from './TeamMemberCard';
import { TeamContainer, TeamHead, TeamWrapper, TeamListWrapper, TeamName} from './TeamElements';


const TeamPage = () => {

  const advisor = [
    {
      name: 'Unnati Chabra',
      role: 'Advisor',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688969490/Asset%20Mantle%20-%20Team%202023/Leads/WhatsApp_Image_2023-07-10_at_11.31.50_pfiaub.jpg', 
    },
  ];
  const president = [
    {
      name: 'Geetika Gupta',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Geetika%20Gupta.jpg', 
    },
    {
      name: 'Astha Bhaskar',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488861/Asset%20Mantle%20-%20Team%202023/Leads/Astha%20Bhaskar.jpg', 
    },
  ];
  const vicePresident = [
    {
      name: 'Kamya Varshney',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488875/Asset%20Mantle%20-%20Team%202023/Leads/Kamya%20Varshney.png', 
    },
    {
      name: 'Garima Pahwa',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488846/Asset%20Mantle%20-%20Team%202023/Leads/Garima.jpg', 
    },
  ];
  const techTeam = [
    {
      name: 'Harshita Deep',
      role: 'Technical Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg', 
    },
    {
      name: 'Mansi',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688526862/Asset%20Mantle%20-%20Team%202023/Technical/Mansi.jpg', 
    },
    {
      name: 'Sneha Chauhan',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/dx0dgujbj/image/upload/c_scale,h_600,w_614/v1688875544/My%20Image/Untitled_design_1_bqfeyo.png', 
    },
    
  ]
  ;

  return (
    <TeamContainer>
    <TeamHead>MEET THE TEAM</TeamHead>
    <TeamWrapper>
      <TeamName>
        Advisor
      </TeamName>
      <TeamListWrapper>
          {advisor.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        President
      </TeamName>
      <TeamListWrapper>
          {president.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Vice President
      </TeamName>
      <TeamListWrapper>
          {vicePresident.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Technical Team
      </TeamName>
      <TeamListWrapper>
          {techTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      </TeamContainer>
  )
}

export default TeamPage