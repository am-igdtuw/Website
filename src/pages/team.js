import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TeamSection from '../Components/TeamSection'
import TeamSidebar from '../Components/TeamSidebar/TeamSidebar'


const TeamPage  = () => {
  return (
    <div>
      
        <Navbar/>
      
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TeamSidebar />
        <TeamSection />
      </div>
      
        <Footer/>

    </div>
  )
}

export default TeamPage