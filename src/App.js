import React from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
// import EventPage from "./pages/event";
import Loader from "./Components/Loader/loader";
import MobileLoader from "./Components/Loader/mobileLoader";
// import SpiralCanvas1 from "./Components/LandingPage/SpiralCanvas";
// import SpiralCanvas16 from "./pages/landing";
import Profile from "./pages/profile";

// import BlogPage from './pages/blogs'
//import TechTeamPage from './pages/techTeam';
import FaqPage from "./pages/faq";
//import OutreachTeamPage from './pages/outreachTeam';
//import EventTeamPage from './pages/eventTeam';
//import MediaTeamPage from './pages/mediaTeam';
//import ResearchTechTeam from './pages/researchTeam';
import TeamPage from "./pages/team";
import SponsorUsForm from "./pages/sponsorPage";
import CollaborateUsForm from "./pages/collaborateForm";
// import profilePage from "./pages/profile";
import HackDay from "./pages/hackDay";
import EventPagePseudo from "./pages/eventpseudo";
//import ReactDOM from 'react-dom'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faXTwitter);

//window.$crisp=[];
//window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {

  return (
    <BrowserRouter>
      <Toaster
        position="bottom-center"
        gutter={14}
        containerStyle={{ fontSize: "14px" }}
      />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<EventPagePseudo />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/sponsorPage" element={<SponsorUsForm />} />
          <Route path="/collaboratePage" element={<CollaborateUsForm />} />
          <Route path="/amhacks" element={<HackDay />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/mobileLoader" element={<MobileLoader />} />
          <Route path="/profile" element={<Profile />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
