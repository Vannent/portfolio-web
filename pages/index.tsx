import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutCP, ContactCP, HomeCP, ProjectsCP } from "../components/pages";

const Home: NextPage = () => {
  const testFunc = () => {
    console.log("1");
  };
  return (
    <div id="content" className="h-full w-full">
      <Head>
        <title>Roberto Cedeno</title>
        <meta name="description" content="Roberto Cedeno Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeCP />
      <AboutCP />
      <ProjectsCP />
      <ContactCP />
    </div>
  );
};

export default Home;
