import "react-calendar/dist/Calendar.css";
import "../assets/css/MiniCalendar.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  // Console log for fun
  console.log(`(っ◔◡◔)っ ♥ Headquarter ♥

Hello fellow devs! What do you want to see, huh?
Anyway, do you want to help us to improve HQ?
We're actually open source. Come check our code at https://github.com/wildangunawan/headquarter.
  
See ya at pull request section ♥`);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
