import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$postId_/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/posts/$postId_/edit"!</div>;
}
