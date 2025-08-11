import React from 'react'
import { Headings } from './About'
import { appSec, epidaurusIco } from '../assets'


const EpidaurusSection = () => {
  return (
    <React.Fragment>
        <div className="epidaurus-section-cont w-screen mb-5">
          <Headings heading={"Epidaurus"} subHeading={"The App We Developed"} />
          <div className="w-5/6 md:w-4/5 mx-auto flex flex-col md:flex-row justify-evenly items-center pb-5">
            <div className="left md:w-1/3 w-full flex justify-center items-center">
              <img src={appSec} alt="" className="w-64 md:w-full p-3" />
            </div>
            <div className="right md:w-1/2 font-medium text-lg text-center flex flex-col justify-evenly items-center gap-5">
              <p className="epidaurus-content-p">
                We at JUSST have created <span className="font-semibold text-emerald-400">Epidaurus</span>, an innovative application that predicts pothential diseased based on your symptoms, and voila! The app will produce a list of posssible illness you may have. Plus, it is user-friendly and easy to navigate, making it an essential tool for those who want to stay informed about their health Status.
              </p>
              <div className="download-button-wrapper flex md:w-4/5 w-full justify-evenly items-center h-20 p-5 bg-indigo-500 rounded-xl shadow-md">
                <img src={epidaurusIco} alt="" className="w-12 rounded-full" />
                <h3 className="md:text-2xl text-xl font-bold w-28 md:w-auto">Epidaurus for PC</h3>
                <a href="https://github.com/JusstTamil/Epidaurus/raw/refs/heads/main/Epidaurus-Mark1-setup.exe" className='bg-orange-500 md:p-3 p-2 rounded-xl hover:scale-[1.02] transition-transform' style={{color: 'white'}} download={true}>Download</a>
              </div>
              <p className="epidaurus-content-p">
                This is an open-source application. You can contribute to the app thourgh <a href="https://github.com/JusstTamil/Epidaurus" target="_blank" rel="noopener noreferrer">Github</a>. We are still improving Epidaurus here at JUSST. To contact us about Epidaurus, you can use the <a href="/contact">Contact Page</a>.
              </p>
              <p className="epidaurus-content-p">
                <span className="text-indigo-500 font-bold">Note:</span> This app is a culuminative effort to create a change in the medical field. The app is based on the details provided by NCERT Class 12 Book. This is not a diagnosis tool. It is only for informational purposes and is not a qualified medical opinion. Do not use it in case of emergencies. In case of a health emergency, contact your personal medical consultant or Doctor.
              </p>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default EpidaurusSection