import * as React from "react";

import { MantineUIProvider } from "./src/contexts/mantine";

import type { WrapRootElementNodeArgs, RenderBodyArgs } from "gatsby";

export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => (
  <MantineUIProvider>{element}</MantineUIProvider>
);

export const onRenderBody = ({
  setPreBodyComponents,
  setPostBodyComponents,
}: RenderBodyArgs) => {
  setPreBodyComponents([
    <div className="loader-container" id="loader-container" key="loader">
      <div className="loadingio-spinner-dual-ball-qis32421gx">
        <div className="ldio-ofdtqfwc82f">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>,
  ]);
  // setPostBodyComponents([<script key="preloader" src="/preloader.js" />]);
};
