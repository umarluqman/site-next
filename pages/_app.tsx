import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import "focus-visible/dist/focus-visible";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import Router from "next/router";
import SEO from "../next-seo.config";

import theme from "../src/theme";
import { AppProps } from "next/app";
import { ReactNode } from "react";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
