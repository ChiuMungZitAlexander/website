import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

import Root from "./pages/root.tsx";
import About from "./pages/about/index.tsx";
import Blogs from "./pages/blogs/index.tsx";
import Music from "./pages/music/index.tsx";
import Page404 from "./pages/404.tsx";

import "./i18n.ts";

import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        children: [
          {
            path: ":blogId",
            element: <h1>blog Id</h1>,
          },
        ],
      },
      {
        path: "music",
        element: <Music />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
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
