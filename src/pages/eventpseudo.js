import React from 'react'
import Navbar from '../Components/Navbar';
import EventHeroSection from '../Components/Event Page/EventHeroSection';
import Footer from '../Components/Footer';
import ScrollToTopButton from '../Components/Scroller/Scroller'
import PastEventSectionPseudo from '../Components/EventPagePseudo/PastEventSectionPseudo';

const EventPagePseudo = () => {
  return (
    <div>
        <Navbar/>
        <EventHeroSection />
        <PastEventSectionPseudo />
        <ScrollToTopButton />
        <Footer/>
    </div>
  );
};

export default EventPagePseudo;