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
const ProbStatementPage = () => {
  return (
    <div>
      <Navbar />
      {/* <ProbStatement /> */}
      {/* <HomeSidebar /> */}
      <About />
      <Banner />
      <Prize />
      <FAQH />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default ProbStatementPage;
