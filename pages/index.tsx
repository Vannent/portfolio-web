import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { AboutCP, HomeCP, ProjectsCP, ResourcesCP } from "../components";
import About from "../components/layout/About";
import favicon from "../public/favicon.ico";

const Home: NextPage = () => {
  return (
    <div id="container">
      <Head>
        <title>Roberto Cedeno</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </Head>
      <main id="content" className="">
        <HomeCP />
        <div className="hidden md:flex">
          <About />
        </div>
        <ProjectsCP />
        <div className="hidden md:flex">
          <ResourcesCP />
        </div>
      </main>
    </div>
  );
};

export default Home;
