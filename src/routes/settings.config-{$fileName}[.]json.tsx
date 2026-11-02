import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/config-{$fileName}.json")({
  component: RouteComponent,
});

function RouteComponent() {
  const { fileName } = Route.useParams();

  return <div>File: config-{fileName}.json</div>;
}
