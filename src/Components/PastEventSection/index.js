import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesLink,
  ServicesContent,
  Description
} from './PastEventElements';
const Services = () => {
  const events = [
    {
      title: 'Orientation and Treasure Hunt',
      link: 'https://www.instagram.com/reel/Cnrgq8Jha-p/',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png',
    },
    {
      title: 'Find Global Career opportunities on Web3 and Metaverse',
      link: 'https://www.instagram.com/reel/Coy0FTINtEt/',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png',
    },
    {
      title: 'Intro to Web3 and its Career Scope',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png',
    },
    {
      title: 'BFF Hackathon',
      link: 'https://www.instagram.com/reel/Cs3nO1yN3-6/',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png',
    },
    {
      title: 'FastN Session',
      link: 'https://www.instagram.com/p/CvZ9Ps1yCk_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png',
    },
    {
      title: 'Introduction to Crypto V/S Blockchain and Altcoins',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==https://www.instagram.com/p/Cv7hyhDscUx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png',
    },
    {
      title: 'Ideathon',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      discription: 'Hello I am Description',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png',
    },
  ];

  const itemsToShow = 5;
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const renderEvents = () => {
    const startIndex = currentSlide * itemsToShow;
    const endIndex = startIndex + itemsToShow;
    return events.slice(startIndex, endIndex).map((event, index) => (
      <ServicesCard key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // className={isHover ? 'hovered' : ''}
              isHover={isHover}
      >
        <ServicesIcon src={event.image} />
        <ServicesContent>
          <Description>
            {event.discription}
          </Description>
          <ServicesH2>
            <b>{event.title}</b>
          </ServicesH2>
          <ServicesLink href={event.link} target="_blank" rel="noopener noreferrer">
            Go to Instagram<FontAwesomeIcon icon={faArrowRight} />
          </ServicesLink>
        </ServicesContent>
      </ServicesCard>
    ));
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };


  return (
    <ServicesContainer id="services">
      <ServicesH1>Past Events</ServicesH1>
      <ServicesWrapper>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false} // Disable auto-play
          centerMode={true}
          centerSlidePercentage={33.33}
        >
          {renderEvents()}
        </Carousel>
        <div>
          {currentSlide > 0 && (
            <button onClick={handlePrev}>Previous</button>
          )}
          {currentSlide < Math.ceil(events.length / itemsToShow) - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;


