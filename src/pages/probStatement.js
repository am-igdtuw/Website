import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ProbStatement from '../Components/PSPage/index';
import About from '../Components/About/about';
import Banner from '../Components/Banner/index';
import Prize from '../Components/Prizes/prize';
import FAQH from '../Components/Faq Hackday/index';
const ProbStatementPage = () => {
  return (
    <div>
        <Navbar/>
        <ProbStatement/>
        <About/>
        <Banner/> 
        <Prize/>
        <FAQH/>
        <Footer/>
    </div>
  )
}

export default ProbStatementPage
