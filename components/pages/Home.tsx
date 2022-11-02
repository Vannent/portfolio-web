import React from "react";
import {
  pageComponentContent,
  pageComponentWrapper,
} from "../../constants/PageComponent";
import { useStateContext } from "../../context/StateContext";

const Home = () => {
  const { homeRef } = useStateContext();
  return (
    <div id="home" ref={homeRef} className={pageComponentWrapper}>
      <div className={pageComponentContent} id="pageComponentContent"></div>
    </div>
  );
};

export default Home;
