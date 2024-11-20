import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProbStatement from "../Components/HackDay/PSPage/index";
import About from "../Components/HackDay/About/about";
import Banner from "../Components/HackDay/Banner/index";
import Prize from "../Components/HackDay/Prizes/prize";
import FAQH from "../Components/HackDay/Faq Hackday/index";
import HomeSidebar from "../Components/HomePage/homepage-sidebar/Homesidebar";
import Sidebar from "../Components/HackDay/Sidebar";
import Navhack from "../Components/HackDay/Navhack";
import Sidehack from "../Components/HackDay/Sidehack";
import './hackday.css';
import SubmissionFormat from "../Components/HackDay/SubmissionFormat";
import Sponsors from "../Components/HackDay/Sponsors";

const ProbStatementPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Navhack />
      <div className="main-content">
        <Sidehack />
        <div className="content">
          {/* <ProbStatement /> */}
          {/* <HomeSidebar /> */}
          <About />
          <Banner />
          <Prize />
          <Sponsors />
          <FAQH />
          <SubmissionFormat/>
        </div>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
};

export default ProbStatementPage;
