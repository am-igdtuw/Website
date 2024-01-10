import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/Event Page/EventHeroSection';
//import EventInfoSection from '../Components/EventInfoSection';
import PastEventSection from '../Components/Event Page/PastEventSection';
//import FollowSection from '../Components/FollowSection';
import Footer from '../Components/Footer';
import ScrollToTopButton from '../Components/Scroller/Scroller'

const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection/>
        {/* <EventInfoSection/> */}
        <PastEventSection/>
        {/* <FollowSection/> */}
        <ScrollToTopButton />
        <Footer/>
    </div>
  );
};

export default EventPage;