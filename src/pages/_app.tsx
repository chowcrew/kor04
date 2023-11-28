import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import Head from "next/head";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";
import WalletProvider from "../context/walletContext";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
    AOS.init();
  }, []);
  return (
    <WalletProvider>
      <Head>
        <meta httpEquiv="Imagetoolbar" content="no" />
        <meta name="title" content="yesBswap" />
        <title>yesBswap</title>
        <meta name="description" content="yesBswap" />
        <meta property="og:title" content="yesBswap" />
        <meta property="og:description" content="yesBswap" />
      </Head>
      <Component {...pageProps} />
    </WalletProvider>
  );
}

export default appWithTranslation(MyApp);
