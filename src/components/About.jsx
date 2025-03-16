import React from "react";
import { AboutImage } from "../assets";
import { glareCards } from "../constants";
import { GlareCard } from "./ui/glare-card";
import { linearGradient } from "framer-motion/client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const About = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray('.about-card-animator')
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: -50 * (i+1),
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "circ.inOut",
      });
    })
    gsap.from('.paragraph-animator', {
      opacity: 0,
      delay: 0.3,
      stagger: 0.4,
      y: -20,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.paragraph-animator',
        start: 'bottom bottom',
        end: 'top 70%',
        scrub: true
      },
      ease: 'circ.inOut'
    });
    gsap.from('.about-image-animator', {
      opacity: 0,
      y: -50,
      duration: 0.7,
      ease: 'circ.inOut',
      scrollTrigger: {
        trigger: '.about-image-animator',
        start: 'top bottom',
        end: 'bottom 70%',
        scrub: true
      }
    })
  }, []);
  return (
    <div id="about" className="w-screen min-h-screen">
      <Headings heading="About" subHeading="Know Us" />
      <div className="about-content-wrapper flex justify-around items-center md:w-4/5 w-full py-1 mx-auto flex-col-reverse md:flex-row">
        <div className="about-context-text flex justify-center items-center flex-col gap-5 text-xl font-medium font-roboto dark:text-white w-4/5 md:w-1/3 text-center">
          <p className="paragraph-animator">
            JUSST is a group of four friends, focusing on developing Edutainment
            Services.
          </p>
          <p className="paragraph-animator">
            We specialise in content creating in various forms such as videos,
            blogs and code.
          </p>
        </div>
        <div className="about-image-animator about-image md:w-1/2 p-5">
          <AboutImage />
        </div>
      </div>
      <div className="flex justify-evenly items-center bg-myBlack m-5 flex-col md:flex-row gap-7 w-5/6 mx-auto">
        {glareCards.map((card) => (
          <div className="about-card-animator" key={card.title}>
            <GlareCard
              className={
                "bg-indigo-950 border-none flex justify-center items-center"
              }
            >
              <AboutCard {...card} />
            </GlareCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Headings = ({ heading, subHeading }) => {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".headings-animator")
    titles.forEach((title, i) => {
      gsap.fromTo(title, {
        x: -30*(i*2+1),
        opacity: 0,
        ease: 'circ.in'
      },{
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'circ.in',
        scrollTrigger: {
          trigger: title,
          start: 'top bottom',
          end: 'bottom 70%',
          scrub: true
        }
      })
    })
  }, []);
  return (
    <div className="headings-wrapper p-2 w-full">
      <h3 className="headings-animator font-semibold text-slate-400 uppercase">
        {subHeading}
      </h3>
      <h2 className="headings-animator font-bold text-3xl md:text-5xl text-white">
        {heading}.
      </h2>
    </div>
  );
};

const AboutCard = ({ image, title }) => {
  return (
    <React.Fragment>
      <div className="about-card-cont w-5/6 h-5/6 flex justify-center items-center gap-5 flex-col border-2 rounded-3xl border-gradient">
        <img src={image} alt="A small image about task" className="w-24" />
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </React.Fragment>
  );
};

export default About;
