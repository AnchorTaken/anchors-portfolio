// Packages
import Head from "next/head";

// Styles
import "../styles/globals.css";
import "../styles/standarts.css";
import "../public/assets/css/animate-delay.css";
import "../public/assets/css/search.css";
import "../public/assets/css/icons.css";
import "../styles/responsive.css";

// Dev Only
import "../public/assets/css/test.css";

// Comps
import Layout from "../comps/layout/layout.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>Anchor - Portfolio</title>
        <meta name="description" content="IDK DESC OR SMTN" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
