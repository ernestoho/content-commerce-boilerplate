import Head from "next/head";
import { SWRConfig } from "swr";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";

import { fetcher } from "lib/graphql";
import { screen } from "ui/screen";
import { responsive } from "ui/responsive";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background:#000;
    color: #fff;
    * {
      box-sizing: border-box;
    }
  }
`;

const theme = {
  screen,
  responsive,
  styles: {
    borderRadius: "12px",
  },
  colors: {
    primary: "#0070f3",
    productBg: "#f6f6f6",
  },
};

export default function App({ Component, pageProps }) {
  /**
   * Customise these values to match your site
   * Read more here: https://github.com/garmeeh/next-seo#default-seo-configuration
   */
  const SEOSettings = {
    // openGraph: {
    //   type: 'website',
    //   locale: locale.appLanguage,
    //   url: 'https://www.url.ie/',
    //   site_name: 'SiteName'
    // },
    // twitter: {
    //   handle: '@handle',
    //   site: '@site',
    //   cardType: 'summary_large_image'
    // }
  };

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEOSettings} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
