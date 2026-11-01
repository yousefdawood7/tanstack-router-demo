import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../routes";
export function AboutRoute() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutRoute,
});
