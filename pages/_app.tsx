import { AppProps } from "next/app";

import CarContextProvider from "../context/CarContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarContextProvider>
      <Component {...pageProps} />
    </CarContextProvider>
  );
}

export default MyApp;
