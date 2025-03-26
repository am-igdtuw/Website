import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Prize from "../Components/HackDay/Prizes/prize";
import FAQH from "../Components/HackDay/Faq Hackday/index";
// import Sidebar from "../Components/HackDay/Sidebar";
import Navhack from "../Components/HackDay/Navhack";
import Sidehack from "../Components/HackDay/Sidehack";
import Description from "../Components/HackDay/Description";
import Timeline from "../Components/HackDay/Timeline";
import "./hackday.css";
import SubmissionFormat from "../Components/HackDay/SubmissionFormat";
import Sponsors from "../Components/HackDay/Sponsors";
import { positions } from "@mui/system";

const ProbStatementPage = () => {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Navhack />
        <div className="main-content">
          <Sidehack style={{ position: "fixed" }} />
          <div className="content" style={{ marginTop: "75px" }}>
            {/* <ProbStatement /> */}
            {/* <HomeSidebar /> */}
            {/* <About /> */}
            {/* <Banner />
          <Prize /> */}

            <div id="desc">
              <Description />
            </div>
            <div id="timeline">
              <Timeline />
            </div>
            <div id="sponsor">
              <Sponsors />
            </div>
            {/* <Prize /> */}
            <div id="faq">
              <FAQH />
            </div>
            <div id="sub">
              <SubmissionFormat />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProbStatementPage;
