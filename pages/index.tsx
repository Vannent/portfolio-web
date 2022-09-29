import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutCP, HomeCP, ProjectsCP, ResourcesCP } from "../components";

const Home: NextPage = () => {
  return (
    <div id="container">
      <Head>
        <title>Roberto Cedeno</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="content" className="">
        <HomeCP />
        <AboutCP />
        <ProjectsCP />
        <div className="hidden md:flex">
          <ResourcesCP />
        </div>
      </main>
    </div>
  );
};

export default Home;
