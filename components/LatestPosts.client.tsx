"use client";

type PostMeta = {
  title: string;
  date?: string;
  excerpt?: string;
  slug: string;
};

export default function LatestPostsClient({ posts }: { posts: PostMeta[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold">Останні публікації</h2>
        <a href="/uk/blog" className="text-sm underline">Усі матеріали →</a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {posts.slice(0, 3).map((p) => {
          const url = `/uk/blog/${p.slug}`;
          return (
            <a key={p.slug} href={url} className="block border rounded-xl p-4 hover:shadow-sm">
              <div className="text-xs tracking-wide opacity-60 mb-2">АНАЛІТИКА</div>
              <h3 className="text-lg font-medium leading-snug">{p.title}</h3>
              {p.excerpt && <p className="text-sm opacity-80 mt-2 line-clamp-3">{p.excerpt}</p>}
              <div className="text-xs opacity-60 mt-3">
                {p.date && new Date(p.date).toLocaleDateString("uk-UA")}
              </div>
              <span className="mt-3 inline-block text-sm underline">Читати →</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
