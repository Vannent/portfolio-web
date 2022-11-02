import React, { FC } from "react";
import { useStateContext } from "../../context/StateContext";
import { CodeIcon, EyeIcon } from "../elements/Icons";
import BookereiSmall from "../../public/bookerei-sm.png";
import BookereiWide from "../../public/bookerei-wd.png";
import ChatterSmall from "../../public/chatter-sm.png";
import ChatterWide from "../../public/chatter-wd.png";
import StractSmall from "../../public/stract-sm.png";
import StractWide from "../../public/stract-wd.png";
import Image from "next/image";
import {
  pageComponentContent,
  pageComponentWrapper,
} from "../../constants/PageComponent";

const Projects: FC = () => {
  const {
    projectOneRef,
    projectTwoRef,
    projectThreeRef,
    handleProjectTwoClick,
    handleProjectThreeClick,
    activeProject,
    handleProjectOneClick,
    projectsRef,
  } = useStateContext();

  const projectList = [
    {
      id: 0,
      name: "Stract",
      description:
        "A web application that uses OpenAI to generate content for social media posts using words or sentences as a prompt.",
      languages: [
        {
          id: 0,
          language: "TypeScript",
        },
        {
          id: 1,
          language: "Python",
        },
        {
          id: 2,
          language: "Next.js",
        },
      ],
      prevLink: "https://stractapp.netlify.app",
      repLink: "https://github.com/Vannent/stract",
      smallPic: StractSmall,
      widePic: StractWide,
      ref: projectOneRef,
    },
    {
      id: 1,
      name: "Bookerei",
      description:
        "An online book store with stripe implementation for payments. Bookerei utilizes Sanity for the content management.",
      languages: [
        {
          id: 0,
          language: "TypeScript",
        },
        {
          id: 1,
          language: "Next.js",
        },
        {
          id: 2,
          language: "SASS",
        },
      ],
      prevLink: "https://bookerei.netlify.app/",
      repLink: "https://github.com/Vannent/bookerei",
      smallPic: BookereiSmall,
      widePic: BookereiWide,
      ref: projectTwoRef,
    },
    {
      id: 2,
      name: "Chatter",
      description:
        "A real time chatting app that utilizes Stream Chat API to handle messages. Allowing users to create group and send media files.",
      languages: [
        {
          id: 0,
          language: "React",
        },
        {
          id: 1,
          language: "Node.js",
        },
        {
          id: 2,
          language: "StreamChat",
        },
      ],
      prevLink: "https://chatter-appl.netlify.app/",
      repLink: "https://github.com/Vannent/chatter",
      smallPic: ChatterSmall,
      widePic: ChatterWide,
      ref: projectThreeRef,
    },
  ];
  return (
    <div id="projects" ref={projectsRef} className={pageComponentWrapper}>
      <div className={pageComponentContent} id="pageComponentContent">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="sm:h-[5vh] w-full flex items-center gap-3 pt-5">
            <span className="h-[8px] w-[50px] bg-[#a049b6]"></span>
            <h1 className="text-[#f6dcfd] font-robcon uppercase font-bold tracking-wider">
              Projects
            </h1>
          </div>
          <div className="h-[72vh] w-full flex overflow-x-hidden">
            {projectList.map((project) => (
              <div
                key={project.id}
                ref={project.ref}
                id="project"
                className="flex-col h-full w-full sm:gap-5 md:gap-0 sm:justify-center p-5 md:p-0 lg:p-5 px-5 overflow-hidden"
              >
                <div className="h-[30px] h- w-full flex items-center justify-center">
                  <h1 className="font-playfair font-extrabold uppercase text-4xl w-5/6 text-[#a049b6]">
                    {project.name}
                  </h1>
                  <div className="flex md:w-2/6 sm:w-3/6 items-center justify-evenly text-[#f6dcfd]">
                    <a
                      href={project.prevLink}
                      target="blank"
                      className="flex items-center justify-center gap-2 font-robcon font-bold text-sm"
                    >
                      <EyeIcon />
                      Live Preview
                    </a>
                    <a
                      href={project.repLink}
                      target="blank"
                      className="sm:flex hidden items-center justify-center gap-2 font-robcon font-bold text-sm"
                    >
                      <CodeIcon />
                      Repository
                    </a>
                  </div>
                </div>
                <div className="w-full h-fit sm:h-4/5 flex items-center justify-center gap-5 xl:gap-16">
                  <div className="h-full w-3/5 sm:w-[30vh] sm:h-[46vh] md:h-full md:w-[35vh] hidden sm:flex">
                    <Image src={project.smallPic} alt="project image" />
                  </div>
                  <div className="h-full lg:w-[52vh] md:w-[56vh] w-[45vh] flex items-center justify-center flex-shrink-0 flex-grow-0 sm-p-10">
                    <Image src={project.widePic} alt="project image" />
                  </div>
                </div>
                <div className="w-full flex gap-5 h-[60px] flex-wrap sm:flex-nowrap xl:px-10 lg:px-10">
                  <p className="sm:w-4/6 w-full font-roboto text-[#f6dcfd] text-lg">
                    {project.description}
                  </p>
                  <div className="sm:w-2/6 w-full flex items-center justify-evenly gap-2">
                    {project.languages.map((language) => (
                      <span
                        key={language.id}
                        className="bg-[#a049b6] text-[#f6dcfd] h-10 w-fit py-2 px-4 rounded-xl font-robcon"
                      >
                        {language.language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            id="navigator"
            className="sm:h-[30px] w-full flex items-center justify-center"
          >
            <div
              id="line"
              className="bg-[#f6dcfd] h-[3px] w-1/2 flex items-center justify-between"
            >
              <div
                id="circle"
                className={activeProject === "one" ? "active" : "inactive"}
                onClick={handleProjectOneClick}
              ></div>
              <div
                id="circle"
                className={activeProject === "two" ? "active" : "inactive"}
                onClick={handleProjectTwoClick}
              ></div>
              <div
                id="circle"
                className={activeProject === "three" ? "active" : "inactive"}
                onClick={handleProjectThreeClick}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
