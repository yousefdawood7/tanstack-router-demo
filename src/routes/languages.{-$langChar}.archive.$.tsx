import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/languages/{-$langChar}/archive/$")({
  component: RouteComponent,
});

function RouteComponent() {
  const { langChar, _splat } = Route.useParams();

  return (
    <div>
      {langChar ? <h1>Language: {langChar}</h1> : <h1>No Language</h1>}

      <div>
        <h2>Rest Params</h2>
        {_splat}
      </div>
    </div>
  );
}
