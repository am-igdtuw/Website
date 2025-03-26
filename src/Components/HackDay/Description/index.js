import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description-container">
      <h1 className="tagline">Delhi’s biggest Web3 hackathon!</h1>
      <p className="about">
        🚀{" "}
        <strong>
          Delhi’s Biggest Web3 Hackathon – Where Innovation meets Talent!
        </strong>{" "}
        🚀
        <br />
        Are you ready to hack with the craziest ideas and revolutionize the
        digital world with innovation? AM HACKS isn’t just an event—it’s a
        three-day marathon of coding, collaboration, and building. Join 5,000+
        participants from across the country as we build the next-gen solutions
        in Blockchain, AI-ML, and beyond—with zero theme restrictions to fuel
        your creativity!
      </p>
      <ul className="why-join">
        <li>
          🔥 <strong>Endless Innovation</strong> – Build whatever you can
          imagine!
        </li>
        <li>
          💰 <strong>Exciting Prizes</strong> – Because hard work deserves
          rewards!
        </li>
        <li>
          🚀 <strong>Mentorship from Experts</strong> – Learn from the best!
        </li>
        <li>
          🎁 <strong>Swags & Perks</strong> – Code, create, and take home cool
          goodies!
        </li>
        <li>
          🌍 <strong>Networking with Industry Leaders</strong> – Make
          connections that matter!
        </li>
      </ul>
      <h2 className="theme">Theme: Blockchain, AI-ML,Open Innovation</h2>
      <p className="participants">
        Approx Participants: <strong>5000</strong>
      </p>
      <p className="team-size">
        Team Size: <strong>2-4 members</strong>
      </p>
      <p className="contact">
        Contact:{" "}
        <a href="mailto:assetmerkle@gmail.com">assetmerkle@gmail.com</a>
      </p>
      <p className="socials">
        Twitter: <a href="https://twitter.com/AM_igdtuw">AM_igdtuw</a> |
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/company/asset-merkle/">
          AssetMerkle IGDTUW
        </a>{" "}
        | Instagram:{" "}
        <a href="https://instagram.com/assetmerkle.igdtuw">
          assetmerkle.igdtuw
        </a>
      </p>
      <p className="dates">
        Applications Open: <strong>21/03/2025</strong> | Applications Close:{" "}
        <strong>01/04/2025</strong>
      </p>
      <p className="hackathon-dates">
        Hackathon Begins: <strong>04/04/2025</strong> | Ends:{" "}
        <strong>06/04/2025</strong>
      </p>
    </div>
  );
};

export default Description;
