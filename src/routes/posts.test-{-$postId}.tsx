import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/test-{-$postId}")({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();

  console.log("NIGGA ==> ", postId);

  return <div>Nigger Nigger</div>;
}
