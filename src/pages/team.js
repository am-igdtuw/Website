import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TeamSection from '../Components/TeamPage/TeamSection'
import TeamSidebar from '../Components/TeamPage/TeamSidebar/TeamSidebar'
import ScrollToTopButton from '../Components/Scroller/Scroller'


const TeamPage  = () => {
  return (
    <div>
      
        <Navbar/>
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TeamSidebar />
        <TeamSection />
      </div>
      <ScrollToTopButton />
        <Footer/>

    </div>
  )
}

export default TeamPage