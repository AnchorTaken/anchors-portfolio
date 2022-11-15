import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {" "}
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TFWSKL3"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <link href="https://css.gg/css" rel="stylesheet"></link> */}

        {/* <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        /> */}
      </body>
    </Html>
  );
}
