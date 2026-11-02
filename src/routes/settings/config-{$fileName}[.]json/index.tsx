import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/config-{$fileName}.json/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/config-$fileName/json/"!</div>;
}
