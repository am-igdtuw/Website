import React from "react";
import "./Sponsors.css";

const sponsorsData = [
  {
    name: "Orflax",
    role: "Reimagine Track Partners",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/WrhtOFMbc5RvNZEzOL-mp.png",
  },
  {
    name: "Skillarena",
    role: "Talent Partners",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/S2EIOqkxR31V_xRdyKazz.jpeg",
  },
  {
    name: "Interview Buddy",
    role: "Interview Preparation Partners",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/WuQ8CX4xipP-6wrwYzTae.png",
  },
  {
    name: "HackQuest",
    role: "Platform Partners",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/MnHPfLWJ0ZD2IPlH2Gj04.jpg",
  },
  {
    name: "Squareboat",
    role: "In-kind Sponsors",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/1-sYcHUpWh36IjlAXz3UK.jpeg",
  },
];

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="sponsors-title">
        <span></span>
        Sponsors
      </div>
      
      <div className="sponsors-grid">
        {sponsorsData.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <div className="sponsor-image">
              <img src={sponsor.image} alt={sponsor.name} />
            </div>
            <div className="sponsor-info">
              <div className="sponsor-name">{sponsor.name}</div>
              <div className="sponsor-role">{sponsor.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;