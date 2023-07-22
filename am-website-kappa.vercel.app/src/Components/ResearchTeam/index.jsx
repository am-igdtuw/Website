import React from 'react'
import { TechContainer, TechH1, TechWrapper, TechCard, TechIcon, TechH2, TechP } from './Elements';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const research = () => {
  return (
    <>
      <TechContainer id="team">
        <TechH1>Team Lead</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488853/Asset%20Mantle%20-%20Team%202023/Leads/Srimayee%20Satapathy.jpg" />
            <TechH2>Srimayee Satapathy </TechH2>
            <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/srimayee-satapathy-915bb0227/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/whoiissrii" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/whoiissrii/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Cores</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Aarna%20Singhal.jpg" />
            <TechH2>Aarna Singhal</TechH2>
            <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/aarnasinghal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/aarnasinghal09/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491042/Asset%20Mantle%20-%20Team%202023/Content/Shreya%20gupta.png" />
            <TechH2>Shreya gupta</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/shreya-gupta-0b6821255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/ShreyaG62537332" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_shreyaguptaa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Co-Ordinators</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688541471/Asset%20Mantle%20-%20Team%202023/Content/Megha%20Yadav.jpg" />
            <TechH2>Megha yadav</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/megha-yadav-021851245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/039megha16072" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/meghaa_931/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491032/Asset%20Mantle%20-%20Team%202023/Content/Sakshi.jpg" />
            <TechH2>Sakshi</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/sakshimiishra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/miishrasakshii9/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Anushree%20Bondia.jpg" />
            <TechH2>Anushree Bondia</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anushree-bondia-b16139219" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/seraphic_anushree/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  )
}

export default research;
