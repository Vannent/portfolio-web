import Image from "next/image";
import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import logo from "../../public/logo.png";
import { MailIcon } from "./Icons";

const Header = () => {
  const navButtonStyle =
    "uppercase tracking-wide hover:tracking-widest hover:scale-105 ease-in-out duration-200";
  const activeNavButtonStyle =
    "uppercase tracking-wide hover:tracking-widest hover:scale-105 ease-in-out duration-200 border-b-4 border-[#a049b6]";

  const {
    handleAboutClick,
    handleContactClick,
    handleHomeClick,
    handleProjectsClick,
  } = useStateContext();

  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <div
      className="h-[12vh] fixed w-full flex items-center justify-evenly"
      id="pageComponentContent"
    >
      <div className="w-1/12 max-w-[92px] cursor-pointer">
        <Image src={logo} alt="logo" />
      </div>
      <div className="w-full flex items-center justify-evenly font-robcon font-bold text-[#f6dcfd]">
        <button
          className={homeActive ? activeNavButtonStyle : navButtonStyle}
          onClick={handleHomeClick}
        >
          Home
        </button>
        <button
          className={aboutActive ? activeNavButtonStyle : navButtonStyle}
          onClick={handleAboutClick}
        >
          About
        </button>
        <button
          className={projectsActive ? activeNavButtonStyle : navButtonStyle}
          onClick={handleProjectsClick}
        >
          Projects
        </button>
        <button
          className={contactActive ? activeNavButtonStyle : navButtonStyle}
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
      <MailIcon />
    </div>
  );
};

export default Header;
