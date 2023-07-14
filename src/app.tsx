import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

const Root = lazy(() => import("./pages/root.tsx"));
const About = lazy(() => import("./pages/about/index.tsx"));
const Blogs = lazy(() => import("./pages/blogs/index.tsx"));
const Music = lazy(() => import("./pages/music/index.tsx"));
const Page404 = lazy(() => import("./pages/404.tsx"));
import Loading from "./components/loading/index.tsx";

import "./i18n.ts";

import "./global.css";

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
        children: [
          {
            path: ":blogId",
            element: <h1>blog Id</h1>,
          },
        ],
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
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

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
