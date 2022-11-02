import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AppContext } from "./AppContext.interface";

const Context = createContext({} as AppContext);

export const StateContext = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [activeProject, setActiveProject] = useState("one");
  const [activePage, setActivePage] = useState(false);

  // Refs
  const projectOneRef = useRef<HTMLHeadingElement>(null);
  const projectTwoRef = useRef<HTMLHeadingElement>(null);
  const projectThreeRef = useRef<HTMLHeadingElement>(null);
  const homeRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);

  //Scroll to Refs
  const handleProjectOneClick = () => {
    projectOneRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveProject("one");
  };

  const handleProjectTwoClick = () => {
    projectTwoRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveProject("two");
  };

  const handleProjectThreeClick = () => {
    projectThreeRef.current?.scrollIntoView({ behavior: "smooth" });
    setActiveProject("three");
  };

  const handleHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        scroll,
        setScroll,
        projectOneRef,
        projectTwoRef,
        projectThreeRef,
        handleProjectOneClick,
        handleProjectTwoClick,
        handleProjectThreeClick,
        activeProject,
        homeRef,
        aboutRef,
        projectsRef,
        contactRef,
        activePage,
        setActivePage,
        handleAboutClick,
        handleProjectsClick,
        handleContactClick,
        handleHomeClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
