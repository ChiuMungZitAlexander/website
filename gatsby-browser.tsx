import * as React from "react";

import { MantineUIProvider } from "./src/contexts/mantine";

import type { WrapRootElementBrowserArgs } from "gatsby";

import "./global.css";

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <MantineUIProvider>{element}</MantineUIProvider>
);

export const onRouteUpdate = () => {
  setTimeout(() => {
    const container = document.getElementById("loader-container");
    if (container) {
      container.style.display = "none";
    }
  }, 1000);
};
