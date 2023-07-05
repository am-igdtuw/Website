import React from 'react'
import { TechContainer, TechH1, TechWrapper, TechCard, TechIcon, TechH2, TechP } from './Elements';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Tech = () => {
  return (
    <>
        <TechContainer id="team">
        <TechH1>Team Lead</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg" />
            <TechH2>Harshita Deep</TechH2>
            <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/harshita-d-8a352722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/harshita_7777" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/ha_rshita4387/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Cores</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688526862/Asset%20Mantle%20-%20Team%202023/Technical/Mansi.jpg" />
            <TechH2>Mansi</TechH2>
            <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/mansi-jangra-33a77622a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/_mansiJangra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="{Icon1}" />
            <TechH2>Sneha Chauhan</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Co-Ordinators</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="{Icon1} "/>
            <TechH2>Monalika Patnaik </TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/MonalikaPatnaik" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/monalika_0101/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688491388/Asset%20Mantle%20-%20Team%202023/Technical/Mehek%20Prabhakar.webp" />
            <TechH2>Mehek Prabhakar </TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/mehekprabhakar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/mehekprabhakar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688527494/Asset%20Mantle%20-%20Team%202023/Technical/Manjusha%20Iyer.jpg" />
            <TechH2>Manjusha Iyer </TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/iyermanjusha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/v1688491387/Asset%20Mantle%20-%20Team%202023/Technical/Apoorva.jpg" />
            <TechH2>Apoorva </TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/apoorva-a65a18256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/GilhotraApoorva" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/verve_infinite/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  )
}

export default Tech;