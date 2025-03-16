import React from 'react'

const VentureCard = ({name, subline, tagline, link, accent, logo}) => {
  return (
    <React.Fragment>
        <div className="venture-card-wrapper w-4/5 min-w-80 max-w-96 md:w-1/4 h-[26rem] p-3 flex flex-col justify-around items-center text-center rounded-xl bg-myWhite">
          <div className={`venture-card-cont w-5/6 border-4 rounded-lg h-[85%] flex flex-col justify-around items-center dark:bg-myBlack`} style={{borderColor: accent}}>
            <div className={`venture-card-image w-28 h-28 mt-4 rounded-full`}>
              <img src={logo} alt="A logo of the platform we use." className="" />
            </div>
            <div className="venture-card-content flex flex-col justify-around items-center w-full gap-2 p-2 font-roboto font-medium text-myBlack">
              <h3 className="text-3xl font-bold">{name}</h3>
              <h4 className={`text-2xl font-semibold`} style={{color: accent}}>{subline}</h4>
              <p className="font-normal">{tagline}</p>
              <a href={link} target="_blank" rel="noopener noreferrer"className={`px-3 py-2 font-bold rounded-xl hover:underline text-myWhite mt-2`} style={{background: accent}}>Check it out</a>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default VentureCard