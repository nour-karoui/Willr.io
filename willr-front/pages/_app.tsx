import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { Provider } from "react-redux";
import store from "../store/store";
import PageChange from "../components/PageChange/PageChange";

import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

export default function MyApp({ Component, pageProps }) {
  const [isPageTransitioning, setPageTransitioning] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      console.log(`Loading: ${url}`);
      setPageTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setPageTransitioning(false);
    };

    const handleRouteChangeError = () => {
      setPageTransitioning(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Willr.io</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      {isPageTransitioning && <PageChange path={Router.asPath} />}
    </React.Fragment>
  );
}
