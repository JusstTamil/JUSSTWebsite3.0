import React from "react";
import { AboutImage } from "../assets";
import { glareCards } from "../constants";
import { GlareCard } from "./ui/glare-card";
import { linearGradient } from "framer-motion/client";

const About = () => {
  return (
    <div id="about" className="w-screen min-h-screen">
      <Headings heading="About" subHeading="Know Us" />
      <div className="about-content-wrapper flex justify-around items-center w-4/5 mx-auto flex-col-reverse md:flex-row">
        <div className="about-context-text flex justify-center items-center flex-col gap-5 text-xl font-medium font-roboto dark:text-white w-4/5 md:w-1/3 text-center">
          <p className="">
            JUSST is a group of four friends, focusing on developing Edutainment
            Services.
          </p>
          <p className="">
            We specialise in content creating in various forms such as videos,
            blogs and code.
          </p>
        </div>
        <div className="about-image md:w-1/2 p-5">
          <AboutImage />
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-myBlack m-5 flex-col md:flex-row gap-7">
        {
          glareCards.map((card) => (
            <GlareCard key={card.title} className={'bg-indigo-950 border-none flex justify-center items-center border-2 border-indigo-950'}>
              <AboutCard {...card} />
            </GlareCard>
          ))
        }
      </div>
    </div>
  );
};

export const Headings = ({ heading, subHeading }) => (
  <div className="headings-wrapper p-2 w-full">
    <h3 className="font-semibold text-slate-400 uppercase">{subHeading}</h3>
    <h2 className="font-bold text-3xl md:text-5xl text-white">
      {heading}.
    </h2>
  </div>
);

const AboutCard = ({image, title}) => {
  return (
    <React.Fragment>
      <div className="about-card-cont w-5/6 h-5/6 flex justify-center items-center gap-5 flex-col border-2 rounded-3xl border-gradient">
          <img src={image} alt='A small image about task' className="w-24" />
          <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </React.Fragment>
  )
}

export default About;
