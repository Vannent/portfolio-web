import React, { createContext, useContext, useState, useRef } from "react";

interface ContextInterface {
  activeHome: boolean;
  activeAbout: boolean;
  activeProjects: boolean;
  activeResources: boolean;
  moveAbout: boolean;
  setAboutMove: any;
  moveProjects: boolean;
  setMoveProjects: any;
  toggleNav: boolean;
  SetToggleNav: any;
  aboutRef: any;
  projectsRef: any;
  contactRef: any;
  resourcesRef: any;
  homeRef: any;
  handleAboutClick: any;
  handleProjectsClick: any;
  handleResourcesClick: any;
  handleHomeClick: any;
  handleHoverAnim: any;
  showProjectOne: boolean;
  showProjectTwo: boolean;
  showProjectThree: boolean;
  showProjectFour: boolean;
  setShowProjectOne: any;
  setShowProjectTwo: any;
  setShowProjectThree: any;
  setShowProjectFour: any;
}

const Context = createContext({} as ContextInterface);

type Props = {
  children: React.ReactNode;
};

export const StateContext = ({ children }: Props) => {
  const [activeHome, SetActiveHome] = useState<boolean>(true);
  const [activeAbout, SetActiveAbout] = useState<boolean>(false);
  const [activeProjects, SetActiveProjects] = useState<boolean>(false);
  const [activeResources, SetActiveResources] = useState<boolean>(false);
  const [toggleNav, SetToggleNav] = useState<boolean>(false);
  const [moveAbout, setAboutMove] = useState<boolean>(false);
  const [moveProjects, setMoveProjects] = useState<boolean>(false);

  const [showProjectOne, setShowProjectOne] = useState(true);
  const [showProjectTwo, setShowProjectTwo] = useState(false);
  const [showProjectThree, setShowProjectThree] = useState(false);
  const [showProjectFour, setShowProjectFour] = useState(false);

  const aboutRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);
  const resourcesRef = useRef<HTMLHeadingElement>(null);
  const homeRef = useRef<HTMLHeadingElement>(null);

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    SetActiveHome(false);
    SetActiveAbout(true);
    SetActiveProjects(false);
    SetActiveResources(false);
  };

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    SetActiveHome(false);
    SetActiveAbout(false);
    SetActiveProjects(true);
    SetActiveResources(false);
  };

  const handleResourcesClick = () => {
    resourcesRef.current?.scrollIntoView({ behavior: "smooth" });
    SetActiveHome(false);
    SetActiveAbout(false);
    SetActiveProjects(false);
    SetActiveResources(true);
  };

  const handleHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
    SetActiveHome(true);
    SetActiveAbout(false);
    SetActiveProjects(false);
    SetActiveResources(false);
  };

  const handleHoverAnim = () => {
    if (moveAbout === true) {
      setAboutMove(false);
    } else if (showProjectOne === false) {
      setShowProjectOne(true);
      setShowProjectTwo(false);
      setShowProjectThree(false);
      setShowProjectFour(false);
    }
  };

  return (
    <Context.Provider
      value={{
        aboutRef,
        homeRef,
        projectsRef,
        resourcesRef,
        contactRef,
        moveAbout,
        setAboutMove,
        setMoveProjects,
        moveProjects,
        handleAboutClick,
        handleProjectsClick,
        handleResourcesClick,
        handleHomeClick,
        activeAbout,
        activeHome,
        activeProjects,
        activeResources,
        toggleNav,
        SetToggleNav,
        handleHoverAnim,
        showProjectOne,
        showProjectTwo,
        showProjectThree,
        showProjectFour,
        setShowProjectOne,
        setShowProjectTwo,
        setShowProjectThree,
        setShowProjectFour,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
