import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { posts } from "../data/posts";

export const Route = createFileRoute("/posts")({
  component: PostsLayout,
});

function PostsLayout() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 p-4 md:grid-cols-[320px_1fr]">
      <aside className="space-y-3">
        <h1 className="text-lg font-semibold text-white">Posts</h1>

        {posts.map((post) => (
          <Link
            key={post.id}
            to="/posts/test-{$postId}"
            params={(prev) => ({ ...prev, postId: String(post.id) })}
            className="block rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:border-neutral-600 hover:bg-neutral-800"
            activeProps={{ className: "border-neutral-500 bg-neutral-800" }}
          >
            <span className="rounded-full bg-neutral-700 px-2 py-0.5 text-xs text-neutral-200">
              {post.tag}
            </span>
            <h2 className="mt-2 font-medium text-white">{post.title}</h2>
            <p className="mt-1 line-clamp-2 text-sm text-neutral-400">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs text-neutral-500">
              {post.author} · {post.date}
            </p>
          </Link>
        ))}
      </aside>

      {/* The selected post appears here */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
