import React from 'react'
import FaqSection from '../Components/FaqSection';
import Navbar from '../Components/Navbar';
import PastEventsection from '../Components/PastEventsection';


const FaqPage = () => {
  return (
    <div>
        <Navbar/>
        <FaqSection/>
        <PastEventsection/>
    </div>
  );
};

export default FaqPage;