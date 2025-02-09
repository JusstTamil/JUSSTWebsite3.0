import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

const Thanks = () => {
  return (
    <React.Fragment>
      <div className="thank-cont w-screen h-screen flex justify-between items-center flex-col bg-gradient-to-tr from-blue-950 to-myBlack">
        <Navbar />
        <div className="thank-cont-text flex flex-col justify-center items-center gap-7 md:gap-12 p-10 text-center">
          <h1 className="font-black text-3xl md:text-7xl font-playwrite">Thank You for your Message!!</h1>
          <h3 className="font-semibold text-xl md:text-3xl font-roboto">We will get back to you soon...</h3>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Thanks