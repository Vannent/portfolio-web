import React from "react";
import {
  pageComponentContent,
  pageComponentSubTitle,
  pageComponentTitle,
  pageComponentWrapper,
} from "../../constants/PageComponent";
import { useStateContext } from "../../context/StateContext";
import { BehanceIcon, LinkedInIcon, TwitterIcon } from "../elements/Icons";

const Contact = () => {
  const { contactRef } = useStateContext();
  const contactComponentWrapper =
    "sm:w-2/4 w-full h-full flex flex-col gap-2 p-5";
  const contactButton =
    "bg-[#a049b6] h-10 font-robcon text-lg fond-bold justify-self-end mt-3 sm:mt-0";
  const contactButtonSubtitle = "font-semibold text-[#a049b6]/60";
  const contactLabel =
    "flex flex-col font-robcon font-bold mb-[7.5px] xl:mb-[10.5px]";
  const contactInput =
    "shadow-sm shadow-[#a049b6] focus:border focus:border-[#a049b6] text-sm text-[#f6dcfd]/40 block w-full p-2.5 bg-[#a049b6]/20 font-roboto";
  return (
    <div id="contact" ref={contactRef} className={pageComponentWrapper}>
      <div className={pageComponentContent} id="pageComponentContent">
        <div className="sm:h-[5vh] w-full flex items-center gap-3 pt-5">
          <span className="h-[8px] w-[50px] bg-[#a049b6]"></span>
          <h1 className={pageComponentTitle}>Contact</h1>
        </div>
        <div className="h-[72vh] w-full">
          <h1 className={pageComponentSubTitle}>Get in touch.</h1>
          <div className="h-full w-full flex items-center justify-center py-5 gap-5 text-[#f6dcfd]">
            <div className={contactComponentWrapper}>
              <h3 className="font-bold font-roboto text-lg justify">
                Want to talk with me? I am more than happy to chat with you.
              </h3>
              <p className="font-roboto">
                I also do freelance work. If you would like a full-stack
                website, application or design. I can do it for you! You can
                schedule an appointment for more information about my services,
                or send me a message. Let’s make something new, and meaningful.
              </p>
              <h3 className="font-medium font-roboto">Just say hello!</h3>

              <div className="flex flex-col w-full h-3/6 gap-4 sm:gap-3">
                <div className="">
                  <h3 className={contactButtonSubtitle}>Location</h3>
                  <p className="font-semibold">San Francisco, CA.</p>
                </div>

                <div className="">
                  <h3 className={contactButtonSubtitle}>Email</h3>
                  <p className="font-semibold">e@robced.com</p>
                </div>

                <div className="">
                  <h3 className={contactButtonSubtitle}>Social Media</h3>
                  <div className="flex gap-5 my-2">
                    <a className="hover:scale-110 cursor-pointer">
                      <LinkedInIcon />
                    </a>
                    <a className="hover:scale-110 cursor-pointer">
                      <TwitterIcon />
                    </a>
                    <a className="hover:scale-110 cursor-pointer">
                      <BehanceIcon />
                    </a>
                  </div>
                </div>

                <div className="">
                  <h3 className={contactButtonSubtitle}>Useful Resources</h3>
                  <div className="flex gap-5 sm:gap-1 md:gap-5 mb-0 sm:mb-[4px] md:mb-0">
                    <a
                      href=""
                      className="font-semibold underline underline-offset-[6px] decoration-2 hover:tracking-wide ease-in-out hover:text-[#a049b6] duration-200 text-sm md:text-base sm:text-xs"
                    >
                      The Odin Project
                    </a>
                    <span className="font-bold sm:text-xs md:text-base">/</span>
                    <a
                      href=""
                      className="font-semibold underline underline-offset-[6px] decoration-2 hover:tracking-wide ease-in-out hover:text-[#a049b6] duration-200 text-sm sm:text-xs md:text-base"
                    >
                      freeCodeCamp
                    </a>
                    <span className="font-bold sm:text-xs md:text-base">/</span>
                    <a
                      href=""
                      className="font-semibold underline underline-offset-[6px] decoration-2 hover:underline-offset-8 hover:tracking-wide ease-in-out hover:text-[#a049b6] duration-200 text-sm md:text-base sm:text-xs"
                    >
                      Tech Fleet
                    </a>
                  </div>
                </div>
              </div>
              <button className={contactButton}>Schedule an Appointment</button>
            </div>
            <div className="w-2/4 h-full flex-col gap-2 p-5 hidden sm:flex">
              <form
                action="#"
                className="h-full w-full flex flex-col gap-8 xl:gap-4"
              >
                <div>
                  <label className={contactLabel}>Your name</label>
                  <input
                    type="text"
                    id="name"
                    className={contactInput}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className={contactLabel}>Your email</label>
                  <input
                    type="email"
                    id="email"
                    className={contactInput}
                    placeholder="name@robced.com"
                    required
                  />
                </div>
                <div>
                  <label className={contactLabel}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className={contactInput}
                    placeholder="Let me know how I can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={contactLabel}>Your message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className={contactInput}
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button type="submit" className={contactButton}>
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
