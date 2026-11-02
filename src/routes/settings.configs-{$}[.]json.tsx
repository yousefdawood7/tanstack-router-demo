import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/configs-{$}.json")({
  component: RouteComponent,
});

function RouteComponent() {
  const { _splat } = Route.useParams();

  return <div>File: configs-{_splat}.json</div>;
}
