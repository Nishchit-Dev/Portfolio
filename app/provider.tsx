"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { Poppins } from "next/font/google";
import theme from "./theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
