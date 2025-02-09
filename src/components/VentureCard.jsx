import React from 'react'

const VentureCard = ({name, subline, tagline, link, accent, logo}) => {
  return (
    <React.Fragment>
        <div className="venture-card-wrapper w-4/5 min-w-80 max-w-96 md:w-1/4 h-[26rem] p-3 flex flex-col justify-around items-center text-center rounded-lg bg-myBlack">
          <div className={`venture-card-cont w-[90%] border-4 rounded-lg h-[90%] flex flex-col justify-around items-center dark:bg-myBlack`}>
            <div className={`venture-card-image w-28 h-28 mt-4 rounded-full`}>
              <img src={logo} alt="A logo of the platform we use." className="" />
            </div>
            <div className="venture-card-content flex flex-col justify-around items-center w-full gap-2 p-2 font-roboto font-medium text-myWhite">
              <h3 className="text-3xl font-bold">{name}</h3>
              <h4 className={`text-xl font-semibold text-${accent}-500`}>{subline}</h4>
              <p className="font-normal">{tagline}</p>
              <a href={link} target="_blank" rel="noopener noreferrer"className={`bg-${accent}-500 px-3 py-2 font-semibold rounded-xl hover:bg-${accent}-700 hover:underline dark:text-myWhite mt-2`}>Check it out</a>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default VentureCard