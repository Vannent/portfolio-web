import React from "react";
import Image from "next/image";
import Personal from "../../assets/per.png";
import { useStateContext } from "../../context/StateContext";

const Home = () => {
  const { homeRef } = useStateContext();
  return (
    <div
      id="home"
      ref={homeRef}
      className="flex items-center justify-center flex-shrink-0 overflow-auto"
    >
      <div className="h-full w-full pt-16 md:pt-0 mx-3 md:mx-10 lg:mx-32 xl:mx-72 flex items-center justify-center flex-col md:flex-row ">
        <div className="md:w-2/6 xl:w-2/4 w-full px-2 md:px-0 h-4/6 min-w-[300px] min-h-[300px] text-[#f6dcfd] flex  justify-center flex-col max-h-[500px]">
          <span className="h-[5px] xl:h-[10px] w-[40px] bg-[#a049b6]"></span>
          <h4 className="font-extrabold font-lato uppercase tracking-wide text-[20px] xl:leading-10 xl:text-xl">
            Hello, World! I{"'"}m
          </h4>
          <h1 className="font-bold font-oswald uppercase text-[55px] md:leading-none xl:text-6xl">
            Roberto Cedeno
          </h1>
          <h3 className="font-extrabold font-lato uppercase tracking-wider text-[35px] sm:leading-none md:leading-10 xl:leading-10 xl:text-4xl xl:tracking-wide lg:text-base">
            Software Engineer
          </h3>
          <p className="font-lato text-xl xl:text-2xl">
            {" "}
            I build and design applications for the web. I{"'"}m based in{" "}
            <b className="text-[#a049b6] font-extrabold">San Francisco, CA.</b>{" "}
            Currently focusing on growing my skills as a developer and{" "}
            <b className="text-[#a049b6] font-extrabold">gaining experience.</b>
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://www.linkedin.com/in/erobced/";
            }}
            className="rounder border-2 border-[#a049b6] h-12 xl:h-16 xl:border-4 my-5 mx-1 font-lato uppercase text-lg  xl:text-2xl font-extrabold tracking-wider"
          >
            Learn More
          </button>
        </div>
        <div className="lg:w-4/6 md:w-3/6 xl:w-2/4 min-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-4/6 md:flex items-center justify-center hidden">
          <Image src={Personal} alt="Personal Image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
