import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-static"; // SSG
export const revalidate = 60;          // ISR, если добавишь новые посты

export default function BlogUkPage() {
  const posts = getPosts("uk");

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-semibold">Блог</h1>

      {posts.length === 0 ? (
        <p>Поки що немає публікацій.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((p) => (
            <li key={p.slug} className="border rounded-xl p-4 hover:shadow-sm">
              <h2 className="text-xl font-medium">
                <Link href={`/uk/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              {p.excerpt && <p className="text-sm opacity-80 mt-1">{p.excerpt}</p>}
              <div className="text-xs opacity-60 mt-2">
                {p.date && new Date(p.date).toLocaleDateString("uk-UA")}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
