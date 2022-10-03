import React from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { useStateContext } from "../../context/StateContext";
import { animate, motion } from "framer-motion";

const NavButtons = () => {
  const {
    handleAboutClick,
    handleHomeClick,
    handleProjectsClick,
    handleResourcesClick,
    activeAbout,
    activeHome,
    activeProjects,
    activeResources,
  } = useStateContext();
  const navButtons =
    "uppercase tracking-wider hover:scale-105 ease-in-out duration-200 cursor-pointer";
  const activeButtons =
    "uppercase tracking-wider hover:scale-105 ease-in-out duration-200 border-[#a049b6] cursor-pointer";

  const resourcesButton =
    "uppercase tracking-wider hover:scale-105 ease-in-out duration-200 md:flex hidden cursor-pointer";
  const activeResourcesButton =
    "uppercase tracking-wider hover:scale-105 ease-in-out duration-200 border-[#a049b6] md:flex hidden cursor-pointer";

  return (
    <div className="w-full h-full flex items-center justify-evenly text-[#f6dcfd] font-oswald font-semibold ">
      <motion.span
        className={activeHome ? activeButtons : navButtons}
        onClick={handleHomeClick}
      >
        Home
      </motion.span>
      <motion.span
        className={activeAbout ? activeButtons : navButtons}
        onClick={handleAboutClick}
      >
        Skills
      </motion.span>
      <motion.span
        className={activeProjects ? activeButtons : navButtons}
        onClick={handleProjectsClick}
      >
        Projects
      </motion.span>
      <motion.span
        className={activeResources ? activeResourcesButton : resourcesButton}
        onClick={handleResourcesClick}
      >
        Resources
      </motion.span>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="w-full h-[10vh] min-h-[80px] fixed flex">
      <div className="w-full h-full my-2 mx-3 md:mx-10 lg:mx-32 xl:mx-72 flex justify-between md:justify-center">
        {/* Logo */}
        <div className="h-full w-1/12 min-w-[92px] cursor-pointer hover:scale-105 ease-in-out duration-200 flex items-center justify-center">
          <Image src={Logo} alt="logo" />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full hidden md:flex">
          <NavButtons />
        </div>

        {/* Email Button */}
        <div className="w-1/12 h-full flex items-center justify-center">
          <a href="mailto:e@robced.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer hover:scale-105 ease-in-out duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#f6dcfd"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
