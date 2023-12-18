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
      // discription: '"Society and team leaders introduction followed by a fun treasure hunt for all the attendees.The AssetMantle Student Chapter of IGDTUW held its official orientation on January 19th 2023.The student chapter works towards the Blockchain domain and is eager to help students clear their doubts regarding the domain.With a brief introduction of the AssetMantle company and our President, Vice Presidents and the teams, the AssetMantle IGDTUW community went live and we shared the links to our social media handles with everyone.This was followed by a treasure hunt where the participants had to look for their clues based on the riddle-clues handed to them at the beginning of the game. The difficulty level of the clues increased as one proceeded to the next rounds. By clues, it was implied, searching for the given location and then moving on to the next. It was a fun-filled event for the participants, and attracted attention from everyone.',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png',
    },
    {
      title: 'Find Global Career opportunities on Web3 and Metaverse',
      link: 'https://www.instagram.com/reel/Coy0FTINtEt/',
      //description: 'An expedition into the career scope of Web3 and Metaverse with Vas Modinos, the founder of Blockready, a Dubai based blockchain and web3 education platform With over sixty attendees both from BTech and BBA courses in attendance, Mr. Vas Modinos helmed the students through the world of Web3 - he elucidated on the blockchain technology and how it is being deployed for the development of Web3. He further explained about the virtual world that we have adapted to and how the Metaverse is a crucial part of this virtual world that is about to become our reality. The session was interactive and the students got an opportunity to clear up their doubts regarding the Metaverse and Web3. To stimulate the attendees, Vas asked the students to brainstorm about blockchain and Web3 and how they see it integrating with their field of interest. A short discussion was held once the talk was done - questions were asked: “Explain Web3 in 3 words, how can we implement blockchain in our field - ” and the most interesting answers won a 3 month subscription of Blockready - a blockchain and web3 educating platform.',

      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png',
    },
    {
      title: 'Intro to Web3 and its Career Scope',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      //discription: '“An introductory session with Sanket Aggarwal on Web3 and its differences from Web2. Talks about blockchain technology and its differences from conventional centralized databases.The event revolved around the subject web3 and the career scope in it. Mr. Sanket Aggarwal, our esteemed speaker, talked about Web 3 and how it is being implemented, along with its differences from the current web iteration, Web2. He also talked about blockchain technology and how it’s different from traditional database and information sharing. He underlined the pros of blockchain over the centralized internet infrastructure in current use - briefly covering the different blockchain companies that are in work now, the crypto and digital currencies that they have released into the market, answering all queries that he got along the way.',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png',
    },
    {
      title: 'BFF Hackathon',
      link: 'https://www.instagram.com/reel/Cs3nO1yN3-6/',
      //discription: 'Our latest collaboration with DTU AUV brings to you a 24 hour offline hackathon in DTU premises! Mark your calendar on 1st and 2 nd April 2023 and join us with your team to build your solution to the problem statements and have it reviewed by seasoned mentors who will provide you with proper guidance. With sessions and workshops with industry experts on 31st March 2023 get a chance to connect with other aspiring developers and clear any query that you may have regarding life as a developer, presenter, or life in general. ',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png',
    },
    {
      title: 'FastN Session',
      link: 'https://www.instagram.com/p/CvZ9Ps1yCk_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      //discription: 'Assetmantle IGDTUW collaborated with FastN and conducted a Roadshow on 6th August, Sunday from 11:30-6pm The roadshow consisted of enhancing the coding skills using fastN stack to build full - stack web apps. It was a hands-on session and a quiz was conducted in which top 3 winners were awarded with awesome prizes.',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png',
    },
    {
      title: 'Introduction to Crypto V/S Blockchain and Altcoins',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==https://www.instagram.com/p/Cv7hyhDscUx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      //discription: '6th October 7pm',
      image:
        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png',
    },
    {
      title: 'Ideathon',
      link: 'https://www.instagram.com/p/CoeHzBkSLWY/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      //discription: 'As a part of the cohort, the mentees have divided themselves among groups of three-four and have worked on the idea of building their own dApp. The ideathon was a mentoring session for them, with esteemed mentors from the Web3 ecosystem joining us to review the projects and give detailed feedback. The ideathon saw a massive interactive crowd from the cohort mentees and left everyone on a positive note.',
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
          autoPlay={true}
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


