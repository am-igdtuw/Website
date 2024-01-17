import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProbStatement from "../Components/HackDay/PSPage/index";
import About from "../Components/HackDay/About/about";
import Banner from "../Components/HackDay/Banner/index";
import Prize from "../Components/HackDay/Prizes/prize";
import FAQH from "../Components/HackDay/Faq Hackday/index";
const ProbStatementPage = () => {
  return (
    <div>
      <Navbar />
      <ProbStatement />
      <About />
      <Banner />
      <Prize />
      <FAQH />
      <Footer />
    </div>
  );
};

export default ProbStatementPage;
