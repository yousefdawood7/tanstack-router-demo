import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settings/settings/payment")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_settings/settings/payment"!</div>;
}
