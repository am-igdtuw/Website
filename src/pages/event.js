import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/EventHeroSection';
import EventInfoSection from '../Components/EventInfoSection';
import PastEventSection from '../Components/PastEventSection'

const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection/>
        <EventInfoSection/>
        <PastEventSection/>
    </div>
  );
};

export default EventPage;