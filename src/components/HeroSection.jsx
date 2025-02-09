import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { heroImg } from "../assets";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper w-screen h-[90vh]">
      <HeroHighlight containerClassName={"w-full h-full bg-myBlack"}>
        <div className="hero-highlight-content flex justify-around items-center md:flex-row flex-col-reverse md:w-10/12 w-full text-white mx-auto">
          <div className="left md:w-3/5 w-4/5 text-center flex justify-around items-center flex-col">
            <h1 className="md:text-5xl text-3xl font-black font-roboto">
              Join us in the Journey of <br />{" "}
              <Highlight className={"text-white relative top-2 px-2"}>
                Making Learning Fun
              </Highlight>
            </h1>
            <br /><br className="hidden md:block" />
            <h2 className="md:text-3xl text-xl font-semibold font-roboto">
              Helping Students to{" "}
              <span className="text-emerald-500">Understand</span> and{" "}
              <span className="text-emerald-500">Feel</span> the concepts they
              study
            </h2>
            <a href="#about" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold m-5 text-xl hover:scale-[1.02] transition-transform">Know More</a>
          </div>
          <div className="right md:w-3/5">
            <img src={heroImg} alt="A decriptive image" className="heroImg pointer-events-none" />
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default HeroSection;
