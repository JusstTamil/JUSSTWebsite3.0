import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ventureCards } from '../constants'
import VentureCard from '../components/VentureCard'
import EpidaurusSection from '../components/EpidaurusSection'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Ventures = () => {
  document.title = 'Ventures - JUSST'
  useGSAP(() => {
    const cards = gsap.utils.toArray('.venture-card-animator')
    cards.forEach((card, index) => {
      gsap.from(card, {
        x: -30 * index + 1,
        opacity: 0,
        duration: 1,
        ease: 'circ.in',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom 70%'
        }
      })
  })  
  }, [])
  return (
    <React.Fragment>
      <div className="bg-myBlack">
        <Navbar />
        <div className="lander-wrapper h-20 mt-14 flex flex-col justify-around items-center gap-5">
          <h1 className="font-bold text-3xl md:text-5xl text-white">Our Ventures</h1>
          <h3 className="font-semibold text-slate-400 uppercase">Know where to find us</h3>
        </div>
        <div className="ventures-cont min-h-[90vh] w-4/5 md:w-5/6 my-10 md:my-0 flex flex-wrap flex-col md:flex-row justify-around items-center mx-auto gap-10">
          {ventureCards.map((card) => (
            <div className="venture-card-animator flex justify-center items-center" key={card.name}>
              <VentureCard {...card} />
            </div>
          ))}
        </div>
        <EpidaurusSection />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Ventures
