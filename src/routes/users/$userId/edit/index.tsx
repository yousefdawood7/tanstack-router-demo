import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId/edit/")({
  component: RouteComponent,
});

function RouteComponent() {
  const {} = Route.useParams();
  return <div>Hello "/users/edit/"!</div>;
}
