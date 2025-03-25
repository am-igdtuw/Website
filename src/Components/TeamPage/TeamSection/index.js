import React, { useEffect } from "react";

import TeamMemberCard from "./TeamMemberCard";
import {
  TeamContainer,
  TechP,
  TeamHead,
  TeamWrapper,
  TeamListWrapper,
  TeamListWrapper2,
  TeamName,
} from "./TeamElements";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

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
      name: "Shreya Gupta",
      role: "President",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915464/IMG_0563_1_ux9w5t.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/shreya-gupta-0b6821255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/shregupta89?mx=2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/_shreyaguptaa_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const vicePresident = [
    {
      name: "Anshika Aggarwal",
      role: "Vice President",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/IMG-20240529-WA0002_ryj073.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/anshika-aggarwal-704847249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/kipupwidanshika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/agg.anshika007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Sakshi Mishra",
      role: "Vice President",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915201/image_rbwjwz.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://linkedin.com/in/sakshi-mishra-86618a24b"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/sakshimiishra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/miishrasakshii/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const techTeamLead = [
    {
      name: "Vidushi Agarwal ",
      role: "Technical Lead",
      imageUrl:
        "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661648/Asset_Mantle/Vidushi_Picture_yy5rkb.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/vidushi-agarwal-a95885256"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Vidushit143?t=eQzBXgOJkB9VSD-3whT7WQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/agarwal.vidu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const techTeamCore = [
    {
      name: "Manya",
      role: "Technical Core",
      imageUrl:
        "https://res.cloudinary.com/duptmanu9/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717849294/Profile-Manya_xf4ehi.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/manya35?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/hi_manya_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/simpformanya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Priya Verma",
      role: "Technical Core",
      imageUrl:
        "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670585/Asset_Mantle/priya_eu7avc.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/priya-verma-9668b4291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/PriyaVe93285977"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/_.priyavermaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: 'Mansi',
    //   role: 'Technical Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146647/Asset%20Mantle%20-%20Team%202023/Technical/mansi_naqlkc.png',
    //   techProfiles : (
    //     <TechP>
    //       <a className='linkiden' href="https://www.linkedin.com/in/mansi-jangra-33a77622a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href="https://twitter.com/_mansiJangra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Sneha Chauhan',
    //   role: 'Technical Core',
    //   imageUrl: 'https://res.cloudinary.com/dx0dgujbj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688875544/My%20Image/Untitled_design_1_bqfeyo.png',
    //   techProfiles : (
    //     <TechP>
    //          <a className='linkiden' href="https://www.linkedin.com/in/sneha-chauhan-986a21213/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href="https://twitter.com/_Sneha_Chauhan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //            <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //    </TechP>
    //   )
    // }
  ];
  // {
  //   name: 'Manjusha Iyer',
  //   role: 'Coordinator',
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
    // {
    //   name: 'Apoorva ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146223/Asset%20Mantle%20-%20Team%202023/Technical/apoorva_u2qoq3.png',
    //   techProfiles : (
    //     <TechP>
    //          <a className='linkiden' href="https://www.linkedin.com/in/apoorva-a65a18256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href="https://twitter.com/GilhotraApoorva" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //            <a className='insta' href="https://www.instagram.com/verve_infinite/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //      </TechP>
    //   )
    // },
    {
      name: "Chahal Jain",
      role: "Coordinator",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850607/chahal_dhywcv.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="http://www.linkedin.com/in/chahal-jain-914434279"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: "Advitiya Sharma",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/duptmanu9/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875/WhatsApp_Image_2024-06-08_at_18.14.01_654e905c_ip4rvt.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/advitiya993/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/advitiya__?igshid=OGQ5ZDc2ODk2ZA=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    {
      name: "Anamika Garg",
      role: "Coordinator",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875//WhatsApp_Image_2025-03-24_at_9.50.54_PM_u4pjxg.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/anamika-garg-aa14a5300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/AnamikaGarg29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/akimana_fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Bhumi Gupta",
      role: "Coordinator",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875/IMG_20240316_182633_011_bi9lm9.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="http://www.linkedin.com/in/guptabhumi2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/BhumiGupta81010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/spk2bhumi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Ananya Verma",
      role: "Coordinator",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717850875/IMG_20240908_150247_nplmqm.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="http://www.linkedin.com/in/ananyaverma23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/a_nnie_99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: 'Manya',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695661632/Asset_Mantle/Screenshot_2023-09-23_160127_gazttb.png',
    //   techProfiles : (
    //     <TechP>
    //          <a className='linkiden' href="http://www.linkedin.com/in/manya-455796284" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href="https://x.com/hi_manya_?t=OSpzRfmP-obfRidF2E4fxg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //            <a className='insta' href="https://instagram.com/its_manya_23?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //      </TechP>
    //   )
    // },
    // {
    //   name: 'Mehek Prabhakar',
    //   role: 'Coordinator',
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
    // {
    //   name: 'Hiteshi Dattatrey',
    //   role: 'EM Lead',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg',
    //   techProfiles : (
    //     <TechP>
    //           <a className='linkiden' href="https://www.linkedin.com/in/hiteshi-dattatrey-48117422a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/HiteshiD01" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://www.instagram.com/_hiteshii01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    {
      name: "Shaivi Goel",
      role: "EM Lead",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717858468/assetmerkle_Shaivi_p2ims7.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/shaivi-goel-b14160245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/shaizvanchutney?t=4-LRIbOvFydced2iuv_oLQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/shaivigoel_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Sripriya Agarwal ",
      role: "EM Lead",
      imageUrl:
        "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489578/Asset%20Mantle%20-%20Team%202023/Outreachy/Sripriya%20Agarwal.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/sripriya-agarwal-483475261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Agarwa1Sripriya?t=JxikcfXG9ffcnonwhLDxhw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/sripriyaagarwal16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const eventsTeamCore = [
    {
      name: "Palak",
      role: "EM Core",
      imageUrl:
        "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Asset_Mantle/IMG_20230921_135918_jfazmg.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/palak-bansal-3b6666283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/palakbansl26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/palak_16876"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Avni",
      role: "EM Core",
      imageUrl:
        "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Avni%20Singh.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/avni-singh-723700259"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/avnisingh023"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/avnii.singh_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Ridhima Choudhary",
      role: "EM Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/ridhima_rzc5go.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/ridhima-choudhary-774a8b287"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/rridhimaaaa?igshid=MzNlNGNkZWQ4Mg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Deepika",
      role: "EM Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/deepika_ynjfow.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/deepika-3903a5288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@frDeepika"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/deepika._.919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Prerana Arya",
      role: "EM Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670256/WhatsApp_Image_2025-03-25_at_12.10.20_AM_smxbpd.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/prerana-arya-84b020283/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@PreranaSays"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/11prer.a.na/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: "Arshita ",
    //   role: "EM EM Core",
    //   imageUrl:
    //     "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723631/Asset%20Mantle%20-%20Team%202023/EM/IMG-20230802-WA0008_ulxyfi.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/arshita-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-3446aa256"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://twitter.com/Arshita64?t=nS5iEK-qpFkQk6o3-Zz8kA&s=09"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/arshita_k22?igshid=MzNlNGNkZWQ4Mg=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },

    // {
    //   name: 'Gunjan Vaishnavi Jangra',
    //   role: 'EM EM Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723634/Asset%20Mantle%20-%20Team%202023/EM/Picture_kcxbsj.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/gunjanvaishnavijangra/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/gunjanvjangra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/gunjanvjangra/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // }
  ];
  const eventsTeamCoordinatorr = [
    // {
    //   name: 'Manasi Duggal ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490161/Asset%20Mantle%20-%20Team%202023/EM/Manasi%20Duggal.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/manasi-duggal-7b62911a7" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/DuggalManasi" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://www.instagram.com/manasiduggal/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Riya Gupta ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/riya-gupta-79170226b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/riyaguptaa2004" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://www.instagram.com/riya09.rg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: "Saie Pawar ",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669972/Asset_Mantle/IMG_20230917_200559_a8g8mn.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/saie-pawar-96b27a262"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/_.saiee?igshid=MzMyNGUyNmU2YQ=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    // {
    //   name: 'Kashish Rastogi ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695671019/Asset_Mantle/08501172023_page-0001_semeng.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="http://www.linkedin.com/in/kashish-rastogi-7a189b27a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://www.instagram.com/brighttt4/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Ananya Pal ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670797/Asset_Mantle/photo_p86dpd.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/ananya-pal-294a5a289" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/ananyapal09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/ananyaapall?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Vaneeta Alhawat',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670799/Asset_Mantle/IMG_20230923_150836_ymvc66.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="http://www.linkedin.com/in/vaneeta-ahlawat-947920288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/VAAH2027?t=XYh5KHPon6J_xXpLssDfFw&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/ahlawat._.vinny?igshid=MzMyNGUyNmU2YQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Bhoomi Aggarwal',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670798/Asset_Mantle/Phoooootoooooo_qaqioa.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/bhoomi-aggarwal-078937287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/bhoomiiaggarwal?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Priya Verma',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670585/Asset_Mantle/priya_eu7avc.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/priya-verma-9668b4291" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/_.priyavermaa?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Manasvi Mittal',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670587/Asset_Mantle/Snapchat-247253325_bcnbbu.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/manasvi-mittal-62b83528a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/manasvi_1725?t=35cO357dbIpD5ltQQiry1A&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/manasvi_252?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Shraddha Sharma',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670588/Asset_Mantle/Half_pic_kogn40.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/shraddha-sharma-648a5b270" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/shraddhasharma1476?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Shruti Pathak',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670408/Asset_Mantle/IMG-20230517-WA0008_nn9cxz.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/shruti-pathak-83417328a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/Sp2376?t=JiLQGMREfUANsvzEM9mTOg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Manya Sachdeva',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670409/Asset_Mantle/10501172023_wbmxuj.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/manya-kaur-sachdeva-b74069288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Suchika Mishra',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/suchika-mishra-35b22a289" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Garima Gupta',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670411/Asset_Mantle/IMG-20230808-WA0008_gyotyv.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/garima-gupta-a327a2285" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/Garimagg19?t=3hPwY-6Zh4hMgjE-OUJ_mg&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/garima_gg19?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Ekta',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670246/Asset_Mantle/IMG-20230114-WA0014_rmrlrf.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/ekta-singh-184a1224b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/EBerwal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter"style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/ekta_23225?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: "Ridhima Choudhary",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670256/Asset_Mantle/IMG-20230921-WA0002_oxxzcp.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/ridhima-choudhary-774a8b287"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/rridhimaaaa?igshid=MzNlNGNkZWQ4Mg=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    // {
    //   name: 'Palak',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Asset_Mantle/IMG_20230921_135918_jfazmg.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/palak-bansal-3b6666283" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/palakbansl26?t=OZZIHYQ8qMM77MgQkFlnMg&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://instagram.com/palak_16876?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: "Kejal Garg",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669972/Asset_Mantle/IMG-20230903-WA0030_v3nykf.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/kejal-garg-2369b0280"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/kejalgarg?igshid=OGQ5ZDc2ODk2ZA=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    // {
    //   name: 'Khushi',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695669971/Asset_Mantle/SI_20221009_144020_kw0ttp.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: "Deepika",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/deepika-3903a5288"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://instagram.com/itsmedeepikaonly?igshid=NzZlODBkYWE4Ng=="
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    {
      name: "Shaivi Jain",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/shavi_lomval.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/shaivi-jain-86937a321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="https://instagram.com/shaivi1706" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Manupreet Kaur",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/manu_sssyb3.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/manupreet-kaur-9a69b0324"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@manupreet2307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Anuradha Singla",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/Screenshot_2025-03-25_222104_hnfmyh.png",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anuradha-singla-558a9b2a1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@Anuradha490586"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Anoushka Jha",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/anoushka_j6bvwe.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anoushka-jha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: "Jiya Gulyani",
    //   role: "Coordinator",
    //   imageUrl: "",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkedin"
    //         href="http://www.linkedin.com/in/jiya-gulyani-7b1104322"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
    //         <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
    //       </a>
    //       <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    {
      name: "Ritika Sharma",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/ritika_kztxar.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/ritika-sharma-54b25924a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@RitikaS31140365"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Twinkle",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915745/twinkle_hnmzvx.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/twinkle-b4b26a321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@twinkle1428"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Saie Pawar",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/saie_ik65xl.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/saie-pawar-96b27a262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@Saie__Pawar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Shreya Rathore",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/shreya_nmkaqc.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/shreya-rathore-135785265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Ananshi Nayak",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/ananshi_sm23e5.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/ananshi-nayak-69a19b327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@ananshi_nayak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Disha Gupta",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742915747/Disha_Photo_nu2qt1.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/disha-gupta-343880328"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@DishaGupta39677"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    }
  ];

  const researchTeamLead = [
    {
      name: "Srishneet Kaur",
      role: "Research Lead",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859161/Picture_a8gz7j.png",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/srishneet-kaur-59a924263"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/skm85636356?t=kd8SjHAG3Lb_m5KpbPOXSw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/call_me_kaurr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Sakshi Singh",
      role: "Research Lead",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859243/IMG_20240602_235835_ooaqoe.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/sakshi-singh-1661b426b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Sak_2518"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/_sakshi2518_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  // {
  //   name: 'Aarna Singhal',
  //   role: 'Research EM Core',
  //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Aarna%20Singhal.jpg',
  //   techProfiles : (
  //     <TechP>
  //            <a className='linkiden' href="https://www.linkedin.com/in/aarnasinghal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  //           <a className='twitter' href="https://twitter.com/aarnasinghal09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
  //           <a className='insta' href="https://www.instagram.com/aarnasinghal09/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
  //   )
  // },
  const researchTeamCore = [
    // {
    //   name: 'Shreya gupta ',
    //   role: 'Research Core',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/shreya-gupta-0b6821255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/ShreyaG62537332" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}/></a>
    //           <a className='insta' href="https://www.instagram.com/_shreyaguptaa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: "Jiya",
    //   role: "Research Core",
    //   imageUrl:
    //     "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756496/ji_o1zqw3.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/jiya-sharma-6a6011244"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://x.com/JiyaSharmaidk?s=20"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://www.instagram.com/jiyasharma7535/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    {
      name: "Mehak Garg",
      role: "Research Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756709/image_yatzxo.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/mehak-garg-084642282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/mehak.garg05/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Anjali Sharma",
      role: "Research Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/pictureee_nqnhxa.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/anjali-sharma-159054288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/anjalii64?t=KX6szUTdgD3h1Kgv3eSERA&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/thatpixelmiss?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: 'Megha yadav',
    //   role: 'Research Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688541471/Asset%20Mantle%20-%20Team%202023/Content/Megha%20Yadav.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/megha-yadav-021851245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/039megha16072" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/meghaa_931/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // }
  ];
  const researchTeamCoordinator = [
    // {
    //   name: 'Sakshi ',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/sakshi-mishra-86618a24b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/sakshimiishra" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/miishrasakshii9/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Anushree Bondia',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Anushree%20Bondia.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/anushree-bondia-b16139219" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/AnushreeBondia?t=CkeWSHsm_UtVJoEiBZlr-g&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/seraphic_anushree/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Jiya',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756496/ji_o1zqw3.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/jiya-sharma-6a6011244" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/JiyaSharmaidk?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/jiyasharma7535/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Anushka Rai',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756496/IMG_20221226_003849_525_zvtlvo.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/anushkaraii" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/anushkarai0912?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/anushkarai0912/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Samiksha Singh',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756497/ME_baast7.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/samiksha-singh-08sam08" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/tweetsamiksha?t=t_Od6BjM2qd23A3vuXrf_A&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/samiksha_.singh?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Neha Junewal',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/Photo_page-0001_jtozfj.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/neha-junewal-5baa91287" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/nehajunewal715" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/nehajunewal_715/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Mehak Garg',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756709/MehakGarg_kjuwuh.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/mehak-garg-084642282" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/mehak.garg05/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Anusha Arora',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/anusha-arora-23a75228a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Anjali Sharma',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695756710/Picture_ltwkdc.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/anjali-sharma-159054288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://x.com/anjalii64?t=KX6szUTdgD3h1Kgv3eSERA&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/thatpixelmiss?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
      {
        name: "Aditi Gupta",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/aditi_dgskwg.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/aditi-gupta-464024324"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="twitter"
              href="https://x.com/Aditi21gupta?t=DKh4-MceOntfWVIhPEHIKg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/kabhikabhi_adiiti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Suhaani Agarwal",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/suhaani_s5qa60.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/suhaani-agarwal-010a0a280"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="twitter"
              href="https://x.com/suhaaniag07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/suhaani0707"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Kritika Singh",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/kritika_luccmz.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/kritika-singh-758b95322"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="twitter"
              href="https://x.com/Kritika32717391"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/ks_.1220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Swati Singh",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/swati_ts77zp.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/swati-singh-6031a4292"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="twitter"
              href="https://x.com/Swati_2104?t=tJf3JxraoyMrZKvXdy7fRQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/swatiii_64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Sargam Sharma",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/sargam_rrqgbb.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/er-sargam-sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Bhanvi Narang",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/bhanvi_cg4xna.jpg",
        techProfiles: (
          <TechP>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/bhanvi-narang-979639248/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              className="twitter"
              href="https://x.com/bhanvi_narang?t=TYnMuZ6CyfDk_8Amwn0QMw&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/bhanvi_narang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      },
      {
        name: "Tisya Jaitley",
        role: "Coordinator",
        imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Screenshot_2025-03-25_225759_bbhdsl.png",
        techProfiles: (
          <TechP>
            <a className="linkedin" href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
            </a>
            <a
              className="insta"
              href="https://instagram.com/Tisya_xoxo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </TechP>
        ),
      }
        
  ];

  const mediaTeamLead = [
    {
      name: "Ayushi Gupta",
      role: "Media Lead",
      imageUrl:
        "https://res.cloudinary.com/dpeurcgui/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1724788566/ayushi_media_pic_jnx8in.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/ayushi-gupta-2b6a03262/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/_ayushii_guptaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Jiya Malik ",
      role: "Media Lead",
      imageUrl:
        "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724868/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Photo_kgni52.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/jiya-malik-689774253"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/Jiyamalik183245"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/jiya.malik06/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const mediaTeamCore = [
    // {
    //   name: 'Deepakshi',
    //   role: 'Media Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724908/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230211-WA0033_z8eciq.jpg',
    //   techProfiles : (
    //     <TechP>
    //            <a className='linkiden' href="https://www.linkedin.com/in/deepakshi-865b5b227" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/Deeps260503?t=nbgj3m6X46jLCdRjORtYEw&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://www.instagram.com/deepakshiii___/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //           </TechP>
    //   )
    // },
    // {
    //   name: 'Jiya Malik ',
    //   role: 'Media Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724868/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Photo_kgni52.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/jiya-malik-689774253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/Jiyamalik183245" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }}  /></a>
    //           <a className='insta' href="https://www.instagram.com/jiya.malik06/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // }
    {
      name: "Anusha Arora",
      role: "Media Core",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859478/f0d11246-336f-4aa6-91d9-8b6f7d94a23f_shtsrl.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/anusha-arora-23a75228a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Tripti Jaiswal",
      role: "Media Core",
      imageUrl:
        "https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/tripti-jaiswal-898472257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/triptijaiswall"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/triptiijaiswal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Shreya Gupta",
      role: "Media Core",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859527/Photo_from_Shreya_Gupta_l7d5tu.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/shreya-gupta-a783b9270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/S_hreya17?t=asc6_ZPHG5vM-_S7HCGeIQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/s_hreya173?igsh=MWNoenZ5eHBzNm1kbA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Mahak",
      role: "Media Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859527/Mahak_AM_kv4kgj.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/mahak-154720287/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="hhttps://x.com/Mahak0520"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const mediaTeamCoordinator = [
    // {
    //   name: 'Pooja',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/ar_1:1,b_rgb:262c35,bo_10px_solid_rgb:F2AF13,c_fill,g_auto,r_max,w_1000,z_1.5/v1693724865/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230423-WA0027_v6gnhk.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/pooja-a06537259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/PoojaKumari890" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/poojaa_xix/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Divyansha Agrawal ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724912/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230615-WA0043_leplrf.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="http://linkedin.com/in/divyansha-agrawal-b18b8b247"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/DivyanshaAgraw5?t=kW-J_qHw2moufXeZ_7Ar9g&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/agrawal_divyansha?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Tripti Jaiswal',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/tripti-jaiswal-898472257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/triptijaiswall" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/triptiijaiswal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Muskan Garg',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757435/Screenshot_2023-09-27_011308_xul150.png',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/muskan-garg-803776255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/ofc_itsmuskan?igshid=NzZlODBkYWE4Ng==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    // name: 'Mansi Sachdeva',
    // role: 'Coordinator',
    // imageUrl: '',
    // techProfiles : (
    //   <TechP>
    //   <a className='linkiden' href="https://www.linkedin.com/in/mansi-sachdeva-a81a93250" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //     <a className='twitter' href="https://x.com/MansiSachd73909?t=p4UF0IS0IGFpf8rmQ4Gxsg&s=08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //     <a className='insta' href="https://instagram.com/me.mansi17?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    // {/* </TechP>
    //   )
    // },
    // {
    //   name: 'Raizel Khanna ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757427/raizel_photo_ul5fcj.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/raizel-khanna-75b978291/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/khannaraizel" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/raizel_khanna?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // }, */}
    // {
    //   name: 'Mahak',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757429/mahak_image_lu6hvz.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/mahak-154720287?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bt32oFMuYRq68ncwNKOw4Vg%3D%3D" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/Mahak0520" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/_mahak.20?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Priya ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757540/pic_priya_gu0l5a.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/priya-gupta-708524288" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://x.com/priyabhargav067?s=20" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/not_priyagupta/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Prakriti Negi',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757548/20230921_234750_nogscp.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/prakriti-negi-130a601a8" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/PrakritiNegi4" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/prakritinegi08?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Shambhavi Sahoo',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695757540/Shambhaviphoto_qlyh9w.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/shambhavi-sahoo-3a4123284" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/_shambhavii21?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Disha Malhotra',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/celestial_malhotra/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    {
      name: "Mehar Kapoor",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/mehar_kvevsp.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://linkedin.com/in/mehar-kapoor-428802214/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/mehar_kapoor7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Aakriti Shakya",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/akriti_b3h3zd.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/aakriti-shakya-a826b8275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/aakritishakya9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/aakritishakya9?igsh=eXVnNGxubnd5YW1z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Diya Kotru",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/diya_a73a8v.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/diya-kotru-9059a2322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/DiyaKotru137?t=pabeLE5N_egQROo4u_O5og&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/kotrudiya?igsh=Y3UwNDluYWJyamcx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Priyanshi",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/priyanshi_cuuz7x.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="www.linkedin.com/in/priyanshi-roy-a67825201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/phiandrho"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Tanisha Ojha",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/tanisha_merlrx.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/tanisha-ojha-6bb1b0203"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/TanishaOjha99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/tanishaaaa_3?igsh=eWZzMGduMjU1bzF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Navya",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/nnnnnnnn_t3exs6.jpg",
      techProfiles: (
        <TechP>
          <a className="linkedin" href="/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/navyajaint?igsh=MW9zZDdoODF1N2E0aA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    }
  ];

  const outreachTeamLead = [
    {
      name: "Shruti Jha",
      role: "Outreach Lead",
      imageUrl:
        "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859596/picture_for_AM_k08emn.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/shruti-jha-28b4b5255"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Shruti_Jha6?t=jyKDKRQ06iwFe8gtuk_5fw&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/shuru_iti/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
  ];
  const outreachTeamCore = [
    // {
    //   name: 'Tanisha Bansal ',
    //   role: 'Outreach Core',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693725362/Asset%20Mantle%20-%20Team%202023/Outreachy/IMG-20230802-WA0023_lkhfkk.jpg',
    //   techProfiles : (
    //     <TechP>
    //            <a className='linkiden' href="https://www.linkedin.com/in/tanisha-bansal-4541a0225" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/Tanisha46394055?t=bGmj2PXgA8wy63RoN1oP0Q&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/tanis_ha9907?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //           </TechP>
    //   )
    // },
    {
      name: "Sonasha Choudhary",
      role: "Outreach Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/IMG_20240529_004615_328_gf6l5g.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/sonasha-choudhary-5a9274298"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/Sonasha99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/sonashaaa_08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Vaishnavi",
      role: "Outreach Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/profile_pic_bwz9q6.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/vaishnavi-kataria-bb91b5288/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/vaishnaviv69071"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/vaishnavikataria1510/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Anaya",
      role: "Outreach Core",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859643/picture_vtb8hj.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="https://www.linkedin.com/in/anaya-jain-4a5715288"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://twitter.com/AnayaJa48981116"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/10.anayajain?igsh=eHo4d2c3YnBjOXZi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: "Naincy Yadav ",
    //   role: "Outreach Core",
    //   imageUrl:
    //     "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859692/pic_3_tljdvx.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/naincy-yadav-3a63a7263"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://x.com/@yd_naincy005"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href=""
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
  ];
  const outreachTeamCoordinator = [
    // {
    //   name: 'Aiman ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489575/Asset%20Mantle%20-%20Team%202023/Outreachy/Aiman.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/aiman-shaikh-1a89b022a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/aimanSHAIK31933" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://www.instagram.com/aiman_._2/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Sneha ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489581/Asset%20Mantle%20-%20Team%202023/Outreachy/Sneha.jpg',
    //   techProfiles : (
    //     <TechP>
    //         <a className='linkiden' href="https://www.linkedin.com/in/sneha-10a985261" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //           <a className='twitter' href="https://twitter.com/Sneha2811981358" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //           <a className='insta' href="https://instagram.com/sneha14166?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //         </TechP>
    //   )
    // },
    // {
    //   name: 'Anshika Aggarwal ',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489576/Asset%20Mantle%20-%20Team%202023/Outreachy/Anshika%20Aggarwal.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/anshika-aggarwal-704847249" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/kipupwidanshika?t=yab8J2GRhw87QhZ4nNpJNQ&s=09" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/agg.anshika007?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Arshi Gupta',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/Asset_Mantle/IMG_3637_rhbwor.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/arshiguptaaa" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/Arshig0309" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/arshhhii?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Shradha Jain',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/shradha-jain-8251191b9/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/shradhajain16" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/shradha_jain__?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    // {
    //   name: 'Shivika Bathla',
    //   role: 'Coordinator',
    //   imageUrl: '',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/shivika-bathla-06542b285" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://twitter.com/arshig0309" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/shivika_bathla?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    {
      name: "Pari Gupta",
      role: "Coordinator",
      imageUrl:
        "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695670259/Pic_dydqgj.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkiden"
            href="www.linkedin.com/in/pari-gupta-05401b283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/PariGupta784429?t=eOzwwLXUZplJKdPoZv0yGw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon="fa-brands fa-x-twitter"
              style={{ verticalAlign: "middle" }}
            />
          </a>
          <a
            className="insta"
            href="https://instagram.com/pariig3?igshid=NzZlODBkYWE4Ng=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    // {
    //   name: "Palak",
    //   role: "Coordinator",
    //   imageUrl: "https://res.cloudinary.com/dalgvlhes/image/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/palak_zmhcyc.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkedin"
    //         href="https://www.linkedin.com/in/palak-167565266/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://x.com/Palak_2511?t=quwWi3bPJMC07gbzrCM7LA&s=09"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
    //       </a>
    //       <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    {
      name: "Tulip",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/tulip_swx7su.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="www.linkedin.com/in/tulip-gupta-292661328"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/tulipp_19?s=11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/_tulip.15_?igsh=MXBwejBnYTFpdThweQ%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Vani Tyagi",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742916432/Screenshot_2025-03-25_191201_nu1w2o.png",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/vani-tyagi-5a4440328/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/tyagi806_vani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/vanityagi.8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Akshita",
      role: "Coordinator",
      imageUrl:
      "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/akshita_oo3r39.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/akshita-tanwar-939a04321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Akshita47246470?t=3UA6XJpnFNsluSIf-S_-aQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/akshita.t9?igsh=MW1iMjY1djZnaTYxdA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Anupriya",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1742916431/20240918_233205_b4d9lm.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/anupriya-7a8584322"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/Anu_heree?t=HwgVbQrt3S54MVlXxnoCPw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/anu.heree?igsh=MTdvYmZocXp4aTVybQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Naincy Yadav",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/nancy_jvlhab.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/naincy-yadav-3a63a7263"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="twitter"
            href="https://x.com/@yd_naincy005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a className="insta" href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </TechP>
      ),
    },
    {
      name: "Lavanya Arora",
      role: "Coordinator",
      imageUrl: "https://res.cloudinary.com/dalgvlhes/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/ProfilePic_tlkcwj.jpg",
      techProfiles: (
        <TechP>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/lavanya-arora-757412320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a className="twitter" href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: "middle" }} />
          </a>
          <a
            className="insta"
            href="https://www.instagram.com/its_lavanya_749?igsh=MWdxNWg1YXE5c2Vjag=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </TechP>
      ),
    }
    // {
    //   name: 'Sanya Solanki',
    //   role: 'Coordinator',
    //   imageUrl: 'https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672367/Asset_Mantle/17001172023-p_y90pqf.jpg',
    //   techProfiles : (
    //     <TechP>
    //     <a className='linkiden' href="https://www.linkedin.com/in/sanya-solanki-b7594827a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //       <a className='twitter' href="https://x.com/solanki_sanya?s=21" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ verticalAlign: 'middle' }} /></a>
    //       <a className='insta' href="https://instagram.com/_sanya_solanki_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },

    // {
    //   name: "Anaya Jain",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/dlx9sj1pl/image/upload/ar_1:1,b_rgb:ffffff,bo_12px_solid_rgb:f2af13,c_fill,g_auto,r_max,w_1000/v1717859770/pic_fqkecj.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/anaya-jain-4a5715288/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://twitter.com/AnayaJa48981116"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://www.instagram.com/10.anayajain/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },
    // {
    //   name: "Vaishnavi ",
    //   role: "Coordinator",
    //   imageUrl:
    //     "https://res.cloudinary.com/dzwfmydmx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1695672368/Asset_Mantle/WhatsApp_Image_2023-09-25_at_13.34.49_ff4qef.jpg",
    //   techProfiles: (
    //     <TechP>
    //       <a
    //         className="linkiden"
    //         href="https://www.linkedin.com/in/vaishnavi-kataria-bb91b5288/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaLinkedin />
    //       </a>
    //       <a
    //         className="twitter"
    //         href="https://x.com/vaishnaviv69071"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FontAwesomeIcon
    //           icon="fa-brands fa-x-twitter"
    //           style={{ verticalAlign: "middle" }}
    //         />
    //       </a>
    //       <a
    //         className="insta"
    //         href="https://www.instagram.com/vaishnavikataria1510/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <FaInstagram />
    //       </a>
    //     </TechP>
    //   ),
    // },

  ];

  const location = useLocation();
  const teamNameQueryParam = new URLSearchParams(location.search).get("team");

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
        <TeamName>President</TeamName>
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
        <TeamName>Vice President</TeamName>
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
        <TeamName>Event Management Team</TeamName>
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
        <TeamName>Cores</TeamName>
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
        {/* Coordinator */}
        <TeamName>Coordinators</TeamName>
        <TeamListWrapper>
          {eventsTeamCoordinatorr.map((member, index) => (
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
        <TeamName>Graphics and Media Team</TeamName>
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
        <TeamName>Cores</TeamName>
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
        {/* Coordinator */}
        <TeamName>Coordinators</TeamName>
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
        <TeamName>Research and Content Team</TeamName>
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
        <TeamName>Cores</TeamName>
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
        {/* Coordinator */}
        <TeamName>Coordinators</TeamName>
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
        <TeamName>Outreach Team</TeamName>
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
        <TeamName>Cores</TeamName>
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
        {/* Coordinator */}
        <TeamName>Coordinators</TeamName>
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
        <TeamName>Technical Team</TeamName>

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
        <TeamName>Cores</TeamName>
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
        {/* Coordinator */}
        <TeamName>Coordinators</TeamName>
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
  );
};

export default TeamPage;
