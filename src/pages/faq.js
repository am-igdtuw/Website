import React from 'react'
import FaqSection from '../Components/FaqSection';
import Navbar from '../Components/Navbar';
import FollowSection from '../Components/FollowSection';
import Footer from '../Components/Footer';

const FaqPage = () => {
  return (
    <div>
        <Navbar/>
        <FaqSection/>
        <FollowSection/>
        <Footer/>
    </div>
  );
};

export default FaqPage;