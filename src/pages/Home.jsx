import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  document.title = 'JUSST - Making Learning Fun'
  return (
    <React.Fragment>
        <div className="bg-myBlack">
          <Navbar />
          <HeroSection />
          <About />
          <Contact />
          <Footer />
        </div>
    </React.Fragment>
  )
}

export default Home
