import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/on-disk/storage-{-$postId}/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const {} = Route.useParams();

  const { _splat } = Route.useParams();
  // _splat, will be value after 'storage-'
  // i.e. my-drive/documents/foo.txt
  return <div>Storage Location: /{_splat}</div>;
}
