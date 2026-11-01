import { createRootRoute } from "@tanstack/react-router";

import RootRoute from "./components/root.route";

export const rootRoute = createRootRoute({
  component: RootRoute,
});
