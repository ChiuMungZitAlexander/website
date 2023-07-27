import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MantineUIProvider } from "./src/contexts/mantine";

import type { WrapRootElementNodeArgs, RenderBodyArgs } from "gatsby";

const queryClient = new QueryClient();

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <MantineUIProvider>
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  </MantineUIProvider>
);

export const onRenderBody = ({
  setPreBodyComponents,
  setPostBodyComponents,
}: RenderBodyArgs) => {
  setPreBodyComponents([
    <div className="loader-container" id="loader-container" key="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>,
  ]);
  setPostBodyComponents([<script key="preloader" src="/preloader.js" />]);
};
