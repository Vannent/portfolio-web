import React from "react";
import {
  pageComponentContent,
  pageComponentSubTitle,
  pageComponentTitle,
  pageComponentWrapper,
} from "../../constants/PageComponent";
import { useStateContext } from "../../context/StateContext";
import {
  AdobeXdIcon,
  CssIcon,
  HtmlIcon,
  NextIcon,
  PythonIcon,
  ReactIcon,
  SassIcon,
  TailwindIcon,
  TSIcon,
} from "../elements/Icons";

const About = () => {
  const { aboutRef } = useStateContext();
  const iconWrapper =
    "flex items-center justify-start h-16 gap-2 w-[130px] sm:w-[170px] md:w-[20vw]";
  return (
    <div id="about" ref={aboutRef} className={pageComponentWrapper}>
      <div className={pageComponentContent} id="pageComponentContent">
        <div className="sm:h-[5vh] w-full flex items-center gap-3 pt-5">
          <span className="h-[8px] w-[50px] bg-[#a049b6]"></span>
          <h1 className={pageComponentTitle}>Contact</h1>
        </div>
        <div className="h-[72vh] w-full flex flex-col">
          <div className="h-1/2">
            <h1 className={pageComponentSubTitle}>Who am I</h1>
            <p className="text-[#f6dcfd] font-roboto md:text-lg xl:text-xl mt-5">
              From the first moment I touched a computer, I was hooked. Being
              able to learn anything, talk to anyone or be anywhere was
              fascinating. The possibilities were endless. My innate curiosity
              has led me on different journeys but following the same purpose,
              to explore how things really work. I have always gravitated toward
              concepts or ideas that allow me to grow and discover solutions to
              complicated problems. From Psychology to Software Engineering,
              finding solutions ignites an indescribable thrill in me.
            </p>
          </div>
          <div className="h-1/2 flex flex-col">
            <h1 className={pageComponentSubTitle}>What I do</h1>
            <div className="flex w-full justify-start flex-wrap mt-5 text-[#f6dcfd]">
              <div className={iconWrapper}>
                <HtmlIcon />
                HTML
              </div>
              <div className={iconWrapper}>
                <CssIcon />
                CSS
              </div>
              <div className={iconWrapper}>
                <ReactIcon />
                React.js
              </div>
              <div className={iconWrapper}>
                <TSIcon />
                TypeScript
              </div>
              <div className={iconWrapper}>
                <PythonIcon />
                Python
              </div>
              <div className={iconWrapper}>
                <SassIcon />
                SASS
              </div>
              <div className={iconWrapper}>
                <TailwindIcon />
                TailwindCSS
              </div>
              <div className={iconWrapper}>
                <NextIcon />
                Next.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
