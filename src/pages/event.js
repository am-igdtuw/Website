import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/EventHeroSection';
import EventInfoSection from '../Components/EventInfoSection';

const EventPage = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection/>
        <EventInfoSection/>
    </div>
  );
};

export default EventPage;