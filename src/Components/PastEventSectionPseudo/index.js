import React from 'react';
import EventCards from '../EventCards/EventCards.js';
import Icon1 from "../../images/mobileapp.png";
import { InforContainer, InforWrapper, ServicesP } from './PastEventElement.js';

const events = [
    {
        index:1,
        heading: 'Orientation and Treasure Hunt',
        subheading: "Unlock the Frontend Frontier",
        icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png',

      },
    {
        index:2,
        heading: 'Find Global Career opp ortunities on Web3 and Metaverse',
        subheading: "Description for another event goes here.",
        icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png',

      },
    {
        index:3,
        heading: 'Intro to Web3 and its Career Scope',
        subheading: "Description for yet another event.",
        icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png',

      },
      {
        index:4,
        heading: 'BFF Hackathon',
        subheading: "Description for another event goes here.",
        icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png',

      },
    {
        index:5,
        heading: 'FastN Session',
        subheading: "Description for yet another event.",
        icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png',

      },
      {
        index:6,
        heading: 'Introduction to Crypto V/S Blockchain and Altcoins',
        subheading: "Description for another event goes here.",
        icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png',

      },
    {
        index:7,
        heading: 'Ideathon',
        subheading: "Description for yet another event.",
        icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png',

      }
  ];

const PastEventSectionPseudo = () => {
  return (
      <>
          <InforContainer id="aboutSection">
              <InforWrapper>
                  <ServicesP>
                  {events.map((event) => (
                  <EventCards
                    key={event.index}
                    eventName={event.heading}
                    eventDescription={event.subheading}
                    icon={event.icon}
                  />
                  ))}
                      
                  </ServicesP>
              </InforWrapper>
            </InforContainer>       
      </>
  );
}

export default PastEventSectionPseudo;