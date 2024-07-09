import React from 'react'
import Navabar from '../components/Navabar'
import Background from '../components/BackgroundImage'
import About from '../components/About'
import Service from '../components/Service'
import LatestProjects from '../components/LatestProjects'
import News from '../components/News'
import Hire from '../components/Hire'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <div>
      
        <Background />  
        <Navabar />
        <About />
        <Service />
        <LatestProjects />
        <News />
        <Hire/>
        <Footer />
    </div>
  )
}

export default Main