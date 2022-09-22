import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="{container}">
      <Head>
        <title>Roberto Cedeno</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="{main}"></main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
