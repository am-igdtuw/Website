import React from 'react';
import EventCards from '../EventCards/EventCards.js';
import Icon1 from "../../../images/mobileapp.png";
import { InforContainer, InforWrapper, ServicesP } from './PastEventElement.js';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './event.css';

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
      
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffc107', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="JANUARY"
    iconStyle={{ background:"#ffc107", color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Orientation and Treasure Hunt</h3>
    <h4 className="vertical-timeline-element-subtitle">"Unlock the Frontend Frontier"</h4>
    <p>
    <img className="timeline-img" src='https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png'></img>
      {/* Creative Direction, User Experience, Visual Design, Project Management, Team Leading */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="FEBRUARY"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Find Global Career opp ortunities on Web3 and Metaverse</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png"></img>
      {/* Creative Direction, User Experience, Visual Design, SEO, Online Marketing */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="FEBRAURY"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Intro to Web3 and its Career Scope</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png"></img>
      {/* User Experience, Visual Design */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="APRIL"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">BFF Hackathon</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png"></img>
      {/* User Experience, Visual Design */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="AUGUST"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">FastN Session</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png"></img>
      {/* Strategy, Social Media */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="AUGUST"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Ideathon</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png"></img>
      {/* Creative Direction, Visual Design */}
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="OCTOBER"
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Introduction to Crypto V/S Blockchain and Altcoins</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png"></img>
      {/* Creative Direction, User Experience, Visual Design */}
    </p>
  </VerticalTimelineElement>
 
  <VerticalTimelineElement
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline>
          
          
          
          
          
          
          
          
          
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