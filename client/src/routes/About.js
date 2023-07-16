import React from 'react'

import Navbar  from "../components/Navbar"

import Footer from '../components/Footer'

// import Technoid2Mg from "../assets/Technoid2Mg";

import AboutRoute from "../assets/AboutRoute"

import AboutContent from "../components/AboutContent";


const About = () => {
  return (
    <div>
    <Navbar />
    <AboutRoute />
    <AboutContent/>
    <Footer />
    </div>
  )
}

export default About;