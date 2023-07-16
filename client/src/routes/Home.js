import React from 'react'
import Navbar  from "../components/Navbar"
import Video from '../components/Video'
import HomeContent  from "../assets/HomeContent"
import SliderShow from "../assets/SliderShow"
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
    <Video/>
      <HomeContent />
      <SliderShow />
      <Footer/>
    </div>
  )
}

export default Home

