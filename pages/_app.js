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
        <meta name="author" content="Anchor" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#000000" />
        {/* Icons */}
        <link rel="icon" href="/logo.png" />{" "}
        <link rel="mask-icon" href="/logo.png" color="#000000" />
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* Embeds */}
        <meta property="og:title" content="Anchor - Portfolio" />
        <meta
          property="og:description"
          content="Anchor’s Portfolio. I am an aspiring front end designer. I admire beautiful things and aspire to build websites and experiences to wow people without sacrificing user experience. "
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmoxrn44i/image/upload/v1667245019/portfolio/512_bmmdy6.png"
        />
        <meta property="og:url" content="https://anchooor.wtf" />
        {/* Twitter Post */}
        <meta
          name="twitter:card"
          content="https://res.cloudinary.com/dmoxrn44i/image/upload/v1667245019/portfolio/512_bmmdy6.png"
        />
        <meta name="twitter:site" content="@anchoronai" />
        <meta name="twitter:creator" content="@anchoronai" />
        <meta name="twitter:title" content="Anchor - Portfolio" />
        <meta
          name="twitter:description"
          content="Anchor’s Portfolio. I am an aspiring front end designer. I admire beautiful things and aspire to build websites and experiences to wow people without sacrificing user experience. "
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dmoxrn44i/image/upload/v1667245019/portfolio/512_bmmdy6.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
