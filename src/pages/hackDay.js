import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Prize from "../Components/HackDay/Prizes/prize";
import FAQH from "../Components/HackDay/Faq Hackday/index";
import Sidebar from "../Components/HackDay/Sidebar";
import Navhack from "../Components/HackDay/Navhack";
import Sidehack from "../Components/HackDay/Sidehack";
import './hackday.css';
import SubmissionFormat from "../Components/HackDay/SubmissionFormat";
import Sponsors from "../Components/HackDay/Sponsors";
import { positions } from "@mui/system";

const ProbStatementPage = () => {
  return (
    <div>
    <Navbar/>
    <div className="app-container">
      <Navhack />
      <div className="main-content">
      
        <Sidehack style={{position:'fixed'}} />
        <div className="content" style={{marginTop:'200px'}}>
          {/* <ProbStatement /> */}
          {/* <HomeSidebar /> */}
          {/* <About /> */}
          {/* <Banner />
          <Prize /> */}
          <Sponsors />
          {/* <Prize /> */}
          <FAQH />
          <SubmissionFormat/>
        </div>
      </div>
      <Sidebar />
      <Footer />
    </div>
    </div>
  );
};

export default ProbStatementPage;
