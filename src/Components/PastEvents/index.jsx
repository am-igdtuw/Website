
// import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import styled from 'styled-components';

// const Section = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

// const SwiperContainer = styled.div`
//   width: 100%;
//   padding-top: 50px;
//   padding-bottom: 50px;
// `;

// const SwiperSlide = styled.div`
//   background-position: center;
//   background-size: cover;
//   width: 300px;
//   height: 300px;
// `;

// const PastEventsBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   background-color: #f1f1f1;
//   border-radius: 10px;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
// `;

// const PastEventsImage = styled.img`
//   width: 100%;
//   max-height: 200px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const PastEventsContent = styled.div`
//   margin-top: 10px;
//   text-align: center;
// `;

// const PastEventsTitle = styled.h2`
//   font-size: 18px;
//   font-weight: bold;
// `;

// const SwiperPagination = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 50%;
//   transform: translateX(-50%);
// `;

// const SwiperPaginationBullet = styled.div`
//   width: 12px;
//   height: 12px;
//   background-color: #888;
//   border-radius: 50%;
//   display: inline-block;
//   margin: 0 5px;
//   opacity: 0.8;
//   transition: opacity 0.2s;

//   &.swiper-pagination-bullet-active {
//     opacity: 1;
//     background-color: #555;
//   }
// `;

// const EventsSlider = () => {
//   useEffect(() => {
//     var swiper = new Swiper('.swiper-container', {
//       pagination: '.swiper-pagination',
//       effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//       coverflow: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//       },
//     });
//   }, []);

//   return (
//     <Section>
//       <SwiperContainer className="swiper-container">
//         <div className="swiper-wrapper">
//           <SwiperSlide>
//             <PastEventsBox>
//               <PastEventsImage src={require('./treasure_hunt_and_orientation.jpeg').default} alt="Orientation and Treasure Hunt" className="treasure-hunt-img" />
//               <PastEventsContent>
//                 <PastEventsTitle>
//                   Orientation and Treasure Hunt
//                 </PastEventsTitle>
//               </PastEventsContent>
//             </PastEventsBox>
//           </SwiperSlide>
//           <SwiperSlide>
//             <PastEventsBox>
//               <PastEventsImage src={require('./web3_and_metaverse.jpeg').default} alt="Find Global Career opportunities on Web3 and Metaverse" className="treasure-hunt-img" />
//               <PastEventsContent>
//                 <PastEventsTitle>
//                   Find Global Career opportunities on Web3 and Metaverse
//                 </PastEventsTitle>
//               </PastEventsContent>
//             </PastEventsBox>
//           </SwiperSlide>
//           <SwiperSlide>
//             <PastEventsBox>
//               <PastEventsImage src={require('./web3_and_career_scope.jpeg').default} alt="Intro to Web3 and its Career Scope" className="treasure-hunt-img" />
//               <PastEventsContent>
//                 <PastEventsTitle>
//                   Intro to Web3 and its Career Scope
//                 </PastEventsTitle>
//               </PastEventsContent>
//             </PastEventsBox>
//           </SwiperSlide>
//           <SwiperSlide>
//             <PastEventsBox>
//               <PastEventsImage src={require('./bff_hackathon.jpeg').default} alt="BFF Hackathon" className="treasure-hunt-img" />
//               <PastEventsContent>
//                 <PastEventsTitle>
//                   BFF Hackathon
//                 </PastEventsTitle>
//               </PastEventsContent>
//             </PastEventsBox>
//           </SwiperSlide>
//         </div>
//         <SwiperPagination className="swiper-pagination">
//           <SwiperPaginationBullet className="swiper-pagination-bullet"></SwiperPaginationBullet>
//           <SwiperPaginationBullet className="swiper-pagination-bullet"></SwiperPaginationBullet>
//           <SwiperPaginationBullet className="swiper-pagination-bullet"></SwiperPaginationBullet>
//           <SwiperPaginationBullet className="swiper-pagination-bullet"></SwiperPaginationBullet>
//         </SwiperPagination>
//       </SwiperContainer>
//     </Section>
//   );
// }

// export default EventsSlider;


// // import React from 'react';
// // import Swiper from 'swiper';
// // import 'swiper/swiper-bundle.min.css';
// // import {
// //   TechContainer,
// //   TechH1,
// //   TechWrapper,
// //   TechCard,
// //   TechIcon,
// //   TechH2,
// //   TechP,
// //   GlobalStyles,
// // } from './element';

// // const EventsSlider = () => {
// //   React.useEffect(() => {
// //     var swiper = new Swiper('.swiper-container', {
// //       pagination: '.swiper-pagination',
// //       effect: 'coverflow',
// //       grabCursor: true,
// //       centeredSlides: true,
// //       slidesPerView: 'auto',
// //       coverflow: {
// //         rotate: 50,
// //         stretch: 0,
// //         depth: 100,
// //         modifier: 1,
// //         slideShadows: true
// //       },
// //       pagination: {
// //         el: '.swiper-pagination',
// //       }
// //     });
// //   }, []);

// //   return (
// //     <section>
// //       <div className="swiper-container">
// //         <div className="swiper-wrapper">
// //           <div className="swiper-slide" >
// //             <div className="PastEventsBox">
// //               <img src={require('./treasure_hunt_and_orientation.jpeg').default} alt="Orientation and Treasure Hunt" className="treasure-hunt-img" />
// //               <div className="content">
// //                 <h2>
// //                   Orientation and Treasure Hunt
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="swiper-slide" >
// //             <div className="PastEventsBox">
// //               <img src={require('./web3_and_metaverse.jpeg').default} alt="Find Global Career opportunities on Web3 and Metaverse" className="treasure-hunt-img" />
// //               <div className="content">
// //                 <h2>
// //                   Find Global Career opportunities on Web3 and Metaverse
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="swiper-slide" >
// //             <div className="PastEventsBox">
// //               <img src={require('./web3_and_career_scope.jpeg').default} alt="Intro to Web3 and its Career Scope" className="treasure-hunt-img" />
// //               <div className="content">
// //                 <h2>
// //                   Intro to Web3 and its Career Scope
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="swiper-slide" >
// //             <div className="PastEventsBox">
// //               <img src={require('./bff_hackathon.jpeg').default} alt="BFF Hackathon" className="treasure-hunt-img" />
// //               <div className="content">
// //                 <h2>
// //                   BFF Hackathon
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="swiper-pagination"></div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default EventsSlider;
