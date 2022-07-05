import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        data-token="EB8HA3B79SXK"
        async
        src="https://cdn.splitbee.io/sb.js"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
