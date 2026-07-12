import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // This site is deployed as a GitHub Pages *project* page at
    // https://zeehaancode21.github.io/wintech/ — so every route
    // needs the "/wintech" prefix. import.meta.env.BASE_URL is set
    // automatically from the `base` option in vite.config.ts, so both stay in sync.
    basepath: import.meta.env.BASE_URL,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};