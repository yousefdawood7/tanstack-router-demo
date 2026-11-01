import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../routes";

export function IndexRoute() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexRoute,
});
