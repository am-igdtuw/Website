import React from 'react'
import { TechContainer, TechH1, TechWrapper, TechCard, TechIcon, TechH2, TechP } from './Elements';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Icon1 from './t4 copy.png';
const Tech = () => {
  return (
    <>
        <TechContainer id="team">
        <TechH1>Team Lead</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Lead</TechH2>
            <TechP>
              <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Cores</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Core</TechH2>
            <TechP>
               <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a></TechP>
          </TechCard>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Core</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Co-Ordinators</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Member</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Member</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src={Icon1} />
            <TechH2>Name of the Team Member</TechH2>
            <TechP>
            <a className='linkiden' href="[LinkedIn Profile URL]"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]"><FaTwitter /></a>
              <a className='insta' href="[Instagram Profile URL]"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  )
}

export default Tech;