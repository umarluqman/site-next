import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/Layout";
import "focus-visible/dist/focus-visible";

import theme from "../src/theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
