import React from 'react';
import EventCards from '../EventCards/EventCards.js';
import Icon1 from "../../../images/mobileapp.png";
import { InforContainer, InforWrapper, ServicesP,Date } from './PastEventElement.js';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './event.css';

// const events = [
//     {
//         index:1,
//         heading: 'Orientation and Treasure Hunt',
//         subheading: "Unlock the Frontend Frontier",
//         icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png',

//       },
//     {
//         index:2,
//         heading: 'Find Global Career opp ortunities on Web3 and Metaverse',
//         subheading: "Description for another event goes here.",
//         icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png',

//       },
//     {
//         index:3,
//         heading: 'Intro to Web3 and its Career Scope',
//         subheading: "Description for yet another event.",
//         icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png',

//       },
//       {
//         index:4,
//         heading: 'BFF Hackathon',
//         subheading: "Description for another event goes here.",
//         icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png',

//       },
//     {
//         index:5,
//         heading: 'FastN Session',
//         subheading: "Description for yet another event.",
//         icon:        'https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png',

//       },
//       {
//         index:6,
//         heading: 'Introduction to Crypto V/S Blockchain and Altcoins',
//         subheading: "Description for another event goes here.",
//         icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png',

//       },
//     {
//         index:7,
//         heading: 'Ideathon',
//         subheading: "Description for yet another event.",
//         icon:         'https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png',

//       }
//   ];

const PastEventSectionPseudo = () => {
  return (
      <>
<Date></Date>   
<VerticalTimeline>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   #e09f3e' }}
    date="06 OCTOBER 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <a href="https://www.instagram.com/p/Cx0QMPrS13G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"  className="card-link">

    <h3 className="vertical-timeline-element-title">Introduction to Crypto V/S Blockchain and Altcoins</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
    <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698598489/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_317_nle6lt.png" alt="Event Image" />
    <div className="event-description-box">
    Epic Collaboration Between DApps.co and AssetMantle IGDTUW for an Unforgettable Online Webinar and Quiz: 'Introduction to Crypto v/s Blockchain and Altcoins.' 
    </div>
  </div>
  </a>

  </VerticalTimelineElement>


  <VerticalTimelineElement

    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    date="19 AUGUST 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<SchoolIcon />}
  >  <a href="https://www.instagram.com/p/CwGGYVuyqHk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"  className="card-link">

    <h3 className="vertical-timeline-element-title">Web3 Cohort & Ideathon</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
      <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698597655/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_316_ilf1ht.png"></img>
      <div className="event-description-box">
      AssetMerkle IGDTUW's Web3 mentorship cohort, in collaboration with Web3Samaj, spans Javascript, ReactJs, and NodeJs. Post a brief break, we're set for Web3 sessions. Concurrently, mentees formed groups for an Ideathon, developing dApps with Web3 mentorship passionately.    </div>
   </div>
    </a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   #e09f3e' }}
    date="06 AUGUST 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">FastN Session</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
      <img className="timeline-img" src="https://res.cloudinary.com/djv5kc7as/image/upload/v1698596897/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_315_hcwl6o.png"></img>
      <div className="event-description-box">
      Assetmantle IGDTUW collaborated with FastN and conducted a Roadshow on 6th August, Sunday from 11:30-6pm The roadshow consisted of enhancing the coding skills using fastN stack to build full - stack web apps. It was a hands-on session and a quiz was conducted in which top 3 winners were awarded with awesome prizes.
    </div>
    </div>

      {/* Strategy, Social Media */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    date="01-02 APRIL 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">BFF Hackathon</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
      <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802646/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_303_cpvgip.png"></img>
      <div className="event-description-box">
      Our collaboration with DTU AUV brought you a 24 hour offline hackathon in DTU premises on 1st and 2 nd April 2023.Teams joined us to build solution to the problem statements and have it reviewed by seasoned mentors who provided them with proper guidance.  
    </div>
    </div>

      {/* User Experience, Visual Design */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   #e09f3e' }}
    date="13 FEBRUARY 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Intro to Web3 and its Career Scope</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
        <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_302_pgrxxz.png"></img>
        <div className="event-description-box">
        An introductory session with Sanket Aggarwal on Web3 and its differences from Web2. 
        Talks about blockchain technology and its differences from conventional centralized databases.
        The event revolved around the subject web3 and the career scope in it. Mr. Sanket Aggarwal, our esteemed speaker, talked about Web 3 and how it is being implemented, along with its differences from the current web iteration, Web2.
    </div>
    </div>

      {/* User Experience, Visual Design */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}    
    date="01 FEBRUARY 2023"
    dateClassName='month-date'
    iconStyle={{ background: '#e09f3e', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Find Global Career opp ortunities on Web3 and Metaverse</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
      <img className="timeline-img" src ="https://res.cloudinary.com/djv5kc7as/image/upload/v1688802648/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_301_oeeode.png"></img>
      <div className="event-description-box">
      An expedition into the career scope of Web3 and Metaverse with Vas Modinos, the founder of Blockready, a Dubai based blockchain and web3 education platform With over sixty attendees both from BTech and BBA courses in attendance, Mr. Vas Modinos helmed the students through the world of Web3 - he elucidated on the blockchain technology and how it is being deployed for the development of Web3. 
    </div>
    </div>

      {/* Creative Direction, User Experience, Visual Design, SEO, Online Marketing */}
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: '#e09f3e', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #e09f3e' }}
    // <Date>
    date="19 JANUARY 2023"
    dateClassName='month-date'
    // </Date>

    iconStyle={{ background:"#e09f3e", color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Orientation and Treasure Hunt</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">"Unlock the Frontend Frontier"</h4> */}
    <div style={{ display: 'flex', alignItems: 'center' }} className='innerDiv'>
      <img className="timeline-img" src='https://res.cloudinary.com/djv5kc7as/image/upload/v1688802647/Asset%20Mantle%20-%20Team%202023/Events/Screenshot_300_mgqx8x.png'></img>
      <div className="event-description-box">
    AssetMerkle IGDTUW hosted a lively orientation with team intros and a fun treasure hunt on January 19, 2023. Focused on Blockchain, the chapter aims to support and engage students in unique events, like this thrilling treasure hunt.

    </div>
    </div>

      {/* Creative Direction, User Experience, Visual Design, Project Management, Team Leading */}
    
  </VerticalTimelineElement>
  
  
  
  
 
 
  
 
  {/* <VerticalTimelineElement
    iconStyle={{ background: '#ffc107', color: '#fff' }}
    // icon={<StarIcon />}
  /> */}
</VerticalTimeline>
          
          
          
          
          
          
          
          
          
          {/* <InforContainer id="aboutSection">
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
            </InforContainer>        */}
      </>
  );
}

export default PastEventSectionPseudo;