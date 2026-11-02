import { createFileRoute, notFound } from "@tanstack/react-router";
import { posts } from "../data/posts";

export const Route = createFileRoute("/posts/test-{$postId}")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.id === Number(params.postId));
    if (!post) throw notFound();
    return post;
  },
  component: PostPage,
});

function PostPage() {
  const post = Route.useLoaderData();

  return (
    <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-6">
      <span className="rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-200">
        {post.tag}
      </span>
      <h1 className="mt-3 text-2xl font-bold text-white">{post.title}</h1>
      <p className="mt-1 text-sm text-neutral-500">
        {post.author} · {post.date}
      </p>
      <p className="mt-6 leading-relaxed text-neutral-300">{post.excerpt}</p>
    </article>
  );
}
