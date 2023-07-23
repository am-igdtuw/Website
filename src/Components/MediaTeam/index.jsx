import React from 'react'
import { TechContainer, TechH1, TechWrapper, TechCard, TechIcon, TechH2, TechP } from './Elements';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const media = () => {
  return (
    <>
      <TechContainer id="team">
        <TechH1>Team Lead</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688488854/Asset%20Mantle%20-%20Team%202023/Leads/Sanya%20Gupta.jpg" />
            <TechH2>Sanya Gupta </TechH2>
            <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/sanya-gupta-1a422b24a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/sanya_gupta19" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_.sanya.__19/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Cores</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491530/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Deepakshi.jpg" />
            <TechH2>Deepakshi</TechH2>
            <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/deepakshi-865b5b227" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Deeps260503?t=nbgj3m6X46jLCdRjORtYEw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/deepakshiii___/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Jiya%20Malik.jpg" />
            <TechH2>Jiya Malik</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/jiya-malik-689774253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Jiyamalik183245" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/jiya.malik06/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>

        <TechH1>Team Co-Ordinators</TechH1>
        <TechWrapper>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490608/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Pooja.jpg" />
            <TechH2>Pooja</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/pooja-a06537259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/PoojaKumari890" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/poojaa_xix/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491189/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Divansha%20Agrawal.jpg" />
            <TechH2>Divyansha Agrawal </TechH2>
            <TechP>
            <a className='linkiden' href="http://linkedin.com/in/divyansha-agrawal-b18b8b247"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/DivyanshaAgraw5?t=kW-J_qHw2moufXeZ_7Ar9g&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://instagram.com/agrawal_divyansha?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
          <TechCard>
            <TechIcon src="https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg" />
            <TechH2>Tripti Jaiswal</TechH2>
            <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/tripti-jaiswal-898472257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/triptijaiswall" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/triptiijaiswal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
          </TechCard>
        </TechWrapper>
      </TechContainer>
    </>
  )
}

export default media;
