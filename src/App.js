import React from 'react';  
import './App.css';       
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import EventPage from './pages/event'
// import BlogPage from './pages/blogs'
import TechTeamPage from './pages/techTeam';
import FaqPage from './pages/faq'
import OutreachTeamPage from './pages/outreachTeam';
import EventTeamPage from './pages/eventTeam';
import MediaTeamPage from './pages/mediaTeam';
import ResearchTechTeam from './pages/researchTeam';
import TeamPage from './pages/team';


//window.$crisp=[];
//window.CRISP_WEBSITE_ID="e79efdd2-abee-4a1e-b868-c7929585ebd9";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/event" element={<EventPage/>}/>
        {/* <Route exact path="/blogs" element={<BlogPage/>}/> */}
        <Route exact path="/faq" element={<FaqPage/>}/>
        <Route exact path="/techTeam" element={<TechTeamPage/>}/>
        <Route exact path="/eventTeam" element={<EventTeamPage/>}/>
        <Route exact path="/mediaTeam" element={<MediaTeamPage/>}/>
        <Route exact path="/researchTeam" element={<ResearchTechTeam/>}/>
        <Route exact path="/outreachTeam" element={<OutreachTeamPage/>}/>
        <Route exact path="/TeamPage" element={<TeamPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
