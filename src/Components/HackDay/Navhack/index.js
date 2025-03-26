import React, { useState, useEffect } from "react";
import "./Navhack.css";

const Navhack = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Initially visible
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false); // Hide navbar on scroll down & up
    }
    setLastScrollY(window.scrollY);
  };

  // Detect active section
  const detectActiveSection = () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", detectActiveSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", detectActiveSection);
    };
  }, []);

  return (
    <>
      {/* Button to show navbar when hidden */}
      {!isNavbarVisible && (
        <button
          className="show-navbar-btn"
          onClick={() => setIsNavbarVisible(true)}
        >
          ☰
        </button>
      )}

      {/* Navbar */}
      {isNavbarVisible && (
        <div className="nav-container">
          <h1 className="title">HACKDAY</h1>
          <nav className="navbar">
            <a
              href="#desc"
              className={activeSection === "desc" ? "active" : ""}
            >
              Description
            </a>
            <a
              href="#timeline"
              className={activeSection === "timeline" ? "active" : ""}
            >
              Timeline
            </a>
            <a
              href="#sponsor"
              className={activeSection === "sponsor" ? "active" : ""}
            >
              Sponsors
            </a>
            <a href="#faq" className={activeSection === "faq" ? "active" : ""}>
              FAQs
            </a>
            <a href="#sub" className={activeSection === "sub" ? "active" : ""}>
              Submission Format
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navhack;
