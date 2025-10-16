import Link from "next/link";
import { getPosts } from "../lib/posts";

export default function LatestPostsUk() {
  const posts = getPosts("uk").slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold">Останні публікації</h2>
        <Link href="/uk/blog" className="text-sm underline hover:opacity-80">
          Усі матеріали →
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/uk/blog/${p.slug}`}
            className="block border rounded-xl p-4 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <div className="text-xs tracking-wide opacity-60 mb-2">АНАЛІТИКА</div>
            <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
            {p.excerpt && <p className="text-sm opacity-80 mt-2 line-clamp-3">{p.excerpt}</p>}
            <div className="text-xs opacity-60 mt-3">
              {p.date && new Date(p.date).toLocaleDateString("uk-UA")}
            </div>
            <div className="mt-3 text-sm underline">Читати →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
