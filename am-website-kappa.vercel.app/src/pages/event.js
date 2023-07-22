import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/EventHeroSection';
import EventInfoSection from '../Components/EventInfoSection';
import PastEventSection from '../Components/PastEventSection';
import FollowSection from '../Components/FollowSection';

const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection/>
        {/* <EventInfoSection/> */}
        <PastEventSection/>
        <FollowSection/>
    </div>
  );
};

export default EventPage;