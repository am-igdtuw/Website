import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FAQH from "../Components/HackDay/Faq Hackday/index";
import Navhack from "../Components/HackDay/Navhack";
import Sidehack from "../Components/HackDay/Sidehack";
import Description from "../Components/HackDay/Description";
import Timeline from "../Components/HackDay/Timeline";
// import SubmissionFormat from "../Components/HackDay/SubmissionFormat";
import Sponsors from "../Components/HackDay/Sponsors";
import "./hackday.css";

const ProbStatementPage = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 } // Adjust threshold if needed
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Navhack />
        <div className="main-content">
          {!isFooterVisible && (
            <Sidehack style={{ position: "fixed" }} />
          )}
          <div className="content" style={{ marginTop: "200px" }}>
            <div id="desc">
              <Description />
            </div>
            <div id="timeline">
              <Timeline />
            </div>
            <div id="sponsor">
              <Sponsors />
            </div>
            <div id="faq">
              <FAQH />
            </div>
            {/* <div id="sub">
              <SubmissionFormat />
            </div> */}
          </div>
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProbStatementPage;
