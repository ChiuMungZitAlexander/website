import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MantineUIProvider } from "./src/contexts/mantine";

import type { WrapRootElementBrowserArgs } from "gatsby";

import "./global.css";

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <MantineUIProvider>
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  </MantineUIProvider>
);

export const onRouteUpdate = () => {
  setTimeout(() => {
    const container = document.getElementById("loader-container");
    if (container) {
      container.style.display = "none";
    }
  }, 1000);
};
