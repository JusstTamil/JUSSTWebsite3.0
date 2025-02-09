import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-cont">
        <div className="footer-wrapper w-screen bg-black dark:bg-myBlack flex justify-between items-center gap-5 flex-col md:flex-row">
          <a href="/" className="">
            <div className="logo-section-wrapper flex items-center gap-3 p-3">
              <img src='JUSSTChannelProfile.jpg' alt="Logo of JUSST" className="w-20" />
              <h3 className="font-roboto font-bold text-white text-3xl">JUSST</h3>
            </div>
          </a>
          <div className="footer-section-links flex justify-around items-center w-2/3 flex-col md:flex-row gap-3 pb-4">
            {footerLinks.map((item) => (
              <a key={item.name} href={item.link} className="text-lg font-medium text-white hover:underline hover:-translate-y-1 transition-transform bg-slate-800 p-2 rounded-md w-full md:w-56 text-center">{item.name}</a>
            ))}
          </div>
        </div>
        <div className="trademark text-sm text-center bg-black dark:bg-myBlack text-gray-600 p-1">
          A Product of JUSST. Have a Nice Day : )
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer