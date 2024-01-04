import React from 'react';
import { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import HeroSection from '../Components/Herosection';
import InfoSection from '../Components/InfoSection';
//import { homeObjOne } from '../Components/InfoSection/Data';
import Navbar from '../Components/Navbar';
//import Services from '../Components/Services';
import Testimonial from '../Components/Testimonial';
// import FollowSection from '../Components/FollowSection';
import PopUp from "../Components/PopUp/Modal";
// import Team from '../Components/Team'
import ScrollToTopButton from '../Components/Scroller/Scroller'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  };
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    } , 1000);
  } , []);


  return (
    <>
      { <Navbar toggle={toggle}/>  }

      { <PopUp trigger={timedPopup} setTrigger = {setTimedPopup}>
        {/* <h2> <strong> HOLA! UPCOMING EVENT! </strong></h2>
        <h3> HACK DAY </h3> */}
      </PopUp>  }
      <Navbar />
        <HeroSection  />
        <InfoSection />
        {/* <FollowSection /> */}
        {/* <Services /> */}
        <Testimonial/>
        <ScrollToTopButton />
        <Footer />


    </>
  )
}

export default Home
