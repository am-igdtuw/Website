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
  AvatarTitle,
  AvatarChar,
  AvatarContent,
  AvatarHeading,
} from "./TestimonialCSS";

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
      we conducted out first fun event ‘Treasure Hunt’, with over fifteen teams participating following the orientation.💰💰

The zestful participants rushed about looking for clues🗝, and everyone enjoyed - we sure did!
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
      AssetMantle IGDTUW in collaboration with @ecell_igdtuw 📂bring to you an amazing session on “Intro To Web3 and Career Scope” with Sanket Agarwal.🤩🤩🤩

Currently working as a product manager at Quillaudits, Sanket has been working in the blockchain space for past 2 years. ✨✨

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

We dived into the world where tech meets enthusiasm: BFF Hackathon organised by Assetmantle IGDTUW and AUV-DTU. 👾

It was a wonderful experience for all the participants as well as the organising committee✨✨
Eagerly looking forward for more such events🤩
      </AvatarContent>

    </AvatarComponent>
  );
};

export default Testimonial;
