import React from "react";
import "./Sponsors.css";

const sponsorsData = [
  {
    name: "Bitgo",
    image:
      "https://res.cloudinary.com/duptmanu9/image/upload/v1743010841/bitgo_do4pik.png",
  },
  {
    name: "Aptos",
    image:
      "https://res.cloudinary.com/duptmanu9/image/upload/v1743010842/Aptos_cg6rqg.png",
  },
  {
    name: ".xyz",
    image:
      "https://res.cloudinary.com/duptmanu9/image/upload/v1743010841/xyz-logo-color_hhvfct.png",
  },
  {
    name: "Interview Buddy",
    image:
      "https://res.cloudinary.com/duptmanu9/image/upload/v1743010841/interview_buddy_ddjgmr.png",
  },
  {
    name: "1stopai",
    image:
      "https://assets.hackquest.io/hackathons/45c9549b-5760-4961-bc45-422c82131436/1-sYcHUpWh36IjlAXz3UK.jpeg",
  },
  {
    name: "Eazydiner",
    image:
      "https://res.cloudinary.com/duptmanu9/image/upload/v1743010841/eazydiner_athbld.jpg",
  },
];

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="sponsors-title">Sponsors</div>

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
