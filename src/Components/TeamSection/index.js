import React, { useEffect } from 'react'

import TeamMemberCard from './TeamMemberCard';
import { TeamContainer,TechP, TeamHead, TeamWrapper, TeamListWrapper,TeamListWrapper2, TeamName} from './TeamElements';
import { FaLinkedin,FaInstagram,FaTwitter } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const TeamPage = () => {

  // const advisor = [
  //   {
  //     name: 'Unnati Chabra',
  //     role: 'Founder',
  //     imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688969490/Asset%20Mantle%20-%20Team%202023/Leads/WhatsApp_Image_2023-07-10_at_11.31.50_pfiaub.jpg', 
  //     techProfiles: (
  //       <TechP>
  //         <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  //           <a className='twitter' href="https://twitter.com/Unnati_twts" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"  style={{ verticalAlign: 'middle' }}/></a>
  //           <a className='insta' href="https://www.instagram.com/unnatiisig/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
  //       </TechP>
  //     )
  //   },
  // ];
  
  const president = [
    {
      name: 'Geetika Gupta',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Geetika%20Gupta.jpg', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/geetikaguptagg/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/geetikaguptaa" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/geetikaagupta/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Astha Bhaskar',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693722819/Asset%20Mantle%20-%20Team%202023/Leads/Asthaaaa_yab0s9.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/astha-bhaskar-5a049b233/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/asthabhaskar19" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
          <a className='insta' href="https://www.instagram.com/_.astha30/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
  ];
  const vicePresident = [
    {
      name: 'Kamya Varshney',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693146880/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_200314_xtmash.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra-909bb9196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/VarshneyKamya" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
                  <a className='insta' href="https://www.instagram.com/kemyav7/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Garima Pahwa',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693146892/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_200325_wnmi0v.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/garima-pahwa-68416a22a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/PahwaGinni" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
                  <a className='insta' href="https://www.instagram.com/ginniiiipahwa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
  ];
  const techTeamLead = [
    {
      name: 'Harshita Deep',
      role: 'Technical Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/harshita-d-8a352722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='twitter' href="https://twitter.com/harshita_7777" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
            <a className='insta' href="https://www.instagram.com/ha_rshita4387/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    }
  ]
  const techTeamCore = [
    {
      name: 'Mansi',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146647/Asset%20Mantle%20-%20Team%202023/Technical/mansi_naqlkc.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/mansi-jangra-33a77622a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/_mansiJangra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Sneha Chauhan',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/dx0dgujbj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688875544/My%20Image/Untitled_design_1_bqfeyo.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/sneha-chauhan-986a21213/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/_Sneha_Chauhan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP>
      )
    }
  ]
    // {
    //   name: 'Manjusha Iyer',
    //   role: 'Co-Ordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688527494/Asset%20Mantle%20-%20Team%202023/Technical/Manjusha%20Iyer.jpg', 
    //   techProfiles : (
    //     <TechP>
    //        <a className='linkiden' href="https://www.linkedin.com/in/manjusha-iyer-83b4a01a7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href=" https://twitter.com/ManjushaIyer" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //            <a className='insta' href="https://www.instagram.com/iyermanjusha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    const techTeamCoordinator = [
    {
      name: 'Apoorva ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146223/Asset%20Mantle%20-%20Team%202023/Technical/apoorva_u2qoq3.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/apoorva-a65a18256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/GilhotraApoorva" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="https://www.instagram.com/verve_infinite/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    {
      name: 'Pooja Ramnaney ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693825841/Asset%20Mantle%20-%20Team%202023/Technical/IMG20230423181811_kjlm8l.jpg', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/pooja-ramnaney/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/pooja_ramnaney" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="https://www.instagram.com/pooja_ramnaney/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    {
      name: 'Vidushi Agarwal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661648/Asset_Mantle/Vidushi_Picture_yy5rkb.jpg', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/vidushi-agarwal-a95885256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://x.com/Vidushit143?t=JfyHPP-GAZXzTNcTQ5HFUw&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="https://instagram.com/agarwal.vidu?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    {
      name: 'Advitiya Sharma',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661646/Asset_Mantle/AM_smbmvl.jpg', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/advitiya993/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="https://instagram.com/advitiya__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    {
      name: 'Manya',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661632/Asset_Mantle/Screenshot_2023-09-23_160127_gazttb.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="http://www.linkedin.com/in/manya-455796284" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://x.com/hi_manya_?t=OSpzRfmP-obfRidF2E4fxg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="https://instagram.com/its_manya_23?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    {
      name: 'Himanshi',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661632/Asset_Mantle/Screenshot_2023-09-23_160127_gazttb.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/himanshi-prajapati-070bb6280/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://x.com/hiihimanshi?t=5HDh3fRWuO6yNIsPeDF5OQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
               <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    // {
    //   name: 'Mehek Prabhakar',
    //   role: 'Co-Ordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491388/Asset%20Mantle%20-%20Team%202023/Technical/Mehek%20Prabhakar.webp', 
    //   techProfiles : (
    //     <TechP>
    //                 <a className='linkiden' href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //                    <a className='twitter' href="https://twitter.com/mehekprabhakar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //                    <a className='insta' href="https://www.instagram.com/mehekprabhakar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //       </TechP>
    //   )
    // },
        
  ];

  const eventsTeamLead = [
    {
      name: 'Hiteshi Dattatrey',
      role: 'EM Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/hiteshi-dattatrey-48117422a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/HiteshiD01" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://www.instagram.com/_hiteshii01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Disha Verma',
      role: 'EM Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Disha%20Verma.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/disha-verma-415435231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
       <a className='twitter' href="https://twitter.com/theflank08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
       <a className='insta' href="https://www.instagram.com/the.flank/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP> 
      )
    }
  ]
  const eventsTeamCore = [
    
    {
      name: 'Devanshi verma',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723630/Asset%20Mantle%20-%20Team%202023/EM/Snapchat-829480123_wrvh6k.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/devanshi-verma-3b3401235" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
       <a className='twitter' href="https://twitter.com/Devansh72995205?t=FIVTNBc0eDBFNFsASxV_fA&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
       <a className='insta' href="https://instagram.com/devanshi3013?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP> 
      )
    },
    {
      name: 'Avni Singh',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Avni%20Singh.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/avni-singh-723700259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/avnii.singh_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Arshita ',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723631/Asset%20Mantle%20-%20Team%202023/EM/IMG-20230802-WA0008_ulxyfi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/arshita-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-3446aa256" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Arshita64?t=nS5iEK-qpFkQk6o3-Zz8kA&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/arshita_k22?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Gunjan Vaishnavi Jangra',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723634/Asset%20Mantle%20-%20Team%202023/EM/Picture_kcxbsj.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/gunjanvaishnavijangra/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/gunjanvjangra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/gunjanvjangra/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
  const eventsTeamCoordinater = [
    {
      name: 'Manasi Duggal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490161/Asset%20Mantle%20-%20Team%202023/EM/Manasi%20Duggal.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/manasi-duggal-7b62911a7" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/DuggalManasi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://www.instagram.com/manasiduggal/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Riya Gupta ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/riya-gupta-79170226b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/riyaguptaa2004" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://www.instagram.com/riya09.rg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Saie Pawar ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669972/Asset_Mantle/IMG_20230917_200559_a8g8mn.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/saie-pawar-96b27a262" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/_.saiee?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Kashish Rastogi ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695671019/Asset_Mantle/08501172023_page-0001_semeng.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="http://www.linkedin.com/in/kashish-rastogi-7a189b27a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://www.instagram.com/brighttt4/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Ananya Pal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670797/Asset_Mantle/photo_p86dpd.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/ananya-pal-294a5a289" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/ananyapal09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/ananyaapall?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Vaneeta Alhawat',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670799/Asset_Mantle/IMG_20230923_150836_ymvc66.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="http://www.linkedin.com/in/vaneeta-ahlawat-947920288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/VAAH2027?t=XYh5KHPon6J_xXpLssDfFw&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/ahlawat._.vinny?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Bhoomi Aggarwal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670798/Asset_Mantle/Phoooootoooooo_qaqioa.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/bhoomi-aggarwal-078937287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/bhoomiiaggarwal?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Priya Verma',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670585/Asset_Mantle/priya_eu7avc.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/priya-verma-9668b4291" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/_.priyavermaa?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Manasvi Mittal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670587/Asset_Mantle/Snapchat-247253325_bcnbbu.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/manasvi-mittal-62b83528a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/manasvi_1725?t=35cO357dbIpD5ltQQiry1A&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/manasvi_252?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Shraddha Sharma',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670588/Asset_Mantle/Half_pic_kogn40.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/shraddha-sharma-648a5b270" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/shraddhasharma1476?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Shruti Pathak',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670408/Asset_Mantle/IMG-20230517-WA0008_nn9cxz.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/shruti-pathak-83417328a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/Sp2376?t=JiLQGMREfUANsvzEM9mTOg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },{
      name: 'Manya Sachdeva',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670409/Asset_Mantle/10501172023_wbmxuj.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/manya-kaur-sachdeva-b74069288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Suchika Mishra',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/suchika-mishra-35b22a289" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Garima Gupta',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670411/Asset_Mantle/IMG-20230808-WA0008_gyotyv.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/garima-gupta-a327a2285" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/Garimagg19?t=3hPwY-6Zh4hMgjE-OUJ_mg&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/garima_gg19?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Ekta',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670246/Asset_Mantle/IMG-20230114-WA0014_rmrlrf.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/ekta-singh-184a1224b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/EBerwal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/ekta_23225?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Ridhima Choudhary',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670256/Asset_Mantle/IMG-20230921-WA0002_oxxzcp.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/ridhima-choudhary-774a8b287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/rridhimaaaa?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Palak',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Asset_Mantle/IMG_20230921_135918_jfazmg.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/palak-bansal-3b6666283" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/palakbansl26?t=OZZIHYQ8qMM77MgQkFlnMg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/palak_16876?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Kejal Garg',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669972/Asset_Mantle/IMG-20230903-WA0030_v3nykf.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/kejal-garg-2369b0280" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://instagram.com/kejalgarg?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Khushi',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669971/Asset_Mantle/SI_20221009_144020_kw0ttp.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Deepika',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/deepika-3903a5288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/itsmedeepikaonly?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
        
  ];

  const researchTeamLead = [
    {
      name: 'Srimayee Satapathy',
      role: 'Research Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693148974/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_203811_metg4b.png', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/srimayee-satapathy-915bb0227/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/whoiissrii" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/whoiissrii/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
    // {
    //   name: 'Aarna Singhal',
    //   role: 'Research Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Aarna%20Singhal.jpg', 
    //   techProfiles : (
    //     <TechP>
    //            <a className='linkiden' href="https://www.linkedin.com/in/aarnasinghal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/aarnasinghal09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //           <a className='insta' href="https://www.instagram.com/aarnasinghal09/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
    //   )
    // },
    const researchTeamCore = [
    {
      name: 'Shreya gupta ',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491042/Asset%20Mantle%20-%20Team%202023/Content/Shreya%20gupta.png', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/shreya-gupta-0b6821255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/ShreyaG62537332" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
              <a className='insta' href="https://www.instagram.com/_shreyaguptaa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Megha yadav',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688541471/Asset%20Mantle%20-%20Team%202023/Content/Megha%20Yadav.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/megha-yadav-021851245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/039megha16072" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/meghaa_931/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
  const researchTeamCoordinator = [
    {
      name: 'Sakshi ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491032/Asset%20Mantle%20-%20Team%202023/Content/Sakshi.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/sakshi-mishra-86618a24b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/sakshimiishra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/miishrasakshii9/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Anushree Bondia',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Anushree%20Bondia.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anushree-bondia-b16139219" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/AnushreeBondia?t=CkeWSHsm_UtVJoEiBZlr-g&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/seraphic_anushree/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Jiya',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756496/ji_o1zqw3.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/jiya-sharma-6a6011244" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/JiyaSharmaidk?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/jiyasharma7535/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Anushka Rai',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756496/IMG_20221226_003849_525_zvtlvo.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anushkaraii" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/anushkarai0912?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/anushkarai0912/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Samiksha Singh',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756497/ME_baast7.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/samiksha-singh-08sam08" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/tweetsamiksha?t=t_Od6BjM2qd23A3vuXrf_A&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/samiksha_.singh?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Neha Junewal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/Photo_page-0001_jtozfj.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/neha-junewal-5baa91287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/nehajunewal715" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/nehajunewal_715/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Mehak Garg',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756709/MehakGarg_kjuwuh.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/mehak-garg-084642282" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/mehak.garg05/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Anusha Arora',
      role: 'Co-Ordinator',
      imageUrl: '', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anusha-arora-23a75228a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Anjali Sharma',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/Picture_ltwkdc.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anjali-sharma-159054288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://x.com/anjalii64?t=KX6szUTdgD3h1Kgv3eSERA&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/thatpixelmiss?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
        
  ];

  const mediaTeamLead = [
    {
      name: 'Sanya Gupta',
      role: 'Media Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693148975/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_203657_ozt5kq.png', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/sanya-gupta-1a422b24a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/sanya_gupta19" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/_.sanya.__19/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
  const mediaTeamCore = [
    {
      name: 'Deepakshi',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724908/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230211-WA0033_z8eciq.jpg',
      techProfiles : (
        <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/deepakshi-865b5b227" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Deeps260503?t=nbgj3m6X46jLCdRjORtYEw&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://www.instagram.com/deepakshiii___/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </TechP>
      )
    },
    {
      name: 'Jiya Malik ',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724868/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Photo_kgni52.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/jiya-malik-689774253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Jiyamalik183245" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}  /></a>
              <a className='insta' href="https://www.instagram.com/jiya.malik06/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
  const mediaTeamCoordinator = [
    {
      name: 'Pooja',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/ar_1:1,b_rgb:262c35,bo_10px_solid_rgb:F2AF13,c_fill,g_auto,r_max,w_1000,z_1.5/v1693724865/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230423-WA0027_v6gnhk.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/pooja-a06537259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/PoojaKumari890" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/poojaa_xix/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Divyansha Agrawal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724912/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230615-WA0043_leplrf.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="http://linkedin.com/in/divyansha-agrawal-b18b8b247"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/DivyanshaAgraw5?t=kW-J_qHw2moufXeZ_7Ar9g&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/agrawal_divyansha?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Tripti Jaiswal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/tripti-jaiswal-898472257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/triptijaiswall" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/triptiijaiswal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Muskan Garg',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757435/Screenshot_2023-09-27_011308_xul150.png',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/muskan-garg-803776255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/ofc_itsmuskan?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Mansi Sachdeva',
      role: 'Co-Ordinator',
      imageUrl: '',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/mansi-sachdeva-a81a93250" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://x.com/MansiSachd73909?t=p4UF0IS0IGFpf8rmQ4Gxsg&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/me.mansi17?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Raizel Khanna ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757427/raizel_photo_ul5fcj.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/raizel-khanna-75b978291/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/khannaraizel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/raizel_khanna?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Mahak',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757429/mahak_image_lu6hvz.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/mahak-154720287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt32oFMuYRq68ncwNKOw4Vg%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/Mahak0520" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/_mahak.20?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Priya ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757540/pic_priya_gu0l5a.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/priya-gupta-708524288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://x.com/priyabhargav067?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/not_priyagupta/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Prakriti Negi',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757548/20230921_234750_nogscp.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/prakriti-negi-130a601a8" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/PrakritiNegi4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/prakritinegi08?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Shambhavi Sahoo',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757540/Shambhaviphoto_qlyh9w.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/shambhavi-sahoo-3a4123284" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/_shambhavii21?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Disha Malhotra',
      role: 'Co-Ordinator',
      imageUrl: '',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/celestial_malhotra/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
        
  ];

  const outreachTeamLead = [
    {
      name: 'Nikhila K S',
      role: 'Outreach Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488845/Asset%20Mantle%20-%20Team%202023/Leads/Nikhila%20K%20S.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/know-nikhila-k-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className='twitter' href="https://twitter.com/Nikhila_KS_" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
        <a className='insta' href="https://www.instagram.com/ks_nikhila_/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </TechP>
      )
    }
  ]
  const outreachTeamCore = [
    {
      name: 'Tanisha Bansal ',
      role: 'Outreach Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693725362/Asset%20Mantle%20-%20Team%202023/Outreachy/IMG-20230802-WA0023_lkhfkk.jpg',
      techProfiles : (
        <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/tanisha-bansal-4541a0225" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Tanisha46394055?t=bGmj2PXgA8wy63RoN1oP0Q&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/tanis_ha9907?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </TechP>
      )
    },
    {
      name: 'Sripriya Agarwal',
      role: 'Outreach Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489578/Asset%20Mantle%20-%20Team%202023/Outreachy/Sripriya%20Agarwal.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/sripriya-agarwal-483475261" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Agarwa1Sripriya?t=m7vwumEP8g3DQWYHN7G3AA&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/sripriyaagarwal16?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    }
  ]
  const outreachTeamCoordinator = [
    {
      name: 'Aiman ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489575/Asset%20Mantle%20-%20Team%202023/Outreachy/Aiman.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/aiman-shaikh-1a89b022a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/aimanSHAIK31933" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/aiman_._2/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Sneha ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489581/Asset%20Mantle%20-%20Team%202023/Outreachy/Sneha.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/sneha-10a985261" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Sneha2811981358" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
              <a className='insta' href="https://instagram.com/sneha14166?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Anshika Aggarwal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489576/Asset%20Mantle%20-%20Team%202023/Outreachy/Anshika%20Aggarwal.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/anshika-aggarwal-704847249" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/kipupwidanshika?t=yab8J2GRhw87QhZ4nNpJNQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/agg.anshika007?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Arshi Gupta',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/Asset_Mantle/IMG_3637_rhbwor.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/arshiguptaaa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/Arshig0309" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/arshhhii?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Shradha Jain',
      role: 'Co-Ordinator',
      imageUrl: '',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/shradha-jain-8251191b9/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/shradhajain16" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/shradha_jain__?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Shivika Bathla',
      role: 'Co-Ordinator',
      imageUrl: '',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/shivika-bathla-06542b285" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/arshig0309" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/shivika_bathla?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Pari Gupta',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/Asset_Mantle/WhatsApp_Image_2023-09-21_at_11.38.40_PM_cuzz00.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="www.linkedin.com/in/pari-gupta-05401b283" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://x.com/PariGupta784429?t=eOzwwLXUZplJKdPoZv0yGw&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/pariig3?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Sanya Solanki',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/Asset_Mantle/17001172023-p_y90pqf.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/sanya-solanki-b7594827a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://x.com/solanki_sanya?s=21" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://instagram.com/_sanya_solanki_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Vaishnavi',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672368/Asset_Mantle/WhatsApp_Image_2023-09-25_at_13.34.49_ff4qef.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/vaishnavi-kataria-bb91b5288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Anaya Jain',
      role: 'Co-Ordinator',
      imageUrl: '',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/anaya-jain-4a5715288/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/AnayaJa48981116" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
          <a className='insta' href="https://www.instagram.com/10.anayajain/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
        
  ];

  const location = useLocation();
  const teamNameQueryParam = new URLSearchParams(location.search).get('team');

  useEffect(() => {
    if (teamNameQueryParam) {
      const decodedTeamName = decodeURIComponent(teamNameQueryParam);
      setTimeout(() => {
        scroller.scrollTo(`${decodedTeamName}Section`, {
          duration: 50, 
          // smooth: true,
        });
      }, 500);
    }
  }, [teamNameQueryParam]);

  return (

    <TeamContainer>
    <TeamHead>MEET THE TEAM</TeamHead>
    {/* <TeamWrapper id="founderSection">
      <TeamName>
        Founding Member
      </TeamName>
      <TeamListWrapper3>
          {advisor.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
            
          ))}
          
        </TeamListWrapper3>
      </TeamWrapper> */}

      <TeamWrapper id="President">
      <TeamName>
        President
      </TeamName>
      <TeamListWrapper2>
          {president.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper2>
      </TeamWrapper>

      <TeamWrapper id="Vice President">
      <TeamName>
        Vice President
      </TeamName>
      <TeamListWrapper2>
          {vicePresident.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper2>
      </TeamWrapper>

      <TeamWrapper id="emTeamSection">
      <TeamName>
        Event Management Team
      </TeamName>
      {/* lead */}
      <TeamName>
        <br></br>
        Leads
      </TeamName>
      <TeamListWrapper>
          {eventsTeamLead.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>

        {/* core */}
        <TeamName>
        Cores
      </TeamName>
      <TeamListWrapper>
          {eventsTeamCore.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
        {/* Co-ordinator */}
        <TeamName>
        Co-ordinators
        </TeamName>
        <TeamListWrapper>
            {eventsTeamCoordinater.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                techProfiles={member.techProfiles}
              />
            ))}
          </TeamListWrapper>
      </TeamWrapper>
{/* --------- */}
      <TeamWrapper id="mediaTeamSection">
      <TeamName>
        Graphics and Media Team
      </TeamName>
      <TeamName>
        <br></br>
        Lead
      </TeamName>
      <TeamListWrapper>
          {mediaTeamLead.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>


        {/* core */}
        <TeamName>
        Cores
      </TeamName>
      <TeamListWrapper>
          {mediaTeamCore.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
        {/* Co-ordinator */}
        <TeamName>
        Co-ordinators
        </TeamName>
        <TeamListWrapper>
            {mediaTeamCoordinator.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                techProfiles={member.techProfiles}
              />
            ))}
          </TeamListWrapper>
      </TeamWrapper>
      
      {/* ---------- */}

      <TeamWrapper id="contentTeamSection">
      <TeamName>
        Research and Content Team
      </TeamName>
      {/* lead */}
      <TeamName>
        <br></br>
        Lead
      </TeamName>
      <TeamListWrapper>
          {researchTeamLead.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>


        {/* core */}
        <TeamName>
        Cores
      </TeamName>
      <TeamListWrapper>
          {researchTeamCore.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
        {/* Co-ordinator */}
        <TeamName>
        Co-ordinators
        </TeamName>
        <TeamListWrapper>
            {researchTeamCoordinator.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                techProfiles={member.techProfiles}
              />
            ))}
          </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper id="outreachTeamSection">
      <TeamName>
        Outreach Team
      </TeamName>
      {/* lead */}
      <TeamName>
        <br></br>
        Lead
      </TeamName>
      <TeamListWrapper>
          {outreachTeamLead.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>


        {/* core */}
        <TeamName>
        Cores
      </TeamName>
      <TeamListWrapper>
          {outreachTeamCore.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
        {/* Co-ordinator */}
        <TeamName>
        Co-ordinators
        </TeamName>
        <TeamListWrapper>
            {outreachTeamCoordinator.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                techProfiles={member.techProfiles}
              />
            ))}
          </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper id="techTeamSection">
      <TeamName>
        Technical Team
      </TeamName>

      {/* lead */}
      <TeamName>
        <br></br>
        Lead
      </TeamName>
      <TeamListWrapper>
          {techTeamLead.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>


        {/* core */}
        <TeamName>
        Cores
      </TeamName>
      <TeamListWrapper>
          {techTeamCore.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
        {/* Co-ordinator */}
        <TeamName>
        Co-ordinators
        </TeamName>
        <TeamListWrapper>
            {techTeamCoordinator.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                techProfiles={member.techProfiles}
              />
            ))}
          </TeamListWrapper>
      </TeamWrapper>

      </TeamContainer>
  )
}

export default TeamPage
