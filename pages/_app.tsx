import { ReactElement } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/styles/global.styles";
import { theme } from "../src/styles/Theme";
import AppContext, { ContextProvider } from "../src/AppContext";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}
export default MyApp;
