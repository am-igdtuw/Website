import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProbStatement from '../Components/PSPage/index';
import About from '../Components/About/about';
import Timeline from '../Components/Timeline/timeline';
import FAQHackday from '../Components/Faq Hackday';
import Banner from '../Components/Banner/index';
import Prizes from '../Components/Prizes/prize';
const ProbStatementPage = () => {
  return (
    <div>
        <Navbar/>
        <ProbStatement/>
        <About />
        <Timeline/>
        <FAQHackday/>
        <Banner/>
        <Prizes/>
        <Footer/>

    </div>
  )
}

export default ProbStatementPage
