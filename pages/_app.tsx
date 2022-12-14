import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
