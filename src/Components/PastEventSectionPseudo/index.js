import React from 'react';
import EventCards from '../EventCards/EventCards.js';
import Icon1 from "../../images/mobileapp.png";
import { InforContainer, InforWrapper, ServicesP } from './PastEventElement.js';

const events = [
    {
        index:1,
        heading: "Frontend Development",
        subheading: "Unlock the Frontend Frontier",
        icon: Icon1
      },
    {
        index:2,
        heading: "Another Event Heading",
        subheading: "Description for another event goes here.",
        icon: Icon1
      },
    {
        index:3,
        heading: "Yet Another Event",
        subheading: "Description for yet another event.",
        icon: Icon1
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