import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="rounded-xl border border-dashed border-neutral-700 p-10 text-center text-neutral-500">
      Select a post from the list
    </div>
  );
}
