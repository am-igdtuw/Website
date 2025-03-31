import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div>
    <div className="description-container">
    <h2 className="timeline-title">Description</h2>
      <h1 className="tagline">🚀 Code. Build. Win. Sleep Later. 🚀</h1>
      <p className="about">
        Hackathons aren’t just about coding—they’re about turning crazy ideas into reality. At AM HACKS, you get 36 hours to build whatever you can dream up, alongside fellow innovators.
        No strict themes, no boring rules—just you, your laptop, and a ton of creativity.
      </p>
      <ul className="why-join">
        <li>
          🔥 <strong>Endless Innovation</strong> – Build whatever you can
          imagine!
        </li>
        <li>
          💰 <strong>Exciting Cash Prizes</strong> – Because hard work deserves
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
      <p>
    Let’s hack, build, and make something unforgettable! 🚀  
    <br/>
    Don’t forget to join our <strong>WhatsApp community</strong> for further updates –  
    <a href="https://chat.whatsapp.com/LArXaxJHbyD1ErJmdmvqXZ" target="_blank">Join Here</a>.
</p>
  <br/>
<h1 className="tagline">🏆 How It Works: The Rounds</h1>
<ul className="why-join">
  <li>
  ⚡Round 1: Screening Round 
  </li>
  <p>We will review your profiles to evaluate your application before proceeding to the next stage.</p>
  
  <li>
  💻 Round 2: The Development Round
  </li>
<p>
  Selected students will work on the provided themes — Blockchain, AI/ML, and Open Innovation.
Mentors will be available for guidance, but ultimately, success depends on you and your team.  
<br/>
<strong>Note:</strong> It is mandatory to upload the live link of your submission; otherwise, it will not be evaluated.
</p>
  <li>🎤 Round 3: Presentation Round
  </li>
    <p>
After evaluating all submissions, the top-performing teams will be shortlisted and announced. Shortlisted teams should be prepared to deliver their pitch offline.
<br/>
<strong>Venue: </strong> TBD, Delhi NCR
</p>
</ul>
    </div>
    <div className="description-container" id="themes">
    <h2 className="timeline-title">Themes</h2>
<ul className="why-join">
        <li>
        🚀 <strong>1. Blockchain & Web3</strong> – BExplore smart contracts, DeFi, and the future of the internet.
        </li>
        <li>
        🚀 <strong>2. AI & Machine Learning</strong> – Automate, innovate, and redefine possibilities.
        </li>
        <li>
        🚀 <strong>3. Aptos Special Track</strong> – Build on Aptos, deploy smart contracts, and leverage its powerful SDK. 
        </li>
        <li>
        🚀 <strong>4. Open Innovation</strong> – No limits, just endless creativity. 
        </li>
      </ul>

    </div>
    </div>
  );
};

export default Description;
