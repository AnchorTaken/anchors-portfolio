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
      </body>
    </Html>
  );
}
