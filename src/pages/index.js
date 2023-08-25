//import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
// import { homeObjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
// import FollowSection from '../Components/FollowSection';
//import PopUp from "../Components/PopUp/Modal";
// import Team from '../Components/Team'

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  // };
  // const [timedPopup, setTimedPopup] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   } , 1000);
  // } , []);


  return (
    <>
      {/* <Navbar toggle={toggle}/>  */}

      {/* <PopUp trigger={timedPopup} setTrigger = {setTimedPopup}>
        <h2> <strong> HOLA! UPCOMING EVENT! </strong></h2>
        <h3> BFF HACKATHON </h3>
        <a href="/event"> VIEW HERE!</a>
      </PopUp>  */}
      <Navbar />
        <HeroSection  />
        <InfoSection />
        {/* <FollowSection /> */}
        <Services />
        
        <Footer />


    </>
  )
}

export default Home
