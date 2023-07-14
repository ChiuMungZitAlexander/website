import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage, useHotkeys } from "@mantine/hooks";

import Loading from "./components/loading";

import "./i18n.ts";

import "./global.css";

const Root = lazy(() => import("./pages/root.tsx"));
const About = lazy(() => import("./pages/about"));
const Blogs = lazy(() => import("./pages/blogs"));
const Music = lazy(() => import("./pages/music"));
const Page404 = lazy(() => import("./pages/404"));

const Blog20200809 = lazy(() => import("./pages/blogs/20200809"));
const Blog20210127 = lazy(() => import("./pages/blogs/20210127"));
const Blog20210331 = lazy(() => import("./pages/blogs/20210331"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Root />
      </Suspense>
    ),
    children: [
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "blogs",
        element: (
          <Suspense fallback={<Loading />}>
            <Blogs />
          </Suspense>
        ),
      },
      {
        path: "blogs/20200809",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog20200809 />
          </Suspense>
        ),
      },
      {
        path: "blogs/20210127",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog20210127 />
          </Suspense>
        ),
      },
      {
        path: "blogs/20210331",
        element: (
          <Suspense fallback={<Loading />}>
            <Blog20210331 />
          </Suspense>
        ),
      },
      {
        path: "music",
        element: (
          <Suspense fallback={<Loading />}>
            <Music />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loading />}>
        <Page404 />
      </Suspense>
    ),
  },
]);

const App = () => {
  const { i18n } = useTranslation();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  useEffect(() => {
    switch (i18n.language) {
      case "en": {
        document.documentElement.lang = "en";
        break;
      }
      case "zh": {
        document.documentElement.lang = "zh-Hans";
        break;
      }
      default: {
        document.documentElement.lang = "en";
        break;
      }
    }
  }, [i18n.language]);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
