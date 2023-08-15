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
    {
      name: 'Manjusha Iyer',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688527494/Asset%20Mantle%20-%20Team%202023/Technical/Manjusha%20Iyer.jpg', 
    },
    {
      name: 'Apoorva ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491387/Asset%20Mantle%20-%20Team%202023/Technical/Apoorva.jpg', 
    },
    {
      name: 'Mehek Prabhakar',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491388/Asset%20Mantle%20-%20Team%202023/Technical/Mehek%20Prabhakar.webp', 
    },
        
  ];

  const eventsTeam = [
    {
      name: 'Hiteshi Dattatrey',
      role: 'EM Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg', 
    },
    {
      name: 'Disha Verma',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Disha%20Verma.jpg', 
    },
    {
      name: 'Manasi Duggal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490161/Asset%20Mantle%20-%20Team%202023/EM/Manasi%20Duggal.jpg', 
    },
    {
      name: 'Avni Singh',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Avni%20Singh.jpg', 
    },
    {
      name: 'Arshita ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490164/Asset%20Mantle%20-%20Team%202023/EM/Arshita.jpg', 
    },
    {
      name: 'Gunjan Vaishnavi Jangra',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Gunjan%20Vaishnavi%20Jangra.jpg', 
    },
        
  ];

  const researchTeam = [
    {
      name: 'Srimayee Satapathy',
      role: 'Research Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488853/Asset%20Mantle%20-%20Team%202023/Leads/Srimayee%20Satapathy.jpg', 
    },
    {
      name: 'Aarna Singhal',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Aarna%20Singhal.jpg', 
    },
    {
      name: 'Shreya gupta ',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491042/Asset%20Mantle%20-%20Team%202023/Content/Shreya%20gupta.png', 
    },
    {
      name: 'Megha yadav',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688541471/Asset%20Mantle%20-%20Team%202023/Content/Megha%20Yadav.jpg', 
    },
    {
      name: 'Sakshi ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491032/Asset%20Mantle%20-%20Team%202023/Content/Sakshi.jpg', 
    },
    {
      name: 'Anushree Bondia',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Anushree%20Bondia.jpg', 
    },
        
  ];

  const mediaTeam = [
    {
      name: 'Sanya Gupta',
      role: 'Media Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488854/Asset%20Mantle%20-%20Team%202023/Leads/Sanya%20Gupta.jpg', 
    },
    {
      name: 'Deepakshi',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491530/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Deepakshi.jpg',
    },
    {
      name: 'Jiya Malik ',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Jiya%20Malik.jpg',
    },
    {
      name: 'Pooja',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490608/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Pooja.jpg',
    },
    {
      name: 'Divyansha Agrawal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491189/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Divansha%20Agrawal.jpg',
    },
    {
      name: 'Tripti Jaiswal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg',
    },
        
  ];

  const outreachTeam = [
    {
      name: 'Nikhila K S',
      role: 'Outreach Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488845/Asset%20Mantle%20-%20Team%202023/Leads/Nikhila%20K%20S.jpg', 
    },
    {
      name: 'Tanisha Bansal ',
      role: 'Outreach Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688489575/Asset%20Mantle%20-%20Team%202023/Outreachy/Tanisha%20Bansal.jpg',
    },
    {
      name: 'Aiman ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688489575/Asset%20Mantle%20-%20Team%202023/Outreachy/Aiman.jpg',
    },
    {
      name: 'Sripriya Agarwal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688489578/Asset%20Mantle%20-%20Team%202023/Outreachy/Sripriya%20Agarwal.jpg',
    },
    {
      name: 'Sneha ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688489581/Asset%20Mantle%20-%20Team%202023/Outreachy/Sneha.jpg',
    },
    {
      name: 'Anshika Aggarwal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688489576/Asset%20Mantle%20-%20Team%202023/Outreachy/Anshika%20Aggarwal.jpg',
    },
        
  ];

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

      <TeamWrapper>
      <TeamName>
        Event Management Team
      </TeamName>
      <TeamListWrapper>
          {eventsTeam.map((member, index) => (
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
        Research and Content Team
      </TeamName>
      <TeamListWrapper>
          {researchTeam.map((member, index) => (
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
        Graphics and Media Team
      </TeamName>
      <TeamListWrapper>
          {mediaTeam.map((member, index) => (
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
        Outreach Team
      </TeamName>
      <TeamListWrapper>
          {outreachTeam.map((member, index) => (
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