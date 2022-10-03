import Image from "next/image";
import React from "react";
import Bookerei from "../../assets/bookerei.png";
import Chatter from "../../assets/chatter.png";
import Searchio from "../../assets/searchio.png";

const Projects = () => {
  const projectList = [
    {
      id: 0,
      name: "Chatter",
      description:
        "A real time chatting application that utilizes Stream Chat API to handle messages. Chatter allows users to create group chats and send media files.",
      pic: Chatter,
      link: "https://chatter-appl.netlify.app/",
      language: "JavaScript",
    },
    {
      id: 1,
      name: "Bookerei",
      description:
        "An online book store with stripe implementation for payments. Bookerei utilizes Sanity for the content management.",
      pic: Bookerei,
      link: "https://bookerei.netlify.app/",
      language: "JavaScript",
    },
    {
      id: 2,
      name: "Searchio",
      description:
        "A minimal search engine that utilizes Google's API to fetch results when the user searches for images or sites.",
      pic: Searchio,
      link: "https://searchioapp.netlify.app/",
      language: "JavaScript",
    },
  ];
  return (
    <div
      id="projects"
      className="flex items-center justify-center h-[100vh] overflow-scroll"
    >
      <div className="h-full w-full mx-3 md:mx-10 lg:mx-32 xl:mx-72 flex items-center justify-center">
        <div className="w-full h-4/6 flex items-center justify-center flex-wrap md:flex-nowrap md:gap-0 gap-32">
          {projectList.map((project) => (
            <a
              className="w-full md:w-2/6 h-5/6 rounded-xl mx-5 hover:scale-105 ease-in-out duration-200"
              key={project.id}
              href={project.link}
              target="blank"
            >
              <h3 className="text-[#a049b6] font-oswald uppercase font-bold text-5xl text-center tracking-wide">
                {project.name}
              </h3>
              <div className="p-3 rounded-lg mt-2 flex flex-col">
                <Image
                  src={project.pic}
                  alt="Project image."
                  className="projectImg"
                />

                <p className="p-2 font-lato font-semibold text-center text-[#f6dcfd]">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
