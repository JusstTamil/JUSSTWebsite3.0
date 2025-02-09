import React from "react";
import { Headings } from "./About";
import { footerContactLinks } from "../constants";

const Contact = () => {
  return (
    <React.Fragment>
      <Headings heading={"Contact"} subHeading={"Get in touch with us"} />
      <div className="contact-section-wrapper md:w-10/12 w-full min-h-[90vh] flex justify-center items-center mx-auto flex-col-reverse md:flex-row">
        <ContactLinks />
        <ContactForm />
      </div>
    </React.Fragment>
  );
};

export const ContactForm = () => {
  return (
    <React.Fragment>
      <form className="md:w-1/2 w-4/5 h-full flex flex-col justify-around items-center" action="https://formsubmit.co/jusst2023@gmail.com" method="POST">
        {/* <input type="hidden" name="_next" value="/thanks" /> */}
        <div className="contact-form-element">
          <label htmlFor="Name">
            Your Name<span className="text-red-600 font-semibold">*</span>
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            className="contact-form-input-field"
            required
          />
        </div>
        <div className="contact-form-element">
          <label htmlFor="E-Mail">
            Your E-Mail<span className="text-red-600 font-semibold">*</span>
          </label>
          <input
            type="email"
            name="E-Mail"
            id="E-Mail"
            className="contact-form-input-field"
            required
          />
        </div>
        <div className="contact-form-element">
          <label htmlFor="Message">
            Your Message<span className="text-red-600 font-semibold">*</span>
          </label>
          <textarea
            name="Message"
            id="Message"
            className="contact-form-input-field h-32"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold m-5 text-xl hover:scale-[1.02] transition-transform"
        >
          Send
        </button>
      </form>
    </React.Fragment>
  );
};

export const ContactLinks = () => {
  return (
    <React.Fragment>
      <div className="contact-text-wrapper md:w-1/2 pb-10 pt-3">
        <h4 className="text-2xl font-semibold text-white p-4 text-center">
          Follow Us On
        </h4>
        <div className="flex flex-wrap items-center justify-around gap-4">
          {footerContactLinks.map((link) => (
            <a
              href={link.link}
              key={link.name}
              className="w-64 p-3 rounded-md bg-slate-700 font-semibold hover:bg-slate-800 transition-colors flex gap-7 items-center hover:underline"
            >
              <img src={link.image} className="w-12" alt={`${link.name} icon`} />
              <div className="contact-text-block-text">{link.name}</div>
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
