import React from 'react';
import Navbar from '../Components/Navbar';
import EventTeam from '../Components/EventsTeam';
import FollowSection from '../Components/FollowSection';

const Event = () => {
  return (
    <div>
        <Navbar/>
        <EventTeam/>
        <FollowSection />
    </div>
  )
}

export default Event;