import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";

import {
  Wrapper,
  HomeContainer,
  Heading,
  ContainerSlider,
  AvatarComponent,
  AvatarContent,
  AvatarHeading,
} from "./TestimonialCSS";
import { yellow } from "@mui/material/colors";

const Testimonial = () => {
  return (

    <Wrapper>
      <HomeContainer>
        <ContainerSlider>
          <Heading>Our Past Events</Heading>
          <Slider
            autoplay={true}
            autoplaySpeed={3000}
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <Card img="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png" />
            <Card2 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png" />
            <Card3 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png" />
            <Card4 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png" />
            <Card5 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1698598435/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_318_sjecxi.png" />
            <Card6 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png" />
            <Card7 img="https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png" />
            <Card8 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/hack-hive_b3tszn.png"/>
            <Card9 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/AM-GDSC_o0c14y.png"/>
            <Card10 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/chainpecharcha_gm0ysz.png"/>
            <Card11 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/blockchain_o4u0ok.png"/>
            <Card12 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/build-with-teszo_fj66i0.png"/>
            <Card13 img="https://res.cloudinary.com/duptmanu9/image/upload/v1707140357/geetika-di_ktiuzk.png"/>
      
          </Slider>
        </ContainerSlider>
      </HomeContainer>
    </Wrapper>

  );
};

const Card = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Orientation and Treasure Hunt</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        We conducted out first fun event ‘Treasure Hunt’, with over fifteen teams participating
        following the orientation💰💰.
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* The zestful participants rushed about looking for clues🗝,
        and everyone enjoyed - we sure did! */}
      </AvatarContent>


    </AvatarComponent>
  );
};
const Card2 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Intro to Web3 and its Career Scope</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        AssetMerkle IGDTUW in collaboration with @ecell_igdtuw 📂bring to you an amazing session
        on “Intro To Web3 and Career Scope” with Sanket Agarwal.🤩🤩
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card3 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>BFF Hackathon</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        Unleashing the digital creativity at the ultimate hackathon showdown💥🚀
        We dived into the world where tech meets enthusiasm: BFF Hackathon organised by
        Assetmerkle IGDTUW and AUV-DTU👾
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* It was a wonderful experience for all the participants as well as the organising committee✨✨
        Eagerly looking forward for more such events🤩 */}
      </AvatarContent>

    </AvatarComponent>
  );
};
const Card4 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>FastN Session</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        Assetmerkle IGDTUW collaborated with FastN and conducted a Roadshow.
        The roadshow consisted of enhancing the coding skills using fastN stack to build
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* full - stack web apps.
        It was a hands-on session and a quiz was conducted in which top 3 winners were awarded with awesome prizes. */}
      </AvatarContent>
    </AvatarComponent>
  );
};
const Card5 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Web3 Cohort</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        AssetMerkle IGDTUW has an ongoing mentorship cohort on web3 - we had started from scratch
        - right from the beginning of with Javascript, frontend development with ReactJs
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* followed by backend */}
        {/* development using NodeJs, all with skilled mentors and teachers, joining us from our partner,
        Web3Samaj. We are ready to return after a brief mid-term break and enter the much-awaited Web3
        sessions. */}
      </AvatarContent>
    </AvatarComponent>
  );
};
const Card6 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Ideathon</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        As a part of the cohort, the mentees have divided themselves among groups of three-four and have
        worked on the idea of building their own dApp. The ideathon was a
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* esteemed mentors from the Web3 ecosystem joining us to review the projects and give detailed feedback.
        The ideathon saw a massive interactive crowd from the cohort mentees and left everyone on a positive
        note. */}

      </AvatarContent>
    </AvatarComponent >
  );
};


const Card7 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Introduction to Crypto V/S Blockchain and Altcoins</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
        The event exploring the intricate relationship between crypto, blockchain technology,
        and altcoins was a remarkable success, shedding light on the dynamic and evolving
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Altcoins, a diverse set of digital assets, were also discussed as innovative alternatives, showcasing the thriving creativity within the crypto space. */}

      </AvatarContent>
    </AvatarComponent>
  );
};
const Card8 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>HackHive, a 36-hour hackathon adventure</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
      HackHive, a 36-hour in-person hackathon in Indore by Techhunterssss, supported by MLH, was a tech extravaganza from October 27th to 29th. Tech enthusiasts made their bytes count in this inclusive event. 
       
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card9 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Emerging Technologies Workshop</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
  'Emerging Technologies: Pioneering the Digital Frontier' was a two-day tech extravaganza on October 26 & 27, 2023. Participants delved into the latest in web3, cloud-native architectures, blockchain, AI, and more, engaging with experts and witnessing live demos.   
        
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card10 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Chain Pe Charcha</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
  AssetMerkle took a dive into the world of Web3 technologies with an exciting Twitter Spaces podcast. We unraveled the secrets of the decentralized web, featuring insights and discussions about the future of technology and cyberspace. If you were passionate about sharing your insights, we hope you joined us as a speaker.    
        
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card11 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Deepdive into Blockchain & Crypto</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
  AssetMerkle's insightful session, "Deepdive into Blockchain & Crypto," with Grahil Khandelwal, Community Lead at Deepverse DAO, explored Blockchain intricacies, Crypto insights, and decentralized ecosystem futures.     
        
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card12 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Build with Tezos</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
  AssetMerkle and The Product House hosted 'Build with Tezos,' a hands-on workshop on Tezos Blockchain at IGDTUW.      
        
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
const Card13 = ({ img }) => {
  return (
    <AvatarComponent>
      <AvatarHeading>Careers in Web3</AvatarHeading>

      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 240,
          height: 240,
          border: "1px solid lightgray",
          padding: 7,
        }}
      />

      <AvatarContent>
  Dived into "Careers in Web3" with Geetika Gupta, President of Assetmerkle IGDTUW, for insights into opportunities in the tech world. Participants learned to create their first crypto wallet.    
        
        <a href="/event" style={{ color: yellow[500] }}> Read More...</a>
        {/* Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨ */}

      </AvatarContent>


    </AvatarComponent>
  );
};
export default Testimonial;
