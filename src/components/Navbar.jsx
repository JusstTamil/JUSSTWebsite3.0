import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth > 768 ? true : false
  );

  const windowLengthChecker = () => {
    if (window.innerWidth > 768) {
      setWindowWidth(true);
    } else {
      setWindowWidth(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", windowLengthChecker);

    return () => {
      window.removeEventListener("resize", windowLengthChecker);
    };
  });

  return (
    <React.Fragment>
      <nav
        className={`h-[10vh] flex justify-between items-center w-screen bg-indigo-950`}
      >
        <div className="nav-logo flex justify-start items-center px-5 flex-nowrap w-1/3">
          <a
            href="/"
            className="logo-link w-full flex flex-row gap-7 justify-start items-center"
          >
            <img
              src="JUSSTChannelProfile.jpg"
              alt="Logo of Institution"
              className="nav-logo-image h-12 md:h-16 rounded-full"
            />
            <h1 className="text-4xl font-black uppercase font-roboto md:block hidden">
              Jusst Tamil
            </h1>
          </a>
        </div>
        <div className={`nav-text w-1/2 font-roboto font-semibold text-lg`}>
          {windowWidth ? <BigScreenNavList /> : <MobileNavMenu />}
        </div>
      </nav>
    </React.Fragment>
  );
};

const BigScreenNavList = () => (
  <div className="w-full flex flex-row justify-around items-center">
    {navLinks.map((item) => (
      <a
        href={item.link}
        key={item.name}
        className="nav-text-link hover:underline hover:-translate-y-1 transition-transform"
      >
        {item.name}
      </a>
    ))}
  </div>
);

const MobileNavMenu = () => {
  useGSAP(() => {
    const pages = gsap.utils.toArray(".nav-mobile-links");
    pages.forEach((page, index) => {
      gsap.from(page, {
        x: 20 * (index + 1),
        display: "none",
        duration: 0.5,
        delay: 0.5,
        stagger: 0.3
      });
    });
  }, []);



  const [toggle, setToggle] = useState(true);
  return (
    <div className="nav-mobile-menu-wrapper w-full overflow-x-hidden">
      <div className="nav-mobile-menu-icon w-full flex justify-end items-center px-6">
        <img
          src={toggle ? menu : close}
          alt={toggle ? "menu icon" : "close icon"}
          className="w-12"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div
        className={`nav-mobile-menu bg-indigo-950 w-1/2 h-60 ${
          toggle ? "hidden" : "block"
        } absolute top-18 rounded-b-xl z-[99] flex flex-col gap-7 font-semibold px-6 py-5`}
      >
        {navLinks.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className="nav-mobile-links text-white text-xl hover:underline hover:translate-x-1 transition-transform"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
