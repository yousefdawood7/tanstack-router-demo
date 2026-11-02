import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settings/settings/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/profile"!</div>;
}
