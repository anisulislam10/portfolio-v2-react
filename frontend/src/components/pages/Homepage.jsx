import React from 'react'
import HeroSection from '../homepage/HeroSection'
import Navbar from '../shared/Navbar'
import Skills from './Skills'
import Footer from '../shared/Footer'

function Homepage() {
  return (
    <div>
      <Navbar/>
        <HeroSection/>
        <Skills showNavbar={false}/>
        <Footer/>
    </div>
  )
}

export default Homepage