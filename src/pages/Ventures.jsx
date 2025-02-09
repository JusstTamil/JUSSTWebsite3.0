import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ventureCards } from '../constants'
import VentureCard from '../components/VentureCard'
import EpidaurusSection from '../components/EpidaurusSection'

const Ventures = () => {
  document.title = 'Ventures - JUSST'
  return (
    <React.Fragment>
      <div className="bg-myBlack">
        <Navbar />
        <div className="lander-wrapper h-24 mt-14 flex flex-col justify-around items-center">
          <h1 className="font-bold text-3xl md:text-5xl text-white">Our Ventures</h1>
          <h3 className="font-semibold text-slate-400 uppercase">Know where to find us</h3>
        </div>
        <div className="ventures-cont min-h-[90vh] flex flex-wrap flex-col md:flex-row justify-around items-center w-11/12 mx-auto gap-10 p-5">
          {ventureCards.map((card) => (
            <VentureCard key={card.name} {...card} />
          ))}
        </div>
        <EpidaurusSection />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Ventures
