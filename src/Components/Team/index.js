import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

import {
  TeamContainer,
  TeamH1,
  TeamH2,
  TeamWrapper1,
  TeamWrapper2,
  TeamWrapper3,
  TeamCard,
  TeamIcon,
  TeamP,
  IconWrapper
} from './Elements';

const Team = () => {
    
  return (
  <TeamContainer id="team">
      <TeamH1>The faces behind these teams</TeamH1>

      <TeamWrapper1>
        <TeamCard>
          <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688969490/Asset%20Mantle%20-%20Team%202023/Leads/WhatsApp_Image_2023-07-10_at_11.31.50_pfiaub.jpg" />
          <TeamH2><b>Unnati Chhabra</b></TeamH2>
          <TeamP>Founder</TeamP>
          <IconWrapper className="social-icons">
            <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='twitter' href="https://twitter.com/Unnati_twts" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='insta' href="https://www.instagram.com/unnatiisig/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </IconWrapper>
        </TeamCard>
      </TeamWrapper1>

        <TeamWrapper2>       
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Geetika%20Gupta.jpg" />
                <TeamH2><b>Geetika Gupta</b></TeamH2>
                <TeamP>President</TeamP>
                <IconWrapper className="social-icons">
                  <a className='linkiden' href="https://www.linkedin.com/in/geetikaguptagg/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/geetikaguptaa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/geetikaagupta/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488861/Asset%20Mantle%20-%20Team%202023/Leads/Astha%20Bhaskar.jpg"/>
                <TeamH2><b>Astha Bhaskar</b></TeamH2>
                <TeamP>President</TeamP>
                <IconWrapper className="social-icons">
                  <a className='linkiden' href="https://www.linkedin.com/in/astha-bhaskar-5a049b233/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/asthabhaskar19" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/_.astha30/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
               </IconWrapper>
            </TeamCard>
        </TeamWrapper2>
        <TeamWrapper2>       
            
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488875/Asset%20Mantle%20-%20Team%202023/Leads/Kamya%20Varshney.png"/>
                <TeamH2><b>Kamya Varshney</b></TeamH2>
                <TeamP>Vice-President</TeamP>
                <IconWrapper className="social-icons">
                  <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra-909bb9196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/VarshneyKamya" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/kemyav7/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488846/Asset%20Mantle%20-%20Team%202023/Leads/Garima.jpg"/>
                <TeamH2><b>Garima</b></TeamH2>
                <TeamP>Vice-President</TeamP>
                <IconWrapper className="social-icons">
                  <a className='linkiden' href="https://www.linkedin.com/in/garima-pahwa-68416a22a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/PahwaGinni" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/ginniiiipahwa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
        </TeamWrapper2>
        {/* <TeamWrapper3>
        <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg"/>
                <TeamH2><b>Hiteshi Dattatrey</b></TeamH2>
                <TeamP>Event Management Lead</TeamP>
                <IconWrapper className="social-icons">
                <a className='linkiden' href="https://www.linkedin.com/in/hiteshi-dattatrey-48117422a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/HiteshiD01" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_hiteshii01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488853/Asset%20Mantle%20-%20Team%202023/Leads/Srimayee%20Satapathy.jpg"/>
                <TeamH2><b>Srimayee Satapathy </b></TeamH2>
                <TeamP>Research & Content Lead</TeamP>
                <IconWrapper className="social-icons">
                <a className='linkiden' href="https://www.linkedin.com/in/srimayee-satapathy-915bb0227/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/whoiissrii" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/whoiissrii/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg"/>
                <TeamH2><b>Harshita Deep</b></TeamH2>
                <TeamP>Technical Lead</TeamP>
                <IconWrapper className="social-icons">
                <a className='linkiden' href="https://www.linkedin.com/in/harshita-d-8a352722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/harshita_7777" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/ha_rshita4387/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488845/Asset%20Mantle%20-%20Team%202023/Leads/Nikhila%20K%20S.jpg"/>
                <TeamH2><b>Nikhila K S</b></TeamH2>
                <TeamP>Outreach Lead</TeamP>
                <IconWrapper className="social-icons">
                <a className='linkiden' href="https://www.linkedin.com/in/know-nikhila-k-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Nikhila_KS_" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/ks_nikhila_/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
            <TeamCard> 
                <TeamIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488854/Asset%20Mantle%20-%20Team%202023/Leads/Sanya%20Gupta.jpg"/>
                <TeamH2><b>Sanya Gupta </b></TeamH2>
                <TeamP>Graphics and Media Lead </TeamP>
                <IconWrapper className="social-icons">
                <a className='linkiden' href="https://www.linkedin.com/in/sanya-gupta-1a422b24a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/sanya_gupta19" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_.sanya.__19/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </IconWrapper>
            </TeamCard>
        </TeamWrapper3> */}
    </TeamContainer>
    
  )
}

export default Team